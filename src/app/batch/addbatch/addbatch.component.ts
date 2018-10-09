import { Component, OnInit } from '@angular/core';
import { batchstandard_class } from '../../allclasses/batchstandard_class';
import { BatchServiceService } from '../../allservices/batch-service.service';
import { batch_class } from '../../allclasses/batch_class';
import { add_batch } from '../../allclasses/add_batch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit {
  batch_name:string;
  batch_id:number;
  fk_standard_id:number;
  arr:batch_class[]=[];
  arr1:batchstandard_class[]=[];
  selected:batchstandard_class;
  standard_id:number;
  standard_no:number;
  arr2:add_batch[]=[];

  constructor(private _ser:BatchServiceService,private _route:Router) { }
  onAdd()
  {
  // const fd=new FormData();

  //   fd.append('batch_name',this.batch_name);
  //   //fd.append('dish_price',this.dish_price.toString());
  //  // fd.append('image',this.selectedFile,this.selectedFile.name);

  //   fd.append('fk_standard_id',this.selected.standard_id.toString());

  //   console.log(fd);
    this._ser.addBatch(new add_batch(this.batch_name,this.selected.standard_id)).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr2.push(new add_batch(this.batch_name,this.selected.standard_id));
        this._route.navigate(['/']);

      }

    );




     }

  ngOnInit() {
    this._ser.getAllStandard().subscribe(
      (data:any)=>{
        this.arr1=data;
      }
    );
  }

}
