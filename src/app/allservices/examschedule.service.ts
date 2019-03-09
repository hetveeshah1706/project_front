import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { examschedule } from '../allclasses/examschedule';

@Injectable({
  providedIn: 'root'
})
export class ExamscheduleService {
  public exam_schedule_url:string='http://localhost:3000/examschedule/';
  public exam_schedule_mergedata_url:string='http://localhost:3000/exam_schedule_mergedata/';

  constructor(public _http:HttpClient) { }
  getAllExamSchedule(){
    return this._http.get(this.exam_schedule_url)
  }
  getAllExamSchedulebyID(exam_id){
    return this._http.get(this.exam_schedule_url+exam_id);
  }
  getBatchStdSubjectExam(){
    return this._http.get(this.exam_schedule_mergedata_url)
  }
  addExamSchedule(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.exam_schedule_url,body,{headers:head1});
  }
  deleteExamSchedule(item:examschedule){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.exam_schedule_url+item.exam_id,{headers:head1});
  }
  updateExamSchedule(item:examschedule){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.exam_schedule_url+item.exam_id,body,{headers:head1});
  }

  }
