export class batch_std_sub_fac_schedule{
  constructor(
    public standard_id:number,
    public standard_no:number,
    public batch_id:number,
    public batch_name: string,
    public fk_standard_id: number,
    public subject_id:number,
    public subject_name:string,
    public faculty_id:number,
    public faculty_name:string,
    public fk_batch_id:number,
    public fk_subject_id:number,
    public schedule_id:number,
    public timings:string,
    public fk_faculty_id:number,
    public password:string,
    public schedule_date:Date,


  ){

  }
}
