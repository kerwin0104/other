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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("Overview "),
                  _c("span", { staticClass: "sr-only" }, [_vm._v("(current)")])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "nav nav-sidebar" }, [
                  _c("li", { staticClass: "active" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Overview "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("(current)")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Reports")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Analytics")])
              ]),
              _vm._v(" "),
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Export")])])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "nav nav-sidebar" }, [
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("Nav item")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("Nav item again")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("One more nav")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("Another nav item")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("More navigation")])
              ])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "nav nav-sidebar" }, [
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("Nav item again")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("One more nav")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "" } }, [_vm._v("Another nav item")])
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
                _c("div", { staticClass: "col-xs-6 col-sm-3 placeholder" }, [
                  _c("img", {
                    staticClass: "img-responsive",
                    attrs: {
                      src:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                      width: "200",
                      height: "200",
                      alt: "Generic placeholder thumbnail"
                    }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Label")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("Something else")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 col-sm-3 placeholder" }, [
                  _c("img", {
                    staticClass: "img-responsive",
                    attrs: {
                      src:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                      width: "200",
                      height: "200",
                      alt: "Generic placeholder thumbnail"
                    }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Label")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("Something else")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 col-sm-3 placeholder" }, [
                  _c("img", {
                    staticClass: "img-responsive",
                    attrs: {
                      src:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                      width: "200",
                      height: "200",
                      alt: "Generic placeholder thumbnail"
                    }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Label")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("Something else")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 col-sm-3 placeholder" }, [
                  _c("img", {
                    staticClass: "img-responsive",
                    attrs: {
                      src:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                      width: "200",
                      height: "200",
                      alt: "Generic placeholder thumbnail"
                    }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Label")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("Something else")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "sub-header" }, [
                _vm._v("Section title")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-striped" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Header")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Header")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Header")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Header")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("1,001")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Lorem")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("ipsum")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("dolor")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("sit")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,002")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("amet")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("consectetur")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("adipiscing")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("elit")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,003")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Integer")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nec")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("odio")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Praesent")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,003")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("libero")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Sed")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("cursus")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("ante")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,004")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("dapibus")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("diam")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Sed")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nisi")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,005")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Nulla")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("quis")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("sem")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("at")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,006")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nibh")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("elementum")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("imperdiet")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Duis")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,007")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("sagittis")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("ipsum")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Praesent")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("mauris")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,008")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Fusce")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nec")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("tellus")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("sed")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,009")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("augue")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("semper")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("porta")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mauris")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,010")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("massa")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Vestibulum")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("lacinia")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("arcu")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,011")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("eget")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nulla")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Class")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("aptent")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,012")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("taciti")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("sociosqu")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("ad")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("litora")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,013")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("torquent")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("per")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("conubia")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nostra")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,014")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("per")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("inceptos")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("himenaeos")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Curabitur")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("1,015")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("sodales")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("ligula")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("in")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("libero")])
                    ])
                  ])
                ])
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