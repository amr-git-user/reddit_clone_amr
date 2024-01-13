import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../../../services/main-service.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service: MainServiceService, private actroute: ActivatedRoute, private router: Router) {
    // scrolling to top
    window.scrollTo(0,0);
  }

  postData: any;
  postDataBody: any;
  postDataComments: any;
  showLoader: boolean = false;
  title: any = "";
  height: any;
  width: any;
  image: any;

  async ngOnInit() {
    this.showLoader = true;
    let decoded = decodeURIComponent(this.router.url);
    this.postData = await this.fetchPost(decoded.split("post/")[1]);
    this.showLoader = false;
    this.postDataBody = this.postData[0].data.children[0];
    this.postDataComments = this.postData[1];
    console.log(JSON.stringify(this.postDataComments))

    this.setData()
  }

  fetchPost(url) {
    return fetch('https://www.reddit.com/' + url + '.json').then(function (res) {
      return res.json();
    }).then(function (data) {
      return data;
    }).catch(function (err) {
      console.log(err);
    });
  }

  setData() {
    this.title = this.postDataBody.data.title;
    this.height = this.postDataBody.data.preview.images[0].source.height + 'px';
    this.width = this.postDataBody.data.preview.images[0].source.width + 'px';
    if (this.postDataBody.data.secure_media != null) {
      this.image = this.postDataBody.data.secure_media.reddit_video.fallback_url;
    } else {
      this.image = this.postDataBody.data.url_overridden_by_dest;
    }

  }

  userClick(user) {
    window.open("https://www.reddit.com/u/" + user, "_blank")
  }

  subredditClick(sub) {
    window.open("https://www.reddit.com/r/" + sub, "_blank")
  }

}
