import { Routes, RouterModule } from '@angular/router';
import { BatchComponent } from './batch/batch.component';
import { UpdatebatchComponent } from './batch/updatebatch/updatebatch.component';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { HomeComponent } from './home/home.component';
import { DailyworkaddComponent } from './dailyworkadd/dailyworkadd.component';
import { DailyworkComponent } from './dailywork/dailywork.component';
import { UpdatedailyComponent } from './dailywork/updatedaily/updatedaily.component';
import { NoticeComponent } from './notice/notice.component';
import { AddnoticeComponent } from './notice/addnotice/addnotice.component';
import { UpdatenoticeComponent } from './notice/updatenotice/updatenotice.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentaddComponent } from './assignment/assignmentadd/assignmentadd.component';
import { AssignmentupdateComponent } from './assignment/assignmentupdate/assignmentupdate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddscheduleComponent } from './schedule/addschedule/addschedule.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UpdatescheduleComponent } from './schedule/updateschedule/updateschedule.component';
import { AddattendanceComponent } from './attendance/addattendance/addattendance.component';
import { FeesComponent } from './fees/fees.component';
import { FeespaidComponent } from './fees/feespaid/feespaid.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';


const arr: Routes = [
{path: '', component: BatchComponent},
{path: 'batch', component: BatchComponent},
{path: 'updatebatch/:batch_id', component: UpdatebatchComponent},
{path:'addbatch',component:AddbatchComponent},
{path:'dailywork',component:DailyworkaddComponent},
{path:'alldaily',component:DailyworkComponent},
{path:'updatedaily/:work_id',component:UpdatedailyComponent},
{path:'notice',component:NoticeComponent},
{path:'addnotice',component:AddnoticeComponent},
{path:'updatenotice/:notice_id',component:UpdatenoticeComponent},
{path:'assignment',component:AssignmentComponent},
{path:'assignmentadd',component:AssignmentaddComponent},
{path:'updateassignment/:assignment_id',component:AssignmentupdateComponent},
{path:'schedule',component:ScheduleComponent},
{path:'addschedule',component:AddscheduleComponent},
{path:'attendance',component:AttendanceComponent},
{path:'updateschedule/:schedule_id',component:UpdatescheduleComponent},
{path:'addattendance',component:AddattendanceComponent},
{path:'fees',component:FeesComponent},
{path:'feespaid',component:FeespaidComponent},
{path:'student',component:StudentComponent},
{path:'addstudent',component:AddstudentComponent},
{path:'updatestudent/:student_id',component:UpdatestudentComponent},
];
export const routing = RouterModule.forRoot(arr);
