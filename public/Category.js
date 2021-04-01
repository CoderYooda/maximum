(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Category"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var _system_ImagesUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../system/ImagesUpload */ "./resources/js/components/system/ImagesUpload.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ImagesUpload: _system_ImagesUpload__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"],
    EditorMenuBubble: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBubble"]
  },
  name: "Category",
  data: function data() {
    var _this = this;

    return {
      keepInBounds: true,
      images: [],
      //category : {name: 'Корневая директория', id: 0},
      category: {
        name: '',
        content: '',
        images: null,
        parent: {
          name: 'Корневая директория',
          id: 0
        },
        title: null,
        description: null,
        slug: null
      },
      editor: new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Heading"]({
          levels: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["History"]()],
        content: "",
        onInit: function onInit() {// this.init();
          //this.editor.content = this.$props.chunk.text;
        },
        onUpdate: function onUpdate(_ref) {
          var getHTML = _ref.getHTML;
          _this.category.content = getHTML();
        }
      })
    };
  },
  // watch:{
  //     value : () => {
  //         console.log(1)
  //     }
  // },
  watch: {
    'category.slug': function categorySlug(val) {
      this.category.slug = window.urlRusLat(val);
    },
    'category.name': function categoryName(val) {
      this.category.slug = window.urlRusLat(val);
      this.category.title = val;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$store.dispatch('get_categories').then(function () {
      var category = _this2.$store.getters.getCategory(_this2.$route.params.category_id);

      if (!category) {
        _this2.$store.dispatch('get_category', _this2.$route.params.category_id).then(function (resp) {
          _this2.category = resp.data.category;
          var parent_id = !!category ? category.parent.id : 0;

          _this2.editor.setContent(resp.data.category.content); //this.initEditor(resp.data.category.content);


          if (!!!parent_id) {
            parent_id = !!_this2.$route.query.category ? _this2.$route.query.category : 0;
          }

          _this2.$refs.imgLoader.setImages(_this2.category.images); //this.setCategory(parent_id);

        })["catch"](function () {
          var parent_id = _this2.$route.query.category;
          console.log(parent_id);

          _this2.setCategory(parent_id);
        });
      } else {
        _this2.category = category; // this.editor.content = category.content;

        _this2.$refs.imgLoader.setImages(category.images);

        _this2.category.category = _this2.$store.getters.getCategoryById(category.category_id)[0];
      }
    });
  },
  computed: {
    // selected_category(){
    //     return this.$store.getters.getCategoryById(this.$route.query.category);
    // },
    // category_images(){
    //     return _.pluck(this.images, 'id');
    // },
    // content(){
    //     return this.category.content;
    // },
    categories: function categories() {
      return this.$store.getters.categories;
    }
  },
  methods: {
    setImages: function setImages(data) {
      this.category.images = data.images;
    },
    change: function change(_ref2) {
      var coordinates = _ref2.coordinates,
          canvas = _ref2.canvas;
      console.log(coordinates, canvas);
    },
    setCategory: function setCategory(parent_id) {
      var _this3 = this;

      if (parent_id === 0) {
        this.category.parent = {
          name: 'Корневая директория',
          id: 0
        };
      } else {
        var category = this.$store.getters.getCategoryById(parent_id)[0];
        console.log(category);
        this.category.parent = category;

        if (!category) {
          this.$store.dispatch('get_category', parent_id).then(function (resp) {
            category = resp.data.category;
            _this3.category.parent = category;
          });
        }
      }
    },
    save: function save() {
      var _this4 = this;

      this.category.parent_id = !!this.parent ? this.parent.parent.id : 0;
      var method = !!this.category.id ? 'update_category' : 'store_category'; //
      // this.category.images = this.images;

      this.$store.dispatch(method, this.category).then(function () {
        _this4.$router.push({
          name: 'shop',
          params: {
            category_id: !!_this4.category ? _this4.category.parent_id : 0
          }
        });
      });
    },
    initEditor: function initEditor(text) {
      var _this5 = this;

      this.editor = new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Heading"]({
          levels: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["History"]()],
        content: text,
        onInit: function onInit() {
          _this5.init(); //this.editor.content = this.$props.chunk.text;

        },
        onUpdate: function onUpdate(_ref3) {
          var getHTML = _ref3.getHTML;
          _this5.$props.chunk.text = getHTML();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
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
                        "\n                        " +
                          _vm._s(
                            !!_vm.category.id
                              ? 'Редактирование категории "' +
                                  _vm.category.name +
                                  '"'
                              : "Создание категории"
                          ) +
                          "\n                    "
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
                  !!_vm.category.id
                    ? 'Редактирование товара "' + _vm.category.name + '"'
                    : "Новая категория"
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
      _c("ImagesUpload", {
        ref: "imgLoader",
        attrs: { limit: "1" },
        on: { imagesChanged: _vm.setImages }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "d-block" }, [
              _vm._v("Наименование категории")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.category.name,
                  expression: "category.name"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.category_store_errors.name
              },
              attrs: { type: "text", placeholder: "Наименование категории" },
              domProps: { value: _vm.category.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.category, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.category_store_errors.name
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(this.$store.getters.category_store_errors.name[0])
                  )
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "d-block" }, [_vm._v("В категории")]),
              _vm._v(" "),
              _c("v-select", {
                class: {
                  "is-invalid": !!this.$store.getters.category_store_errors
                    .category_id
                },
                attrs: { label: "name", options: _vm.categories },
                model: {
                  value: _vm.category.parent,
                  callback: function($$v) {
                    _vm.$set(_vm.category, "parent", $$v)
                  },
                  expression: "category.parent"
                }
              }),
              _vm._v(" "),
              !!this.$store.getters.category_store_errors.category_id
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(
                        this.$store.getters.category_store_errors.category_id[0]
                      )
                    )
                  ])
                : _vm._e()
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", { staticClass: "d-block" }, [
            _vm._v("Описание категории")
          ]),
          _vm._v(" "),
          _c("editor-menu-bubble", {
            attrs: { editor: _vm.editor, "keep-in-bounds": _vm.keepInBounds },
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
          _c("editor-content", {
            attrs: { editor: _vm.editor },
            model: {
              value: _vm.category.content,
              callback: function($$v) {
                _vm.$set(_vm.category, "content", $$v)
              },
              expression: "category.content"
            }
          }),
          _vm._v(" "),
          !!this.$store.getters.category_store_errors.content
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v(
                  _vm._s(this.$store.getters.category_store_errors.content[0])
                )
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
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
                  value: _vm.category.title,
                  expression: "category.title"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.category_store_errors.title
              },
              attrs: { type: "text", placeholder: "Тайтл" },
              domProps: { value: _vm.category.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.category, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.category_store_errors.title
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(this.$store.getters.category_store_errors.title[0])
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
                  value: _vm.category.slug,
                  expression: "category.slug"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.category_store_errors.slug
              },
              attrs: { type: "text", placeholder: "URL" },
              domProps: { value: _vm.category.slug },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.category, "slug", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.category_store_errors.slug
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(this.$store.getters.category_store_errors.slug[0])
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
                  value: _vm.category.description,
                  expression: "category.description"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.category_store_errors
                  .description
              },
              attrs: { rows: "4" },
              domProps: { value: _vm.category.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.category, "description", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.category_store_errors.description
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(
                      this.$store.getters.category_store_errors.description[0]
                    )
                  )
                ])
              : _vm._e()
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Category.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Category.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& */ "./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b9ddcd8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Category.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Category.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvQ2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0NhdGVnb3J5LnZ1ZT84MDcwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9DYXRlZ29yeS52dWU/NWMzYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9DYXRlZ29yeS52dWU/Mjg0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3R0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQSw4RUFEQTtBQUNBLHVFQURBO0FBQ0E7QUFEQSxHQURBO0FBSUEsa0JBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQUE7O0FBQ0E7QUFDQSx3QkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsbUJBRkE7QUFHQSxvQkFIQTtBQUlBO0FBQUE7QUFBQTtBQUFBLFNBSkE7QUFLQSxtQkFMQTtBQU1BLHlCQU5BO0FBT0E7QUFQQSxPQUpBO0FBYUE7QUFDQSxxQkFDQSxrRUFEQSxFQUVBLGtFQUZBLEVBR0EsaUVBSEEsRUFJQSxpRUFKQSxFQUtBO0FBQUE7QUFBQSxVQUxBLEVBTUEsZ0VBTkEsRUFPQSxtRUFQQSxFQVFBLGdFQVJBLEVBU0EsZ0VBVEEsRUFVQSw0REFWQSxFQVdBLDREQVhBLEVBWUEsNERBWkEsRUFhQSw4REFiQSxFQWNBLDhEQWRBLEVBZUEsaUVBZkEsRUFnQkEsK0RBaEJBLENBREE7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QSx3Q0FBOEwsQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IkNhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMjAgbWctbGctYi0zMFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NpdGVcIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIiA+PGEgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwibmF2aWdhdGVcIj7Qo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0Lw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICEhY2F0ZWdvcnkuaWQgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LggXCInICsgY2F0ZWdvcnkubmFtZSArICdcIicgOiAn0KHQvtC30LTQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWctYi0wIHR4LXNwYWNpbmctLTFcIj57eyAhIWNhdGVnb3J5LmlkID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwIFwiJyArIGNhdGVnb3J5Lm5hbWUgKyAnXCInIDogJ9Cd0L7QstCw0Y8g0LrQsNGC0LXQs9C+0YDQuNGPJ319PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlXCIgY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEltYWdlc1VwbG9hZCBsaW1pdD1cIjFcIiByZWY9XCJpbWdMb2FkZXJcIiBAaW1hZ2VzQ2hhbmdlZD1cInNldEltYWdlc1wiPjwvSW1hZ2VzVXBsb2FkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5uYW1lfVwiIHYtbW9kZWw9XCJjYXRlZ29yeS5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLm5hbWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5uYW1lWzBdIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QkiDQutCw0YLQtdCz0L7RgNC40Lg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3Qgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuY2F0ZWdvcnlfaWR9XCIgdi1tb2RlbD1cImNhdGVnb3J5LnBhcmVudFwiIGxhYmVsPVwibmFtZVwiIDpvcHRpb25zPVwiY2F0ZWdvcmllc1wiPjwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuY2F0ZWdvcnlfaWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5jYXRlZ29yeV9pZFswXSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0J7Qv9C40YHQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40Lg8L2xhYmVsPlxuICAgICAgICAgICAgPGVkaXRvci1tZW51LWJ1YmJsZSA6ZWRpdG9yPVwiZWRpdG9yXCIgOmtlZXAtaW4tYm91bmRzPVwia2VlcEluQm91bmRzXCIgdi1zbG90PVwieyBjb21tYW5kcywgaXNBY3RpdmUsIG1lbnUgfVwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZW51YnViYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogbWVudS5pc0FjdGl2ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiYGxlZnQ6ICR7bWVudS5sZWZ0fXB4OyBib3R0b206ICR7bWVudS5ib3R0b219cHg7YFwiXG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudWJ1YmJsZV9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWN0aXZlLmJvbGQoKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvbW1hbmRzLmJvbGRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbnMvdHlwby9ib2xkLXcuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudWJ1YmJsZV9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWN0aXZlLml0YWxpYygpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY29tbWFuZHMuaXRhbGljXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3R5cG8vaXRhbGljLXcuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudWJ1YmJsZV9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWN0aXZlLmNvZGUoKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvbW1hbmRzLmNvZGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbnMvdHlwby9jb2RlLXcuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9lZGl0b3ItbWVudS1idWJibGU+XG4gICAgICAgICAgICA8ZWRpdG9yLWNvbnRlbnQgOmVkaXRvcj1cImVkaXRvclwiIHYtbW9kZWw9XCJjYXRlZ29yeS5jb250ZW50XCIvPlxuXG4gICAgICAgICAgICA8IS0tPHRleHRhcmVhIHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmNvbnRlbnR9XCIgdi1tb2RlbD1cImNhdGVnb3J5LmNvbnRlbnRcIiByb3dzPVwiNFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgPjwvdGV4dGFyZWE+LS0+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmNvbnRlbnRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5jb250ZW50WzBdIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCi0LDQudGC0LsgKCDQotC10LrRgdGCINCy0LrQu9Cw0LTQutC4INCx0YDQsNGD0LfQtdGA0LAgKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy50aXRsZX1cIiB2LW1vZGVsPVwiY2F0ZWdvcnkudGl0bGVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQotCw0LnRgtC7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMudGl0bGVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy50aXRsZVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5zbHVnfVwiIHYtbW9kZWw9XCJjYXRlZ29yeS5zbHVnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVVJMXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuc2x1Z1wiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnNsdWdbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QntC/0LjRgdCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0Ys8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb259XCIgdi1tb2RlbD1cImNhdGVnb3J5LmRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb25bMF0gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JDb250ZW50LCBFZGl0b3JNZW51QnViYmxlICB9IGZyb20gJ3RpcHRhcCdcbiAgICBpbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gJy4vLi4vc3lzdGVtL0ltYWdlc1VwbG9hZCdcbiAgICBpbXBvcnQge1xuICAgICAgICBCbG9ja3F1b3RlLFxuICAgICAgICBCdWxsZXRMaXN0LFxuICAgICAgICBDb2RlQmxvY2ssXG4gICAgICAgIEhhcmRCcmVhayxcbiAgICAgICAgSGVhZGluZyxcbiAgICAgICAgTGlzdEl0ZW0sXG4gICAgICAgIE9yZGVyZWRMaXN0LFxuICAgICAgICBUb2RvSXRlbSxcbiAgICAgICAgVG9kb0xpc3QsXG4gICAgICAgIEJvbGQsXG4gICAgICAgIENvZGUsXG4gICAgICAgIEl0YWxpYyxcbiAgICAgICAgTGluayxcbiAgICAgICAgU3RyaWtlLFxuICAgICAgICBVbmRlcmxpbmUsXG4gICAgICAgIEhpc3RvcnksXG4gICAgfSBmcm9tICd0aXB0YXAtZXh0ZW5zaW9ucydcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6e1xuICAgICAgICAgICAgSW1hZ2VzVXBsb2FkLCBFZGl0b3JDb250ZW50LCBFZGl0b3JNZW51QnViYmxlXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IFwiQ2F0ZWdvcnlcIixcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2VlcEluQm91bmRzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdLFxuICAgICAgICAgICAgICAgIC8vY2F0ZWdvcnkgOiB7bmFtZTogJ9Ca0L7RgNC90LXQstCw0Y8g0LTQuNGA0LXQutGC0L7RgNC40Y8nLCBpZDogMH0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXMgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgOiB7bmFtZTogJ9Ca0L7RgNC90LXQstCw0Y8g0LTQuNGA0LXQutGC0L7RgNC40Y8nLCBpZDogMH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzbHVnIDogbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvciA6IG5ldyBFZGl0b3Ioe1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQmxvY2txdW90ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJ1bGxldExpc3QoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2RlQmxvY2soKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBIYXJkQnJlYWsoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBIZWFkaW5nKHsgbGV2ZWxzOiBbMSwgMiwgM10gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGlzdEl0ZW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBPcmRlcmVkTGlzdCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRvZG9JdGVtKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVG9kb0xpc3QoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMaW5rKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm9sZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvZGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBJdGFsaWMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTdHJpa2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBVbmRlcmxpbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBIaXN0b3J5KCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uSW5pdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZWRpdG9yLmNvbnRlbnQgPSB0aGlzLiRwcm9wcy5jaHVuay50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogKHsgZ2V0SFRNTCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5LmNvbnRlbnQgPSBnZXRIVE1MKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvLyB3YXRjaDp7XG4gICAgICAgIC8vICAgICB2YWx1ZSA6ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygxKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICB3YXRjaCA6IHtcbiAgICAgICAgICAgICdjYXRlZ29yeS5zbHVnJzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkuc2x1ZyA9IHdpbmRvdy51cmxSdXNMYXQodmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY2F0ZWdvcnkubmFtZSc6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5LnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS50aXRsZSA9IHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfY2F0ZWdvcmllcycpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnkodGhpcy4kcm91dGUucGFyYW1zLmNhdGVnb3J5X2lkKTtcbiAgICAgICAgICAgICAgICBpZighY2F0ZWdvcnkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X2NhdGVnb3J5JywgdGhpcy4kcm91dGUucGFyYW1zLmNhdGVnb3J5X2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gcmVzcC5kYXRhLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnRfaWQgPSAhIWNhdGVnb3J5ID8gY2F0ZWdvcnkucGFyZW50LmlkIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRDb250ZW50KHJlc3AuZGF0YS5jYXRlZ29yeS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuaW5pdEVkaXRvcihyZXNwLmRhdGEuY2F0ZWdvcnkuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoISEhcGFyZW50X2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkID0gISF0aGlzLiRyb3V0ZS5xdWVyeS5jYXRlZ29yeSA/IHRoaXMuJHJvdXRlLnF1ZXJ5LmNhdGVnb3J5IDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbWdMb2FkZXIuc2V0SW1hZ2VzKHRoaXMuY2F0ZWdvcnkuaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0Q2F0ZWdvcnkocGFyZW50X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50X2lkID0gdGhpcy4kcm91dGUucXVlcnkuY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyZW50X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENhdGVnb3J5KHBhcmVudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5lZGl0b3IuY29udGVudCA9IGNhdGVnb3J5LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuaW1nTG9hZGVyLnNldEltYWdlcyhjYXRlZ29yeS5pbWFnZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5LmNhdGVnb3J5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeUJ5SWQoY2F0ZWdvcnkuY2F0ZWdvcnlfaWQpWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICAvLyBzZWxlY3RlZF9jYXRlZ29yeSgpe1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5QnlJZCh0aGlzLiRyb3V0ZS5xdWVyeS5jYXRlZ29yeSk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gY2F0ZWdvcnlfaW1hZ2VzKCl7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIF8ucGx1Y2sodGhpcy5pbWFnZXMsICdpZCcpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIGNvbnRlbnQoKXtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5jYXRlZ29yeS5jb250ZW50O1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIHNldEltYWdlcyhkYXRhKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5LmltYWdlcyA9IGRhdGEuaW1hZ2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZSh7IGNvb3JkaW5hdGVzLCBjYW52YXMgfSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzLCBjYW52YXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldENhdGVnb3J5KHBhcmVudF9pZCl7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJlbnRfaWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wYXJlbnQgPSB7bmFtZTogJ9Ca0L7RgNC90LXQstCw0Y8g0LTQuNGA0LXQutGC0L7RgNC40Y8nLCBpZDogMH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeUJ5SWQocGFyZW50X2lkKVswXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5LnBhcmVudCA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgICAgICAgICBpZighY2F0ZWdvcnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9jYXRlZ29yeScsIHBhcmVudF9pZCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gcmVzcC5kYXRhLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucGFyZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wYXJlbnRfaWQgPSAhIXRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQucGFyZW50LmlkIDogMDtcbiAgICAgICAgICAgICAgICBsZXQgbWV0aG9kID0gISF0aGlzLmNhdGVnb3J5LmlkID8gJ3VwZGF0ZV9jYXRlZ29yeScgOiAnc3RvcmVfY2F0ZWdvcnknO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYXRlZ29yeS5pbWFnZXMgPSB0aGlzLmltYWdlcztcblxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKG1ldGhvZCwgdGhpcy5jYXRlZ29yeSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3Nob3AnLCBwYXJhbXM6IHtjYXRlZ29yeV9pZDogISF0aGlzLmNhdGVnb3J5ID8gdGhpcy5jYXRlZ29yeS5wYXJlbnRfaWQgOiAwIH19KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRFZGl0b3IodGV4dCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgRWRpdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJsb2NrcXVvdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCdWxsZXRMaXN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29kZUJsb2NrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGFyZEJyZWFrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGVhZGluZyh7IGxldmVsczogWzEsIDIsIDNdIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExpc3RJdGVtKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgT3JkZXJlZExpc3QoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUb2RvSXRlbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRvZG9MaXN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGluaygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2RlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSXRhbGljKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU3RyaWtlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVW5kZXJsaW5lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGlzdG9yeSgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICBvbkluaXQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmVkaXRvci5jb250ZW50ID0gdGhpcy4kcHJvcHMuY2h1bmsudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6ICh7IGdldEhUTUwgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMuY2h1bmsudGV4dCA9IGdldEhUTUwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTIwIG1nLWxnLWItMzBcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJuYXZcIiwgeyBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJicmVhZGNydW1iXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwib2xcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9zaXRlXCIsIGN1c3RvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGUgPSByZWYubmF2aWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaHJlZiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0LxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWN1cnJlbnRcIjogXCJwYWdlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIV92bS5jYXRlZ29yeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LggXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcnkubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCh0L7Qt9C00LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWctYi0wIHR4LXNwYWNpbmctLTFcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAhIV92bS5jYXRlZ29yeS5pZFxuICAgICAgICAgICAgICAgICAgICA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGC0L7QstCw0YDQsCBcIicgKyBfdm0uY2F0ZWdvcnkubmFtZSArICdcIidcbiAgICAgICAgICAgICAgICAgICAgOiBcItCd0L7QstCw0Y8g0LrQsNGC0LXQs9C+0YDQuNGPXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtbm9uZSBkLW1kLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQvtGF0YDQsNC90LjRgtGMXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJJbWFnZXNVcGxvYWRcIiwge1xuICAgICAgICByZWY6IFwiaW1nTG9hZGVyXCIsXG4gICAgICAgIGF0dHJzOiB7IGxpbWl0OiBcIjFcIiB9LFxuICAgICAgICBvbjogeyBpbWFnZXNDaGFuZ2VkOiBfdm0uc2V0SW1hZ2VzIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4XCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLm5hbWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNhdGVnb3J5Lm5hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY2F0ZWdvcnksIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5uYW1lXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMubmFtZVswXSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbX3ZtLl92KFwi0JIg0LrQsNGC0LXQs9C+0YDQuNC4XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9yc1xuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIm5hbWVcIiwgb3B0aW9uczogX3ZtLmNhdGVnb3JpZXMgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXRlZ29yeS5wYXJlbnQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jYXRlZ29yeSwgXCJwYXJlbnRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2F0ZWdvcnkucGFyZW50XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmNhdGVnb3J5X2lkXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5jYXRlZ29yeV9pZFswXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQntC/0LjRgdCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJlZGl0b3ItbWVudS1idWJibGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgZWRpdG9yOiBfdm0uZWRpdG9yLCBcImtlZXAtaW4tYm91bmRzXCI6IF92bS5rZWVwSW5Cb3VuZHMgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY29tbWFuZHMgPSByZWYuY29tbWFuZHNcbiAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgdmFyIG1lbnUgPSByZWYubWVudVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51YnViYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBtZW51LmlzQWN0aXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0OiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUubGVmdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHg7IGJvdHRvbTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51LmJvdHRvbSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHg7XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudWJ1YmJsZV9fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogaXNBY3RpdmUuYm9sZCgpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IGNvbW1hbmRzLmJvbGQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvaWNvbnMvdHlwby9ib2xkLXcuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51YnViYmxlX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZS5pdGFsaWMoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBjb21tYW5kcy5pdGFsaWMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvaWNvbnMvdHlwby9pdGFsaWMtdy5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnVidWJibGVfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IGlzQWN0aXZlLmNvZGUoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBjb21tYW5kcy5jb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2ljb25zL3R5cG8vY29kZS13LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJlZGl0b3ItY29udGVudFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBlZGl0b3I6IF92bS5lZGl0b3IgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcnkuY29udGVudCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jYXRlZ29yeSwgXCJjb250ZW50XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yeS5jb250ZW50XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuY29udGVudFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmNvbnRlbnRbMF0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0KLQsNC50YLQuyAoINCi0LXQutGB0YIg0LLQutC70LDQtNC60Lgg0LHRgNCw0YPQt9C10YDQsCApXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXRlZ29yeS50aXRsZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2F0ZWdvcnkudGl0bGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMudGl0bGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItCi0LDQudGC0LtcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNhdGVnb3J5LnRpdGxlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNhdGVnb3J5LCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnRpdGxlXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMudGl0bGVbMF0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtfdm0uX3YoXCJVUkxcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXRlZ29yeS5zbHVnLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yeS5zbHVnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnNsdWdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlVSTFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY2F0ZWdvcnkuc2x1ZyB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jYXRlZ29yeSwgXCJzbHVnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnNsdWdcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5zbHVnWzBdKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCe0L/QuNGB0LDQvdC40LUg0YHRgtGA0LDQvdC40YbRi1wiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcnkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhdGVnb3J5LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzXG4gICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCI0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jYXRlZ29yeS5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jYXRlZ29yeSwgXCJkZXNjcmlwdGlvblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmRlc2NyaXB0aW9uWzBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjlkZGNkOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2I5ZGRjZDhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYjlkZGNkOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYjlkZGNkOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYjlkZGNkOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiOWRkY2Q4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNiOWRkY2Q4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9DYXRlZ29yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiOWRkY2Q4JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==