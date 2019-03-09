import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeesService } from 'src/app/allservices/fees.service';
import { fees_detail } from 'src/app/allclasses/fees_detail';

@Component({
  selector: 'app-feesdetail',
  templateUrl: './feesdetail.component.html',
  styleUrls: ['./feesdetail.component.css']
})
export class FeesdetailComponent implements OnInit {
fk_student_fees_id:number;
date:Date;
amount:number
arr:fees_detail[]=[];
  constructor(private _actroutes:ActivatedRoute,private _feesservice:FeesService) { }

  ngOnInit() {
    this.fk_student_fees_id=this._actroutes.snapshot.params['fk_student_fees_id'];
    this._feesservice.getFeesDetail(this.fk_student_fees_id).subscribe(
      (data:any)=>{
        this.arr=data;
      }
    )

  }

}
