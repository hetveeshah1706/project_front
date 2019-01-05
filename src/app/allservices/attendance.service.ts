import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attendance:string="http://localhost:3000/attendance/"

  constructor(private _http:HttpClient) { }
  getAttendanceByBatch(batch_id){
    return this._http.get(this.attendance+batch_id);
  }
  getAttendanceByNameBatchStandard(){
    return this._http.get(this.attendance)
  }
}
