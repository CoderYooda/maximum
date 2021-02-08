(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Site"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Site.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Site.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import auth from '../auth.js';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Site",
  data: function data() {
    return {// username: '',
      // password: '',
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Site.vue?vue&type=template&id=1f37d346&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Site.vue?vue&type=template&id=1f37d346& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30"
      },
      [
        _c("div", [
          _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
            _c(
              "ol",
              { staticClass: "breadcrumb breadcrumb-style1 mg-b-10" },
              [
                _c("router-link", {
                  attrs: { to: "/site", custom: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var href = ref.href
                        var route = ref.route
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c("li", { staticClass: "breadcrumb-item" }, [
                            _c(
                              "a",
                              {
                                attrs: { href: href },
                                on: { click: navigate }
                              },
                              [_vm._v("Управление сайтом")]
                            )
                          ])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "breadcrumb-item active",
                    attrs: { "aria-current": "page" }
                  },
                  [_vm._v("Helpdesk Management")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "mg-b-0 tx-spacing--1" }, [
            _vm._v(
              _vm._s(
                !!_vm.$route.meta.title
                  ? _vm.$route.meta.title
                  : "Без заголовка"
              )
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-9" }, [_c("router-view")], 1),
      _vm._v(" "),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-none d-md-block" }, [
      _c(
        "button",
        { staticClass: "btn btn-sm pd-x-15 btn-white btn-uppercase" },
        [
          _c("i", {
            staticClass: "wd-10 mg-r-5",
            attrs: { "data-feather": "save" }
          }),
          _vm._v(" Save")
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5" },
        [
          _c("i", {
            staticClass: "wd-10 mg-r-5",
            attrs: { "data-feather": "share-2" }
          }),
          _vm._v(" Share")
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5" },
        [
          _c("i", {
            staticClass: "wd-10 mg-r-5",
            attrs: { "data-feather": "plus" }
          }),
          _vm._v(" Add New Ticket")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 mg-t-10 mg-lg-t-0" }, [
      _c("h6", { staticClass: "tx-uppercase tx-semibold mg-b-15" }, [
        _vm._v("Discover By Position")
      ]),
      _vm._v(" "),
      _c("nav", { staticClass: "nav nav-classic tx-13" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
          _c("span", [_vm._v("Software Engineer")]),
          _vm._v(" "),
          _c("span", { staticClass: "badge" }, [_vm._v("20")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
          _c("span", [_vm._v("UI/UX Designer")]),
          _vm._v(" "),
          _c("span", { staticClass: "badge" }, [_vm._v("18")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
          _c("span", [_vm._v("Sales Representative")]),
          _vm._v(" "),
          _c("span", { staticClass: "badge" }, [_vm._v("14")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
          _c("span", [_vm._v("Product Representative")]),
          _vm._v(" "),
          _c("span", { staticClass: "badge" }, [_vm._v("12")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
          _c("span", [_vm._v("Full-Stack Developer")]),
          _vm._v(" "),
          _c("span", { staticClass: "badge" }, [_vm._v("10")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Site.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Site.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Site_vue_vue_type_template_id_1f37d346___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Site.vue?vue&type=template&id=1f37d346& */ "./resources/js/components/pages/Site.vue?vue&type=template&id=1f37d346&");
/* harmony import */ var _Site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Site.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Site.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Site_vue_vue_type_template_id_1f37d346___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Site_vue_vue_type_template_id_1f37d346___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Site.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Site.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Site.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Site.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Site.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Site.vue?vue&type=template&id=1f37d346&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Site.vue?vue&type=template&id=1f37d346& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Site_vue_vue_type_template_id_1f37d346___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Site.vue?vue&type=template&id=1f37d346& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Site.vue?vue&type=template&id=1f37d346&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Site_vue_vue_type_template_id_1f37d346___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Site_vue_vue_type_template_id_1f37d346___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvU2l0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvU2l0ZS52dWU/ZTQ5NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaXRlLnZ1ZT8xZWYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL1NpdGUudnVlPzQ5ZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBRUE7QUFDQSxjQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBLFlBQ0E7QUFDQTtBQUZBO0FBSUEsR0FQQTtBQVNBO0FBVEEsRzs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyw2QkFBNkIsRUFBRTtBQUM3RDtBQUNBO0FBQ0EsZUFBZSxzREFBc0Q7QUFDckU7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JELHFDQUFxQztBQUNyQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0EsU0FBUyw0REFBNEQ7QUFDckU7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1FQUFtRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUVBQXFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQTRDO0FBQ2xFLGdCQUFnQixrREFBa0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVDQUF1QztBQUN4RCxpQkFBaUIsa0NBQWtDLFdBQVcsRUFBRTtBQUNoRTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQyxXQUFXLEVBQUU7QUFDaEU7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0MsV0FBVyxFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDLFdBQVcsRUFBRTtBQUNoRTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQyxXQUFXLEVBQUU7QUFDaEU7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IlNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMjAgbWctbGctYi0zMFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2l0ZVwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgPjxhIDpocmVmPVwiaHJlZlwiIEBjbGljaz1cIm5hdmlnYXRlXCI+0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+SGVscGRlc2sgTWFuYWdlbWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWctYi0wIHR4LXNwYWNpbmctLTFcIj57eyAhISRyb3V0ZS5tZXRhLnRpdGxlID8gJHJvdXRlLm1ldGEudGl0bGUgOiAn0JHQtdC3INC30LDQs9C+0LvQvtCy0LrQsCd9fTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIj48aSBkYXRhLWZlYXRoZXI9XCJzYXZlXCIgY2xhc3M9XCJ3ZC0xMCBtZy1yLTVcIj48L2k+IFNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2UgbWctbC01XCI+PGkgZGF0YS1mZWF0aGVyPVwic2hhcmUtMlwiIGNsYXNzPVwid2QtMTAgbWctci01XCI+PC9pPiBTaGFyZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gcGQteC0xNSBidG4tcHJpbWFyeSBidG4tdXBwZXJjYXNlIG1nLWwtNVwiPjxpIGRhdGEtZmVhdGhlcj1cInBsdXNcIiBjbGFzcz1cIndkLTEwIG1nLXItNVwiPjwvaT4gQWRkIE5ldyBUaWNrZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIG1nLXQtMTAgbWctbGctdC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJ0eC11cHBlcmNhc2UgdHgtc2VtaWJvbGQgbWctYi0xNVwiPkRpc2NvdmVyIEJ5IFBvc2l0aW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXYgbmF2LWNsYXNzaWMgdHgtMTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJuYXYtbGlua1wiPjxzcGFuPlNvZnR3YXJlIEVuZ2luZWVyPC9zcGFuPiA8c3BhbiBjbGFzcz1cImJhZGdlXCI+MjA8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm5hdi1saW5rXCI+PHNwYW4+VUkvVVggRGVzaWduZXI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj4xODwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwibmF2LWxpbmtcIj48c3Bhbj5TYWxlcyBSZXByZXNlbnRhdGl2ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJiYWRnZVwiPjE0PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJuYXYtbGlua1wiPjxzcGFuPlByb2R1Y3QgUmVwcmVzZW50YXRpdmU8L3NwYW4+IDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj4xMjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwibmF2LWxpbmtcIj48c3Bhbj5GdWxsLVN0YWNrIERldmVsb3Blcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJiYWRnZVwiPjEwPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgLy8gaW1wb3J0IGF1dGggZnJvbSAnLi4vYXV0aC5qcyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiU2l0ZVwiLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAvLyBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMjAgbWctbGctYi0zMFwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJuYXZcIiwgeyBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJicmVhZGNydW1iXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJvbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9zaXRlXCIsIGN1c3RvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaHJlZiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0LxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSGVscGRlc2sgTWFuYWdlbWVudFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICEhX3ZtLiRyb3V0ZS5tZXRhLnRpdGxlXG4gICAgICAgICAgICAgICAgICA/IF92bS4kcm91dGUubWV0YS50aXRsZVxuICAgICAgICAgICAgICAgICAgOiBcItCR0LXQtyDQt9Cw0LPQvtC70L7QstC60LBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgwKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTlcIiB9LCBbX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtbm9uZSBkLW1kLWJsb2NrXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3ZC0xMCBtZy1yLTVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwic2F2ZVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgU2F2ZVwiKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZSBtZy1sLTVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndkLTEwIG1nLXItNVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWZlYXRoZXJcIjogXCJzaGFyZS0yXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBTaGFyZVwiKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gcGQteC0xNSBidG4tcHJpbWFyeSBidG4tdXBwZXJjYXNlIG1nLWwtNVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2QtMTAgbWctci01XCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcInBsdXNcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIEFkZCBOZXcgVGlja2V0XCIpXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zIG1nLXQtMTAgbWctbGctdC0wXCIgfSwgW1xuICAgICAgX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInR4LXVwcGVyY2FzZSB0eC1zZW1pYm9sZCBtZy1iLTE1XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJEaXNjb3ZlciBCeSBQb3NpdGlvblwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJuYXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYgbmF2LWNsYXNzaWMgdHgtMTNcIiB9LCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTb2Z0d2FyZSBFbmdpbmVlclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2VcIiB9LCBbX3ZtLl92KFwiMjBcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlVJL1VYIERlc2lnbmVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZVwiIH0sIFtfdm0uX3YoXCIxOFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU2FsZXMgUmVwcmVzZW50YXRpdmVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlXCIgfSwgW192bS5fdihcIjE0XCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcm9kdWN0IFJlcHJlc2VudGF0aXZlXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZVwiIH0sIFtfdm0uX3YoXCIxMlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRnVsbC1TdGFjayBEZXZlbG9wZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlXCIgfSwgW192bS5fdihcIjEwXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmMzdkMzQ2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NpdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWYzN2QzNDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWYzN2QzNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWYzN2QzNDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmMzdkMzQ2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFmMzdkMzQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWYzN2QzNDYmXCIiXSwic291cmNlUm9vdCI6IiJ9