import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  docInfo = new Doc()

  constructor(
    // private activatedThing: ActivatedRoute,
    private docThing: DocApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {
  }

  submitDoc() {
    this.docThing.addOneDoc(this.docInfo)
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
