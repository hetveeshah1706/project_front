import { Component, OnInit } from '@angular/core';
import { FeesService } from '../allservices/fees.service';
import { fees } from '../allclasses/fees';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  constructor(private _ser1:FeesService,private _route:Router) { }
  arrfees:fees[]=[];
  displayedColumns: string[] = ['select','student_name','batch_name', 'total_fees','action'];
  dataSource = new MatTableDataSource();
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onFeesPaid(){
    this._route.navigate(['/feespaid']);
  }

  ngOnInit() {
    this._ser1.getAllStudentFees().subscribe(
      (data:fees[])=>{
        this.arrfees=data;
        console.log(this.arrfees);
        this.dataSource.data=this.arrfees;
      }
    )

  }


}
