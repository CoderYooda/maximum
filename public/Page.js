(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modules/Module.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modules/Module.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_tag_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/tag_parser */ "./resources/js/components/mixins/tag_parser.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Benefits",
  mixins: [_mixins_tag_parser__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['module'],
  data: function data() {
    return {
      data: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.$props.module['images'].length) {
      this.tags.forEach(function (item) {
        console.log(item);
        var type = item.split('|');
        var params = type[2];

        if (type[0] === 'image') {
          var image_params = JSON.parse(params);

          _this.$props.module['images'].push({
            id: 0,
            height: image_params.height,
            width: image_params.width,
            image: {
              id: 0
            },
            image_id: null
          });
        }
      });
    }

    if (!this.$props.module['texts'].length) {
      this.tags.forEach(function (item) {
        var type = item.split('|');

        if (type[0] === 'text') {
          _this.$props.module['texts'].push({
            text: ""
          });
        }
      });
    }

    this.tags.forEach(function (item) {
      var chunk = item.split('|');

      var ch = _this.$props.module[chunk[0] + 's'][parseInt(chunk[1]) - 1];

      var instance = new window[chunk[0]]({
        store: _this.$store,
        parent: _this,
        propsData: {
          chunk: ch
        }
      });

      _this.$children.push(instance);

      instance.$mount(_this.$el.querySelector('#chunk_' + chunk[0] + '_' + chunk[1]));
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/Page.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../modules/Module */ "./resources/js/components/modules/Module.vue");
/* harmony import */ var _public_templates_maximum_assets_css_style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /public/templates/maximum/assets/css/style.module.scss */ "./public/templates/maximum/assets/css/style.module.scss");
/* harmony import */ var _public_templates_maximum_assets_css_style_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_templates_maximum_assets_css_style_module_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Page",
  components: {
    Module: _modules_Module__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      page: {
        name: 'Новая страница',
        isPublished: true,
        modules: []
      },
      page_id: null,
      text: '2',
      modules_show: false
    };
  },
  watch: {
    'page.slug': function pageSlug(val) {
      if (!this.page.id && this.page.id !== 0) {
        this.page.slug = window.urlRusLat(val);
      }
    },
    'page.name': function pageName(val) {
      if (!this.page.id && this.page.id !== 0) {
        this.page.slug = window.urlRusLat(val);
        this.page.title = val;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('get_modules', this.page_id);
    this.page_id = !!this.$route.params.id ? parseInt(this.$route.params.id) : null;

    if (this.page_id) {
      this.$store.dispatch('get_page', this.page_id).then(function (resp) {
        // console.log(this.store.getters.page(this.page_id).title);
        // this.$emit('titleSet', this.$store.getters.page(this.page_id).title);
        _this.page = _this.$store.getters.page(_this.page_id); // let t = x.includes(“html”)
      })["catch"](function () {});
    } // console.log(this.$store.getters.get_module_chunk(1, 1, 'text', 1));

  },
  methods: {
    appendModule: function appendModule(module) {
      var m = {
        template: module,
        module_template_id: module.id,
        images: [],
        texts: []
      };
      this.page.modules.push(m);
    },
    save: function save() {
      var _this2 = this;

      //this.product.category_id = !!this.category ? this.category.id : 0;
      var method = !!this.page.id ? 'update_page' : 'store_page'; //
      // this.product.images = this.images;

      this.$store.dispatch(method, this.page).then(function () {
        _this2.$router.push({
          name: 'pages'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/templates/maximum/assets/css/style.module.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./public/templates/maximum/assets/css/style.module.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"MeriBold\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Merriweather-Bold.ttf */ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf")) + ");\n}\n.template {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 16px;\n  background: #F5F5F5;\n}\n.template h2 {\n  font-family: \"MeriBold\";\n  font-size: 56px;\n}\n.template p {\n  padding: 0;\n  margin: 0;\n}\n.template .row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.template .container {\n  max-width: 1340px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (min-width: 992px) {\n  .template .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .template .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .template .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .template .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .template .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .template .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .template .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .template .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .template .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .template .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .template .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .template .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.template .w-100 {\n  width: 100%;\n}\n.template .wb-padding {\n  padding: 80px 114px;\n}\n.template .benefits {\n  position: relative;\n}\n.template .benefits h2 {\n  height: 138px;\n  line-height: 70px;\n  margin-bottom: -10px;\n  padding-left: 114px;\n}\n.template .benefits .ico_img {\n  width: 72px;\n  height: 72px;\n}\n.template .benefits .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits h2 {\n  display: block;\n}\n.template .benefits .decor_img {\n  position: absolute;\n  top: 6px;\n  right: -103px;\n}\n.template .benefits .about_block p {\n  margin-top: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add_module[data-v-90900b1e] {\n  border: 4px dashed #eeeeee;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  color: #c7c3c3;\n  line-height: 100px;\n}\n.container[data-v-90900b1e] {\n  width: 200px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modules/Module.vue?vue&type=template&id=03e49b1f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modules/Module.vue?vue&type=template&id=03e49b1f&scoped=true& ***!
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
  return _c("div", {
    staticClass: "module",
    domProps: { innerHTML: _vm._s(_vm.parse(_vm.module)) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=template&id=90900b1e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/Page.vue?vue&type=template&id=90900b1e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mr-3" }, [
    _c("div", [
      _c(
        "div",
        {
          staticClass:
            "d-sm-flex align-items-center justify-content-between mg-b-10"
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
              _vm._v(_vm._s(_vm.page.name))
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
      _c("div", [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tab-content pd-y-20", attrs: { id: "myTabContent" } },
          [
            _c(
              "div",
              {
                staticClass: "tab-pane fade show active",
                attrs: {
                  id: "home",
                  role: "tabpanel",
                  "aria-labelledby": "home-tab"
                }
              },
              [
                _c("div", { staticClass: "template" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _vm._l(_vm.page.modules, function(module) {
                          return _c(
                            "div",
                            [_c("Module", { attrs: { module: module } })],
                            1
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "add_module pointer user-select-none",
                            on: {
                              click: function($event) {
                                _vm.modules_show = !_vm.modules_show
                              }
                            }
                          },
                          [_vm._v(" Добавить модуль")]
                        ),
                        _vm._v(" "),
                        _vm.modules_show
                          ? _c(
                              "div",
                              _vm._l(_vm.$store.getters.modules, function(
                                module
                              ) {
                                return _c("div", [
                                  _c(
                                    "div",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.appendModule(module)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(module.name))]
                                  )
                                ])
                              }),
                              0
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                attrs: {
                  id: "profile",
                  role: "tabpanel",
                  "aria-labelledby": "profile-tab"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-2 mg-t-10 mg-lg-t-0 br" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-switch" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.page.isPublished,
                                expression: "page.isPublished"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "checkbox", id: "isPublished" },
                            domProps: {
                              checked: Array.isArray(_vm.page.isPublished)
                                ? _vm._i(_vm.page.isPublished, null) > -1
                                : _vm.page.isPublished
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.page.isPublished,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.page,
                                        "isPublished",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.page,
                                        "isPublished",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.page, "isPublished", $$c)
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
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-10" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "d-block" }, [
                        _vm._v("Текст меню")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.page.menu,
                            expression: "page.menu"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Наименование товара"
                        },
                        domProps: { value: _vm.page.menu },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.page, "menu", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-10" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "d-block" }, [
                        _vm._v("Название мтраницы")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.page.name,
                            expression: "page.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Название мтраницы"
                        },
                        domProps: { value: _vm.page.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.page, "name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                attrs: {
                  id: "seo",
                  role: "tabpanel",
                  "aria-labelledby": "contact-tab"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "d-block" }, [
                        _vm._v("SEO заголовок")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.page.title,
                            expression: "page.title"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "SEO заголовок" },
                        domProps: { value: _vm.page.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.page, "title", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "d-block" }, [
                        _vm._v("SEO описание")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.page.description,
                            expression: "page.description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "SEO описание" },
                        domProps: { value: _vm.page.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.page,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "d-block" }, [
                        _vm._v("url страницы")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.page.slug,
                            expression: "page.slug"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "url страницы" },
                        domProps: { value: _vm.page.slug },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.page, "slug", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]
            )
          ]
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
    return _c(
      "ul",
      { staticClass: "nav nav-line", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "home-tab",
                "data-toggle": "tab",
                href: "#home",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("Визуальный редактор")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "profile-tab",
                "data-toggle": "tab",
                href: "#profile",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Profile")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "contact-tab",
                "data-toggle": "tab",
                href: "#seo",
                role: "tab",
                "aria-controls": "contact",
                "aria-selected": "false"
              }
            },
            [_vm._v("SEO")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./public/templates/maximum/assets/css/style.module.scss":
/*!***************************************************************!*\
  !*** ./public/templates/maximum/assets/css/style.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./style.module.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/templates/maximum/assets/css/style.module.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf":
/*!*********************************************************************!*\
  !*** ./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Merriweather-Bold.ttf?9ccb885c9cf8e503d557f15e0b2cbf24";

/***/ }),

/***/ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf":
/*!*******************************************************************!*\
  !*** ./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Montserrat-Bold.ttf?ade91f473255991f410f61857696434b";

/***/ }),

/***/ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf":
/*!*********************************************************************!*\
  !*** ./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Montserrat-Medium.ttf?c8b6e083af3f94009801989c3739425e";

/***/ }),

/***/ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf":
/*!**********************************************************************!*\
  !*** ./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Montserrat-Regular.ttf?ee6539921d713482b8ccd4d0d23961bb";

/***/ }),

/***/ "./resources/js/components/mixins/tag_parser.js":
/*!******************************************************!*\
  !*** ./resources/js/components/mixins/tag_parser.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tags: []
    };
  },
  methods: {
    parse: function parse(module) {
      var html = module.template.html;
      var tags = [];

      for (var i = 0; i < html.length; i++) {
        if (html[i] === "[" && html[i + 1] === "[") {
          var tag_index = i + 2;
          var tag = '';

          while (html[tag_index] !== ']') {
            tag += html[tag_index];
            tag_index++;
          }

          tags.push(tag);
        }
      }

      tags.forEach(function (tag) {
        var tag_splited = tag.split('|');
        html = html.replace('[[' + tag + ']]', '<div id="chunk_' + tag_splited[0] + '_' + tag_splited[1] + '"></div>');
      });
      this.tags = tags;
      return html;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/modules/Module.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/modules/Module.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Module_vue_vue_type_template_id_03e49b1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module.vue?vue&type=template&id=03e49b1f&scoped=true& */ "./resources/js/components/modules/Module.vue?vue&type=template&id=03e49b1f&scoped=true&");
/* harmony import */ var _Module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module.vue?vue&type=script&lang=js& */ "./resources/js/components/modules/Module.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Module_vue_vue_type_template_id_03e49b1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Module_vue_vue_type_template_id_03e49b1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03e49b1f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modules/Module.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modules/Module.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/modules/Module.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Module.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modules/Module.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modules/Module.vue?vue&type=template&id=03e49b1f&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/modules/Module.vue?vue&type=template&id=03e49b1f&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Module_vue_vue_type_template_id_03e49b1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Module.vue?vue&type=template&id=03e49b1f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modules/Module.vue?vue&type=template&id=03e49b1f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Module_vue_vue_type_template_id_03e49b1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Module_vue_vue_type_template_id_03e49b1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/site/Page.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pages/site/Page.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_vue_vue_type_template_id_90900b1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.vue?vue&type=template&id=90900b1e&scoped=true& */ "./resources/js/components/pages/site/Page.vue?vue&type=template&id=90900b1e&scoped=true&");
/* harmony import */ var _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/site/Page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Page_vue_vue_type_style_index_0_id_90900b1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss& */ "./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page_vue_vue_type_template_id_90900b1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Page_vue_vue_type_template_id_90900b1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "90900b1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/site/Page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/site/Page.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/site/Page.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_id_90900b1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=style&index=0&id=90900b1e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_id_90900b1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_id_90900b1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_id_90900b1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_id_90900b1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/site/Page.vue?vue&type=template&id=90900b1e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Page.vue?vue&type=template&id=90900b1e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_90900b1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Page.vue?vue&type=template&id=90900b1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/Page.vue?vue&type=template&id=90900b1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_90900b1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_90900b1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/NzgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzYzNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzI0OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT9mMzYzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzP2MxMjgiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9taXhpbnMvdGFnX3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzg2MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzNiMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzIxNGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT8zNDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/YmVlNCJdLCJuYW1lcyI6WyJkYXRhIiwidGFncyIsIm1ldGhvZHMiLCJwYXJzZSIsIm1vZHVsZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsImkiLCJsZW5ndGgiLCJ0YWdfaW5kZXgiLCJ0YWciLCJwdXNoIiwiZm9yRWFjaCIsInRhZ19zcGxpdGVkIiwic3BsaXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsc0VBRkE7QUFHQSxtQkFIQTtBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBREE7QUFJQSxHQVRBO0FBVUEsU0FWQSxxQkFVQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQSw2Q0FDQTtBQUNBLGlCQURBO0FBRUEsdUNBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBQ0E7QUFEQSxhQUpBO0FBT0E7QUFQQSxXQURBO0FBV0E7QUFDQSxPQWxC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O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUN2QztBQUNMO0FBQ3NDOzs7QUFHekY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibW9kdWxlXCIgdi1odG1sPVwicGFyc2UobW9kdWxlKVwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdGFnX3BhcnNlciBmcm9tICcuLi9taXhpbnMvdGFnX3BhcnNlcidcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiQmVuZWZpdHNcIixcbiAgICAgICAgbWl4aW5zOiBbdGFnX3BhcnNlcl0sXG4gICAgICAgIHByb3BzOiBbJ21vZHVsZSddLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhIDoge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ2ltYWdlcyddLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdHlwZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IGltYWdlX3BhcmFtcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ3RleHRzJ10ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ3RleHQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsndGV4dHMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBpdGVtLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2ggPSB0aGlzLiRwcm9wcy5tb2R1bGVbY2h1bmtbMF0gKyAncyddW3BhcnNlSW50KGNodW5rWzFdKSAtIDFdO1xuXG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IHdpbmRvd1tjaHVua1swXV0oe1xuICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy4kc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNEYXRhOiB7IGNodW5rOiBjaCB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kY2hpbGRyZW4ucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJyNjaHVua18nICsgY2h1bmtbMF0gKyAnXycgKyBjaHVua1sxXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1yLTNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2l0ZVwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIiA+PGEgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwibmF2aWdhdGVcIj7Qo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0Lw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+SGVscGRlc2sgTWFuYWdlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWctYi0wIHR4LXNwYWNpbmctLTFcIj57eyBwYWdlLm5hbWUgfX08L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVcIiBjbGFzcz1cImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZVwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtbGluZVwiIGlkPVwibXlUYWJcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBpZD1cImhvbWUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2hvbWVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImhvbWVcIiBhcmlhLXNlbGVjdGVkPVwidHJ1ZVwiPtCS0LjQt9GD0LDQu9GM0L3Ri9C5INGA0LXQtNCw0LrRgtC+0YA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJwcm9maWxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNwcm9maWxlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwcm9maWxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+UHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cImNvbnRhY3QtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3Nlb1wiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiY29udGFjdFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlNFTzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBwZC15LTIwXCIgaWQ9XCJteVRhYkNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImhvbWVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJob21lLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwibW9kdWxlIGluIHBhZ2UubW9kdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kdWxlIHYtYmluZDptb2R1bGU9XCJtb2R1bGVcIj48L01vZHVsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJtb2R1bGVzX3Nob3cgPSAhbW9kdWxlc19zaG93XCIgY2xhc3M9XCJhZGRfbW9kdWxlIHBvaW50ZXIgdXNlci1zZWxlY3Qtbm9uZVwiPiDQlNC+0LHQsNCy0LjRgtGMINC80L7QtNGD0LvRjDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9kdWxlc19zaG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIm1vZHVsZSBpbiAkc3RvcmUuZ2V0dGVycy5tb2R1bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYXBwZW5kTW9kdWxlKG1vZHVsZSlcIj57eyBtb2R1bGUubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwicHJvZmlsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInByb2ZpbGUtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0yIG1nLXQtMTAgbWctbGctdC0wIGJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5pc1B1Ymxpc2hlZFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImlzUHVibGlzaGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJpc1B1Ymxpc2hlZFwiPiDQntC/0YPQsdC70LjQutC+0LLQsNC9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0KLQtdC60YHRgiDQvNC10L3RjjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UubWVudVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRi1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInNlb1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhY3QtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlNFTyDQt9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLnRpdGxlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU0VPINC30LDQs9C+0LvQvtCy0L7QulwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5TRU8g0L7Qv9C40YHQsNC90LjQtTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UuZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj51cmwg0YHRgtGA0LDQvdC40YbRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2Uuc2x1Z1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cInVybCDRgdGC0YDQsNC90LjRhtGLXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE1vZHVsZSBmcm9tICcuLy4uLy4uL21vZHVsZXMvTW9kdWxlJztcbiAgICBpbXBvcnQgc3R5bGVzIGZyb20gJy9wdWJsaWMvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2Nzcy9zdHlsZS5tb2R1bGUuc2Nzcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlBhZ2VcIixcbiAgICAgICAgY29tcG9uZW50czp7XG4gICAgICAgICAgICBNb2R1bGVcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6ICfQndC+0LLQsNGPINGB0YLRgNCw0L3QuNGG0LAnLFxuICAgICAgICAgICAgICAgICAgICBpc1B1Ymxpc2hlZCA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXMgOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnZV9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgdGV4dDogJzInLFxuICAgICAgICAgICAgICAgIG1vZHVsZXNfc2hvdyA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2ggOiB7XG4gICAgICAgICAgICAncGFnZS5zbHVnJzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBhZ2UuaWQgJiYgdGhpcy5wYWdlLmlkICE9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYWdlLm5hbWUnOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGFnZS5pZCAmJiB0aGlzLnBhZ2UuaWQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS50aXRsZSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X21vZHVsZXMnLCB0aGlzLnBhZ2VfaWQpO1xuICAgICAgICAgICAgdGhpcy5wYWdlX2lkID0gISF0aGlzLiRyb3V0ZS5wYXJhbXMuaWQgPyBwYXJzZUludCh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIDogbnVsbDtcbiAgICAgICAgICAgIGlmKHRoaXMucGFnZV9pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9wYWdlJywgdGhpcy5wYWdlX2lkKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuZ2V0dGVycy5wYWdlKHRoaXMucGFnZV9pZCkudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRlbWl0KCd0aXRsZVNldCcsIHRoaXMuJHN0b3JlLmdldHRlcnMucGFnZSh0aGlzLnBhZ2VfaWQpLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5wYWdlKHRoaXMucGFnZV9pZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0ID0geC5pbmNsdWRlcyjigJxodG1s4oCdKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0X21vZHVsZV9jaHVuaygxLCAxLCAndGV4dCcsIDEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYXBwZW5kTW9kdWxlKG1vZHVsZSl7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlIDogbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVfdGVtcGxhdGVfaWQgOiBtb2R1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0cyA6IFtdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMucHVzaChtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlKCl7XG4gICAgICAgICAgICAgICAgLy90aGlzLnByb2R1Y3QuY2F0ZWdvcnlfaWQgPSAhIXRoaXMuY2F0ZWdvcnkgPyB0aGlzLmNhdGVnb3J5LmlkIDogMDtcblxuICAgICAgICAgICAgICAgIGxldCBtZXRob2QgPSAhIXRoaXMucGFnZS5pZCA/ICd1cGRhdGVfcGFnZScgOiAnc3RvcmVfcGFnZSc7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2R1Y3QuaW1hZ2VzID0gdGhpcy5pbWFnZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChtZXRob2QsIHRoaXMucGFnZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3BhZ2VzJ30pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAuYWRkX21vZHVsZXtcbiAgICAgICAgYm9yZGVyOiA0cHggZGFzaGVkIHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2M3YzNjMztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxuPC9zdHlsZT5cbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTWVycml3ZWF0aGVyLUJvbGQudHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LU1lZGl1bS50dGZcIikpICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC50dGZcIikpICsgXCIpO1xcbn1cXG4udGVtcGxhdGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbn1cXG4udGVtcGxhdGUgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDU2cHg7XFxufVxcbi50ZW1wbGF0ZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi50ZW1wbGF0ZSAucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEzNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC50ZW1wbGF0ZSAuY29sLWxnLTEge1xcbiAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMyU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy0yIHtcXG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy0zIHtcXG4gICAgZmxleDogMCAwIDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy00IHtcXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy01IHtcXG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy02IHtcXG4gICAgZmxleDogMCAwIDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy03IHtcXG4gICAgZmxleDogMCAwIDU4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy04IHtcXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy05IHtcXG4gICAgZmxleDogMCAwIDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuICAudGVtcGxhdGUgLmNvbC1sZy0xMCB7XFxuICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMlO1xcbiAgfVxcbiAgLnRlbXBsYXRlIC5jb2wtbGctMTEge1xcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTtcXG4gIH1cXG4gIC50ZW1wbGF0ZSAuY29sLWxnLTEyIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLnRlbXBsYXRlIC53LTEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC53Yi1wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDgwcHggMTE0cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIGgyIHtcXG4gIGhlaWdodDogMTM4cHg7XFxuICBsaW5lLWhlaWdodDogNzBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMTRweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuaWNvX2ltZyB7XFxuICB3aWR0aDogNzJweDtcXG4gIGhlaWdodDogNzJweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuaWNvX2ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLndoaXRlX2Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmRlY29yX2ltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiAtMTAzcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmFib3V0X2Jsb2NrIHAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWRkX21vZHVsZVtkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGJvcmRlcjogNHB4IGRhc2hlZCAjZWVlZWVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2M3YzNjMztcXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcXG59XFxuLmNvbnRhaW5lcltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZHVsZVwiLFxuICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wYXJzZShfdm0ubW9kdWxlKSkgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0zXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0xMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcIm5hdlwiLCB7IGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBcImJyZWFkY3J1bWJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJvbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYiBicmVhZGNydW1iLXN0eWxlMSBtZy1iLTEwXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL3NpdGVcIiwgY3VzdG9tOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0L/RgNCw0LLQu9C10L3QuNC1INGB0LDQudGC0L7QvFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJIZWxwZGVzayBNYW5hZ2VtZW50XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWctYi0wIHR4LXNwYWNpbmctLTFcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhZ2UubmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLW5vbmUgZC1tZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcItCh0L7RhdGA0LDQvdC40YLRjFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnQgcGQteS0yMFwiLCBhdHRyczogeyBpZDogXCJteVRhYkNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiaG9tZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGVtcGxhdGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYWdlLm1vZHVsZXMsIGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJNb2R1bGVcIiwgeyBhdHRyczogeyBtb2R1bGU6IG1vZHVsZSB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kdWxlc19zaG93ID0gIV92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70YxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLiRzdG9yZS5nZXR0ZXJzLm1vZHVsZXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFwcGVuZE1vZHVsZShtb2R1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobW9kdWxlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcInByb2ZpbGUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTIgbWctdC0xMCBtZy1sZy10LTAgYnJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLmlzUHVibGlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJpc1B1Ymxpc2hlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnBhZ2UuaXNQdWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5wYWdlLmlzUHVibGlzaGVkLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBhZ2UuaXNQdWJsaXNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnBhZ2UuaXNQdWJsaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNQdWJsaXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNQdWJsaXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJpc1B1Ymxpc2hlZFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpc1B1Ymxpc2hlZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg0J7Qv9GD0LHQu9C40LrQvtCy0LDQvVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQotC10LrRgdGCINC80LXQvdGOXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UubWVudSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UubWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UubWVudSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcIm1lbnVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtSDQvNGC0YDQsNC90LjRhtGLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LfQstCw0L3QuNC1INC80YLRgNCw0L3QuNGG0YtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwic2VvXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImNvbnRhY3QtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNFTyDQt9Cw0LPQvtC70L7QstC+0LpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLnRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwidGl0bGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJ1cmwg0YHRgtGA0LDQvdC40YbRi1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLnNsdWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwidXJsINGB0YLRgNCw0L3QuNGG0YtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLnNsdWcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJzbHVnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi1saW5lXCIsIGF0dHJzOiB7IGlkOiBcIm15VGFiXCIsIHJvbGU6IFwidGFibGlzdFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImhvbWUtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI2hvbWVcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQktC40LfRg9Cw0LvRjNC90YvQuSDRgNC10LTQsNC60YLQvtGAXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcInByb2ZpbGUtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI3Byb2ZpbGVcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcInByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUHJvZmlsZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJjb250YWN0LXRhYlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNzZW9cIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImNvbnRhY3RcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiU0VPXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGY/OWNjYjg4NWM5Y2Y4ZTUwM2Q1NTdmMTVlMGIyY2JmMjRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC50dGY/YWRlOTFmNDczMjU1OTkxZjQxMGY2MTg1NzY5NjQzNGJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtTWVkaXVtLnR0Zj9jOGI2ZTA4M2FmM2Y5NDAwOTgwMTk4OWMzNzM5NDI1ZVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0Zj9lZTY1Mzk5MjFkNzEzNDgyYjhjY2Q0ZDBkMjM5NjFiYlwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBwYXJzZShtb2R1bGUpe1xuICAgICAgICAgICAgbGV0IGh0bWwgPSBtb2R1bGUudGVtcGxhdGUuaHRtbDtcbiAgICAgICAgICAgIGxldCB0YWdzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGh0bWxbaV0gPT09IFwiW1wiICYmIGh0bWxbaSsxXSA9PT0gXCJbXCIpe1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdfaW5kZXggPSBpKzI7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGh0bWxbdGFnX2luZGV4XSAhPT0gJ10nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyArPSBodG1sW3RhZ19pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdfaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWdzLnB1c2godGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhZ19zcGxpdGVkID0gdGFnLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgnW1snICsgdGFnICsgJ11dJywgJzxkaXYgaWQ9XCJjaHVua18nICsgdGFnX3NwbGl0ZWRbMF0gKyAnXycgKyB0YWdfc3BsaXRlZFsxXSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50YWdzID0gdGFncztcbiAgICAgICAgICAgIHJldHVybiBodG1sXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNlNDliMWYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDNlNDliMWZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwM2U0OWIxZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwM2U0OWIxZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwM2U0OWIxZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwM2U0OWIxZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MDkwMGIxZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzkwOTAwYjFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzkwOTAwYjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzkwOTAwYjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MDkwMGIxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9