import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
  fees_remaining:string="http://localhost:3000/fees/";
  whole_remaining:string="http://localhost:3000/wholefees/"
  getStudentFees:string="http://localhost:3000/getfees/"


  constructor(private _http:HttpClient) { }
  getStudentRemaingFees(){
    return this._http.get(this.fees_remaining);
  }

  getStudentWholeRemainingFees(){
    return this._http.get(this.whole_remaining);
  }

  getAllStudentFees(){
    return this._http.get(this.getStudentFees);
  }

}
