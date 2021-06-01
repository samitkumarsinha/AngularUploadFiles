import { UploadComponent } from './upload/upload.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'list', component: ListComponent},
  {path:'create', component: CreateComponent},
  {path:'upload', component: UploadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
