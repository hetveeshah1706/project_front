export class result_class{
  constructor(public res_id:number,
    public fk_batch_id:number,
    public fk_marks_id:number,
    public fk_exam_attendance:number,
    public remarks:string,
    public grade:string,
    public total:number
    ){}
}
