import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {

  @Input() nc: any;
  @Input() i: any;

  constructor() { }

  ngOnInit() {
  }

  replytoggle(toggle, index) {
    if (toggle == 'show') {
      let x = document.getElementById("comment-index-r1-" + index) as HTMLDivElement;
      x.classList.remove("no-disp");
      let y = document.getElementById("show-r1-" + index) as HTMLButtonElement;
      y.classList.add("no-disp");
    } else if (toggle == 'hide') {
      let x = document.getElementById("comment-index-r1-" + index) as HTMLDivElement;
      x.classList.add("no-disp");
      let y = document.getElementById("show-r1-" + index) as HTMLButtonElement;
      y.classList.remove("no-disp");
    }
  }

}
