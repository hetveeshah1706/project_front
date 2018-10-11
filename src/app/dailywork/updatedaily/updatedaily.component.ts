import { Component, OnInit } from '@angular/core';
import { DailyworkService } from '../../allservices/dailywork.service';
import { dailywork_class } from '../../allclasses/dailywork_class';
import { batch_class } from '../../allclasses/batch_class';
import { subject_class } from '../../allclasses/subject_class';
import { BatchServiceService } from '../../allservices/batch-service.service';
import { ActivatedRoute } from '@angular/router';
import { batchstandardsubjectdaily_class } from '../../allclasses/batchstandardsubjectdaily_class';
import { standard_class } from '../../allclasses/standard_class';

@Component({
  selector: 'app-updatedaily',
  templateUrl: './updatedaily.component.html',
  styleUrls: ['./updatedaily.component.css']
})
export class UpdatedailyComponent implements OnInit {
  title:string;
  work_id:number;
  fk_standard_id:number;
  fk_subject_id:number;
  fk_batch_id:number;
  image:string;
  arrbatch:batch_class[]=[];
  arrstandard:standard_class[]=[];
  arrsubject:subject_class[]=[];

  onUpdate(){
    console.log(this.work_id,this.fk_standard_id);
    this._ser.updateDaily(new dailywork_class(this.work_id,this.image,this.fk_standard_id,this.fk_subject_id,this.fk_batch_id,this.title)).subscribe(

      (data:any)=>{
        console.log(this.work_id,this.fk_standard_id);
        console.log(data);
        // this._route.navigate(['/']);
      }
    )

  }

  constructor(private _ser:DailyworkService,private _ser1:BatchServiceService,public _actroute:ActivatedRoute) { }

  ngOnInit() {
    this.work_id=this._actroute.snapshot.params['work_id'];
    this._ser.getDailyById(this.work_id).subscribe(
      (data:batchstandardsubjectdaily_class[])=>{
        console.log('hi')
        this.title=data[0].title;
        // console.log(this.batch_name);
        this.fk_standard_id=data[0].fk_standard_id;

        this.fk_subject_id=data[0].fk_subject_id;
        console.log(this.fk_subject_id);
        this.fk_batch_id=data[0].fk_batch_id;
        console.log(this.fk_batch_id);

      }
    )
    this._ser1.getAllStandard().subscribe(
      (data:any)=>{
        this.arrstandard=data;
      }
    )
    this._ser.getAllSubject().subscribe(
      (data:any)=>{
        this.arrsubject=data;
      }
    )
    this._ser1.getAllBatch().subscribe(
      (data:any)=>{
        this.arrbatch=data;

      }
    )

  }

}
