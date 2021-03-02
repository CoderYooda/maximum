(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Templates"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/templates.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/lib/languages/css.js");
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_lib_languages_vbscript_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/vbscript-html */ "./node_modules/highlight.js/lib/languages/vbscript-html.js");
/* harmony import */ var highlight_js_lib_languages_vbscript_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_vbscript_html__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//




 // import {
//     JavaScriptExample,
//     CSSExample,
//     ExplicitImportExample,
// } from './examples'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"]
  },
  name: "Templates",
  data: function data() {
    return {
      editor: new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
        lineNumbers: true,
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlockHighlight"]({
          languages: {
            javascript: highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2___default.a,
            css: highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_3___default.a,
            html: highlight_js_lib_languages_vbscript_html__WEBPACK_IMPORTED_MODULE_4___default.a
          }
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"]({
          levels: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Italic"]()],
        content: '<pre><code>var i = 21;</code></pre>'
      })
    };
  },
  mounted: function mounted() {
    this.editor.on('update', function (_ref) {
      var getHTML = _ref.getHTML;
      // get new content on update
      console.log(getHTML()); //this.editor.setContent(getHTML());

      console.log(1); //const newContent = getHTML()
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre::before {\n  content: attr(data-language);\n  text-transform: uppercase;\n  display: block;\n  text-align: right;\n  font-weight: bold;\n  font-size: 0.6rem;\n}\npre code .hljs-comment,\npre code .hljs-quote {\n  color: #999999;\n}\npre code .hljs-variable,\npre code .hljs-template-variable,\npre code .hljs-attribute,\npre code .hljs-tag,\npre code .hljs-name,\npre code .hljs-regexp,\npre code .hljs-link,\npre code .hljs-name,\npre code .hljs-selector-id,\npre code .hljs-selector-class {\n  color: #f2777a;\n}\npre code .hljs-number,\npre code .hljs-meta,\npre code .hljs-built_in,\npre code .hljs-builtin-name,\npre code .hljs-literal,\npre code .hljs-type,\npre code .hljs-params {\n  color: #f99157;\n}\npre code .hljs-string,\npre code .hljs-symbol,\npre code .hljs-bullet {\n  color: #99cc99;\n}\npre code .hljs-title,\npre code .hljs-section {\n  color: #ffcc66;\n}\npre code .hljs-keyword,\npre code .hljs-selector-tag {\n  color: #6699cc;\n}\npre code .hljs-emphasis {\n  font-style: italic;\n}\npre code .hljs-strong {\n  font-weight: 700;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./templates.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=template&id=8d42aa32&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/site/templates.vue?vue&type=template&id=8d42aa32& ***!
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
      { staticClass: "editor" },
      [
        _c("editor-content", {
          ref: "edit",
          staticClass: "editor__content",
          attrs: { editor: _vm.editor }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/site/templates.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/site/templates.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_vue_vue_type_template_id_8d42aa32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.vue?vue&type=template&id=8d42aa32& */ "./resources/js/components/pages/site/templates.vue?vue&type=template&id=8d42aa32&");
/* harmony import */ var _templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/site/templates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _templates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _templates_vue_vue_type_template_id_8d42aa32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _templates_vue_vue_type_template_id_8d42aa32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/site/templates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/site/templates.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/site/templates.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./templates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./templates.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/site/templates.vue?vue&type=template&id=8d42aa32&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/site/templates.vue?vue&type=template&id=8d42aa32& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_template_id_8d42aa32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./templates.vue?vue&type=template&id=8d42aa32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/site/templates.vue?vue&type=template&id=8d42aa32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_template_id_8d42aa32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_template_id_8d42aa32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS90ZW1wbGF0ZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvdGVtcGxhdGVzLnZ1ZT80OWJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvdGVtcGxhdGVzLnZ1ZT9kZmE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvdGVtcGxhdGVzLnZ1ZT83YTFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvdGVtcGxhdGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL3RlbXBsYXRlcy52dWU/NGU0NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL3RlbXBsYXRlcy52dWU/NjBhYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL3RlbXBsYXRlcy52dWU/MjNlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFRQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUEsbUJBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEscUJBQ0E7QUFDQTtBQUNBLG9HQURBO0FBRUEsc0ZBRkE7QUFHQTtBQUhBO0FBREEsVUFEQSxFQVFBLGlFQVJBLEVBU0E7QUFBQTtBQUFBLFVBVEEsRUFVQSw0REFWQSxFQVdBLDREQVhBLEVBWUEsOERBWkEsQ0FGQTtBQWdCQTtBQWhCQTtBQURBO0FBb0JBLEdBMUJBO0FBMkJBLFNBM0JBLHFCQTJCQTtBQUNBO0FBQUE7QUFDQTtBQUNBLDZCQUZBLENBR0E7O0FBQ0EscUJBSkEsQ0FLQTtBQUNBLEtBTkE7QUFPQTtBQW5DQSxHOzs7Ozs7Ozs7OztBQ3pCQSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGdCQUFnQixpQ0FBaUMsOEJBQThCLG1CQUFtQixzQkFBc0Isc0JBQXNCLHNCQUFzQixHQUFHLGlEQUFpRCxtQkFBbUIsR0FBRyxxUUFBcVEsbUJBQW1CLEdBQUcsOEtBQThLLG1CQUFtQixHQUFHLHlFQUF5RSxtQkFBbUIsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyx5QkFBeUIscUJBQXFCLEdBQUc7O0FBRTlqQzs7Ozs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywyb0JBQW1YOztBQUV6WSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsK0dBQTREOztBQUVqRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdCQUF3QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDtBQUNjOzs7QUFHdEU7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBcU0sQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBek47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiVGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yXCI+XHJcbiAgICAgICAgICAgIDxlZGl0b3ItY29udGVudCByZWY9XCJlZGl0XCIgY2xhc3M9XCJlZGl0b3JfX2NvbnRlbnRcIiA6ZWRpdG9yPVwiZWRpdG9yXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JDb250ZW50IH0gZnJvbSAndGlwdGFwJ1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBDb2RlQmxvY2tIaWdobGlnaHQsXHJcbiAgICAgICAgSGFyZEJyZWFrLFxyXG4gICAgICAgIEhlYWRpbmcsXHJcbiAgICAgICAgQm9sZCxcclxuICAgICAgICBDb2RlLFxyXG4gICAgICAgIEl0YWxpYyxcclxuICAgIH0gZnJvbSAndGlwdGFwLWV4dGVuc2lvbnMnXHJcbiAgICBpbXBvcnQgamF2YXNjcmlwdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0J1xyXG4gICAgaW1wb3J0IGNzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc3MnXHJcbiAgICBpbXBvcnQgaHRtbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy92YnNjcmlwdC1odG1sJ1xyXG4gICAgLy8gaW1wb3J0IHtcclxuICAgIC8vICAgICBKYXZhU2NyaXB0RXhhbXBsZSxcclxuICAgIC8vICAgICBDU1NFeGFtcGxlLFxyXG4gICAgLy8gICAgIEV4cGxpY2l0SW1wb3J0RXhhbXBsZSxcclxuICAgIC8vIH0gZnJvbSAnLi9leGFtcGxlcydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIEVkaXRvckNvbnRlbnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYW1lIDogXCJUZW1wbGF0ZXNcIixcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBuZXcgRWRpdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2RlQmxvY2tIaWdobGlnaHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgamF2YXNjcmlwdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGFyZEJyZWFrKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBIZWFkaW5nKHsgbGV2ZWxzOiBbMSwgMiwgM10gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb2xkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2RlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBJdGFsaWMoKSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8cHJlPjxjb2RlPnZhciBpID0gMjE7PC9jb2RlPjwvcHJlPicsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRvci5vbigndXBkYXRlJywgKHsgZ2V0SFRNTCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgbmV3IGNvbnRlbnQgb24gdXBkYXRlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRIVE1MKCkpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmVkaXRvci5zZXRDb250ZW50KGdldEhUTUwoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgbmV3Q29udGVudCA9IGdldEhUTUwoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gICAgcHJlIHtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgIC5obGpzLWNvbW1lbnQsXHJcbiAgICAgICAgICAgIC5obGpzLXF1b3RlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5obGpzLXZhcmlhYmxlLFxyXG4gICAgICAgICAgICAuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcclxuICAgICAgICAgICAgLmhsanMtYXR0cmlidXRlLFxyXG4gICAgICAgICAgICAuaGxqcy10YWcsXHJcbiAgICAgICAgICAgIC5obGpzLW5hbWUsXHJcbiAgICAgICAgICAgIC5obGpzLXJlZ2V4cCxcclxuICAgICAgICAgICAgLmhsanMtbGluayxcclxuICAgICAgICAgICAgLmhsanMtbmFtZSxcclxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItaWQsXHJcbiAgICAgICAgICAgIC5obGpzLXNlbGVjdG9yLWNsYXNzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjI3NzdhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5obGpzLW51bWJlcixcclxuICAgICAgICAgICAgLmhsanMtbWV0YSxcclxuICAgICAgICAgICAgLmhsanMtYnVpbHRfaW4sXHJcbiAgICAgICAgICAgIC5obGpzLWJ1aWx0aW4tbmFtZSxcclxuICAgICAgICAgICAgLmhsanMtbGl0ZXJhbCxcclxuICAgICAgICAgICAgLmhsanMtdHlwZSxcclxuICAgICAgICAgICAgLmhsanMtcGFyYW1zIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjk5MTU3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5obGpzLXN0cmluZyxcclxuICAgICAgICAgICAgLmhsanMtc3ltYm9sLFxyXG4gICAgICAgICAgICAuaGxqcy1idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OWNjOTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhsanMtdGl0bGUsXHJcbiAgICAgICAgICAgIC5obGpzLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmNjNjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhsanMta2V5d29yZCxcclxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItdGFnIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY5OWNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5obGpzLWVtcGhhc2lzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGxqcy1zdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInByZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYW5ndWFnZSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbnByZSBjb2RlIC5obGpzLWNvbW1lbnQsXFxucHJlIGNvZGUgLmhsanMtcXVvdGUge1xcbiAgY29sb3I6ICM5OTk5OTk7XFxufVxcbnByZSBjb2RlIC5obGpzLXZhcmlhYmxlLFxcbnByZSBjb2RlIC5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxcbnByZSBjb2RlIC5obGpzLWF0dHJpYnV0ZSxcXG5wcmUgY29kZSAuaGxqcy10YWcsXFxucHJlIGNvZGUgLmhsanMtbmFtZSxcXG5wcmUgY29kZSAuaGxqcy1yZWdleHAsXFxucHJlIGNvZGUgLmhsanMtbGluayxcXG5wcmUgY29kZSAuaGxqcy1uYW1lLFxcbnByZSBjb2RlIC5obGpzLXNlbGVjdG9yLWlkLFxcbnByZSBjb2RlIC5obGpzLXNlbGVjdG9yLWNsYXNzIHtcXG4gIGNvbG9yOiAjZjI3NzdhO1xcbn1cXG5wcmUgY29kZSAuaGxqcy1udW1iZXIsXFxucHJlIGNvZGUgLmhsanMtbWV0YSxcXG5wcmUgY29kZSAuaGxqcy1idWlsdF9pbixcXG5wcmUgY29kZSAuaGxqcy1idWlsdGluLW5hbWUsXFxucHJlIGNvZGUgLmhsanMtbGl0ZXJhbCxcXG5wcmUgY29kZSAuaGxqcy10eXBlLFxcbnByZSBjb2RlIC5obGpzLXBhcmFtcyB7XFxuICBjb2xvcjogI2Y5OTE1NztcXG59XFxucHJlIGNvZGUgLmhsanMtc3RyaW5nLFxcbnByZSBjb2RlIC5obGpzLXN5bWJvbCxcXG5wcmUgY29kZSAuaGxqcy1idWxsZXQge1xcbiAgY29sb3I6ICM5OWNjOTk7XFxufVxcbnByZSBjb2RlIC5obGpzLXRpdGxlLFxcbnByZSBjb2RlIC5obGpzLXNlY3Rpb24ge1xcbiAgY29sb3I6ICNmZmNjNjY7XFxufVxcbnByZSBjb2RlIC5obGpzLWtleXdvcmQsXFxucHJlIGNvZGUgLmhsanMtc2VsZWN0b3ItdGFnIHtcXG4gIGNvbG9yOiAjNjY5OWNjO1xcbn1cXG5wcmUgY29kZSAuaGxqcy1lbXBoYXNpcyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbnByZSBjb2RlIC5obGpzLXN0cm9uZyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVtcGxhdGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImVkaXRvclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZWRpdG9yLWNvbnRlbnRcIiwge1xuICAgICAgICAgIHJlZjogXCJlZGl0XCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWRpdG9yX19jb250ZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHsgZWRpdG9yOiBfdm0uZWRpdG9yIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGVtcGxhdGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZDQyYWEzMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90ZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90ZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RlbXBsYXRlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhkNDJhYTMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhkNDJhYTMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhkNDJhYTMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90ZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThkNDJhYTMyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhkNDJhYTMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL3RlbXBsYXRlcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RlbXBsYXRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVtcGxhdGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RlbXBsYXRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGQ0MmFhMzImXCIiXSwic291cmNlUm9vdCI6IiJ9