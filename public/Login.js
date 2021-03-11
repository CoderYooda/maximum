(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
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
  name: "Login",
  data: function data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      var email = this.email;
      var password = this.password;
      this.$store.dispatch('login', {
        email: email,
        password: password
      }).then(function () {
        _this.$router.push('/');
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
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
  return _c("div", { staticClass: "content content-fixed content-auth" }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        {
          staticClass:
            "media align-items-stretch justify-content-center ht-100p"
        },
        [
          _c("div", { staticClass: "sign-wrapper mg-lg-r-50 mg-xl-r-60" }, [
            _c("div", { staticClass: "pd-t-20 wd-100p" }, [
              _c("h4", { staticClass: "tx-color-01 mg-b-5" }, [
                _vm._v("Вход в аккаунт")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "tx-color-03 tx-16 mg-b-40" }, [
                _vm._v("С возвращением! Авторизуйтесь для продолжения.")
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "needs-validation",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.login($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Почтовый адрес")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": !!this.$store.getters.login_email_error
                      },
                      attrs: { type: "text", autofocus: "" },
                      domProps: { value: _vm.email },
                      on: {
                        keydown: function($event) {
                          return _vm.$store.commit("clear_auth_request")
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    !!this.$store.getters.login_email_error
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            _vm._s(this.$store.getters.login_email_error[0])
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Пароль")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": !!this.$store.getters.login_password_error
                      },
                      attrs: { type: "password" },
                      domProps: { value: _vm.password },
                      on: {
                        keydown: function($event) {
                          return _vm.$store.commit("clear_auth_request")
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    !!this.$store.getters.login_password_error
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            _vm._s(this.$store.getters.login_password_error[0])
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-brand-02 btn-block",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Войти")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tx-13 mg-t-20 tx-center" },
                    [
                      _vm._v("Нет аккаунта?\n                                "),
                      _c("router-link", {
                        attrs: { to: "/register", custom: "" },
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
                                  "a",
                                  {
                                    attrs: { href: href },
                                    on: { click: navigate }
                                  },
                                  [_vm._v("создать аккаунт")]
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
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative"
      },
      [
        _c("div", { staticClass: "mx-lg-wd-500 mx-xl-wd-550" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: "https://via.placeholder.com/1280x1225", alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pos-absolute b-0 r-0 tx-12" }, [
          _vm._v("\n                        Панель администратора разработал "),
          _c(
            "a",
            {
              attrs: { href: "https://github.com/CoderYooda", target: "_blank" }
            },
            [_vm._v("CoderYooda")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/auth/Login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4221c3ad& */ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4221c3ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbi52dWU/Y2ZlYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luLnZ1ZT8wMTA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW4udnVlPzgzZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFFQTtBQUNBLGVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxlQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFTQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkE7QUFPQTtBQVhBO0FBVEEsRzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFvRDtBQUN4RSxlQUFlLDJCQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCLG9EQUFvRDtBQUN6RSx1QkFBdUIsaUNBQWlDO0FBQ3hELHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUEyQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDZCQUE2Qiw0QkFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw4QkFBOEIsOEJBQThCO0FBQzVELGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxtQ0FBbUMsa0NBQWtDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRCQUE0QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QixtQkFBbUI7QUFDakQsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLG1DQUFtQyxrQ0FBa0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5Q0FBeUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhCQUE4QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pELHlDQUF5QztBQUN6QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLG1CQUFtQiwyQ0FBMkM7QUFDOUQ7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBNEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDek1BO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBjb250ZW50LWZpeGVkIGNvbnRlbnQtYXV0aFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhIGFsaWduLWl0ZW1zLXN0cmV0Y2gganVzdGlmeS1jb250ZW50LWNlbnRlciBodC0xMDBwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbi13cmFwcGVyIG1nLWxnLXItNTAgbWcteGwtci02MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZC10LTIwIHdkLTEwMHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidHgtY29sb3ItMDEgbWctYi01XCI+0JLRhdC+0LQg0LIg0LDQutC60LDRg9C90YI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInR4LWNvbG9yLTAzIHR4LTE2IG1nLWItNDBcIj7QoSDQstC+0LfQstGA0LDRidC10L3QuNC10LwhINCQ0LLRgtC+0YDQuNC30YPQudGC0LXRgdGMINC00LvRjyDQv9GA0L7QtNC+0LvQttC10L3QuNGPLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwibG9naW5cIiBjbGFzcz1cIm5lZWRzLXZhbGlkYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCf0L7Rh9GC0L7QstGL0Lkg0LDQtNGA0LXRgTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IEBrZXlkb3duPVwiJHN0b3JlLmNvbW1pdCgnY2xlYXJfYXV0aF9yZXF1ZXN0JylcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5sb2dpbl9lbWFpbF9lcnJvcn1cIiB2LW1vZGVsPVwiZW1haWxcIiBhdXRvZm9jdXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmxvZ2luX2VtYWlsX2Vycm9yXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5sb2dpbl9lbWFpbF9lcnJvclswXSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBAa2V5ZG93bj1cIiRzdG9yZS5jb21taXQoJ2NsZWFyX2F1dGhfcmVxdWVzdCcpXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmxvZ2luX3Bhc3N3b3JkX2Vycm9yfVwiIHYtbW9kZWw9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5sb2dpbl9wYXNzd29yZF9lcnJvclwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMubG9naW5fcGFzc3dvcmRfZXJyb3JbMF0gfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWJyYW5kLTAyIGJ0bi1ibG9ja1wiPtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0eC0xMyBtZy10LTIwIHR4LWNlbnRlclwiPtCd0LXRgiDQsNC60LrQsNGD0L3RgtCwP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9yZWdpc3RlclwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImhyZWZcIiBAY2xpY2s9XCJuYXZpZ2F0ZVwiPtGB0L7Qt9C00LDRgtGMINCw0LrQutCw0YPQvdGCPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSBzaWduLXdyYXBwZXIgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBwZC15LTMwIHBkLWxnLXgtNTAgcGQteGwteC02MCBhbGlnbi1pdGVtcy1jZW50ZXIgZC1ub25lIGQtbGctZmxleCBwb3MtcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXgtbGctd2QtNTAwIG14LXhsLXdkLTU1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMjgweDEyMjVcIiBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3MtYWJzb2x1dGUgYi0wIHItMCB0eC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQn9Cw0L3QtdC70Ywg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQsCDRgNCw0LfRgNCw0LHQvtGC0LDQuyA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NvZGVyWW9vZGFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Db2Rlcllvb2RhPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSBtZWRpYS1ib2R5IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj48IS0tIG1lZGlhIC0tPlxyXG4gICAgICAgIDwvZGl2PjwhLS0gY29udGFpbmVyIC0tPlxyXG4gICAgPC9kaXY+XHJcbjwhLS0gICAgPGRpdj4tLT5cclxuPCEtLSAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpblwiIEBzdWJtaXQucHJldmVudD1cImxvZ2luXCI+LS0+XHJcbjwhLS0gICAgICAgICAgICA8aDE+U2lnbiBpbjwvaDE+LS0+XHJcbjwhLS0gICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPi0tPlxyXG48IS0tICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHYtbW9kZWw9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiLz4tLT5cclxuPCEtLSAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+LS0+XHJcbjwhLS0gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdi1tb2RlbD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz4tLT5cclxuPCEtLSAgICAgICAgICAgIDxoci8+LS0+XHJcbjwhLS0gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPi0tPlxyXG48IS0tICAgICAgICA8L2Zvcm0+LS0+XHJcbjwhLS0gICAgPC9kaXY+LS0+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICAvLyBpbXBvcnQgYXV0aCBmcm9tICcuLi9hdXRoLmpzJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJMb2dpblwiLFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBsb2dpbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtYWlsID0gdGhpcy5lbWFpbDtcclxuICAgICAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbG9naW4nLCB7IGVtYWlsLCBwYXNzd29yZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY29udGVudC1maXhlZCBjb250ZW50LWF1dGhcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJtZWRpYSBhbGlnbi1pdGVtcy1zdHJldGNoIGp1c3RpZnktY29udGVudC1jZW50ZXIgaHQtMTAwcFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpZ24td3JhcHBlciBtZy1sZy1yLTUwIG1nLXhsLXItNjBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBkLXQtMjAgd2QtMTAwcFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcInR4LWNvbG9yLTAxIG1nLWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLQktGF0L7QtCDQsiDQsNC60LrQsNGD0L3RglwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidHgtY29sb3ItMDMgdHgtMTYgbWctYi00MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLQoSDQstC+0LfQstGA0LDRidC10L3QuNC10LwhINCQ0LLRgtC+0YDQuNC30YPQudGC0LXRgdGMINC00LvRjyDQv9GA0L7QtNC+0LvQttC10L3QuNGPLlwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmVlZHMtdmFsaWRhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9naW4oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcItCf0L7Rh9GC0L7QstGL0Lkg0LDQtNGA0LXRgVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMubG9naW5fZW1haWxfZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBhdXRvZm9jdXM6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzdG9yZS5jb21taXQoXCJjbGVhcl9hdXRoX3JlcXVlc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMubG9naW5fZW1haWxfZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmxvZ2luX2VtYWlsX2Vycm9yWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwi0J/QsNGA0L7Qu9GMXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5sb2dpbl9wYXNzd29yZF9lcnJvclxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc3RvcmUuY29tbWl0KFwiY2xlYXJfYXV0aF9yZXF1ZXN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmxvZ2luX3Bhc3N3b3JkX2Vycm9yXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGhpcy4kc3RvcmUuZ2V0dGVycy5sb2dpbl9wYXNzd29yZF9lcnJvclswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYnJhbmQtMDIgYnRuLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQktC+0LnRgtC4XCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0eC0xMyBtZy10LTIwIHR4LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQndC10YIg0LDQutC60LDRg9C90YLQsD9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9yZWdpc3RlclwiLCBjdXN0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItGB0L7Qt9C00LDRgtGMINCw0LrQutCw0YPQvdGCXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwibWVkaWEtYm9keSBwZC15LTMwIHBkLWxnLXgtNTAgcGQteGwteC02MCBhbGlnbi1pdGVtcy1jZW50ZXIgZC1ub25lIGQtbGctZmxleCBwb3MtcmVsYXRpdmVcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJteC1sZy13ZC01MDAgbXgteGwtd2QtNTUwXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMjgweDEyMjVcIiwgYWx0OiBcIlwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3MtYWJzb2x1dGUgYi0wIHItMCB0eC0xMlwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDQn9Cw0L3QtdC70Ywg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQsCDRgNCw0LfRgNCw0LHQvtGC0LDQuyBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vQ29kZXJZb29kYVwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJDb2Rlcllvb2RhXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDIyMWMzYWQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyMjFjM2FkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyMjFjM2FkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyMjFjM2FkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDIyMWMzYWQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDIyMWMzYWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjIxYzNhZCZcIiJdLCJzb3VyY2VSb290IjoiIn0=