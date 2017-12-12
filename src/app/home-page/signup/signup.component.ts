import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserApiService, User } from '../../services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  theUser = new User();

  constructor(
    private userThing: UserApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {
  }

  startSignupAjax() {
    this.userThing.postSignup(this.theUser)
      .then(() => {
        this.routerThing.navigate(['/phones']);
      })
      .catch((err) => {
        console.log('Sign up error.');
        console.log(err);
      });
  }

}
