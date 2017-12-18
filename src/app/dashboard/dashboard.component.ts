import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { DocApiService, Doc } from '../services/doc-api.service';
import { UserApiService } from '../services/user-api.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  docInfo = new Doc();
  docs: any = [];

  constructor(
    private docThing: DocApiService,
    public userThing: UserApiService,
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

  submitDoc() {
    this.docThing.addOneDoc(this.docInfo)
      .then(() => {
        // this.routerThing.navigate(['/dashboard']);
        console.log('Save successful.');
      })
      .catch((err) => {
        console.log('Save error.');
        console.log(err);
      });
  }

  addDoc() {
    this.docs.unshift(this.docInfo);

  }

}
