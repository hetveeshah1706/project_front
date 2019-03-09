import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fees } from '../allclasses/fees';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
  fees_remaining:string="http://localhost:3000/fees/";
  admin_fees_remaining:string="http://localhost:3000/admin_fees/";
  whole_remaining:string="http://localhost:3000/wholefees/"
  getStudentFees:string="http://localhost:3000/getfees/";
  detail:string="http://localhost:3000/feesdetail/"


  constructor(private _http:HttpClient) { }
  getStudentRemaingFees(id){
    return this._http.get(this.admin_fees_remaining+id);
  }

  getStudentWholeRemainingFees(){
    return this._http.get(this.whole_remaining);
  }

  getAllStudentFees(){
    return this._http.get(this.getStudentFees);
  }
  getStudentfeesidByStudentid(fk_student_id:number){
    return this._http.get(this.fees_remaining+fk_student_id);
  }
  addFees(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   return this._http.post(this.fees_remaining,body,{headers:head1});
 }
 getFeesDetail(fk_student_fees_id:number){
   return this._http.get(this.detail+fk_student_fees_id);
 }

}
