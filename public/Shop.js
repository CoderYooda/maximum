(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Shop"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Shop.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Shop.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Shop",
  data: function data() {
    return {
      new_category_name: null,
      new_cat_field: false
    };
  },
  watch: {
    '$route.params.category_id': function $routeParamsCategory_id(category_id) {
      //this.categories = this.$store.getters.getByParent(this.category_id);
      this.category_id = category_id;
    }
  },
  computed: {
    current_category: function current_category() {
      return this.$store.getters.getCategory(this.category_id);
    },
    parent_id: function parent_id() {
      return this.$store.getters.getParent(this.category_id);
    },
    category_id: {
      get: function get() {
        return parseInt(this.$route.params.category_id) || 0;
      },
      set: function set(newName) {
        return newName;
      }
    },
    categories: function categories() {
      return this.$store.getters.getByParent(this.category_id);
    },
    products: function products() {
      return this.$store.getters.getByCategoryId(this.category_id);
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('get_categories');
    this.$store.dispatch('get_products'); //this.category_id = parseInt(this.$route.params.category_id) || 0;
  },
  methods: {
    open_cat_edit: function open_cat_edit() {
      var _this = this;

      this.new_cat_field = true;
      setTimeout(function () {
        _this.$refs['cat_input'].focus();
      }, 50);
    },
    store_category: function store_category() {
      var _this2 = this;

      var data = {
        name: this.new_category_name,
        parent_id: this.category_id
      };
      this.$store.dispatch('store_category', data).then(function () {
        _this2.new_category_name = '';
        _this2.new_cat_field = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Shop.vue?vue&type=template&id=98debae8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Shop.vue?vue&type=template&id=98debae8& ***!
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
  return _c("div", { staticClass: "filemgr-wrapper filemgr-wrapper-two" }, [
    _c("div", { staticClass: "filemgr-sidebar" }, [
      _c("div", { staticClass: "filemgr-sidebar-header" }, [
        _c("div", { staticClass: "dropdown dropdown-icon flex-fill" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown-menu tx-13" },
            [
              _c("router-link", {
                attrs: {
                  to: {
                    name: "category",
                    params: { category_id: 0 },
                    query: {
                      category: _vm.current_category
                        ? _vm.current_category.id
                        : 0
                    }
                  },
                  custom: ""
                },
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
                            staticClass: "dropdown-item",
                            attrs: { href: href },
                            on: { click: navigate }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-folder",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Категорию")])
                          ]
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("router-link", {
                attrs: {
                  to: {
                    name: "product",
                    params: { product_id: 0 },
                    query: {
                      category: _vm.current_category
                        ? _vm.current_category.id
                        : 0
                    }
                  },
                  custom: ""
                },
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
                            staticClass: "dropdown-item",
                            attrs: { href: href },
                            on: { click: navigate }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-tag",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                                  }
                                }),
                                _c("line", {
                                  attrs: { x1: "7", y1: "7", x2: "7", y2: "7" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Товар")])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "filemgr-sidebar-body" }, [
        _c("div", { staticClass: "flex-fill pd-y-20 pd-x-10" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex align-items-center justify-content-between pd-x-10 mg-b-10"
            },
            [
              _c(
                "span",
                {
                  staticClass:
                    "tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1"
                },
                [
                  _vm._v(
                    _vm._s(
                      _vm.current_category
                        ? _vm.current_category.name
                        : "Корневой каталог"
                    )
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: { content: "Новая категория" },
                      expression: "{ content: 'Новая категория' }"
                    }
                  ],
                  staticClass: "chat-btn-add",
                  attrs: { href: "#", "data-toggle": "modal" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.open_cat_edit($event)
                    }
                  }
                },
                [
                  _c("span", [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-plus-circle",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      },
                      [
                        _c("circle", {
                          attrs: { cx: "12", cy: "12", r: "10" }
                        }),
                        _c("line", {
                          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
                        }),
                        _c("line", {
                          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
                        })
                      ]
                    )
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mg-b-15", class: { "d-none": !_vm.new_cat_field } },
            [
              _c("div", { staticClass: "input-group mg-b-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.new_category_name,
                      expression: "new_category_name"
                    }
                  ],
                  ref: "cat_input",
                  staticClass: "form-control",
                  staticStyle: { height: "30px", "line-height": "30px" },
                  attrs: { type: "text", placeholder: "Название категории" },
                  domProps: { value: _vm.new_category_name },
                  on: {
                    keypress: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.store_category()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.new_category_name = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: { content: "Сохранить категорию" },
                          expression: "{ content: 'Сохранить категорию' }"
                        }
                      ],
                      staticClass: "btn btn-outline-light",
                      staticStyle: { height: "30px", "line-height": "16px" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.store_category()
                        }
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "css-i6dzq1",
                          attrs: {
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                            }
                          }),
                          _c("polyline", {
                            attrs: { points: "17 21 17 13 7 13 7 21" }
                          }),
                          _c("polyline", { attrs: { points: "7 3 7 8 15 8" } })
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "nav",
            { staticClass: "nav nav-sidebar tx-13" },
            [
              _c("router-link", {
                attrs: {
                  to: { name: "shop", params: { category_id: _vm.parent_id } },
                  custom: ""
                },
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
                        _vm.category_id
                          ? _c(
                              "a",
                              {
                                staticClass: "nav-link active",
                                attrs: { href: href },
                                on: { click: navigate }
                              },
                              [_vm._v("../")]
                            )
                          : _vm._e()
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category) {
                return _c("router-link", {
                  key: category.id,
                  attrs: {
                    to: { name: "shop", params: { category_id: category.id } },
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
                              "a",
                              {
                                staticClass: "nav-link",
                                attrs: { href: href },
                                on: { click: navigate }
                              },
                              [
                                _c("i", {
                                  attrs: { "data-feather": "folder" }
                                }),
                                _vm._v(" "),
                                _c("span", [_vm._v(_vm._s(category.name))])
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
              })
            ],
            2
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "filemgr-content" }, [
      _c("div", { staticClass: "filemgr-content-header" }, [
        _c("h4", { staticClass: "mg-b-0" }, [
          _vm._v(
            _vm._s(
              _vm.current_category
                ? _vm.current_category.name
                : "Корневой каталог"
            )
          )
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "filemgr-content-body" },
        [
          _c("perfect-scrollbar", { staticStyle: { height: "calc(100%)" } }, [
            _c("div", { staticClass: "pd-20 pd-lg-25 pd-xl-30" }, [
              _c(
                "label",
                {
                  staticClass:
                    "d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15"
                },
                [
                  _vm._v(
                    'Товары в категории "' +
                      _vm._s(
                        _vm.current_category
                          ? _vm.current_category.name
                          : "Корневой каталог"
                      ) +
                      '"'
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row row-xs" },
                _vm._l(_vm.products, function(product) {
                  return _c("router-link", {
                    key: product.id,
                    attrs: {
                      to: {
                        name: "product",
                        params: { product_id: product.id, cat: 1 }
                      },
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
                                "div",
                                {
                                  staticClass:
                                    "col-6 col-sm-4 col-md-3 mg-t-10",
                                  on: { click: navigate }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "card card-file pointer" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-file-thumb tx-purple"
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "preview",
                                            attrs: {
                                              src: !!product.images[0]
                                                ? product.images[0].url
                                                : "/images/noimage.jpg",
                                              alt: ""
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "card-body" }, [
                                        _c("h6", [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "link-02",
                                              attrs: { href: "" }
                                            },
                                            [_vm._v(_vm._s(product.name))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(product.price))
                                        ])
                                      ])
                                    ]
                                  )
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
        ],
        1
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
      "button",
      {
        staticClass: "btn btn-xs btn-block btn-white",
        attrs: { "data-toggle": "dropdown" }
      },
      [
        _vm._v("Создать "),
        _c("i", { attrs: { "data-feather": "chevron-down" } })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "nav d-none d-sm-flex mg-l-auto" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
        _c("i", { attrs: { "data-feather": "list" } })
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
        _c("i", { attrs: { "data-feather": "alert-circle" } })
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
        _c("i", { attrs: { "data-feather": "settings" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Shop.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Shop.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shop_vue_vue_type_template_id_98debae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop.vue?vue&type=template&id=98debae8& */ "./resources/js/components/pages/Shop.vue?vue&type=template&id=98debae8&");
/* harmony import */ var _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Shop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Shop_vue_vue_type_template_id_98debae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Shop_vue_vue_type_template_id_98debae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Shop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Shop.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Shop.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Shop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Shop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Shop.vue?vue&type=template&id=98debae8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Shop.vue?vue&type=template&id=98debae8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_98debae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Shop.vue?vue&type=template&id=98debae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Shop.vue?vue&type=template&id=98debae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_98debae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_98debae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvU2hvcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvU2hvcC52dWU/ZDk3NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaG9wLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaG9wLnZ1ZT80ODg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL1Nob3AudnVlP2VkZDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1R0E7QUFDQSxjQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSxHQVJBO0FBY0E7QUFDQSxvQkFEQSw4QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGFBSkEsdUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxTQUpBLGVBSUEsT0FKQSxFQUlBO0FBQ0E7QUFDQTtBQU5BLEtBUEE7QUFnQkEsY0FoQkEsd0JBZ0JBO0FBQ0E7QUFDQSxLQWxCQTtBQW1CQSxZQW5CQSxzQkFtQkE7QUFDQTtBQUNBO0FBckJBLEdBZEE7QUFxQ0EsU0FyQ0EscUJBcUNBO0FBQ0E7QUFDQSx5Q0FGQSxDQUlBO0FBQ0EsR0ExQ0E7QUEyQ0E7QUFDQSxpQkFEQSwyQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxFQUZBO0FBR0EsS0FOQTtBQU9B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Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiU2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsZW1nci13cmFwcGVyIGZpbGVtZ3Itd3JhcHBlci10d29cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVtZ3Itc2lkZWJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVtZ3Itc2lkZWJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gZHJvcGRvd24taWNvbiBmbGV4LWZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWJsb2NrIGJ0bi13aGl0ZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj7QodC+0LfQtNCw0YLRjCA8aSBkYXRhLWZlYXRoZXI9XCJjaGV2cm9uLWRvd25cIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IHR4LTEzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnY2F0ZWdvcnknLCBwYXJhbXM6IHtjYXRlZ29yeV9pZDogMCB9LCBxdWVyeTogeyBjYXRlZ29yeTogY3VycmVudF9jYXRlZ29yeSA/IGN1cnJlbnRfY2F0ZWdvcnkuaWQgOiAwIH19XCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwibmF2aWdhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZvbGRlclwiPjxwYXRoIGQ9XCJNMjIgMTlhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDVsMiAzaDlhMiAyIDAgMCAxIDIgMnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCa0LDRgtC10LPQvtGA0LjRjjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Byb2R1Y3QnLCBwYXJhbXM6IHsgcHJvZHVjdF9pZDogMH0sIHF1ZXJ5OiB7IGNhdGVnb3J5OiBjdXJyZW50X2NhdGVnb3J5ID8gY3VycmVudF9jYXRlZ29yeS5pZCA6IDAgfX1cIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiA6aHJlZj1cImhyZWZcIiBAY2xpY2s9XCJuYXZpZ2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItdGFnXCI+PHBhdGggZD1cIk0yMC41OSAxMy40MWwtNy4xNyA3LjE3YTIgMiAwIDAgMS0yLjgzIDBMMiAxMlYyaDEwbDguNTkgOC41OWEyIDIgMCAwIDEgMCAyLjgyelwiPjwvcGF0aD48bGluZSB4MT1cIjdcIiB5MT1cIjdcIiB4Mj1cIjdcIiB5Mj1cIjdcIj48L2xpbmU+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCi0L7QstCw0YA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSBkcm9wZG93bi1tZW51IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gZHJvcGRvd24gLS0+XG4gICAgICAgICAgICA8L2Rpdj48IS0tIGZpbGVtZ3Itc2lkZWJhci1oZWFkZXIgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZW1nci1zaWRlYmFyLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHBkLXktMjAgcGQteC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwZC14LTEwIG1nLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHgtMTAgdHgtdXBwZXJjYXNlIHR4LW1lZGl1bSB0eC1jb2xvci0wMyB0eC1zYW5zIHR4LXNwYWNpbmctMVwiPnt7IGN1cnJlbnRfY2F0ZWdvcnkgPyBjdXJyZW50X2NhdGVnb3J5Lm5hbWUgOiAn0JrQvtGA0L3QtdCy0L7QuSDQutCw0YLQsNC70L7QsycgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtdG9vbHRpcD1cInsgY29udGVudDogJ9Cd0L7QstCw0Y8g0LrQsNGC0LXQs9C+0YDQuNGPJyB9XCIgQGNsaWNrLnByZXZlbnQ9XCJvcGVuX2NhdF9lZGl0XCIgY2xhc3M9XCJjaGF0LWJ0bi1hZGRcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PHNwYW4+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiPjwvY2lyY2xlPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+PC9zdmc+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1iaW5kOmNsYXNzPVwieydkLW5vbmUnIDogIW5ld19jYXRfZmllbGR9XCIgY2xhc3M9XCJtZy1iLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWctYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJjYXRfaW5wdXRcIiBAa2V5cHJlc3MuZW50ZXI9XCJzdG9yZV9jYXRlZ29yeSgpXCIgdi1tb2RlbD1cIm5ld19jYXRlZ29yeV9uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiaGVpZ2h0OiAzMHB4OyBsaW5lLWhlaWdodDogMzBweFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi10b29sdGlwPVwieyBjb250ZW50OiAn0KHQvtGF0YDQsNC90LjRgtGMINC60LDRgtC10LPQvtGA0LjRjicgfVwiIEBjbGljay5wcmV2ZW50PVwic3RvcmVfY2F0ZWdvcnkoKVwiIHN0eWxlPVwiaGVpZ2h0OiAzMHB4OyBsaW5lLWhlaWdodDogMTZweFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0XCIgPjxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiY3NzLWk2ZHpxMVwiPjxwYXRoIGQ9XCJNMTkgMjFINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxMWw1IDV2MTFhMiAyIDAgMCAxLTIgMnpcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cIjE3IDIxIDE3IDEzIDcgMTMgNyAyMVwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cIjcgMyA3IDggMTUgOFwiPjwvcG9seWxpbmU+PC9zdmc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXYgbmF2LXNpZGViYXIgdHgtMTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdzaG9wJywgcGFyYW1zOiB7Y2F0ZWdvcnlfaWQ6IHBhcmVudF9pZCB9fVwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHYtaWY9XCJjYXRlZ29yeV9pZFwiIDpocmVmPVwiaHJlZlwiIEBjbGljaz1cIm5hdmlnYXRlXCIgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIj4uLi88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdzaG9wJywgcGFyYW1zOiB7Y2F0ZWdvcnlfaWQ6IGNhdGVnb3J5LmlkIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImhyZWZcIiBjbGFzcz1cIm5hdi1saW5rXCIgQGNsaWNrPVwibmF2aWdhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1mZWF0aGVyPVwiZm9sZGVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBjYXRlZ29yeS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+PCEtLSBmaWxlbWdyLXNpZGViYXItYm9keSAtLT5cbiAgICAgICAgPC9kaXY+PCEtLSBmaWxlbWdyLXNpZGViYXIgLS0+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVtZ3ItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVtZ3ItY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtZy1iLTBcIj57eyBjdXJyZW50X2NhdGVnb3J5ID8gY3VycmVudF9jYXRlZ29yeS5uYW1lIDogJ9Ca0L7RgNC90LXQstC+0Lkg0LrQsNGC0LDQu9C+0LMnIH19PC9oND5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2IGQtbm9uZSBkLXNtLWZsZXggbWctbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm5hdi1saW5rXCI+PGkgZGF0YS1mZWF0aGVyPVwibGlzdFwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm5hdi1saW5rXCI+PGkgZGF0YS1mZWF0aGVyPVwiYWxlcnQtY2lyY2xlXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwibmF2LWxpbmtcIj48aSBkYXRhLWZlYXRoZXI9XCJzZXR0aW5nc1wiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj48IS0tIGZpbGVtZ3ItY29udGVudC1oZWFkZXIgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZW1nci1jb250ZW50LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cGVyZmVjdC1zY3JvbGxiYXIgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwJSk7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBkLTIwIHBkLWxnLTI1IHBkLXhsLTMwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2sgdHgtbWVkaXVtIHR4LTEwIHR4LXVwcGVyY2FzZSB0eC1zYW5zIHR4LXNwYWNpbmctMSB0eC1jb2xvci0wMyBtZy1iLTE1XCI+0KLQvtCy0LDRgNGLINCyINC60LDRgtC10LPQvtGA0LjQuCBcInt7IGN1cnJlbnRfY2F0ZWdvcnkgPyBjdXJyZW50X2NhdGVnb3J5Lm5hbWUgOiAn0JrQvtGA0L3QtdCy0L7QuSDQutCw0YLQsNC70L7QsycgfX1cIjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LXhzXCI+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Byb2R1Y3QnLCBwYXJhbXM6IHsgcHJvZHVjdF9pZDogMCwgY2F0IDogMX0sIHF1ZXJ5OiB7IGNhdGVnb3J5OiBjdXJyZW50X2NhdGVnb3J5ID8gY3VycmVudF9jYXRlZ29yeS5pZCA6IDAgfX1cIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wteGwgbWctdC0xMFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyNSVcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZmlsZSBwb2ludGVyXCIgQGNsaWNrPVwibmF2aWdhdGVcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWxlLXRodW1iIHR4LXB1cnBsZVwiPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItcGx1c1wiPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjVcIiB4Mj1cIjEyXCIgeTI9XCIxOVwiPjwvbGluZT48bGluZSB4MT1cIjVcIiB5MT1cIjEyXCIgeDI9XCIxOVwiIHkyPVwiMTJcIj48L2xpbmU+PC9zdmc+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+PGEgaHJlZj1cIlwiIGNsYXNzPVwibGluay0wMlwiPtCh0L7Qt9C00LDRgtGMINGC0L7QstCw0YA8L2E+PC9oNj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDwvcD4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDwvc3Bhbj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICB2LWZvcj1cInByb2R1Y3QgaW4gcHJvZHVjdHNcIiA6a2V5PVwicHJvZHVjdC5pZFwiIDp0bz1cInsgbmFtZTogJ3Byb2R1Y3QnLCBwYXJhbXM6IHsgcHJvZHVjdF9pZDogcHJvZHVjdC5pZCwgY2F0IDogMX19XCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJuYXZpZ2F0ZVwiICBjbGFzcz1cImNvbC02IGNvbC1zbS00IGNvbC1tZC0zIG1nLXQtMTBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZmlsZSBwb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWxlLXRodW1iIHR4LXB1cnBsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIiEhcHJvZHVjdC5pbWFnZXNbMF0gPyBwcm9kdWN0LmltYWdlc1swXS51cmwgOiAnL2ltYWdlcy9ub2ltYWdlLmpwZydcIiAgYWx0PVwiXCIgY2xhc3M9XCJwcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+PGEgaHJlZj1cIlwiIGNsYXNzPVwibGluay0wMlwiPnt7IHByb2R1Y3QubmFtZSB9fTwvYT48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IHByb2R1Y3QucHJpY2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSBjb2wgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIHJvdyAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcGVyZmVjdC1zY3JvbGxiYXI+XG4gICAgICAgICAgICA8L2Rpdj48IS0tIGZpbGVtZ3ItY29udGVudC1ib2R5IC0tPlxuICAgICAgICA8L2Rpdj48IS0tIGZpbGVtZ3ItY29udGVudCAtLT5cbiAgICA8L2Rpdj48IS0tIGZpbGVtZ3Itd3JhcHBlciAtLT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJTaG9wXCIsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5ld19jYXRlZ29yeV9uYW1lIDogbnVsbCxcbiAgICAgICAgICAgICAgICBuZXdfY2F0X2ZpZWxkIDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJyRyb3V0ZS5wYXJhbXMuY2F0ZWdvcnlfaWQnOiBmdW5jdGlvbiAoY2F0ZWdvcnlfaWQpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuY2F0ZWdvcmllcyA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QnlQYXJlbnQodGhpcy5jYXRlZ29yeV9pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeV9pZCA9IGNhdGVnb3J5X2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgY3VycmVudF9jYXRlZ29yeSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5KHRoaXMuY2F0ZWdvcnlfaWQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcmVudF9pZCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFBhcmVudCh0aGlzLmNhdGVnb3J5X2lkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yeV9pZCA6IHtcbiAgICAgICAgICAgICAgICBnZXQoKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuJHJvdXRlLnBhcmFtcy5jYXRlZ29yeV9pZCkgfHwgMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KG5ld05hbWUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3TmFtZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QnlQYXJlbnQodGhpcy5jYXRlZ29yeV9pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvZHVjdHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QnlDYXRlZ29yeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X2NhdGVnb3JpZXMnKTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfcHJvZHVjdHMnKTtcblxuICAgICAgICAgICAgLy90aGlzLmNhdGVnb3J5X2lkID0gcGFyc2VJbnQodGhpcy4kcm91dGUucGFyYW1zLmNhdGVnb3J5X2lkKSB8fCAwO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvcGVuX2NhdF9lZGl0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdfY2F0X2ZpZWxkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snY2F0X2lucHV0J10uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcmVfY2F0ZWdvcnkoKXtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uZXdfY2F0ZWdvcnlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkIDogdGhpcy5jYXRlZ29yeV9pZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3N0b3JlX2NhdGVnb3J5JywgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3X2NhdGVnb3J5X25hbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdfY2F0X2ZpZWxkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGVtZ3Itd3JhcHBlciBmaWxlbWdyLXdyYXBwZXItdHdvXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZW1nci1zaWRlYmFyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlbWdyLXNpZGViYXItaGVhZGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duIGRyb3Bkb3duLWljb24gZmxleC1maWxsXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudSB0eC0xM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjYXRlZ29yeV9pZDogMCB9LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBfdm0uY3VycmVudF9jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uY3VycmVudF9jYXRlZ29yeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjdXN0b206IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSByZWYuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGhyZWYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmZWF0aGVyIGZlYXRoZXItZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0yMiAxOWEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNWwyIDNoOWEyIDIgMCAwIDEgMiAyelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCa0LDRgtC10LPQvtGA0LjRjlwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcHJvZHVjdF9pZDogMCB9LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBfdm0uY3VycmVudF9jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uY3VycmVudF9jYXRlZ29yeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjdXN0b206IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSByZWYuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGhyZWYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmZWF0aGVyIGZlYXRoZXItdGFnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0yMC41OSAxMy40MWwtNy4xNyA3LjE3YTIgMiAwIDAgMS0yLjgzIDBMMiAxMlYyaDEwbDguNTkgOC41OWEyIDIgMCAwIDEgMCAyLjgyelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4MTogXCI3XCIsIHkxOiBcIjdcIiwgeDI6IFwiN1wiLCB5MjogXCI3XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCi0L7QstCw0YBcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlbWdyLXNpZGViYXItYm9keVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWZpbGwgcGQteS0yMCBwZC14LTEwXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHBkLXgtMTAgbWctYi0xMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ0eC0xMCB0eC11cHBlcmNhc2UgdHgtbWVkaXVtIHR4LWNvbG9yLTAzIHR4LXNhbnMgdHgtc3BhY2luZy0xXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X2NhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5jdXJyZW50X2NhdGVnb3J5Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQmtC+0YDQvdC10LLQvtC5INC60LDRgtCw0LvQvtCzXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyBjb250ZW50OiBcItCd0L7QstCw0Y8g0LrQsNGC0LXQs9C+0YDQuNGPXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInsgY29udGVudDogJ9Cd0L7QstCw0Y8g0LrQsNGC0LXQs9C+0YDQuNGPJyB9XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoYXQtYnRuLWFkZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIsIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5fY2F0X2VkaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZlYXRoZXIgZmVhdGhlci1wbHVzLWNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNpcmNsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGN4OiBcIjEyXCIsIGN5OiBcIjEyXCIsIHI6IFwiMTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHgxOiBcIjEyXCIsIHkxOiBcIjhcIiwgeDI6IFwiMTJcIiwgeTI6IFwiMTZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHgxOiBcIjhcIiwgeTE6IFwiMTJcIiwgeDI6IFwiMTZcIiwgeTI6IFwiMTJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZy1iLTE1XCIsIGNsYXNzOiB7IFwiZC1ub25lXCI6ICFfdm0ubmV3X2NhdF9maWVsZCB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAgbWctYi0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld19jYXRlZ29yeV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3X2NhdGVnb3J5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImNhdF9pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzBweFwiLCBcImxpbmUtaGVpZ2h0XCI6IFwiMzBweFwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi0J3QsNC30LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uZXdfY2F0ZWdvcnlfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3RvcmVfY2F0ZWdvcnkoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld19jYXRlZ29yeV9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgY29udGVudDogXCLQodC+0YXRgNCw0L3QuNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7IGNvbnRlbnQ6ICfQodC+0YXRgNCw0L3QuNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOJyB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIzMHB4XCIsIFwibGluZS1oZWlnaHRcIjogXCIxNnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3JlX2NhdGVnb3J5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNzcy1pNmR6cTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDExbDUgNXYxMWEyIDIgMCAwIDEtMiAyelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwb2x5bGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcG9pbnRzOiBcIjE3IDIxIDE3IDEzIDcgMTMgNyAyMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicG9seWxpbmVcIiwgeyBhdHRyczogeyBwb2ludHM6IFwiNyAzIDcgOCAxNSA4XCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJuYXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi1zaWRlYmFyIHR4LTEzXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwic2hvcFwiLCBwYXJhbXM6IHsgY2F0ZWdvcnlfaWQ6IF92bS5wYXJlbnRfaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgY3VzdG9tOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGUgPSByZWYubmF2aWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yeV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIi4uL1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcInNob3BcIiwgcGFyYW1zOiB7IGNhdGVnb3J5X2lkOiBjYXRlZ29yeS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbTogXCJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGUgPSByZWYubmF2aWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwiZm9sZGVyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZW1nci1jb250ZW50XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlbWdyLWNvbnRlbnQtaGVhZGVyXCIgfSwgW1xuICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWctYi0wXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRfY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICA/IF92bS5jdXJyZW50X2NhdGVnb3J5Lm5hbWVcbiAgICAgICAgICAgICAgICA6IFwi0JrQvtGA0L3QtdCy0L7QuSDQutCw0YLQsNC70L7Qs1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDEpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlbWdyLWNvbnRlbnQtYm9keVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBlcmZlY3Qtc2Nyb2xsYmFyXCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwJSlcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGQtMjAgcGQtbGctMjUgcGQteGwtMzBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJkLWJsb2NrIHR4LW1lZGl1bSB0eC0xMCB0eC11cHBlcmNhc2UgdHgtc2FucyB0eC1zcGFjaW5nLTEgdHgtY29sb3ItMDMgbWctYi0xNVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICfQotC+0LLQsNGA0Ysg0LIg0LrQsNGC0LXQs9C+0YDQuNC4IFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRfY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uY3VycmVudF9jYXRlZ29yeS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQmtC+0YDQvdC10LLQvtC5INC60LDRgtCw0LvQvtCzXCJcbiAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAnXCInXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IHJvdy14c1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9kdWN0cywgZnVuY3Rpb24ocHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IHByb2R1Y3RfaWQ6IHByb2R1Y3QuaWQsIGNhdDogMSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXN0b206IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtNiBjb2wtc20tNCBjb2wtbWQtMyBtZy10LTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBjYXJkLWZpbGUgcG9pbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZC1maWxlLXRodW1iIHR4LXB1cnBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByZXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICEhcHJvZHVjdC5pbWFnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdC5pbWFnZXNbMF0udXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2ltYWdlcy9ub2ltYWdlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rLTAyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHByb2R1Y3QubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tYmxvY2sgYnRuLXdoaXRlXCIsXG4gICAgICAgIGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fdihcItCh0L7Qt9C00LDRgtGMIFwiKSxcbiAgICAgICAgX2MoXCJpXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWZlYXRoZXJcIjogXCJjaGV2cm9uLWRvd25cIiB9IH0pXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdiBkLW5vbmUgZC1zbS1mbGV4IG1nLWwtYXV0b1wiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwibGlzdFwiIH0gfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwiYWxlcnQtY2lyY2xlXCIgfSB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWZlYXRoZXJcIjogXCJzZXR0aW5nc1wiIH0gfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk4ZGViYWU4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Nob3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOThkZWJhZTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOThkZWJhZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOThkZWJhZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk4ZGViYWU4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk4ZGViYWU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaG9wLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OThkZWJhZTgmXCIiXSwic291cmNlUm9vdCI6IiJ9