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
{path:'attendance',component:AttendanceComponent}
];
export const routing = RouterModule.forRoot(arr);
