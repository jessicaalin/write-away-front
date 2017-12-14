import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Write Away';

  constructor (
    private userThing: UserApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.userThing.getCheckLogin()
      .catch((err) => {
        console.log("Check Login Error.");
        console.log(err);
      });
    }

  startLogOutAjax() {
    this.userThing.logout()
    .then(() => {
      this.routerThing.navigate(['/']);
    })
    .catch((err) => {
      console.log("Log Out Error");
      console.log(err);
    });
  }
}
