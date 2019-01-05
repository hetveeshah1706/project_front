export class assignment{
  constructor(
    public assignment_id:number,
    public image:string,
    public fk_standard_id:number,
    public fk_subject_id:number,
    public fk_batch_id:number,
    public title:string,


  ){

  }
}
