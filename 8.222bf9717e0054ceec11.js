(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{y8AJ:function(t,e,n){"use strict";n.r(e),n.d(e,"ClientsModule",(function(){return J}));var i=n("ofXK"),o=n("oOf3"),c=n("3Pt+"),r=n("Kb4U"),a=n("PCNd"),s=n("wHSu"),l=n("Tlzn"),p=n("HDdC"),b=n("Kj3r"),g=n("/uUt"),d=n("eIep"),u=n("fXoL"),h=n("sIYi"),f=n("tzGa"),m=n("tyNb"),v=n("Fkeu");function C(t,e){if(1&t&&(u.Xb(0,"span",32),u.Ic(1),u.Wb()),2&t){const t=u.hc(2);u.Fb(1),u.Kc("(",t.errors.clientName,")")}}function M(t,e){if(1&t&&(u.Xb(0,"span",32),u.Ic(1),u.Wb()),2&t){const t=u.hc(2);u.Fb(1),u.Kc("(",t.errors.about,")")}}function P(t,e){if(1&t){const t=u.Yb();u.Xb(0,"tag-input",33),u.ec("ngModelChange",(function(e){return u.Ac(t),u.hc(2).clientModel.projects=e}))("onRemove",(function(e){return u.Ac(t),u.hc(2).onProjectRemoved(e)})),u.Wb()}if(2&t){const t=u.hc(2);u.nc("ngModel",t.clientModel.projects)("hideForm",!0)("identifyBy","id")("displayBy","name")("ripple",!1)}}function O(t,e){1&t&&(u.Xb(0,"h1",34),u.Xb(1,"em"),u.Ic(2,"Search and add projects "),u.Wb(),u.Wb())}function x(t,e){if(1&t){const t=u.Yb();u.Xb(0,"div",38),u.Xb(1,"h1",39),u.Ic(2),u.Wb(),u.Xb(3,"button",40),u.ec("click",(function(){u.Ac(t);const n=e.$implicit;return u.hc(3).addProject(n.id,n.name)})),u.Tb(4,"fa-icon",41),u.Ic(5,"Add "),u.Wb(),u.Wb()}if(2&t){const t=e.$implicit,n=u.hc(3);u.Fb(2),u.Kc("",t.name," "),u.Fb(2),u.nc("icon",n.plusIcon)}}function y(t,e){if(1&t&&(u.Xb(0,"div",35),u.Xb(1,"div",36),u.Gc(2,x,6,2,"div",37),u.Wb(),u.Wb()),2&t){const t=u.hc(2);u.Fb(2),u.nc("ngForOf",t.suggestedProjects)}}function w(t,e){if(1&t){const t=u.Yb();u.Xb(0,"div",3),u.Xb(1,"div",4),u.Xb(2,"h1",5),u.Ic(3," Client Name "),u.Gc(4,C,2,1,"span",6),u.Wb(),u.Xb(5,"input",7),u.ec("ngModelChange",(function(e){return u.Ac(t),u.hc().clientModel.clientName=e})),u.Wb(),u.Tb(6,"br"),u.Xb(7,"h1",5),u.Ic(8," Description "),u.Gc(9,M,2,1,"span",6),u.Wb(),u.Xb(10,"textarea",8),u.ec("ngModelChange",(function(e){return u.Ac(t),u.hc().clientModel.about=e})),u.Wb(),u.Tb(11,"br"),u.Xb(12,"div",9),u.Xb(13,"div",10),u.Gc(14,P,1,5,"tag-input",11),u.Gc(15,O,3,0,"h1",12),u.Wb(),u.Wb(),u.Tb(16,"br"),u.Xb(17,"div",13),u.Xb(18,"h1",5),u.Ic(19," Client State "),u.Wb(),u.Xb(20,"input",14),u.ec("ngModelChange",(function(e){return u.Ac(t),u.hc().activity=e}))("click",(function(){return u.Ac(t),u.hc().onChangeActivity(!0)})),u.Wb(),u.Xb(21,"label",15),u.Ic(22,"Active"),u.Wb(),u.Tb(23,"br"),u.Xb(24,"input",16),u.ec("ngModelChange",(function(e){return u.Ac(t),u.hc().activity=e}))("click",(function(){return u.Ac(t),u.hc().onChangeActivity(!1)})),u.Wb(),u.Xb(25,"label",17),u.Ic(26,"Inactive"),u.Wb(),u.Tb(27,"br"),u.Wb(),u.Tb(28,"br"),u.Wb(),u.Xb(29,"div",18),u.Xb(30,"div",19),u.Xb(31,"div",20),u.Xb(32,"h1",21),u.Ic(33," Add projects "),u.Wb(),u.Wb(),u.Xb(34,"div",22),u.Xb(35,"div",23),u.Xb(36,"div",24),u.Xb(37,"div",25),u.Tb(38,"input",26),u.Wb(),u.Wb(),u.Xb(39,"h5",27),u.Xb(40,"em"),u.Ic(41,"Enter 3 or more characters to search"),u.Wb(),u.Wb(),u.Gc(42,y,3,1,"div",28),u.Wb(),u.Wb(),u.Wb(),u.Xb(43,"div",29),u.Xb(44,"input",30),u.ec("click",(function(){return u.Ac(t),u.hc().addClient()})),u.Wb(),u.Ic(45," \xa0\xa0 "),u.Xb(46,"input",31),u.ec("click",(function(){return u.Ac(t),u.hc().cancelConfirm()})),u.Wb(),u.Wb(),u.Wb(),u.Wb()}if(2&t){const t=u.hc();u.Fb(4),u.nc("ngIf",t.errors.clientName),u.Fb(1),u.nc("ngModel",t.clientModel.clientName),u.Fb(4),u.nc("ngIf",t.errors.about),u.Fb(1),u.nc("ngModel",t.clientModel.about),u.Fb(4),u.nc("ngIf",t.clientModel.projects.length>0),u.Fb(1),u.nc("ngIf",0===t.clientModel.projects.length),u.Fb(5),u.nc("ngModel",t.activity),u.Fb(4),u.nc("ngModel",t.activity),u.Fb(14),u.nc("formControl",t.projectSuggestFormControl),u.Fb(4),u.nc("ngIf",t.suggestedProjects&&t.suggestedProjects.length)}}let _=(()=>{class t{constructor(t,e,n,i,o){this.clientService=t,this.resourceService=e,this.router=n,this.route=i,this.projectService=o,this.checkIcon=s.d,this.crossicon=s.m,this.plusIcon=s.j,this.suggestedProjects=[],this.projectSuggestFormControl=new c.c,this.errors={isValid:!1,about:"",clientName:""},this.clientModel={clientName:"",about:"",isActive:!0,projects:[]},this.activity="Active",this.isEditMode=!1,this.preFillFields=t=>{this.clientModel={clientName:t.clientName,about:t.about,isActive:t.isActive,projects:t.projects.map(t=>({id:t.projectID,name:t.projectName}))},this.removeAddedProjects(this.clientModel.projects),this.setActivity()},this.setActivity=()=>{this.activity=this.clientModel.isActive?"Active":"InActive"},this.onChangeActivity=t=>{this.clientModel.isActive=t},this.addProject=(t,e)=>{this.clientModel.projects.push({id:t,name:e}),this.removeAddedProjects(this.clientModel.projects)},this.removeAddedProjects=t=>(t.forEach(t=>{this.suggestedProjects=this.suggestedProjects.filter(e=>e.id!==t.id)}),this.suggestedProjects),this.onProjectRemoved=t=>{this.suggestedProjects.push(t)},this.suggestProject=()=>{this.projectSuggestFormControl.valueChanges.pipe(Object(b.a)(500),Object(g.a)(),Object(d.a)(t=>this.projectSuggestFormControl.value.length>=3?this.projectService.getProjects(1,30,"name","true",this.projectSuggestFormControl.value):new p.a)).subscribe(t=>{const e=t.result.filter(t=>!Object.keys(t).includes("client"));this.suggestedProjects=e.map(t=>({id:t.projectID,name:t.projectName})),this.removeAddedProjects(this.clientModel.projects)})},this.cancelConfirm=()=>{confirm("There are unsaved changes, cancel now?")&&this.router.navigate(["/clients"])},this.convertToClientRequestModel=()=>{const t={clientName:this.clientModel.clientName,about:this.clientModel.about,projects:[],isActive:this.clientModel.isActive};return t.projects=this.clientModel.projects.length?this.clientModel.projects.map(t=>t.id):[],t},this.addClient=()=>{const t=this.convertToClientRequestModel(),e=Object(l.a)(t);this.errors=e,e.isValid&&(this.isEditMode?this.clientService.editClient(t,this.route.snapshot.params.client).subscribe(t=>{alert("saved! redirecting to the new client ID"),this.router.navigate(["/clients/"+this.route.snapshot.params.client])}):this.clientService.addClient(t).subscribe(t=>{alert("saved! redirecting to the new client ID"),this.router.navigate(["/clients/"+t.id])}))}}ngOnInit(){const t=this.route.snapshot.url;t.length>=2&&Number(this.route.snapshot.params.client)&&"edit"===t[1].path&&this.clientService.getClient(this.route.snapshot.params.client).subscribe(t=>{this.preFillFields(t),this.isEditMode=!0}),this.suggestProject()}}return t.\u0275fac=function(e){return new(e||t)(u.Sb(h.a),u.Sb(f.a),u.Sb(m.b),u.Sb(m.a),u.Sb(v.a))},t.\u0275cmp=u.Mb({type:t,selectors:[["app-client-alter"]],decls:6,vars:1,consts:[[1,"title-1"],[1,"time-bar"],["class","spaced-container",4,"ngIf"],[1,"spaced-container"],[1,"dynamic-input"],[1,"sub-title-6","font-grey","input-head"],["class","warning",4,"ngIf"],["type","text","placeholder","Enter client name",1,"input-bar","sub-title-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter description",1,"input-bar","sub-title-4",3,"ngModel","ngModelChange"],[1,"skills-wrapper"],[1,"skills-container"],["ngDefaultControl","","theme","minimal-theme",3,"ngModel","hideForm","identifyBy","displayBy","ripple","ngModelChange","onRemove",4,"ngIf"],["class","sub-title-4 font-grey",4,"ngIf"],[1,"flex-display","activity"],["type","radio","id","activity","name","activity","value","Active",3,"ngModel","ngModelChange","click"],["for","Active"],["type","radio","id","activity","name","activity","value","InActive",3,"ngModel","ngModelChange","click"],["for","InActive"],[1,"right-view"],[1,"tab-view"],[1,"tabs","flex-display"],["rel","add-projects",1,"sub-title-6","tab","pointer","cerulean-text","active"],[1,"time-bar","tab-container"],["id","add-projects",1,"tab-body"],[1,"top-controls"],[1,"search-bar"],["type","text","placeholder","Search Projects",1,"search-input-bar","sub-title-6",3,"formControl"],[1,"tool-tip-input"],["class","projects-wrapper wrapper",4,"ngIf"],[1,"full-width","flex-display"],["type","button","value","Save",1,"button-xl","pointer","sub-title-6","flex-occupy",3,"click"],["type","button","value","Cancel",1,"button-xl","pointer","sub-title-6","flex-occupy","warning",3,"click"],[1,"warning"],["ngDefaultControl","","theme","minimal-theme",3,"ngModel","hideForm","identifyBy","displayBy","ripple","ngModelChange","onRemove"],[1,"sub-title-4","font-grey"],[1,"projects-wrapper","wrapper"],[1,"project-container"],["class"," project flex-display",4,"ngFor","ngForOf"],[1,"project","flex-display"],[1,"sub-title-6"],["type","button",1,"add-button",3,"click"],["title","Add Project",1,"plus-icon",3,"icon"]],template:function(t,e){1&t&&(u.Vb(0),u.Xb(1,"h1",0),u.Ic(2," New Client "),u.Wb(),u.Tb(3,"br"),u.Xb(4,"div",1),u.Gc(5,w,47,10,"div",2),u.Wb(),u.Ub()),2&t&&(u.Fb(5),u.nc("ngIf","resourceData.firstName"))},directives:[i.m,c.b,c.l,c.n,c.p,c.d,r.a,i.l],styles:[".input-bar[_ngcontent-%COMP%]{padding:6px;border-radius:8px;outline:none;font-family:Open sans;border:2px solid #efeaf9;color:#0b4870}.dynamic-input[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column}.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%]{justify-content:space-between;background-color:#efeaf9;border-radius:8px;padding:5px}.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%]{transform:rotate(45deg);color:#eb6262;font-size:16px;transition:all .1s ease-in-out}.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%]:hover{transform:scale(1.1) rotate(45deg)}.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%]{max-height:150px;background-color:#efeaf9;border-radius:8px;padding:5px;overflow:auto}.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%]   .resource-container[_ngcontent-%COMP%]{overflow:hidden}.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%]   .resource-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent!important}.project[_ngcontent-%COMP%]{justify-content:space-between}.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]{border:none;font-size:12px;color:#0b4870;background-color:#efeaf9;border-radius:4px;transition:all 80ms ease-in-out;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:hover{transform:scale(1.08);background-color:#e0d6f3}.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:focus{outline:none}.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#0b4870;margin-right:4px;font-size:12px}.input-icon[_ngcontent-%COMP%]{padding:10px;background-color:#ffbe55;height:100%;font-size:18px;display:flex;justify-content:center;border-radius:8px;color:#fff;margin-left:10px;border:2px solid #ffbe55}.input-icons[_ngcontent-%COMP%]{visibility:hidden}.input-bar[_ngcontent-%COMP%]:hover{background-color:#efeaf9;transition:background-color .3s ease;border:2px solid #efeaf9}.input-bar[_ngcontent-%COMP%]:focus{border:2px solid #efeaf9;background-color:#fdfdfd}.hideIt[_ngcontent-%COMP%]{visibility:visible}.cerulean-text[_ngcontent-%COMP%]{color:#0b4870}textarea[_ngcontent-%COMP%]{resize:none}.input-box-container[_ngcontent-%COMP%]{position:relative}.input-box[_ngcontent-%COMP%]{padding:4px 8px;border-radius:4px;border:1px solid #efeaf9;font-size:16px}.input-no-style[_ngcontent-%COMP%]{border:none;outline:none;background-color:initial;padding:0;margin:0;width:100%}.input-head[_ngcontent-%COMP%]{margin-bottom:6px;margin-left:2px}.items-selector[_ngcontent-%COMP%]{border:2px solid #efeaf9;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.tab-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:auto;border-radius:0 0 8px 8px}.tab-view[_ngcontent-%COMP%]{flex:1;background-color:#efeaf9;padding:10px;margin-bottom:12px;border-radius:10px}.tab-view[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .search-tip[_ngcontent-%COMP%]{margin-top:70px;margin-bottom:70px;text-align:center;color:#e6def6;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tab-view[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{background-color:#efeaf9;padding:8px 0;margin:0}.tab-view[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background-color:#fff}.spaced-container[_ngcontent-%COMP%]{flex-direction:row}.spaced-container[_ngcontent-%COMP%]   .skills-wrapper[_ngcontent-%COMP%]{border-radius:8px;max-height:100px;overflow:auto}.spaced-container[_ngcontent-%COMP%]   .skills-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent!important}.tool-tip-input[_ngcontent-%COMP%]{margin-left:12px;margin-top:-8px;margin-bottom:15px;color:#d2d2d2}.client[_ngcontent-%COMP%]{padding-left:4px}.tab[_ngcontent-%COMP%]{background-color:#fff;padding:8px;border-radius:8px 8px 0 0;width:100%;text-align:center;margin:2px 2px 0;z-index:10}.top-controls[_ngcontent-%COMP%]{width:100%;align-self:center;margin-top:22px}.search-bar[_ngcontent-%COMP%]{border:5px solid #efeaf9;border-radius:8px;background-color:#efeaf9;padding:0;margin:10px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#0b4870}.wrapper[_ngcontent-%COMP%]{padding:3px;margin:10px;overflow:auto}.right-view[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;margin-left:12px;justify-content:space-between;height:calc(100vh - 180px)}@media only screen and (max-width:1024px){.spaced-container[_ngcontent-%COMP%]{flex-direction:column}.dynamic-input[_ngcontent-%COMP%]{width:100%}.right-view[_ngcontent-%COMP%]{margin-left:0}.search-bar[_ngcontent-%COMP%]{width:-webkit-fill-available}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#efeaf9}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ffbe55;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#ffc971}  tag-input .ng2-tag-input.minimal-theme{padding:.25em}  tag-input .ng2-tag-input.minimal-theme tag delete-icon path{fill:#0b4870!important}  tag-input .ng2-tag-input.minimal-theme{z-index:0;border-bottom:none}  tag-input .ng2-tag-input.minimal-theme tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#0b4870;border-radius:8px;background:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;font-family:Open sans!important}  tag-input .ng2-tag-input.minimal-theme tag:not(.readonly):not(.tag--editing):active,   tag-input .ng2-tag-input.minimal-theme tag:not(.readonly):not(.tag--editing):focus,   tag-input .ng2-tag-input.minimal-theme tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#fdfdfd;color:#29315a}  tag-input .ng2-tag-input.minimal-theme tag.readonly{cursor:default}  tag-input .ng2-tag-input.minimal-theme tag.readonly:focus,   tag-input .ng2-tag-input.minimal-theme tag:focus{outline:0}  tag-input .ng2-tag-input.minimal-theme tag.tag--editing{cursor:text}.warning[_ngcontent-%COMP%]{color:#fff;padding:0 4px}.activity[_ngcontent-%COMP%]{font-family:Open sans;align-items:center}.activity[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 15px 0 0}.activity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:4px 5px 0 0}.activity[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:4px 8px 0 0;color:#0b4870}"]}),t})();var I=n("kh4u"),k=n("c9Ax"),j=n("o7am");function X(t,e){if(1&t){const t=u.Yb();u.Xb(0,"div",12),u.Xb(1,"input",13),u.ec("click",(function(){return u.Ac(t),u.hc(2).editRedirect()})),u.Wb(),u.Ic(2," \xa0\xa0 "),u.Xb(3,"input",14),u.ec("click",(function(){return u.Ac(t),u.hc(2).deleteConfirm()})),u.Wb(),u.Wb()}}function W(t,e){if(1&t&&(u.Xb(0,"h1",15),u.Ic(1),u.Wb()),2&t){const t=e.$implicit;u.Fb(1),u.Kc(" ",t.projectName," ")}}function S(t,e){if(1&t&&(u.Vb(0),u.Xb(1,"h1",1),u.Ic(2),u.Wb(),u.Tb(3,"br"),u.Xb(4,"div",2),u.Xb(5,"div",3),u.Xb(6,"div",4),u.Xb(7,"div",5),u.Xb(8,"h1",6),u.Xb(9,"span",7),u.Ic(10," ID: "),u.Wb(),u.Ic(11),u.Wb(),u.Xb(12,"h1",6),u.Xb(13,"span",7),u.Ic(14,"Client Name: "),u.Wb(),u.Ic(15),u.Wb(),u.Xb(16,"h1",6),u.Xb(17,"span",7),u.Ic(18," Description: "),u.Wb(),u.Ic(19),u.Wb(),u.Tb(20,"br"),u.Wb(),u.Gc(21,X,4,0,"div",8),u.Wb(),u.Tb(22,"br"),u.Tb(23,"br"),u.Xb(24,"h3",6),u.Ic(25," Projects "),u.Wb(),u.Tb(26,"br"),u.Xb(27,"div",9),u.Xb(28,"div",10),u.Gc(29,W,2,1,"h1",11),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Ub()),2&t){const t=u.hc();u.Fb(2),u.Lc(" Client: ",t.client.clientName," #",t.client.clientID,""),u.Fb(9),u.Kc(" ",t.client.clientID,""),u.Fb(4),u.Kc(" ",t.client.clientName,""),u.Fb(4),u.Kc(" ",t.client.about,""),u.Fb(2),u.nc("ngIf",(null==t.currentUser?null:t.currentUser.role)===t.Role.MANAGER),u.Fb(8),u.nc("ngForOf",t.client.projects)}}function F(t,e){1&t&&u.Tb(0,"app-loader")}let A=(()=>{class t{constructor(t,e,n,i){this.route=t,this.clientsService=e,this.router=n,this.authService=i,this.Role=I.a,this.fetching=!0,this.deleteConfirm=()=>{confirm("Are you sure? Deleting cannot be undone!")&&this.clientsService.deleteClient(this.route.snapshot.params.client).subscribe(t=>{this.router.navigate(["/clients"])})},this.editRedirect=()=>{this.router.navigate(["/clients/"+this.route.snapshot.params.client+"/edit"])}}ngOnInit(){this.authService.getUserInfo().subscribe(t=>{this.currentUser=t}),this.fetching=!0,this.clientsService.getClient(this.route.snapshot.params.client).subscribe(t=>{this.fetching=!1,this.client=t})}}return t.\u0275fac=function(e){return new(e||t)(u.Sb(m.a),u.Sb(h.a),u.Sb(m.b),u.Sb(k.a))},t.\u0275cmp=u.Mb({type:t,selectors:[["app-client-view"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"title-1"],[1,"time-bar"],[1,"spaced-container"],[1,"flex-pad"],[1,"profile-container"],[1,"sub-title-2"],[1,"font-grey"],["class","flex-display",4,"ngIf"],[1,"projects-wrapper"],[1,"project-container"],["class","sub-title-4 project",4,"ngFor","ngForOf"],[1,"flex-display"],["type","button","value","Edit",1,"button-xl","pointer","sub-title-6",3,"click"],["type","button","value","Delete",1,"button-xl","pointer","sub-title-6","warning",3,"click"],[1,"sub-title-4","project"]],template:function(t,e){1&t&&(u.Gc(0,S,30,7,"ng-container",0),u.Gc(1,F,1,0,"app-loader",0)),2&t&&(u.nc("ngIf",e.client),u.Fb(1),u.nc("ngIf",e.fetching))},directives:[i.m,i.l,j.a],styles:["[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#efeaf9}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ffbe55;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#ffc971}.flex-pad[_ngcontent-%COMP%]{display:flex;padding:10px}.profile-picture[_ngcontent-%COMP%]{width:200px;height:200px;object-fit:cover;border-radius:100px}.profile-container[_ngcontent-%COMP%]{display:flex;width:70%}.flex-display[_ngcontent-%COMP%], .profile-container[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}.flex-display[_ngcontent-%COMP%]{width:20%;margin-left:auto}@media only screen and (max-width:1024px){.flex-pad[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.flex-pad[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]{width:150px;height:150px}.flex-pad[_ngcontent-%COMP%]   .profile-container[_ngcontent-%COMP%]{padding-top:10px;padding-left:0;text-align:center}.flex-display[_ngcontent-%COMP%]{width:100%;flex-direction:row;justify-content:center}.flex-display[_ngcontent-%COMP%]   .button-xl[_ngcontent-%COMP%]{width:50%}}"]}),t})();var N=n("MFUF"),T=n("Fe25");function G(t,e){if(1&t&&(u.Xb(0,"option",15),u.Ic(1),u.Wb()),2&t){const t=e.$implicit;u.nc("ngValue",t),u.Fb(1),u.Kc(" ",t," ")}}function U(t,e){if(1&t&&(u.Xb(0,"option",15),u.Ic(1),u.Wb()),2&t){const t=e.$implicit;u.nc("ngValue",t),u.Fb(1),u.Kc(" ",t," ")}}function D(t,e){if(1&t&&(u.Xb(0,"option",15),u.Ic(1),u.Wb()),2&t){const t=e.$implicit;u.nc("ngValue",t),u.Fb(1),u.Kc(" ",t," ")}}function L(t,e){if(1&t&&u.Tb(0,"app-card",18),2&t){const t=e.$implicit;u.nc("routerLink",t.clientID)("title",t.clientName)("icon",t.icon)}}const R=function(t,e,n){return{id:"client-pagination",itemsPerPage:t,currentPage:e,totalItems:n}};function q(t,e){if(1&t&&(u.Xb(0,"div",16),u.Gc(1,L,1,3,"app-card",17),u.ic(2,"paginate"),u.Wb()),2&t){const t=u.hc();u.Fb(1),u.nc("ngForOf",u.kc(2,1,t.clientsUIModel,u.tc(4,R,t.retrievePageState.itemsCount,t.retrievePageState.pageNumber,t.totalItems)))}}function z(t,e){1&t&&u.Tb(0,"app-loader")}function E(t,e){1&t&&(u.Xb(0,"div",19),u.Xb(1,"strong"),u.Ic(2,"No records found!"),u.Wb(),u.Wb())}function K(t,e){1&t&&u.Tb(0,"input",20),2&t&&u.nc("routerLink","add")}let V=(()=>{class t{constructor(t,e,n){this.clientService=t,this.paginationService=e,this.authService=n,this.downIcon=s.b,this.leftIcon=s.c,this.expandedIndex=-1,this.Role=I.a,this.clientsUIModel=[],this.fetching=!0,this.searchQuery="",this.countOptions=[10,20,40],this.sortOptions=["Client ID","Client Name"],this.activeOptions=["All","Active","Inactive"],this.totalItems=30,this.getClientsList=()=>{this.fetching=!0,this.clientService.getClients(this.retrievePageState.pageNumber,this.retrievePageState.itemsCount,this.retrievePageState.sortOptions,this.retrievePageState.activeOptions,this.retrievePageState.query).subscribe(t=>{this.fetching=!1;const e=[];t.result.forEach(t=>{e.push(this.prepareClientUIModel(t))}),this.totalItems=t.totalPages*this.retrievePageState.itemsCount,this.clientsUIModel=e,this.clients=t.result},t=>{throw this.fetching=!1,this.clientsUIModel=[],t})},this.prepareClientUIModel=t=>({clientID:t.clientID,clientName:t.clientName,icon:s.q}),this.changePage=t=>{this.changePageState({id:"client-pagination",pageNumber:t,itemsCount:this.retrievePageState.itemsCount,sortOptions:this.retrievePageState.sortOptions,activeOptions:this.retrievePageState.activeOptions,query:this.retrievePageState.query}),this.getClientsList()},this.changeItemsCount=t=>{this.changePageState({id:"client-pagination",pageNumber:1,itemsCount:t,sortOptions:this.retrievePageState.sortOptions,activeOptions:this.retrievePageState.activeOptions,query:this.retrievePageState.query}),this.getClientsList()},this.checkEmpty=t=>{this.searchQuery=t,""===t&&this.getClientsList()},this.changeSortOption=t=>{this.changePageState({id:"client-pagination",pageNumber:1,itemsCount:this.retrievePageState.itemsCount,sortOptions:t,activeOptions:this.retrievePageState.activeOptions,query:this.retrievePageState.query}),this.getClientsList()},this.changeActiveOption=t=>{this.changePageState({id:"client-pagination",pageNumber:1,itemsCount:this.retrievePageState.itemsCount,sortOptions:this.retrievePageState.sortOptions,activeOptions:t,query:this.retrievePageState.query}),this.getClientsList()},this.changePageState=t=>{this.paginationService.setClientsPageState(t)}}ngOnInit(){this.authService.getUserInfo().subscribe(t=>{this.currentUser=t}),this.getClientsList()}get retrievePageState(){return this.paginationService.clientPageState}}return t.\u0275fac=function(e){return new(e||t)(u.Sb(h.a),u.Sb(N.a),u.Sb(k.a))},t.\u0275cmp=u.Mb({type:t,selectors:[["app-clients-card"]],decls:36,vars:11,consts:[[1,"top-controls"],[1,"title-1"],[1,"search-bar"],["type","text","placeholder","Search clients",1,"search-input-bar","sub-title-6",3,"ngModel","keyup.enter","ngModelChange","input"],["type","button","value","Search",1,"button-search","pointer",3,"click"],[1,"flex-display"],[1,"items-selector"],[1,"sub-title-6","font-grey"],[1,"drop-down","sub-title-6",3,"ngModel","ngModelChange"],["class","drop-option",3,"ngValue",4,"ngFor","ngForOf"],["class","stack-row",4,"ngIf"],["id","client-pagination",1,"sub-title-6","text-centered",3,"pageChange"],[4,"ngIf"],["class","no-records sub-title-6 text-centered",4,"ngIf"],["class","button-xl right-float pointer sub-title-6","type","button","value","Add Client",3,"routerLink",4,"ngIf"],[1,"drop-option",3,"ngValue"],[1,"stack-row"],["class","appcard",3,"routerLink","title","icon",4,"ngFor","ngForOf"],[1,"appcard",3,"routerLink","title","icon"],[1,"no-records","sub-title-6","text-centered"],["type","button","value","Add Client",1,"button-xl","right-float","pointer","sub-title-6",3,"routerLink"]],template:function(t,e){1&t&&(u.Xb(0,"div",0),u.Xb(1,"h1",1),u.Ic(2," Clients "),u.Wb(),u.Tb(3,"br"),u.Xb(4,"div",2),u.Xb(5,"input",3),u.ec("keyup.enter",(function(){return e.getClientsList()}))("ngModelChange",(function(t){return e.retrievePageState.query=t}))("input",(function(t){return e.checkEmpty(t.target.value)})),u.Wb(),u.Xb(6,"input",4),u.ec("click",(function(){return e.getClientsList()})),u.Wb(),u.Wb(),u.Ic(7," \xa0 "),u.Xb(8,"div",5),u.Xb(9,"div",6),u.Xb(10,"h3",7),u.Ic(11," Sort "),u.Wb(),u.Xb(12,"select",8),u.ec("ngModelChange",(function(t){return e.changeSortOption(t)})),u.Gc(13,G,2,2,"option",9),u.Wb(),u.Wb(),u.Ic(14," \xa0 "),u.Xb(15,"div",6),u.Xb(16,"h3",7),u.Ic(17," Items \xa0 "),u.Wb(),u.Xb(18,"select",8),u.ec("ngModelChange",(function(t){return e.changeItemsCount(t)})),u.Gc(19,U,2,2,"option",9),u.Wb(),u.Wb(),u.Ic(20," \xa0 "),u.Xb(21,"div",6),u.Xb(22,"h3",7),u.Ic(23," Show \xa0 "),u.Wb(),u.Xb(24,"select",8),u.ec("ngModelChange",(function(t){return e.changeActiveOption(t)})),u.Gc(25,D,2,2,"option",9),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Tb(26,"br"),u.Xb(27,"div"),u.Xb(28,"div"),u.Gc(29,q,3,8,"div",10),u.Xb(30,"pagination-controls",11),u.ec("pageChange",(function(t){return e.changePage(t)})),u.Wb(),u.Wb(),u.Gc(31,z,1,0,"app-loader",12),u.Gc(32,E,3,0,"div",13),u.Gc(33,K,1,1,"input",14),u.Tb(34,"br"),u.Tb(35,"br"),u.Wb()),2&t&&(u.Fb(5),u.nc("ngModel",e.retrievePageState.query),u.Fb(7),u.nc("ngModel",e.retrievePageState.sortOptions),u.Fb(1),u.nc("ngForOf",e.sortOptions),u.Fb(5),u.nc("ngModel",e.retrievePageState.itemsCount),u.Fb(1),u.nc("ngForOf",e.countOptions),u.Fb(5),u.nc("ngModel",e.retrievePageState.activeOptions),u.Fb(1),u.nc("ngForOf",e.activeOptions),u.Fb(4),u.nc("ngIf",!e.fetching&&e.clientsUIModel.length),u.Fb(2),u.nc("ngIf",e.fetching),u.Fb(1),u.nc("ngIf",!e.clientsUIModel.length&&!e.fetching),u.Fb(1),u.nc("ngIf",(null==e.currentUser?null:e.currentUser.role)===e.Role.MANAGER))},directives:[c.b,c.l,c.n,c.r,i.l,i.m,o.c,c.o,c.s,T.a,m.c,j.a],pipes:[o.b],styles:[".right-float[_ngcontent-%COMP%]{float:right}.stack-row[_ngcontent-%COMP%]{flex-wrap:wrap}.appcard[_ngcontent-%COMP%], .stack-row[_ngcontent-%COMP%]{display:flex;box-sizing:border-box}.appcard[_ngcontent-%COMP%]{margin-top:25px;overflow:hidden;flex-basis:33%}.appcard[_ngcontent-%COMP%]:hover{cursor:pointer}.appcard[_ngcontent-%COMP%]:focus{outline:0;box-shadow:none!important}@media only screen and (max-width:1024px){.stack-row[_ngcontent-%COMP%]{flex-direction:column!important;flex-wrap:wrap}.appcard[_ngcontent-%COMP%]{display:block;margin-top:10px}}"]}),t})(),$=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Mb({type:t,selectors:[["app-clients"]],decls:2,vars:0,consts:[[1,"coda-content"]],template:function(t,e){1&t&&(u.Xb(0,"div",0),u.Tb(1,"router-outlet"),u.Wb())},directives:[m.g],styles:[""]}),t})();var B=n("r+kj");const Y=[{path:"",component:$,children:[{path:"",component:V},{path:"add",component:_,canActivate:[B.a],data:{roles:[I.a.MANAGER]}},{path:":client",component:A},{path:":client/edit",component:_,canActivate:[B.a],data:{roles:[I.a.MANAGER]}}]}];let Q=(()=>{class t{}return t.\u0275mod=u.Qb({type:t}),t.\u0275inj=u.Pb({factory:function(e){return new(e||t)},imports:[[m.f.forChild(Y)],m.f]}),t})(),J=(()=>{class t{}return t.\u0275mod=u.Qb({type:t}),t.\u0275inj=u.Pb({factory:function(e){return new(e||t)},imports:[[i.c,Q,c.h,c.q,o.a,r.b,a.a]]}),t})()}}]);