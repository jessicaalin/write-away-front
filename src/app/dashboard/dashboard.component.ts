import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  docs: Doc[] = [];

  constructor(private docThing: DocApiService) { }

  ngOnInit() {
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



}
