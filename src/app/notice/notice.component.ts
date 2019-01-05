import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticeserviceService } from '../allservices/noticeservice.service';
import { notice } from '../allclasses/notice_class';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { noticestdbatch } from '../allclasses/noticestdbatch_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NoticeComponent implements OnInit {
  arrnotice:noticestdbatch[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  i:number;
  delarr:noticestdbatch[]=[];
  displayedColumns: string[] = ['select','notice_date', 'notice_name','standard_no','batch_name','action'];
  selection = new SelectionModel(true, []);

  dataSource = new MatTableDataSource();
  expandedElement=this.dataSource;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    this._route.navigate(['/addnotice']);

  }
  onUpdate(item){
    this._route.navigate(['/updatenotice',item.notice_id])

  }
  onDel(item)
  {
    this._ser.deleteNotice(item).subscribe(
      (data:any)=>{
        this.arrnotice.splice(this.arrnotice.indexOf(item),1);
        console.log(this.arrnotice);
        this.dataSource.data=this.arrnotice;
      }
    );

  }
  onCheckChange(item:noticestdbatch){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item)
    }
    console.log(this.delarr);
  }


  onDelete(){

    this._ser.deleteAllNotice(this.delarr).subscribe(
      (data:any)=>{
        console.log(data);
        for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.arrnotice.find(x=>x==this.arrnotice[this.i])){
            this.arrnotice.splice(this.arrnotice.indexOf(this.arrnotice[this.i]),1)
          }
        }
        this.dataSource.data=this.arrnotice;
      }
    );

  }

  constructor(public _ser:NoticeserviceService,public _route:Router) { }


  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._ser.getNoticeStandardBatch().subscribe(
      (data:any)=>{
        console.log(data);
        this.arrnotice=data;
        this.dataSource.data=this.arrnotice;
      }
    );
  }

}
