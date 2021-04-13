(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Product.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Product.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Product",
  data: function data() {
    var _this = this;

    return {
      images: [],
      keepInBounds: true,
      category: {
        name: 'Корневая директория',
        id: 0
      },
      product: {
        name: '',
        price: 0,
        article: '',
        action_price: 0,
        isAction: false,
        isPublished: true,
        content: '',
        images: null,
        inStock: true,
        title: null,
        description: null,
        slug: this.slug
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
          _this.product.content = getHTML();
        }
      })
    };
  },
  // watch:{
  //     value : () => {
  //         console.log(1)
  //     }
  // },
  // computed : {
  //     slug: function () {
  //         return window.urlRusLat(this.product.name);
  //     }
  // },
  watch: {
    'product.slug': function productSlug(val) {
      if (!this.product.id) {
        this.product.slug = window.urlRusLat(val);
      }
    },
    'product.name': function productName(val) {
      if (!this.product.id) {
        this.product.slug = window.urlRusLat(val);
        this.product.title = val;
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$store.dispatch('get_categories');
    var product = this.$store.getters.getProduct(this.$route.params.product_id);

    if (!product) {
      this.$store.dispatch('get_product', this.$route.params.product_id).then(function (resp) {
        product = resp.data.product;
        var category_id = _this2.$route.query.category || !!product ? product.category_id : 0;

        _this2.editor.setContent(resp.data.product.content);

        _this2.product = product;

        _this2.$refs.imgLoader.setImages(product.images[0]);

        _this2.setCategory(category_id);
      })["catch"](function () {
        var category_id = _this2.$route.query.category;

        _this2.setCategory(category_id);
      });
    } else {
      this.product = product;
      this.editor.setContent(product.content);
      this.$refs.imgLoader.setImages(product.images[0]);
      this.category = this.$store.getters.getCategoryById(product.category_id)[0];
    }
  },
  computed: {
    // selected_category(){
    //     return this.$store.getters.getCategoryById(this.$route.query.category);
    // },
    // product_images(){
    //     return _.pluck(this.images, 'id');
    // },
    categories: function categories() {
      return this.$store.getters.categories;
    }
  },
  methods: {
    setImages: function setImages(data) {
      this.product.images = data.images;
    },
    change: function change(_ref2) {
      var coordinates = _ref2.coordinates,
          canvas = _ref2.canvas;
      console.log(coordinates, canvas);
    },
    setCategory: function setCategory(category_id) {
      var _this3 = this;

      var category = this.$store.getters.getCategoryById(category_id)[0];
      this.category = category;

      if (!category) {
        this.$store.dispatch('get_category', category_id).then(function (resp) {
          category = resp.data.category;
          _this3.category = category;
        });
      }
    },
    save: function save() {
      var _this4 = this;

      this.product.category_id = !!this.category ? this.category.id : 0;
      var method = !!this.product.id ? 'update_product' : 'store_product'; //
      // this.product.images = this.images;

      this.$store.dispatch(method, this.product).then(function () {
        _this4.$router.push({
          name: 'shop',
          params: {
            category_id: !!_this4.category ? _this4.category.id : 0
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Product.vue?vue&type=template&id=b581f16e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Product.vue?vue&type=template&id=b581f16e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                        _vm._s(
                          !!_vm.product.id
                            ? 'Редактирование товара "' + _vm.product.name + '"'
                            : "Создание товара"
                        )
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
                  !!_vm.product.id
                    ? 'Редактирование товара "' + _vm.product.name + '"'
                    : "Новый товар"
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
        _c("div", { staticClass: "col-lg-2 mg-t-10 mg-lg-t-0 br" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "custom-control custom-switch" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.isPublished,
                    expression: "product.isPublished"
                  }
                ],
                staticClass: "custom-control-input",
                attrs: { type: "checkbox", id: "isPublished" },
                domProps: {
                  checked: Array.isArray(_vm.product.isPublished)
                    ? _vm._i(_vm.product.isPublished, null) > -1
                    : _vm.product.isPublished
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.product.isPublished,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.product,
                            "isPublished",
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.product,
                            "isPublished",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.product, "isPublished", $$c)
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "custom-control custom-switch" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.isAction,
                    expression: "product.isAction"
                  }
                ],
                staticClass: "custom-control-input",
                attrs: { type: "checkbox", id: "isAction" },
                domProps: {
                  checked: Array.isArray(_vm.product.isAction)
                    ? _vm._i(_vm.product.isAction, null) > -1
                    : _vm.product.isAction
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.product.isAction,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.product, "isAction", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.product,
                            "isAction",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.product, "isAction", $$c)
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-control-label",
                  attrs: { for: "isAction" }
                },
                [_vm._v(" Акционный товар")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "custom-control custom-switch" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.inStock,
                    expression: "product.inStock"
                  }
                ],
                staticClass: "custom-control-input",
                attrs: { type: "checkbox", id: "inStock" },
                domProps: {
                  checked: Array.isArray(_vm.product.inStock)
                    ? _vm._i(_vm.product.inStock, null) > -1
                    : _vm.product.inStock
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.product.inStock,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(_vm.product, "inStock", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.product,
                            "inStock",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.product, "inStock", $$c)
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-control-label",
                  attrs: { for: "inStock" }
                },
                [_vm._v(" Есть в наличии")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "d-block" }, [_vm._v("Цена")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.product.price,
                  expression: "product.price"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.product_store_errors.price
              },
              attrs: { type: "number" },
              domProps: { value: _vm.product.price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.product, "price", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.product_store_errors.price
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(this.$store.getters.product_store_errors.price[0])
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "d-block" }, [_vm._v("Акционная цена")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.product.action_price,
                  expression: "product.action_price"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.product_store_errors
                  .action_price
              },
              attrs: { type: "number" },
              domProps: { value: _vm.product.action_price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.product, "action_price", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.product_store_errors.action_price
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(
                      this.$store.getters.product_store_errors.action_price[0]
                    )
                  )
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-10" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "d-block" }, [
              _vm._v("Наименование товара")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.product.name,
                  expression: "product.name"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.product_store_errors.name
              },
              attrs: { type: "text", placeholder: "Наименование товара" },
              domProps: { value: _vm.product.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.product, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.product_store_errors.name
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(this.$store.getters.product_store_errors.name[0])
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "d-block" }, [_vm._v("Артикул")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.product.article,
                      expression: "product.article"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": !!this.$store.getters.product_store_errors
                      .article
                  },
                  attrs: { type: "text", placeholder: "Артикул" },
                  domProps: { value: _vm.product.article },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.product, "article", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                !!this.$store.getters.product_store_errors.article
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        _vm._s(
                          this.$store.getters.product_store_errors.article[0]
                        )
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
                  _c("label", { staticClass: "d-block" }, [
                    _vm._v("Категория")
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    class: {
                      "is-invalid": !!this.$store.getters.product_store_errors
                        .category_id
                    },
                    attrs: { label: "name", options: _vm.categories },
                    model: {
                      value: _vm.category,
                      callback: function($$v) {
                        _vm.category = $$v
                      },
                      expression: "category"
                    }
                  }),
                  _vm._v(" "),
                  !!this.$store.getters.product_store_errors.category_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          _vm._s(
                            this.$store.getters.product_store_errors
                              .category_id[0]
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
                _vm._v("Описание товара")
              ]),
              _vm._v(" "),
              _c("editor-menu-bubble", {
                attrs: {
                  editor: _vm.editor,
                  "keep-in-bounds": _vm.keepInBounds
                },
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
              !!this.$store.getters.product_store_errors.content
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      _vm._s(
                        this.$store.getters.product_store_errors.content[0]
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
                  value: _vm.product.title,
                  expression: "product.title"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.product_store_errors.title
              },
              attrs: { type: "text", placeholder: "Тайтл" },
              domProps: { value: _vm.product.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.product, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.product_store_errors.title
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(this.$store.getters.product_store_errors.title[0])
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
                  value: _vm.product.slug,
                  expression: "product.slug"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.product_store_errors.slug
              },
              attrs: { type: "text", placeholder: "URL" },
              domProps: { value: _vm.product.slug },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.product, "slug", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.product_store_errors.slug
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(this.$store.getters.product_store_errors.slug[0])
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
                  value: _vm.product.description,
                  expression: "product.description"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-invalid": !!this.$store.getters.product_store_errors
                  .description
              },
              attrs: { rows: "4" },
              domProps: { value: _vm.product.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.product, "description", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            !!this.$store.getters.product_store_errors.description
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    _vm._s(
                      this.$store.getters.product_store_errors.description[0]
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

/***/ "./resources/js/components/pages/Product.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/Product.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_b581f16e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=b581f16e&scoped=true& */ "./resources/js/components/pages/Product.vue?vue&type=template&id=b581f16e&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_b581f16e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_b581f16e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b581f16e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Product.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pages/Product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Product.vue?vue&type=template&id=b581f16e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/Product.vue?vue&type=template&id=b581f16e&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b581f16e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=b581f16e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Product.vue?vue&type=template&id=b581f16e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b581f16e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b581f16e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvUHJvZHVjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvUHJvZHVjdC52dWU/ODI1YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0LnZ1ZT9lZjFmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL1Byb2R1Y3QudnVlPzQwMDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNElBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0EsOEVBREE7QUFDQSx1RUFEQTtBQUNBO0FBREEsR0FEQTtBQUlBLGlCQUpBO0FBS0EsTUFMQSxrQkFLQTtBQUFBOztBQUNBO0FBQ0EsZ0JBREE7QUFFQSx3QkFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBLE9BSEE7QUFJQTtBQUNBLGdCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLHVCQUpBO0FBS0EsdUJBTEE7QUFNQSx5QkFOQTtBQU9BLG1CQVBBO0FBUUEsb0JBUkE7QUFTQSxxQkFUQTtBQVVBLG1CQVZBO0FBV0EseUJBWEE7QUFZQTtBQVpBLE9BSkE7QUFrQkE7QUFDQSxxQkFDQSxrRUFEQSxFQUVBLGtFQUZBLEVBR0EsaUVBSEEsRUFJQSxpRUFKQSxFQUtBO0FBQUE7QUFBQSxVQUxBLEVBTUEsZ0VBTkEsRUFPQSxtRUFQQSxFQVFBLGdFQVJBLEVB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cGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0yMCBtZy1sZy1iLTMwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYiBicmVhZGNydW1iLXN0eWxlMSBtZy1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2l0ZVwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiID48YSA6aHJlZj1cImhyZWZcIiBAY2xpY2s9XCJuYXZpZ2F0ZVwiPtCj0L/RgNCw0LLQu9C10L3QuNC1INGB0LDQudGC0L7QvDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+e3sgISFwcm9kdWN0LmlkID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwIFwiJyArIHByb2R1Y3QubmFtZSArICdcIicgOiAn0KHQvtC30LTQsNC90LjQtSDRgtC+0LLQsNGA0LAnfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1nLWItMCB0eC1zcGFjaW5nLS0xXCI+e3sgISFwcm9kdWN0LmlkID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwIFwiJyArIHByb2R1Y3QubmFtZSArICdcIicgOiAn0J3QvtCy0YvQuSDRgtC+0LLQsNGAJ319PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlXCIgY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEltYWdlc1VwbG9hZCBsaW1pdD1cIjFcIiByZWY9XCJpbWdMb2FkZXJcIiBAaW1hZ2VzQ2hhbmdlZD1cInNldEltYWdlc1wiPjwvSW1hZ2VzVXBsb2FkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgbWctdC0xMCBtZy1sZy10LTAgYnJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwcm9kdWN0LmlzUHVibGlzaGVkXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwiaXNQdWJsaXNoZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiaXNQdWJsaXNoZWRcIj4g0J7Qv9GD0LHQu9C40LrQvtCy0LDQvTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInByb2R1Y3QuaXNBY3Rpb25cIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJpc0FjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJpc0FjdGlvblwiPiDQkNC60YbQuNC+0L3QvdGL0Lkg0YLQvtCy0LDRgDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInByb2R1Y3QuaW5TdG9ja1wiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImluU3RvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiaW5TdG9ja1wiPiDQldGB0YLRjCDQsiDQvdCw0LvQuNGH0LjQuDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QptC10L3QsDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnByaWNlfVwiIHYtbW9kZWw9XCJwcm9kdWN0LnByaWNlXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy5wcmljZVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMucHJpY2VbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0JDQutGG0LjQvtC90L3QsNGPINGG0LXQvdCwPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuYWN0aW9uX3ByaWNlfVwiIHYtbW9kZWw9XCJwcm9kdWN0LmFjdGlvbl9wcmljZVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuYWN0aW9uX3ByaWNlXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy5hY3Rpb25fcHJpY2VbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMubmFtZX1cIiB2LW1vZGVsPVwicHJvZHVjdC5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMubmFtZVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMubmFtZVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QkNGA0YLQuNC60YPQuzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuYXJ0aWNsZX1cIiB2LW1vZGVsPVwicHJvZHVjdC5hcnRpY2xlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0JDRgNGC0LjQutGD0LtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuYXJ0aWNsZVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuYXJ0aWNsZVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCa0LDRgtC10LPQvtGA0LjRjzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IHYtYmluZDpjbGFzcz1cInsnaXMtaW52YWxpZCcgOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuY2F0ZWdvcnlfaWR9XCIgdi1tb2RlbD1cImNhdGVnb3J5XCIgbGFiZWw9XCJuYW1lXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWVzXCI+PC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuY2F0ZWdvcnlfaWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmNhdGVnb3J5X2lkWzBdIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCe0L/QuNGB0LDQvdC40LUg0YLQvtCy0LDRgNCwPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGVkaXRvci1tZW51LWJ1YmJsZSA6ZWRpdG9yPVwiZWRpdG9yXCIgOmtlZXAtaW4tYm91bmRzPVwia2VlcEluQm91bmRzXCIgdi1zbG90PVwieyBjb21tYW5kcywgaXNBY3RpdmUsIG1lbnUgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudWJ1YmJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogbWVudS5pc0FjdGl2ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJgbGVmdDogJHttZW51LmxlZnR9cHg7IGJvdHRvbTogJHttZW51LmJvdHRvbX1weDtgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZW51YnViYmxlX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FjdGl2ZS5ib2xkKCkgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvbW1hbmRzLmJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3R5cG8vYm9sZC13LnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lbnVidWJibGVfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWN0aXZlLml0YWxpYygpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjb21tYW5kcy5pdGFsaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3R5cG8vaXRhbGljLXcuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudWJ1YmJsZV9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogaXNBY3RpdmUuY29kZSgpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjb21tYW5kcy5jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy90eXBvL2NvZGUtdy5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2VkaXRvci1tZW51LWJ1YmJsZT5cbiAgICAgICAgICAgICAgICAgICAgPGVkaXRvci1jb250ZW50IDplZGl0b3I9XCJlZGl0b3JcIi8+XG5cbjwhLS0gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmNvbnRlbnR9XCIgdi1tb2RlbD1cInByb2R1Y3QuY29udGVudFwiIHJvd3M9XCI0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA+PC90ZXh0YXJlYT4tLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmNvbnRlbnRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmNvbnRlbnRbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QotCw0LnRgtC7ICgg0KLQtdC60YHRgiDQstC60LvQsNC00LrQuCDQsdGA0LDRg9C30LXRgNCwICk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1iaW5kOmNsYXNzPVwieydpcy1pbnZhbGlkJyA6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy50aXRsZX1cIiB2LW1vZGVsPVwicHJvZHVjdC50aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCi0LDQudGC0LtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnRpdGxlXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e3sgdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy50aXRsZVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnNsdWd9XCIgdi1tb2RlbD1cInByb2R1Y3Quc2x1Z1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVSTFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuc2x1Z1wiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPnt7IHRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuc2x1Z1swXSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCe0L/QuNGB0LDQvdC40LUg0YHRgtGA0LDQvdC40YbRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWludmFsaWQnIDogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmRlc2NyaXB0aW9ufVwiIHYtbW9kZWw9XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuZGVzY3JpcHRpb25cIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj57eyB0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmRlc2NyaXB0aW9uWzBdIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IEVkaXRvciwgRWRpdG9yQ29udGVudCwgRWRpdG9yTWVudUJ1YmJsZSAgfSBmcm9tICd0aXB0YXAnXG4gICAgaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tICcuLy4uL3N5c3RlbS9JbWFnZXNVcGxvYWQnXG4gICAgaW1wb3J0IHtcbiAgICAgICAgQmxvY2txdW90ZSxcbiAgICAgICAgQnVsbGV0TGlzdCxcbiAgICAgICAgQ29kZUJsb2NrLFxuICAgICAgICBIYXJkQnJlYWssXG4gICAgICAgIEhlYWRpbmcsXG4gICAgICAgIExpc3RJdGVtLFxuICAgICAgICBPcmRlcmVkTGlzdCxcbiAgICAgICAgVG9kb0l0ZW0sXG4gICAgICAgIFRvZG9MaXN0LFxuICAgICAgICBCb2xkLFxuICAgICAgICBDb2RlLFxuICAgICAgICBJdGFsaWMsXG4gICAgICAgIExpbmssXG4gICAgICAgIFN0cmlrZSxcbiAgICAgICAgVW5kZXJsaW5lLFxuICAgICAgICBIaXN0b3J5LFxuICAgIH0gZnJvbSAndGlwdGFwLWV4dGVuc2lvbnMnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOntcbiAgICAgICAgICAgIEltYWdlc1VwbG9hZCwgRWRpdG9yQ29udGVudCwgRWRpdG9yTWVudUJ1YmJsZVxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBcIlByb2R1Y3RcIixcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzIDogW10sXG4gICAgICAgICAgICAgICAga2VlcEluQm91bmRzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IDoge25hbWU6ICfQmtC+0YDQvdC10LLQsNGPINC00LjRgNC10LrRgtC+0YDQuNGPJywgaWQ6IDB9LFxuICAgICAgICAgICAgICAgIHByb2R1Y3QgOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgOiAwLFxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbl9wcmljZSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aW9uIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXMgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpblN0b2NrIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNsdWcgOiB0aGlzLnNsdWcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3IgOiBuZXcgRWRpdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJsb2NrcXVvdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCdWxsZXRMaXN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29kZUJsb2NrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGFyZEJyZWFrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGVhZGluZyh7IGxldmVsczogWzEsIDIsIDNdIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExpc3RJdGVtKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgT3JkZXJlZExpc3QoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUb2RvSXRlbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRvZG9MaXN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGluaygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2RlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSXRhbGljKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU3RyaWtlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVW5kZXJsaW5lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGlzdG9yeSgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBvbkluaXQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmVkaXRvci5jb250ZW50ID0gdGhpcy4kcHJvcHMuY2h1bmsudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6ICh7IGdldEhUTUwgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LmNvbnRlbnQgPSBnZXRIVE1MKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvLyB3YXRjaDp7XG4gICAgICAgIC8vICAgICB2YWx1ZSA6ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygxKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBjb21wdXRlZCA6IHtcbiAgICAgICAgLy8gICAgIHNsdWc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gd2luZG93LnVybFJ1c0xhdCh0aGlzLnByb2R1Y3QubmFtZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIHdhdGNoIDoge1xuICAgICAgICAgICAgJ3Byb2R1Y3Quc2x1Zyc6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5wcm9kdWN0LmlkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwcm9kdWN0Lm5hbWUnOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucHJvZHVjdC5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Quc2x1ZyA9IHdpbmRvdy51cmxSdXNMYXQodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnRpdGxlID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfY2F0ZWdvcmllcycpO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3QodGhpcy4kcm91dGUucGFyYW1zLnByb2R1Y3RfaWQpO1xuICAgICAgICAgICAgaWYoIXByb2R1Y3Qpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfcHJvZHVjdCcsIHRoaXMuJHJvdXRlLnBhcmFtcy5wcm9kdWN0X2lkKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgPSByZXNwLmRhdGEucHJvZHVjdDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5X2lkID0gdGhpcy4kcm91dGUucXVlcnkuY2F0ZWdvcnkgfHwgISFwcm9kdWN0ID8gcHJvZHVjdC5jYXRlZ29yeV9pZCA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQocmVzcC5kYXRhLnByb2R1Y3QuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuaW1nTG9hZGVyLnNldEltYWdlcyhwcm9kdWN0LmltYWdlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2F0ZWdvcnkoY2F0ZWdvcnlfaWQpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5X2lkID0gdGhpcy4kcm91dGUucXVlcnkuY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2F0ZWdvcnkoY2F0ZWdvcnlfaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQocHJvZHVjdC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmltZ0xvYWRlci5zZXRJbWFnZXMocHJvZHVjdC5pbWFnZXNbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5QnlJZChwcm9kdWN0LmNhdGVnb3J5X2lkKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgLy8gc2VsZWN0ZWRfY2F0ZWdvcnkoKXtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeUJ5SWQodGhpcy4kcm91dGUucXVlcnkuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHByb2R1Y3RfaW1hZ2VzKCl7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIF8ucGx1Y2sodGhpcy5pbWFnZXMsICdpZCcpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcblxuICAgICAgICAgICAgc2V0SW1hZ2VzKGRhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5pbWFnZXMgPSBkYXRhLmltYWdlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2UoeyBjb29yZGluYXRlcywgY2FudmFzIH0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcywgY2FudmFzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRDYXRlZ29yeShjYXRlZ29yeV9pZCl7XG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeUJ5SWQoY2F0ZWdvcnlfaWQpWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcblxuICAgICAgICAgICAgICAgIGlmKCFjYXRlZ29yeSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfY2F0ZWdvcnknLCBjYXRlZ29yeV9pZCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSByZXNwLmRhdGEuY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNhdmUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuY2F0ZWdvcnlfaWQgPSAhIXRoaXMuY2F0ZWdvcnkgPyB0aGlzLmNhdGVnb3J5LmlkIDogMDtcblxuICAgICAgICAgICAgICAgIGxldCBtZXRob2QgPSAhIXRoaXMucHJvZHVjdC5pZCA/ICd1cGRhdGVfcHJvZHVjdCcgOiAnc3RvcmVfcHJvZHVjdCc7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2R1Y3QuaW1hZ2VzID0gdGhpcy5pbWFnZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChtZXRob2QsIHRoaXMucHJvZHVjdCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3Nob3AnLCBwYXJhbXM6IHtjYXRlZ29yeV9pZDogISF0aGlzLmNhdGVnb3J5ID8gdGhpcy5jYXRlZ29yeS5pZCA6IDAgfX0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMjAgbWctbGctYi0zMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcIm5hdlwiLCB7IGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBcImJyZWFkY3J1bWJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJvbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYiBicmVhZGNydW1iLXN0eWxlMSBtZy1iLTEwXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL3NpdGVcIiwgY3VzdG9tOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0L/RgNCw0LLQu9C10L3QuNC1INGB0LDQudGC0L7QvFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICEhX3ZtLnByb2R1Y3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGC0L7QstCw0YDQsCBcIicgKyBfdm0ucHJvZHVjdC5uYW1lICsgJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQodC+0LfQtNCw0L3QuNC1INGC0L7QstCw0YDQsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICEhX3ZtLnByb2R1Y3QuaWRcbiAgICAgICAgICAgICAgICAgICAgPyAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LAgXCInICsgX3ZtLnByb2R1Y3QubmFtZSArICdcIidcbiAgICAgICAgICAgICAgICAgICAgOiBcItCd0L7QstGL0Lkg0YLQvtCy0LDRgFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLW5vbmUgZC1tZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcItCh0L7RhdGA0LDQvdC40YLRjFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiSW1hZ2VzVXBsb2FkXCIsIHtcbiAgICAgICAgcmVmOiBcImltZ0xvYWRlclwiLFxuICAgICAgICBhdHRyczogeyBsaW1pdDogXCIxXCIgfSxcbiAgICAgICAgb246IHsgaW1hZ2VzQ2hhbmdlZDogX3ZtLnNldEltYWdlcyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMiBtZy10LTEwIG1nLWxnLXQtMCBiclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0LmlzUHVibGlzaGVkLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QuaXNQdWJsaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImlzUHVibGlzaGVkXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucHJvZHVjdC5pc1B1Ymxpc2hlZClcbiAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnByb2R1Y3QuaXNQdWJsaXNoZWQsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0ucHJvZHVjdC5pc1B1Ymxpc2hlZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucHJvZHVjdC5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc1B1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc1B1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwiaXNQdWJsaXNoZWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaXNQdWJsaXNoZWRcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiINCe0L/Rg9Cx0LvQuNC60L7QstCw0L1cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0LmlzQWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QuaXNBY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImlzQWN0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucHJvZHVjdC5pc0FjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnByb2R1Y3QuaXNBY3Rpb24sIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0ucHJvZHVjdC5pc0FjdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucHJvZHVjdC5pc0FjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwiaXNBY3Rpb25cIiwgJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNBY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wcm9kdWN0LCBcImlzQWN0aW9uXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlzQWN0aW9uXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiDQkNC60YbQuNC+0L3QvdGL0Lkg0YLQvtCy0LDRgFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2R1Y3QuaW5TdG9jayxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9kdWN0LmluU3RvY2tcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImluU3RvY2tcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5wcm9kdWN0LmluU3RvY2spXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5wcm9kdWN0LmluU3RvY2ssIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0ucHJvZHVjdC5pblN0b2NrXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5wcm9kdWN0LmluU3RvY2ssXG4gICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wcm9kdWN0LCBcImluU3RvY2tcIiwgJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5TdG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwiaW5TdG9ja1wiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpblN0b2NrXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiDQldGB0YLRjCDQsiDQvdCw0LvQuNGH0LjQuFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW192bS5fdihcItCm0LXQvdCwXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZHVjdC5wcmljZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnByaWNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wcm9kdWN0LnByaWNlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwicHJpY2VcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy5wcmljZVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMucHJpY2VbMF0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbX3ZtLl92KFwi0JDQutGG0LjQvtC90L3QsNGPINGG0LXQvdCwXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC5hY3Rpb25fcHJpY2UsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QuYWN0aW9uX3ByaWNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnNcbiAgICAgICAgICAgICAgICAgIC5hY3Rpb25fcHJpY2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnByb2R1Y3QuYWN0aW9uX3ByaWNlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwiYWN0aW9uX3ByaWNlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuYWN0aW9uX3ByaWNlXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy5hY3Rpb25fcHJpY2VbMF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZHVjdC5uYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMubmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZHVjdC5uYW1lIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLm5hbWVcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLm5hbWVbMF0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbX3ZtLl92KFwi0JDRgNGC0LjQutGD0LtcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC5hcnRpY2xlLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZHVjdC5hcnRpY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9yc1xuICAgICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItCQ0YDRgtC40LrRg9C7XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZHVjdC5hcnRpY2xlIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwiYXJ0aWNsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMuYXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmFydGljbGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCa0LDRgtC10LPQvtGA0LjRj1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6ICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2lkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIm5hbWVcIiwgb3B0aW9uczogX3ZtLmNhdGVnb3JpZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yeSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy5jYXRlZ29yeV9pZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9pZFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi0J7Qv9C40YHQsNC90LjQtSDRgtC+0LLQsNGA0LBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZWRpdG9yLW1lbnUtYnViYmxlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZWRpdG9yOiBfdm0uZWRpdG9yLFxuICAgICAgICAgICAgICAgICAgXCJrZWVwLWluLWJvdW5kc1wiOiBfdm0ua2VlcEluQm91bmRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21tYW5kcyA9IHJlZi5jb21tYW5kc1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIHZhciBtZW51ID0gcmVmLm1lbnVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51YnViYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogbWVudS5pc0FjdGl2ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0OiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51LmxlZnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweDsgYm90dG9tOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51LmJvdHRvbSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnVidWJibGVfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZS5ib2xkKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IGNvbW1hbmRzLmJvbGQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltYWdlcy9pY29ucy90eXBvL2JvbGQtdy5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51YnViYmxlX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogaXNBY3RpdmUuaXRhbGljKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IGNvbW1hbmRzLml0YWxpYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2ljb25zL3R5cG8vaXRhbGljLXcuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudWJ1YmJsZV9fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IGlzQWN0aXZlLmNvZGUoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogY29tbWFuZHMuY29kZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2ljb25zL3R5cG8vY29kZS13LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImVkaXRvci1jb250ZW50XCIsIHsgYXR0cnM6IHsgZWRpdG9yOiBfdm0uZWRpdG9yIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy5jb250ZW50XG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCi0LDQudGC0LsgKCDQotC10LrRgdGCINCy0LrQu9Cw0LTQutC4INCx0YDQsNGD0LfQtdGA0LAgKVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC50aXRsZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZHVjdC50aXRsZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnRpdGxlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCLQotCw0LnRgtC7XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wcm9kdWN0LnRpdGxlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwidGl0bGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICEhdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy50aXRsZVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnMudGl0bGVbMF0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtfdm0uX3YoXCJVUkxcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0LnNsdWcsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3Quc2x1Z1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnNsdWdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlVSTFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZHVjdC5zbHVnIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwic2x1Z1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnNsdWdcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLnNsdWdbMF0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0J7Qv9C40YHQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9kdWN0LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiAhIXRoaXMuJHN0b3JlLmdldHRlcnMucHJvZHVjdF9zdG9yZV9lcnJvcnNcbiAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnByb2R1Y3QuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucHJvZHVjdCwgXCJkZXNjcmlwdGlvblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgISF0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2R1Y3Rfc3RvcmVfZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0X3N0b3JlX2Vycm9ycy5kZXNjcmlwdGlvblswXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTgxZjE2ZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImI1ODFmMTZlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjU4MWYxNmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjU4MWYxNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjU4MWYxNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI1ODFmMTZlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I1ODFmMTZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjU4MWYxNmUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9