(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Category~Product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/system/ImagesUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ImagesUpload",
  props: ['value'],
  data: function data() {
    return {
      showModal: false,
      images: [],
      img: null,
      coordinates: null,
      result: null,
      limit: 5 // username: '',
      // password: '',

    };
  },
  mounted: function mounted() {
    this.limit = !!this.$attrs.limit ? this.$attrs.limit : this.limit; //this.images = this.value.images;
    // let getter = 'get_' + this.storage_model + '_images';
    //
    // this.pr = this.$store.getters.getProduct(this.id);
    // return this.$store.getters[getter](this.id);
  },
  computed: {
    stored_images: function stored_images() {}
  },
  methods: {
    uploadFile: function uploadFile() {
      var _this = this;

      var input = this.$refs.file;

      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);

        reader.onload = function (e) {
          _this.img = e.target.result;
          _this.showModal = true;
        };
      } // this.$store.dispatch('store_temp_image', {file : this.$refs.file.files[0]}).then((resp) => {
      //     this.showModal = true;
      //     this.img = this.$store.getters.getTempImage();
      // });

    },
    setImages: function setImages(images) {
      this.images = images;
    },
    cropImage: function cropImage() {
      var _this2 = this;

      this.result = this.$refs.cropper.getResult().canvas.toDataURL();
      this.$store.commit('loading', true);
      this.$store.dispatch('store_image', {
        image: this.result
      }).then(function (resp) {
        _this2.showModal = false;

        _this2.images.push(resp.data.image);

        _this2.$store.commit('loading', false);

        _this2.$emit('imagesChanged', {
          images: _this2.images
        });
      });
    },
    change: function change(_ref) {// this.coordinates = coordinates;

      var coordinates = _ref.coordinates,
          canvas = _ref.canvas;
    },
    ready: function ready() {// console.log(3);
    },
    flip: function flip(x, y) {
      this.$refs.cropper.flip(x, y);
    },
    rotate: function rotate(angle) {
      this.$refs.cropper.rotate(angle);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vertical-buttons {\n    position: absolute;\n    left: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n.square-button {\n    background: rgba(0,0,0,.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 42px;\n    width: 42px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    transition: background .5s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagesUpload.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=template&id=3e96ac1e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/system/ImagesUpload.vue?vue&type=template&id=3e96ac1e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "row row-xs mb-4" },
        [
          _c("input", {
            ref: "file",
            staticStyle: { display: "none" },
            attrs: { type: "file", accept: "image/*" },
            on: { change: _vm.uploadFile }
          }),
          _vm._v(" "),
          _vm._l(_vm.images, function(image) {
            return _c("div", { staticClass: "pointer mb-2" }, [
              _c("div", { staticClass: "card card-file wh-180" }, [
                _c("img", {
                  staticClass: "preview",
                  attrs: { src: image.url, alt: "" }
                })
              ])
            ])
          }),
          _vm._v(" "),
          _vm.images.length < _vm.limit
            ? _c(
                "div",
                {
                  staticClass: "pointer mb-2",
                  on: {
                    click: function($event) {
                      return _vm.$refs.file.click()
                    }
                  }
                },
                [_vm._m(0)]
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "modal" } }, [
        _vm.showModal
          ? _c("div", { staticClass: "modal-mask" }, [
              _c("div", { staticClass: "modal-wrapper" }, [
                _c("div", { staticClass: "modal-container" }, [
                  _c(
                    "div",
                    { staticClass: "modal-header" },
                    [
                      _vm._t("header", [
                        _vm._v(
                          "\n                            Редактор изображений\n                        "
                        )
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "modal-body",
                      staticStyle: { "min-height": "380px" }
                    },
                    [
                      _c("cropper", {
                        ref: "cropper",
                        attrs: {
                          "stencil-props": {
                            aspectRatio: 1 / 1
                          },
                          src: _vm.img
                        },
                        on: { change: _vm.change }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "vertical-buttons" }, [
                        _c(
                          "div",
                          {
                            staticClass: "square-button",
                            attrs: { title: "Flip Horizontal" },
                            on: {
                              click: function($event) {
                                return _vm.flip(true, false)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "/images/icons/flip-horizontal.svg"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "square-button",
                            attrs: { title: "Flip Vertical" },
                            on: {
                              click: function($event) {
                                return _vm.flip(false, true)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: { src: "/images/icons/flip-vertical.svg" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "square-button",
                            attrs: { title: "Rotate Clockwise" },
                            on: {
                              click: function($event) {
                                return _vm.rotate(45)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "/images/icons/rotate-clockwise.svg"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "square-button",
                            attrs: { title: "Rotate Counter-Clockwise" },
                            on: {
                              click: function($event) {
                                return _vm.rotate(-45)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  "/images/icons/rotate-counter-clockwise.svg"
                              }
                            })
                          ]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-footer" },
                    [
                      _vm._t("footer", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm pd-x-15 btn-white btn-uppercase",
                            on: {
                              click: function($event) {
                                return _vm.cropImage()
                              }
                            }
                          },
                          [_vm._v("Сохранить")]
                        )
                      ])
                    ],
                    2
                  )
                ])
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("pre", [_vm._v(_vm._s(_vm.stored_images))])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card card-file wh-180" }, [
      _c("div", { staticClass: "card-file-thumb h-100 tx-danger" }, [
        _c("span", [_vm._v("Загрузить изображение")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/system/ImagesUpload.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/system/ImagesUpload.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagesUpload_vue_vue_type_template_id_3e96ac1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagesUpload.vue?vue&type=template&id=3e96ac1e& */ "./resources/js/components/system/ImagesUpload.vue?vue&type=template&id=3e96ac1e&");
/* harmony import */ var _ImagesUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagesUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/system/ImagesUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImagesUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagesUpload.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImagesUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImagesUpload_vue_vue_type_template_id_3e96ac1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImagesUpload_vue_vue_type_template_id_3e96ac1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/system/ImagesUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/system/ImagesUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/system/ImagesUpload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagesUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagesUpload.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/system/ImagesUpload.vue?vue&type=template&id=3e96ac1e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/system/ImagesUpload.vue?vue&type=template&id=3e96ac1e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_template_id_3e96ac1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagesUpload.vue?vue&type=template&id=3e96ac1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/system/ImagesUpload.vue?vue&type=template&id=3e96ac1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_template_id_3e96ac1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesUpload_vue_vue_type_template_id_3e96ac1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc3lzdGVtL0ltYWdlc1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc3lzdGVtL0ltYWdlc1VwbG9hZC52dWU/OWIwMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9zeXN0ZW0vSW1hZ2VzVXBsb2FkLnZ1ZT80OWQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3N5c3RlbS9JbWFnZXNVcGxvYWQudnVlPzY3YzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc3lzdGVtL0ltYWdlc1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc3lzdGVtL0ltYWdlc1VwbG9hZC52dWU/OGI2OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9zeXN0ZW0vSW1hZ2VzVXBsb2FkLnZ1ZT8wZDkwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3N5c3RlbS9JbWFnZXNVcGxvYWQudnVlPzlmYjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7QUFDQSxzQkFEQTtBQUVBLGtCQUZBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxnQkFGQTtBQUdBLGVBSEE7QUFJQSx1QkFKQTtBQUtBLGtCQUxBO0FBTUEsY0FOQSxDQU9BO0FBQ0E7O0FBUkE7QUFVQSxHQWRBO0FBZUEsU0FmQSxxQkFlQTtBQUNBLHNFQURBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBdEJBO0FBdUJBO0FBQ0EsNkNBRUE7QUFIQSxHQXZCQTtBQTRCQTtBQUNBLGNBREEs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cyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy14cyBtYi00XCI+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIEBjaGFuZ2U9XCJ1cGxvYWRGaWxlXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaW1hZ2UgaW4gaW1hZ2VzXCIgY2xhc3M9XCJwb2ludGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWZpbGUgd2gtMTgwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwcmV2aWV3XCIgOnNyYz1cImltYWdlLnVybFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJpbWFnZXMubGVuZ3RoIDwgbGltaXRcIiBjbGFzcz1cInBvaW50ZXIgbWItMlwiIEBjbGljaz1cIiRyZWZzLmZpbGUuY2xpY2soKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZmlsZSB3aC0xODBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlsZS10aHVtYiBoLTEwMCB0eC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCX0LDQs9GA0YPQt9C40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzaG93TW9kYWxcIiBjbGFzcz1cIm1vZGFsLW1hc2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LXQtNCw0LrRgtC+0YAg0LjQt9C+0LHRgNCw0LbQtdC90LjQuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHN0eWxlPVwibWluLWhlaWdodDogMzgwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNyb3BwZXIgcmVmPVwiY3JvcHBlclwiIDpzdGVuY2lsLXByb3BzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IDEvMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiY2hhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2ZXJ0aWNhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcXVhcmUtYnV0dG9uXCIgdGl0bGU9XCJGbGlwIEhvcml6b250YWxcIiBAY2xpY2s9XCJmbGlwKHRydWUsIGZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL2ZsaXAtaG9yaXpvbnRhbC5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNxdWFyZS1idXR0b25cIiB0aXRsZT1cIkZsaXAgVmVydGljYWxcIiBAY2xpY2s9XCJmbGlwKGZhbHNlLCB0cnVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL2ZsaXAtdmVydGljYWwuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcXVhcmUtYnV0dG9uXCIgdGl0bGU9XCJSb3RhdGUgQ2xvY2t3aXNlXCIgQGNsaWNrPVwicm90YXRlKDQ1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3JvdGF0ZS1jbG9ja3dpc2Uuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcXVhcmUtYnV0dG9uXCIgdGl0bGU9XCJSb3RhdGUgQ291bnRlci1DbG9ja3dpc2VcIiBAY2xpY2s9XCJyb3RhdGUoLTQ1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3JvdGF0ZS1jb3VudGVyLWNsb2Nrd2lzZS5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIgQGNsaWNrPVwiY3JvcEltYWdlKClcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90cmFuc2l0aW9uPlxuICAgICAgICA8cHJlPnt7IHN0b3JlZF9pbWFnZXMgfX08L3ByZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkltYWdlc1VwbG9hZFwiLFxuICAgICAgICBwcm9wczogWyd2YWx1ZSddLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdLFxuICAgICAgICAgICAgICAgIGltZyA6IG51bGwsXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaW1pdDo1LFxuICAgICAgICAgICAgICAgIC8vIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAvLyBwYXNzd29yZDogJycsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLmxpbWl0ID0gISF0aGlzLiRhdHRycy5saW1pdCA/IHRoaXMuJGF0dHJzLmxpbWl0IDogdGhpcy5saW1pdDtcbiAgICAgICAgICAgIC8vdGhpcy5pbWFnZXMgPSB0aGlzLnZhbHVlLmltYWdlcztcbiAgICAgICAgICAgIC8vIGxldCBnZXR0ZXIgPSAnZ2V0XycgKyB0aGlzLnN0b3JhZ2VfbW9kZWwgKyAnX2ltYWdlcyc7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhpcy5wciA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdCh0aGlzLmlkKTtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW2dldHRlcl0odGhpcy5pZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIHN0b3JlZF9pbWFnZXMgOiAoKSA9PiB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdXBsb2FkRmlsZSgpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHRoaXMuJHJlZnMuZmlsZTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltZyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzdG9yZV90ZW1wX2ltYWdlJywge2ZpbGUgOiB0aGlzLiRyZWZzLmZpbGUuZmlsZXNbMF19KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5pbWcgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFRlbXBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEltYWdlcyhpbWFnZXMpe1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyb3BJbWFnZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy4kcmVmcy5jcm9wcGVyLmdldFJlc3VsdCgpLmNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnc3RvcmVfaW1hZ2UnLCB7aW1hZ2UgOiB0aGlzLnJlc3VsdH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChyZXNwLmRhdGEuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ltYWdlc0NoYW5nZWQnLCB7aW1hZ2VzIDogdGhpcy5pbWFnZXN9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2Uoe2Nvb3JkaW5hdGVzLCBjYW52YXN9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlYWR5KCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZsaXAoeCx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5jcm9wcGVyLmZsaXAoeCx5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb3RhdGUoYW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNyb3BwZXIucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgICAudmVydGljYWwtYnV0dG9ucyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gICAgLnNxdWFyZS1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgd2lkdGg6IDQycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNXM7XG4gICAgfVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZlcnRpY2FsLWJ1dHRvbnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5zcXVhcmUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIHdpZHRoOiA0MnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlc1VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZXNVcGxvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlc1VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IHJvdy14cyBtYi00XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgcmVmOiBcImZpbGVcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgYWNjZXB0OiBcImltYWdlLypcIiB9LFxuICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0udXBsb2FkRmlsZSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmltYWdlcywgZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50ZXIgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGNhcmQtZmlsZSB3aC0xODBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpbWFnZS51cmwsIGFsdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaW1hZ2VzLmxlbmd0aCA8IF92bS5saW1pdFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvaW50ZXIgbWItMlwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJlZnMuZmlsZS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX20oMCldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIm1vZGFsXCIgfSB9LCBbXG4gICAgICAgIF92bS5zaG93TW9kYWxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtbWFza1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImhlYWRlclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LXQtNCw0LrRgtC+0YAg0LjQt9C+0LHRgNCw0LbQtdC90LjQuVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1pbi1oZWlnaHRcIjogXCIzODBweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY3JvcHBlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY3JvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGVuY2lsLXByb3BzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogMSAvIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uY2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmVydGljYWwtYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3F1YXJlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkZsaXAgSG9yaXpvbnRhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mbGlwKHRydWUsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2ljb25zL2ZsaXAtaG9yaXpvbnRhbC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcXVhcmUtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiRmxpcCBWZXJ0aWNhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mbGlwKGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2ljb25zL2ZsaXAtdmVydGljYWwuc3ZnXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcXVhcmUtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiUm90YXRlIENsb2Nrd2lzZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yb3RhdGUoNDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvaWNvbnMvcm90YXRlLWNsb2Nrd2lzZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcXVhcmUtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiUm90YXRlIENvdW50ZXItQ2xvY2t3aXNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJvdGF0ZSgtNDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ltYWdlcy9pY29ucy9yb3RhdGUtY291bnRlci1jbG9ja3dpc2Uuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb290ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFwiZm9vdGVyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY3JvcEltYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC+0YXRgNCw0L3QuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicHJlXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zdG9yZWRfaW1hZ2VzKSldKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgY2FyZC1maWxlIHdoLTE4MFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1maWxlLXRodW1iIGgtMTAwIHR4LWRhbmdlclwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQl9Cw0LPRgNGD0LfQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbWFnZXNVcGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlOTZhYzFlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ltYWdlc1VwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ltYWdlc1VwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSW1hZ2VzVXBsb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZTk2YWMxZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZTk2YWMxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZTk2YWMxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW1hZ2VzVXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTk2YWMxZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZTk2YWMxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc3lzdGVtL0ltYWdlc1VwbG9hZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlc1VwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VzVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlc1VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZXNVcGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlOTZhYzFlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==