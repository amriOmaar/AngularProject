import { FormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    UsersComponent,
    ListUserComponent,
    FormUserComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
