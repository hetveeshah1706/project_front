import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DailyworkService {
  dailyworkadd:string='http://localhost:3000/dailyworkadd/';
  batch:string="http://localhost:3000/batch/"
  standard:string="http://localhost:3000/standard/"
  subject:string= "http://localhost:3000/subject/"
  alldaily:string="http://localhost:3000/alldaily";


  constructor(private _http:HttpClient) { }
  dailywork(item:FormData){
    return this._http.post(this.dailyworkadd,item)
  }
  getAllBatch(){
    return this._http.get(this.batch)
  }
  getAllStandard(){
    return this._http.get(this.standard)
  }
  getAllSubject(){
    return this._http.get(this.subject)
  }
  getbatchbystandardID(standard_id){
    return this._http.get(this.dailyworkadd+standard_id);
  }
  getBatchStandardSubjectonDailyWork(){
    return this._http.get(this.alldaily);
  }

}
