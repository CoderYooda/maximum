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

          if (!_this2.$props.module['backgrounds'][parseInt(type[1]) - 1] && _this2.$props.module['backgrounds'][parseInt(type[1]) - 1].image !== 'null') {
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

        if (chunk[0] !== 'settings' && chunk.length > 1) {
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
        }
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
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var m = {
        rank: null,
        template: module,
        module_template_id: module.id,
        images: [],
        texts: [],
        links: [],
        backgrounds: []
      };

      if (index === null) {
        this.page.modules.push(m);
      } else {
        this.page.modules.splice(index, 0, m);
        this.$forceUpdate();
      }
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
exports.push([module.i, "@charset \"UTF-8\";\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.button {\n  padding: 20px 84px;\n  border-radius: 6px;\n  border: 0;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.primary {\n  background: #56AF1A;\n  color: #fff !important;\n}\n\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.container_small {\n  max-width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.pt-20 {\n  padding-top: 20px;\n}\n\n.mt-60 {\n  margin-top: 60px;\n}\n\n.mb-30 {\n  margin-bottom: 30px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@font-face {\n  font-family: \"MeriBold\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Merriweather-Bold.ttf */ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf")) + ");\n}\n.w-100 {\n  width: 100%;\n}\n\n.wb-padding {\n  padding: 84px 114px;\n}\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #489613;\n  background-color: #fff;\n  border: 1px solid #cdd4e0;\n  text-decoration: none;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #0148ae;\n  text-decoration: none;\n  background-color: #e3e7ed;\n  border-color: #cdd4e0;\n}\n\n.page-link:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(1, 104, 250, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #489613;\n  border-color: #489613;\n}\n\n.page-item.disabled .page-link {\n  color: #7987a1;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #cdd4e0;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.09375rem;\n  line-height: 1.5;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.76562rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #F5F5F5;\n}\n\nhtml {\n  min-width: 1230px;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.all_img_width img {\n  width: 100%;\n}\n\n.template {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 16px;\n  color: #333333;\n}\n.template a {\n  color: #55A321;\n}\n.template .flex-div {\n  display: flex;\n}\n.template h1 {\n  font-family: \"MeriBold\";\n  font-size: 72px;\n  font-weight: bold;\n  line-height: 60px;\n}\n.template h1 p {\n  padding-bottom: 0 !important;\n  color: #FFFFFF;\n  line-height: 60px;\n}\n.template h2 {\n  font-family: \"MeriBold\";\n  font-size: 36px;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.template h2 p {\n  padding-bottom: 0 !important;\n  line-height: 58px;\n}\n.template .vacancy_cell ol {\n  list-style: disc;\n}\n.template .req_table td {\n  white-space: break-spaces;\n}\n.template .font-weight-bold {\n  font-weight: bold;\n}\n.template p {\n  padding: 0;\n  margin: 0;\n  padding-bottom: 1em !important;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n}\n.template .only_text {\n  position: relative;\n}\n.template .only_header {\n  position: relative;\n}\n.template .only_header h1, .template .only_header h1 p {\n  font-size: 72px;\n  font-weight: bold;\n  line-height: 60px;\n  color: #333333;\n  font-size: 46px;\n}\n.template .dd {\n  position: relative;\n}\n.template .dd .dd_menu {\n  display: none;\n  position: absolute;\n  z-index: 9999999;\n}\n.template .dd .dd_menu ul {\n  list-style: none;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);\n  padding: 0 30px;\n  display: block;\n  margin-top: 15px;\n}\n.template .dd .dd_menu ul:before {\n  content: \"\";\n  position: absolute;\n  left: 30px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background: #fff;\n  transform: rotateZ(45deg);\n}\n.template .dd .dd_menu ul li {\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n}\n.template .dd .dd_menu ul a {\n  color: #333333;\n  line-height: 64px;\n  border-bottom: 1px solid #eee;\n  width: 100%;\n  display: block;\n  white-space: nowrap;\n  min-width: 140px;\n}\n.template .dd:hover .dd_menu {\n  display: block !important;\n}\n.template .vacancy_text {\n  width: 580px;\n  margin: 0 auto;\n}\n.template .vacancy_text .cont {\n  margin-top: 40px;\n}\n.template .vacancy_text img {\n  width: 100%;\n}\n.template .vacancy_cell .name {\n  background: #489613;\n  height: 64px;\n  line-height: 64px !important;\n  padding: 0 30px;\n  color: #fff;\n}\n.template .vacancy_cell .content_thin {\n  padding: 30px;\n}\n.template header {\n  position: relative;\n  height: 320px;\n  color: #FFFFFF;\n  font-weight: 500;\n  background-position: center;\n  background-size: cover;\n}\n.template header .top_container a {\n  text-decoration: none;\n  color: #fff;\n}\n.template header .ico_img {\n  width: 72px;\n  height: 72px;\n}\n.template header .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template header h1 {\n  margin-top: 70px;\n}\n.template header.fullsize {\n  min-height: 1080px;\n}\n.template header.fullsize .ico_img {\n  width: 94px;\n  height: 94px;\n}\n.template header.fullsize h1 p {\n  line-height: 86px;\n}\n.template header .trasp_box {\n  padding: 70px;\n  margin-right: -70px;\n  margin-left: -70px;\n  background: #15350060;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  font-weight: 400;\n  margin-top: 70px;\n}\n.template header .trasp_box .ico_img {\n  margin-bottom: 20px;\n}\n.template header .bg {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  height: 1395px;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  pointer-events: none;\n}\n.template header .phone_head {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.template header .burger-menu {\n  background: url(/templates/maximum/assets/img/burger.png) no-repeat left;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  cursor: pointer;\n}\n.template header .r_side .top_container {\n  text-align: right;\n}\n.template header .head_container {\n  display: flex;\n}\n.template header .l_side, .template header .r_side {\n  width: calc((100% - 234px) / 2);\n}\n.template header .links {\n  margin-top: 74px;\n}\n.template header .links a {\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  letter-spacing: 0.04em;\n}\n.template header .links ul {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.template header .l_side .links ul li {\n  margin-right: 30px;\n}\n.template header .r_side .links ul {\n  flex-flow: row-reverse;\n}\n.template header .r_side .links ul li {\n  margin-left: 30px;\n}\n.template header .bg_image {\n  position: absolute;\n  left: calc(50% - 960px);\n  height: 100%;\n  top: 0;\n  z-index: -1;\n}\n.template header .bg_image img {\n  display: block;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template footer {\n  margin-top: 100px;\n  background: #29570B;\n  padding-bottom: 60px;\n  padding-top: 60px;\n  position: relative;\n}\n.template footer .tab_cont {\n  border-bottom: 1px solid #438B13;\n  font-size: 18px;\n  font-weight: 600;\n  color: #56AF1A;\n}\n.template footer .tab_cont .tb {\n  border-bottom: 4px solid #56AF1A;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  line-height: 40px;\n  margin-bottom: -1px;\n}\n.template footer .foot_menu {\n  list-style: none;\n  padding: 0;\n  color: #fff;\n}\n.template footer .foot_menu a {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  line-height: 30px;\n  position: relative;\n}\n.template footer .foot_menu a:hover {\n  color: #56AF1A;\n}\n.template footer .foot_menu a:hover:after {\n  content: \"\";\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  bottom: -4px;\n  left: 0;\n  background-color: #56AF1A;\n}\n.template footer .foot_menu li {\n  margin: 20px 0;\n}\n.template footer .copy {\n  color: #fff;\n  padding-top: 86px;\n  display: block;\n}\n.template footer .footer_adds {\n  margin-top: 40px;\n}\n.template .product {\n  position: relative;\n}\n.template .product h1 {\n  font-size: 46px;\n}\n.template .product .product-image img {\n  width: 100%;\n  display: block;\n}\n.template .product .product-description {\n  background: #fff;\n  padding: 30px;\n  border-radius: 6px;\n}\n.template .product .price {\n  font-weight: bold;\n  font-size: 32px;\n  margin-top: 30px;\n}\n.template .new {\n  position: relative;\n  margin-bottom: 160px;\n}\n.template .new h1 {\n  font-size: 46px;\n}\n.template .new .new-image img {\n  width: 100%;\n  display: block;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .new .new-description {\n  background: #fff;\n  padding: 30px;\n  border-radius: 6px;\n  margin-bottom: 30px;\n}\n.template .new .date {\n  margin-bottom: 30px;\n}\n.template .left_menu {\n  position: relative;\n}\n.template .left_menu h1 {\n  font-size: 46px;\n  margin-bottom: 50px;\n}\n.template .left_menu h1 p {\n  color: #333333;\n}\n.template .left_menu .round-73 {\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n}\n.template .left_menu .client_img {\n  width: 100%;\n  margin-bottom: 25px;\n}\n.template .left_menu .img_wh {\n  display: block;\n  margin-bottom: 20px;\n}\n.template .left_menu .name_thin {\n  line-height: 24px;\n}\n.template .left_menu .name, .template .left_menu .city {\n  font-weight: 600;\n  line-height: 24px;\n  margin-bottom: 15px;\n}\n.template a.n-dec {\n  text-decoration: none;\n}\n.template .white_cell {\n  background: #FFFFFF;\n  border: 1px solid #E0E0E0;\n  padding: 30px;\n}\n.template .сlient_cell {\n  margin-bottom: 30px;\n}\n.template .deliv {\n  width: 680px;\n  margin: 0 auto;\n}\n.template .deliv .deliver img {\n  width: 120px;\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.template .deliv .deliver .descr {\n  text-align: center;\n}\n.template .info_cont .about_block {\n  padding: 30px 0px;\n}\n.template .fullsize .white_cell:before {\n  content: \"\";\n  position: absolute;\n  height: 313px;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left !important;\n}\n.template .fullsize .white_cell h3 {\n  color: #fff !important;\n}\n.template .fullsize .white_cell .date {\n  color: #fff !important;\n}\n.template .fullsize img {\n  width: 100% !important;\n  height: 100% !important;\n}\n.template .fullsize .news-cont {\n  position: absolute !important;\n  width: 100% !important;\n  bottom: 0;\n  height: auto !important;\n}\n.template .fullsize .news-cont:after {\n  content: none;\n  display: none;\n}\n.template .fullsize .new-descr {\n  display: none;\n}\n.template .white_cell.news {\n  padding: 0px;\n  margin-bottom: 30px;\n  height: 400px;\n  position: relative;\n}\n.template .white_cell.news:hover {\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);\n}\n.template .white_cell.news .news-cont {\n  padding: 20px;\n  height: calc(100% - 130px);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.template .white_cell.news .news-cont .date {\n  color: #333333;\n}\n.template .white_cell.news .news-cont:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 20px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/gradw.png);\n}\n.template .white_cell.news img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  margin-bottom: 0px;\n  display: block;\n}\n.template .white_cell.news .new-descr {\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n  height: auto;\n}\n.template .white_cell.news h3 {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .white_cell.news .name_thin {\n  padding: 20px;\n}\n.template .white_cell.actions {\n  position: relative;\n  padding: 0px;\n  width: 688px;\n  height: 405px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n}\n.template .white_cell.actions img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  display: block;\n}\n.template .pr_container .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  padding: 70px 100px;\n  width: 100%;\n}\n.template .pr_container .prices h2 {\n  font-family: \"Montserrat\";\n  font-weight: bold;\n  font-size: 28px;\n}\n.template .pr_container .prices table {\n  border-spacing: 0;\n  margin-bottom: 50px;\n}\n.template .pr_container .prices table tr, .template .pr_container .prices table td, .template .pr_container .prices table th {\n  text-align: left;\n  border: 0;\n  line-height: 42px;\n}\n.template .pr_container .prices table .b-bot td {\n  border-bottom: 1px dashed #828282;\n}\n.template .pr_container .prices table th {\n  border-bottom: 2px solid #000;\n  line-height: 38px;\n}\n.template .aside_menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #fff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);\n}\n.template .aside_menu ul li.active {\n  background: #489613;\n}\n.template .aside_menu ul li.active a {\n  color: #fff;\n}\n.template .aside_menu ul a {\n  line-height: 64px;\n  margin: 0 30px;\n  border-bottom: 1px dashed #BDBDBD;\n  display: block;\n  color: #4F4F4F;\n  text-decoration: none;\n  font-weight: 500;\n}\n.template .req_table tr {\n  line-height: 24px;\n}\n.template .req_table tr td {\n  border-bottom: 1px dashed #BDBDBD;\n  padding: 10px 0;\n}\n.template .req_table tr > td:first-child {\n  white-space: nowrap;\n  padding-right: 40px;\n  font-weight: bold;\n  vertical-align: top;\n}\n.template .map {\n  margin-top: 80px;\n}\n.template #map {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  height: 460px;\n}\n.template .shop_categories {\n  position: relative;\n}\n.template .shop_categories .cats_box {\n  background: #fff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);\n}\n.template .shop_categories .cat_item a {\n  color: #4F4F4F;\n  display: block;\n}\n.template .shop_categories .cat_item p {\n  line-height: 24px;\n  padding: 20px 30px !important;\n}\n.template .shop_categories .cat_item:hover {\n  background-color: #489613;\n}\n.template .shop_categories .cat_item:hover a {\n  color: #fff;\n}\n.template .shop_categories h1 {\n  font-size: 46px;\n}\n.template .shop_categories a {\n  text-decoration: none;\n}\n.template .shop_categories .cat_descr {\n  height: 144px;\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell:hover {\n  border: 4px solid #56AF1A;\n  padding: 57px 37px;\n  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.1);\n}\n.template .shop_categories .cat_cell:hover:after {\n  bottom: 57px;\n}\n.template .shop_categories .cat_description {\n  background: #fff;\n  padding: 30px;\n  border: 1px solid #E0E0E0;\n}\n.template .shop_categories .no-items {\n  text-align: center;\n  width: 100%;\n  font-weight: bold;\n  background: #fff;\n  padding: 22px;\n}\n.template .shop_categories .cat_cell, .template .shop_categories .product_cell {\n  background: #fff;\n  border: 1px solid #E0E0E0;\n  padding: 60px 40px;\n  display: flex;\n  flex-direction: column;\n  height: 440px;\n  position: relative;\n}\n.template .shop_categories .cat_cell:after, .template .shop_categories .product_cell:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 60px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/gradw.png);\n}\n.template .shop_categories .cat_cell h3, .template .shop_categories .product_cell h3 {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell img, .template .shop_categories .product_cell img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .shop_categories .cat_description {\n  margin-top: 60px;\n}\n.template .shop_categories .product_cell {\n  padding: 30px 30px !important;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  height: 440px;\n  position: relative;\n}\n.template .shop_categories .product_cell:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 30px;\n  left: 0;\n  background: url(\"/templates/maximum/assets/img/gradw.png\");\n}\n.template .shop_categories .cat_descr {\n  height: auto;\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n}\n.template .about_us {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .about_us .pic_container {\n  margin-right: 102px;\n}\n.template .about_us .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .about_us .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .about_us .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .about_us .text_container .about_block h2 {\n  width: 100%;\n}\n.template .about_us .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .inter {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .inter ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .inter .pic_container {\n  margin-left: 102px;\n  position: relative;\n}\n.template .inter .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: -25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .inter .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .inter .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .inter .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .inter .text_container .about_block h2 {\n  width: 100%;\n}\n.template .inter .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .inter .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .inter .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .map_link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .left_pic {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .left_pic .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .left_pic .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .left_pic .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .left_pic .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .left_pic .text_container .about_block h2 {\n  width: 100%;\n}\n.template .left_pic .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .left_pic .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .left_pic .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .contact {\n  margin-top: 40px;\n  position: relative;\n  display: flex;\n}\n.template .contact .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .contact .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .contact .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .contact .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .contact .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .contact .text_container .about_block h2 {\n  width: 100%;\n}\n.template .contact .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .contact .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .contact .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .left_pic3 {\n  margin-top: 100px;\n  position: relative;\n}\n.template .left_pic3 .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .left_pic3 .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic3 h3 {\n  margin-bottom: 0px;\n}\n.template .left_pic3 .pic_container.right {\n  margin-left: 102px !important;\n  margin-right: 0px !important;\n  position: relative;\n}\n.template .left_pic3 .pic_container.right:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: -25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic3 .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .left_pic3 .info_cont {\n  margin-top: 60px;\n}\n.template .left_pic3 .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .left_pic3 .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .left_pic3 .text_container .about_block h2 {\n  width: 100%;\n}\n.template .left_pic3 .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .left_pic3 .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .left_pic3 .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .callback_block {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .callback_block .pic_container {\n  margin-right: 102px;\n}\n.template .callback_block .pic_container img {\n  height: 100%;\n  width: 511px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .callback_block .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .callback_block .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .callback_block .text_container .about_block h2 {\n  width: 100%;\n}\n.template .callback_block .text_container .about_block .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .callback_block .text_container .about_block .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .callback_block .text_container .about_block .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .examples {\n  margin-top: 100px;\n  position: relative;\n}\n.template .examples h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .examples .all_catalogue a {\n  margin: auto;\n}\n.template .examples .ex-container {\n  max-width: 1920px;\n  display: flex;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.template .examples .ex-container .ex_block {\n  height: 316px;\n  display: flex;\n  flex-basis: calc(16.666666% - 8px);\n  justify-content: center;\n  flex-direction: column;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 4px;\n  position: relative;\n}\n.template .only_text {\n  margin-top: 20px;\n}\n.template .only_text .first_text {\n  margin-bottom: 40px;\n}\n.template .only_text ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .only_text .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .only_text h3 {\n  margin: 0;\n}\n.template .only_text h3 p {\n  padding: 0 !important;\n}\n.template .only_text .pic_container.left {\n  margin-right: 100px;\n}\n.template .only_text .pic_container.right {\n  margin-left: 100px;\n}\n.template .benefits_left {\n  margin-top: 150px;\n  position: relative;\n}\n.template .benefits_left .first_text {\n  margin-bottom: 40px;\n}\n.template .benefits_left .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .benefits_left h3 {\n  margin: 0;\n}\n.template .benefits_left h3 p {\n  padding: 0 !important;\n}\n.template .benefits_left .pic_container.left {\n  margin-right: 100px;\n}\n.template .benefits_left .pic_container.right {\n  margin-left: 100px;\n}\n.template .benefits_left h2 {\n  margin-bottom: 40px;\n}\n.template .benefits_left ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .benefits_left #callback {\n  padding-right: 50px;\n}\n.template .benefits_left .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits_left .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits_left .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits_left h2 {\n  display: block;\n}\n.template .benefits_left .decor_img {\n  position: absolute;\n  top: -110px;\n  left: 19px;\n}\n.template .benefits_left .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits_left .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits_left .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits_left .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits_left .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits_left .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits_left .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .benefits3 {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits3 h2 {\n  margin-bottom: 60px;\n}\n.template .benefits3 #callback {\n  padding-right: 50px;\n}\n.template .benefits3 .ic_label {\n  align-items: center;\n  justify-content: center;\n}\n.template .benefits3 .ico_img {\n  width: 102px;\n  height: 102px;\n  margin-bottom: 20px;\n  min-width: 102px;\n  margin-right: 22px;\n}\n.template .benefits3 .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits3 .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits3 h2 {\n  display: block;\n}\n.template .benefits3 .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits3 .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits3 .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits3 .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits3 .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits3 .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits3 .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits3 .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .benefits {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits h2 {\n  margin-bottom: 60px;\n}\n.template .benefits #callback {\n  padding-right: 50px;\n}\n.template .benefits .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits h2 {\n  display: block;\n}\n.template .benefits .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .catalogue {\n  margin-top: 100px;\n  position: relative;\n}\n.template .catalogue h1 {\n  font-family: \"MeriBold\";\n  font-size: 46px;\n  font-weight: bold;\n  color: #333333;\n}\n.template .catalogue h1 p {\n  color: #333333;\n}\n.template .catalogue h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .catalogue .all_catalogue {\n  margin-top: 30px;\n}\n.template .catalogue .all_catalogue a {\n  margin: auto;\n}\n.template .catalogue .cat_block {\n  border-radius: 8px;\n  padding: 30px;\n  height: 312px;\n  margin-bottom: 30px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  position: relative;\n}\n.template .catalogue .cat_block a {\n  align-self: flex-end;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  z-index: 99;\n}\n.template .catalogue .cat_block:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left;\n  pointer-events: none;\n  border-radius: 8px;\n}", ""]);

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
exports.push([module.i, ".modules_pick_cont[data-v-90900b1e] {\n  background: #fff;\n  z-index: 9999;\n  width: 100%;\n  margin-bottom: 40px;\n  position: relative;\n}\n.modules_pick_cont > div[data-v-90900b1e] {\n  display: inline-block;\n  border: 1px solid #eee;\n  padding: 10px;\n  width: 20%;\n  cursor: pointer;\n}\n.add_module[data-v-90900b1e] {\n  border: 4px dashed #eeeeee;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  color: #c7c3c3;\n  line-height: 50px;\n  margin: 40px 0;\n  z-index: 999;\n  position: relative;\n  background: #ffff;\n}\n.container[data-v-90900b1e] {\n  width: 200px;\n}\n.module_settings[data-v-90900b1e] {\n  position: absolute;\n  top: 20px;\n  opacity: 0;\n  left: calc(50% - 15px);\n  z-index: 99999;\n  border: 2px solid #eee;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: url(/images/icons/sliders.svg) center no-repeat #fff;\n  cursor: pointer;\n  transition: 500ms all;\n}\n.module_box:hover .module_settings[data-v-90900b1e] {\n  opacity: 1;\n  top: 0px;\n}\n.sett_box[data-v-90900b1e] {\n  position: absolute;\n  display: none;\n}\n.module_settings:hover .sett_box[data-v-90900b1e] {\n  position: absolute;\n  display: block;\n  width: 200px;\n  left: calc(50% - 100px);\n  padding-top: 40px;\n}\n.module_settings:hover .sett_box .inner[data-v-90900b1e] {\n  background: #fff;\n  padding: 10px;\n  border-radius: 8px;\n  border: 2px solid #eee;\n}\n.module_settings:hover .sett_box .inner button[data-v-90900b1e] {\n  width: 100%;\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n}\n.module_settings:hover .sett_box .inner .pages[data-v-90900b1e] {\n  height: 400px;\n  overflow: auto;\n}", ""]);

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
                              { staticClass: "modules_pick_cont" },
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
                          : _vm._e(),
                        _vm._v(" "),
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
                              _c("Module", { attrs: { module: module } }),
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
                                    { staticClass: "modules_pick_cont" },
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
                                                  return _vm.appendModule(
                                                    module,
                                                    index + 1
                                                  )
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
                            1
                          )
                        })
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
                        _vm._v("Название страницы")
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
                          placeholder: "Название страницы"
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
            [_vm._v("Описание")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/NzgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzYzNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzI0OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT9mMzYzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzP2MxMjgiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9taXhpbnMvdGFnX3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzg2MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzNiMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzIxNGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT8zNDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/YmVlNCJdLCJuYW1lcyI6WyJkYXRhIiwidGFncyIsIm1ldGhvZHMiLCJwYXJzZSIsIm1vZHVsZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsImkiLCJsZW5ndGgiLCJ0YWdfaW5kZXgiLCJ0YWciLCJwdXNoIiwiZm9yRWFjaCIsInRhZ19zcGxpdGVkIiwic3BsaXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsc0VBRkE7QUFHQSxtQkFIQTtBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBREE7QUFJQSxHQVRBO0FBVUEsU0FWQSxxQkFVQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLEtBSEE7QUFJQSxHQWhCQTtBQWlCQTtBQUNBLGFBREEscUJBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxtQkFJQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUN2QztBQUNMO0FBQ3NDOzs7QUFHekY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibW9kdWxlXCIgdi1odG1sPVwicGFyc2UobW9kdWxlKVwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdGFnX3BhcnNlciBmcm9tICcuLi9taXhpbnMvdGFnX3BhcnNlcidcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTW9kdWxlXCIsXG4gICAgICAgIG1peGluczogW3RhZ19wYXJzZXJdLFxuICAgICAgICBwcm9wczogWydtb2R1bGUnXSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YSA6IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgICAgICB0aGlzLiRvbignZnJlc2gnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VudCgpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBzZXRNb2R1bGUobSl7XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlID0gbTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VudCgpe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHByb3BzLm1vZHVsZSk7XG4gICAgICAgICAgICAgICAgLy8gaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHBhcmFtcyA9IHR5cGVbMl07XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZih0eXBlWzBdID09PSAnaW1hZ2UnKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ10ucHVzaChcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQgOiAwLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaW1hZ2VfcGFyYW1zLmhlaWdodCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogaW1hZ2VfcGFyYW1zLndpZHRoLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiAwXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQgOiBudWxsLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBpdGVtLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdsaW5rJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlua19wYXJhbXMgPSBwYXJhbXMgPyBKU09OLnBhcnNlKHBhcmFtcykgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnbGlua3MnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ2xpbmtzJ10ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFwi0KHRgdGL0LvQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rIDogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyA6IGxpbmtfcGFyYW1zID8gbGlua19wYXJhbXMuY2xhc3MgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRwcm9wcy5tb2R1bGVbJ2xpbmtzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXS5jbGFzcyA9IGxpbmtfcGFyYW1zLmNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ3RleHQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ3RleHRzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWyd0ZXh0cyddLnB1c2goe3RleHQgOiBcItCi0LXQutGB0YJcIn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICdiYWNrZ3JvdW5kJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdICYmIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdLmltYWdlICE9PSAnbnVsbCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJy9pbWFnZXMvbm9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZighdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2JhY2tncm91bmQnKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJy9pbWFnZXMvbm9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBpdGVtLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY2h1bmtbMF0gIT09ICdzZXR0aW5ncycgJiYgY2h1bmsubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2ggPSB0aGlzLiRwcm9wcy5tb2R1bGVbY2h1bmtbMF0gKyAncyddW3BhcnNlSW50KGNodW5rWzFdKSAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgd2luZG93W2NodW5rWzBdXSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMuJHN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wc0RhdGE6IHsgY2h1bms6IGNoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hpbGRyZW4ucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS4kbW91bnQodGhpcy4kZWwucXVlcnlTZWxlY3RvcignI2NodW5rXycgKyBjaHVua1swXSArICdfJyArIGNodW5rWzFdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtci0zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYiBicmVhZGNydW1iLXN0eWxlMSBtZy1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NpdGVcIiB2LXNsb3Q9XCJ7IGhyZWYsIHJvdXRlLCBuYXZpZ2F0ZSwgaXNBY3RpdmUsIGlzRXhhY3RBY3RpdmUgfVwiIGN1c3RvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgPjxhIDpocmVmPVwiaHJlZlwiIEBjbGljaz1cIm5hdmlnYXRlXCI+0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkhlbHBkZXNrIE1hbmFnZW1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1nLWItMCB0eC1zcGFjaW5nLS0xXCI+e3sgcGFnZS5uYW1lIH19PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlXCIgY2xhc3M9XCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LWxpbmVcIiBpZD1cIm15VGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJob21lLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNob21lXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJob21lXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj7QktC40LfRg9Cw0LvRjNC90YvQuSDRgNC10LTQsNC60YLQvtGAPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwicHJvZmlsZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjcHJvZmlsZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwicHJvZmlsZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPtCe0L/QuNGB0LDQvdC40LU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJjb250YWN0LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNzZW9cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImNvbnRhY3RcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5TRU88L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQgcGQteS0yMFwiIGlkPVwibXlUYWJDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlIG92ZXJmbG93LWhpZGRlblwiIGlkPVwiaG9tZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImhvbWUtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwibW9kdWxlc19zaG93ID0gIW1vZHVsZXNfc2hvd1wiIGNsYXNzPVwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmUgbXQtNFwiPiDQlNC+0LHQsNCy0LjRgtGMINC80L7QtNGD0LvRjDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9kdWxlc19zaG93XCIgY2xhc3M9XCJtb2R1bGVzX3BpY2tfY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiIHYtZm9yPVwibW9kdWxlIGluICRzdG9yZS5nZXR0ZXJzLm1vZHVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJhcHBlbmRNb2R1bGUobW9kdWxlKVwiPnt7IG1vZHVsZS5uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIobW9kdWxlLCBpbmRleCkgaW4gbW9kdWxlc1wiIGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbW9kdWxlX2JveFwiIHYtYmluZDppZD1cIidtb2R1bGVfJyArIGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2R1bGVfc2V0dGluZ3MgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRfYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInN3YXAoaW5kZXgsIC0xKVwiPtCS0LLQtdGA0YU8L2J1dHRvbj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic3dhcChpbmRleCwgMSlcIj7QktC90LjQtzwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImRlbGV0ZU1vZHVsZShpbmRleClcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNvcHlNb2R1bGUoaW5kZXgpXCI+0KHQutC+0L/QuNGA0L7QstCw0YLRjCDQuNC3PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWZvcj1cInBhZ2UgaW4gcGFnZXNcIiBAY2xpY2s9XCJjb3B5TW9kdWxlKHBhZ2UsIG1vZHVsZSwgaW5kZXgpXCIgPnt7IHBhZ2UubmFtZSB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZHVsZSB2LWJpbmQ6bW9kdWxlPVwibW9kdWxlXCI+PC9Nb2R1bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwibW9kdWxlc19zaG93ID0gIW1vZHVsZXNfc2hvd1wiIGNsYXNzPVwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmUgbXQtNFwiPiDQlNC+0LHQsNCy0LjRgtGMINC80L7QtNGD0LvRjDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtb2R1bGVzX3Nob3dcIiBjbGFzcz1cIm1vZHVsZXNfcGlja19jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIiB2LWZvcj1cIm1vZHVsZSBpbiAkc3RvcmUuZ2V0dGVycy5tb2R1bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJhcHBlbmRNb2R1bGUobW9kdWxlLCBpbmRleCArIDEpXCI+e3sgbW9kdWxlLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInByb2ZpbGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJwcm9maWxlLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMiBtZy10LTEwIG1nLWxnLXQtMCBiclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UuaXNQdWJsaXNoZWRcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJpc1B1Ymxpc2hlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiaXNQdWJsaXNoZWRcIj4g0J7Qv9GD0LHQu9C40LrQvtCy0LDQvTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPtCi0LXQutGB0YIg0LzQtdC90Y48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLm1lbnVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QndCw0LfQstCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0Ys8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLm5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJzZW9cIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWN0LXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5TRU8g0LfQsNCz0L7Qu9C+0LLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS50aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNFTyDQt9Cw0LPQvtC70L7QstC+0LpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+U0VPINC+0L/QuNGB0LDQvdC40LU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLmRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU0VPINC+0L/QuNGB0LDQvdC40LVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+dXJsINGB0YLRgNCw0L3QuNGG0Ys8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLnNsdWdcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJ1cmwg0YHRgtGA0LDQvdC40YbRi1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBNb2R1bGUgZnJvbSAnLi8uLi8uLi9tb2R1bGVzL01vZHVsZSc7XG4gICAgaW1wb3J0IHN0eWxlcyBmcm9tICcvcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9jc3Mvc3R5bGUubW9kdWxlLnNjc3MnO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJQYWdlXCIsXG4gICAgICAgIGNvbXBvbmVudHM6e1xuICAgICAgICAgICAgTW9kdWxlXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2UgOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAn0J3QvtCy0LDRjyDRgdGC0YDQsNC90LjRhtCwJyxcbiAgICAgICAgICAgICAgICAgICAgaXNQdWJsaXNoZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVzIDogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZ2VfaWQgOiBudWxsLFxuICAgICAgICAgICAgICAgIHRleHQ6ICcyJyxcbiAgICAgICAgICAgICAgICBtb2R1bGVzX3Nob3cgOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtb2R1bGVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2UubW9kdWxlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5wYWdlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2ggOiB7XG4gICAgICAgICAgICAncGFnZS5zbHVnJzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBhZ2UuaWQgJiYgdGhpcy5wYWdlLmlkICE9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYWdlLm5hbWUnOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGFnZS5pZCAmJiB0aGlzLnBhZ2UuaWQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLnNsdWcgPSB3aW5kb3cudXJsUnVzTGF0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS50aXRsZSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X3BhZ2VzJyk7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0X21vZHVsZXMnLCB0aGlzLnBhZ2VfaWQpO1xuICAgICAgICAgICAgdGhpcy5wYWdlX2lkID0gISF0aGlzLiRyb3V0ZS5wYXJhbXMuaWQgPyBwYXJzZUludCh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpIDogbnVsbDtcbiAgICAgICAgICAgIGlmKHRoaXMucGFnZV9pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9wYWdlJywgdGhpcy5wYWdlX2lkKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuZ2V0dGVycy5wYWdlKHRoaXMucGFnZV9pZCkudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRlbWl0KCd0aXRsZVNldCcsIHRoaXMuJHN0b3JlLmdldHRlcnMucGFnZSh0aGlzLnBhZ2VfaWQpLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5wYWdlKHRoaXMucGFnZV9pZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0ID0geC5pbmNsdWRlcyjigJxodG1s4oCdKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0X21vZHVsZV9jaHVuaygxLCAxLCAndGV4dCcsIDEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYXBwZW5kTW9kdWxlKG1vZHVsZSwgaW5kZXggPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmFuayA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlIDogbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVfdGVtcGxhdGVfaWQgOiBtb2R1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0cyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBsaW5rcyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kcyA6IFtdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMucHVzaChtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlcy5zcGxpY2UoaW5kZXgsIDAsIG0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2FwKGluZGV4X0EsIGRpcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4X0EsIGRpciwgKGluZGV4X0EgKyBkaXIpKTtcblxuXG5cblxuICAgICAgICAgICAgICAgIGlmKGluZGV4X0EgKyBkaXIgPD0gMCB8fCBpbmRleF9BICsgZGlyID49IHRoaXMucGFnZS5tb2R1bGVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9BICsgZGlyXSA9IHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleF9BLGluZGV4X0EgKyBkaXIsIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0EgKyBkaXJdKVtpbmRleF9BXTtcblxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGVtcCA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0FdO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2UubW9kdWxlcy5zcGxpY2UoaW5kZXhfQSwgMSwgdGVtcCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleF9BICsgZGlyLCAxLCB0ZW1wKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbGVtXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kdWxlXycgKyBpbmRleF9BKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVsZW1fMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2R1bGVfJyArIChpbmRleF9BICsgZGlyKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1fMS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtXzIsIGVsZW1fMS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsZXQgbSA9IHRoaXMucGFnZS5tb2R1bGVzO1xuICAgICAgICAgICAgICAgIC8vIGxldCB0ZW1wID0gdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhfQV07XG4gICAgICAgICAgICAgICAgLy8gbVtpbmRleF9BXSA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0JdO1xuICAgICAgICAgICAgICAgIC8vIG1baW5kZXhfQl0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucGFnZS5tb2R1bGVzID0gbTtcbiAgICAgICAgICAgICAgICAvLyBtLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFwcGVuZE1vZHVsZShtb2R1bGUpO1xuICAgICAgICAgICAgICAgIC8vICAgICAvL3RoaXMucGFnZS5tb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLiRjaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4geyByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gXCJNb2R1bGVcIjsgfSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaXRlbS5zZXRNb2R1bGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaXRlbS4kZW1pdCgnZnJlc2gnKTtcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZU1vZHVsZShpbmRleCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3B5TW9kdWxlKHBhZ2UsIG1vZHVsZSwgaW5kZXgpe1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBwYWdlLm1vZHVsZXMuZmlsdGVyKChtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnRlbXBsYXRlLmlkID09PSBtb2R1bGUudGVtcGxhdGUuaWQ7XG4gICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdID0gZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3ZlTW9kdWxlKGluZGV4LCBkaXIpe1xuICAgICAgICAgICAgICAgIGlmKGluZGV4ICsgZGlyID09PSAwIHx8IGluZGV4ICsgZGlyID4gdGhpcy5wYWdlLm1vZHVsZXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9bdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXggKyBkaXJdLCB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF1dID0gW3RoaXMucGFnZS5tb2R1bGVzW2luZGV4XSwgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXggKyBkaXJdXTtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnBhZ2UubW9kdWxlcy5wdXNoKHRoaXMucGFnZS5tb2R1bGVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wYWdlLm1vZHVsZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbSA9IHRoaXMucGFnZS5tb2R1bGVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBtW2luZGV4XSA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4ICsgZGlyXTtcbiAgICAgICAgICAgICAgICAgICAgbVtpbmRleCArIGRpcl0gPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzID0gbTtcblxuICAgICAgICAgICAgICAgICAgICAvL2VsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbSwgZWxlbS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJGNoaWxkcmVuWzBdLiRvcHRpb25zLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4geyByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gXCJNb2R1bGVcIjsgfSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLiRlbWl0KCdmcmVzaCcpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlKCl7XG4gICAgICAgICAgICAgICAgLy90aGlzLnByb2R1Y3QuY2F0ZWdvcnlfaWQgPSAhIXRoaXMuY2F0ZWdvcnkgPyB0aGlzLmNhdGVnb3J5LmlkIDogMDtcblxuICAgICAgICAgICAgICAgIGxldCBtZXRob2QgPSAhIXRoaXMucGFnZS5pZCA/ICd1cGRhdGVfcGFnZScgOiAnc3RvcmVfcGFnZSc7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2R1Y3QuaW1hZ2VzID0gdGhpcy5pbWFnZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChtZXRob2QsIHRoaXMucGFnZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3BhZ2VzJ30pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAubW9kdWxlc19waWNrX2NvbnR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYgPiBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFkZF9tb2R1bGV7XG4gICAgICAgIGJvcmRlcjogNHB4IGRhc2hlZCAjZWVlZWVlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjYzdjM2MzO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgICB9XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgICAubW9kdWxlX3NldHRpbmdze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvaWNvbnMvc2xpZGVycy5zdmcpIGNlbnRlciBuby1yZXBlYXQgI2ZmZjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBhbGw7XG4gICAgfVxuICAgIC5tb2R1bGVfYm94OmhvdmVyIC5tb2R1bGVfc2V0dGluZ3N7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbiAgICAuc2V0dF9ib3h7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3h7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAuaW5uZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG5cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZXN7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuPC9zdHlsZT5cbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHggODRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQ6ICM1NkFGMUE7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXG59XFxuXFxuLmNvbnRhaW5lcl9zbWFsbCB7XFxuICBtYXgtd2lkdGg6IDEwNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxufVxcblxcbi5wdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLm10LTYwIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufVxcblxcbi5tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ubXQtMjAge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY29sLWxnLTEge1xcbiAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTIge1xcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMyB7XFxuICAgIGZsZXg6IDAgMCAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy00IHtcXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTUge1xcbiAgICBmbGV4OiAwIDAgNDEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNiB7XFxuICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy03IHtcXG4gICAgZmxleDogMCAwIDU4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTgge1xcbiAgICBmbGV4OiAwIDAgNjYuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOSB7XFxuICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMCB7XFxuICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMSB7XFxuICAgIGZsZXg6IDAgMCA5MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMiB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5jb2wtMSwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wsIC5jb2wtYXV0bywgLmNvbC1zbS0xLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbSwgLmNvbC1zbS1hdXRvLCAuY29sLW1kLTEsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLCAuY29sLW1kLWF1dG8sIC5jb2wtbGctMSwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGcsIC5jb2wtbGctYXV0bywgLmNvbC14bC0xLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bCwgLmNvbC14bC1hdXRvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGZcIikpICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGZcIikpICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01vbnRzZXJyYXQtTWVkaXVtLnR0ZlwiKSkgKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTW9udHNlcnJhdC1Cb2xkLnR0ZlwiKSkgKyBcIik7XFxufVxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndiLXBhZGRpbmcge1xcbiAgcGFkZGluZzogODRweCAxMTRweDtcXG59XFxuXFxuLnBhZ2luYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4ucGFnZS1saW5rIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICM0ODk2MTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkZDRlMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnBhZ2UtbGluazpob3ZlciB7XFxuICB6LWluZGV4OiAyO1xcbiAgY29sb3I6ICMwMTQ4YWU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlN2VkO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2RkNGUwO1xcbn1cXG5cXG4ucGFnZS1saW5rOmZvY3VzIHtcXG4gIHotaW5kZXg6IDI7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMSwgMTA0LCAyNTAsIDAuMjUpO1xcbn1cXG5cXG4ucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnBhZ2UtaXRlbTpsYXN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg5NjEzO1xcbiAgYm9yZGVyLWNvbG9yOiAjNDg5NjEzO1xcbn1cXG5cXG4ucGFnZS1pdGVtLmRpc2FibGVkIC5wYWdlLWxpbmsge1xcbiAgY29sb3I6ICM3OTg3YTE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGN1cnNvcjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNjZGQ0ZTA7XFxufVxcblxcbi5wYWdpbmF0aW9uLWxnIC5wYWdlLWxpbmsge1xcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XFxuICBmb250LXNpemU6IDEuMDkzNzVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4ucGFnaW5hdGlvbi1sZyAucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ucGFnaW5hdGlvbi1sZyAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnBhZ2luYXRpb24tc20gLnBhZ2UtbGluayB7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NjU2MnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQgLnBhZ2UtbGluayB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjJyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi13aWR0aDogMTIzMHB4O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5hbGxfaW1nX3dpZHRoIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRlbXBsYXRlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSBhIHtcXG4gIGNvbG9yOiAjNTVBMzIxO1xcbn1cXG4udGVtcGxhdGUgLmZsZXgtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxufVxcbi50ZW1wbGF0ZSBoMSBwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRlbXBsYXRlIGgyIHAge1xcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfY2VsbCBvbCB7XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbn1cXG4udGVtcGxhdGUgLnJlcV90YWJsZSB0ZCB7XFxuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcbn1cXG4udGVtcGxhdGUgLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50ZW1wbGF0ZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X2hlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAub25seV9oZWFkZXIgaDEsIC50ZW1wbGF0ZSAub25seV9oZWFkZXIgaDEgcCB7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXNpemU6IDQ2cHg7XFxufVxcbi50ZW1wbGF0ZSAuZGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmRkIC5kZF9tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5OTk5O1xcbn1cXG4udGVtcGxhdGUgLmRkIC5kZF9tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi50ZW1wbGF0ZSAuZGQgLmRkX21lbnUgdWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzBweDtcXG4gIHRvcDogMTBweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XFxufVxcbi50ZW1wbGF0ZSAuZGQgLmRkX21lbnUgdWwgbGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5kZCAuZGRfbWVudSB1bCBhIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWluLXdpZHRoOiAxNDBweDtcXG59XFxuLnRlbXBsYXRlIC5kZDpob3ZlciAuZGRfbWVudSB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfdGV4dCB7XFxuICB3aWR0aDogNTgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X3RleHQgLmNvbnQge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X3RleHQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfY2VsbCAubmFtZSB7XFxuICBiYWNrZ3JvdW5kOiAjNDg5NjEzO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgbGluZS1oZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfY2VsbCAuY29udGVudF90aGluIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnRvcF9jb250YWluZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuaWNvX2ltZyB7XFxuICB3aWR0aDogNzJweDtcXG4gIGhlaWdodDogNzJweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuaWNvX2ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgaDEge1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlci5mdWxsc2l6ZSB7XFxuICBtaW4taGVpZ2h0OiAxMDgwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIuZnVsbHNpemUgLmljb19pbWcge1xcbiAgd2lkdGg6IDk0cHg7XFxuICBoZWlnaHQ6IDk0cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIuZnVsbHNpemUgaDEgcCB7XFxuICBsaW5lLWhlaWdodDogODZweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAudHJhc3BfYm94IHtcXG4gIHBhZGRpbmc6IDcwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC03MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC03MHB4O1xcbiAgYmFja2dyb3VuZDogIzE1MzUwMDYwO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnRyYXNwX2JveCAuaWNvX2ltZyB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5iZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTM5NXB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucGhvbmVfaGVhZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuYnVyZ2VyLW1lbnUge1xcbiAgYmFja2dyb3VuZDogdXJsKC90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvaW1nL2J1cmdlci5wbmcpIG5vLXJlcGVhdCBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnJfc2lkZSAudG9wX2NvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuaGVhZF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubF9zaWRlLCAudGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUge1xcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMzRweCkgLyAyKTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubGlua3Mge1xcbiAgbWFyZ2luLXRvcDogNzRweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubGlua3MgYSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5saW5rcyB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxfc2lkZSAubGlua3MgdWwgbGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUgLmxpbmtzIHVsIHtcXG4gIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnJfc2lkZSAubGlua3MgdWwgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJnX2ltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gOTYwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJnX2ltYWdlIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgYmFja2dyb3VuZDogIzI5NTcwQjtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLnRhYl9jb250IHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM4QjEzO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjNTZBRjFBO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC50YWJfY29udCAudGIge1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM1NkFGMUE7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290X21lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IGEge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290X21lbnUgYTpob3ZlciB7XFxuICBjb2xvcjogIzU2QUYxQTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IGE6aG92ZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm90dG9tOiAtNHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NkFGMUE7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBsaSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuY29weSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmctdG9wOiA4NnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3Rlcl9hZGRzIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAucHJvZHVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAucHJvZHVjdCBoMSB7XFxuICBmb250LXNpemU6IDQ2cHg7XFxufVxcbi50ZW1wbGF0ZSAucHJvZHVjdCAucHJvZHVjdC1pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5wcm9kdWN0IC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4udGVtcGxhdGUgLnByb2R1Y3QgLnByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnRlbXBsYXRlIC5uZXcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XFxufVxcbi50ZW1wbGF0ZSAubmV3IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG59XFxuLnRlbXBsYXRlIC5uZXcgLm5ldy1pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNDAwcHg7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4udGVtcGxhdGUgLm5ldyAubmV3LWRlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRlbXBsYXRlIC5uZXcgLmRhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSBoMSB7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSBoMSBwIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSAucm91bmQtNzMge1xcbiAgd2lkdGg6IDczcHg7XFxuICBoZWlnaHQ6IDczcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IC5jbGllbnRfaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUgLmltZ193aCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IC5uYW1lX3RoaW4ge1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IC5uYW1lLCAudGVtcGxhdGUgLmxlZnRfbWVudSAuY2l0eSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4udGVtcGxhdGUgYS5uLWRlYyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAu0YFsaWVudF9jZWxsIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAuZGVsaXYge1xcbiAgd2lkdGg6IDY4MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi50ZW1wbGF0ZSAuZGVsaXYgLmRlbGl2ZXIgaW1nIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5kZWxpdiAuZGVsaXZlciAuZGVzY3Ige1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGVtcGxhdGUgLmluZm9fY29udCAuYWJvdXRfYmxvY2sge1xcbiAgcGFkZGluZzogMzBweCAwcHg7XFxufVxcbi50ZW1wbGF0ZSAuZnVsbHNpemUgLndoaXRlX2NlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAzMTNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKC90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvaW1nL2dyYWQucG5nKSByZXBlYXQteCBsZWZ0ICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuZnVsbHNpemUgLndoaXRlX2NlbGwgaDMge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5mdWxsc2l6ZSAud2hpdGVfY2VsbCAuZGF0ZSB7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLmZ1bGxzaXplIGltZyB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuZnVsbHNpemUgLm5ld3MtY29udCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5mdWxsc2l6ZSAubmV3cy1jb250OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGVtcGxhdGUgLmZ1bGxzaXplIC5uZXctZGVzY3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3Mge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIC5uZXdzLWNvbnQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTMwcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIC5uZXdzLWNvbnQgLmRhdGUge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIC5uZXdzLWNvbnQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9pbWcvZ3JhZHcucG5nKTtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3MgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3MgLm5ldy1kZXNjciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICM0RjRGNEY7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIGgzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM0RjRGNEY7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIC5uYW1lX3RoaW4ge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLmFjdGlvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgd2lkdGg6IDY4OHB4O1xcbiAgaGVpZ2h0OiA0MDVweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLmFjdGlvbnMgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLnByX2NvbnRhaW5lciAud2hpdGVfYmxvY2sge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDcwcHggMTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLnByaWNlcyBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcbi50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC5wcmljZXMgdGFibGUge1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLnByX2NvbnRhaW5lciAucHJpY2VzIHRhYmxlIHRyLCAudGVtcGxhdGUgLnByX2NvbnRhaW5lciAucHJpY2VzIHRhYmxlIHRkLCAudGVtcGxhdGUgLnByX2NvbnRhaW5lciAucHJpY2VzIHRhYmxlIHRoIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IDA7XFxuICBsaW5lLWhlaWdodDogNDJweDtcXG59XFxuLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLnByaWNlcyB0YWJsZSAuYi1ib3QgdGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjODI4MjgyO1xcbn1cXG4udGVtcGxhdGUgLnByX2NvbnRhaW5lciAucHJpY2VzIHRhYmxlIHRoIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxufVxcbi50ZW1wbGF0ZSAuYXNpZGVfbWVudSB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxufVxcbi50ZW1wbGF0ZSAuYXNpZGVfbWVudSB1bCBsaS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzQ4OTYxMztcXG59XFxuLnRlbXBsYXRlIC5hc2lkZV9tZW51IHVsIGxpLmFjdGl2ZSBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udGVtcGxhdGUgLmFzaWRlX21lbnUgdWwgYSB7XFxuICBsaW5lLWhlaWdodDogNjRweDtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjQkRCREJEO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogIzRGNEY0RjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50ZW1wbGF0ZSAucmVxX3RhYmxlIHRyIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4udGVtcGxhdGUgLnJlcV90YWJsZSB0ciB0ZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNCREJEQkQ7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi50ZW1wbGF0ZSAucmVxX3RhYmxlIHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi50ZW1wbGF0ZSAubWFwIHtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxufVxcbi50ZW1wbGF0ZSAjbWFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogNDYwcHg7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdHNfYm94IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfaXRlbSBhIHtcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfaXRlbSBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgcGFkZGluZzogMjBweCAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg5NjEzO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2l0ZW06aG92ZXIgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgaDEge1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9kZXNjciB7XFxuICBoZWlnaHQ6IDE0NHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzU2QUYxQTtcXG4gIHBhZGRpbmc6IDU3cHggMzdweDtcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGw6aG92ZXI6YWZ0ZXIge1xcbiAgYm90dG9tOiA1N3B4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2Rlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLm5vLWl0ZW1zIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMjJweDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsLCAudGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAucHJvZHVjdF9jZWxsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xcbiAgcGFkZGluZzogNjBweCA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDQ0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGw6YWZ0ZXIsIC50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5wcm9kdWN0X2NlbGw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogNjBweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9pbWcvZ3JhZHcucG5nKTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsIGgzLCAudGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAucHJvZHVjdF9jZWxsIGgzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM0RjRGNEY7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfY2VsbCBpbWcsIC50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5wcm9kdWN0X2NlbGwgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLnByb2R1Y3RfY2VsbCB7XFxuICBwYWRkaW5nOiAzMHB4IDMwcHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5wcm9kdWN0X2NlbGw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMzBweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvaW1nL2dyYWR3LnBuZ1xcXCIpO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2Rlc2NyIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzRGNEY0RjtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDJweDtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAucGljX2NvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciBvbCB7XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAucGljX2NvbnRhaW5lcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZmZjtcXG4gIGxlZnQ6IC0yNXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgei1pbmRleDogMDtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAucGljX2NvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEgcCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLm1hcF9saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAucGljX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC5waWNfY29udGFpbmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmZmO1xcbiAgbGVmdDogMjVweDtcXG4gIHRvcDogMjVweDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnBpY19jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHAge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC5waWNfY29udGFpbmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmZmO1xcbiAgbGVmdDogMjVweDtcXG4gIHRvcDogMjVweDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAucGljX2NvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHAge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmZmY7XFxuICBsZWZ0OiAyNXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgei1pbmRleDogMDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAucGljX2NvbnRhaW5lci5yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMTAycHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC5waWNfY29udGFpbmVyLnJpZ2h0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmZmO1xcbiAgbGVmdDogLTI1cHg7XFxuICB0b3A6IDI1cHg7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAucGljX2NvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAuaW5mb19jb250IHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHAge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MTFweDtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCBsYWJlbCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgyODI4MjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyBoMiB7XFxuICBwYWRkaW5nOiAwIDExNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjhweDtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAuYWxsX2NhdGFsb2d1ZSBhIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAuZXgtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTkyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5leC1jb250YWluZXIgLmV4X2Jsb2NrIHtcXG4gIGhlaWdodDogMzE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1iYXNpczogY2FsYygxNi42NjY2NjYlIC0gOHB4KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IC5maXJzdF90ZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IG9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQgaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCBoMyBwIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQgLnBpY19jb250YWluZXIubGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCAucGljX2NvbnRhaW5lci5yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCB7XFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5maXJzdF90ZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCBoMyB7XFxuICBtYXJnaW46IDA7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCBoMyBwIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5waWNfY29udGFpbmVyLmxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5waWNfY29udGFpbmVyLnJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCBvbCB7XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgI2NhbGxiYWNrIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuaWNvX2ltZyB7XFxuICB3aWR0aDogNzJweDtcXG4gIGhlaWdodDogNzJweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuaWNvX2ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAud2hpdGVfYmxvY2sge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IGgyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmRlY29yX2ltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMTBweDtcXG4gIGxlZnQ6IDE5cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuZGVjb3JfaW1nMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMTdweDtcXG4gIHJpZ2h0OiAxOXB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuY29udCBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuZm9ybS1ncm91cCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4MjgyODI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAjY2FsbGJhY2sge1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmljX2xhYmVsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmljb19pbWcge1xcbiAgd2lkdGg6IDEwMnB4O1xcbiAgaGVpZ2h0OiAxMDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtaW4td2lkdGg6IDEwMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuaWNvX2ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC53aGl0ZV9ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyBoMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmRlY29yX2ltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMTBweDtcXG4gIHJpZ2h0OiAxOXB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuZGVjb3JfaW1nMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMTdweDtcXG4gIHJpZ2h0OiAxOXB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAucGljX2NvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmNvbnQgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuZm9ybS1ncm91cCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4MjgyODI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAjY2FsbGJhY2sge1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuaWNvX2ltZyB7XFxuICB3aWR0aDogNzJweDtcXG4gIGhlaWdodDogNzJweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmljb19pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC53aGl0ZV9ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIGgyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5kZWNvcl9pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTEwcHg7XFxuICByaWdodDogMTlweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuZGVjb3JfaW1nMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMTdweDtcXG4gIHJpZ2h0OiAxOXB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5waWNfY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5jb250IGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuZm9ybS1ncm91cCBsYWJlbCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuZm9ybS1ncm91cCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4MjgyODI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIGgxIHAge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIGgyIHtcXG4gIHBhZGRpbmc6IDAgMTE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2OHB4O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuYWxsX2NhdGFsb2d1ZSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuYWxsX2NhdGFsb2d1ZSBhIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmNhdF9ibG9jayB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmNhdF9ibG9jayBhIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKC90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvaW1nL2dyYWQucG5nKSByZXBlYXQteCBsZWZ0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZHVsZXNfcGlja19jb250W2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tb2R1bGVzX3BpY2tfY29udCA+IGRpdltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZF9tb2R1bGVbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBib3JkZXI6IDRweCBkYXNoZWQgI2VlZWVlZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNjN2MzYzM7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogNDBweCAwO1xcbiAgei1pbmRleDogOTk5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmY7XFxufVxcbi5jb250YWluZXJbZGF0YS12LTkwOTAwYjFlXSB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3NbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvaWNvbnMvc2xpZGVycy5zdmcpIGNlbnRlciBuby1yZXBlYXQgI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGFsbDtcXG59XFxuLm1vZHVsZV9ib3g6aG92ZXIgLm1vZHVsZV9zZXR0aW5nc1tkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDBweDtcXG59XFxuLnNldHRfYm94W2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3hbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcbiAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94IC5pbm5lcltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcXG59XFxuLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3ggLmlubmVyIGJ1dHRvbltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94IC5pbm5lciAucGFnZXNbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2R1bGVcIixcbiAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucGFyc2UoX3ZtLm1vZHVsZSkpIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItM1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJkLXNtLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1nLWItMTBcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJuYXZcIiwgeyBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJicmVhZGNydW1iXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwib2xcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9zaXRlXCIsIGN1c3RvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHJlZi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGUgPSByZWYubmF2aWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gcmVmLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0V4YWN0QWN0aXZlID0gcmVmLmlzRXhhY3RBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaHJlZiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBuYXZpZ2F0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDRgdCw0LnRgtC+0LxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWN1cnJlbnRcIjogXCJwYWdlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSGVscGRlc2sgTWFuYWdlbWVudFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1nLWItMCB0eC1zcGFjaW5nLS0xXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlLm5hbWUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ub25lIGQtbWQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gcGQteC0xNSBidG4td2hpdGUgYnRuLXVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC+0YXRgNCw0L3QuNGC0YxcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50IHBkLXktMjBcIiwgYXR0cnM6IHsgaWQ6IFwibXlUYWJDb250ZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJob21lLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZW1wbGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfbW9kdWxlIHBvaW50ZXIgdXNlci1zZWxlY3Qtbm9uZSBtdC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZHVsZXNfc2hvdyA9ICFfdm0ubW9kdWxlc19zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiINCU0L7QsdCw0LLQuNGC0Ywg0LzQvtC00YPQu9GMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kdWxlc19zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2R1bGVzX3BpY2tfY29udFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLiRzdG9yZS5nZXR0ZXJzLm1vZHVsZXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvc2l0aW9uLXJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYXBwZW5kTW9kdWxlKG1vZHVsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG1vZHVsZS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5tb2R1bGVzLCBmdW5jdGlvbihtb2R1bGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvc2l0aW9uLXJlbGF0aXZlIG1vZHVsZV9ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm1vZHVsZV9cIiArIGluZGV4IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZV9zZXR0aW5ncyBtdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dF9ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlubmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZU1vZHVsZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0LTQsNC70LjRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNvcHlNb2R1bGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC60L7Qv9C40YDQvtCy0LDRgtGMINC40LdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYWdlcywgZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb3B5TW9kdWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBhZ2UubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTW9kdWxlXCIsIHsgYXR0cnM6IHsgbW9kdWxlOiBtb2R1bGUgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfbW9kdWxlIHBvaW50ZXIgdXNlci1zZWxlY3Qtbm9uZSBtdC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZHVsZXNfc2hvdyA9ICFfdm0ubW9kdWxlc19zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiINCU0L7QsdCw0LLQuNGC0Ywg0LzQvtC00YPQu9GMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kdWxlc19zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2R1bGVzX3BpY2tfY29udFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLiRzdG9yZS5nZXR0ZXJzLm1vZHVsZXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvc2l0aW9uLXJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYXBwZW5kTW9kdWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobW9kdWxlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwicHJvZmlsZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMiBtZy10LTEwIG1nLWxnLXQtMCBiclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLmlzUHVibGlzaGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UuaXNQdWJsaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImlzUHVibGlzaGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucGFnZS5pc1B1Ymxpc2hlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnBhZ2UuaXNQdWJsaXNoZWQsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ucGFnZS5pc1B1Ymxpc2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucGFnZS5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc1B1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc1B1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcImlzUHVibGlzaGVkXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlzUHVibGlzaGVkXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiDQntC/0YPQsdC70LjQutC+0LLQsNC9XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCi0LXQutGB0YIg0LzQtdC90Y5cIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5tZW51IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwibWVudVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YtcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCd0LDQt9Cy0LDQvdC40LUg0YHRgtGA0LDQvdC40YbRi1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJzZW9cIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiY29udGFjdC10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNFTyDQt9Cw0LPQvtC70L7QstC+0LpcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU0VPINC30LDQs9C+0LvQvtCy0L7QulwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UudGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJ0aXRsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNFTyDQvtC/0LjRgdCw0L3QuNC1XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNFTyDQvtC/0LjRgdCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcInVybCDRgdGC0YDQsNC90LjRhtGLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2Uuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2Uuc2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJ1cmwg0YHRgtGA0LDQvdC40YbRi1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2Uuc2x1ZyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcInNsdWdcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgbmF2LWxpbmVcIiwgYXR0cnM6IHsgaWQ6IFwibXlUYWJcIiwgcm9sZTogXCJ0YWJsaXN0XCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmsgYWN0aXZlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiaG9tZS10YWJcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjaG9tZVwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcInRydWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCS0LjQt9GD0LDQu9GM0L3Ri9C5INGA0LXQtNCw0LrRgtC+0YBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwicHJvZmlsZS10YWJcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjcHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwicHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQntC/0LjRgdCw0L3QuNC1XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImNvbnRhY3QtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI3Nlb1wiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiY29udGFjdFwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTRU9cIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4vc3R5bGUubW9kdWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4vc3R5bGUubW9kdWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01lcnJpd2VhdGhlci1Cb2xkLnR0Zj85Y2NiODg1YzljZjhlNTAzZDU1N2YxNWUwYjJjYmYyNFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTW9udHNlcnJhdC1Cb2xkLnR0Zj9hZGU5MWY0NzMyNTU5OTFmNDEwZjYxODU3Njk2NDM0YlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmP2M4YjZlMDgzYWYzZjk0MDA5ODAxOTg5YzM3Mzk0MjVlXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmP2VlNjUzOTkyMWQ3MTM0ODJiOGNjZDRkMGQyMzk2MWJiXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcGFyc2UobW9kdWxlKXtcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSBtb2R1bGUudGVtcGxhdGUuaHRtbDtcclxuICAgICAgICAgICAgbGV0IHRhZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGh0bWxbaV0gPT09IFwiW1wiICYmIGh0bWxbaSsxXSA9PT0gXCJbXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnX2luZGV4ID0gaSsyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaHRtbFt0YWdfaW5kZXhdICE9PSAnXScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgKz0gaHRtbFt0YWdfaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdfaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFnICE9PSAndG9rZW4nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFnX3NwbGl0ZWQgPSB0YWcuc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoJ1tbJyArIHRhZyArICddXScsICc8ZGl2IGlkPVwiY2h1bmtfJyArIHRhZ19zcGxpdGVkWzBdICsgJ18nICsgdGFnX3NwbGl0ZWRbMV0gKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNlNDliMWYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDNlNDliMWZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwM2U0OWIxZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwM2U0OWIxZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwM2U0OWIxZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwM2U0OWIxZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MDkwMGIxZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzkwOTAwYjFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzkwOTAwYjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzkwOTAwYjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MDkwMGIxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9