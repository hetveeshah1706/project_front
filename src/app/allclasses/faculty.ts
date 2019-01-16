export class faculty{
  constructor(public faculty_id:number,
    public faculty_name:string,
    public password:string,
    public fk_batch_id:number,
    public fk_standard_id:number,
    public fk_subject_id:number

    ){}
}
