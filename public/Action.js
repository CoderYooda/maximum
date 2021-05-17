(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Action"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Actions/Action.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Actions/Action.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_ImagesUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../system/ImagesUpload */ "./resources/js/components/system/ImagesUpload.vue");
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImagesUpload: _system_ImagesUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_1__["EditorContent"],
    EditorMenuBubble: tiptap__WEBPACK_IMPORTED_MODULE_1__["EditorMenuBubble"]
  },
  name: "action",
  data: function data() {
    var _this = this;

    return {
      action: {
        name: '',
        content: '',
        description: '',
        slug: '',
        title: '',
        isPublished: true,
        images: []
      },
      editor: new tiptap__WEBPACK_IMPORTED_MODULE_1__["Editor"]({
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Heading"]({
          levels: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["History"]()],
        content: "",
        onInit: function onInit() {// this.init();
          //this.editor.content = this.$props.chunk.text;
        },
        onUpdate: function onUpdate(_ref) {
          var getHTML = _ref.getHTML;
          _this.action.content = getHTML();
        }
      })
    };
  },
  watch: {
    'action.slug': function actionSlug(val) {
      this.action.slug = window.urlRusLat(val);
    },
    'action.title': function actionTitle(val) {
      this.action.slug = window.urlRusLat(val);
      this.action.title = val;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$store.dispatch('get_actions').then(function () {
      _this2.action = _this2.$store.getters.getactionById(_this2.$route.params.id)[0];

      _this2.editor.setContent(_this2.action.content);

      _this2.$refs.imgLoader.setImages(_this2.action.images);

      console.log(_this2.action);
    });
  },
  computed: {},
  methods: {
    setImages: function setImages(data) {
      this.action.images = data.images;
    },
    save: function save() {
      var _this3 = this;

      var method = !!this.action.id ? 'update_action' : 'store_action';
      this.$store.dispatch(method, this.action).then(function () {
        _this3.$router.push({
          name: 'actions'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Actions/Action.vue?vue&type=template&id=f481d684&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Actions/Action.vue?vue&type=template&id=f481d684& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                          !!_vm.action.id
                            ? 'Редактирование акции "' + _vm.action.name + '"'
                            : "Создание акции"
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
                !!_vm.action.id
                  ? 'Редактирование акции "' + _vm.action.name + '"'
                  : "Новая акция"
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
                      value: _vm.action.isPublished,
                      expression: "action.isPublished"
                    }
                  ],
                  staticClass: "custom-control-input",
                  attrs: { type: "checkbox", id: "isPublished" },
                  domProps: {
                    checked: Array.isArray(_vm.action.isPublished)
                      ? _vm._i(_vm.action.isPublished, null) > -1
                      : _vm.action.isPublished
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.action.isPublished,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.action,
                              "isPublished",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.action,
                              "isPublished",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.action, "isPublished", $$c)
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
                  [_vm._v(" Опубликована")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("ImagesUpload", {
            ref: "imgLoader",
            attrs: { aspect: 688 / 405, limit: "1" },
            on: { imagesChanged: _vm.setImages }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [
                _vm._v("Тайтл ( Текст вкладки браузера )")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.action.title,
                    expression: "action.title"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.action_store_errors.title
                },
                attrs: { type: "text", placeholder: "Тайтл" },
                domProps: { value: _vm.action.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.action, "title", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.action_store_errors.title
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(this.$store.getters.action_store_errors.title[0])
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [_vm._v("URL")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.action.slug,
                    expression: "action.slug"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.action_store_errors.slug
                },
                attrs: { type: "text", placeholder: "URL" },
                domProps: { value: _vm.action.slug },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.action, "slug", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.action_store_errors.slug
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(this.$store.getters.action_store_errors.slug[0])
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [
                _vm._v("Описание страницы")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.action.description,
                    expression: "action.description"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.action_store_errors
                    .description
                },
                attrs: { rows: "4" },
                domProps: { value: _vm.action.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.action, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.action_store_errors.description
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(
                        this.$store.getters.action_store_errors.description[0]
                      )
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "d-block" }, [
                _vm._v("Название акции")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.action.name,
                    expression: "action.name"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": !!this.$store.getters.action_store_errors.name
                },
                attrs: { type: "text", placeholder: "Наименование клиента" },
                domProps: { value: _vm.action.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.action, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.action_store_errors.name
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(this.$store.getters.action_store_errors.name[0])
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { staticClass: "d-block" }, [
                  _vm._v("Описание акции")
                ]),
                _vm._v(" "),
                _c("editor-menu-bubble", {
                  attrs: { editor: _vm.editor },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var commands = ref.commands
                        var isActive = ref.isActive
                        var menu = ref.menu
                        return [
                          _c(
                            "div",
                            {
                              staticClass: "menububble",
                              class: { "is-active": menu.isActive },
                              style:
                                "left: " +
                                menu.left +
                                "px; bottom: " +
                                menu.bottom +
                                "px;"
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "menububble__button",
                                  class: { "is-active": isActive.bold() },
                                  on: { click: commands.bold }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/images/icons/typo/bold-w.svg",
                                      alt: ""
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "menububble__button",
                                  class: { "is-active": isActive.italic() },
                                  on: { click: commands.italic }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/images/icons/typo/italic-w.svg",
                                      alt: ""
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "menububble__button",
                                  class: { "is-active": isActive.code() },
                                  on: { click: commands.code }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/images/icons/typo/code-w.svg",
                                      alt: ""
                                    }
                                  })
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
                _c("editor-content", { attrs: { editor: _vm.editor } }),
                _vm._v(" "),
                !!this.$store.getters.vacancy_store_errors.content
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        _vm._s(
                          this.$store.getters.vacancy_store_errors.content[0]
                        )
                      )
                    ])
                  : _vm._e()
              ],
              1
            )
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

/***/ "./resources/js/components/pages/Actions/Action.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/Actions/Action.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Action_vue_vue_type_template_id_f481d684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action.vue?vue&type=template&id=f481d684& */ "./resources/js/components/pages/Actions/Action.vue?vue&type=template&id=f481d684&");
/* harmony import */ var _Action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Actions/Action.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Action_vue_vue_type_template_id_f481d684___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Action_vue_vue_type_template_id_f481d684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Actions/Action.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Actions/Action.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/Actions/Action.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Action.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Actions/Action.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Actions/Action.vue?vue&type=template&id=f481d684&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/Actions/Action.vue?vue&type=template&id=f481d684& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_template_id_f481d684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Action.vue?vue&type=template&id=f481d684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Actions/Action.vue?vue&type=template&id=f481d684&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_template_id_f481d684___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_template_id_f481d684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvQWN0aW9ucy9BY3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0FjdGlvbnMvQWN0aW9uLnZ1ZT82Y2JmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0FjdGlvbnMvQWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9BY3Rpb25zL0FjdGlvbi52dWU/ODBlNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9BY3Rpb25zL0FjdGlvbi52dWU/NjExNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0dBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQSw4RUFEQTtBQUNBLHVFQURBO0FBQ0E7QUFEQSxHQURBO0FBSUEsZ0JBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsbUJBRkE7QUFHQSx1QkFIQTtBQUlBLGdCQUpBO0FBS0EsaUJBTEE7QUFNQSx5QkFOQTtBQU9BO0FBUEEsT0FEQTtBQVVBO0FBQ0EscUJBQ0Esa0VBREEsRUFFQSxrRUFGQSxFQUdBLGlFQUhBLEVBSUEsaUVBSkEsRUFLQTtBQUFBO0FBQUEsVUFMQSxFQU1BLGdFQU5BLEVBT0EsbUVBUEEsRUFRQSxnRUFSQSxFQVNBLGdFQVRBLEVBVUEsNERBVkEsRUFXQSw0REFYQSxFQVlBLDREQVpBLEVBYUEsOERBYkEsRUFjQSw4REFkQSxFQWVBLGlFQWZBLEVBZ0JBLCtEQWhCQSxDQURB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Ozs7Ozs7Ozs7QUMxYkE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWtNLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMjAgbWctbGctYi0zMFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2l0ZVwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgPjxhIDpocmVmPVwiaHJlZlwiIEBjbGljaz1cIm5hdmlnYXRlXCI+0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAhIWFjdGlvbi5pZCA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCw0LrRhtC40LggXCInICsgYWN0aW9uLm5hbWUgKyAnXCInIDogJ9Ch0L7Qt9C00LDQvdC40LUg0LDQutGG0LjQuCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1nLWItMCB0eC1zcGFjaW5nLS0xXCI+e3sgISFhY3Rpb24uaWQgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQsNC60YbQuNC4IFwiJyArIGFjdGlvbi5uYW1lICsgJ1wiJyA6ICfQndC+0LLQsNGPINCw0LrRhtC40Y8nfX08L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVcIiBjbGFzcz1cImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZVwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJhY3Rpb24uaXNQdWJsaXNoZWRcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJpc1B1Ymxpc2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJpc1B1Ymxpc2hlZFwiPiDQntC/0YPQsdC70LjQutC+0LLQsNC90LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc1VwbG9hZCB2LWJpbmQ6YXNwZWN0PVwiNjg4LzQwNVwiIGxpbWl0PVwiMVwiIHJlZj1cImltZ0xvYWRlclwiIEBpbWFnZXNDaGFuZ2VkPVwic2V0SW1hZ2VzXCI+PC9JbWFnZXNVcGxvYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCi0LDQudGC0LsgKCDQotC10LrRgdGCINCy0LrQu9Cw0LTQutC4INCx0YDQsNGD0LfQtdGA0LAgKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMudGl0bGV9XCIgdi1tb2RlbD1cImFjdGlvbi50aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCi0LDQudGC0LtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMudGl0bGVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMudGl0bGVbMF0gfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5VUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3Rpb25fc3RvcmVfZXJyb3JzLnNsdWd9XCIgdi1tb2RlbD1cImFjdGlvbi5zbHVnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVVJMXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3Rpb25fc3RvcmVfZXJyb3JzLnNsdWdcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMuc2x1Z1swXSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCe0L/QuNGB0LDQvdC40LUg0YHRgtGA0LDQvdC40YbRizwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb259XCIgdi1tb2RlbD1cImFjdGlvbi5kZXNjcmlwdGlvblwiIHJvd3M9XCI0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb25cIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb25bMF0gfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QndCw0LfQstCw0L3QuNC1INCw0LrRhtC40Lg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3Rpb25fc3RvcmVfZXJyb3JzLm5hbWV9XCIgdi1tb2RlbD1cImFjdGlvbi5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC60LvQuNC10L3RgtCwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3Rpb25fc3RvcmVfZXJyb3JzLm5hbWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMubmFtZVswXSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCe0L/QuNGB0LDQvdC40LUg0LDQutGG0LjQuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlZGl0b3ItbWVudS1idWJibGUgOmVkaXRvcj1cImVkaXRvclwiIHYtc2xvdD1cInsgY29tbWFuZHMsIGlzQWN0aXZlLCBtZW51IH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lbnVidWJibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IG1lbnUuaXNBY3RpdmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiYGxlZnQ6ICR7bWVudS5sZWZ0fXB4OyBib3R0b206ICR7bWVudS5ib3R0b219cHg7YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZW51YnViYmxlX19idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FjdGl2ZS5ib2xkKCkgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvbW1hbmRzLmJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3R5cG8vYm9sZC13LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudWJ1YmJsZV9fYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogaXNBY3RpdmUuaXRhbGljKCkgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvbW1hbmRzLml0YWxpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbnMvdHlwby9pdGFsaWMtdy5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lbnVidWJibGVfX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWN0aXZlLmNvZGUoKSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY29tbWFuZHMuY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbnMvdHlwby9jb2RlLXcuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9lZGl0b3ItbWVudS1idWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlZGl0b3ItY29udGVudCA6ZWRpdG9yPVwiZWRpdG9yXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuY29udGVudH1cIiB2LW1vZGVsPVwicHJvZHVjdC5jb250ZW50XCIgcm93cz1cIjRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiID48L3RleHRhcmVhPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMudmFjYW5jeV9zdG9yZV9lcnJvcnMuY29udGVudFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMudmFjYW5jeV9zdG9yZV9lcnJvcnMuY29udGVudFswXSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG48IS0tICAgIDxkaXY+LS0+XHJcbjwhLS0gICAgICAgIDxkaXYgdi1mb3I9XCJhY3Rpb24gaW4gYWN0aW9uc1wiPi0tPlxyXG48IS0tICAgICAgICAgICAge3sgYWN0aW9uLmlkfX0tLT5cclxuPCEtLSAgICAgICAgPC9kaXY+LS0+XHJcbjwhLS0gICAgPC9kaXY+LS0+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICAvLyBpbXBvcnQgYXV0aCBmcm9tICcuLi9hdXRoLmpzJztcclxuICAgIGltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSAnLi8uLi8uLi9zeXN0ZW0vSW1hZ2VzVXBsb2FkJ1xyXG4gICAgaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JDb250ZW50LCBFZGl0b3JNZW51QnViYmxlICB9IGZyb20gJ3RpcHRhcCc7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIEJsb2NrcXVvdGUsXHJcbiAgICAgICAgQnVsbGV0TGlzdCxcclxuICAgICAgICBDb2RlQmxvY2ssXHJcbiAgICAgICAgSGFyZEJyZWFrLFxyXG4gICAgICAgIEhlYWRpbmcsXHJcbiAgICAgICAgTGlzdEl0ZW0sXHJcbiAgICAgICAgT3JkZXJlZExpc3QsXHJcbiAgICAgICAgVG9kb0l0ZW0sXHJcbiAgICAgICAgVG9kb0xpc3QsXHJcbiAgICAgICAgQm9sZCxcclxuICAgICAgICBDb2RlLFxyXG4gICAgICAgIEl0YWxpYyxcclxuICAgICAgICBMaW5rLFxyXG4gICAgICAgIFN0cmlrZSxcclxuICAgICAgICBVbmRlcmxpbmUsXHJcbiAgICAgICAgSGlzdG9yeSxcclxuICAgIH0gZnJvbSAndGlwdGFwLWV4dGVuc2lvbnMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgICAgIEltYWdlc1VwbG9hZCwgRWRpdG9yQ29udGVudCwgRWRpdG9yTWVudUJ1YmJsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZTogXCJhY3Rpb25cIixcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzbHVnIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpc1B1Ymxpc2hlZCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIDogW11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IgOiBuZXcgRWRpdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCbG9ja3F1b3RlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCdWxsZXRMaXN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2RlQmxvY2soKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEhhcmRCcmVhaygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGVhZGluZyh7IGxldmVsczogWzEsIDIsIDNdIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGlzdEl0ZW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE9yZGVyZWRMaXN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUb2RvSXRlbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVG9kb0xpc3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExpbmsoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvbGQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvZGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEl0YWxpYygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU3RyaWtlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBVbmRlcmxpbmUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEhpc3RvcnkoKSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZWRpdG9yLmNvbnRlbnQgPSB0aGlzLiRwcm9wcy5jaHVuay50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6ICh7IGdldEhUTUwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5jb250ZW50ID0gZ2V0SFRNTCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoIDoge1xyXG4gICAgICAgICAgICAnYWN0aW9uLnNsdWcnOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5zbHVnID0gd2luZG93LnVybFJ1c0xhdCh2YWwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnYWN0aW9uLnRpdGxlJzogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uc2x1ZyA9IHdpbmRvdy51cmxSdXNMYXQodmFsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLnRpdGxlID0gdmFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X2FjdGlvbnMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRhY3Rpb25CeUlkKHRoaXMuJHJvdXRlLnBhcmFtcy5pZClbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRDb250ZW50KHRoaXMuYWN0aW9uLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbWdMb2FkZXIuc2V0SW1hZ2VzKHRoaXMuYWN0aW9uLmltYWdlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2VzKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uaW1hZ2VzID0gZGF0YS5pbWFnZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNhdmUoKXtcclxuICAgICAgICAgICAgICAgIGxldCBtZXRob2QgPSAhIXRoaXMuYWN0aW9uLmlkID8gJ3VwZGF0ZV9hY3Rpb24nIDogJ3N0b3JlX2FjdGlvbic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChtZXRob2QsIHRoaXMuYWN0aW9uKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdhY3Rpb25zJ30pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTIwIG1nLWxnLWItMzBcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwibmF2XCIsIHsgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiYnJlYWRjcnVtYlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwib2xcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvc2l0ZVwiLCBjdXN0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGhyZWYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhIV92bS5hY3Rpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCw0LrRhtC40LggXCInICsgX3ZtLmFjdGlvbi5uYW1lICsgJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQodC+0LfQtNCw0L3QuNC1INCw0LrRhtC40LhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICEhX3ZtLmFjdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQsNC60YbQuNC4IFwiJyArIF92bS5hY3Rpb24ubmFtZSArICdcIidcbiAgICAgICAgICAgICAgICAgIDogXCLQndC+0LLQsNGPINCw0LrRhtC40Y9cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ub25lIGQtbWQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIixcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0KHQvtGF0YDQsNC90LjRgtGMXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGlvbi5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjdGlvbi5pc1B1Ymxpc2hlZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJpc1B1Ymxpc2hlZFwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5hY3Rpb24uaXNQdWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmFjdGlvbi5pc1B1Ymxpc2hlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmFjdGlvbi5pc1B1Ymxpc2hlZFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5hY3Rpb24uaXNQdWJsaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzUHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc1B1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hY3Rpb24sIFwiaXNQdWJsaXNoZWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpc1B1Ymxpc2hlZFwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiINCe0L/Rg9Cx0LvQuNC60L7QstCw0L3QsFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJJbWFnZXNVcGxvYWRcIiwge1xuICAgICAgICAgICAgcmVmOiBcImltZ0xvYWRlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgYXNwZWN0OiA2ODggLyA0MDUsIGxpbWl0OiBcIjFcIiB9LFxuICAgICAgICAgICAgb246IHsgaW1hZ2VzQ2hhbmdlZDogX3ZtLnNldEltYWdlcyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi0KLQsNC50YLQuyAoINCi0LXQutGB0YIg0LLQutC70LDQtNC60Lgg0LHRgNCw0YPQt9C10YDQsCApXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWN0aW9uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjdGlvbi50aXRsZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3Rpb25fc3RvcmVfZXJyb3JzLnRpdGxlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi0KLQsNC50YLQu1wiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5hY3Rpb24udGl0bGUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWN0aW9uLCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMudGl0bGVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMudGl0bGVbMF0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtfdm0uX3YoXCJVUkxcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGlvbi5zbHVnLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjdGlvbi5zbHVnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMuc2x1Z1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlVSTFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5hY3Rpb24uc2x1ZyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hY3Rpb24sIFwic2x1Z1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3Rpb25fc3RvcmVfZXJyb3JzLnNsdWdcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMuc2x1Z1swXSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcItCe0L/QuNGB0LDQvdC40LUg0YHRgtGA0LDQvdC40YbRi1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY3Rpb24uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuYWN0aW9uX3N0b3JlX2Vycm9yc1xuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5hY3Rpb24uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWN0aW9uLCBcImRlc2NyaXB0aW9uXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuYWN0aW9uX3N0b3JlX2Vycm9ycy5kZXNjcmlwdGlvblswXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcItCd0LDQt9Cy0LDQvdC40LUg0LDQutGG0LjQuFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjdGlvbi5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMubmFtZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQutC70LjQtdC90YLQsFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5hY3Rpb24ubmFtZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hY3Rpb24sIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3Rpb25fc3RvcmVfZXJyb3JzLm5hbWVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGlvbl9zdG9yZV9lcnJvcnMubmFtZVswXSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J7Qv9C40YHQsNC90LjQtSDQsNC60YbQuNC4XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImVkaXRvci1tZW51LWJ1YmJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBlZGl0b3I6IF92bS5lZGl0b3IgfSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWFuZHMgPSByZWYuY29tbWFuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lbnUgPSByZWYubWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51YnViYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBtZW51LmlzQWN0aXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0OiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUubGVmdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHg7IGJvdHRvbTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51LmJvdHRvbSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHg7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudWJ1YmJsZV9fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogaXNBY3RpdmUuYm9sZCgpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IGNvbW1hbmRzLmJvbGQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvaWNvbnMvdHlwby9ib2xkLXcuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51YnViYmxlX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZS5pdGFsaWMoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBjb21tYW5kcy5pdGFsaWMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvaWNvbnMvdHlwby9pdGFsaWMtdy5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnVidWJibGVfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IGlzQWN0aXZlLmNvZGUoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBjb21tYW5kcy5jb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2ljb25zL3R5cG8vY29kZS13LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJlZGl0b3ItY29udGVudFwiLCB7IGF0dHJzOiB7IGVkaXRvcjogX3ZtLmVkaXRvciB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnZhY2FuY3lfc3RvcmVfZXJyb3JzLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy52YWNhbmN5X3N0b3JlX2Vycm9ycy5jb250ZW50WzBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0ODFkNjg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y0ODFkNjg0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y0ODFkNjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y0ODFkNjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0ODFkNjg0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y0ODFkNjg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9BY3Rpb25zL0FjdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0ODFkNjg0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==