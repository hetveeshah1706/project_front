export class batch_atten_stu_standard{
  constructor(

   public student_password:string,
   public student_name:string,
   public date_of_birth:Date,
   public joining_date:Date ,
   public total_fees:number ,
   public paid_fees:number,
   public remaining_fees:number,
   public fk_marks_id:number,
   public present_days:number,
   public fk_batch_id :number,
   public fk_standard_id :number,
   public attendance_id:number,
    public attendance_status: string,
    public attendance_date: Date,
    public fk_student_id:number,
    public fk_faculty_id:number,
    public batch_id:number,
    public batch_name: string,
    public standard_id:number,
    public standard_no:number,
    public student_id:number




  ){

  }
}
