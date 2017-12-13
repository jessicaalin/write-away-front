import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './home-page/signup/signup.component';
import { LoginComponent } from './home-page/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddDocumentComponent } from './add-document/add-document.component';

const routes: Routes = [
  { path: '',           component: HomePageComponent },
  // { path: 'signup',     component: SignupComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  // { path: 'new',        component: AddDocumentComponent },
  { path: '**',         component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
