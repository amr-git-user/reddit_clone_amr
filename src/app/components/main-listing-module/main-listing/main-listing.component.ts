import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../../../services/main-service.service'
import { MatProgressSpinnerModule } from '@angular/material'

@Component({
  selector: 'app-main-listing',
  templateUrl: './main-listing.component.html',
  styleUrls: ['./main-listing.component.css']
})
export class MainListingComponent implements OnInit {

  

  constructor(private router: Router, private service: MainServiceService) { }

  displayList = [];
  showLoader: boolean = false;
  heading: any;

  async ngOnInit() {
    // this.showLoader = true;
    // this.displayList = await this.getListing("all/top");
    this.changeListing('top');
    // this.showLoader = false;
    // console.log(JSON.stringify(this.displayList))
  }

  async changeListing(crit) {
    switch(crit) {
      case "top" : {
        let x = document.querySelector(".top");
        x.classList.add("selected");
        let y = document.querySelector(".hot");
        y.classList.remove("selected");
        let z = document.querySelector(".new");
        z.classList.remove("selected");
        this.heading = "Showing the top posts of all time"
        this.showLoader = true;
        this.displayList = await this.getListing("all/top");
        console.log(JSON.stringify(this.displayList))
        this.showLoader = false;
        break;
      }
      case "hot" : {
        let x = document.querySelector(".top");
        x.classList.remove("selected");
        let y = document.querySelector(".hot");
        y.classList.add("selected");
        let z = document.querySelector(".new");
        z.classList.remove("selected");
        this.heading = "Showing the hottest posts of all time"
        this.showLoader = true;
        this.displayList = await this.getListing("all/hot");
        this.showLoader = false;
        break;
      }
      case "new" : {
        let x = document.querySelector(".top");
        x.classList.remove("selected");
        let y = document.querySelector(".hot");
        y.classList.remove("selected");
        let z = document.querySelector(".new");
        z.classList.add("selected");
        this.heading = "Showing the newest posts of all time"
        this.showLoader = true;
        this.displayList = await this.getListing("all/new");
        this.showLoader = false;
        break;
      }
    }
  }

  getListing(param) {
    return fetch('https://www.reddit.com/r/' + param +'.json').then(function(res) {
      return res.json();
    }).then(function(data) {
      return data.data.children;
    }).catch(function(err) {
      console.log(err);
    });
  }

  gotoPost(url) {
    this.service.postURL = url;
    this.router.navigate(['/post/', url])
  }

  truncateString(str) {
    return (str.length > 100) ? str.substr(0, 99) + '...' : str;
  }

  gotoLink(link) {
    window.open(link, "_blank")
  }

}
