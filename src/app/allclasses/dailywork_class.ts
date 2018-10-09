export class dailywork_class{
  constructor(
    public fk_standard_id:number,
    public fk_subject_id:number,
    public fk_batch_id:number,

    public title:string,
    public image:string

  ){

  }
}
