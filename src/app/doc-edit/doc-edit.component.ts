import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  a = 65
}

var docText = null;
var focusText = null;

@Component({
  selector: 'app-doc-edit',
  templateUrl: './doc-edit.component.html',
  styleUrls: ['./doc-edit.component.css']
})

export class DocEditComponent implements OnInit {


  docInfo = new Doc()




  constructor(
    private activatedThing: ActivatedRoute,
    private docThing: DocApiService,
    private routerThing: Router,
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
        docText = docResults;
        console.log(docResults.text); // this will print what is saved
      })
      .catch((err) => {
        console.log("Doc edit error.");
        console.log(err);
      })
  }



  submitEdit() {
    this.docThing.editOneDocText(this.docInfo._id, this.docInfo)
    .then(() => {
      console.log('Save successful.');
    })
    .catch((err) => {
      console.log('Save error.');
      console.log(err);
    });
  }

  value = 0;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    console.log(this.value);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.increment();
      this.timer();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.decrement();
    }

    if (event.keyCode === KEY_CODE.a) {
      this.timer();
    }
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  changeInterval = null;
  timer() {
    console.log("typing...");
    clearInterval(this.changeInterval)
    this.changeInterval = setInterval(function(){
      console.log("stopped typing.");
      console.log(docText.text); // prints what is saved
      console.log(docText.text.innerHtml);  // WORKS!
      focusText = docText.text.innerHtml;


      // console.log(this.docThing.text); can't read of undefined
      // console.log(this.docInfo.text); // can't read text of undefined
      // console.log(this.docInfo); // undefined


      clearInterval(this.changeInterval)
    }, 1000);
  }


}
