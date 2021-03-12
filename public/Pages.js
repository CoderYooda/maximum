(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Pages.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/Pages.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
// import auth from '../auth.js';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Pages",
  data: function data() {
    return {
      // username: '',
      // password: '',
      title: 'Каталог страниц'
    };
  },
  computed: {
    pages: function pages() {
      return this.$store.getters.pages;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('get_pages').then(function () {
      window.feather.replace();
    });
  },
  methods: {
    isPublished: function isPublished(page) {
      return page.isPublished ? 'Опубликовано' : 'Не опубликовано';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Pages.vue?vue&type=template&id=42f2f4d2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/Pages.vue?vue&type=template&id=42f2f4d2& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
            _vm._v(_vm._s(_vm.title))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-none d-md-block" },
          [
            _c("router-link", {
              attrs: { to: { name: "page", params: { id: 0 } }, custom: "" },
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
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5",
                          on: { click: navigate }
                        },
                        [_vm._v("Новая страница")]
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "card" }, [
        _c(
          "ul",
          { staticClass: "list-group list-group-flush tx-13" },
          _vm._l(_vm.pages, function(page) {
            return _c("router-link", {
              key: page.id,
              attrs: {
                to: { name: "page", params: { id: page.id } },
                custom: ""
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(ref) {
                      var href = ref.href
                      var route = ref.route
                      var navigate = ref.navigate
                      var isActive = ref.isActive
                      var isExactActive = ref.isExactActive
                      return [
                        _c(
                          "li",
                          {
                            staticClass:
                              "list-group-item d-flex pd-sm-x-20 pointer",
                            on: { click: navigate }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "avatar d-none d-sm-block" },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "avatar-initial rounded-circle bg-gray-600 op-5"
                                  },
                                  [
                                    _c("i", {
                                      attrs: { "data-feather": "file-text" }
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "pd-sm-l-10" }, [
                              _c("p", { staticClass: "tx-medium mg-b-2" }, [
                                _vm._v(_vm._s(page.name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "small",
                                { staticClass: "tx-12 tx-color-03 mg-b-0" },
                                [_vm._v(_vm._s(page.title))]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mg-l-auto text-right" }, [
                              _c("p", { staticClass: "tx-medium mg-b-2" }),
                              _vm._v(" "),
                              _c(
                                "small",
                                { staticClass: "tx-12 tx-success mg-b-0" },
                                [_vm._v(_vm._s(_vm.isPublished(page)))]
                              )
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ],
                null,
                true
              )
            })
          }),
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/site/Pages.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/pages/site/Pages.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_vue_vue_type_template_id_42f2f4d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages.vue?vue&type=template&id=42f2f4d2& */ "./resources/js/components/pages/site/Pages.vue?vue&type=template&id=42f2f4d2&");
/* harmony import */ var _Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/site/Pages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pages_vue_vue_type_template_id_42f2f4d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pages_vue_vue_type_template_id_42f2f4d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/site/Pages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/site/Pages.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/site/Pages.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Pages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/site/Pages.vue?vue&type=template&id=42f2f4d2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Pages.vue?vue&type=template&id=42f2f4d2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_42f2f4d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pages.vue?vue&type=template&id=42f2f4d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Pages.vue?vue&type=template&id=42f2f4d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_42f2f4d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_42f2f4d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlcy52dWU/YjYyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2VzLnZ1ZT9kMWIwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZXMudnVlP2IxMzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQVRBO0FBY0EsU0FkQSxxQkFjQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsR0FsQkE7QUFtQkE7QUFDQSxlQURBLHVCQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQTtBQW5CQSxHOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixTQUFTLDZCQUE2QixFQUFFO0FBQzdEO0FBQ0E7QUFDQSxlQUFlLHNEQUFzRDtBQUNyRTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQ0FBaUM7QUFDckU7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGFBQWE7QUFDckQscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQTtBQUNBLHNCQUFzQixNQUFNLHdCQUF3QixRQUFRLEVBQUUsY0FBYztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLFdBQVcsbURBQW1EO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QixjQUFjLEVBQUU7QUFDN0Q7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQ0FBMEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FLHVDQUF1QyxrQ0FBa0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQ0FBMEM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0NBQXNDO0FBQzdFLHVDQUF1QyxrQ0FBa0M7QUFDekU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlDQUF5QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiUGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMjAgbWctbGctYi0zMFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2l0ZVwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgPjxhIDpocmVmPVwiaHJlZlwiIEBjbGljaz1cIm5hdmlnYXRlXCI+0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+SGVscGRlc2sgTWFuYWdlbWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWctYi0wIHR4LXNwYWNpbmctLTFcIj57eyB0aXRsZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdwYWdlJywgcGFyYW1zOiB7IGlkOiAwfX1cIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm5hdmlnYXRlXCIgY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXByaW1hcnkgYnRuLXVwcGVyY2FzZSBtZy1sLTVcIj7QndC+0LLQsNGPINGB0YLRgNCw0L3QuNGG0LA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggdHgtMTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIHYtZm9yPVwicGFnZSBpbiBwYWdlc1wiIDprZXk9XCJwYWdlLmlkXCIgOnRvPVwieyBuYW1lOiAncGFnZScsIHBhcmFtczogeyBpZDogcGFnZS5pZH19XCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBAY2xpY2s9XCJuYXZpZ2F0ZVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBwZC1zbS14LTIwIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXIgZC1ub25lIGQtc20tYmxvY2tcIj48c3BhbiBjbGFzcz1cImF2YXRhci1pbml0aWFsIHJvdW5kZWQtY2lyY2xlIGJnLWdyYXktNjAwIG9wLTVcIj48aSBkYXRhLWZlYXRoZXI9XCJmaWxlLXRleHRcIj48L2k+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBkLXNtLWwtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInR4LW1lZGl1bSBtZy1iLTJcIj57eyBwYWdlLm5hbWUgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidHgtMTIgdHgtY29sb3ItMDMgbWctYi0wXCI+e3sgcGFnZS50aXRsZSB9fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZy1sLWF1dG8gdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidHgtbWVkaXVtIG1nLWItMlwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0eC0xMiB0eC1zdWNjZXNzIG1nLWItMFwiPnt7IGlzUHVibGlzaGVkKHBhZ2UpIH19PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgLy8gaW1wb3J0IGF1dGggZnJvbSAnLi4vYXV0aC5qcyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiUGFnZXNcIixcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgLy8gcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUgOiAn0JrQsNGC0LDQu9C+0LMg0YHRgtGA0LDQvdC40YYnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBwYWdlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnBhZ2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfcGFnZXMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5mZWF0aGVyLnJlcGxhY2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGlzUHVibGlzaGVkKHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlLmlzUHVibGlzaGVkID8gJ9Ce0L/Rg9Cx0LvQuNC60L7QstCw0L3QvicgOiAn0J3QtSDQvtC/0YPQsdC70LjQutC+0LLQsNC90L4nO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMjAgbWctbGctYi0zMFwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJuYXZcIiwgeyBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJicmVhZGNydW1iXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJvbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9zaXRlXCIsIGN1c3RvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaHJlZiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0LxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSGVscGRlc2sgTWFuYWdlbWVudFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtbm9uZSBkLW1kLWJsb2NrXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJwYWdlXCIsIHBhcmFtczogeyBpZDogMCB9IH0sIGN1c3RvbTogXCJcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGUgPSByZWYubmF2aWdhdGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi1wcmltYXJ5IGJ0bi11cHBlcmNhc2UgbWctbC01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCd0L7QstCw0Y8g0YHRgtGA0LDQvdC40YbQsFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIHR4LTEzXCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnBhZ2VzLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgIGtleTogcGFnZS5pZCxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcInBhZ2VcIiwgcGFyYW1zOiB7IGlkOiBwYWdlLmlkIH0gfSxcbiAgICAgICAgICAgICAgICBjdXN0b206IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXggcGQtc20teC0yMCBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyIGQtbm9uZSBkLXNtLWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLWluaXRpYWwgcm91bmRlZC1jaXJjbGUgYmctZ3JheS02MDAgb3AtNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcImZpbGUtdGV4dFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGQtc20tbC0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInR4LW1lZGl1bSBtZy1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocGFnZS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidHgtMTIgdHgtY29sb3ItMDMgbWctYi0wXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocGFnZS50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1sLWF1dG8gdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInR4LW1lZGl1bSBtZy1iLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInR4LTEyIHR4LXN1Y2Nlc3MgbWctYi0wXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmlzUHVibGlzaGVkKHBhZ2UpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYWdlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDJmMmY0ZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyZjJmNGQyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyZjJmNGQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyZjJmNGQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDJmMmY0ZDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDJmMmY0ZDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MmYyZjRkMiZcIiJdLCJzb3VyY2VSb290IjoiIn0=