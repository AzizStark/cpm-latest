(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{GEmG:function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",(function(){return I}));var c=e("ofXK"),i=e("tyNb"),o=e("wHSu"),r=e("s1z9"),a=e("fXoL"),s=e("AytR"),l=e("tk/3");const b=s.a.SPRINGBOOT_API_ENDPOINT;let d=(()=>{class t{constructor(t){this.httpClient=t,this.model="dashboard",this.getDashboardData=()=>this.httpClient.get(`${b}${this.model}`)}}return t.\u0275fac=function(n){return new(n||t)(a.bc(l.b))},t.\u0275prov=a.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("c9Ax"),p=e("Fe25"),f=e("o7am");const g=function(t){return{"last-card":t}};function h(t,n){if(1&t&&a.Tb(0,"app-card",14),2&t){const t=n.$implicit;a.nc("ngClass",a.rc(4,g,n.last))("title",t.title)("count",t.count)("icon",t.icon)}}function m(t,n){if(1&t&&(a.Xb(0,"div",12),a.Gc(1,h,1,6,"app-card",13),a.Wb()),2&t){const t=a.hc();a.Fb(1),a.nc("ngForOf",t.dataList1)}}function w(t,n){1&t&&a.Tb(0,"app-loader")}function v(t,n){if(1&t&&a.Tb(0,"app-card",14),2&t){const t=n.$implicit;a.nc("ngClass",a.rc(4,g,n.last))("title",t.title)("count",t.count)("icon",t.icon)}}function O(t,n){if(1&t&&(a.Xb(0,"div",12),a.Gc(1,v,1,6,"app-card",13),a.Wb()),2&t){const t=a.hc();a.Fb(1),a.nc("ngForOf",t.dataList2)}}function x(t,n){1&t&&a.Tb(0,"app-loader")}const P=[{path:"",component:(()=>{class t{constructor(t,n,e){this.dashboardService=t,this.authService=n,this.router=e,this.now=new Date,this.getDashData=()=>{this.dashboardService.getDashboardData().subscribe(t=>{this.dataList1=[{title:"Total Resources",count:t.resourcesTotal,icon:o.r},{title:"Total Clients",count:t.clientsTotal,icon:o.q},{title:"Total Projects",count:t.projectsTotal,icon:o.l}],this.dataList2=[{title:"Projects Done",count:t.projectsDone,icon:o.e},{title:"Current Projects",count:t.projectsOnProgress,icon:o.g},{title:"Projects Overdue",count:t.projectsOverDue,icon:o.f}]})},this.logout=()=>{this.authService.logOut()},-1!==this.router.url.indexOf("#")?this.router.navigateByUrl(this.router.url.substring(0,this.router.url.indexOf("#"))):this.authService.login(),setInterval(()=>{this.now=new Date},1)}ngOnInit(){this.getDashData(),this.authService.getUserInfo().subscribe(t=>{this.currentUser=t,alert("you are a "+t.role),Object(r.a)(5e3).fire({icon:"success",title:"Hi, "+t.firstName})})}}return t.\u0275fac=function(n){return new(n||t)(a.Sb(d),a.Sb(u.a),a.Sb(i.b))},t.\u0275cmp=a.Mb({type:t,selectors:[["app-dashboard"]],decls:30,vars:13,consts:[[1,"coda-content"],[3,"click"],[1,"time-bar"],[1,"spaced-container"],[1,"xl-text"],[1,"flex-display","time-box"],[1,"xl-text","time"],["src","../../../assets/timebar-pic.png",1,"side-img"],[1,"title-1"],["class","stack-row",4,"ngIf"],[4,"ngIf"],[1,"breaker"],[1,"stack-row"],["class","appcard",3,"ngClass","title","count","icon",4,"ngFor","ngForOf"],[1,"appcard",3,"ngClass","title","count","icon"]],template:function(t,n){1&t&&(a.Xb(0,"div",0),a.Xb(1,"button",1),a.ec("click",(function(){return n.logout()})),a.Ic(2,"logout"),a.Wb(),a.Xb(3,"div",2),a.Xb(4,"div",3),a.Xb(5,"h1",4),a.Ic(6," Welcome back, "),a.Tb(7,"br"),a.Ic(8),a.Wb(),a.Xb(9,"span",5),a.Xb(10,"h1",6),a.Ic(11),a.ic(12,"date"),a.Wb(),a.Xb(13,"p"),a.Ic(14),a.ic(15,"date"),a.Wb(),a.Wb(),a.Tb(16,"img",7),a.Wb(),a.Wb(),a.Tb(17,"br"),a.Xb(18,"h1",8),a.Ic(19," Organization "),a.Wb(),a.Tb(20,"br"),a.Xb(21,"div"),a.Gc(22,m,2,1,"div",9),a.Gc(23,w,1,0,"app-loader",10),a.Tb(24,"br",11),a.Xb(25,"h1",8),a.Ic(26," Projects Stats "),a.Wb(),a.Tb(27,"br"),a.Gc(28,O,2,1,"div",9),a.Gc(29,x,1,0,"app-loader",10),a.Wb(),a.Wb()),2&t&&(a.Fb(8),a.Kc(" ",n.currentUser?(null==n.currentUser?null:n.currentUser.firstName)+" "+(null==n.currentUser?null:n.currentUser.lastName):"","! "),a.Fb(3),a.Kc(" ",a.kc(12,7,n.now,"hh:mm")," "),a.Fb(3),a.Jc(a.kc(15,10,n.now,"a")),a.Fb(8),a.nc("ngIf",n.dataList1),a.Fb(1),a.nc("ngIf",!n.dataList1),a.Fb(5),a.nc("ngIf",n.dataList2),a.Fb(1),a.nc("ngIf",!n.dataList2))},directives:[c.m,c.l,p.a,c.k,f.a],pipes:[c.e],styles:[".spaced-container[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between;flex-direction:row;padding:16px}.xl-text[_ngcontent-%COMP%]{font-family:Open sans;font-weight:400;color:#0b4870;margin-left:15px;margin-right:15px;font-size:calc(2.8vh + 1vw)}.side-img[_ngcontent-%COMP%]{width:18vw}.stack-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.last-card[_ngcontent-%COMP%] >   div.card-lg{margin-right:0}.appcard[_ngcontent-%COMP%]{width:100%;display:flex;flex-basis:0;flex-grow:1;flex-shrink:1}.time[_ngcontent-%COMP%]{font-size:calc(3vh + 2vw)}.time-box[_ngcontent-%COMP%]{width:auto}@media only screen and (max-width:1024px){.side-img[_ngcontent-%COMP%]{display:none}.stack-row[_ngcontent-%COMP%]{flex-direction:column!important;flex-wrap:wrap}.appcard[_ngcontent-%COMP%]{display:block}.breaker[_ngcontent-%COMP%]{display:none}}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(n){return new(n||t)},imports:[[i.f.forChild(P)],i.f]}),t})();var C=e("6NWb"),k=e("3Pt+"),M=e("PCNd");let I=(()=>{class t{}return t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(n){return new(n||t)},imports:[[c.c,y,C.b,k.h,M.a]]}),t})()},o7am:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var c=e("fXoL");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Mb({type:t,selectors:[["app-loader"]],decls:4,vars:0,consts:[[1,"spinner"],[1,"bounce1"],[1,"bounce2"],[1,"bounce3"]],template:function(t,n){1&t&&(c.Xb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"div",3),c.Wb())},styles:[".spinner[_ngcontent-%COMP%]{margin:20px auto;width:90px;text-align:center}.spinner[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:18px;height:18px;background-color:#0b4870;margin:4px;border-radius:100%;display:inline-block;animation:sk-bouncedelay 1.4s ease-in-out infinite both}.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%]{animation-delay:-.32s}.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%]{animation-delay:-.16s}@keyframes sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}"]}),t})()}}]);