export class examresult{
  constructor(
    public result_id:number,
    public marks_obtained:number,
    public fk_exam_id:number,
    public fk_student_id:number,
    public student_name?:string,
    public exam_id?:number,
    public fk_batch_id?:number,
    public fk_standard_id?:number,
    public fk_subject_id?:number,
    public exam_date?:Date,
    public marks?:number,
    public hours?:number,
    public student_id?:number,
    public subject_id?:number,
    public subject_name?:string
  ){}
}
