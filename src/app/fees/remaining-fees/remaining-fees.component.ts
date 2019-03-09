import { Component, OnInit } from '@angular/core';
import { fees } from 'src/app/allclasses/fees';
import { FeesService } from 'src/app/allservices/fees.service';

@Component({
  selector: 'app-remaining-fees',
  templateUrl: './remaining-fees.component.html',
  styleUrls: ['./remaining-fees.component.css']
})
export class RemainingFeesComponent implements OnInit {
  arr:fees[]=[];

  constructor(private _feesservice:FeesService) { }

  ngOnInit() {
    this._feesservice.getStudentWholeRemainingFees().subscribe(
    (data:any)=>{
      this.arr=data;
      console.log(this.arr);
    }
    )
  }

}
