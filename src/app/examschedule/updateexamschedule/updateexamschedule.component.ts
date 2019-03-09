import { Component, OnInit } from '@angular/core';
import { examschedule } from 'src/app/allclasses/examschedule';
import { standard_class } from 'src/app/allclasses/standard_class';
import { batch_class } from 'src/app/allclasses/batch_class';
import { subject_class } from 'src/app/allclasses/subject_class';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamscheduleService } from 'src/app/allservices/examschedule.service';
import { DailyworkService } from 'src/app/allservices/dailywork.service';

@Component({
  selector: 'app-updateexamschedule',
  templateUrl: './updateexamschedule.component.html',
  styleUrls: ['./updateexamschedule.component.css']
})
export class UpdateexamscheduleComponent implements OnInit {
  exam_schedule_arr:examschedule[]=[];
  exam_date:Date;
  selectedstandard:number;
  arr_standard:standard_class[];
  selectedsubject:number;
  arr_subject:subject_class[]=[];
  arr_batch:batch_class[]=[];
  arr_batchchange:batch_class[]=[];
  selected_batch:batch_class;
  exam_schedule_id:number;
  fk_subject_id:number;
  fk_standard_id:number;
  fk_batch_id:number;
  marks:number;
  hours:number;
  date1:Date;
  date2:Date;
  exam_id:number;

  constructor(public _actroute:ActivatedRoute,public examscheduleservice:ExamscheduleService,public _route:Router,public dailyworkservice:DailyworkService) { }
  onBack(){
    this._route.navigate(['../menu/examschedule']);
  }
  onUpdate(){
    this.examscheduleservice.updateExamSchedule(new examschedule(this.exam_id,this.fk_batch_id,this.fk_standard_id,this.fk_subject_id,this.exam_date,this.marks,this.hours)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/examschedule']);
      }
    );
  }
  ngOnInit() {
      this.exam_id=this._actroute.snapshot.params['exam_id'];
      this.examscheduleservice.getAllExamSchedulebyID(this.exam_id).subscribe(
        (data:examschedule)=>{
          console.log(data);
          this.fk_batch_id=data[0].fk_batch_id;
          this.fk_standard_id=data[0].fk_standard_id;
          this.fk_subject_id=data[0].fk_subject_id;
          this.exam_date=data[0].exam_date;
          this.marks=data[0].marks;
          this.hours=data[0].hours;
        }
      );
      this.dailyworkservice.getAllBatch().subscribe(
        (data:any)=>{
          this.arr_batch=data;
        }

      );
      this.dailyworkservice.getAllStandard().subscribe(
        (data:any)=>{
          this.arr_standard=data;
        }

      );
      this.dailyworkservice.getAllSubject().subscribe(
        (data:any)=>{
          this.arr_subject=data;
        }
      );
  }

}
