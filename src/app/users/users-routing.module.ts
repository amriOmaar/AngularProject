import { ListUserComponent } from './list-user/list-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent, children : [
  { path: 'list', component: ListUserComponent },
  { path: 'new', component: FormUserComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
