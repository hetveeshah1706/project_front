import { Component, OnInit } from '@angular/core';
import { batch_atten_stu_standard } from '../allclasses/batch_atten_stu_standard';
import { AttendanceService } from '../allservices/attendance.service';
import { BatchServiceService } from '../allservices/batch-service.service';
import { batch_class } from '../allclasses/batch_class';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

mergearr:batch_atten_stu_standard[]=[];
selected_batch:batch_atten_stu_standard;
arr:batch_class[]=[];
  constructor(private _ser1:AttendanceService,private _ser2:BatchServiceService) { }
onBatchChange(){
  this._ser1.getAttendanceByBatch(this.selected_batch).subscribe(
    (data:batch_class[])=>{
      this.arr=data;
      console.log(data);
    }
  );
}
  ngOnInit() {
    this._ser2.getAllBatch().subscribe(
      (data:any)=>{
        this.mergearr=data;
      }
    );

  }

}
