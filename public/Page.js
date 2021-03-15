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

      // console.log(this.$props.module);
      // if(!this.$props.module['images'].length){
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
          var link_params = params ? JSON.parse(params) : null;

          if (!_this2.$props.module['links'][parseInt(type[1]) - 1]) {
            _this2.$props.module['links'].push({
              text: "Ссылка",
              link: "#",
              "class": link_params ? link_params["class"] : null
            });
          } else {// this.$props.module['links'][parseInt(type[1]) - 1].class = link_params.class
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
        var chunk = item.split('|'); // console.log(chunk);

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
    },
    pages: function pages() {
      return this.$store.getters.pages;
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

    this.$store.dispatch('get_pages');
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
        this.page.modules[index_A + dir] = this.page.modules.splice(index_A, index_A + dir, this.page.modules[index_A + dir])[index_A]; //
        // let temp = this.page.modules[index_A];
        // this.page.modules.splice(index_A, 1, temp);
        // this.page.modules.splice(index_A + dir, 1, temp);
        // let elem_1 = document.getElementById('module_' + index_A);
        // let elem_2 = document.getElementById('module_' + (index_A + dir));
        // elem_1.parentNode.insertBefore(elem_2, elem_1.parentNode.firstChild);
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
    deleteModule: function deleteModule(index) {
      this.page.modules.splice(index, 1);
    },
    copyModule: function copyModule(page, module, index) {
      var data = page.modules.filter(function (m) {
        return m.template.id === module.template.id;
      })[0];
      this.page.modules[index] = data;
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
exports.push([module.i, ".row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.button {\n  padding: 20px 84px;\n  border-radius: 6px;\n  border: 0;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.primary {\n  background: #56AF1A;\n  color: #fff;\n}\n\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.pt-20 {\n  padding-top: 20px;\n}\n\n.mt-60 {\n  margin-top: 60px;\n}\n\n.mb-30 {\n  margin-bottom: 30px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@font-face {\n  font-family: \"MeriBold\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Merriweather-Bold.ttf */ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf")) + ");\n}\n.w-100 {\n  width: 100%;\n}\n\n.wb-padding {\n  padding: 84px 114px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #F5F5F5;\n}\n\nhtml {\n  min-width: 1230px;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.template {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 16px;\n  color: #333333;\n}\n.template h1 {\n  font-family: \"MeriBold\";\n  font-size: 72px;\n  font-weight: bold;\n}\n.template h1 p {\n  line-height: 86px;\n  padding-bottom: 0 !important;\n  color: #FFFFFF;\n}\n.template h2 {\n  font-family: \"MeriBold\";\n  font-size: 46px;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.template h2 p {\n  padding-bottom: 0 !important;\n  line-height: 58px;\n}\n.template p {\n  padding: 0;\n  margin: 0;\n  padding-bottom: 1em !important;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n}\n.template header {\n  position: relative;\n  height: 320px;\n  color: #FFFFFF;\n  font-weight: 500;\n  background-position: center;\n  background-size: cover;\n}\n.template header .ico_img {\n  width: 72px;\n  height: 72px;\n}\n.template header .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template header h1 {\n  margin-top: 70px;\n}\n.template header.fullsize {\n  min-height: 1080px;\n}\n.template header.fullsize .ico_img {\n  width: 94px;\n  height: 94px;\n}\n.template header .trasp_box {\n  padding: 70px;\n  margin-right: -70px;\n  margin-left: -70px;\n  background: #15350060;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  font-weight: 400;\n  margin-top: 70px;\n}\n.template header .trasp_box .ico_img {\n  margin-bottom: 20px;\n}\n.template header .bg {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  height: 1395px;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.template header .phone_head {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.template header .burger-menu {\n  background: url(/templates/maximum/assets/img/burger.png) no-repeat left;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  cursor: pointer;\n}\n.template header .r_side .top_container {\n  text-align: right;\n}\n.template header .head_container {\n  display: flex;\n}\n.template header .l_side, .template header .r_side {\n  width: calc((100% - 234px) / 2);\n}\n.template header .links {\n  margin-top: 74px;\n}\n.template header .links a {\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  letter-spacing: 0.04em;\n}\n.template header .links ul {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.template header .l_side .links ul li {\n  margin-right: 30px;\n}\n.template header .r_side .links ul {\n  flex-flow: row-reverse;\n}\n.template header .r_side .links ul li {\n  margin-left: 30px;\n}\n.template header .bg_image {\n  position: absolute;\n  left: calc(50% - 960px);\n  height: 100%;\n  top: 0;\n  z-index: -1;\n}\n.template header .bg_image img {\n  display: block;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template footer {\n  margin-top: 100px;\n  background: #29570B;\n  padding-bottom: 60px;\n  padding-top: 60px;\n  position: relative;\n}\n.template footer .tab_cont {\n  border-bottom: 1px solid #438B13;\n  font-size: 18px;\n  font-weight: 600;\n  color: #56AF1A;\n}\n.template footer .tab_cont .tb {\n  border-bottom: 4px solid #56AF1A;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  line-height: 40px;\n  margin-bottom: -1px;\n}\n.template footer .foot_menu {\n  list-style: none;\n  padding: 0;\n  color: #fff;\n}\n.template footer .foot_menu a {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  line-height: 30px;\n  position: relative;\n}\n.template footer .foot_menu a:hover {\n  color: #56AF1A;\n}\n.template footer .foot_menu a:hover:after {\n  content: \"\";\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  bottom: -4px;\n  left: 0;\n  background-color: #56AF1A;\n}\n.template footer .foot_menu li {\n  margin: 20px 0;\n}\n.template footer .copy {\n  color: #fff;\n  padding-top: 86px;\n  display: block;\n}\n.template footer .footer_adds {\n  margin-top: 40px;\n}\n.template .shop_categories {\n  position: relative;\n}\n.template .shop_categories a {\n  text-decoration: none;\n}\n.template .shop_categories .cat_cell {\n  background: #fff;\n  border: 1px solid #E0E0E0;\n  padding: 60px 40px;\n}\n.template .shop_categories .cat_cell h3 {\n  font-size: 20px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .about_us {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .about_us .pic_container {\n  margin-right: 102px;\n}\n.template .about_us .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .about_us .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .about_us .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .about_us .text_container .about_block h2 {\n  width: 100%;\n}\n.template .about_us .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .callback_block {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .callback_block .pic_container {\n  margin-right: 102px;\n}\n.template .callback_block .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .callback_block .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .callback_block .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .callback_block .text_container .about_block h2 {\n  width: 100%;\n}\n.template .callback_block .text_container .about_block .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .callback_block .text_container .about_block .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .callback_block .text_container .about_block .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .examples {\n  margin-top: 100px;\n  position: relative;\n}\n.template .examples h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .examples .all_catalogue a {\n  margin: auto;\n}\n.template .examples .ex-container {\n  max-width: 1920px;\n  display: flex;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.template .examples .ex-container .ex_block {\n  height: 316px;\n  display: flex;\n  flex-basis: calc(16.666666% - 8px);\n  justify-content: center;\n  flex-direction: column;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 4px;\n  position: relative;\n}\n.template .benefits {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits h2 {\n  margin-bottom: 60px;\n}\n.template .benefits .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits h2 {\n  display: block;\n}\n.template .benefits .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .catalogue {\n  margin-top: 100px;\n}\n.template .catalogue h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .catalogue .all_catalogue {\n  margin-top: 30px;\n}\n.template .catalogue .all_catalogue a {\n  margin: auto;\n}\n.template .catalogue .cat_block {\n  border-radius: 8px;\n  padding: 30px;\n  height: 312px;\n  margin-bottom: 30px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  position: relative;\n}\n.template .catalogue .cat_block a {\n  align-self: flex-end;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  z-index: 99;\n}\n.template .catalogue .cat_block:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left;\n  pointer-events: none;\n  border-radius: 8px;\n}", ""]);

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
exports.push([module.i, ".add_module[data-v-90900b1e] {\n  border: 4px dashed #eeeeee;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  color: #c7c3c3;\n  line-height: 100px;\n  z-index: 999;\n  position: relative;\n  background: #ffff;\n}\n.container[data-v-90900b1e] {\n  width: 200px;\n}\n.module_settings[data-v-90900b1e] {\n  position: absolute;\n  top: 20px;\n  opacity: 0;\n  left: calc(50% - 15px);\n  z-index: 99999;\n  border: 2px solid #eee;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: url(/images/icons/sliders.svg) center no-repeat #fff;\n  cursor: pointer;\n  transition: 500ms all;\n}\n.module_box:hover .module_settings[data-v-90900b1e] {\n  opacity: 1;\n  top: 0px;\n}\n.sett_box[data-v-90900b1e] {\n  position: absolute;\n  display: none;\n}\n.module_settings:hover .sett_box[data-v-90900b1e] {\n  position: absolute;\n  display: block;\n  width: 200px;\n  left: calc(50% - 100px);\n  padding-top: 40px;\n}\n.module_settings:hover .sett_box .inner[data-v-90900b1e] {\n  background: #fff;\n  padding: 10px;\n  border-radius: 8px;\n  border: 2px solid #eee;\n}", ""]);

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
                              _c(
                                "div",
                                { staticClass: "module_settings mt-3" },
                                [
                                  _c("div", { staticClass: "sett_box" }, [
                                    _c("div", { staticClass: "inner" }, [
                                      _c(
                                        "button",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteModule(index)
                                            }
                                          }
                                        },
                                        [_vm._v("Удалить")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.copyModule(index)
                                            }
                                          }
                                        },
                                        [_vm._v("Скопировать из")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "pages" },
                                        _vm._l(_vm.pages, function(page) {
                                          return _c(
                                            "button",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.copyModule(
                                                    page,
                                                    module,
                                                    index
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v(_vm._s(page.name))]
                                          )
                                        }),
                                        0
                                      )
                                    ])
                                  ])
                                ]
                              ),
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
                            staticClass:
                              "add_module pointer user-select-none mt-4",
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
                                return _c(
                                  "div",
                                  { staticClass: "position-relative" },
                                  [
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
                                  ]
                                )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/NzgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzYzNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzI0OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT9mMzYzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzP2MxMjgiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9taXhpbnMvdGFnX3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzg2MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzNiMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzIxNGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT8zNDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/YmVlNCJdLCJuYW1lcyI6WyJkYXRhIiwidGFncyIsIm1ldGhvZHMiLCJwYXJzZSIsIm1vZHVsZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsImkiLCJsZW5ndGgiLCJ0YWdfaW5kZXgiLCJ0YWciLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImZvckVhY2giLCJ0YWdfc3BsaXRlZCIsInNwbGl0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHNFQUZBO0FBR0EsbUJBSEE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQURBO0FBSUEsR0FUQTtBQVVBLFNBVkEscUJBVUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxLQUhBO0FBSUEsR0FoQkE7QUFpQkE7QUFDQSxhQURBLHFCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsbUJBSUE7QUFBQTs7QUFDQTtBQUNB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QUFBQTtBQUFBLHdDQUE0TCxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStGO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUd6RjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZHVsZVwiIHYtaHRtbD1cInBhcnNlKG1vZHVsZSlcIj48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgdGFnX3BhcnNlciBmcm9tICcuLi9taXhpbnMvdGFnX3BhcnNlcidcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIk1vZHVsZVwiLFxyXG4gICAgICAgIG1peGluczogW3RhZ19wYXJzZXJdLFxyXG4gICAgICAgIHByb3BzOiBbJ21vZHVsZSddLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLm1vdW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCdmcmVzaCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW91bnQoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIHNldE1vZHVsZShtKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZSA9IG07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdW50KCl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRwcm9wcy5tb2R1bGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHBhcmFtcyA9IHR5cGVbMl07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdpbWFnZScpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ucHVzaChcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkIDogMCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlIDoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdHlwZVsyXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2xpbmsnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmtfcGFyYW1zID0gcGFyYW1zID8gSlNPTi5wYXJzZShwYXJhbXMpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnbGlua3MnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnbGlua3MnXS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFwi0KHRgdGL0LvQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsgOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiBsaW5rX3BhcmFtcyA/IGxpbmtfcGFyYW1zLmNsYXNzIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcHJvcHMubW9kdWxlWydsaW5rcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0uY2xhc3MgPSBsaW5rX3BhcmFtcy5jbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICd0ZXh0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ3RleHRzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ3RleHRzJ10ucHVzaCh7dGV4dCA6IFwi0KLQtdC60YHRglwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2JhY2tncm91bmQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IGltYWdlX3BhcmFtcy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiAnL2ltYWdlcy9ub2ltYWdlLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdpbWFnZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgcGFyYW1zID0gdHlwZVsyXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2JhY2tncm91bmQnKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBpbWFnZV9wYXJhbXMgPSBKU09OLnBhcnNlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ2JhY2tncm91bmRzJ10ucHVzaChcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkIDogMCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlIDoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJy9pbWFnZXMvbm9pbWFnZS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBpdGVtLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2h1bmspO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaCA9IHRoaXMuJHByb3BzLm1vZHVsZVtjaHVua1swXSArICdzJ11bcGFyc2VJbnQoY2h1bmtbMV0pIC0gMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyB3aW5kb3dbY2h1bmtbMF1dKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMuJHN0b3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzRGF0YTogeyBjaHVuazogY2ggfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoaWxkcmVuLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLiRtb3VudCh0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcjY2h1bmtfJyArIGNodW5rWzBdICsgJ18nICsgY2h1bmtbMV0pKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXItM1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9zaXRlXCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgPjxhIDpocmVmPVwiaHJlZlwiIEBjbGljaz1cIm5hdmlnYXRlXCI+0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5IZWxwZGVzayBNYW5hZ2VtZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiPnt7IHBhZ2UubmFtZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2F2ZVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LWxpbmVcIiBpZD1cIm15VGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGlkPVwiaG9tZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjaG9tZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiaG9tZVwiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+0JLQuNC30YPQsNC70YzQvdGL0Lkg0YDQtdC00LDQutGC0L7RgDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInByb2ZpbGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3Byb2ZpbGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInByb2ZpbGVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwiY29udGFjdC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjc2VvXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJjb250YWN0XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+U0VPPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IHBkLXktMjBcIiBpZD1cIm15VGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlIG92ZXJmbG93LWhpZGRlblwiIGlkPVwiaG9tZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImhvbWUtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihtb2R1bGUsIGluZGV4KSBpbiBtb2R1bGVzXCIgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2R1bGVfYm94XCIgdi1iaW5kOmlkPVwiJ21vZHVsZV8nICsgaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kdWxlX3NldHRpbmdzIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzd2FwKGluZGV4LCAtMSlcIj7QktCy0LXRgNGFPC9idXR0b24+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic3dhcChpbmRleCwgMSlcIj7QktC90LjQtzwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiZGVsZXRlTW9kdWxlKGluZGV4KVwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjb3B5TW9kdWxlKGluZGV4KVwiPtCh0LrQvtC/0LjRgNC+0LLQsNGC0Ywg0LjQtzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZm9yPVwicGFnZSBpbiBwYWdlc1wiIEBjbGljaz1cImNvcHlNb2R1bGUocGFnZSwgbW9kdWxlLCBpbmRleClcIiA+e3sgcGFnZS5uYW1lIH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZHVsZSB2LWJpbmQ6bW9kdWxlPVwibW9kdWxlXCI+PC9Nb2R1bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cIm1vZHVsZXNfc2hvdyA9ICFtb2R1bGVzX3Nob3dcIiBjbGFzcz1cImFkZF9tb2R1bGUgcG9pbnRlciB1c2VyLXNlbGVjdC1ub25lIG10LTRcIj4g0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9kdWxlc19zaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIiB2LWZvcj1cIm1vZHVsZSBpbiAkc3RvcmUuZ2V0dGVycy5tb2R1bGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJhcHBlbmRNb2R1bGUobW9kdWxlKVwiPnt7IG1vZHVsZS5uYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInByb2ZpbGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJwcm9maWxlLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgbWctdC0xMCBtZy1sZy10LTAgYnJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLmlzUHVibGlzaGVkXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwiaXNQdWJsaXNoZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiaXNQdWJsaXNoZWRcIj4g0J7Qv9GD0LHQu9C40LrQvtCy0LDQvTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCi0LXQutGB0YIg0LzQtdC90Y48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UubWVudVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QndCw0LfQstCw0L3QuNC1INC80YLRgNCw0L3QuNGG0Ys8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRi1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJzZW9cIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWN0LXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlNFTyDQt9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UudGl0bGVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlNFTyDQvtC/0LjRgdCw0L3QuNC1PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLmRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU0VPINC+0L/QuNGB0LDQvdC40LVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+dXJsINGB0YLRgNCw0L3QuNGG0Ys8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2Uuc2x1Z1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cInVybCDRgdGC0YDQsNC90LjRhtGLXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBNb2R1bGUgZnJvbSAnLi8uLi8uLi9tb2R1bGVzL01vZHVsZSc7XHJcbiAgICBpbXBvcnQgc3R5bGVzIGZyb20gJy9wdWJsaWMvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2Nzcy9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJQYWdlXCIsXHJcbiAgICAgICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgICAgIE1vZHVsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6ICfQndC+0LLQsNGPINGB0YLRgNCw0L3QuNGG0LAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVzIDogW11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlX2lkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICcyJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXNfc2hvdyA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgbW9kdWxlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2UubW9kdWxlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5wYWdlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2ggOiB7XHJcbiAgICAgICAgICAgICdwYWdlLnNsdWcnOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5wYWdlLmlkICYmIHRoaXMucGFnZS5pZCAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdwYWdlLm5hbWUnOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5wYWdlLmlkICYmIHRoaXMucGFnZS5pZCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5zbHVnID0gd2luZG93LnVybFJ1c0xhdCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS50aXRsZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKXtcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9wYWdlcycpO1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X21vZHVsZXMnLCB0aGlzLnBhZ2VfaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VfaWQgPSAhIXRoaXMuJHJvdXRlLnBhcmFtcy5pZCA/IHBhcnNlSW50KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkgOiBudWxsO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhZ2VfaWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9wYWdlJywgdGhpcy5wYWdlX2lkKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kZW1pdCgndGl0bGVTZXQnLCB0aGlzLiRzdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5wYWdlKHRoaXMucGFnZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHQgPSB4LmluY2x1ZGVzKOKAnGh0bWzigJ0pXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldF9tb2R1bGVfY2h1bmsoMSwgMSwgJ3RleHQnLCAxKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGFwcGVuZE1vZHVsZShtb2R1bGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuayA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlX3RlbXBsYXRlX2lkIDogbW9kdWxlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRzIDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kcyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzLnB1c2gobSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN3YXAoaW5kZXhfQSwgZGlyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleF9BLCBkaXIsIChpbmRleF9BICsgZGlyKSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXhfQSArIGRpciA8PSAwIHx8IGluZGV4X0EgKyBkaXIgPj0gdGhpcy5wYWdlLm1vZHVsZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0EgKyBkaXJdID0gdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4X0EsaW5kZXhfQSArIGRpciwgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhfQSArIGRpcl0pW2luZGV4X0FdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0ZW1wID0gdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhfQV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4X0EsIDEsIHRlbXApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleF9BICsgZGlyLCAxLCB0ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbGVtXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kdWxlXycgKyBpbmRleF9BKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZWxlbV8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZHVsZV8nICsgKGluZGV4X0EgKyBkaXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtXzEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbV8yLCBlbGVtXzEucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGxldCBtID0gdGhpcy5wYWdlLm1vZHVsZXM7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGVtcCA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0FdO1xyXG4gICAgICAgICAgICAgICAgLy8gbVtpbmRleF9BXSA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0JdO1xyXG4gICAgICAgICAgICAgICAgLy8gbVtpbmRleF9CXSA9IHRlbXA7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2UubW9kdWxlcyA9IG07XHJcbiAgICAgICAgICAgICAgICAvLyBtLmZvckVhY2goKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYXBwZW5kTW9kdWxlKG1vZHVsZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy90aGlzLnBhZ2UubW9kdWxlcy5wdXNoKG1vZHVsZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuJGNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiB7IHJldHVybiBjaGlsZC4kb3B0aW9ucy5uYW1lID09PSBcIk1vZHVsZVwiOyB9KS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaXRlbS5zZXRNb2R1bGUoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBpdGVtLiRlbWl0KCdmcmVzaCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlTW9kdWxlKGluZGV4KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvcHlNb2R1bGUocGFnZSwgbW9kdWxlLCBpbmRleCl7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBwYWdlLm1vZHVsZXMuZmlsdGVyKChtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0udGVtcGxhdGUuaWQgPT09IG1vZHVsZS50ZW1wbGF0ZS5pZDtcclxuICAgICAgICAgICAgICAgIH0pWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdID0gZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW92ZU1vZHVsZShpbmRleCwgZGlyKXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ICsgZGlyID09PSAwIHx8IGluZGV4ICsgZGlyID4gdGhpcy5wYWdlLm1vZHVsZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1t0aGlzLnBhZ2UubW9kdWxlc1tpbmRleCArIGRpcl0sIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4XV0gPSBbdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdLCB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleCArIGRpcl1dO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wYWdlLm1vZHVsZXMucHVzaCh0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wYWdlLm1vZHVsZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSB0aGlzLnBhZ2UubW9kdWxlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1baW5kZXhdID0gdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXggKyBkaXJdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1baW5kZXggKyBkaXJdID0gdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzID0gbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW0sIGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRjaGlsZHJlblswXS4kb3B0aW9ucy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4geyByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gXCJNb2R1bGVcIjsgfSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS4kZW1pdCgnZnJlc2gnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzYXZlKCl7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucHJvZHVjdC5jYXRlZ29yeV9pZCA9ICEhdGhpcy5jYXRlZ29yeSA/IHRoaXMuY2F0ZWdvcnkuaWQgOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtZXRob2QgPSAhIXRoaXMucGFnZS5pZCA/ICd1cGRhdGVfcGFnZScgOiAnc3RvcmVfcGFnZSc7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9kdWN0LmltYWdlcyA9IHRoaXMuaW1hZ2VzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKG1ldGhvZCwgdGhpcy5wYWdlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdwYWdlcyd9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgICAuYWRkX21vZHVsZXtcclxuICAgICAgICBib3JkZXI6IDRweCBkYXNoZWQgI2VlZWVlZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjYzdjM2MzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAubW9kdWxlX3NldHRpbmdze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9pY29ucy9zbGlkZXJzLnN2ZykgY2VudGVyIG5vLXJlcGVhdCAjZmZmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBhbGw7XHJcbiAgICB9XHJcbiAgICAubW9kdWxlX2JveDpob3ZlciAubW9kdWxlX3NldHRpbmdze1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2V0dF9ib3h7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubW9kdWxlX3NldHRpbmdzOmhvdmVyIC5zZXR0X2JveHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIC5pbm5lcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMjBweCA4NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByaW1hcnkge1xcbiAgYmFja2dyb3VuZDogIzU2QUYxQTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXG59XFxuXFxuLnB0LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4ubXQtNjAge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLm1iLTMwIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jb2wtbGctMSB7XFxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMiB7XFxuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0zIHtcXG4gICAgZmxleDogMCAwIDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTQge1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNSB7XFxuICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy02IHtcXG4gICAgZmxleDogMCAwIDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLWxnLTcge1xcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOCB7XFxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy05IHtcXG4gICAgZmxleDogMCAwIDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEwIHtcXG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTExIHtcXG4gICAgZmxleDogMCAwIDkxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEyIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLmNvbC0xLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbCwgLmNvbC1hdXRvLCAuY29sLXNtLTEsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLCAuY29sLXNtLWF1dG8sIC5jb2wtbWQtMSwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQsIC5jb2wtbWQtYXV0bywgLmNvbC1sZy0xLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZywgLmNvbC1sZy1hdXRvLCAuY29sLXhsLTEsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLCAuY29sLXhsLWF1dG8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVyaUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01lcnJpd2VhdGhlci1Cb2xkLnR0ZlwiKSkgKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiKSkgKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LUJvbGQudHRmXCIpKSArIFwiKTtcXG59XFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2ItcGFkZGluZyB7XFxuICBwYWRkaW5nOiA4NHB4IDExNHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi13aWR0aDogMTIzMHB4O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50ZW1wbGF0ZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRlbXBsYXRlIGgxIHAge1xcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcbi50ZW1wbGF0ZSBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaDIgcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxufVxcbi50ZW1wbGF0ZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmljb19pbWcge1xcbiAgd2lkdGg6IDcycHg7XFxuICBoZWlnaHQ6IDcycHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmljb19pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIuZnVsbHNpemUge1xcbiAgbWluLWhlaWdodDogMTA4MHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyLmZ1bGxzaXplIC5pY29faW1nIHtcXG4gIHdpZHRoOiA5NHB4O1xcbiAgaGVpZ2h0OiA5NHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC50cmFzcF9ib3gge1xcbiAgcGFkZGluZzogNzBweDtcXG4gIG1hcmdpbi1yaWdodDogLTcwcHg7XFxuICBtYXJnaW4tbGVmdDogLTcwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMTUzNTAwNjA7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAudHJhc3BfYm94IC5pY29faW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzk1cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnBob25lX2hlYWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJ1cmdlci1tZW51IHtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9idXJnZXIucG5nKSBuby1yZXBlYXQgbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUgLnRvcF9jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmhlYWRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxfc2lkZSwgLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIHtcXG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjM0cHgpIC8gMik7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDc0cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubGlua3MgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5sX3NpZGUgLmxpbmtzIHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIC5saW5rcyB1bCB7XFxuICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUgLmxpbmtzIHVsIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5iZ19pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDk2MHB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5iZ19pbWFnZSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQ6ICMyOTU3MEI7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC50YWJfY29udCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzOEIxMztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzU2QUYxQTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAudGFiX2NvbnQgLnRiIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNTZBRjFBO1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IGE6aG92ZXIge1xcbiAgY29sb3I6ICM1NkFGMUE7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBhOmhvdmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogLTRweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZBRjFBO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290X21lbnUgbGkge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmNvcHkge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXRvcDogODZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290ZXJfYWRkcyB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGwge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XFxuICBwYWRkaW5nOiA2MHB4IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfY2VsbCBoMyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGwgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDJweDtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAucGljX2NvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODI4MjgyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA0NjBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIGgyIHtcXG4gIHBhZGRpbmc6IDAgMTE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2OHB4O1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5hbGxfY2F0YWxvZ3VlIGEge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5leC1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi50ZW1wbGF0ZSAuZXhhbXBsZXMgLmV4LWNvbnRhaW5lciAuZXhfYmxvY2sge1xcbiAgaGVpZ2h0OiAzMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiBjYWxjKDE2LjY2NjY2NiUgLSA4cHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5pY29faW1nIHtcXG4gIHdpZHRoOiA3MnB4O1xcbiAgaGVpZ2h0OiA3MnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuaWNvX2ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLndoaXRlX2Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmRlY29yX2ltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMTBweDtcXG4gIHJpZ2h0OiAxOXB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIGgyIHtcXG4gIHBhZGRpbmc6IDAgMTE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2OHB4O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuYWxsX2NhdGFsb2d1ZSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuYWxsX2NhdGFsb2d1ZSBhIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmNhdF9ibG9jayB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmNhdF9ibG9jayBhIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKC90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvaW1nL2dyYWQucG5nKSByZXBlYXQteCBsZWZ0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFkZF9tb2R1bGVbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBib3JkZXI6IDRweCBkYXNoZWQgI2VlZWVlZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNjN2MzYzM7XFxuICBsaW5lLWhlaWdodDogMTAwcHg7XFxuICB6LWluZGV4OiA5OTk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZjtcXG59XFxuLmNvbnRhaW5lcltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLm1vZHVsZV9zZXR0aW5nc1tkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xcbiAgei1pbmRleDogOTk5OTk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9pY29ucy9zbGlkZXJzLnN2ZykgY2VudGVyIG5vLXJlcGVhdCAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogNTAwbXMgYWxsO1xcbn1cXG4ubW9kdWxlX2JveDpob3ZlciAubW9kdWxlX3NldHRpbmdzW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRvcDogMHB4O1xcbn1cXG4uc2V0dF9ib3hbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kdWxlX3NldHRpbmdzOmhvdmVyIC5zZXR0X2JveFtkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxuICBwYWRkaW5nLXRvcDogNDBweDtcXG59XFxuLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3ggLmlubmVyW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kdWxlXCIsXG4gICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnBhcnNlKF92bS5tb2R1bGUpKSB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTNcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwibmF2XCIsIHsgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiYnJlYWRjcnVtYlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm9sXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvc2l0ZVwiLCBjdXN0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSByZWYuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGhyZWYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkhlbHBkZXNrIE1hbmFnZW1lbnRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFnZS5uYW1lKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtbm9uZSBkLW1kLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQvtGF0YDQsNC90LjRgtGMXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudCBwZC15LTIwXCIsIGF0dHJzOiB7IGlkOiBcIm15VGFiQ29udGVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUgb3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiaG9tZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGVtcGxhdGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5tb2R1bGVzLCBmdW5jdGlvbihtb2R1bGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvc2l0aW9uLXJlbGF0aXZlIG1vZHVsZV9ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm1vZHVsZV9cIiArIGluZGV4IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZV9zZXR0aW5ncyBtdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dF9ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlubmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZU1vZHVsZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0LTQsNC70LjRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNvcHlNb2R1bGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC60L7Qv9C40YDQvtCy0LDRgtGMINC40LdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYWdlcywgZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb3B5TW9kdWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBhZ2UubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTW9kdWxlXCIsIHsgYXR0cnM6IHsgbW9kdWxlOiBtb2R1bGUgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfbW9kdWxlIHBvaW50ZXIgdXNlci1zZWxlY3Qtbm9uZSBtdC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZHVsZXNfc2hvdyA9ICFfdm0ubW9kdWxlc19zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiINCU0L7QsdCw0LLQuNGC0Ywg0LzQvtC00YPQu9GMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kdWxlc19zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS4kc3RvcmUuZ2V0dGVycy5tb2R1bGVzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3NpdGlvbi1yZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFwcGVuZE1vZHVsZShtb2R1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhtb2R1bGUubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJwcm9maWxlLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0yIG1nLXQtMTAgbWctbGctdC0wIGJyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UuaXNQdWJsaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5pc1B1Ymxpc2hlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwiaXNQdWJsaXNoZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5wYWdlLmlzUHVibGlzaGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ucGFnZS5pc1B1Ymxpc2hlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5wYWdlLmlzUHVibGlzaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5wYWdlLmlzUHVibGlzaGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzUHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzUHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwiaXNQdWJsaXNoZWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaXNQdWJsaXNoZWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiINCe0L/Rg9Cx0LvQuNC60L7QstCw0L1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0KLQtdC60YHRgiDQvNC10L3RjlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLm1lbnUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJtZW51XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRi1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0J3QsNC30LLQsNC90LjQtSDQvNGC0YDQsNC90LjRhtGLXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInNlb1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJjb250YWN0LXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU0VPINC30LDQs9C+0LvQvtCy0L7QulwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS50aXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU0VPINC+0L/QuNGB0LDQvdC40LVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU0VPINC+0L/QuNGB0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwidXJsINGB0YLRgNCw0L3QuNGG0YtcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5zbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcInVybCDRgdGC0YDQsNC90LjRhtGLXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5zbHVnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwic2x1Z1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtbGluZVwiLCBhdHRyczogeyBpZDogXCJteVRhYlwiLCByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBhY3RpdmVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJob21lLXRhYlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNob21lXCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JLQuNC30YPQsNC70YzQvdGL0Lkg0YDQtdC00LDQutGC0L7RgFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJwcm9maWxlLXRhYlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlByb2ZpbGVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiY29udGFjdC10YWJcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjc2VvXCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJjb250YWN0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlNFT1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4vc3R5bGUubW9kdWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTWVycml3ZWF0aGVyLUJvbGQudHRmPzljY2I4ODVjOWNmOGU1MDNkNTU3ZjE1ZTBiMmNiZjI0XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9Nb250c2VycmF0LUJvbGQudHRmP2FkZTkxZjQ3MzI1NTk5MWY0MTBmNjE4NTc2OTY0MzRiXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9Nb250c2VycmF0LU1lZGl1bS50dGY/YzhiNmUwODNhZjNmOTQwMDk4MDE5ODljMzczOTQyNWVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGY/ZWU2NTM5OTIxZDcxMzQ4MmI4Y2NkNGQwZDIzOTYxYmJcIjsiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFnczogW10sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBwYXJzZShtb2R1bGUpe1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9IG1vZHVsZS50ZW1wbGF0ZS5odG1sO1xyXG4gICAgICAgICAgICBsZXQgdGFncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaHRtbFtpXSA9PT0gXCJbXCIgJiYgaHRtbFtpKzFdID09PSBcIltcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdfaW5kZXggPSBpKzI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChodG1sW3RhZ19pbmRleF0gIT09ICddJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyArPSBodG1sW3RhZ19pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ19pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhZyAhPT0gJ3Rva2VuJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhZ19zcGxpdGVkID0gdGFnLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKCdbWycgKyB0YWcgKyAnXV0nLCAnPGRpdiBpZD1cImNodW5rXycgKyB0YWdfc3BsaXRlZFswXSArICdfJyArIHRhZ19zcGxpdGVkWzFdICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50YWdzID0gdGFncztcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzZTQ5YjFmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAzZTQ5YjFmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDNlNDliMWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDNlNDliMWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDNlNDliMWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNlNDliMWYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDNlNDliMWYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL21vZHVsZXMvTW9kdWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNlNDliMWYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOTA5MDBiMWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MDkwMGIxZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MDkwMGIxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MDkwMGIxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTA5MDBiMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==