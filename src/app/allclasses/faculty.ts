export class faculty{
  constructor(public faculty_id:string,

    public password:string,
    public faculty_name?:string,
    public fk_batch_id?:number,
    public fk_standard_id?:number,
    public fk_subject_id?:number

    ){}
}
