webpackJsonp([11],{

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1339);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("998a9fa2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4062f0c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4062f0c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.chat[data-v-4062f0c2] {\n  min-height: calc(100vh - 140px);\n  height: calc(100vh - 140px);\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 1340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue__ = __webpack_require__(1341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_js_chat_data__ = __webpack_require__(915);
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "chat_page",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {
        chat: __WEBPACK_IMPORTED_MODULE_1_components_widgets_chat_component_chat_large_vue___default.a
    },
    // ===component Data properties
    data: function data() {
        return {
            chat: __WEBPACK_IMPORTED_MODULE_2_assets_js_chat_data__["a" /* default */]
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {},

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1342)
}
var normalizeComponent = __webpack_require__(242)
/* script */
var __vue_script__ = __webpack_require__(1344)
/* template */
var __vue_template__ = __webpack_require__(1345)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f745706"
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
Component.options.__file = "resources\\assets\\components\\widgets\\chat_component\\chat-large.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f745706", Component.options)
  } else {
    hotAPI.reload("data-v-5f745706", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("63fe130f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f745706\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-large.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f745706\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-large.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(243);
exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.desc-img[data-v-5f745706] {\n  height: 40px;\n  width: 40px;\n}\n.chat_block[data-v-5f745706] {\n  border-bottom: 1px solid #f4f2f2;\n}\n.chatalign[data-v-5f745706] {\n  background-color: #fff !important;\n  height: 100%;\n}\n.chatalign ul[data-v-5f745706] {\n    padding: 0;\n}\n.chatalign[data-v-5f745706] .ss-container {\n    padding-right: 10px;\n}\n.converstion_back[data-v-5f745706] {\n  height: 100%;\n  overflow: hidden;\n  background: #fff !important;\n  border: 1px solid #d8d6d6;\n}\n.converstion_back ul[data-v-5f745706] {\n    padding: 0;\n}\n.converstion_back > .chat_header[data-v-5f745706] {\n    background-color: #eaf5ff;\n    padding: 4px;\n    font-size: 20px;\n    font-weight: 500;\n}\n.converstion_back > .chat_header label[data-v-5f745706] {\n      width: 25px;\n      height: 25px;\n}\n.converstion_back > .chat_header .bg1[data-v-5f745706] {\n      background-image: url(" + escape(__webpack_require__(850)) + ");\n}\n.converstion_back > .chat_header .bg2[data-v-5f745706] {\n      background-image: url(" + escape(__webpack_require__(890)) + ");\n}\n.converstion_back > .chat_header .bg3[data-v-5f745706] {\n      background-image: url(" + escape(__webpack_require__(891)) + ");\n}\n.converstion_back[data-v-5f745706] .ss-wrapper {\n    height: 90%;\n}\n.received div p[data-v-5f745706],\n.sent div p[data-v-5f745706] {\n  border-radius: 7px;\n  display: inline-block;\n  padding: 7px 12px;\n  position: relative;\n  border: 1px solid #d4d2d2;\n}\n.received div p[data-v-5f745706]::after {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -12px;\n  right: auto;\n  top: 0px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #dbf2fa transparent transparent transparent;\n}\n.received div p[data-v-5f745706]::before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -12px;\n  right: auto;\n  top: -1px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #d4d2d2 transparent transparent transparent;\n}\n.sent div p[data-v-5f745706]::before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: -13px;\n  top: -1px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #d4d2d2 transparent transparent transparent;\n}\n.sent div p[data-v-5f745706]::after {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: -12px;\n  top: 0;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #fff transparent transparent transparent;\n}\n.self[data-v-5f745706] {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.self .msg[data-v-5f745706] {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  border-bottom-right-radius: 0px;\n  -webkit-box-shadow: 1px 2px 0px #D4D4D4;\n          box-shadow: 1px 2px 0px #D4D4D4;\n}\n.sent > div[data-v-5f745706] {\n  text-align: right;\n  padding: 0 17px 0 17px;\n}\n.sent > div .msg_time[data-v-5f745706] {\n    font-size: 9px;\n}\n.sent > div p[data-v-5f745706] {\n    background-color: #fff;\n}\n.received > div[data-v-5f745706] {\n  text-align: left;\n  padding: 0 17px 0 17px;\n}\n.received > div .msg_time[data-v-5f745706] {\n    font-size: 9px;\n}\n.received > div p[data-v-5f745706] {\n    background-color: #dbf2fa;\n}\n.chat_content[data-v-5f745706] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.send-btn[data-v-5f745706] {\n  border-radius: 0;\n}\n.status-online[data-v-5f745706] {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  background-color: #63c17f;\n  position: relative;\n  top: 40px;\n  left: -8px;\n  border: 2px solid #fff;\n}\n.person_name[data-v-5f745706]:before {\n  content: ' \\25CF';\n  font-size: 21px;\n  position: relative;\n  top: -11px;\n  left: -27px;\n  color: #63c17f;\n}\n.profile[data-v-5f745706] {\n  padding-bottom: 15px;\n  border: none;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #FFFFFF;\n}\n.wrapper .converstion_back .ss-container[data-v-5f745706] {\n  background-image: url(" + escape(__webpack_require__(850)) + ");\n}\n.bgcolor[data-v-5f745706] {\n  border: 2px solid #fff;\n  height: 10px;\n  width: 10px;\n}\n.colors[data-v-5f745706] {\n  line-height: 1rem;\n  margin-top: 2px;\n}\n.colors span[data-v-5f745706] {\n    font-size: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__);
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
    props: {
        list: {
            default: []
        }
    },
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default.a
    },
    mounted: function mounted() {},
    data: function data() {
        return {
            images: ['~img/pages/chat_background.png', '~img/pages/chat_background.png', '~img/pages/chat_background.png'],
            bgColor: __webpack_require__(850),
            className: '',
            newmessage: '',
            selected_user_index: 0
        };
    },

    methods: {
        send_message: function send_message() {
            if (this.newmessage.trim() != "") {
                this.list[this.selected_user_index].messages.push({
                    msg: this.newmessage,
                    from: "me"
                });
                this.newmessage = "";
                this.$refs.message_scroller.scrolltobottom();
            }
        },
        show_chat: function show_chat(user, index) {
            var _this = this;

            this.selected_user_index = index;
            setTimeout(function () {
                _this.$refs.input.focus();
            }, 20);
        }
    }
});

/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-sm-4 col-md-4 mt-3" }, [
      _c(
        "div",
        { staticClass: "chatalign" },
        [
          _c(
            "v-scroll",
            { attrs: { height: "100%", color: "#ccc", "bar-width": "3px" } },
            [
              _c(
                "ul",
                _vm._l(_vm.list, function(user, index) {
                  return _c("li", { key: index, staticClass: "chat_block" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: user.user },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.show_chat(user, index)
                          }
                        }
                      },
                      [
                        _c("article", { staticClass: "media" }, [
                          _c("a", { staticClass: "float-left desc-img mt-3" }, [
                            _c("img", {
                              staticClass: "img-fluid rounded-circle",
                              attrs: { src: user.image }
                            })
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "status-online  m-t-10" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "media-body pl-3 mb-1 mt-3 chat_content"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head text-success ",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v(_vm._s(user.user))]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("span", [_vm._v(_vm._s(user.status))])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "mt-4 text-muted" }, [
                            _vm._v("12.54")
                          ])
                        ])
                      ]
                    )
                  ])
                })
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4 col-md-5 mt-3" }, [
      _c(
        "div",
        { staticClass: "converstion_back" },
        [
          _c("div", { staticClass: "chat_header", class: _vm.bgColor }, [
            _c("span", { staticClass: "pl-4" }, [
              _c("img", {
                staticClass: "img-fluid rounded-circle desc-img ",
                attrs: { src: _vm.list[_vm.selected_user_index].image }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "pl-3 person_name text_dark" }, [
              _vm._v(_vm._s(_vm.list[_vm.selected_user_index].user) + " ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-right" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("label", { staticClass: "bg1" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bgColor,
                      expression: "bgColor"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: { type: "radio" },
                  domProps: {
                    value: __webpack_require__(850),
                    checked: _vm._q(
                      _vm.bgColor,
                      __webpack_require__(850)
                    )
                  },
                  on: {
                    change: function($event) {
                      _vm.bgColor = __webpack_require__(850)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "bg2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bgColor,
                      expression: "bgColor"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: { type: "radio" },
                  domProps: {
                    value: __webpack_require__(890),
                    checked: _vm._q(
                      _vm.bgColor,
                      __webpack_require__(890)
                    )
                  },
                  on: {
                    change: function($event) {
                      _vm.bgColor = __webpack_require__(890)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "bg3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bgColor,
                      expression: "bgColor"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: { type: "radio" },
                  domProps: {
                    value: __webpack_require__(891),
                    checked: _vm._q(
                      _vm.bgColor,
                      __webpack_require__(891)
                    )
                  },
                  on: {
                    change: function($event) {
                      _vm.bgColor = __webpack_require__(891)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-scroll",
            {
              ref: "message_scroller",
              style: { backgroundImage: "url(" + _vm.bgColor + ")" },
              attrs: {
                height: "calc(100% - 79px)",
                color: "#ccc",
                "bar-width": "3px"
              }
            },
            [
              _c(
                "ul",
                _vm._l(_vm.list[_vm.selected_user_index].messages, function(
                  item,
                  index
                ) {
                  return _c(
                    "li",
                    {
                      key: index,
                      class: [
                        { sent: item.from == "me" },
                        { received: item.from !== "me" }
                      ]
                    },
                    [
                      _c("div", [
                        _c("div", { staticClass: "msg_time" }, [
                          _vm._v(_vm._s(item.time))
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(item.msg))])
                      ])
                    ]
                  )
                })
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newmessage,
                  expression: "newmessage"
                }
              ],
              ref: "input",
              staticClass: " form-control",
              attrs: { type: "text", placeholder: "New Message" },
              domProps: { value: _vm.newmessage },
              on: {
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.send_message($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.newmessage = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-append" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success send-btn",
                  attrs: { type: "submit" },
                  on: { click: _vm.send_message }
                },
                [
                  _c("i", {
                    staticClass: "fa fa-paper-plane-o text-white",
                    attrs: { "aria-hidden": "true" }
                  })
                ]
              )
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4 col-md-3 mt-3" }, [
      _c("div", { staticClass: "profile text-center pt-3" }, [
        _c("img", {
          staticClass: "rounded-circle img-fluid profile-thumb mb-3",
          attrs: {
            src: _vm.list[_vm.selected_user_index].image,
            alt: "User Image"
          }
        }),
        _vm._v(" "),
        _c("h4", { staticClass: "text-gray" }, [
          _vm._v(_vm._s(_vm.list[_vm.selected_user_index].user))
        ]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.list[_vm.selected_user_index].status))]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Mobile Number: "),
          _c("span", [
            _c("b", [_vm._v(_vm._s(_vm.list[_vm.selected_user_index].mbl_num))])
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Organisation: "),
          _c("span", [
            _c("b", [_vm._v(_vm._s(_vm.list[_vm.selected_user_index].work))])
          ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "colors" }, [
      _c("span", [_vm._v("Select Image")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "attachments text-left p-4" }, [
      _c("h5", [_vm._v("Attachments")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(938), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(939), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(940), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(941), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(942), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(922), alt: "" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f745706", module.exports)
  }
}

/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("chat", { staticClass: "chat", attrs: { list: _vm.chat } })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4062f0c2", module.exports)
  }
}

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1338)
}
var normalizeComponent = __webpack_require__(242)
/* script */
var __vue_script__ = __webpack_require__(1340)
/* template */
var __vue_template__ = __webpack_require__(1346)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4062f0c2"
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
Component.options.__file = "resources\\assets\\components\\pages\\chat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4062f0c2", Component.options)
  } else {
    hotAPI.reload("data-v-4062f0c2", Component.options)
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

/***/ 770:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6";

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6";

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar.jpg?9ec1314ec47a05d978a1e1568daab7ec";

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar5.jpg?83fc5fdfbe37fb37db7a2fe84cca6d6d";

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(799)
}
var normalizeComponent = __webpack_require__(242)
/* script */
var __vue_script__ = __webpack_require__(801)
/* template */
var __vue_template__ = __webpack_require__(802)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources\\assets\\components\\plugins\\scroll\\vScroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-367359e2", Component.options)
  } else {
    hotAPI.reload("data-v-367359e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar6.jpg?ad632ec07148871732e34440c087874d";

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(800);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("4fb4bea6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-367359e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-367359e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.ss-wrapper {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    float: left;\n}\n.ss-content {\n    height: 100%;\n    width: 100%;\n    padding: 0 18px 0 0;\n    position: relative;\n    right: -18px;\n    overflow: auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.ss-scroll {\n    position: relative;\n    background: rgba(0, 0, 0, 0.1);\n    width: 9px;\n    border-radius: 4px;\n    top: 0;\n    z-index: 2;\n    cursor: pointer;\n    opacity: 0;\n    -webkit-transition: opacity 0.25s linear;\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\n    display: none;\n}\n.ss-container:hover .ss-scroll,\n.ss-scroll.ss-grabbed,\n.ss-scroll.visible {\n    opacity: 1;\n}\n.ss-grabbed {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 801:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: null,
        minHeight: null,
        maxHeight: null,
        color: null,
        barWidth: null,
        alwaysvisible: Boolean
    },
    mounted: function mounted() {
        this.dragDealer();
        this.moveBar();
    },
    data: function data() {
        return {
            scrollRatio: 0,
            grabbed: false
        };
    },

    methods: {
        // Mouse drag handler
        dragDealer: function dragDealer() {
            var _this = this;

            var t = this;
            var lastPageY;
            this.$refs.bar.addEventListener('mousedown', function (e) {
                lastPageY = e.pageY;
                _this.grabbed = true;
                document.body.classList.add('ss-grabbed');
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stop);
                return false;

                function drag(e) {
                    var delta = e.pageY - lastPageY;
                    lastPageY = e.pageY;
                    t.$refs.content.scrollTop += delta / t.scrollRatio;
                }

                function stop() {
                    t.grabbed = false;
                    document.body.classList.remove('ss-grabbed');
                    document.removeEventListener('mousemove', drag);
                    document.removeEventListener('mouseup', stop);
                }
            });
        },
        moveBar: function moveBar() {
            var content = this.$refs.content;
            var bar = this.$refs.bar;
            var totalHeight = content.scrollHeight,
                ownHeight = content.clientHeight;
            this.scrollRatio = ownHeight / totalHeight;
            // Hide scrollbar if no scrolling is possible
            if (this.scrollRatio >= 1) {
                bar.classList.add('ss-hidden');
            } else {
                bar.classList.remove('ss-hidden');
                bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
            }
        },
        scrolltotop: function scrolltotop() {
            this.$refs.content.scrollTop = 0;
        },
        scrolltobottom: function scrolltobottom() {
            this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
        }
    }
});

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { ref: "wrapper", staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-367359e2", module.exports)
  }
}

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/chat_background.png?419bfcd352cbdce9d93ceb3eb8d15c02";

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/chat_background2.jpg?54fd8848415d7a03b2dc39e56525981c";

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/chat_background3.jpg?fce25458ac061addf13ea6f194753033";

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var chat = [{
    user: "Rickey",
    image: __webpack_require__(770),
    status: "Lorem ipsum dolor sit ametm  elit.",
    mbl_num: "9876543210",
    work: "Google",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "09:10"
    }, {
        msg: "Good Morning",
        from: "me",
        time: "09:11"
    }, {
        msg: "Have a Nice day",
        from: "you",
        time: "09:12"
    }, {
        msg: "Hi ,How are you?",
        from: "me",
        time: "09:13"
    }, {
        msg: " Morning",
        from: "you",
        time: "09:14"
    }, {
        msg: "Have a Nice day",
        from: "me",
        time: "09:15"
    }, {
        msg: "Hi ,How are you?",
        from: "You",
        time: "09:16"
    }, {
        msg: "I am Fine",
        from: "me",
        time: "09:17"
    }, {
        msg: "I am Good",
        from: "you",
        time: "09:18"
    }]
}, {
    user: "Jenny",
    image: __webpack_require__(773),
    status: "Consec  ipsum  adipisicing.Lorem   elit.",
    mbl_num: "8907654231",
    work: "Apple",
    messages: [{
        msg: "Hi,Good Morning",
        from: "me",
        time: "17:23"
    }, {
        msg: "Have a Nice day",
        from: "you",
        time: "17:24"
    }, {
        msg: "Hi ,How are you?",
        from: "me",
        time: "17:25"
    }, {
        msg: " Morning",
        from: "you",
        time: "17:26"
    }, {
        msg: "Have a Nice day",
        from: "me",
        time: "17:27"
    }, {
        msg: "Hi ,How are you?",
        from: "You",
        time: "17:28"
    }, {
        msg: "I am Fine",
        from: "me",
        time: "17:29"
    }, {
        msg: "I am Good",
        from: "you",
        time: "17:30"
    }]
}, {
    user: "David",
    image: __webpack_require__(768),
    status: "Lorem ipsum dolor ipsum dolor  elit",
    mbl_num: "7894561203",
    work: "Microsoft",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "13:49"
    }, {
        msg: "Hello",
        from: "you",
        time: "13:50"
    }, {
        msg: "What Are You Doing",
        from: "me",
        time: "13:51"
    }, {
        msg: "Hello",
        from: "you",
        time: "13:52"
    }, {
        msg: "What Are You Doing",
        from: "me",
        time: "13:53"
    }, {
        msg: "I am Doing Somework",
        from: "you",
        time: "13:54"
    }, {
        msg: "I am Doing Somework",
        from: "me",
        time: "13:55"
    }]
}, {
    user: "Roysingh",
    image: __webpack_require__(781),
    status: "Dolor ipsum amet elitLorem ipsum ",
    mbl_num: "9587643210",
    work: "Yahoo",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "19:17"
    }, {
        msg: "Hello",
        from: "you",
        time: "19:18"
    }, {
        msg: "What Are You Doing",
        from: "me",
        time: "19:19"
    }, {
        msg: "I am Doing Somework",
        from: "you",
        time: "19:20"
    }]
}, {
    user: "Joe",
    image: __webpack_require__(798),
    status: "Dolor ipsum amet elitLorem ipsum ",
    mbl_num: "8974613215",
    work: "Amazon",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "19:17"
    }, {
        msg: "Hello",
        from: "you",
        time: "19:18"
    }, {
        msg: "What Are You Doing",
        from: "me",
        time: "19:19"
    }, {
        msg: "I am Doing Somework",
        from: "you",
        time: "19:20"
    }]
}, {
    user: "Shasla",
    image: __webpack_require__(780),
    status: "Dolor ipsum dolor dolor elitLorem ",
    mbl_num: "7598642130",
    work: "IBM",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "22:06"
    }, {
        msg: "Hello",
        from: "you",
        time: "22:07"
    }, {
        msg: "What Are You Doing",
        from: "you",
        time: "22:08"
    }, {
        msg: "I am Doing Somework",
        from: "me",
        time: "22:09"
    }]
}];

/* harmony default export */ __webpack_exports__["a"] = (chat);

/***/ }),

/***/ 922:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/20.jpg?edfbcceab51cc0fbe24780d821cf2a33";

/***/ }),

/***/ 938:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/14.jpg?210f920a750ac3536ec6c088efdfcccd";

/***/ }),

/***/ 939:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/15.jpg?93eecf4e8b0f8ae0d93fb7cf9f01fd2b";

/***/ }),

/***/ 940:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/16.jpg?3a56b7a108145eda21e624d3c0f1b8bb";

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/17.jpg?0412d8d7fdf5cece0a7602b22b93a027";

/***/ }),

/***/ 942:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/18.jpg?842814c25736e6b8c0bb3a9bdc455114";

/***/ })

});