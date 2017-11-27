webpackJsonp([0],{

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(45)
/* template */
var __vue_template__ = __webpack_require__(46)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/Example.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-650f2efa", Component.options)
  } else {
    hotAPI.reload("data-v-650f2efa", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  mounted: function mounted() {
    console.log('Component mounted.');
  }
};

/***/ }),

/***/ 46:
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
      _c("nav", { staticClass: "navbar navbar-inverse navbar-fixed-top" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "navbar-header" }, [
            _c(
              "button",
              {
                staticClass: "navbar-toggle collapsed",
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbar",
                  "aria-expanded": "false",
                  "aria-controls": "navbar"
                }
              },
              [
                _c("span", { staticClass: "sr-only" }, [
                  _vm._v("Toggle navigation")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" })
              ]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
              _vm._v("\n          业务支持系统管理后台\n        ")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "navbar-collapse collapse",
              attrs: { id: "navbar" }
            },
            [
              _c("ul", { staticClass: "nav navbar-nav navbar-right" }, [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Dashboard")])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Settings")])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Profile")])
                ]),
                _vm._v(" "),
                _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Help")])])
              ]),
              _vm._v(" "),
              _c("form", { staticClass: "navbar-form navbar-right" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Search..." }
                })
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3 col-md-2 sidebar" }, [
            _c("ul", { staticClass: "nav nav-sidebar" }, [
              _c("li", { staticClass: "open" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("组织架构管理")]),
                _vm._v(" "),
                _c("ul", { staticClass: "nav nav-submenu" }, [
                  _c("li", { staticClass: "active" }, [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("组织架构")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("职位管理")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("角色管理")])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "nav nav-sidebar" }, [
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("客户管理")]),
                _vm._v(" "),
                _c("ul", { staticClass: "nav nav-submenu" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("客户列表")])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
            },
            [
              _c("h1", { staticClass: "page-header" }, [_vm._v("Dashboard")]),
              _vm._v(" "),
              _c("div", { staticClass: "row placeholders" }, [
                _vm._v("\n        fdsjfkljlk\n        ")
              ])
            ]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-650f2efa", module.exports)
  }
}

/***/ })

});