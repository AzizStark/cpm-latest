(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/uUt":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("7o/Q");function r(t,e){return i=>i.lift(new s(t,e))}class s{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new c(t,this.compare,this.keySelector))}}class c extends n.a{constructor(t,e,i){super(t),this.keySelector=i,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:i}=this;e=i?i(t):t}catch(n){return this.destination.error(n)}let i=!1;if(this.hasKey)try{const{compare:t}=this;i=t(this.key,e)}catch(n){return this.destination.error(n)}else this.hasKey=!0;i||(this.key=e,this.destination.next(t))}}},Fe25:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("fXoL"),r=i("6NWb");let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Mb({type:t,selectors:[["app-card"]],inputs:{title:"title",count:"count",icon:"icon"},decls:9,vars:3,consts:[[1,"card-lg"],[1,"card-icon",3,"icon"],[1,"card-container"],[1,"sub-title-2"],[1,"sub-title-2","numtext-color"]],template:function(t,e){1&t&&(n.Xb(0,"div",0),n.Tb(1,"fa-icon",1),n.Xb(2,"div",2),n.Xb(3,"h2",3),n.Ic(4),n.Wb(),n.Tb(5,"br"),n.Xb(6,"h2",4),n.Ic(7),n.Wb(),n.Wb(),n.Wb(),n.Tb(8,"br")),2&t&&(n.Fb(1),n.nc("icon",e.icon),n.Fb(3),n.Kc(" ",e.title," "),n.Fb(3),n.Kc(" ",e.count," "))},directives:[r.a],styles:["@media only screen and (max-width:1024px){.card-lg[_ngcontent-%COMP%]{margin-right:0!important;padding:20px!important}}.card-lg[_ngcontent-%COMP%]{background-color:#fff;padding:30px;border-radius:10px;color:#0b4870;display:flex;flex-basis:0;flex-grow:1;flex-shrink:1;margin-right:16px;box-shadow:0 6px 16px -5px rgba(130,133,226,.11)}.card-icon[_ngcontent-%COMP%]{color:#ffbe55;align-self:center;padding-right:30px;font-size:calc(3vh + 2vw);display:flex}.card-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.numtext-color[_ngcontent-%COMP%]{color:#70727d}"]}),t})()},Fkeu:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("ogdC"),r=i("JIr8"),s=i("z6cu"),c=i("fXoL"),o=i("tk/3");const a="https://spring.azizstark.tech/";let l=(()=>{class t{constructor(t){this.httpClient=t,this.model="projects",this.getSuggestedProjects=t=>this.httpClient.get(`${a}${this.model}?name_like=${t}`),this.getProjects=(t,e,i,c,o)=>(i=Object(n.b)(i),c=Object(n.a)(c),this.httpClient.get(`${a}${this.model}?page=${t}&limit=${e}&sortby=${i}&active=${c}&q=${o}`).pipe(Object(r.a)(t=>Object(s.a)(t)))),this.getProject=t=>this.httpClient.get(`${a}${this.model}/${t}`),this.deleteProject=t=>this.httpClient.put(`${a}${this.model}/${t}`,{isDeleted:!0}),this.editProject=(t,e)=>this.httpClient.put(`${a}${this.model}/update/${e}`,t).pipe(Object(r.a)(t=>Object(s.a)(t))),this.addProject=t=>this.httpClient.post(`${a}${this.model}`,t)}}return t.\u0275fac=function(e){return new(e||t)(c.bc(o.b))},t.\u0275prov=c.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Tlzn:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return r}));const n=t=>{let e=!0;const i={isValid:!1,about:"",projectName:"",clientId:"",duration:"",requiredSkills:"",resources:""};return t.about.trim().split(" ").length<5&&(i.about="Project description should have minimum 5 words",e=!1),t.projectName.trim().length<5&&(i.projectName="Project Name should have minimum 5 characters",e=!1),t.startDate||t.endDate||(i.duration="Duration must be specified",e=!1),t.requiredSkills.length||(i.requiredSkills="Assign skills for the project",e=!1),t.resources.length||(i.resources="Assign resources for the project",e=!1),i.isValid=e,i},r=t=>{let e=!0;const i={isValid:!1,about:"",clientName:"",projects:""};return t.about.trim().split(" ").length<5&&(i.about="Client description should have minimum 5 words",e=!1),t.projects.length||(i.projects="Assign project for the client",e=!1),i.isValid=e,i}},mrSG:function(t,e,i){"use strict";function n(t,e,i,n){return new(i||(i=Promise))((function(r,s){function c(t){try{a(n.next(t))}catch(e){s(e)}}function o(t){try{a(n.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,o)}a((n=n.apply(t,e||[])).next())}))}i.d(e,"a",(function(){return n}))},sIYi:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i("ogdC"),r=i("AytR"),s=i("JIr8"),c=i("z6cu"),o=i("fXoL"),a=i("tk/3");const l=r.a.SPRINGBOOT_API_ENDPOINT;let u=(()=>{class t{constructor(t){this.httpClient=t,this.model="clients",this.getUrl=()=>`${l}${this.model}`,this.getSuggestedClients=t=>this.httpClient.get(`${this.getUrl()}?name_like=${t}`),this.getClients=(t,e,i,r,o)=>(i=Object(n.b)(i),r=Object(n.a)(r),this.httpClient.get(`${this.getUrl()}?page=${t}&limit=${e}&sortby=${i}&active=${r}&q=${o}`).pipe(Object(s.a)(t=>Object(c.a)(t)))),this.getClient=t=>this.httpClient.get(`${this.getUrl()}/${t}`),this.deleteClient=t=>this.httpClient.put(`${this.getUrl()}/${t}`,{isActive:!1}),this.editClient=(t,e)=>this.httpClient.patch(`${this.getUrl()}/${e}`,t),this.addClient=t=>this.httpClient.post(""+this.getUrl(),t)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(a.b))},t.\u0275prov=o.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},z6cu:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("HDdC");function r(t,e){return new n.a(e?i=>e.schedule(s,0,{error:t,subscriber:i}):e=>e.error(t))}function s({error:t,subscriber:e}){e.error(t)}}}]);