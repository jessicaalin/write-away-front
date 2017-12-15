import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';

export enum key_code {
  a = 65
}

var docText = null;
var focusText = null;

// OR WHY DOESN'T THIS WORK???
// var inputValue = (<HTMLInputElement>document.getElementById('textInput')).value;
// console.log(inputValue);

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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    // if (event.keyCode === key_code.a) {
      this.timer();
    // }
  }

  changeInterval = null;
  timer() {
    console.log("typing...");
    clearInterval(this.changeInterval)
    this.changeInterval = setInterval(() => {
      console.log("stopped typing.");
      console.log(docText.text); // Works!
      focusText = docText.text;
      // remove(focusText);
      console.log(focusText);
      // console.log(this.docThing.text); can't read of undefined
      // console.log(this.docInfo.text); // can't read text of undefined
      // console.log(this.docInfo); // undefined
      // console.log(docText.text.innerHtml);  // undefined

      focusText = focusText.slice(0, -1);
      console.log(focusText);
      // WILL THIS WORK???
      this.docInfo.text = focusText;

    }, 5000);
  }

}

// broken function - stops halfway through string
function remove(string){
  for(let i=0; i < string.length ; i++)
  {
  string = string.slice(0,-1);
  console.log(string);
  }
}
