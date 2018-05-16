webpackJsonp([1],{

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1092)
  __webpack_require__(1094)
}
var normalizeComponent = __webpack_require__(244)
/* script */
var __vue_script__ = __webpack_require__(1096)
/* template */
var __vue_template__ = __webpack_require__(1098)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25d0ed80"
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
Component.options.__file = "resources\\assets\\components\\layouts\\header\\fixed-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25d0ed80", Component.options)
  } else {
    hotAPI.reload("data-v-25d0ed80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1093);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("54fb3f62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25d0ed80\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25d0ed80\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-25d0ed80] {\n  z-index: 1030;\n}\n.header nav[data-v-25d0ed80] {\n    margin-bottom: 0;\n    height: 50px;\n    background: #fff;\n    background-size: 100% 100%;\n    -webkit-box-shadow: 0px 0px 10px #ccc;\n            box-shadow: 0px 0px 10px #ccc;\n}\n.header .navbar-right[data-v-25d0ed80] {\n    float: right;\n    margin-right: 15px;\n}\n.header .logo[data-v-25d0ed80] {\n    display: block;\n    float: left;\n    height: 50px;\n    line-height: 41px;\n    padding: 3px 10px;\n    text-align: center;\n    width: 250px;\n    background: #fff;\n}\n.header .logo img[data-v-25d0ed80] {\n      width: 125px;\n}\n.header .navbar-right .dropdown-item[data-v-25d0ed80] {\n    padding: 0;\n    width: 100%;\n    outline: none;\n}\n.header .navbar-right div.dropdown > a[data-v-25d0ed80] {\n    color: #000;\n}\n.header .navbar-right div.dropdown .dropdown-menu > button[data-v-25d0ed80] {\n    padding: 10px 15px;\n}\n.header .navbar-right div.dropdown.notifications-menu[data-v-25d0ed80] {\n    height: 50px;\n}\n.header .navbar-right div.dropdown.notifications-menu .noti-icon[data-v-25d0ed80] {\n      font-size: 18px;\n}\n.header .navbar-right div.dropdown > a > i[data-v-25d0ed80] {\n    font-size: 23px;\n}\n.header .navbar-right div.dropdown > a[data-v-25d0ed80] {\n    display: block;\n    padding: 12px;\n}\n.header .navbar-right div.dropdown:hover > a[data-v-25d0ed80] {\n    background-color: #ededed;\n    color: #000;\n}\n.header .navbar-right div.dropdown > a.padding-user[data-v-25d0ed80] {\n    padding-top: 8px;\n    padding-bottom: 6px;\n}\n.header nav .sidebar-toggle[data-v-25d0ed80] {\n    float: left;\n    color: #000;\n    font-size: 19px;\n    padding-top: 10px;\n}\n.user_name_max[data-v-25d0ed80] {\n  display: inline-block;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n}\n.noti_msg[data-v-25d0ed80] {\n  font-size: 16px;\n  padding: 10px;\n  border: 1px solid #4f90c1;\n  border-radius: 50px;\n  margin-top: 10px;\n}\n.user.user-menu > button img[data-v-25d0ed80] {\n  width: 35px;\n  height: 35px;\n}\n\n/**** END HEADER RIGHT SIDE DROPDOWNS ****/\n@media screen and (max-width: 767px) {\n.dropdown.open .dropdown-menu[data-v-25d0ed80] {\n    position: absolute;\n}\n.navbar-right > li > a[data-v-25d0ed80] {\n    padding: 10px 12px;\n}\n}\n\n/* Fix menu positions on xs screens to appear correctly and fully */\n@media (max-width: 560px) {\nbody .header .logo[data-v-25d0ed80],\n  body .header nav[data-v-25d0ed80] {\n    width: 100%;\n}\nbody .header nav .sidebar-toggle[data-v-25d0ed80] {\n    padding-left: 15px;\n}\nnav[data-v-25d0ed80] {\n    height: 100px !important;\n}\n}\n.notifications_badge_top[data-v-25d0ed80] {\n  margin-top: -28px;\n  margin-left: 10px;\n  position: absolute;\n}\n.notifications_badge_top span[data-v-25d0ed80] {\n    top: 1px;\n    left: 2px;\n    border-radius: 50%;\n    font-size: 9px;\n    padding: 0.23em 0.45em;\n}\n.notifications-menu .dropdown-item[data-v-25d0ed80] {\n  width: 100%;\n  display: block;\n}\n.dropdown-footer[data-v-25d0ed80] {\n  padding: 10px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1095);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("8e8e35d8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25d0ed80\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25d0ed80\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.wrapper {\n  margin-top: 50px;\n}\n@media screen and (max-width: 560px) {\n.wrapper {\n      margin-top: 100px;\n}\n}\n.sidebar-toggle {\n  margin-left: 10px;\n}\n.bell_bg button.btn-secondary {\n  background-color: #fff;\n  border: none;\n  border-radius: 0;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.bell_bg button.btn-secondary:hover {\n    background-color: #ededed !important;\n}\n.bell_bg button.btn-secondary:active {\n    color: #000 !important;\n}\n.bell_bg.show button {\n  background-color: #edede !important;\n}\n.bell_bg.user_btn .dropdown-toggle {\n  padding: 7px 9px;\n}\n.tabs_cont,\n.event_date {\n  background-color: #fff !important;\n}\nbody.left-hidden aside.right-aside {\n  margin-left: 0;\n}\nbody.left-hidden .header.fixed-top {\n  padding-right: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_screenfull__);
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
    name: "vueadmin_header",

    methods: {
        toggle_menu: function toggle_menu() {
            this.$store.commit('left_menu', "toggle");
        },
        fullscreen: function fullscreen() {
            if (__WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.enabled) {
                __WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.toggle();
            }
        }
    }
});

