import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';

@Component({
  selector: 'app-doc-edit-title',
  templateUrl: './doc-edit-title.component.html',
  styleUrls: ['./doc-edit-title.component.css']
})
export class DocEditTitleComponent implements OnInit {

  docInfo = new Doc()

  constructor(
    private activatedThing: ActivatedRoute,
    private docThing: DocApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.activatedThing.params.subscribe((myReqParams) => {
      console.log(myReqParams.id);
      this.startAjaxCall(myReqParams.id);
    })
  }

  startAjaxCall(id) {
    this.docThing.getOneDoc(id)
      .then((docResults: Doc) => {
        this.docInfo = docResults;
      })
      .catch((err) => {
        console.log("Doc edit error.");
        console.log(err);
      })
  }

  submitEdit() {
    this.docThing.editOneDocTitle(this.docInfo._id, this.docInfo)
    .then(() => {
      this.routerThing.navigate(['/dashboard']);
      console.log('Save successful.');
    })
    .catch((err) => {
      console.log('Save error.');
      console.log(err);
    });
  }

}
