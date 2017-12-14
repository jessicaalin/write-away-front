import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  signupConfig: any = {
    isVisible: false
  }

  loginConfig: any = {
    isVisible: false
  }

  constructor() { }

  ngOnInit() {
  }

  toggleSignup() {
    if (this.signupConfig.isVisible) {
      this.signupConfig.isVisible = false;
    }
    else {
      this.signupConfig.isVisible = true;
    }
  }

  toggleLogin() {
    if (this.loginConfig.isVisible) {
      this.loginConfig.isVisible = false;
    }
    else {
      this.loginConfig.isVisible = true;
    }
  }



}
