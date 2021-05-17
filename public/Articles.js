(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Articles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Articles/Articles.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Articles/Articles.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "article",
  data: function data() {
    return {
      article: {
        name: '',
        isPublished: true,
        description: '',
        slug: '',
        title: ''
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('get_articles').then(function () {});
  },
  computed: {
    articles: function articles() {
      return this.$store.getters.articles;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Articles/Articles.vue?vue&type=template&id=bf21ec6e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Articles/Articles.vue?vue&type=template&id=bf21ec6e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-none d-md-block" },
          [
            _c("router-link", {
              attrs: { to: { name: "article", params: { id: 0 } }, custom: "" },
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
                        [_vm._v("Новая статья")]
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
          _vm._l(_vm.articles, function(article) {
            return _c("router-link", {
              key: article.id,
              attrs: {
                to: { name: "article", params: { id: article.id } },
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
                                _vm._v(_vm._s(article.name))
                              ]),
                              _vm._v(" "),
                              _c("small", {
                                staticClass: "tx-12 tx-color-03 mg-b-0"
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mg-l-auto text-right" }, [
                              _c("p", { staticClass: "tx-medium mg-b-2" }),
                              _vm._v(" "),
                              _c("small", {
                                staticClass: "tx-12 tx-success mg-b-0"
                              })
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h4", { staticClass: "mg-b-0 tx-spacing--1" }, [_vm._v("Статьи")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Articles/Articles.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/Articles/Articles.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Articles_vue_vue_type_template_id_bf21ec6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles.vue?vue&type=template&id=bf21ec6e& */ "./resources/js/components/pages/Articles/Articles.vue?vue&type=template&id=bf21ec6e&");
/* harmony import */ var _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Articles.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Articles/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Articles_vue_vue_type_template_id_bf21ec6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Articles_vue_vue_type_template_id_bf21ec6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Articles/Articles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Articles/Articles.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/Articles/Articles.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Articles/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Articles/Articles.vue?vue&type=template&id=bf21ec6e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/Articles/Articles.vue?vue&type=template&id=bf21ec6e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_bf21ec6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=template&id=bf21ec6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Articles/Articles.vue?vue&type=template&id=bf21ec6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_bf21ec6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_bf21ec6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvQXJ0aWNsZXMvQXJ0aWNsZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0FydGljbGVzL0FydGljbGVzLnZ1ZT9iMGM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0FydGljbGVzL0FydGljbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9BcnRpY2xlcy9BcnRpY2xlcy52dWU/ZDNmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9BcnRpY2xlcy9BcnRpY2xlcy52dWU/ODcyZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBLGlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHlCQUZBO0FBR0EsdUJBSEE7QUFJQSxnQkFKQTtBQUtBO0FBTEE7QUFEQTtBQVNBLEdBWkE7QUFhQSxTQWJBLHFCQWFBO0FBQ0EsMkRBQ0EsQ0FEQTtBQUVBLEdBaEJBO0FBaUJBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQWpCQTtBQXNCQTtBQXRCQSxHOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTSwyQkFBMkIsUUFBUSxFQUFFLGNBQWM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQSxXQUFXLG1EQUFtRDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkIsaUJBQWlCLEVBQUU7QUFDbkU7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQ0FBMEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FLHVDQUF1QyxrQ0FBa0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsdUNBQXVDLHNDQUFzQztBQUM3RSx1Q0FBdUMsa0NBQWtDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNDQUFzQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoSkE7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJBcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0yMCBtZy1sZy1iLTMwXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiPtCh0YLQsNGC0YzQuDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdhcnRpY2xlJywgcGFyYW1zOiB7IGlkOiAwfX1cIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm5hdmlnYXRlXCIgY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXByaW1hcnkgYnRuLXVwcGVyY2FzZSBtZy1sLTVcIj7QndC+0LLQsNGPINGB0YLQsNGC0YzRjzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCB0eC0xM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayAgdi1mb3I9XCJhcnRpY2xlIGluIGFydGljbGVzXCIgOmtleT1cImFydGljbGUuaWRcIiA6dG89XCJ7IG5hbWU6ICdhcnRpY2xlJywgcGFyYW1zOiB7IGlkOiBhcnRpY2xlLmlkfX1cIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cIm5hdmlnYXRlXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IHBkLXNtLXgtMjAgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhciBkLW5vbmUgZC1zbS1ibG9ja1wiPjxzcGFuIGNsYXNzPVwiYXZhdGFyLWluaXRpYWwgcm91bmRlZC1jaXJjbGUgYmctZ3JheS02MDAgb3AtNVwiPjxpIGRhdGEtZmVhdGhlcj1cImZpbGUtdGV4dFwiPjwvaT48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGQtc20tbC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidHgtbWVkaXVtIG1nLWItMlwiPnt7IGFydGljbGUubmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0eC0xMiB0eC1jb2xvci0wMyBtZy1iLTBcIj48L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWctbC1hdXRvIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInR4LW1lZGl1bSBtZy1iLTJcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidHgtMTIgdHgtc3VjY2VzcyBtZy1iLTBcIj48L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJhcnRpY2xlXCIsXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWcgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKXtcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9hcnRpY2xlcycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGFydGljbGVzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTIwIG1nLWxnLWItMzBcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1ub25lIGQtbWQtYmxvY2tcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImFydGljbGVcIiwgcGFyYW1zOiB7IGlkOiAwIH0gfSwgY3VzdG9tOiBcIlwiIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXByaW1hcnkgYnRuLXVwcGVyY2FzZSBtZy1sLTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J3QvtCy0LDRjyDRgdGC0LDRgtGM0Y9cIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCB0eC0xM1wiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5hcnRpY2xlcywgZnVuY3Rpb24oYXJ0aWNsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICBrZXk6IGFydGljbGUuaWQsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJhcnRpY2xlXCIsIHBhcmFtczogeyBpZDogYXJ0aWNsZS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgY3VzdG9tOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSByZWYuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IHBkLXNtLXgtMjAgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhciBkLW5vbmUgZC1zbS1ibG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1pbml0aWFsIHJvdW5kZWQtY2lyY2xlIGJnLWdyYXktNjAwIG9wLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWZlYXRoZXJcIjogXCJmaWxlLXRleHRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBkLXNtLWwtMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0eC1tZWRpdW0gbWctYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFydGljbGUubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidHgtMTIgdHgtY29sb3ItMDMgbWctYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1nLWwtYXV0byB0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidHgtbWVkaXVtIG1nLWItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0eC0xMiB0eC1zdWNjZXNzIG1nLWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1nLWItMCB0eC1zcGFjaW5nLS0xXCIgfSwgW192bS5fdihcItCh0YLQsNGC0YzQuFwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FydGljbGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjIxZWM2ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcnRpY2xlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FydGljbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmYyMWVjNmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmYyMWVjNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmYyMWVjNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FydGljbGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjIxZWM2ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiZjIxZWM2ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvQXJ0aWNsZXMvQXJ0aWNsZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcnRpY2xlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXJ0aWNsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FydGljbGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjIxZWM2ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=