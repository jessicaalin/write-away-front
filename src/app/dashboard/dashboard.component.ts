import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';
import { UserApiService } from '../services/user-api.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  docs: Doc[] = [];

  constructor(
    private docThing: DocApiService,
    private userThing: UserApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {

    this.userThing.getCheckLogin()
      .catch((err) => {
        console.log("Check Login Error.");
        console.log(err);
      })

    this.docThing.getDocs()
      .then((docResults: Doc[]) => {
        console.log("Doc List API");
        console.log(docResults);
        this.docs = docResults;
      })
      .catch((err) => {
        console.log("Doc List API Error.");
        console.log(err);
      });
  }

  startDeleteAjax(id: string) {
    // if (!confirm('Are you sure?')) {
    //   return;
    // }
    this.docThing.deleteOneDoc(id)
      .then(() => {
        console.log('Delete successful.');
      })
      .catch((err) => {
        console.log('Delete error.');
        console.log(err);
      })
  }

  removeDoc(oneDoc) {
    this.docs.splice(this.docs.indexOf(oneDoc), 1);
  }

  startLogOutAjax() {
    this.userThing.logout()
    .then(() => {
      this.routerThing.navigate(['/']);
    })
    .catch((err) => {
      console.log("Log out error.");
      console.log(err);
    })
  }


}
