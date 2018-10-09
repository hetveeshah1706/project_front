import { Routes, RouterModule } from '@angular/router';
import { BatchComponent } from './batch/batch.component';
import { UpdatebatchComponent } from './batch/updatebatch/updatebatch.component';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { HomeComponent } from './home/home.component';
import { DailyworkaddComponent } from './dailyworkadd/dailyworkadd.component';
import { DailyworkComponent } from './dailywork/dailywork.component';


const arr: Routes = [
{path: 'batch', component: BatchComponent},
{path: 'updatebatch/:batch_id', component: UpdatebatchComponent},
{path:'addbatch',component:AddbatchComponent},
{path:'dailywork',component:DailyworkaddComponent},
{path:'alldaily',component:DailyworkComponent}
];
export const routing = RouterModule.forRoot(arr);
