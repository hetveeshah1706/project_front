import { Component, OnInit } from '@angular/core';
import { batch_atten_stu_standard } from 'src/app/allclasses/batch_atten_stu_standard';
import { AttendanceService } from 'src/app/allservices/attendance.service';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { attendance_status } from 'src/app/allclasses/attendace_status';
import { attendance } from 'src/app/allclasses/attendance';

export class att
{
  constructor(public student_id:number[]){}
}
@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.css']
})
export class AddattendanceComponent implements OnInit {
  mergearr:batch_atten_stu_standard[]=[];
  arr:batch_atten_stu_standard[]=[];
  arr2:batch_atten_stu_standard[]=[];
  abs_no:number[]=[];
  g1:string='present';
  attendance_date:Date;
  arr1:attendance_status[]=[];
  present:"present";
  c1:"present";
  attendancearr:attendance[]=[];
  dat1:Date=new Date();
  onCheckChange(item:batch_atten_stu_standard){
    if(this.arr2.find(x=>x==item)){
      this.arr2.splice(this.arr2.indexOf(item),1);
      this.abs_no.splice(this.abs_no.indexOf(item.fk_student_id),1);
    }
    else{
      this.arr2.push(item);
      this.abs_no.push(item.student_id);
    }
    console.log(item);
    console.log(this.abs_no);
  }

  onclickupdate()
  {
    this._ser1.updateAttendance(new att(this.abs_no)).subscribe(
      (data:any)=>
      {
        console.log(data);
      }
    );

  }

  onBatchChange(batch_id){
    this._ser1.getAddAttendance(batch_id).subscribe(
      (data:any)=>{
        this.arr=data;
        console.log(data);
        console.log(this.arr);

        for(let i=0;i<this.arr.length;i++){
          this.attendancearr.push(new attendance(0,"present",this.dat1,data[i].student_id,data[i].fk_batch_id,data[i].fk_standard_id,data[i].fk_faculty_id));
        }
        this._ser1.addAttendance(this.attendancearr).subscribe(
          (data:any)=>{
            console.log(data);
          }
        );
        console.log(this.attendancearr);
      }
    )
    }


  constructor(private _ser1:AttendanceService,private _ser2:BatchServiceService) { }


  ngOnInit() {
    this._ser2.getAllBatch().subscribe(
      (data:any)=>{
        this.mergearr=data;
      }
    );

  }


}
