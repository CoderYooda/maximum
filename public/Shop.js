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
//
//
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
      _vm._m(0),
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
      _c("div", { staticClass: "filemgr-content-body" }, [
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
            [
              _c("router-link", {
                attrs: {
                  to: { name: "product", params: { product_id: 0 } },
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
                          "div",
                          {
                            staticClass:
                              "col-6 col-sm-4 col-md-3 col-xl mg-t-10",
                            staticStyle: { "max-width": "25%" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "card card-file pointer",
                                on: { click: navigate }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "card-file-thumb tx-purple" },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "feather feather-plus",
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
                                        _c("line", {
                                          attrs: {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19"
                                          }
                                        }),
                                        _c("line", {
                                          attrs: {
                                            x1: "5",
                                            y1: "12",
                                            x2: "19",
                                            y2: "12"
                                          }
                                        })
                                      ]
                                    )
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
                                      [_vm._v("package.json")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("JSON File")]),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("2.3kb")])
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.products, function(product) {
                return _c(
                  "div",
                  {
                    staticClass: "col-6 col-sm-4 col-md-3 col-xl mg-t-10",
                    staticStyle: { "max-width": "25%" }
                  },
                  [_vm._m(2, true)]
                )
              })
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "filemgr-sidebar-header" }, [
      _c("div", { staticClass: "dropdown dropdown-icon flex-fill" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-xs btn-block btn-white",
            attrs: { "data-toggle": "dropdown" }
          },
          [
            _vm._v("Создать "),
            _c("i", { attrs: { "data-feather": "chevron-down" } })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu tx-13" })
      ])
    ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card card-file pointer" }, [
      _c("div", { staticClass: "dropdown-file" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-link",
            attrs: { href: "", "data-toggle": "dropdown" }
          },
          [_c("i", { attrs: { "data-feather": "more-vertical" } })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
          _c(
            "a",
            {
              staticClass: "dropdown-item details",
              attrs: { href: "#modalViewDetails", "data-toggle": "modal" }
            },
            [
              _c("i", { attrs: { "data-feather": "info" } }),
              _vm._v("View Details")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "dropdown-item important", attrs: { href: "" } },
            [
              _c("i", { attrs: { "data-feather": "star" } }),
              _vm._v("Mark as Important")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item share",
              attrs: { href: "#modalShare", "data-toggle": "modal" }
            },
            [_c("i", { attrs: { "data-feather": "share" } }), _vm._v("Share")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "dropdown-item download", attrs: { href: "" } },
            [
              _c("i", { attrs: { "data-feather": "download" } }),
              _vm._v("Download")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item copy",
              attrs: { href: "#modalCopy", "data-toggle": "modal" }
            },
            [_c("i", { attrs: { "data-feather": "copy" } }), _vm._v("Copy to")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item move",
              attrs: { href: "#modalMove", "data-toggle": "modal" }
            },
            [
              _c("i", { attrs: { "data-feather": "folder" } }),
              _vm._v("Move to")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "dropdown-item rename", attrs: { href: "#" } },
            [_c("i", { attrs: { "data-feather": "edit" } }), _vm._v("Rename")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "dropdown-item delete", attrs: { href: "#" } },
            [_c("i", { attrs: { "data-feather": "trash" } }), _vm._v("Delete")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-file-thumb tx-purple" }, [
        _c("i", { staticClass: "far fa-file-code" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h6", [
          _c("a", { staticClass: "link-02", attrs: { href: "" } }, [
            _vm._v("package.json")
          ])
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("JSON File")]),
        _vm._v(" "),
        _c("span", [_vm._v("2.3kb")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvU2hvcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvU2hvcC52dWU/ZDk3NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaG9wLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9TaG9wLnZ1ZT80ODg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL1Nob3AudnVlP2VkZDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtIQTtBQUNBLGNBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBLEdBUkE7QUFjQTtBQUNBLG9CQURBLDhCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsYUFKQSx1QkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BO0FBQ0EsU0FEQSxpQkFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBLFNBSkEsZUFJQSxPQUpBLEVBSUE7QUFDQTtBQUNBO0FBTkEsS0FQQTtBQWdCQSxjQWhCQSx3QkFnQkE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLFlBbkJBLHNCQW1CQTtBQUNBO0FBQ0E7QUFyQkEsR0FkQTtBQXFDQSxTQXJDQSxxQkFxQ0E7QUFDQTtBQUNBLHlDQUZBLENBR0E7QUFDQSxHQXpDQTtBQTBDQTtBQUNBLGlCQURBLDJCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEVBRkE7QUFH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O0FBQ0EsbUJBQW1CLGlDQUFpQyxXQUFXLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9qQkE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJTaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGVtZ3Itd3JhcHBlciBmaWxlbWdyLXdyYXBwZXItdHdvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVtZ3Itc2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZW1nci1zaWRlYmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGRyb3Bkb3duLWljb24gZmxleC1maWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWJsb2NrIGJ0bi13aGl0ZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj7QodC+0LfQtNCw0YLRjCA8aSBkYXRhLWZlYXRoZXI9XCJjaGV2cm9uLWRvd25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgdHgtMTNcIj5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj48aSBkYXRhLWZlYXRoZXI9XCJmb2xkZXJcIj48L2k+PHNwYW4+0JrQsNGC0LXQs9C+0YDQuNGOPC9zcGFuPjwvYT4tLT5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnY2F0ZWdvcnlfZWRpdCd9XCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwibmF2aWdhdGVcIj4tLT5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZvbGRlclwiPjxwYXRoIGQ9XCJNMjIgMTlhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDVsMiAzaDlhMiAyIDAgMCAxIDIgMnpcIj48L3BhdGg+PC9zdmc+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCa0LDRgtC10LPQvtGA0LjRjjwvc3Bhbj4tLT5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPi0tPlxyXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxzcGFuPtCi0L7QstCw0YA8L3NwYW4+PC9hPi0tPlxyXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIGRyb3Bkb3duLW1lbnUgLS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIGRyb3Bkb3duIC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj48IS0tIGZpbGVtZ3Itc2lkZWJhci1oZWFkZXIgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlbWdyLXNpZGViYXItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZmlsbCBwZC15LTIwIHBkLXgtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwZC14LTEwIG1nLWItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eC0xMCB0eC11cHBlcmNhc2UgdHgtbWVkaXVtIHR4LWNvbG9yLTAzIHR4LXNhbnMgdHgtc3BhY2luZy0xXCI+e3sgY3VycmVudF9jYXRlZ29yeSA/IGN1cnJlbnRfY2F0ZWdvcnkubmFtZSA6ICfQmtC+0YDQvdC10LLQvtC5INC60LDRgtCw0LvQvtCzJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LXRvb2x0aXA9XCJ7IGNvbnRlbnQ6ICfQndC+0LLQsNGPINC60LDRgtC10LPQvtGA0LjRjycgfVwiIEBjbGljay5wcmV2ZW50PVwib3Blbl9jYXRfZWRpdFwiIGNsYXNzPVwiY2hhdC1idG4tYWRkXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxzcGFuPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIj48L2NpcmNsZT48bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPjwvc3ZnPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWJpbmQ6Y2xhc3M9XCJ7J2Qtbm9uZScgOiAhbmV3X2NhdF9maWVsZH1cIiBjbGFzcz1cIm1nLWItMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1nLWItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJjYXRfaW5wdXRcIiBAa2V5cHJlc3MuZW50ZXI9XCJzdG9yZV9jYXRlZ29yeSgpXCIgdi1tb2RlbD1cIm5ld19jYXRlZ29yeV9uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiaGVpZ2h0OiAzMHB4OyBsaW5lLWhlaWdodDogMzBweFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtdG9vbHRpcD1cInsgY29udGVudDogJ9Ch0L7RhdGA0LDQvdC40YLRjCDQutCw0YLQtdCz0L7RgNC40Y4nIH1cIiBAY2xpY2sucHJldmVudD1cInN0b3JlX2NhdGVnb3J5KClcIiBzdHlsZT1cImhlaWdodDogMzBweDsgbGluZS1oZWlnaHQ6IDE2cHhcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodFwiID48c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImNzcy1pNmR6cTFcIj48cGF0aCBkPVwiTTE5IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTFsNSA1djExYTIgMiAwIDAgMS0yIDJ6XCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XCIxNyAyMSAxNyAxMyA3IDEzIDcgMjFcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XCI3IDMgNyA4IDE1IDhcIj48L3BvbHlsaW5lPjwvc3ZnPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXYgbmF2LXNpZGViYXIgdHgtMTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Nob3AnLCBwYXJhbXM6IHtjYXRlZ29yeV9pZDogcGFyZW50X2lkIH19XCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwiY2F0ZWdvcnlfaWRcIiA6aHJlZj1cImhyZWZcIiBAY2xpY2s9XCJuYXZpZ2F0ZVwiIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCI+Li4vPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwieyBuYW1lOiAnc2hvcCcsIHBhcmFtczoge2NhdGVnb3J5X2lkOiBjYXRlZ29yeS5pZCB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaHJlZlwiIGNsYXNzPVwibmF2LWxpbmtcIiBAY2xpY2s9XCJuYXZpZ2F0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cImZvbGRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBjYXRlZ29yeS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjwhLS0gZmlsZW1nci1zaWRlYmFyLWJvZHkgLS0+XHJcbiAgICAgICAgPC9kaXY+PCEtLSBmaWxlbWdyLXNpZGViYXIgLS0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlbWdyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVtZ3ItY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1nLWItMFwiPnt7IGN1cnJlbnRfY2F0ZWdvcnkgPyBjdXJyZW50X2NhdGVnb3J5Lm5hbWUgOiAn0JrQvtGA0L3QtdCy0L7QuSDQutCw0YLQsNC70L7QsycgfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdiBkLW5vbmUgZC1zbS1mbGV4IG1nLWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm5hdi1saW5rXCI+PGkgZGF0YS1mZWF0aGVyPVwibGlzdFwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwibmF2LWxpbmtcIj48aSBkYXRhLWZlYXRoZXI9XCJhbGVydC1jaXJjbGVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm5hdi1saW5rXCI+PGkgZGF0YS1mZWF0aGVyPVwic2V0dGluZ3NcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjwhLS0gZmlsZW1nci1jb250ZW50LWhlYWRlciAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVtZ3ItY29udGVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGQtMjAgcGQtbGctMjUgcGQteGwtMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrIHR4LW1lZGl1bSB0eC0xMCB0eC11cHBlcmNhc2UgdHgtc2FucyB0eC1zcGFjaW5nLTEgdHgtY29sb3ItMDMgbWctYi0xNVwiPtCi0L7QstCw0YDRiyDQsiDQutCw0YLQtdCz0L7RgNC40LggXCJ7eyBjdXJyZW50X2NhdGVnb3J5ID8gY3VycmVudF9jYXRlZ29yeS5uYW1lIDogJ9Ca0L7RgNC90LXQstC+0Lkg0LrQsNGC0LDQu9C+0LMnIH19XCI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LXhzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncHJvZHVjdCcsIHBhcmFtczogeyBwcm9kdWN0X2lkOiAwIH19XCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cImNvbC02IGNvbC1zbS00IGNvbC1tZC0zIGNvbC14bCBtZy10LTEwXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDI1JVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZmlsZSBwb2ludGVyXCIgQGNsaWNrPVwibmF2aWdhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlsZS10aHVtYiB0eC1wdXJwbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzXCI+PGxpbmUgeDE9XCIxMlwiIHkxPVwiNVwiIHgyPVwiMTJcIiB5Mj1cIjE5XCI+PC9saW5lPjxsaW5lIHgxPVwiNVwiIHkxPVwiMTJcIiB4Mj1cIjE5XCIgeTI9XCIxMlwiPjwvbGluZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj48YSBocmVmPVwiXCIgY2xhc3M9XCJsaW5rLTAyXCI+cGFja2FnZS5qc29uPC9hPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5KU09OIEZpbGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yLjNrYjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwicHJvZHVjdCBpbiBwcm9kdWN0c1wiIGNsYXNzPVwiY29sLTYgY29sLXNtLTQgY29sLW1kLTMgY29sLXhsIG1nLXQtMTBcIiBzdHlsZT1cIm1heC13aWR0aDogMjUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWZpbGUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWxpbmtcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+PGkgZGF0YS1mZWF0aGVyPVwibW9yZS12ZXJ0aWNhbFwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbW9kYWxWaWV3RGV0YWlsc1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gZGV0YWlsc1wiPjxpIGRhdGEtZmVhdGhlcj1cImluZm9cIj48L2k+VmlldyBEZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiZHJvcGRvd24taXRlbSBpbXBvcnRhbnRcIj48aSBkYXRhLWZlYXRoZXI9XCJzdGFyXCI+PC9pPk1hcmsgYXMgSW1wb3J0YW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtb2RhbFNoYXJlXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGNsYXNzPVwiZHJvcGRvd24taXRlbSBzaGFyZVwiPjxpIGRhdGEtZmVhdGhlcj1cInNoYXJlXCI+PC9pPlNoYXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiZHJvcGRvd24taXRlbSBkb3dubG9hZFwiPjxpIGRhdGEtZmVhdGhlcj1cImRvd25sb2FkXCI+PC9pPkRvd25sb2FkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtb2RhbENvcHlcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGNvcHlcIj48aSBkYXRhLWZlYXRoZXI9XCJjb3B5XCI+PC9pPkNvcHkgdG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21vZGFsTW92ZVwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gbW92ZVwiPjxpIGRhdGEtZmVhdGhlcj1cImZvbGRlclwiPjwvaT5Nb3ZlIHRvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gcmVuYW1lXCI+PGkgZGF0YS1mZWF0aGVyPVwiZWRpdFwiPjwvaT5SZW5hbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbSBkZWxldGVcIj48aSBkYXRhLWZlYXRoZXI9XCJ0cmFzaFwiPjwvaT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gZHJvcGRvd24gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlsZS10aHVtYiB0eC1wdXJwbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtZmlsZS1jb2RlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PjxhIGhyZWY9XCJcIiBjbGFzcz1cImxpbmstMDJcIj5wYWNrYWdlLmpzb248L2E+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SlNPTiBGaWxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yLjNrYjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIGNvbCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIHJvdyAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj48IS0tIGZpbGVtZ3ItY29udGVudC1ib2R5IC0tPlxyXG4gICAgICAgIDwvZGl2PjwhLS0gZmlsZW1nci1jb250ZW50IC0tPlxyXG4gICAgPC9kaXY+PCEtLSBmaWxlbWdyLXdyYXBwZXIgLS0+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJTaG9wXCIsXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5ld19jYXRlZ29yeV9uYW1lIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG5ld19jYXRfZmllbGQgOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICckcm91dGUucGFyYW1zLmNhdGVnb3J5X2lkJzogZnVuY3Rpb24gKGNhdGVnb3J5X2lkKSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuY2F0ZWdvcmllcyA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QnlQYXJlbnQodGhpcy5jYXRlZ29yeV9pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5X2lkID0gY2F0ZWdvcnlfaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRfY2F0ZWdvcnkoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5KHRoaXMuY2F0ZWdvcnlfaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJlbnRfaWQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFBhcmVudCh0aGlzLmNhdGVnb3J5X2lkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQgOiB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy4kcm91dGUucGFyYW1zLmNhdGVnb3J5X2lkKSB8fCAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0KG5ld05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdOYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QnlQYXJlbnQodGhpcy5jYXRlZ29yeV9pZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QnlDYXRlZ29yeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfY2F0ZWdvcmllcycpO1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X3Byb2R1Y3RzJyk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jYXRlZ29yeV9pZCA9IHBhcnNlSW50KHRoaXMuJHJvdXRlLnBhcmFtcy5jYXRlZ29yeV9pZCkgfHwgMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb3Blbl9jYXRfZWRpdCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdfY2F0X2ZpZWxkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2NhdF9pbnB1dCddLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0b3JlX2NhdGVnb3J5KCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5ld19jYXRlZ29yeV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9pZCA6IHRoaXMuY2F0ZWdvcnlfaWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnc3RvcmVfY2F0ZWdvcnknLCBkYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld19jYXRlZ29yeV9uYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdfY2F0X2ZpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGVtZ3Itd3JhcHBlciBmaWxlbWdyLXdyYXBwZXItdHdvXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZW1nci1zaWRlYmFyXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZW1nci1zaWRlYmFyLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1maWxsIHBkLXktMjAgcGQteC0xMFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwZC14LTEwIG1nLWItMTBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidHgtMTAgdHgtdXBwZXJjYXNlIHR4LW1lZGl1bSB0eC1jb2xvci0wMyB0eC1zYW5zIHR4LXNwYWNpbmctMVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudF9jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uY3VycmVudF9jYXRlZ29yeS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwi0JrQvtGA0L3QtdCy0L7QuSDQutCw0YLQsNC70L7Qs1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgY29udGVudDogXCLQndC+0LLQsNGPINC60LDRgtC10LPQvtGA0LjRj1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7IGNvbnRlbnQ6ICfQndC+0LLQsNGPINC60LDRgtC10LPQvtGA0LjRjycgfVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGF0LWJ0bi1hZGRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuX2NhdF9lZGl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmZWF0aGVyIGZlYXRoZXItcGx1cy1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtbGluZWNhcFwiOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjaXJjbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjeDogXCIxMlwiLCBjeTogXCIxMlwiLCByOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4MTogXCIxMlwiLCB5MTogXCI4XCIsIHgyOiBcIjEyXCIsIHkyOiBcIjE2XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4MTogXCI4XCIsIHkxOiBcIjEyXCIsIHgyOiBcIjE2XCIsIHkyOiBcIjEyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWctYi0xNVwiLCBjbGFzczogeyBcImQtbm9uZVwiOiAhX3ZtLm5ld19jYXRfZmllbGQgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1nLWItMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdfY2F0ZWdvcnlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld19jYXRlZ29yeV9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJjYXRfaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMwcHhcIiwgXCJsaW5lLWhlaWdodFwiOiBcIjMwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItCd0LDQt9Cy0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3X2NhdGVnb3J5X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGtleXByZXNzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3JlX2NhdGVnb3J5KClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdfY2F0ZWdvcnlfbmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IGNvbnRlbnQ6IFwi0KHQvtGF0YDQsNC90LjRgtGMINC60LDRgtC10LPQvtGA0LjRjlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwieyBjb250ZW50OiAn0KHQvtGF0YDQsNC90LjRgtGMINC60LDRgtC10LPQvtGA0LjRjicgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzBweFwiLCBcImxpbmUtaGVpZ2h0XCI6IFwiMTZweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9yZV9jYXRlZ29yeSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjc3MtaTZkenExXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNMTkgMjFINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxMWw1IDV2MTFhMiAyIDAgMCAxLTIgMnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicG9seWxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBvaW50czogXCIxNyAyMSAxNyAxMyA3IDEzIDcgMjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBvbHlsaW5lXCIsIHsgYXR0cnM6IHsgcG9pbnRzOiBcIjcgMyA3IDggMTUgOFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibmF2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtc2lkZWJhciB0eC0xM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcInNob3BcIiwgcGFyYW1zOiB7IGNhdGVnb3J5X2lkOiBfdm0ucGFyZW50X2lkIH0gfSxcbiAgICAgICAgICAgICAgICAgIGN1c3RvbTogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcnlfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaHJlZiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuLi9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJzaG9wXCIsIHBhcmFtczogeyBjYXRlZ29yeV9pZDogY2F0ZWdvcnkuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICBjdXN0b206IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSByZWYuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaHJlZiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcImZvbGRlclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGVtZ3ItY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZW1nci1jb250ZW50LWhlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1nLWItMFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgIF92bS5jdXJyZW50X2NhdGVnb3J5XG4gICAgICAgICAgICAgICAgPyBfdm0uY3VycmVudF9jYXRlZ29yeS5uYW1lXG4gICAgICAgICAgICAgICAgOiBcItCa0L7RgNC90LXQstC+0Lkg0LrQsNGC0LDQu9C+0LNcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlbWdyLWNvbnRlbnQtYm9keVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwZC0yMCBwZC1sZy0yNSBwZC14bC0zMFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJkLWJsb2NrIHR4LW1lZGl1bSB0eC0xMCB0eC11cHBlcmNhc2UgdHgtc2FucyB0eC1zcGFjaW5nLTEgdHgtY29sb3ItMDMgbWctYi0xNVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgJ9Ci0L7QstCw0YDRiyDQsiDQutCw0YLQtdCz0L7RgNC40LggXCInICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRfY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS5jdXJyZW50X2NhdGVnb3J5Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICA6IFwi0JrQvtGA0L3QtdCy0L7QuSDQutCw0YLQsNC70L7Qs1wiXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICdcIidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3cteHNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJwcm9kdWN0XCIsIHBhcmFtczogeyBwcm9kdWN0X2lkOiAwIH0gfSxcbiAgICAgICAgICAgICAgICAgIGN1c3RvbTogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wteGwgbWctdC0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiMjUlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkIGNhcmQtZmlsZSBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1maWxlLXRodW1iIHR4LXB1cnBsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmZWF0aGVyIGZlYXRoZXItcGx1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MTogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkyOiBcIjE5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MjogXCIxOVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MjogXCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rLTAyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJwYWNrYWdlLmpzb25cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkpTT04gRmlsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIyLjNrYlwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ucHJvZHVjdHMsIGZ1bmN0aW9uKHByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wteGwgbWctdC0xMFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjI1JVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl9tKDIsIHRydWUpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlbWdyLXNpZGViYXItaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93biBkcm9wZG93bi1pY29uIGZsZXgtZmlsbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIGJ0bi1ibG9jayBidG4td2hpdGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcItCh0L7Qt9C00LDRgtGMIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwiY2hldnJvbi1kb3duXCIgfSB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51IHR4LTEzXCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJuYXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYgZC1ub25lIGQtc20tZmxleCBtZy1sLWF1dG9cIiB9LCBbXG4gICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcImxpc3RcIiB9IH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcImFsZXJ0LWNpcmNsZVwiIH0gfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwic2V0dGluZ3NcIiB9IH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBjYXJkLWZpbGUgcG9pbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tZmlsZVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiaVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwibW9yZS12ZXJ0aWNhbFwiIH0gfSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW0gZGV0YWlsc1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNtb2RhbFZpZXdEZXRhaWxzXCIsIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwiaW5mb1wiIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlZpZXcgRGV0YWlsc1wiKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtIGltcG9ydGFudFwiLCBhdHRyczogeyBocmVmOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWZlYXRoZXJcIjogXCJzdGFyXCIgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiTWFyayBhcyBJbXBvcnRhbnRcIilcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbSBzaGFyZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNtb2RhbFNoYXJlXCIsIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJpXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWZlYXRoZXJcIjogXCJzaGFyZVwiIH0gfSksIF92bS5fdihcIlNoYXJlXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtIGRvd25sb2FkXCIsIGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcImRvd25sb2FkXCIgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiRG93bmxvYWRcIilcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbSBjb3B5XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI21vZGFsQ29weVwiLCBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1mZWF0aGVyXCI6IFwiY29weVwiIH0gfSksIF92bS5fdihcIkNvcHkgdG9cIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW0gbW92ZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNtb2RhbE1vdmVcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcIm1vZGFsXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWZlYXRoZXJcIjogXCJmb2xkZXJcIiB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJNb3ZlIHRvXCIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW0gcmVuYW1lXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgIFtfYyhcImlcIiwgeyBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcImVkaXRcIiB9IH0pLCBfdm0uX3YoXCJSZW5hbWVcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW0gZGVsZXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgIFtfYyhcImlcIiwgeyBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcInRyYXNoXCIgfSB9KSwgX3ZtLl92KFwiRGVsZXRlXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1maWxlLXRodW1iIHR4LXB1cnBsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWZpbGUtY29kZVwiIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgX2MoXCJoNlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluay0wMlwiLCBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwicGFja2FnZS5qc29uXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiSlNPTiBGaWxlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiMi4za2JcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OThkZWJhZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5OGRlYmFlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5OGRlYmFlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5OGRlYmFlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OThkZWJhZTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOThkZWJhZTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL1Nob3AudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG9wLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05OGRlYmFlOCZcIiJdLCJzb3VyY2VSb290IjoiIn0=