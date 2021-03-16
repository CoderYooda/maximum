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
exports.push([module.i, ".row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.button {\n  padding: 20px 84px;\n  border-radius: 6px;\n  border: 0;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.primary {\n  background: #56AF1A;\n  color: #fff;\n}\n\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.pt-20 {\n  padding-top: 20px;\n}\n\n.mt-60 {\n  margin-top: 60px;\n}\n\n.mb-30 {\n  margin-bottom: 30px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@font-face {\n  font-family: \"MeriBold\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Merriweather-Bold.ttf */ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf")) + ");\n}\n.w-100 {\n  width: 100%;\n}\n\n.wb-padding {\n  padding: 84px 114px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #F5F5F5;\n}\n\nhtml {\n  min-width: 1230px;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.template {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 16px;\n  color: #333333;\n}\n.template h1 {\n  font-family: \"MeriBold\";\n  font-size: 72px;\n  font-weight: bold;\n}\n.template h1 p {\n  line-height: 86px;\n  padding-bottom: 0 !important;\n  color: #FFFFFF;\n}\n.template h2 {\n  font-family: \"MeriBold\";\n  font-size: 46px;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.template h2 p {\n  padding-bottom: 0 !important;\n  line-height: 58px;\n}\n.template p {\n  padding: 0;\n  margin: 0;\n  padding-bottom: 1em !important;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n}\n.template header {\n  position: relative;\n  height: 320px;\n  color: #FFFFFF;\n  font-weight: 500;\n  background-position: center;\n  background-size: cover;\n}\n.template header .ico_img {\n  width: 72px;\n  height: 72px;\n}\n.template header .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template header h1 {\n  margin-top: 70px;\n}\n.template header.fullsize {\n  min-height: 1080px;\n}\n.template header.fullsize .ico_img {\n  width: 94px;\n  height: 94px;\n}\n.template header .trasp_box {\n  padding: 70px;\n  margin-right: -70px;\n  margin-left: -70px;\n  background: #15350060;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  font-weight: 400;\n  margin-top: 70px;\n}\n.template header .trasp_box .ico_img {\n  margin-bottom: 20px;\n}\n.template header .bg {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  height: 1395px;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.template header .phone_head {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.template header .burger-menu {\n  background: url(/templates/maximum/assets/img/burger.png) no-repeat left;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  cursor: pointer;\n}\n.template header .r_side .top_container {\n  text-align: right;\n}\n.template header .head_container {\n  display: flex;\n}\n.template header .l_side, .template header .r_side {\n  width: calc((100% - 234px) / 2);\n}\n.template header .links {\n  margin-top: 74px;\n}\n.template header .links a {\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  letter-spacing: 0.04em;\n}\n.template header .links ul {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.template header .l_side .links ul li {\n  margin-right: 30px;\n}\n.template header .r_side .links ul {\n  flex-flow: row-reverse;\n}\n.template header .r_side .links ul li {\n  margin-left: 30px;\n}\n.template header .bg_image {\n  position: absolute;\n  left: calc(50% - 960px);\n  height: 100%;\n  top: 0;\n  z-index: -1;\n}\n.template header .bg_image img {\n  display: block;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template footer {\n  margin-top: 100px;\n  background: #29570B;\n  padding-bottom: 60px;\n  padding-top: 60px;\n  position: relative;\n}\n.template footer .tab_cont {\n  border-bottom: 1px solid #438B13;\n  font-size: 18px;\n  font-weight: 600;\n  color: #56AF1A;\n}\n.template footer .tab_cont .tb {\n  border-bottom: 4px solid #56AF1A;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  line-height: 40px;\n  margin-bottom: -1px;\n}\n.template footer .foot_menu {\n  list-style: none;\n  padding: 0;\n  color: #fff;\n}\n.template footer .foot_menu a {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  line-height: 30px;\n  position: relative;\n}\n.template footer .foot_menu a:hover {\n  color: #56AF1A;\n}\n.template footer .foot_menu a:hover:after {\n  content: \"\";\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  bottom: -4px;\n  left: 0;\n  background-color: #56AF1A;\n}\n.template footer .foot_menu li {\n  margin: 20px 0;\n}\n.template footer .copy {\n  color: #fff;\n  padding-top: 86px;\n  display: block;\n}\n.template footer .footer_adds {\n  margin-top: 40px;\n}\n.template .shop_categories {\n  position: relative;\n}\n.template .shop_categories .cats_box {\n  background: #fff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);\n}\n.template .shop_categories .cat_item a {\n  color: #4F4F4F;\n  display: block;\n}\n.template .shop_categories .cat_item p {\n  line-height: 24px;\n  padding: 20px 30px !important;\n}\n.template .shop_categories .cat_item:hover {\n  background-color: #489613;\n}\n.template .shop_categories .cat_item:hover a {\n  color: #fff;\n}\n.template .shop_categories h1 {\n  font-size: 46px;\n}\n.template .shop_categories a {\n  text-decoration: none;\n}\n.template .shop_categories .cat_descr {\n  height: 144px;\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell:hover {\n  border: 4px solid #56AF1A;\n  padding: 57px 37px;\n  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.1);\n}\n.template .shop_categories .cat_cell {\n  background: #fff;\n  border: 1px solid #E0E0E0;\n  padding: 60px 40px;\n}\n.template .shop_categories .cat_cell h3 {\n  font-size: 20px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .about_us {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .about_us .pic_container {\n  margin-right: 102px;\n}\n.template .about_us .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .about_us .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .about_us .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .about_us .text_container .about_block h2 {\n  width: 100%;\n}\n.template .about_us .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .callback_block {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .callback_block .pic_container {\n  margin-right: 102px;\n}\n.template .callback_block .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .callback_block .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .callback_block .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .callback_block .text_container .about_block h2 {\n  width: 100%;\n}\n.template .callback_block .text_container .about_block .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .callback_block .text_container .about_block .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .callback_block .text_container .about_block .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .examples {\n  margin-top: 100px;\n  position: relative;\n}\n.template .examples h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .examples .all_catalogue a {\n  margin: auto;\n}\n.template .examples .ex-container {\n  max-width: 1920px;\n  display: flex;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.template .examples .ex-container .ex_block {\n  height: 316px;\n  display: flex;\n  flex-basis: calc(16.666666% - 8px);\n  justify-content: center;\n  flex-direction: column;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 4px;\n  position: relative;\n}\n.template .benefits {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits h2 {\n  margin-bottom: 60px;\n}\n.template .benefits .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits h2 {\n  display: block;\n}\n.template .benefits .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .catalogue {\n  margin-top: 100px;\n}\n.template .catalogue h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .catalogue .all_catalogue {\n  margin-top: 30px;\n}\n.template .catalogue .all_catalogue a {\n  margin: auto;\n}\n.template .catalogue .cat_block {\n  border-radius: 8px;\n  padding: 30px;\n  height: 312px;\n  margin-bottom: 30px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  position: relative;\n}\n.template .catalogue .cat_block a {\n  align-self: flex-end;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  z-index: 99;\n}\n.template .catalogue .cat_block:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left;\n  pointer-events: none;\n  border-radius: 8px;\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/NzgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzYzNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzI0OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT9mMzYzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzP2MxMjgiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9taXhpbnMvdGFnX3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzg2MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzNiMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzIxNGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT8zNDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/YmVlNCJdLCJuYW1lcyI6WyJkYXRhIiwidGFncyIsIm1ldGhvZHMiLCJwYXJzZSIsIm1vZHVsZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsImkiLCJsZW5ndGgiLCJ0YWdfaW5kZXgiLCJ0YWciLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImZvckVhY2giLCJ0YWdfc3BsaXRlZCIsInNwbGl0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHNFQUZBO0FBR0EsbUJBSEE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQURBO0FBSUEsR0FUQTtBQVVBLFNBVkEscUJBVUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxLQUhBO0FBSUEsR0FoQkE7QUFpQkE7QUFDQSxhQURBLHFCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsbUJBSUE7QUFBQTs7QUFDQTtBQUNB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QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRztBQUN2QztBQUNMOzs7QUFHckQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNEwsQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUN2QztBQUNMO0FBQ3NDOzs7QUFHekY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibW9kdWxlXCIgdi1odG1sPVwicGFyc2UobW9kdWxlKVwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdGFnX3BhcnNlciBmcm9tICcuLi9taXhpbnMvdGFnX3BhcnNlcidcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTW9kdWxlXCIsXG4gICAgICAgIG1peGluczogW3RhZ19wYXJzZXJdLFxuICAgICAgICBwcm9wczogWydtb2R1bGUnXSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YSA6IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgICAgICB0aGlzLiRvbignZnJlc2gnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VudCgpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBzZXRNb2R1bGUobSl7XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlID0gbTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VudCgpe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHByb3BzLm1vZHVsZSk7XG4gICAgICAgICAgICAgICAgLy8gaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHBhcmFtcyA9IHR5cGVbMl07XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZih0eXBlWzBdID09PSAnaW1hZ2UnKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ucHVzaChcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogaW1hZ2VfcGFyYW1zLndpZHRoLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQgOiBudWxsLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBpdGVtLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdsaW5rJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlua19wYXJhbXMgPSBwYXJhbXMgPyBKU09OLnBhcnNlKHBhcmFtcykgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnbGlua3MnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ2xpbmtzJ10ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFwi0KHRgdGL0LvQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rIDogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyA6IGxpbmtfcGFyYW1zID8gbGlua19wYXJhbXMuY2xhc3MgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRwcm9wcy5tb2R1bGVbJ2xpbmtzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXS5jbGFzcyA9IGxpbmtfcGFyYW1zLmNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ3RleHQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ3RleHRzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWyd0ZXh0cyddLnB1c2goe3RleHQgOiBcItCi0LXQutGB0YJcIn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdiYWNrZ3JvdW5kJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ2JhY2tncm91bmRzJ10ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogaW1hZ2VfcGFyYW1zLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6ICcvaW1hZ2VzL25vaW1hZ2UuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdpbWFnZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ2ltYWdlcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogaW1hZ2VfcGFyYW1zLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHR5cGUgPSBpdGVtLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgcGFyYW1zID0gdHlwZVsyXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdiYWNrZ3JvdW5kJyl7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ2JhY2tncm91bmRzJ10ucHVzaChcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogaW1hZ2VfcGFyYW1zLndpZHRoLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6ICcvaW1hZ2VzL25vaW1hZ2UuanBnJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rID0gaXRlbS5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaHVuayk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaCA9IHRoaXMuJHByb3BzLm1vZHVsZVtjaHVua1swXSArICdzJ11bcGFyc2VJbnQoY2h1bmtbMV0pIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IHdpbmRvd1tjaHVua1swXV0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMuJHN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNEYXRhOiB7IGNodW5rOiBjaCB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGlsZHJlbi5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJyNjaHVua18nICsgY2h1bmtbMF0gKyAnXycgKyBjaHVua1sxXSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1yLTNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2l0ZVwiIHYtc2xvdD1cInsgaHJlZiwgcm91dGUsIG5hdmlnYXRlLCBpc0FjdGl2ZSwgaXNFeGFjdEFjdGl2ZSB9XCIgY3VzdG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIiA+PGEgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwibmF2aWdhdGVcIj7Qo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0Lw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+SGVscGRlc2sgTWFuYWdlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWctYi0wIHR4LXNwYWNpbmctLTFcIj57eyBwYWdlLm5hbWUgfX08L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVcIiBjbGFzcz1cImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZVwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtbGluZVwiIGlkPVwibXlUYWJcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBpZD1cImhvbWUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2hvbWVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImhvbWVcIiBhcmlhLXNlbGVjdGVkPVwidHJ1ZVwiPtCS0LjQt9GD0LDQu9GM0L3Ri9C5INGA0LXQtNCw0LrRgtC+0YA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJwcm9maWxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNwcm9maWxlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwcm9maWxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+UHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cImNvbnRhY3QtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3Nlb1wiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiY29udGFjdFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlNFTzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBwZC15LTIwXCIgaWQ9XCJteVRhYkNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUgb3ZlcmZsb3ctaGlkZGVuXCIgaWQ9XCJob21lXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaG9tZS10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihtb2R1bGUsIGluZGV4KSBpbiBtb2R1bGVzXCIgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2R1bGVfYm94XCIgdi1iaW5kOmlkPVwiJ21vZHVsZV8nICsgaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZHVsZV9zZXR0aW5ncyBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dF9ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic3dhcChpbmRleCwgLTEpXCI+0JLQstC10YDRhTwvYnV0dG9uPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzd2FwKGluZGV4LCAxKVwiPtCS0L3QuNC3PC9idXR0b24+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiZGVsZXRlTW9kdWxlKGluZGV4KVwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY29weU1vZHVsZShpbmRleClcIj7QodC60L7Qv9C40YDQvtCy0LDRgtGMINC40Lc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZm9yPVwicGFnZSBpbiBwYWdlc1wiIEBjbGljaz1cImNvcHlNb2R1bGUocGFnZSwgbW9kdWxlLCBpbmRleClcIiA+e3sgcGFnZS5uYW1lIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kdWxlIHYtYmluZDptb2R1bGU9XCJtb2R1bGVcIj48L01vZHVsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJtb2R1bGVzX3Nob3cgPSAhbW9kdWxlc19zaG93XCIgY2xhc3M9XCJhZGRfbW9kdWxlIHBvaW50ZXIgdXNlci1zZWxlY3Qtbm9uZSBtdC00XCI+INCU0L7QsdCw0LLQuNGC0Ywg0LzQvtC00YPQu9GMPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtb2R1bGVzX3Nob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIiB2LWZvcj1cIm1vZHVsZSBpbiAkc3RvcmUuZ2V0dGVycy5tb2R1bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYXBwZW5kTW9kdWxlKG1vZHVsZSlcIj57eyBtb2R1bGUubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwicHJvZmlsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInByb2ZpbGUtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0yIG1nLXQtMTAgbWctbGctdC0wIGJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5pc1B1Ymxpc2hlZFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImlzUHVibGlzaGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJpc1B1Ymxpc2hlZFwiPiDQntC/0YPQsdC70LjQutC+0LLQsNC9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0KLQtdC60YHRgiDQvNC10L3RjjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UubWVudVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRi1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInNlb1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhY3QtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlNFTyDQt9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLnRpdGxlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU0VPINC30LDQs9C+0LvQvtCy0L7QulwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5TRU8g0L7Qv9C40YHQsNC90LjQtTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UuZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj51cmwg0YHRgtGA0LDQvdC40YbRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2Uuc2x1Z1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cInVybCDRgdGC0YDQsNC90LjRhtGLXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE1vZHVsZSBmcm9tICcuLy4uLy4uL21vZHVsZXMvTW9kdWxlJztcbiAgICBpbXBvcnQgc3R5bGVzIGZyb20gJy9wdWJsaWMvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2Nzcy9zdHlsZS5tb2R1bGUuc2Nzcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlBhZ2VcIixcbiAgICAgICAgY29tcG9uZW50czp7XG4gICAgICAgICAgICBNb2R1bGVcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6ICfQndC+0LLQsNGPINGB0YLRgNCw0L3QuNGG0LAnLFxuICAgICAgICAgICAgICAgICAgICBpc1B1Ymxpc2hlZCA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXMgOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnZV9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgdGV4dDogJzInLFxuICAgICAgICAgICAgICAgIG1vZHVsZXNfc2hvdyA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1vZHVsZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZS5tb2R1bGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnBhZ2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaCA6IHtcbiAgICAgICAgICAgICdwYWdlLnNsdWcnOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGFnZS5pZCAmJiB0aGlzLnBhZ2UuaWQgIT09IDApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2Uuc2x1ZyA9IHdpbmRvdy51cmxSdXNMYXQodmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhZ2UubmFtZSc6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5wYWdlLmlkICYmIHRoaXMucGFnZS5pZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2Uuc2x1ZyA9IHdpbmRvdy51cmxSdXNMYXQodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnRpdGxlID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfcGFnZXMnKTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfbW9kdWxlcycsIHRoaXMucGFnZV9pZCk7XG4gICAgICAgICAgICB0aGlzLnBhZ2VfaWQgPSAhIXRoaXMuJHJvdXRlLnBhcmFtcy5pZCA/IHBhcnNlSW50KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkgOiBudWxsO1xuICAgICAgICAgICAgaWYodGhpcy5wYWdlX2lkKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X3BhZ2UnLCB0aGlzLnBhZ2VfaWQpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJGVtaXQoJ3RpdGxlU2V0JywgdGhpcy4kc3RvcmUuZ2V0dGVycy5wYWdlKHRoaXMucGFnZV9pZCkudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHQgPSB4LmluY2x1ZGVzKOKAnGh0bWzigJ0pXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRfbW9kdWxlX2NodW5rKDEsIDEsICd0ZXh0JywgMSkpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhcHBlbmRNb2R1bGUobW9kdWxlKXtcbiAgICAgICAgICAgICAgICBsZXQgbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmFuayA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlIDogbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVfdGVtcGxhdGVfaWQgOiBtb2R1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0cyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBsaW5rcyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kcyA6IFtdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMucHVzaChtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2FwKGluZGV4X0EsIGRpcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4X0EsIGRpciwgKGluZGV4X0EgKyBkaXIpKTtcblxuXG5cblxuICAgICAgICAgICAgICAgIGlmKGluZGV4X0EgKyBkaXIgPD0gMCB8fCBpbmRleF9BICsgZGlyID49IHRoaXMucGFnZS5tb2R1bGVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9BICsgZGlyXSA9IHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleF9BLGluZGV4X0EgKyBkaXIsIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0EgKyBkaXJdKVtpbmRleF9BXTtcblxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGVtcCA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0FdO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2UubW9kdWxlcy5zcGxpY2UoaW5kZXhfQSwgMSwgdGVtcCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleF9BICsgZGlyLCAxLCB0ZW1wKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbGVtXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kdWxlXycgKyBpbmRleF9BKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVsZW1fMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2R1bGVfJyArIChpbmRleF9BICsgZGlyKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1fMS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtXzIsIGVsZW1fMS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsZXQgbSA9IHRoaXMucGFnZS5tb2R1bGVzO1xuICAgICAgICAgICAgICAgIC8vIGxldCB0ZW1wID0gdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhfQV07XG4gICAgICAgICAgICAgICAgLy8gbVtpbmRleF9BXSA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0JdO1xuICAgICAgICAgICAgICAgIC8vIG1baW5kZXhfQl0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucGFnZS5tb2R1bGVzID0gbTtcbiAgICAgICAgICAgICAgICAvLyBtLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFwcGVuZE1vZHVsZShtb2R1bGUpO1xuICAgICAgICAgICAgICAgIC8vICAgICAvL3RoaXMucGFnZS5tb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLiRjaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4geyByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gXCJNb2R1bGVcIjsgfSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaXRlbS5zZXRNb2R1bGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaXRlbS4kZW1pdCgnZnJlc2gnKTtcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZU1vZHVsZShpbmRleCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3B5TW9kdWxlKHBhZ2UsIG1vZHVsZSwgaW5kZXgpe1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBwYWdlLm1vZHVsZXMuZmlsdGVyKChtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnRlbXBsYXRlLmlkID09PSBtb2R1bGUudGVtcGxhdGUuaWQ7XG4gICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdID0gZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3ZlTW9kdWxlKGluZGV4LCBkaXIpe1xuICAgICAgICAgICAgICAgIGlmKGluZGV4ICsgZGlyID09PSAwIHx8IGluZGV4ICsgZGlyID4gdGhpcy5wYWdlLm1vZHVsZXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9bdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXggKyBkaXJdLCB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF1dID0gW3RoaXMucGFnZS5tb2R1bGVzW2luZGV4XSwgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXggKyBkaXJdXTtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnBhZ2UubW9kdWxlcy5wdXNoKHRoaXMucGFnZS5tb2R1bGVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wYWdlLm1vZHVsZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbSA9IHRoaXMucGFnZS5tb2R1bGVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBtW2luZGV4XSA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4ICsgZGlyXTtcbiAgICAgICAgICAgICAgICAgICAgbVtpbmRleCArIGRpcl0gPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzID0gbTtcblxuICAgICAgICAgICAgICAgICAgICAvL2VsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbSwgZWxlbS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJGNoaWxkcmVuWzBdLiRvcHRpb25zLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4geyByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gXCJNb2R1bGVcIjsgfSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLiRlbWl0KCdmcmVzaCcpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlKCl7XG4gICAgICAgICAgICAgICAgLy90aGlzLnByb2R1Y3QuY2F0ZWdvcnlfaWQgPSAhIXRoaXMuY2F0ZWdvcnkgPyB0aGlzLmNhdGVnb3J5LmlkIDogMDtcblxuICAgICAgICAgICAgICAgIGxldCBtZXRob2QgPSAhIXRoaXMucGFnZS5pZCA/ICd1cGRhdGVfcGFnZScgOiAnc3RvcmVfcGFnZSc7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2R1Y3QuaW1hZ2VzID0gdGhpcy5pbWFnZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChtZXRob2QsIHRoaXMucGFnZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3BhZ2VzJ30pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAuYWRkX21vZHVsZXtcbiAgICAgICAgYm9yZGVyOiA0cHggZGFzaGVkICNlZWVlZWU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNjN2MzYzM7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmO1xuICAgIH1cbiAgICAuY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxuICAgIC5tb2R1bGVfc2V0dGluZ3N7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9pY29ucy9zbGlkZXJzLnN2ZykgY2VudGVyIG5vLXJlcGVhdCAjZmZmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDUwMG1zIGFsbDtcbiAgICB9XG4gICAgLm1vZHVsZV9ib3g6aG92ZXIgLm1vZHVsZV9zZXR0aW5nc3tcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICAgIC5zZXR0X2JveHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9kdWxlX3NldHRpbmdzOmhvdmVyIC5zZXR0X2JveHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIC5pbm5lcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgfVxuICAgIH1cblxuPC9zdHlsZT5cbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMjBweCA4NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByaW1hcnkge1xcbiAgYmFja2dyb3VuZDogIzU2QUYxQTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXG59XFxuXFxuLnB0LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4ubXQtNjAge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLm1iLTMwIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jb2wtbGctMSB7XFxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMiB7XFxuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0zIHtcXG4gICAgZmxleDogMCAwIDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTQge1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNSB7XFxuICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy02IHtcXG4gICAgZmxleDogMCAwIDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLWxnLTcge1xcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOCB7XFxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy05IHtcXG4gICAgZmxleDogMCAwIDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEwIHtcXG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTExIHtcXG4gICAgZmxleDogMCAwIDkxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEyIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLmNvbC0xLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbCwgLmNvbC1hdXRvLCAuY29sLXNtLTEsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLCAuY29sLXNtLWF1dG8sIC5jb2wtbWQtMSwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQsIC5jb2wtbWQtYXV0bywgLmNvbC1sZy0xLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZywgLmNvbC1sZy1hdXRvLCAuY29sLXhsLTEsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLCAuY29sLXhsLWF1dG8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVyaUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01lcnJpd2VhdGhlci1Cb2xkLnR0ZlwiKSkgKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiKSkgKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LUJvbGQudHRmXCIpKSArIFwiKTtcXG59XFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2ItcGFkZGluZyB7XFxuICBwYWRkaW5nOiA4NHB4IDExNHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi13aWR0aDogMTIzMHB4O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50ZW1wbGF0ZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRlbXBsYXRlIGgxIHAge1xcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcbi50ZW1wbGF0ZSBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaDIgcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxufVxcbi50ZW1wbGF0ZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmljb19pbWcge1xcbiAgd2lkdGg6IDcycHg7XFxuICBoZWlnaHQ6IDcycHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmljb19pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIuZnVsbHNpemUge1xcbiAgbWluLWhlaWdodDogMTA4MHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyLmZ1bGxzaXplIC5pY29faW1nIHtcXG4gIHdpZHRoOiA5NHB4O1xcbiAgaGVpZ2h0OiA5NHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC50cmFzcF9ib3gge1xcbiAgcGFkZGluZzogNzBweDtcXG4gIG1hcmdpbi1yaWdodDogLTcwcHg7XFxuICBtYXJnaW4tbGVmdDogLTcwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMTUzNTAwNjA7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAudHJhc3BfYm94IC5pY29faW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzk1cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnBob25lX2hlYWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJ1cmdlci1tZW51IHtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9idXJnZXIucG5nKSBuby1yZXBlYXQgbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUgLnRvcF9jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmhlYWRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxfc2lkZSwgLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIHtcXG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjM0cHgpIC8gMik7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDc0cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubGlua3MgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5sX3NpZGUgLmxpbmtzIHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIC5saW5rcyB1bCB7XFxuICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUgLmxpbmtzIHVsIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5iZ19pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDk2MHB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5iZ19pbWFnZSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQ6ICMyOTU3MEI7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC50YWJfY29udCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzOEIxMztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzU2QUYxQTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAudGFiX2NvbnQgLnRiIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNTZBRjFBO1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IGE6aG92ZXIge1xcbiAgY29sb3I6ICM1NkFGMUE7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBhOmhvdmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogLTRweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZBRjFBO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290X21lbnUgbGkge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmNvcHkge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXRvcDogODZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290ZXJfYWRkcyB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRzX2JveCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2l0ZW0gYSB7XFxuICBjb2xvcjogIzRGNEY0RjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2l0ZW0gcCB7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4OTYxMztcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9pdGVtOmhvdmVyIGEge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIGgxIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfZGVzY3Ige1xcbiAgaGVpZ2h0OiAxNDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzRGNEY0RjtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICM1NkFGMUE7XFxuICBwYWRkaW5nOiA1N3B4IDM3cHg7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xcbiAgcGFkZGluZzogNjBweCA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGwgaDMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzRGNEY0RjtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAucGljX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMnB4O1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC5waWNfY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCBsYWJlbCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgyODI4MjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyBoMiB7XFxuICBwYWRkaW5nOiAwIDExNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjhweDtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAuYWxsX2NhdGFsb2d1ZSBhIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAuZXgtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTkyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5leC1jb250YWluZXIgLmV4X2Jsb2NrIHtcXG4gIGhlaWdodDogMzE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1iYXNpczogY2FsYygxNi42NjY2NjYlIC0gOHB4KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuaWNvX2ltZyB7XFxuICB3aWR0aDogNzJweDtcXG4gIGhlaWdodDogNzJweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmljb19pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC53aGl0ZV9ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIGgyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5kZWNvcl9pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTEwcHg7XFxuICByaWdodDogMTlweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSBoMiB7XFxuICBwYWRkaW5nOiAwIDExNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjhweDtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmFsbF9jYXRhbG9ndWUge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmFsbF9jYXRhbG9ndWUgYSB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2sge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMzEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2sgYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuY2F0X2Jsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9ncmFkLnBuZykgcmVwZWF0LXggbGVmdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hZGRfbW9kdWxlW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgYm9yZGVyOiA0cHggZGFzaGVkICNlZWVlZWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjYzdjM2MzO1xcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xcbiAgei1pbmRleDogOTk5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmY7XFxufVxcbi5jb250YWluZXJbZGF0YS12LTkwOTAwYjFlXSB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3NbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvaWNvbnMvc2xpZGVycy5zdmcpIGNlbnRlciBuby1yZXBlYXQgI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGFsbDtcXG59XFxuLm1vZHVsZV9ib3g6aG92ZXIgLm1vZHVsZV9zZXR0aW5nc1tkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDBweDtcXG59XFxuLnNldHRfYm94W2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3hbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcbiAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94IC5pbm5lcltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZHVsZVwiLFxuICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wYXJzZShfdm0ubW9kdWxlKSkgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0zXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0xMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcIm5hdlwiLCB7IGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBcImJyZWFkY3J1bWJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJvbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYiBicmVhZGNydW1iLXN0eWxlMSBtZy1iLTEwXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL3NpdGVcIiwgY3VzdG9tOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0L/RgNCw0LLQu9C10L3QuNC1INGB0LDQudGC0L7QvFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJIZWxwZGVzayBNYW5hZ2VtZW50XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWctYi0wIHR4LXNwYWNpbmctLTFcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhZ2UubmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLW5vbmUgZC1tZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcItCh0L7RhdGA0LDQvdC40YLRjFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnQgcGQteS0yMFwiLCBhdHRyczogeyBpZDogXCJteVRhYkNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlIG92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImhvbWUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRlbXBsYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubW9kdWxlcywgZnVuY3Rpb24obW9kdWxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2R1bGVfYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJtb2R1bGVfXCIgKyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2R1bGVfc2V0dGluZ3MgbXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRfYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbm5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVNb2R1bGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C00LDQu9C40YLRjFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb3B5TW9kdWxlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQutC+0L/QuNGA0L7QstCw0YLRjCDQuNC3XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGFnZXMsIGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29weU1vZHVsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwYWdlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIk1vZHVsZVwiLCB7IGF0dHJzOiB7IG1vZHVsZTogbW9kdWxlIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmUgbXQtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2R1bGVzX3Nob3cgPSAhX3ZtLm1vZHVsZXNfc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiDQlNC+0LHQsNCy0LjRgtGMINC80L7QtNGD0LvRjFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZHVsZXNfc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uJHN0b3JlLmdldHRlcnMubW9kdWxlcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zaXRpb24tcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hcHBlbmRNb2R1bGUobW9kdWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobW9kdWxlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwicHJvZmlsZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMiBtZy10LTEwIG1nLWxnLXQtMCBiclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLmlzUHVibGlzaGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UuaXNQdWJsaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImlzUHVibGlzaGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucGFnZS5pc1B1Ymxpc2hlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnBhZ2UuaXNQdWJsaXNoZWQsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ucGFnZS5pc1B1Ymxpc2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucGFnZS5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc1B1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc1B1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcImlzUHVibGlzaGVkXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlzUHVibGlzaGVkXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiDQntC/0YPQsdC70LjQutC+0LLQsNC9XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCi0LXQutGB0YIg0LzQtdC90Y5cIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5tZW51IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwibWVudVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1INC80YLRgNCw0L3QuNGG0YtcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCd0LDQt9Cy0LDQvdC40LUg0LzRgtGA0LDQvdC40YbRi1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJzZW9cIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiY29udGFjdC10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNFTyDQt9Cw0LPQvtC70L7QstC+0LpcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU0VPINC30LDQs9C+0LvQvtCy0L7QulwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UudGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJ0aXRsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNFTyDQvtC/0LjRgdCw0L3QuNC1XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNFTyDQvtC/0LjRgdCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcInVybCDRgdGC0YDQsNC90LjRhtGLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2Uuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2Uuc2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJ1cmwg0YHRgtGA0LDQvdC40YbRi1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2Uuc2x1ZyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcInNsdWdcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgbmF2LWxpbmVcIiwgYXR0cnM6IHsgaWQ6IFwibXlUYWJcIiwgcm9sZTogXCJ0YWJsaXN0XCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmsgYWN0aXZlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiaG9tZS10YWJcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjaG9tZVwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcInRydWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCS0LjQt9GD0LDQu9GM0L3Ri9C5INGA0LXQtNCw0LrRgtC+0YBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwicHJvZmlsZS10YWJcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjcHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwicHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJQcm9maWxlXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImNvbnRhY3QtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI3Nlb1wiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiY29udGFjdFwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTRU9cIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4vc3R5bGUubW9kdWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4vc3R5bGUubW9kdWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01lcnJpd2VhdGhlci1Cb2xkLnR0Zj85Y2NiODg1YzljZjhlNTAzZDU1N2YxNWUwYjJjYmYyNFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTW9udHNlcnJhdC1Cb2xkLnR0Zj9hZGU5MWY0NzMyNTU5OTFmNDEwZjYxODU3Njk2NDM0YlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmP2M4YjZlMDgzYWYzZjk0MDA5ODAxOTg5YzM3Mzk0MjVlXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmP2VlNjUzOTkyMWQ3MTM0ODJiOGNjZDRkMGQyMzk2MWJiXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcGFyc2UobW9kdWxlKXtcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSBtb2R1bGUudGVtcGxhdGUuaHRtbDtcclxuICAgICAgICAgICAgbGV0IHRhZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGh0bWxbaV0gPT09IFwiW1wiICYmIGh0bWxbaSsxXSA9PT0gXCJbXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnX2luZGV4ID0gaSsyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaHRtbFt0YWdfaW5kZXhdICE9PSAnXScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgKz0gaHRtbFt0YWdfaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdfaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0YWcgIT09ICd0b2tlbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzLnB1c2godGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YWdfc3BsaXRlZCA9IHRhZy5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgnW1snICsgdGFnICsgJ11dJywgJzxkaXYgaWQ9XCJjaHVua18nICsgdGFnX3NwbGl0ZWRbMF0gKyAnXycgKyB0YWdfc3BsaXRlZFsxXSArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudGFncyA9IHRhZ3M7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwM2U0OWIxZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAzZTQ5YjFmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAzZTQ5YjFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAzZTQ5YjFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzZTQ5YjFmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAzZTQ5YjFmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzZTQ5YjFmJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjkwOTAwYjFlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTA5MDBiMWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTA5MDBiMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTA5MDBiMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzkwOTAwYjFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=