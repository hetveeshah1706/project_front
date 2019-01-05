import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
faculty:string="http://localhost:3000/faculty"
  constructor(private _http:HttpClient) { }
  getAllFaculty(){
    return this._http.get(this.faculty);
  }
}
