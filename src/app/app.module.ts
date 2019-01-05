import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import { routing } from '../../app_routing';
import { routing } from "./app_routing";
import { MatInputModule,MatFormFieldControl,MatMenuModule, MatPaginatorModule,MatProgressSpinnerModule, MatSortModule, MatCardModule,MatSelectModule,MatOptionModule, MatIconModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatNativeDateModule } from '@angular/material';
import { UpdatebatchComponent } from './batch/updatebatch/updatebatch.component';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { DailyworkaddComponent } from './dailyworkadd/dailyworkadd.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
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
import { ResultComponent } from './result/result.component';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    UpdatebatchComponent,
    AddbatchComponent,
    DailyworkaddComponent,
    MenuComponent,
    HomeComponent,
    DailyworkComponent,
    UpdatedailyComponent,
    NoticeComponent,
    AddnoticeComponent,
    UpdatenoticeComponent,
    AssignmentComponent,
    AssignmentaddComponent,
    AssignmentupdateComponent,
    ScheduleComponent,
    AddscheduleComponent,
    ResultComponent,
    AttendanceComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    routing,
    MatCheckboxModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
