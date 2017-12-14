import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DocApiService } from './services/doc-api.service';
import { UserApiService } from './services/user-api.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './home-page/signup/signup.component';
import { LoginComponent } from './home-page/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { DocComponent } from './doc/doc.component';
import { DocEditComponent } from './doc-edit/doc-edit.component';
import { DocEditTitleComponent } from './doc-edit-title/doc-edit-title.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    AddDocumentComponent,
    DocComponent,
    DocEditComponent,
    DocEditTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DocApiService,
    UserApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
