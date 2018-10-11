import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { batchstandardsubjectdaily_class } from "../allclasses/batchstandardsubjectdaily_class"
import { DailyworkService } from '../allservices/dailywork.service';
import { Router } from '@angular/router';
import { dailywork_class } from '../allclasses/dailywork_class';

@Component({
  selector: 'app-dailywork',
  templateUrl: './dailywork.component.html',
  styleUrls: ['./dailywork.component.css']
})
export class DailyworkComponent implements OnInit {

  constructor(private _ser:DailyworkService,private _route:Router) { }
  merge_arr:batchstandardsubjectdaily_class[]=[];
  del_arr:batchstandardsubjectdaily_class[]=[];
  i:number;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['select','title','image', 'standard_no','subject_name','batch_name','action'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    this._route.navigate(['/dailywork']);
  }
  onUpdate(item){
    this._route.navigate(['/updatedaily',item.work_id])

  }
  onDel(item)
  {

    this._ser.deleteDaily(item).subscribe(
      (data:any)=>{
        //console.log(data);
        this.merge_arr.splice(this.merge_arr.indexOf(item),1);
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    );



  }
  onCheckChange(item:batchstandardsubjectdaily_class){
    if(this.del_arr.find(x=>x==item)){
      this.del_arr.splice(this.del_arr.indexOf(item),1);
    }
    else{
      this.del_arr.push(item)
    }
    console.log(this.del_arr);
  }

  onDelete(){

    this._ser.deleteAllDaily(this.del_arr).subscribe(
      (data:any)=>{
        console.log(data);
        for(this.i=0;this.i<this.del_arr.length;this.i++){
          if(this.merge_arr.find(x=>x==this.del_arr[this.i])){
            this.merge_arr.splice(this.merge_arr.indexOf(this.del_arr[this.i]),1)
          }
        }
        this.dataSource.data=this.merge_arr ;
      }
    );
  }

  ngOnInit() {
    this._ser.getBatchStandardSubjectonDailyWork().subscribe(
      (data:any)=>{
        this.merge_arr=data;
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    )


  }

}
