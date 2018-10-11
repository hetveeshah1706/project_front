export class dailywork_class{
  constructor(
    public work_id:number,
    public image:string,
    public fk_standard_id:number,
    public fk_subject_id:number,
    public fk_batch_id:number,
    public title:string,


  ){

  }
}
