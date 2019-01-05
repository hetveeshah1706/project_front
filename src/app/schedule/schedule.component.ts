import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../allservices/schedule.service';
import { Router } from '@angular/router';
import { batch_std_sub_fac_schedule } from '../allclasses/batch_std_sub_fac_schedule';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  constructor(private _ser:ScheduleService,private _route:Router) { }
  today: number = Date.now();
  merge_arr:batch_std_sub_fac_schedule[]=[]
  del_arr:batch_std_sub_fac_schedule[]=[];
  i:number;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['select','timings','subject_name','standard_no','batch_name','faculty_name','schedule_date','action'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    this._route.navigate(['/addschedule']);
  }


  ngOnInit() {
    this._ser.getAllScheduleBatchFacultystdsubject().subscribe(
      (data:any)=>{
        console.log(data);
        this.merge_arr=data;
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    )
  }

}
