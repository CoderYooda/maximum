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
        _this2.category = category;

        _this2.editor.setContent(_this2.category.content); // this.editor.content = category.content;


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
              _vm._v("Тайтл ( Title )")
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
            _c("label", { staticClass: "d-block" }, [
              _vm._v("Описание страницы ( Description )")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvQ2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0NhdGVnb3J5LnZ1ZT84MDcwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL0NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9DYXRlZ29yeS52dWU/NWMzYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9DYXRlZ29yeS52dWU/Mjg0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3R0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQSw4RUFEQTtBQUNBLHVFQURBO0FBQ0E7QUFEQSxHQURBO0FBSUEsa0JBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQUE7O0FBQ0E7QUFDQSx3QkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsbUJBRkE7QUFHQSxvQkFIQTtBQUlBO0FBQUE7QUFBQTtBQUFBLFNBSkE7QUFLQSxtQkFMQTtBQU1BLHlCQU5BO0FBT0E7QUFQQSxPQUpBO0FBYUE7QUFDQSxxQkFDQSxrRUFEQSxFQUVBLGtFQUZBLEVBR0EsaUVBSEEsRUFJQSxpRUFKQSxFQUtBO0FBQUE7QUFBQSxVQUxBLEVBTUEsZ0VBTkEsRUFPQSxtRUFQQSxFQVFBLGdFQVJBLEVBU0EsZ0VBVEEsRUFVQSw0REFWQSxFQVdBLDREQVhBLEVBWUEsNERBWkEsRUFhQSw4REFiQSxFQWNBLDhEQWRBLEVBZUEsaUVBZkEsRUFnQkEsK0RBaEJBLENBREE7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QUFBO0FBQUEsd0NBQThMLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJDYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTIwIG1nLWxnLWItMzBcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9zaXRlXCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgPjxhIDpocmVmPVwiaHJlZlwiIEBjbGljaz1cIm5hdmlnYXRlXCI+0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAhIWNhdGVnb3J5LmlkID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4IFwiJyArIGNhdGVnb3J5Lm5hbWUgKyAnXCInIDogJ9Ch0L7Qt9C00LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4J319XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1nLWItMCB0eC1zcGFjaW5nLS0xXCI+e3sgISFjYXRlZ29yeS5pZCA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGC0L7QstCw0YDQsCBcIicgKyBjYXRlZ29yeS5uYW1lICsgJ1wiJyA6ICfQndC+0LLQsNGPINC60LDRgtC10LPQvtGA0LjRjyd9fTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2F2ZVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbWFnZXNVcGxvYWQgbGltaXQ9XCIxXCIgcmVmPVwiaW1nTG9hZGVyXCIgQGltYWdlc0NoYW5nZWQ9XCJzZXRJbWFnZXNcIj48L0ltYWdlc1VwbG9hZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40Lg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMubmFtZX1cIiB2LW1vZGVsPVwiY2F0ZWdvcnkubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5uYW1lXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMubmFtZVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0JIg0LrQsNGC0LXQs9C+0YDQuNC4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmNhdGVnb3J5X2lkfVwiIHYtbW9kZWw9XCJjYXRlZ29yeS5wYXJlbnRcIiBsYWJlbD1cIm5hbWVcIiA6b3B0aW9ucz1cImNhdGVnb3JpZXNcIj48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmNhdGVnb3J5X2lkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuY2F0ZWdvcnlfaWRbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCe0L/QuNGB0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4PC9sYWJlbD5cbiAgICAgICAgICAgIDxlZGl0b3ItbWVudS1idWJibGUgOmVkaXRvcj1cImVkaXRvclwiIDprZWVwLWluLWJvdW5kcz1cImtlZXBJbkJvdW5kc1wiIHYtc2xvdD1cInsgY29tbWFuZHMsIGlzQWN0aXZlLCBtZW51IH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudWJ1YmJsZVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IG1lbnUuaXNBY3RpdmUgfVwiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImBsZWZ0OiAke21lbnUubGVmdH1weDsgYm90dG9tOiAke21lbnUuYm90dG9tfXB4O2BcIlxuICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lbnVidWJibGVfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FjdGl2ZS5ib2xkKCkgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjb21tYW5kcy5ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3R5cG8vYm9sZC13LnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lbnVidWJibGVfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FjdGl2ZS5pdGFsaWMoKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvbW1hbmRzLml0YWxpY1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy90eXBvL2l0YWxpYy13LnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lbnVidWJibGVfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FjdGl2ZS5jb2RlKCkgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjb21tYW5kcy5jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3R5cG8vY29kZS13LnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZWRpdG9yLW1lbnUtYnViYmxlPlxuICAgICAgICAgICAgPGVkaXRvci1jb250ZW50IDplZGl0b3I9XCJlZGl0b3JcIiB2LW1vZGVsPVwiY2F0ZWdvcnkuY29udGVudFwiLz5cblxuICAgICAgICAgICAgPCEtLTx0ZXh0YXJlYSB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5jb250ZW50fVwiIHYtbW9kZWw9XCJjYXRlZ29yeS5jb250ZW50XCIgcm93cz1cIjRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiID48L3RleHRhcmVhPi0tPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5jb250ZW50XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuY29udGVudFswXSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5VUkw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuc2x1Z31cIiB2LW1vZGVsPVwiY2F0ZWdvcnkuc2x1Z1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVSTFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnNsdWdcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5zbHVnWzBdIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0KLQsNC50YLQuyAoIFRpdGxlICk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMudGl0bGV9XCIgdi1tb2RlbD1cImNhdGVnb3J5LnRpdGxlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0KLQsNC50YLQu1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnRpdGxlXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMudGl0bGVbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QntC/0LjRgdCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YsgKCBEZXNjcmlwdGlvbiApPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmRlc2NyaXB0aW9ufVwiIHYtbW9kZWw9XCJjYXRlZ29yeS5kZXNjcmlwdGlvblwiIHJvd3M9XCI0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5kZXNjcmlwdGlvblwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmRlc2NyaXB0aW9uWzBdIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IEVkaXRvciwgRWRpdG9yQ29udGVudCwgRWRpdG9yTWVudUJ1YmJsZSAgfSBmcm9tICd0aXB0YXAnXG4gICAgaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tICcuLy4uL3N5c3RlbS9JbWFnZXNVcGxvYWQnXG4gICAgaW1wb3J0IHtcbiAgICAgICAgQmxvY2txdW90ZSxcbiAgICAgICAgQnVsbGV0TGlzdCxcbiAgICAgICAgQ29kZUJsb2NrLFxuICAgICAgICBIYXJkQnJlYWssXG4gICAgICAgIEhlYWRpbmcsXG4gICAgICAgIExpc3RJdGVtLFxuICAgICAgICBPcmRlcmVkTGlzdCxcbiAgICAgICAgVG9kb0l0ZW0sXG4gICAgICAgIFRvZG9MaXN0LFxuICAgICAgICBCb2xkLFxuICAgICAgICBDb2RlLFxuICAgICAgICBJdGFsaWMsXG4gICAgICAgIExpbmssXG4gICAgICAgIFN0cmlrZSxcbiAgICAgICAgVW5kZXJsaW5lLFxuICAgICAgICBIaXN0b3J5LFxuICAgIH0gZnJvbSAndGlwdGFwLWV4dGVuc2lvbnMnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOntcbiAgICAgICAgICAgIEltYWdlc1VwbG9hZCwgRWRpdG9yQ29udGVudCwgRWRpdG9yTWVudUJ1YmJsZVxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBcIkNhdGVnb3J5XCIsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtlZXBJbkJvdW5kczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbWFnZXMgOiBbXSxcbiAgICAgICAgICAgICAgICAvL2NhdGVnb3J5IDoge25hbWU6ICfQmtC+0YDQvdC10LLQsNGPINC00LjRgNC10LrRgtC+0YDQuNGPJywgaWQ6IDB9LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50IDoge25hbWU6ICfQmtC+0YDQvdC10LLQsNGPINC00LjRgNC10LrRgtC+0YDQuNGPJywgaWQ6IDB9LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc2x1ZyA6IG51bGwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3IgOiBuZXcgRWRpdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJsb2NrcXVvdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCdWxsZXRMaXN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29kZUJsb2NrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGFyZEJyZWFrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGVhZGluZyh7IGxldmVsczogWzEsIDIsIDNdIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExpc3RJdGVtKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgT3JkZXJlZExpc3QoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUb2RvSXRlbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRvZG9MaXN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGluaygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2RlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSXRhbGljKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU3RyaWtlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVW5kZXJsaW5lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGlzdG9yeSgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBvbkluaXQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmVkaXRvci5jb250ZW50ID0gdGhpcy4kcHJvcHMuY2h1bmsudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6ICh7IGdldEhUTUwgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkuY29udGVudCA9IGdldEhUTUwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdhdGNoOntcbiAgICAgICAgLy8gICAgIHZhbHVlIDogKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIHdhdGNoIDoge1xuICAgICAgICAgICAgJ2NhdGVnb3J5LnNsdWcnOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5zbHVnID0gd2luZG93LnVybFJ1c0xhdCh2YWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjYXRlZ29yeS5uYW1lJzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkuc2x1ZyA9IHdpbmRvdy51cmxSdXNMYXQodmFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5LnRpdGxlID0gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9jYXRlZ29yaWVzJykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeSh0aGlzLiRyb3V0ZS5wYXJhbXMuY2F0ZWdvcnlfaWQpO1xuICAgICAgICAgICAgICAgIGlmKCFjYXRlZ29yeSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfY2F0ZWdvcnknLCB0aGlzLiRyb3V0ZS5wYXJhbXMuY2F0ZWdvcnlfaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSByZXNwLmRhdGEuY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudF9pZCA9ICEhY2F0ZWdvcnkgPyBjYXRlZ29yeS5wYXJlbnQuaWQgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQocmVzcC5kYXRhLmNhdGVnb3J5LmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5pbml0RWRpdG9yKHJlc3AuZGF0YS5jYXRlZ29yeS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighISFwYXJlbnRfaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQgPSAhIXRoaXMuJHJvdXRlLnF1ZXJ5LmNhdGVnb3J5ID8gdGhpcy4kcm91dGUucXVlcnkuY2F0ZWdvcnkgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmltZ0xvYWRlci5zZXRJbWFnZXModGhpcy5jYXRlZ29yeS5pbWFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRDYXRlZ29yeShwYXJlbnRfaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnRfaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRfaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2F0ZWdvcnkocGFyZW50X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRDb250ZW50KHRoaXMuY2F0ZWdvcnkuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZWRpdG9yLmNvbnRlbnQgPSBjYXRlZ29yeS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmltZ0xvYWRlci5zZXRJbWFnZXMoY2F0ZWdvcnkuaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5jYXRlZ29yeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKGNhdGVnb3J5LmNhdGVnb3J5X2lkKVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgLy8gc2VsZWN0ZWRfY2F0ZWdvcnkoKXtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeUJ5SWQodGhpcy4kcm91dGUucXVlcnkuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIGNhdGVnb3J5X2ltYWdlcygpe1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBfLnBsdWNrKHRoaXMuaW1hZ2VzLCAnaWQnKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyBjb250ZW50KCl7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnkuY29udGVudDtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYXRlZ29yaWVzKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcmllcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBzZXRJbWFnZXMoZGF0YSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5pbWFnZXMgPSBkYXRhLmltYWdlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2UoeyBjb29yZGluYXRlcywgY2FudmFzIH0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcywgY2FudmFzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRDYXRlZ29yeShwYXJlbnRfaWQpe1xuXG4gICAgICAgICAgICAgICAgaWYocGFyZW50X2lkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucGFyZW50ID0ge25hbWU6ICfQmtC+0YDQvdC10LLQsNGPINC00LjRgNC10LrRgtC+0YDQuNGPJywgaWQ6IDB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKHBhcmVudF9pZClbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wYXJlbnQgPSBjYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNhdGVnb3J5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfY2F0ZWdvcnknLCBwYXJlbnRfaWQpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHJlc3AuZGF0YS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5LnBhcmVudCA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucGFyZW50X2lkID0gISF0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnBhcmVudC5pZCA6IDA7XG4gICAgICAgICAgICAgICAgbGV0IG1ldGhvZCA9ICEhdGhpcy5jYXRlZ29yeS5pZCA/ICd1cGRhdGVfY2F0ZWdvcnknIDogJ3N0b3JlX2NhdGVnb3J5JztcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2F0ZWdvcnkuaW1hZ2VzID0gdGhpcy5pbWFnZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChtZXRob2QsIHRoaXMuY2F0ZWdvcnkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdzaG9wJywgcGFyYW1zOiB7Y2F0ZWdvcnlfaWQ6ICEhdGhpcy5jYXRlZ29yeSA/IHRoaXMuY2F0ZWdvcnkucGFyZW50X2lkIDogMCB9fSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0RWRpdG9yKHRleHQpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yID0gbmV3IEVkaXRvcih7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCbG9ja3F1b3RlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQnVsbGV0TGlzdCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvZGVCbG9jaygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEhhcmRCcmVhaygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEhlYWRpbmcoeyBsZXZlbHM6IFsxLCAyLCAzXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMaXN0SXRlbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE9yZGVyZWRMaXN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVG9kb0l0ZW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUb2RvTGlzdCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb2xkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29kZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEl0YWxpYygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFN0cmlrZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFVuZGVybGluZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEhpc3RvcnkoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5lZGl0b3IuY29udGVudCA9IHRoaXMuJHByb3BzLmNodW5rLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoeyBnZXRIVE1MIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLmNodW5rLnRleHQgPSBnZXRIVE1MKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0yMCBtZy1sZy1iLTMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwibmF2XCIsIHsgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiYnJlYWRjcnVtYlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm9sXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvc2l0ZVwiLCBjdXN0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSByZWYuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGhyZWYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFfdm0uY2F0ZWdvcnkuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4IFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3J5Lm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQodC+0LfQtNCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1nLWItMCB0eC1zcGFjaW5nLS0xXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgISFfdm0uY2F0ZWdvcnkuaWRcbiAgICAgICAgICAgICAgICAgICAgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LAgXCInICsgX3ZtLmNhdGVnb3J5Lm5hbWUgKyAnXCInXG4gICAgICAgICAgICAgICAgICAgIDogXCLQndC+0LLQsNGPINC60LDRgtC10LPQvtGA0LjRj1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLW5vbmUgZC1tZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcItCh0L7RhdGA0LDQvdC40YLRjFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiSW1hZ2VzVXBsb2FkXCIsIHtcbiAgICAgICAgcmVmOiBcImltZ0xvYWRlclwiLFxuICAgICAgICBhdHRyczogeyBsaW1pdDogXCIxXCIgfSxcbiAgICAgICAgb246IHsgaW1hZ2VzQ2hhbmdlZDogX3ZtLnNldEltYWdlcyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5uYW1lXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jYXRlZ29yeS5uYW1lIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNhdGVnb3J5LCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMubmFtZVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLm5hbWVbMF0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW192bS5fdihcItCSINC60LDRgtC10LPQvtGA0LjQuFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2lkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJuYW1lXCIsIG9wdGlvbnM6IF92bS5jYXRlZ29yaWVzIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcnkucGFyZW50LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY2F0ZWdvcnksIFwicGFyZW50XCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhdGVnb3J5LnBhcmVudFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5jYXRlZ29yeV9pZFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuY2F0ZWdvcnlfaWRbMF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0J7Qv9C40YHQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZWRpdG9yLW1lbnUtYnViYmxlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGVkaXRvcjogX3ZtLmVkaXRvciwgXCJrZWVwLWluLWJvdW5kc1wiOiBfdm0ua2VlcEluQm91bmRzIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbW1hbmRzID0gcmVmLmNvbW1hbmRzXG4gICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgIHZhciBtZW51ID0gcmVmLm1lbnVcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudWJ1YmJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogbWVudS5pc0FjdGl2ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51LmxlZnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4OyBib3R0b206IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudS5ib3R0b20gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4O1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnVidWJibGVfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IGlzQWN0aXZlLmJvbGQoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBjb21tYW5kcy5ib2xkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2ljb25zL3R5cG8vYm9sZC13LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudWJ1YmJsZV9fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogaXNBY3RpdmUuaXRhbGljKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogY29tbWFuZHMuaXRhbGljIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2ljb25zL3R5cG8vaXRhbGljLXcuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51YnViYmxlX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZS5jb2RlKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogY29tbWFuZHMuY29kZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltYWdlcy9pY29ucy90eXBvL2NvZGUtdy5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZWRpdG9yLWNvbnRlbnRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgZWRpdG9yOiBfdm0uZWRpdG9yIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhdGVnb3J5LmNvbnRlbnQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY2F0ZWdvcnksIFwiY29udGVudFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2F0ZWdvcnkuY29udGVudFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLmNvbnRlbnRcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5jb250ZW50WzBdKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbX3ZtLl92KFwiVVJMXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcnkuc2x1ZyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2F0ZWdvcnkuc2x1Z1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5zbHVnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJVUkxcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNhdGVnb3J5LnNsdWcgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY2F0ZWdvcnksIFwic2x1Z1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5zbHVnXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuc2x1Z1swXSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLQotCw0LnRgtC7ICggVGl0bGUgKVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcnkudGl0bGUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhdGVnb3J5LnRpdGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnRpdGxlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCLQotCw0LnRgtC7XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jYXRlZ29yeS50aXRsZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jYXRlZ29yeSwgXCJ0aXRsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy50aXRsZVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuJHN0b3JlLmdldHRlcnMuY2F0ZWdvcnlfc3RvcmVfZXJyb3JzLnRpdGxlWzBdKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCe0L/QuNGB0LDQvdC40LUg0YHRgtGA0LDQvdC40YbRiyAoIERlc2NyaXB0aW9uIClcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhdGVnb3J5LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yeS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9yc1xuICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY2F0ZWdvcnkuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY2F0ZWdvcnksIFwiZGVzY3JpcHRpb25cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yeV9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNhdGVnb3J5X3N0b3JlX2Vycm9ycy5kZXNjcmlwdGlvblswXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I5ZGRjZDgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNiOWRkY2Q4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2I5ZGRjZDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2I5ZGRjZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2I5ZGRjZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjlkZGNkOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYjlkZGNkOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvQ2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjlkZGNkOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=