import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserApiService, User } from '../../services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  theUser = new User();

  constructor(
    private userThing: UserApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {
  }

  startLoginAjax() {
    this.userThing.postLogin(this.theUser)
      .then(() => {
        this.routerThing.navigate(['/phones']);
      })
      .catch((err) => {
        console.log('Log in error.');
        console.log(err);
      })
  }

}
