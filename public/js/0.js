webpackJsonp([0],{

/***/ 1590:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1591);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("2dddad8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f8d854c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./blank.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f8d854c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./blank.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.search[data-v-5f8d854c]{\n    border: 1px solid #bdb3b3;\n}\n.contact-profile[data-v-5f8d854c]{\n    width:50px;\n    height: 50px;\n}\n.box-shadow[data-v-5f8d854c]{\n    -webkit-box-shadow: 0px 0px 1px 1px #cfcfcf;\n            box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.contact-pic[data-v-5f8d854c]{\n    width: 50px;\n    height: 50px;\n}\n.table td[data-v-5f8d854c]{\n    padding: 16px;\n    vertical-align: middle;\n}\n.contacts-box .custom-control-inline[data-v-5f8d854c]{\n    margin-right: 0;\n}\n.custom-control-label[data-v-5f8d854c]::before{\n    width: 100px;\n    height: 100px;\n}\n.contact-page[data-v-5f8d854c]{\n    font-size: 14px;\n}\n.options a[data-v-5f8d854c]:hover,.options2 a[data-v-5f8d854c]:hover{\n    background-color: #eee;\n}\n\n\n/* to do list */\n.todoside-menu a[data-v-5f8d854c]:hover{\n    background-color: #f5f5f5;\n}\n.todoside-menu a[data-v-5f8d854c]{\n    font-size: 15px;\n    color: #333;\n}\n.faExclamationCircle[data-v-5f8d854c]::before{\n    content: \"\\F06A\";\n    font-size: 14px;\n    top:-10px;\n    position: relative;\n}\n.tasksearch[data-v-5f8d854c],.tasks-list[data-v-5f8d854c]{\n    -webkit-box-shadow:0px 0px 1px 1px #cfcfcf;\n            box-shadow:0px 0px 1px 1px #cfcfcf;\n}\n.todo[data-v-5f8d854c]{\n    padding: 15px;\n    background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "blank",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {},
    // ===component Data properties
    data: function data() {
        return {
            modalShow: false,
            newname: '',
            newemail: '',
            newnumber: '',
            newlocation: '',
            newrole: '',
            contacts: [{
                name: 'Jon',
                img: __webpack_require__(774),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Doe',
                img: __webpack_require__(771),
                email: 'doe@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Addison',
                img: __webpack_require__(768),
                email: 'addison@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Jon',
                img: __webpack_require__(775),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Doe',
                img: __webpack_require__(774),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Jon',
                img: __webpack_require__(786),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }],

            //                this is tasks page data
            modalTask: false,
            newtaskname: '',
            newtaskdesc: '',
            newtaskdeadline: '',
            newimportant: '',
            tasks: [{
                tasktitle: 'Task-1',
                taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                taskdeadline: '14/04/2018',
                important: true
            }, {
                tasktitle: 'Task-2',
                taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                taskdeadline: '14/04/2018',
                important: true
            }, {
                tasktitle: 'Task-3',
                taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                taskdeadline: '14/04/2018',
                important: 'true'
            }, {
                tasktitle: 'Task-4',
                taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                taskdeadline: '14/04/2018',
                important: 'true'
            }, {
                tasktitle: 'Task-5',
                taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                taskdeadline: '14/04/2018',
                important: 'true'
            }, {
                tasktitle: 'Task-6',
                taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                taskdeadline: '14/04/2018',
                important: 'true'
            }, {
                tasktitle: 'Task-7',
                taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                taskdeadline: '14/04/2018',
                important: 'true'
            }]
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {},

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {
        addContact: function addContact() {
            this.contacts.push({
                name: this.newname,
                email: this.newemail,
                number: this.newnumber,
                location: this.newlocation,
                role: this.newrole
            }), this.modalShow = false;
        },

        //            task section

        addTask: function addTask() {
            this.tasks.push({
                tasktitle: this.newtaskname,
                taskdescription: this.newtaskdesc,
                taskdeadline: this.newtaskdeadline,
                important: this.newimportant
            }), this.newtaskname = '', this.newtaskdesc = '', this.newtaskdeadline = '', this.newimportant = false, this.modalTask = false;
        }

    }

});

/***/ }),

