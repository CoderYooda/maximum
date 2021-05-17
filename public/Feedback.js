(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Feedback"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_ImagesUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../system/ImagesUpload */ "./resources/js/components/system/ImagesUpload.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ImagesUpload: _system_ImagesUpload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "feedback",
  data: function data() {
    return {
      feedback: {
        id: 0,
        name: 'Без имени',
        email: 'Feedback@mail.ru',
        comment: 'Не указано',
        city: 'Белгород',
        isPublished: false,
        images: []
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('get_feedbacks').then(function () {
      _this.feedback = _this.$store.getters.getfeedbackById(_this.$route.params.id)[0];

      _this.$refs.imgLoader.setImages(_this.feedback.images);

      console.log(_this.feedback);
    });
  },
  computed: {},
  methods: {
    setImages: function setImages(data) {
      this.feedback.images = data.images;
    },
    save: function save() {
      var _this2 = this;

      var method = !!this.feedback.id ? 'update_feedback' : 'store_feedback';
      this.$store.dispatch(method, this.feedback).then(function () {
        _this2.$router.push({
          name: 'feedbacks'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=template&id=07ee13c8&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=template&id=07ee13c8& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(
                          !!_vm.feedback.id
                            ? 'Редактирование клиента "' +
                                _vm.feedback.name +
                                '"'
                            : "Создание клиента"
                        ) +
                        "\n                        "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "mg-b-0 tx-spacing--1" }, [
            _vm._v(
              _vm._s(
                !!_vm.feedback.id
                  ? 'Редактирование клиента "' + _vm.feedback.name + '"'
                  : "Новый клиент"
              )
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-none d-md-block" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-sm pd-x-15 btn-white btn-uppercase",
              on: { click: _vm.save }
            },
            [_vm._v("Сохранить")]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "overflow-hidden" }, [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "custom-control custom-switch" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.feedback.isPublished,
                      expression: "feedback.isPublished"
                    }
                  ],
                  staticClass: "custom-control-input",
                  attrs: { type: "checkbox", id: "isPublished" },
                  domProps: {
                    checked: Array.isArray(_vm.feedback.isPublished)
                      ? _vm._i(_vm.feedback.isPublished, null) > -1
                      : _vm.feedback.isPublished
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.feedback.isPublished,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.feedback,
                              "isPublished",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.feedback,
                              "isPublished",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.feedback, "isPublished", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "isPublished" }
                  },
                  [_vm._v(" Опубликован")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("ImagesUpload", {
            ref: "imgLoader",
            attrs: { limit: "1" },
            on: { imagesChanged: _vm.setImages }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [_vm._v("Имя клиента")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.feedback.name,
                    expression: "feedback.name"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.feedback_store_errors.name
                },
                attrs: { type: "text", placeholder: "Имя клиента" },
                domProps: { value: _vm.feedback.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.feedback, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.feedback_store_errors.name
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(this.$store.getters.feedback_store_errors.name[0])
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [
                _vm._v("Почта клиента")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.feedback.email,
                    expression: "feedback.email"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.feedback_store_errors
                    .email
                },
                attrs: { type: "text", placeholder: "Почта клиента" },
                domProps: { value: _vm.feedback.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.feedback, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.feedback_store_errors.name
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(this.$store.getters.feedback_store_errors.name[0])
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [
                _vm._v("Город клиента")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.feedback.city,
                    expression: "feedback.city"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.feedback_store_errors
                    .email
                },
                attrs: { type: "text", placeholder: "Город клиента" },
                domProps: { value: _vm.feedback.city },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.feedback, "city", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.feedback_store_errors.name
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(this.$store.getters.feedback_store_errors.name[0])
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [_vm._v("Отзыв")]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.feedback.comment,
                    expression: "feedback.comment"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.feedback_store_errors
                    .content
                },
                attrs: { rows: "4" },
                domProps: { value: _vm.feedback.comment },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.feedback, "comment", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.feedback_store_errors.name
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(this.$store.getters.feedback_store_errors.name[0])
                    )
                  ])
                : _vm._e()
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Feedbacks/Feedback.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/Feedbacks/Feedback.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feedback_vue_vue_type_template_id_07ee13c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue?vue&type=template&id=07ee13c8& */ "./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=template&id=07ee13c8&");
/* harmony import */ var _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Feedback_vue_vue_type_template_id_07ee13c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Feedback_vue_vue_type_template_id_07ee13c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Feedbacks/Feedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=template&id=07ee13c8&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=template&id=07ee13c8& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_07ee13c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=template&id=07ee13c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Feedbacks/Feedback.vue?vue&type=template&id=07ee13c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_07ee13c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_07ee13c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvRmVlZGJhY2tzL0ZlZWRiYWNrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9GZWVkYmFja3MvRmVlZGJhY2sudnVlP2M5ZGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvRmVlZGJhY2tzL0ZlZWRiYWNrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9GZWVkYmFja3MvRmVlZGJhY2sudnVlP2JjMTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvRmVlZGJhY2tzL0ZlZWRiYWNrLnZ1ZT8wMTQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBLGtCQUpBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0E7QUFDQSxhQURBO0FBRUEseUJBRkE7QUFHQSxpQ0FIQTtBQUlBLDZCQUpBO0FBS0Esd0JBTEE7QUFNQSwwQkFOQTtBQU9BO0FBUEE7QUFEQTtBQVdBLEdBakJBO0FBa0JBLFNBbEJBLHFCQWtCQTtBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQSxLQUpBO0FBS0EsR0F4QkE7QUF5QkEsY0F6QkE7QUEyQkE7QUFDQSxhQURBLHFCQUNBLElBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFFBSkEsa0JBSUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsT0FGQTtBQUdBO0FBVEE7QUEzQkEsRzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHdCQUF3Qiw2Q0FBNkM7QUFDckUsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSw2QkFBNkIsa0NBQWtDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRCwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsd0JBQXdCLFlBQVk7QUFDcEMsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSw2QkFBNkIsa0NBQWtDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxVUE7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJGZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0yMCBtZy1sZy1iLTMwXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYiBicmVhZGNydW1iLXN0eWxlMSBtZy1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9zaXRlXCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIiA+PGEgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwibmF2aWdhdGVcIj7Qo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0Lw8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICEhZmVlZGJhY2suaWQgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQutC70LjQtdC90YLQsCBcIicgKyBmZWVkYmFjay5uYW1lICsgJ1wiJyA6ICfQodC+0LfQtNCw0L3QuNC1INC60LvQuNC10L3RgtCwJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWctYi0wIHR4LXNwYWNpbmctLTFcIj57eyAhIWZlZWRiYWNrLmlkID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQu9C40LXQvdGC0LAgXCInICsgZmVlZGJhY2submFtZSArICdcIicgOiAn0J3QvtCy0YvQuSDQutC70LjQtdC90YInfX08L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVcIiBjbGFzcz1cImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZVwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmZWVkYmFjay5pc1B1Ymxpc2hlZFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImlzUHVibGlzaGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImlzUHVibGlzaGVkXCI+INCe0L/Rg9Cx0LvQuNC60L7QstCw0L08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc1VwbG9hZCBsaW1pdD1cIjFcIiByZWY9XCJpbWdMb2FkZXJcIiBAaW1hZ2VzQ2hhbmdlZD1cInNldEltYWdlc1wiPjwvSW1hZ2VzVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QmNC80Y8g0LrQu9C40LXQvdGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5mZWVkYmFja19zdG9yZV9lcnJvcnMubmFtZX1cIiB2LW1vZGVsPVwiZmVlZGJhY2submFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCY0LzRjyDQutC70LjQtdC90YLQsFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9ycy5uYW1lWzBdIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCf0L7Rh9GC0LAg0LrQu9C40LXQvdGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5mZWVkYmFja19zdG9yZV9lcnJvcnMuZW1haWx9XCIgdi1tb2RlbD1cImZlZWRiYWNrLmVtYWlsXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J/QvtGH0YLQsCDQutC70LjQtdC90YLQsFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9ycy5uYW1lWzBdIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCT0L7RgNC+0LQg0LrQu9C40LXQvdGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5mZWVkYmFja19zdG9yZV9lcnJvcnMuZW1haWx9XCIgdi1tb2RlbD1cImZlZWRiYWNrLmNpdHlcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQk9C+0YDQvtC0INC60LvQuNC10L3RgtCwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5mZWVkYmFja19zdG9yZV9lcnJvcnMubmFtZVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVbMF0gfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0J7RgtC30YvQsjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9ycy5jb250ZW50fVwiIHYtbW9kZWw9XCJmZWVkYmFjay5jb21tZW50XCIgcm93cz1cIjRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9ycy5uYW1lWzBdIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwhLS0gICAgPGRpdj4tLT5cclxuPCEtLSAgICAgICAgPGRpdiB2LWZvcj1cImZlZWRiYWNrIGluIGZlZWRiYWNrc1wiPi0tPlxyXG48IS0tICAgICAgICAgICAge3sgZmVlZGJhY2suaWR9fS0tPlxyXG48IS0tICAgICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICA8L2Rpdj4tLT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIC8vIGltcG9ydCBhdXRoIGZyb20gJy4uL2F1dGguanMnO1xyXG4gICAgaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tICcuLy4uLy4uL3N5c3RlbS9JbWFnZXNVcGxvYWQnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgICAgIEltYWdlc1VwbG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IFwiZmVlZGJhY2tcIixcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2sgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAn0JHQtdC3INC40LzQtdC90LgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsIDogJ0ZlZWRiYWNrQG1haWwucnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQgOiAn0J3QtSDRg9C60LDQt9Cw0L3QvicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eSA6ICfQkdC10LvQs9C+0YDQvtC0JyxcclxuICAgICAgICAgICAgICAgICAgICBpc1B1Ymxpc2hlZCA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X2ZlZWRiYWNrcycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFjayA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0ZmVlZGJhY2tCeUlkKHRoaXMuJHJvdXRlLnBhcmFtcy5pZClbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmltZ0xvYWRlci5zZXRJbWFnZXModGhpcy5mZWVkYmFjay5pbWFnZXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2VzKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5pbWFnZXMgPSBkYXRhLmltYWdlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2F2ZSgpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG1ldGhvZCA9ICEhdGhpcy5mZWVkYmFjay5pZCA/ICd1cGRhdGVfZmVlZGJhY2snIDogJ3N0b3JlX2ZlZWRiYWNrJztcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKG1ldGhvZCwgdGhpcy5mZWVkYmFjaykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnZmVlZGJhY2tzJ30pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTIwIG1nLWxnLWItMzBcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwibmF2XCIsIHsgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiYnJlYWRjcnVtYlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwib2xcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvc2l0ZVwiLCBjdXN0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGhyZWYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhIV92bS5mZWVkYmFjay5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQu9C40LXQvdGC0LAgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZlZWRiYWNrLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCh0L7Qt9C00LDQvdC40LUg0LrQu9C40LXQvdGC0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICEhX3ZtLmZlZWRiYWNrLmlkXG4gICAgICAgICAgICAgICAgICA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC60LvQuNC10L3RgtCwIFwiJyArIF92bS5mZWVkYmFjay5uYW1lICsgJ1wiJ1xuICAgICAgICAgICAgICAgICAgOiBcItCd0L7QstGL0Lkg0LrQu9C40LXQvdGCXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtbm9uZSBkLW1kLWJsb2NrXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCh0L7RhdGA0LDQvdC40YLRjFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mZWVkYmFjay5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZlZWRiYWNrLmlzUHVibGlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImlzUHVibGlzaGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmZlZWRiYWNrLmlzUHVibGlzaGVkKVxuICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5mZWVkYmFjay5pc1B1Ymxpc2hlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmZlZWRiYWNrLmlzUHVibGlzaGVkXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmZlZWRiYWNrLmlzUHVibGlzaGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmVlZGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzUHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmVlZGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzUHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZlZWRiYWNrLCBcImlzUHVibGlzaGVkXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaXNQdWJsaXNoZWRcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIiDQntC/0YPQsdC70LjQutC+0LLQsNC9XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIkltYWdlc1VwbG9hZFwiLCB7XG4gICAgICAgICAgICByZWY6IFwiaW1nTG9hZGVyXCIsXG4gICAgICAgICAgICBhdHRyczogeyBsaW1pdDogXCIxXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IGltYWdlc0NoYW5nZWQ6IF92bS5zZXRJbWFnZXMgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW192bS5fdihcItCY0LzRjyDQutC70LjQtdC90YLQsFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmVlZGJhY2submFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmZWVkYmFjay5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9ycy5uYW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi0JjQvNGPINC60LvQuNC10L3RgtCwXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZlZWRiYWNrLm5hbWUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmVlZGJhY2ssIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5mZWVkYmFja19zdG9yZV9lcnJvcnMubmFtZVxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVbMF0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLQn9C+0YfRgtCwINC60LvQuNC10L3RgtCwXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmVlZGJhY2suZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmVlZGJhY2suZW1haWxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgIC5lbWFpbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItCf0L7Rh9GC0LAg0LrQu9C40LXQvdGC0LBcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmVlZGJhY2suZW1haWwgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmVlZGJhY2ssIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9ycy5uYW1lWzBdKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi0JPQvtGA0L7QtCDQutC70LjQtdC90YLQsFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZlZWRiYWNrLmNpdHksXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmVlZGJhY2suY2l0eVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5mZWVkYmFja19zdG9yZV9lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgLmVtYWlsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi0JPQvtGA0L7QtCDQutC70LjQtdC90YLQsFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mZWVkYmFjay5jaXR5IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZlZWRiYWNrLCBcImNpdHlcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9ycy5uYW1lWzBdKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbX3ZtLl92KFwi0J7RgtC30YvQslwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmVlZGJhY2suY29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmZWVkYmFjay5jb21tZW50XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmZlZWRiYWNrX3N0b3JlX2Vycm9yc1xuICAgICAgICAgICAgICAgICAgICAuY29udGVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCI0XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZlZWRiYWNrLmNvbW1lbnQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmVlZGJhY2ssIFwiY29tbWVudFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5mZWVkYmFja19zdG9yZV9lcnJvcnMubmFtZVxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuJHN0b3JlLmdldHRlcnMuZmVlZGJhY2tfc3RvcmVfZXJyb3JzLm5hbWVbMF0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZlZWRiYWNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2VlMTNjOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GZWVkYmFjay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZlZWRiYWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdlZTEzYzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdlZTEzYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdlZTEzYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZlZWRiYWNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2VlMTNjOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwN2VlMTNjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvRmVlZGJhY2tzL0ZlZWRiYWNrLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmVlZGJhY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZlZWRiYWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZWVkYmFjay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlZTEzYzgmXCIiXSwic291cmNlUm9vdCI6IiJ9