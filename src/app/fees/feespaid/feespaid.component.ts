import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fees } from 'src/app/allclasses/fees';
import { FeesService } from 'src/app/allservices/fees.service';

@Component({
  selector: 'app-feespaid',
  templateUrl: './feespaid.component.html',
  styleUrls: ['./feespaid.component.css']
})
export class FeespaidComponent implements OnInit {
  arr:fees[]=[];

  constructor(private _ser1:FeesService) { }


  ngOnInit() {
    this._ser1.getStudentRemaingFees().subscribe(
      (data:any)=>{
        this.arr=data;
        console.log(data);

      }
    )
  }

}
