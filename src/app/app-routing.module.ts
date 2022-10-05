import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { Routes, RouterModule } from '@angular/router';

const ROUTES:Routes  = [
  {path: 'product', component: ListProductComponent},
  {path: 'index', redirectTo: 'home', pathMatch: 'full'},
  {path: 'user', component: ListUserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}

]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
