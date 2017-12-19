import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocApiService, Doc } from '../services/doc-api.service';
import { UserApiService } from '../services/user-api.service';

var docText = null;
var focusText = null;
var timer = false;

@Component({
  selector: 'app-doc-edit',
  templateUrl: './doc-edit.component.html',
  styleUrls: ['./doc-edit.component.css']
})

export class DocEditComponent implements OnInit {

  onConfig: any = {
    isVisible: false
  }
  offConfig: any = {
    isVisible: true
  }

  docInfo = new Doc();
  docs: any = [];

  constructor(
    private activatedThing: ActivatedRoute,
    private docThing: DocApiService,
    public userThing: UserApiService,
    private routerThing: Router,
  ) { }

  ngOnInit() {

    this.userThing.getCheckLogin()
      .catch((err) => {
        console.log("Check Login Error.");
        console.log(err);
      })

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
    if (timer === true) {
      // timer will start the timer at any key event
      this.focusMode();

    }

  }

  changeInterval = null;
  focusMode() {
    console.log("typing...");
    clearInterval(this.changeInterval)
    this.changeInterval = setInterval(() => {
      console.log("stopped typing.");
      console.log(docText.text); // Works!
      // reassigning focusText with text from input
      focusText = docText.text;
      console.log(focusText);
      // slicing text
      focusText = focusText.slice(0, -1);
      console.log(focusText);
      // updating input value with sliced text;
      // so it actually shows erasing letter by letter
      this.docInfo.text = focusText;
    }, 1000);
  }

  // starts focus mode
  timerSwitchOn() {
    if (timer === false) {
    timer = true;
    }
  }

  // stops focus mode by clearing interval
  timerSwitchOff() {
    if (timer === true) {
      timer = false;
      clearInterval(this.changeInterval);
    }
  }

  toggleOn() {
    if (this.onConfig.isVisible) {
      this.onConfig.isVisible = false;
    }
    // need to fix here
    else {
      this.onConfig.isVisible = true;
      this.offConfig.isVisible = false;
    }
  }

  toggleOff() {
    if (this.offConfig.isVisible) {
      this.offConfig.isVisible = false;
    }
    else {
      this.offConfig.isVisible = true;
      this.onConfig.isVisible = false;
    }
  }

}
