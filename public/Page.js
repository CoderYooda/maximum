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
  name: "Module",
  mixins: [_mixins_tag_parser__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['module'],
  data: function data() {
    return {
      data: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mount();
    this.$on('fresh', function () {
      _this.mount();
    });
  },
  methods: {
    setModule: function setModule(m) {
      this.$props.module = m;
    },
    mount: function mount() {
      var _this2 = this;

      console.log(this.$props.module); // if(!this.$props.module['images'].length){
      //     this.tags.forEach((item) => {
      //         let type = item.split('|');
      //         let params = type[2];
      //         if(type[0] === 'image'){
      //             let image_params = JSON.parse(params);
      //             this.$props.module['images'].push(
      //                 {
      //                     id : 0,
      //                     height : image_params.height,
      //                     width : image_params.width,
      //                     image : {
      //                         id : 0
      //                     },
      //                     image_id : null,
      //                 }
      //             );
      //         }
      //     });
      // }

      this.tags.forEach(function (item) {
        var type = item.split('|');
        var params = type[2];

        if (type[0] === 'link') {
          if (!_this2.$props.module['links'][parseInt(type[1]) - 1]) {
            _this2.$props.module['links'].push({
              text: "Ссылка",
              link: "#"
            });
          }
        }

        if (type[0] === 'text') {
          if (!_this2.$props.module['texts'][parseInt(type[1]) - 1]) {
            _this2.$props.module['texts'].push({
              text: "Текст"
            });
          }
        }

        if (type[0] === 'background') {
          var image_params = JSON.parse(params);

          if (!_this2.$props.module['backgrounds'][parseInt(type[1]) - 1]) {
            _this2.$props.module['backgrounds'].push({
              id: 0,
              height: image_params.height,
              width: image_params.width,
              image: {
                id: 0,
                url: '/images/noimage.jpg'
              },
              image_id: null
            });
          }
        }

        if (type[0] === 'image') {
          var _image_params = JSON.parse(params);

          if (!_this2.$props.module['images'][parseInt(type[1]) - 1]) {
            _this2.$props.module['images'].push({
              id: 0,
              height: _image_params.height,
              width: _image_params.width,
              image: {
                id: 0
              },
              image_id: null
            });
          }
        }
      }); // if(!this.$props.module['backgrounds'].length){
      //     this.tags.forEach((item) => {
      //         let type = item.split('|');
      //         let params = type[2];
      //         if(type[0] === 'background'){
      //             let image_params = JSON.parse(params);
      //             this.$props.module['backgrounds'].push(
      //                 {
      //                     id : 0,
      //                     height : image_params.height,
      //                     width : image_params.width,
      //                     image : {
      //                         id : 0,
      //                         url : '/images/noimage.jpg',
      //                     },
      //                     image_id : null,
      //                 }
      //             );
      //         }
      //     });
      // }

      this.tags.forEach(function (item) {
        var chunk = item.split('|');
        console.log(chunk);

        var ch = _this2.$props.module[chunk[0] + 's'][parseInt(chunk[1]) - 1];

        var instance = new window[chunk[0]]({
          store: _this2.$store,
          parent: _this2,
          propsData: {
            chunk: ch
          }
        });

        _this2.$children.push(instance);

        instance.$mount(_this2.$el.querySelector('#chunk_' + chunk[0] + '_' + chunk[1]));
      });
    }
  }
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
  computed: {
    modules: function modules() {
      return this.page.modules;
    }
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
        rank: null,
        template: module,
        module_template_id: module.id,
        images: [],
        texts: [],
        links: [],
        backgrounds: []
      };
      this.page.modules.push(m);
    },
    swap: function swap(index_A, dir) {
      console.log(index_A, dir, index_A + dir);

      if (index_A + dir <= 0 || index_A + dir >= this.page.modules.length) {} else {
        var elem_1 = document.getElementById('module_' + index_A);
        var elem_2 = document.getElementById('module_' + (index_A + dir));
        elem_1.parentNode.insertBefore(elem_2, elem_1.parentNode.firstChild);
      } // let m = this.page.modules;
      // let temp = this.page.modules[index_A];
      // m[index_A] = this.page.modules[index_B];
      // m[index_B] = temp;
      // this.page.modules = m;
      // m.forEach((module) => {
      //     this.appendModule(module);
      //     //this.page.modules.push(module);
      // });
      // this.$children.filter(child => { return child.$options.name === "Module"; }).forEach((item) => {
      //     console.log(item.id);
      //     // item.setModule();
      //     // item.$emit('fresh');
      // })

    },
    moveModule: function moveModule(index, dir) {
      if (index + dir === 0 || index + dir > this.page.modules.length) {
        return;
      } else {
        //[this.page.modules[index + dir], this.page.modules[index]] = [this.page.modules[index], this.page.modules[index + dir]];
        //this.page.modules.push(this.page.modules[index]);
        //this.page.modules = [];
        var m = this.page.modules;
        this.page.modules = [];
        m[index] = this.page.modules[index + dir];
        m[index + dir] = this.page.modules[index];
        this.page.modules = m; //elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
        // this.$forceUpdate();

        console.log(this.$children[0].$options.name);
        this.$children.filter(function (child) {
          return child.$options.name === "Module";
        }).forEach(function (item) {
          console.log(1);
          item.$emit('fresh');
        });
      }
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
exports.push([module.i, ".row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.pt-20 {\n  padding-top: 20px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@font-face {\n  font-family: \"MeriBold\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Merriweather-Bold.ttf */ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf")) + ");\n}\n.w-100 {\n  width: 100%;\n}\n\n.wb-padding {\n  padding: 84px 114px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #F5F5F5;\n}\n\nhtml {\n  min-width: 1230px;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.template {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 16px;\n  color: #333333;\n}\n.template h2 {\n  font-family: \"MeriBold\";\n  font-size: 46px;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.template h2 p {\n  padding-bottom: 0 !important;\n  line-height: 58px;\n}\n.template p {\n  padding: 0;\n  margin: 0;\n  padding-bottom: 1em !important;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n}\n.template header {\n  position: relative;\n  height: 320px;\n  color: #FFFFFF;\n  font-weight: 500;\n  background-position: center;\n}\n.template header .bg {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  height: 1395px;\n  background-position: center top;\n  background-repeat: no-repeat;\n}\n.template header .phone_head {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.template header .burger-menu {\n  background: url(/templates/maximum/assets/img/burger.png) no-repeat left;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  cursor: pointer;\n}\n.template header .r_side .top_container {\n  text-align: right;\n}\n.template header .head_container {\n  display: flex;\n}\n.template header .l_side, .template header .r_side {\n  width: calc((100% - 234px) / 2);\n}\n.template header .links {\n  margin-top: 74px;\n}\n.template header .links a {\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  letter-spacing: 0.04em;\n}\n.template header .links ul {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.template header .l_side .links ul li {\n  margin-right: 30px;\n}\n.template header .r_side .links ul {\n  flex-flow: row-reverse;\n}\n.template header .r_side .links ul li {\n  margin-left: 30px;\n}\n.template header .bg_image {\n  position: absolute;\n  left: calc(50% - 960px);\n  height: 100%;\n  top: 0;\n  z-index: -1;\n}\n.template header .bg_image img {\n  display: block;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .about_us {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .about_us .pic_container {\n  margin-right: 102px;\n}\n.template .about_us .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .about_us .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .about_us .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .about_us .text_container .about_block h2 {\n  width: 100%;\n}\n.template .about_us .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .callback_block {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .callback_block .pic_container {\n  margin-right: 102px;\n}\n.template .callback_block .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .callback_block .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .callback_block .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .callback_block .text_container .about_block h2 {\n  width: 100%;\n}\n.template .callback_block .text_container .about_block .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .callback_block .text_container .about_block .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .callback_block .text_container .about_block .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n}\n.template .benefits {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits h2 {\n  margin-bottom: 60px;\n}\n.template .benefits .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits h2 {\n  display: block;\n}\n.template .benefits .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .catalogue {\n  margin-top: 100px;\n}\n.template .catalogue h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .catalogue .cat_block {\n  border-radius: 8px;\n  padding: 30px;\n  height: 312px;\n  margin-bottom: 30px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  position: relative;\n}\n.template .catalogue .cat_block a {\n  align-self: flex-end;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  z-index: 99;\n}\n.template .catalogue .cat_block:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left;\n  pointer-events: none;\n  border-radius: 8px;\n}", ""]);

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
exports.push([module.i, ".add_module[data-v-90900b1e] {\n  border: 4px dashed #eeeeee;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  color: #c7c3c3;\n  line-height: 100px;\n  z-index: 999;\n  position: relative;\n  background: #ffff;\n}\n.container[data-v-90900b1e] {\n  width: 200px;\n}\n.module_settings[data-v-90900b1e] {\n  position: absolute;\n  top: 20px;\n  opacity: 0;\n  left: calc(50% - 15px);\n  z-index: 99999;\n  border: 2px solid #eee;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: url(/images/icons/sliders.svg) center no-repeat #fff;\n  cursor: pointer;\n  transition: 500ms all;\n}\n.module_box:hover .module_settings[data-v-90900b1e] {\n  opacity: 1;\n  top: 0px;\n}\n.sett_box[data-v-90900b1e] {\n  position: absolute;\n  display: none;\n}\n.module_settings:hover .sett_box[data-v-90900b1e] {\n  position: absolute;\n  display: block;\n  width: 200px;\n  left: calc(50% - 100px);\n  padding-top: 40px;\n}\n.module_settings:hover .sett_box .inner[data-v-90900b1e] {\n  background: #fff;\n}", ""]);

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
                staticClass: "tab-pane fade show active overflow-hidden",
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
                        _vm._l(_vm.modules, function(module, index) {
                          return _c(
                            "div",
                            {
                              staticClass: "position-relative module_box",
                              attrs: { id: "module_" + index }
                            },
                            [
                              _c("div", { staticClass: "module_settings" }, [
                                _c("div", { staticClass: "sett_box" }, [
                                  _c("div", { staticClass: "inner" }, [
                                    _c(
                                      "button",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.swap(index, -1)
                                          }
                                        }
                                      },
                                      [_vm._v("Вверх")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.swap(index, 1)
                                          }
                                        }
                                      },
                                      [_vm._v("Вниз")]
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("Module", { attrs: { module: module } })
                            ],
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

          console.log(tag);
          if (tag !== 'token') tags.push(tag);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/NzgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzYzNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzI0OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT9mMzYzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzP2MxMjgiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9taXhpbnMvdGFnX3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzg2MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzNiMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzIxNGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT8zNDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/YmVlNCJdLCJuYW1lcyI6WyJkYXRhIiwidGFncyIsIm1ldGhvZHMiLCJwYXJzZSIsIm1vZHVsZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsImkiLCJsZW5ndGgiLCJ0YWdfaW5kZXgiLCJ0YWciLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImZvckVhY2giLCJ0YWdfc3BsaXRlZCIsInNwbGl0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHNFQUZBO0FBR0EsbUJBSEE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQURBO0FBSUEsR0FUQTtBQVVBLFNBVkEscUJBVUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxLQUhBO0FBSUEsR0FoQkE7QUFpQkE7QUFDQSxhQURBLHFCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsbUJBSUE7QUFBQTs7QUFDQSxzQ0FE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QSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR3pGO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IlBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kdWxlXCIgdi1odG1sPVwicGFyc2UobW9kdWxlKVwiPjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB0YWdfcGFyc2VyIGZyb20gJy4uL21peGlucy90YWdfcGFyc2VyJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiTW9kdWxlXCIsXHJcbiAgICAgICAgbWl4aW5zOiBbdGFnX3BhcnNlcl0sXHJcbiAgICAgICAgcHJvcHM6IFsnbW9kdWxlJ10sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIHRoaXMubW91bnQoKTtcclxuICAgICAgICAgICAgdGhpcy4kb24oJ2ZyZXNoJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOntcclxuICAgICAgICAgICAgc2V0TW9kdWxlKG0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlID0gbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW91bnQoKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHByb3BzLm1vZHVsZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZighdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgcGFyYW1zID0gdHlwZVsyXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IGltYWdlX3BhcmFtcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlWzBdID09PSAnbGluaycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kcHJvcHMubW9kdWxlWydsaW5rcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydsaW5rcyddLnB1c2goe3RleHQgOiBcItCh0YHRi9C70LrQsFwiLCBsaW5rIDogXCIjXCIsfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ3RleHQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsndGV4dHMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsndGV4dHMnXS5wdXNoKHt0ZXh0IDogXCLQotC10LrRgdGCXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlWzBdID09PSAnYmFja2dyb3VuZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IGltYWdlX3BhcmFtcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogaW1hZ2VfcGFyYW1zLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6ICcvaW1hZ2VzL25vaW1hZ2UuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZV9wYXJhbXMgPSBKU09OLnBhcnNlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ2ltYWdlcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IGltYWdlX3BhcmFtcy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZighdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHR5cGUgPSBpdGVtLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZih0eXBlWzBdID09PSAnYmFja2dyb3VuZCcpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IGltYWdlX3BhcmFtcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiAnL2ltYWdlcy9ub2ltYWdlLmpwZycsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGl0ZW0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaHVuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoID0gdGhpcy4kcHJvcHMubW9kdWxlW2NodW5rWzBdICsgJ3MnXVtwYXJzZUludChjaHVua1sxXSkgLSAxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IHdpbmRvd1tjaHVua1swXV0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy4kc3RvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNEYXRhOiB7IGNodW5rOiBjaCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hpbGRyZW4ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJyNjaHVua18nICsgY2h1bmtbMF0gKyAnXycgKyBjaHVua1sxXSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtci0zXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NpdGVcIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIiA+PGEgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwibmF2aWdhdGVcIj7Qo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0Lw8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkhlbHBkZXNrIE1hbmFnZW1lbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1nLWItMCB0eC1zcGFjaW5nLS0xXCI+e3sgcGFnZS5uYW1lIH19PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlXCIgY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtbGluZVwiIGlkPVwibXlUYWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJob21lLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNob21lXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJob21lXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj7QktC40LfRg9Cw0LvRjNC90YvQuSDRgNC10LTQsNC60YLQvtGAPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwicHJvZmlsZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjcHJvZmlsZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwicHJvZmlsZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJjb250YWN0LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNzZW9cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImNvbnRhY3RcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5TRU88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQgcGQteS0yMFwiIGlkPVwibXlUYWJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUgb3ZlcmZsb3ctaGlkZGVuXCIgaWQ9XCJob21lXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaG9tZS10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKG1vZHVsZSwgaW5kZXgpIGluIG1vZHVsZXNcIiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1vZHVsZV9ib3hcIiB2LWJpbmQ6aWQ9XCInbW9kdWxlXycgKyBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2R1bGVfc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInN3YXAoaW5kZXgsIC0xKVwiPtCS0LLQtdGA0YU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInN3YXAoaW5kZXgsIDEpXCI+0JLQvdC40Lc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kdWxlIHYtYmluZDptb2R1bGU9XCJtb2R1bGVcIj48L01vZHVsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwibW9kdWxlc19zaG93ID0gIW1vZHVsZXNfc2hvd1wiIGNsYXNzPVwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmVcIj4g0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9kdWxlc19zaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwibW9kdWxlIGluICRzdG9yZS5nZXR0ZXJzLm1vZHVsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cImFwcGVuZE1vZHVsZShtb2R1bGUpXCI+e3sgbW9kdWxlLm5hbWUgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwicHJvZmlsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInByb2ZpbGUtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMiBtZy10LTEwIG1nLWxnLXQtMCBiclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UuaXNQdWJsaXNoZWRcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJpc1B1Ymxpc2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJpc1B1Ymxpc2hlZFwiPiDQntC/0YPQsdC70LjQutC+0LLQsNC9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0KLQtdC60YHRgiDQvNC10L3RjjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5tZW51XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRizwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDQvNGC0YDQsNC90LjRhtGLXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInNlb1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhY3QtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+U0VPINC30LDQs9C+0LvQvtCy0L7QujwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS50aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNFTyDQt9Cw0LPQvtC70L7QstC+0LpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+U0VPINC+0L/QuNGB0LDQvdC40LU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UuZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj51cmwg0YHRgtGA0LDQvdC40YbRizwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5zbHVnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwidXJsINGB0YLRgNCw0L3QuNGG0YtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IE1vZHVsZSBmcm9tICcuLy4uLy4uL21vZHVsZXMvTW9kdWxlJztcclxuICAgIGltcG9ydCBzdHlsZXMgZnJvbSAnL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlBhZ2VcIixcclxuICAgICAgICBjb21wb25lbnRzOntcclxuICAgICAgICAgICAgTW9kdWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGFnZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJ9Cd0L7QstCw0Y8g0YHRgtGA0LDQvdC40YbQsCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNQdWJsaXNoZWQgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXMgOiBbXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2VfaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJzInLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlc19zaG93IDogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBtb2R1bGVzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZS5tb2R1bGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaCA6IHtcclxuICAgICAgICAgICAgJ3BhZ2Uuc2x1Zyc6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBhZ2UuaWQgJiYgdGhpcy5wYWdlLmlkICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2Uuc2x1ZyA9IHdpbmRvdy51cmxSdXNMYXQodmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3BhZ2UubmFtZSc6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBhZ2UuaWQgJiYgdGhpcy5wYWdlLmlkICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnRpdGxlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X21vZHVsZXMnLCB0aGlzLnBhZ2VfaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VfaWQgPSAhIXRoaXMuJHJvdXRlLnBhcmFtcy5pZCA/IHBhcnNlSW50KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkgOiBudWxsO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhZ2VfaWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9wYWdlJywgdGhpcy5wYWdlX2lkKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kZW1pdCgndGl0bGVTZXQnLCB0aGlzLiRzdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5wYWdlKHRoaXMucGFnZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHQgPSB4LmluY2x1ZGVzKOKAnGh0bWzigJ0pXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldF9tb2R1bGVfY2h1bmsoMSwgMSwgJ3RleHQnLCAxKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGFwcGVuZE1vZHVsZShtb2R1bGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuayA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlX3RlbXBsYXRlX2lkIDogbW9kdWxlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRzIDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kcyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzLnB1c2gobSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN3YXAoaW5kZXhfQSwgZGlyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleF9BLCBkaXIsIChpbmRleF9BICsgZGlyKSk7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleF9BICsgZGlyIDw9IDAgfHwgaW5kZXhfQSArIGRpciA+PSB0aGlzLnBhZ2UubW9kdWxlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbV8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZHVsZV8nICsgaW5kZXhfQSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1fMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2R1bGVfJyArIChpbmRleF9BICsgZGlyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbV8xLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1fMiwgZWxlbV8xLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbSA9IHRoaXMucGFnZS5tb2R1bGVzO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHRlbXAgPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9BXTtcclxuICAgICAgICAgICAgICAgIC8vIG1baW5kZXhfQV0gPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9CXTtcclxuICAgICAgICAgICAgICAgIC8vIG1baW5kZXhfQl0gPSB0ZW1wO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlLm1vZHVsZXMgPSBtO1xyXG4gICAgICAgICAgICAgICAgLy8gbS5mb3JFYWNoKChtb2R1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFwcGVuZE1vZHVsZShtb2R1bGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vdGhpcy5wYWdlLm1vZHVsZXMucHVzaChtb2R1bGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLiRjaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4geyByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gXCJNb2R1bGVcIjsgfSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGl0ZW0uc2V0TW9kdWxlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaXRlbS4kZW1pdCgnZnJlc2gnKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdmVNb2R1bGUoaW5kZXgsIGRpcil7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCArIGRpciA9PT0gMCB8fCBpbmRleCArIGRpciA+IHRoaXMucGFnZS5tb2R1bGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXggKyBkaXJdLCB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF1dID0gW3RoaXMucGFnZS5tb2R1bGVzW2luZGV4XSwgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXggKyBkaXJdXTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGFnZS5tb2R1bGVzLnB1c2godGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGFnZS5tb2R1bGVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtID0gdGhpcy5wYWdlLm1vZHVsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBtW2luZGV4XSA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4ICsgZGlyXTtcclxuICAgICAgICAgICAgICAgICAgICBtW2luZGV4ICsgZGlyXSA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlcyA9IG07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtLCBlbGVtLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kY2hpbGRyZW5bMF0uJG9wdGlvbnMubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHsgcmV0dXJuIGNoaWxkLiRvcHRpb25zLm5hbWUgPT09IFwiTW9kdWxlXCI7IH0pLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uJGVtaXQoJ2ZyZXNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2F2ZSgpe1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnByb2R1Y3QuY2F0ZWdvcnlfaWQgPSAhIXRoaXMuY2F0ZWdvcnkgPyB0aGlzLmNhdGVnb3J5LmlkIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbWV0aG9kID0gISF0aGlzLnBhZ2UuaWQgPyAndXBkYXRlX3BhZ2UnIDogJ3N0b3JlX3BhZ2UnO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvZHVjdC5pbWFnZXMgPSB0aGlzLmltYWdlcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChtZXRob2QsIHRoaXMucGFnZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAncGFnZXMnfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLmFkZF9tb2R1bGV7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggZGFzaGVkICNlZWVlZWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2M3YzNjMztcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZV9zZXR0aW5nc3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvaWNvbnMvc2xpZGVycy5zdmcpIGNlbnRlciBuby1yZXBlYXQgI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgYWxsO1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZV9ib3g6aG92ZXIgLm1vZHVsZV9zZXR0aW5nc3tcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnNldHRfYm94e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3h7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAuaW5uZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxufVxcblxcbi5wdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLm10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNvbC1sZy0xIHtcXG4gICAgZmxleDogMCAwIDguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0yIHtcXG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTMge1xcbiAgICBmbGV4OiAwIDAgMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNCB7XFxuICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy01IHtcXG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTYge1xcbiAgICBmbGV4OiAwIDAgNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNyB7XFxuICAgIGZsZXg6IDAgMCA1OC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy04IHtcXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTkge1xcbiAgICBmbGV4OiAwIDAgNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTAge1xcbiAgICBmbGV4OiAwIDAgODMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTEge1xcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTIge1xcbiAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4uY29sLTEsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLCAuY29sLWF1dG8sIC5jb2wtc20tMSwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20sIC5jb2wtc20tYXV0bywgLmNvbC1tZC0xLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZCwgLmNvbC1tZC1hdXRvLCAuY29sLWxnLTEsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLCAuY29sLWxnLWF1dG8sIC5jb2wteGwtMSwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwsIC5jb2wteGwtYXV0byB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTWVycml3ZWF0aGVyLUJvbGQudHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LU1lZGl1bS50dGZcIikpICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC50dGZcIikpICsgXCIpO1xcbn1cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53Yi1wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDg0cHggMTE0cHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XFxufVxcblxcbmh0bWwge1xcbiAgbWluLXdpZHRoOiAxMjMwcHg7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRlbXBsYXRlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaDIgcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxufVxcbi50ZW1wbGF0ZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEzOTVweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5waG9uZV9oZWFkIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5idXJnZXItbWVudSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9pbWcvYnVyZ2VyLnBuZykgbm8tcmVwZWF0IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIC50b3BfY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5oZWFkX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5sX3NpZGUsIC50ZW1wbGF0ZSBoZWFkZXIgLnJfc2lkZSB7XFxuICB3aWR0aDogY2FsYygoMTAwJSAtIDIzNHB4KSAvIDIpO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5saW5rcyB7XFxuICBtYXJnaW4tdG9wOiA3NHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5saW5rcyBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubF9zaWRlIC5saW5rcyB1bCBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnJfc2lkZSAubGlua3MgdWwge1xcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIC5saW5rcyB1bCBsaSB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuYmdfaW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA5NjBweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuYmdfaW1hZ2UgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDJweDtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAucGljX2NvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODI4MjgyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmljb19pbWcge1xcbiAgd2lkdGg6IDcycHg7XFxuICBoZWlnaHQ6IDcycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5pY29faW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAud2hpdGVfYmxvY2sge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyBoMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuZGVjb3JfaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTExMHB4O1xcbiAgcmlnaHQ6IDE5cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgaDIge1xcbiAgcGFkZGluZzogMCAxMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDY4cHg7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2sge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMzEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2sgYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuY2F0X2Jsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9ncmFkLnBuZykgcmVwZWF0LXggbGVmdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hZGRfbW9kdWxlW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgYm9yZGVyOiA0cHggZGFzaGVkICNlZWVlZWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjYzdjM2MzO1xcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xcbiAgei1pbmRleDogOTk5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmY7XFxufVxcbi5jb250YWluZXJbZGF0YS12LTkwOTAwYjFlXSB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3NbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvaWNvbnMvc2xpZGVycy5zdmcpIGNlbnRlciBuby1yZXBlYXQgI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGFsbDtcXG59XFxuLm1vZHVsZV9ib3g6aG92ZXIgLm1vZHVsZV9zZXR0aW5nc1tkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDBweDtcXG59XFxuLnNldHRfYm94W2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3hbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcbiAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94IC5pbm5lcltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2R1bGVcIixcbiAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucGFyc2UoX3ZtLm1vZHVsZSkpIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItM1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMTBcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJuYXZcIiwgeyBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJicmVhZGNydW1iXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwib2xcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9zaXRlXCIsIGN1c3RvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGUgPSByZWYubmF2aWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaHJlZiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0LxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWN1cnJlbnRcIjogXCJwYWdlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSGVscGRlc2sgTWFuYWdlbWVudFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1nLWItMCB0eC1zcGFjaW5nLS0xXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlLm5hbWUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ub25lIGQtbWQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC+0YXRgNCw0L3QuNGC0YxcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50IHBkLXktMjBcIiwgYXR0cnM6IHsgaWQ6IFwibXlUYWJDb250ZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJob21lLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZW1wbGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1vZHVsZXMsIGZ1bmN0aW9uKG1vZHVsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9zaXRpb24tcmVsYXRpdmUgbW9kdWxlX2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibW9kdWxlX1wiICsgaW5kZXggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGVfc2V0dGluZ3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dF9ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbm5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zd2FwKGluZGV4LCAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQktCy0LXRgNGFXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3dhcChpbmRleCwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQktC90LjQt1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJNb2R1bGVcIiwgeyBhdHRyczogeyBtb2R1bGU6IG1vZHVsZSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kdWxlc19zaG93ID0gIV92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70YxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLiRzdG9yZS5nZXR0ZXJzLm1vZHVsZXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFwcGVuZE1vZHVsZShtb2R1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobW9kdWxlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcInByb2ZpbGUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTIgbWctdC0xMCBtZy1sZy10LTAgYnJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLmlzUHVibGlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJpc1B1Ymxpc2hlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnBhZ2UuaXNQdWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5wYWdlLmlzUHVibGlzaGVkLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBhZ2UuaXNQdWJsaXNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnBhZ2UuaXNQdWJsaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNQdWJsaXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNQdWJsaXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJpc1B1Ymxpc2hlZFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpc1B1Ymxpc2hlZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg0J7Qv9GD0LHQu9C40LrQvtCy0LDQvVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQotC10LrRgdGCINC80LXQvdGOXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UubWVudSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UubWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UubWVudSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcIm1lbnVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtSDQvNGC0YDQsNC90LjRhtGLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LfQstCw0L3QuNC1INC80YLRgNCw0L3QuNGG0YtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwic2VvXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImNvbnRhY3QtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNFTyDQt9Cw0LPQvtC70L7QstC+0LpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLnRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwidGl0bGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJ1cmwg0YHRgtGA0LDQvdC40YbRi1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLnNsdWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwidXJsINGB0YLRgNCw0L3QuNGG0YtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLnNsdWcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJzbHVnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi1saW5lXCIsIGF0dHJzOiB7IGlkOiBcIm15VGFiXCIsIHJvbGU6IFwidGFibGlzdFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImhvbWUtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI2hvbWVcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQktC40LfRg9Cw0LvRjNC90YvQuSDRgNC10LTQsNC60YLQvtGAXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcInByb2ZpbGUtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI3Byb2ZpbGVcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcInByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUHJvZmlsZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJjb250YWN0LXRhYlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNzZW9cIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImNvbnRhY3RcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiU0VPXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGY/OWNjYjg4NWM5Y2Y4ZTUwM2Q1NTdmMTVlMGIyY2JmMjRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC50dGY/YWRlOTFmNDczMjU1OTkxZjQxMGY2MTg1NzY5NjQzNGJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtTWVkaXVtLnR0Zj9jOGI2ZTA4M2FmM2Y5NDAwOTgwMTk4OWMzNzM5NDI1ZVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0Zj9lZTY1Mzk5MjFkNzEzNDgyYjhjY2Q0ZDBkMjM5NjFiYlwiOyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHBhcnNlKG1vZHVsZSl7XHJcbiAgICAgICAgICAgIGxldCBodG1sID0gbW9kdWxlLnRlbXBsYXRlLmh0bWw7XHJcbiAgICAgICAgICAgIGxldCB0YWdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZihodG1sW2ldID09PSBcIltcIiAmJiBodG1sW2krMV0gPT09IFwiW1wiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZ19pbmRleCA9IGkrMjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGh0bWxbdGFnX2luZGV4XSAhPT0gJ10nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICs9IGh0bWxbdGFnX2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFnICE9PSAndG9rZW4nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFnX3NwbGl0ZWQgPSB0YWcuc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoJ1tbJyArIHRhZyArICddXScsICc8ZGl2IGlkPVwiY2h1bmtfJyArIHRhZ19zcGxpdGVkWzBdICsgJ18nICsgdGFnX3NwbGl0ZWRbMV0gKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNlNDliMWYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDNlNDliMWZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwM2U0OWIxZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwM2U0OWIxZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwM2U0OWIxZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwM2U0OWIxZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MDkwMGIxZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzkwOTAwYjFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzkwOTAwYjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzkwOTAwYjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MDkwMGIxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9