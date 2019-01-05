export class attendance {
  constructor(
    public attendance_id:number,
    public attendance_status: string,
    public date: Date,
    public fk_student_id:number,
    public fk_batch_id:number,
    public fk_standard_id:number,
    public fk_faculty_id:number
  ) {}
}
