import { Component, OnInit } from '@angular/core';
import { examresult } from 'src/app/allclasses/examresult_class';
import { ExamresultService } from 'src/app/allservices/examresult.service';
import { student } from 'src/app/allclasses/student';
import { Router } from '@angular/router';
import { examschedule } from 'src/app/allclasses/examschedule';

@Component({
  selector: 'app-addexamresult',
  templateUrl: './addexamresult.component.html',
  styleUrls: ['./addexamresult.component.css']
})
export class AddexamresultComponent implements OnInit {
  selectedstudent:student;
  selectedsubject:examresult;
  arr_student:student[]=[];
  arr_subject:examresult[]=[];
  student_id:number;
  subject_id:number;
  i:number;
  selectedexam:examresult;
  marks_obtained:number;
  total_marks:number;

  constructor(public examresultser:ExamresultService,public route:Router) { }

  onStudentChange(){
    console.log(this.selectedstudent);
    this.examresultser.getExamResult(this.selectedstudent.fk_batch_id).subscribe(
      (data:any)=>{
        this.arr_subject=data;
        console.log(this.arr_subject);
      }
    );


  }


  onSubjectChange(){
    for(this.i=0;this.i<this.arr_subject.length;this.i++){
      if(this.arr_subject[this.i].subject_name==this.selectedsubject.subject_name){

        this.selectedexam=this.arr_subject[this.i];
        console.log(this.selectedexam);
          break;

      }
    }
  }
  onAdd(){
    this.examresultser.addExamResult(new examresult(0,this.marks_obtained,this.selectedsubject.exam_id,this.selectedstudent.student_id)).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );


    console.log(this.selectedstudent.student_id);
    console.log(this.selectedsubject.exam_id);
    console.log(this.marks_obtained);

  }
  onBack(){
    this.route.navigate(['../menu/examresult']);
  }
  ngOnInit() {
    this.examresultser.getAllStudent().subscribe(
      (data:any)=>{
        this.arr_student=data;
        // this.arr_subject=data;
      }
    );

  }


}
