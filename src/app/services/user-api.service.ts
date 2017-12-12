import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class User {

  username:  string;
  email:     string;
  password:  string;
  _id:       string;
  createdAt: string;
  updatedAt: string;

}

@Injectable()
export class UserApiService {

  currentUser: User;

  constructor(private httpThing: HttpClient) { }

  // POST /api/signup
  postSignup(userInfo: User) {
    return this.httpThing.post(
      `${environment.backendURL}/api/signup`,
      userInfo,
      { withCredentials: true }
    ).toPromise()
    .then((apiResults: any) => {
      this.currentUser = apiResults.userInfo;
      return apiResults;
    });
  }

  // POST /api/login
  postLogin(userInfo: User) {
    return this.httpThing.post(
      `${environment.backendURL}/api/login`,
      userInfo,
      { withCredentials: true }
    )
    .toPromise()
    .then((apiResults: any) => {
      this.currentUser = apiResults.userInfo;
      return apiResults;
    });
  }

  // DELETE /api/logout
  logout() {
      return this.httpThing.delete(
        `${environment.backendURL}/api/logout`,
        { withCredentials: true }
      )
      .toPromise()
      .then((apiResults) => {
          this.currentUser = null;
          return apiResults;
      });
  }

  // GET /api/checklogin
  getCheckLogin() {
      return this.httpThing.get(
        `${environment.backendURL}/api/checklogin`,
        { withCredentials: true }
      )
      .toPromise()
      .then((apiResults: any) => {
          this.currentUser = apiResults.userInfo;
          return apiResults;
      });
  }

}
