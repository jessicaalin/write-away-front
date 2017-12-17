import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent }    from './home-page/home-page.component';
import { SignupComponent }      from './home-page/signup/signup.component';
import { LoginComponent }       from './home-page/login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AddDocumentComponent } from './dashboard/add-document/add-document.component';
import { DocEditComponent }     from './doc-edit/doc-edit.component';
import { DocEditTitleComponent} from './doc-edit-title/doc-edit-title.component';
import { NotFoundComponent }    from './not-found/not-found.component';

const routes: Routes = [
  { path: '',                   component: HomePageComponent },
  { path: 'signup',             component: SignupComponent },
  { path: 'login',              component: LoginComponent },
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'doc/new',            component: AddDocumentComponent },
  { path: 'doc/edit/title/:id', component: DocEditTitleComponent},
  { path: 'doc/edit/text/:id',  component: DocEditComponent },
  { path: '**',                 component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
