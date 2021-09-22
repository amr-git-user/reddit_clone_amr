function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RE8E:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),u=function n(){_classCallCheck(this,n)},i=t("pMnS"),o=t("SVse"),s=t("mrSG"),a=function(){function n(l,t){_classCallCheck(this,n),this.router=l,this.service=t,this.displayList=[],this.showLoader=!1,window.scrollTo(0,0)}return _createClass(n,[{key:"ngOnInit",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.changeListing("top");case 1:case"end":return n.stop()}}),n,this)})))}},{key:"changeListing",value:function(n){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:l.t0=n,l.next="top"===l.t0?3:"hot"===l.t0?14:"new"===l.t0?24:33;break;case 3:return document.querySelector(".top").classList.add("selected"),document.querySelector(".hot").classList.remove("selected"),document.querySelector(".new").classList.remove("selected"),this.heading="Showing the top posts of all time",this.showLoader=!0,l.next=10,this.getListing("all/top");case 10:return this.displayList=l.sent,console.log(JSON.stringify(this.displayList)),this.showLoader=!1,l.abrupt("break",33);case 14:return document.querySelector(".top").classList.remove("selected"),document.querySelector(".hot").classList.add("selected"),document.querySelector(".new").classList.remove("selected"),this.heading="Showing the hottest posts of all time",this.showLoader=!0,l.next=21,this.getListing("all/hot");case 21:return this.displayList=l.sent,this.showLoader=!1,l.abrupt("break",33);case 24:return document.querySelector(".top").classList.remove("selected"),document.querySelector(".hot").classList.remove("selected"),document.querySelector(".new").classList.add("selected"),this.heading="Showing the newest posts of all time",this.showLoader=!0,l.next=31,this.getListing("all/new");case 31:this.displayList=l.sent,this.showLoader=!1;case 33:case"end":return l.stop()}}),l,this)})))}},{key:"getListing",value:function(n){return fetch("https://www.reddit.com/r/"+n+".json").then((function(n){return n.json()})).then((function(n){return n.data.children})).catch((function(n){console.log(n)}))}},{key:"gotoPost",value:function(n){this.service.postURL=n,this.router.navigate(["/post/",n])}},{key:"truncateString",value:function(n){return n.length>100?n.substr(0,99)+"...":n}},{key:"gotoLink",value:function(n){window.open(n,"_blank")}}]),n}(),r=t("iInd"),c=t("ONoS"),d=e.nb({encapsulation:0,styles:[[".ani-disappear[_ngcontent-%COMP%]{transition:.3s;-webkit-animation:.5s ease-in infinite blink;animation:.5s ease-in infinite blink}@-webkit-keyframes blink{0%,100%{opacity:0}50%{opacity:1}}@keyframes blink{0%,100%{opacity:0}50%{opacity:1}}.listing-body[_ngcontent-%COMP%]{width:80%;margin:80px auto}.listing-body-tags[_ngcontent-%COMP%]{text-align:center}.post-body[_ngcontent-%COMP%]{text-align:center;margin-bottom:25px}.post-body[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:90%;margin:0 auto;border:1px solid gray;border-radius:5px}.desc[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;word-wrap:break-word}img[_ngcontent-%COMP%]{width:100%;height:300px!important}.btn-tags[_ngcontent-%COMP%]{background:0 0;border:none;outline:0;text-align:left}.btn-tags[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%]{background:#000;color:#fff}@media screen and (max-width:1450px){.listing-body[_ngcontent-%COMP%]{width:90%;margin:80px auto}}@media screen and (max-width:400px){.listing-body[_ngcontent-%COMP%]{width:95%;margin:80px auto}}"]],data:{}});function p(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,0,"img",[["alt","..."],["class","card-img-top"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.parent.context.$implicit.data.thumbnail)}))}function b(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,2,"div",[["style","margin-top: 10px;"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),e.Cb(2,null,["",""]))],null,(function(n,l){n(l,1,0,e.tb(1,"",l.parent.context.$implicit.data.url_overridden_by_dest,"")),n(l,2,0,l.parent.context.$implicit.data.url_overridden_by_dest)}))}function g(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,1,"button",[["class","btn-tags"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.gotoPost(n.parent.context.$implicit.data.permalink)&&e),e}),null,null)),(n()(),e.Cb(-1,null,["Go To Post >>"]))],null,null)}function h(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,1,"button",[["class","btn-tags"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.gotoLink(n.parent.context.$implicit.data.url_overridden_by_dest)&&e),e}),null,null)),(n()(),e.Cb(-1,null,["Go To Link >>"]))],null,null)}function f(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,12,"div",[["class","post-body col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,11,"div",[["class","card"],["style","width: 18rem;"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,p)),e.ob(3,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,b)),e.ob(5,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(6,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,1,"h5",[["class","card-title desc"]],null,null,null,null,null)),(n()(),e.Cb(8,null,["",""])),(n()(),e.eb(16777216,null,null,1,null,g)),e.ob(10,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,h)),e.ob(12,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,3,0,"default"!=l.context.$implicit.data.thumbnail),n(l,5,0,"default"==l.context.$implicit.data.thumbnail),n(l,10,0,"link"!=l.context.$implicit.data.post_hint),n(l,12,0,"link"==l.context.$implicit.data.post_hint)}),(function(n,l){n(l,8,0,l.component.truncateString(l.context.$implicit.data.title))}))}function m(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Cb(-1,null,["Looks like there were some issues while fetching data..."])),(n()(),e.pb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Cb(-1,null,["Please try again in some time."]))],null,null)}function y(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,6,"div",[["class","listing-body-posts row my-4"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"h3",[["class","text-center my-4"]],null,null,null,null,null)),(n()(),e.Cb(2,null,["",""])),(n()(),e.eb(16777216,null,null,1,null,f)),e.ob(4,278528,null,0,o.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.eb(16777216,null,null,1,null,m)),e.ob(6,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,t.displayList),n(l,6,0,0==t.displayList.length||null==t.displayList||null==t.displayList||t.displayList==e.Y)}),(function(n,l){n(l,2,0,l.component.heading)}))}function w(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,4,"div",[["style","text-align: center;margin-top: 10%;"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,3,"h3",[],null,null,null,null,null)),(n()(),e.Cb(-1,null,["Loading.."])),(n()(),e.pb(3,0,null,null,1,"span",[["class","ani-disappear"]],null,null,null,null,null)),(n()(),e.Cb(-1,null,["."]))],null,null)}function k(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,11,"div",[["class","listing-body"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,6,"div",[["class","listing-body-tags my-2"]],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,1,"button",[["class","btn-tags mx-1 ml-0 top"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.changeListing("top")&&e),e}),null,null)),(n()(),e.Cb(-1,null,["TOP"])),(n()(),e.pb(4,0,null,null,1,"button",[["class","btn-tags mx-1 ml-0 hot"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.changeListing("hot")&&e),e}),null,null)),(n()(),e.Cb(-1,null,["HOT"])),(n()(),e.pb(6,0,null,null,1,"button",[["class","btn-tags mx-1 ml-0 new"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.changeListing("new")&&e),e}),null,null)),(n()(),e.Cb(-1,null,["NEW"])),(n()(),e.eb(16777216,null,null,1,null,y)),e.ob(9,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,w)),e.ob(11,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,9,0,!t.showLoader),n(l,11,0,t.showLoader)}),null)}var v=e.lb("app-main-listing",a,(function(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,1,"app-main-listing",[],null,null,null,k,d)),e.ob(1,114688,null,0,a,[r.k,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),L=function n(){_classCallCheck(this,n)};t.d(l,"MainListingModuleModuleNgFactory",(function(){return x}));var x=e.mb(u,[],(function(n){return e.yb([e.zb(512,e.j,e.W,[[8,[i.a,v]],[3,e.j],e.v]),e.zb(4608,o.k,o.j,[e.s,[2,o.q]]),e.zb(1073742336,o.b,o.b,[]),e.zb(1073742336,r.m,r.m,[[2,r.r],[2,r.k]]),e.zb(1073742336,L,L,[]),e.zb(1073742336,u,u,[]),e.zb(1024,r.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);