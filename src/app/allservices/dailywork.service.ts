import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { batchstandardsubjectdaily_class } from '../allclasses/batchstandardsubjectdaily_class';
import { dailywork_class } from '../allclasses/dailywork_class';

@Injectable({
  providedIn: 'root'
})
export class DailyworkService {
  dailyworkadd:string='http://localhost:3000/dailyworkadd/';
  batch:string="http://localhost:3000/batch/"
  standard:string="http://localhost:3000/standard/"
  subject:string= "http://localhost:3000/subject/"
  alldaily:string="http://localhost:3000/alldaily/";
  updatedailywork:string="http://localhost:3000/dailyworkadd/"
  dailyAllDel:string="http://localhost:3000/dailyworkdel/"

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
  updateDaily(item:dailywork_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.updatedailywork+item.work_id,body,{headers:head1});
  }
  getDailyById(work_id:number){
    return this._http.get(this.alldaily+work_id);
  }
  deleteDaily(item:dailywork_class){
    // let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.dailyworkadd+item.work_id,{headers:head1});
  }
  deleteAllDaily(item:batchstandardsubjectdaily_class[]){
    let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.dailyAllDel,body,{headers:_abc});
  }

}
