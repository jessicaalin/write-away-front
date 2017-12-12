import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  docInfo = new Doc();

  constructor(
    private activatedThing: ActivatedRoute,
    private docThing: DocApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.activatedThing.params.subscribe((myReqParams) => {
      console.log(myReqParams.id);
      this.startAjaxCall(myReqParams.id);
    });
  }

  startAjaxCall(id) {
    this.docThing.getOneDoc(id)
      .then((docResults: Doc) => {
        this.docInfo = docResults;
      })
      .catch((err) => {
        console.log("Pulling up doc error.");
        console.log(err);
      });
  }

  startDeleteAjax() {
    if (!confirm('Are you sure?')) {
      return;
    }
    this.docThing.deleteOneDoc(this.docInfo._id)
      .then(() => {
        this.routerThing.navigate(['/doc']);
      })
      .catch((err) => {
        console.log("Delete doc error.");
        console.log(err);
      })
  }

}
