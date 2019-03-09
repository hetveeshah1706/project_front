export class examschedule{
  constructor(
    public exam_id:number,
    public fk_batch_id:number,
    public fk_standard_id:number,
    public fk_subject_id:number,
    public exam_date:Date,
    public marks:number,
    public hours:number,
    public batch_name?:string,
    public standard_no?:number,
    public subject_name?:string
  )
  {}
}
