export class notice{
  constructor(
    public notice_name:string,
    public notice_desc:string,
    public fk_standard_id:number,
    public fk_batch_id:number,
    public notice_id?:number,
    public notice_date?:Date,
    ){


  }
}
