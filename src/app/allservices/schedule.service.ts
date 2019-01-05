import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedule:string="http://localhost:3000/schedule"
  schedule1:string="http://localhost:3000/schedule1"

  constructor(private _http:HttpClient) { }
  getAllScheduleBatchFacultystdsubject(){
    return this._http.get(this.schedule);
  }
  getAllDate(){
    return this._http.get(this.schedule1);
  }


    addSchedule(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.schedule,body,{headers:head1});
  }
}
