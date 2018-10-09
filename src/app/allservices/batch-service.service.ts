import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { batch_class } from '../allclasses/batch_class';
import { batchstandard_class } from '../allclasses/batchstandard_class';

@Injectable({
  providedIn: 'root'
})
export class BatchServiceService {
  batch:string='http://localhost:3000/batch/';
  batch_standard:string='http://localhost:3000/batch_standard/';
  standard:string='http://localhost:3000/standard/';
  getAllBatch(){
    return this._http.get(this.batch);
  }
  getAllStandard(){
    return this._http.get(this.standard);
  }
  getBatchById(batch_id:number){
    return this._http.get(this.batch+batch_id);
  }
  getBatchByStandard(){
    return this._http.get(this.batch_standard);
  }
  addBatch(item){
     let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.batch,body,{headers:head1});
  }
  updateBatch(item:batch_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.batch+item.batch_id,body,{headers:head1});
  }
  deleteBatch(item:batch_class){
    // let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.batch+item.batch_id,{headers:head1});
  }
  deleteAllBatch(item:batch_class[]){
    let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.batch_standard,body,{headers:_abc});
  }
  constructor(public _http:HttpClient) { }
}
