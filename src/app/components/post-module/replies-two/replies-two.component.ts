import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-replies-two',
  templateUrl: './replies-two.component.html',
  styleUrls: ['./replies-two.component.css']
})
export class RepliesTwoComponent implements OnInit {
  @Input() nc: any;
  @Input() i: any;

  constructor() { }

  ngOnInit() {
  }

  replytoggle(toggle, index) {
    console.log(toggle)
    console.log(index)
    if (toggle == 'show') {
      let x = document.getElementById("comment-index-r2-" + index) as HTMLDivElement;
      x.classList.remove("no-disp");
      let y = document.getElementById("show-r2-" + index) as HTMLButtonElement;
      y.classList.add("no-disp");
    } else if (toggle == 'hide') {
      let x = document.getElementById("comment-index-r2-" + index) as HTMLDivElement;
      x.classList.add("no-disp");
      let y = document.getElementById("show-r2-" + index) as HTMLButtonElement;
      y.classList.remove("no-disp");
    }
  }

}
