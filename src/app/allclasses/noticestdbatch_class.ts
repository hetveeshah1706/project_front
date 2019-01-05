export class noticestdbatch{
  constructor(
    public notice_name:string,
    public notice_desc:string,
    public fk_standard_id:number,
    public fk_batch_id:number,
    public standard_id:number,
    public standard_no:number,
    public batch_id:number,
    public batch_name: string,
    public notice_date?:Date,
    public notice_id?:number

  ){

  }
}
