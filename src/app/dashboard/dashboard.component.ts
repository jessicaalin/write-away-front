import { Component, OnInit } from '@angular/core';

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
      })
  }

}