/***/ }),

/***/ 1097:
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.2 - 2017-10-27
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "header fixed-top" }, [
    _c(
      "nav",
      [
        _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
          _c("img", {
            attrs: { src: __webpack_require__(853), alt: "logo" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-left" }, [
          _c(
            "a",
            {
              staticClass: "sidebar-toggle",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.toggle_menu }
            },
            [_c("i", { staticClass: "fa fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-right" }, [
          _c(
            "div",
            [
              _vm.fullscreen
                ? _c(
                    "div",
                    {
                      staticClass:
                        "dropdown hidden-xs-down btn-group fullscreen"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "javascript:void(0)" },
                          on: { click: _vm.fullscreen }
                        },
                        [_c("i", { staticClass: "fa fa-arrows-alt" })]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c("span", { attrs: { slot: "text" }, slot: "text" }, [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: this.$store.state.user.picture,
                        alt: "User Image"
                      }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "user_name_max" }, [
                      _vm._v(_vm._s(this.$store.state.user.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/user_profile", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Profile\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/login", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-sign-out" }),
                          _vm._v(" Logout\n                        ")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-25d0ed80", module.exports)
  }
}

/***/ }),

/***/ 1635:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1636);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("071dc36f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b5a03c00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./testtwo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b5a03c00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./testtwo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.search[data-v-b5a03c00]{\n    border: 1px solid #bdb3b3;\n}\n.contact-profile[data-v-b5a03c00]{\n    width:50px;\n    height: 50px;\n}\n.box-shadow[data-v-b5a03c00]{\n    -webkit-box-shadow: 0px 0px 1px 1px #cfcfcf;\n            box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.contact-pic[data-v-b5a03c00]{\n    width: 50px;\n    height: 50px;\n}\n.table td[data-v-b5a03c00]{\n    padding: 16px;\n    vertical-align: middle;\n}\n.contacts-box .custom-control-inline[data-v-b5a03c00]{\n    margin-right: 0;\n}\n.custom-control-label[data-v-b5a03c00]::before{\n    width: 100px;\n    height: 100px;\n}\n.contact-page[data-v-b5a03c00]{\n    font-size: 14px;\n}\n.options a[data-v-b5a03c00]:hover,.options2 a[data-v-b5a03c00]:hover{\n    background-color: #eee;\n}\n\n\n/* to do list */\n.todoside-menu a[data-v-b5a03c00]:hover{\n    background-color: #f5f5f5;\n}\n.todoside-menu a[data-v-b5a03c00]{\n    font-size: 15px;\n    color: #333;\n}\n.faExclamationCircle[data-v-b5a03c00]::before{\n    content: \"\\F06A\";\n    font-size: 14px;\n    top:-10px;\n    position: relative;\n}\n.tasksearch[data-v-b5a03c00],.tasks-list[data-v-b5a03c00]{\n    -webkit-box-shadow:0px 0px 1px 1px #cfcfcf;\n            box-shadow:0px 0px 1px 1px #cfcfcf;\n}\n.todo[data-v-b5a03c00]{\n    padding: 15px;\n    background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_header_fixed_header_vue__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_header_fixed_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_layouts_header_fixed_header_vue__);
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
    components: {
        vueadmin_header: __WEBPACK_IMPORTED_MODULE_1_components_layouts_header_fixed_header_vue___default.a
    },
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
                img: __webpack_require__(781),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Doe',
                img: __webpack_require__(784),
                email: 'doe@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Addison',
                img: __webpack_require__(780),
                email: 'addison@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Jon',
                img: __webpack_require__(785),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Doe',
                img: __webpack_require__(781),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Jon',
                img: __webpack_require__(793),
                email: 'jon@gmail.com',
                contact: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }],

            //this is tasks page data
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

/***/ 1638:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "sample-page" }, [
        _c("div", { staticClass: "container-fluid bg-white" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12 col-sm-12 text-center" }, [
              _c("h1", [_vm._v("Hello World!")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", [
                _c("p", [
                  _vm._v(
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  )
                ])
              ])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-b5a03c00", module.exports)
  }
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1635)
}
var normalizeComponent = __webpack_require__(244)
/* script */
var __vue_script__ = __webpack_require__(1637)
/* template */
var __vue_template__ = __webpack_require__(1638)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b5a03c00"
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
Component.options.__file = "resources\\assets\\components\\pages\\testtwo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5a03c00", Component.options)
  } else {
    hotAPI.reload("data-v-b5a03c00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar1.jpg?2d4968bd8ec1519b0535ba849643dd1c";

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6";

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6";

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/avatar.jpg?9ec1314ec47a05d978a1e1568daab7ec";

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/playlearnlogosm.png?a689ff1e99df49c33cb78446da2e73be";

/***/ })

});