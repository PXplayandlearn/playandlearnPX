webpackJsonp([22],{1358:function(t,a,e){var s=e(1359);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(73)("d522feca",s,!0,{})},1359:function(t,a,e){(t.exports=e(38)(!1)).push([t.i,'.search[data-v-46da9a48]{border:1px solid #bdb3b3}.contact-profile[data-v-46da9a48]{width:50px;height:50px}.box-shadow[data-v-46da9a48]{-webkit-box-shadow:0 0 1px 1px #cfcfcf;box-shadow:0 0 1px 1px #cfcfcf}.contact-pic[data-v-46da9a48]{width:50px;height:50px}.table td[data-v-46da9a48]{padding:16px;vertical-align:middle}.contacts-box .custom-control-inline[data-v-46da9a48]{margin-right:0}.custom-control-label[data-v-46da9a48]:before{width:100px;height:100px}.contact-page[data-v-46da9a48]{font-size:14px}.options2 a[data-v-46da9a48]:hover,.options a[data-v-46da9a48]:hover{background-color:#eee}.todoside-menu a[data-v-46da9a48]:hover{background-color:#f5f5f5}.todoside-menu a[data-v-46da9a48]{font-size:15px;color:#333}.faExclamationCircle[data-v-46da9a48]:before{content:"\\F06A";font-size:14px;top:-10px;position:relative}.tasks-list[data-v-46da9a48],.tasksearch[data-v-46da9a48]{-webkit-box-shadow:0 0 1px 1px #cfcfcf;box-shadow:0 0 1px 1px #cfcfcf}.todo[data-v-46da9a48]{padding:15px;background-color:#fff}',""])},1360:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"blank",props:{},components:{},data:function(){return{modalShow:!1,newname:"",newemail:"",newnumber:"",newlocation:"",newrole:"",contacts:[{name:"Jon",img:e(548),email:"jon@gmail.com",contact:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Doe",img:e(545),email:"doe@gmail.com",contact:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Addison",img:e(542),email:"addison@gmail.com",contact:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Jon",img:e(549),email:"jon@gmail.com",contact:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Doe",img:e(548),email:"jon@gmail.com",contact:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Jon",img:e(560),email:"jon@gmail.com",contact:"0123456789",role:"Web developer",location:"Hyderabad"}],modalTask:!1,newtaskname:"",newtaskdesc:"",newtaskdeadline:"",newimportant:"",tasks:[{tasktitle:"Task-1",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:!0},{tasktitle:"Task-2",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:!0},{tasktitle:"Task-3",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true"},{tasktitle:"Task-4",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true"},{tasktitle:"Task-5",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true"},{tasktitle:"Task-6",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true"},{tasktitle:"Task-7",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true"}]}},mounted:function(){},computed:{},methods:{addContact:function(){this.contacts.push({name:this.newname,email:this.newemail,number:this.newnumber,location:this.newlocation,role:this.newrole}),this.modalShow=!1},addTask:function(){this.tasks.push({tasktitle:this.newtaskname,taskdescription:this.newtaskdesc,taskdeadline:this.newtaskdeadline,important:this.newimportant}),this.newtaskname="",this.newtaskdesc="",this.newtaskdeadline="",this.newimportant=!1,this.modalTask=!1}}}},1361:function(t,a,e){var s=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container-fluid bg-white"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"p-5"},[a("h4",[a("span",[a("i",{staticClass:"fa fa-address-book-o"}),this._v(" Contacts\n                        ")]),this._v(" "),a("span",{staticClass:"float-right"},[a("input",{staticClass:"search form-control pl-2 pr-2",attrs:{type:"search",placeholder:"Search here"}})])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box-shadow mt-4"},[s("div",{staticClass:"border-bottom border-secondary p-3"},[s("img",{staticClass:"contact-profile d-inline-block rounded-circle",attrs:{src:e(548),alt:"user profile"}}),t._v(" "),s("p",{staticClass:"d-inline-block"},[t._v("  Jon Doe")])]),t._v(" "),s("div",{staticClass:"options border-bottom border-secondary"},[s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("Contacts")]),t._v(" "),s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("Frequently contacted ")]),t._v(" "),s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("Starred Contacts")])]),t._v(" "),s("div",{staticClass:"options2"},[s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("Groups")]),t._v(" "),s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("Friends")]),t._v(" "),s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("Clients")]),t._v(" "),s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("Recent Workers")]),t._v(" "),s("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#"}},[t._v("New Group")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"total-contacts p-5 "},[a("span",[this._v("All Contacts(25)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("span",{staticClass:"fa fa-edit"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("span",{staticClass:"fa fa-trash-o"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"alltasks border-bottom border-secondary d-block p-3",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-tasks",attrs:{"aria-hidden":"true"}}),this._v("  All Tasks")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"today d-block p-3",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-list-ol",attrs:{"aria-hidden":"true"}}),this._v("  Today's Tasks (10)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"needaction d-block p-3",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-reply",attrs:{"aria-hidden":"true"}}),this._v("  Action Needed Taks (25)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"important d-block p-3",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}}),this._v("  Important Tasks (13)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"pending d-block p-3",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),this._v("  Pending Taks (54)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"deleted d-block p-3",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}}),this._v("  Deleted Tasks")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tasksearch p-3"},[a("input",{staticClass:"form-control mt-4 mb-4",attrs:{type:"text",placeholder:"Search"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"task-type p-3"},[a("h3",[this._v("All Tasks")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("span",{staticClass:"fa fa-plus"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("span",{staticClass:"fa fa-edit"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("span",{staticClass:"fa fa-trash-o"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sample-page"},[a("h1",[this._v("Hello World")])])}];t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"contact-page"},[t._m(0),t._v(" "),e("div",{staticClass:"container-fluid bg-white mt-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[t._m(1),t._v(" "),e("button",{staticClass:"btn btn-primary mt-3",on:{click:function(a){t.modalShow=!t.modalShow}}},[t._v("Add New Contact")]),t._v(" "),e("b-modal",{attrs:{"hide-footer":!0,title:"Add your contact here"},model:{value:t.modalShow,callback:function(a){t.modalShow=a},expression:"modalShow"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newname,expression:"newname"}],staticClass:"form-control mt-3",attrs:{type:"text",placeholder:"Enter name"},domProps:{value:t.newname},on:{input:function(a){a.target.composing||(t.newname=a.target.value)}}}),t._v(" "),e("input",{staticClass:"btn btn-primary mt-3",attrs:{type:"file"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newnumber,expression:"newnumber"}],staticClass:"form-control mt-3",attrs:{type:"text",placeholder:"Enter phone number"},domProps:{value:t.newnumber},on:{input:function(a){a.target.composing||(t.newnumber=a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newemail,expression:"newemail"}],staticClass:"form-control mt-3",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.newemail},on:{input:function(a){a.target.composing||(t.newemail=a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newrole,expression:"newrole"}],staticClass:"form-control mt-3",attrs:{type:"text",placeholder:"Enter role"},domProps:{value:t.newrole},on:{input:function(a){a.target.composing||(t.newrole=a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newlocation,expression:"newlocation"}],staticClass:"form-control mt-3 mb-3",attrs:{type:"text",placeholder:"Location"},domProps:{value:t.newlocation},on:{input:function(a){a.target.composing||(t.newlocation=a.target.value)}}}),t._v(" "),e("b-btn",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:t.addContact}},[t._v("\n                                        Submit\n                                    ")])],1)])],1)],1),t._v(" "),e("div",{staticClass:"col-10"},[e("div",{staticClass:"box-shadow mt-4"},[e("div",{staticClass:"contacts-box"},[t._m(2),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table "},t._l(t.contacts,function(a,s){return e("tr",[e("td",[e("b-form-checkbox")],1),t._v(" "),e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[e("img",{staticClass:"contact-pic rounded-circle",attrs:{src:a.img,alt:"profile"}})]),t._v(" "),e("td",[t._v(t._s(a.email))]),t._v(" "),e("td",[t._v(t._s(a.contact))]),t._v(" "),e("td",[t._v(t._s(a.role))]),t._v(" "),e("td",[t._v(t._s(a.location))]),t._v(" "),t._m(3,!0),t._v(" "),t._m(4,!0)])}))])])])])])])])])]),t._v(" "),e("div",{staticClass:"todo mt-5"},[e("div",{staticClass:"todoside-menu"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"side-content "},[e("div",{staticClass:"box-shadow"},[e("h1",{staticClass:"p-3 mb-4"},[t._v("Todo's")]),t._v(" "),e("div",{staticClass:"p-3"},[e("button",{staticClass:"btn btn-primary btn-block",on:{click:function(a){t.modalTask=!t.modalTask}}},[t._v("Add Task")])]),t._v(" "),e("b-modal",{attrs:{"hide-footer":!0,title:"Add Your Task Here"},model:{value:t.modalTask,callback:function(a){t.modalTask=a},expression:"modalTask"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("label",{staticClass:"mt-2",attrs:{for:"tasktitle"}},[t._v("Task Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newtaskname,expression:"newtaskname"}],staticClass:"form-control",attrs:{type:"text",id:"tasktitle",placeholder:"Enter Title"},domProps:{value:t.newtaskname},on:{input:function(a){a.target.composing||(t.newtaskname=a.target.value)}}}),t._v(" "),e("label",{staticClass:"mt-2",attrs:{for:"taskdesc"}},[t._v("Task Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newtaskdesc,expression:"newtaskdesc"}],staticClass:"form-control",attrs:{name:"description",placeholder:"Add description here",rows:"5",id:"taskdesc"},domProps:{value:t.newtaskdesc},on:{input:function(a){a.target.composing||(t.newtaskdesc=a.target.value)}}}),t._v(" "),e("label",{staticClass:"mt-2",attrs:{for:"deadline"}},[t._v("Deadline")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newtaskdeadline,expression:"newtaskdeadline"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Deadline",id:"deadline"},domProps:{value:t.newtaskdeadline},on:{input:function(a){a.target.composing||(t.newtaskdeadline=a.target.value)}}}),t._v(" "),e("label",[e("b-form-checkbox",{staticClass:"mt-2",model:{value:t.newimportant,callback:function(a){t.newimportant=a},expression:"newimportant"}}),t._v(" Click if this a important task")],1),t._v(" "),e("b-btn",{staticClass:"float-right mt-2",attrs:{variant:"primary"},on:{click:t.addTask}},[t._v("\n                                            Submit\n                                        ")])],1)])],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)],1)])]),t._v(" "),e("div",{staticClass:"col-9"},[t._m(11),t._v(" "),e("div",{staticClass:"tasks-list mt-5"},[t._m(12),t._v(" "),e("table",{staticClass:"table"},t._l(t.tasks,function(a,s){return e("tr",[t._m(13,!0),t._v(" "),e("td",[e("b-form-checkbox")],1),t._v(" "),e("td",[e("h3",[t._v(t._s(a.tasktitle)+" "),e("i",{staticClass:"fa text-danger",class:{faExclamationCircle:1==a.important}})]),t._v(" "),e("p",[t._v(t._s(a.taskdescription))]),t._v(" "),e("span",{staticClass:"text-danger"},[t._v("Deadline:")]),t._v(" "+t._s(a.taskdeadline)+"\n                                ")]),t._v(" "),t._m(14,!0),t._v(" "),t._m(15,!0)])}))])])])])]),t._v(" "),t._m(16)])},staticRenderFns:s}},1508:function(t,a,e){var s=e(182)(e(1360),e(1361),!1,function(t){e(1358)},"data-v-46da9a48",null);t.exports=s.exports},542:function(t,a){t.exports="/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a"},545:function(t,a){t.exports="/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6"},548:function(t,a){t.exports="/images/avatar1.jpg?2d4968bd8ec1519b0535ba849643dd1c"},549:function(t,a){t.exports="/images/avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6"},560:function(t,a){t.exports="/images/avatar.jpg?9ec1314ec47a05d978a1e1568daab7ec"}});