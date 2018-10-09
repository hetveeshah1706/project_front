import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { batchstandardsubjectdaily_class } from "../allclasses/batchstandardsubjectdaily_class"
import { DailyworkService } from '../allservices/dailywork.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dailywork',
  templateUrl: './dailywork.component.html',
  styleUrls: ['./dailywork.component.css']
})
export class DailyworkComponent implements OnInit {

  constructor(private _ser:DailyworkService,private _route:Router) { }
  merge_arr:batchstandardsubjectdaily_class[]=[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['select','title','image', 'standard_no','subject_name','batch_name'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    this._route.navigate(['/dailywork']);
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