/***/ 1593:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "contact-page" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid bg-white mt-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-2" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary mt-3",
                      on: {
                        click: function($event) {
                          _vm.modalShow = !_vm.modalShow
                        }
                      }
                    },
                    [_vm._v("Add New Contact")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "hide-footer": true,
                        title: "Add your contact here"
                      },
                      model: {
                        value: _vm.modalShow,
                        callback: function($$v) {
                          _vm.modalShow = $$v
                        },
                        expression: "modalShow"
                      }
                    },
                    [
                      _c("b-container", { attrs: { fluid: "" } }, [
                        _c(
                          "form",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newname,
                                  expression: "newname"
                                }
                              ],
                              staticClass: "form-control mt-3",
                              attrs: {
                                type: "text",
                                placeholder: "Enter name"
                              },
                              domProps: { value: _vm.newname },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newname = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "btn btn-primary mt-3",
                              attrs: { type: "file" }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newnumber,
                                  expression: "newnumber"
                                }
                              ],
                              staticClass: "form-control mt-3",
                              attrs: {
                                type: "text",
                                placeholder: "Enter phone number"
                              },
                              domProps: { value: _vm.newnumber },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newnumber = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newemail,
                                  expression: "newemail"
                                }
                              ],
                              staticClass: "form-control mt-3",
                              attrs: {
                                type: "email",
                                placeholder: "Enter email"
                              },
                              domProps: { value: _vm.newemail },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newemail = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newrole,
                                  expression: "newrole"
                                }
                              ],
                              staticClass: "form-control mt-3",
                              attrs: {
                                type: "text",
                                placeholder: "Enter role"
                              },
                              domProps: { value: _vm.newrole },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newrole = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newlocation,
                                  expression: "newlocation"
                                }
                              ],
                              staticClass: "form-control mt-3 mb-3",
                              attrs: { type: "text", placeholder: "Location" },
                              domProps: { value: _vm.newlocation },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newlocation = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              {
                                staticClass: "float-right",
                                attrs: { variant: "primary" },
                                on: { click: _vm.addContact }
                              },
                              [
                                _vm._v(
                                  "\n                                        Submit\n                                    "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-10" }, [
                _c("div", { staticClass: "box-shadow mt-4" }, [
                  _c("div", { staticClass: "contacts-box" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table " },
                        _vm._l(_vm.contacts, function(contact, index) {
                          return _c("tr", [
                            _c("td", [_c("b-form-checkbox")], 1),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(contact.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "contact-pic rounded-circle",
                                attrs: { src: contact.img, alt: "profile" }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(contact.email))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(contact.contact))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(contact.role))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(contact.location))]),
                            _vm._v(" "),
                            _vm._m(3, true),
                            _vm._v(" "),
                            _vm._m(4, true)
                          ])
                        })
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "todo mt-5" }, [
      _c("div", { staticClass: "todoside-menu" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-3" }, [
            _c("div", { staticClass: "side-content " }, [
              _c(
                "div",
                { staticClass: "box-shadow" },
                [
                  _c("h1", { staticClass: "p-3 mb-4" }, [_vm._v("Todo's")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-3" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-block",
                        on: {
                          click: function($event) {
                            _vm.modalTask = !_vm.modalTask
                          }
                        }
                      },
                      [_vm._v("Add Task")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "hide-footer": true,
                        title: "Add Your Task Here"
                      },
                      model: {
                        value: _vm.modalTask,
                        callback: function($$v) {
                          _vm.modalTask = $$v
                        },
                        expression: "modalTask"
                      }
                    },
                    [
                      _c("b-container", { attrs: { fluid: "" } }, [
                        _c(
                          "form",
                          [
                            _c(
                              "label",
                              {
                                staticClass: "mt-2",
                                attrs: { for: "tasktitle" }
                              },
                              [_vm._v("Task Title")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newtaskname,
                                  expression: "newtaskname"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "tasktitle",
                                placeholder: "Enter Title"
                              },
                              domProps: { value: _vm.newtaskname },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newtaskname = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "mt-2",
                                attrs: { for: "taskdesc" }
                              },
                              [_vm._v("Task Description")]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newtaskdesc,
                                  expression: "newtaskdesc"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "description",
                                placeholder: "Add description here",
                                rows: "5",
                                id: "taskdesc"
                              },
                              domProps: { value: _vm.newtaskdesc },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newtaskdesc = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "mt-2",
                                attrs: { for: "deadline" }
                              },
                              [_vm._v("Deadline")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newtaskdeadline,
                                  expression: "newtaskdeadline"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "date",
                                placeholder: "Deadline",
                                id: "deadline"
                              },
                              domProps: { value: _vm.newtaskdeadline },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newtaskdeadline = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              [
                                _c("b-form-checkbox", {
                                  staticClass: "mt-2",
                                  model: {
                                    value: _vm.newimportant,
                                    callback: function($$v) {
                                      _vm.newimportant = $$v
                                    },
                                    expression: "newimportant"
                                  }
                                }),
                                _vm._v(" Click if this a important task")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              {
                                staticClass: "float-right mt-2",
                                attrs: { variant: "primary" },
                                on: { click: _vm.addTask }
                              },
                              [
                                _vm._v(
                                  "\n                                            Submit\n                                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _vm._m(9),
                  _vm._v(" "),
                  _vm._m(10)
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-9" }, [
            _vm._m(11),
            _vm._v(" "),
            _c("div", { staticClass: "tasks-list mt-5" }, [
              _vm._m(12),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table" },
                _vm._l(_vm.tasks, function(task, index) {
                  return _c("tr", [
                    _vm._m(13, true),
                    _vm._v(" "),
                    _c("td", [_c("b-form-checkbox")], 1),
                    _vm._v(" "),
                    _c("td", [
                      _c("h3", [
                        _vm._v(_vm._s(task.tasktitle) + " "),
                        _c("i", {
                          staticClass: "fa text-danger",
                          class: { faExclamationCircle: task.important == true }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(task.taskdescription))]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v("Deadline:")
                      ]),
                      _vm._v(
                        " " +
                          _vm._s(task.taskdeadline) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(14, true),
                    _vm._v(" "),
                    _vm._m(15, true)
                  ])
                })
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(16)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid bg-white" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "p-5" }, [
            _c("h4", [
              _c("span", [
                _c("i", { staticClass: "fa fa-address-book-o" }),
                _vm._v(" Contacts\n                        ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "float-right" }, [
                _c("input", {
                  staticClass: "search form-control pl-2 pr-2",
                  attrs: { type: "search", placeholder: "Search here" }
                })
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-shadow mt-4" }, [
      _c("div", { staticClass: "border-bottom border-secondary p-3" }, [
        _c("img", {
          staticClass: "contact-profile d-inline-block rounded-circle",
          attrs: {
            src: __webpack_require__(774),
            alt: "user profile"
          }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "d-inline-block" }, [_vm._v("  Jon Doe")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "options border-bottom border-secondary" }, [
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("Contacts")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("Frequently contacted ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("Starred Contacts")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "options2" }, [
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("Groups")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("Friends")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("Clients")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("Recent Workers")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "p-3 d-block text-dark", attrs: { href: "#" } },
          [_vm._v("New Group")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "total-contacts p-5 " }, [
      _c("span", [_vm._v("All Contacts(25)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { staticClass: "fa fa-edit" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { staticClass: "fa fa-trash-o" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "alltasks border-bottom border-secondary d-block p-3",
        attrs: { href: "#" }
      },
      [
        _c("i", {
          staticClass: "fa fa-tasks",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  All Tasks")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "today d-block p-3", attrs: { href: "#" } }, [
      _c("i", {
        staticClass: "fa fa-list-ol",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("  Today's Tasks (10)")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "needaction d-block p-3", attrs: { href: "#" } },
      [
        _c("i", {
          staticClass: "fa fa-reply",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Action Needed Taks (25)")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "important d-block p-3", attrs: { href: "#" } },
      [
        _c("i", {
          staticClass: "fa fa-exclamation-circle",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Important Tasks (13)")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "pending d-block p-3", attrs: { href: "#" } },
      [
        _c("i", {
          staticClass: "fa fa-clock-o",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Pending Taks (54)")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "deleted d-block p-3", attrs: { href: "#" } },
      [
        _c("i", {
          staticClass: "fa fa-trash-o",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Deleted Tasks")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tasksearch p-3" }, [
      _c("input", {
        staticClass: "form-control mt-4 mb-4",
        attrs: { type: "text", placeholder: "Search" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "task-type p-3" }, [
      _c("h3", [_vm._v("All Tasks")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { staticClass: "fa fa-plus" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { staticClass: "fa fa-edit" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { staticClass: "fa fa-trash-o" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sample-page" }, [
      _c("h1", [_vm._v("Hello World")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f8d854c", module.exports)
  }
}

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1590)
}
var normalizeComponent = __webpack_require__(242)
/* script */
var __vue_script__ = __webpack_require__(1592)
/* template */
var __vue_template__ = __webpack_require__(1593)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f8d854c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\components\\pages\\blank.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f8d854c", Component.options)
  } else {
    hotAPI.reload("data-v-5f8d854c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6";

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar1.jpg?2d4968bd8ec1519b0535ba849643dd1c";

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6";

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar.jpg?9ec1314ec47a05d978a1e1568daab7ec";

/***/ })

});