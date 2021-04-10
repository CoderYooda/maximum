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

          if (!_this2.$props.module['backgrounds'][parseInt(type[1]) - 1] || _this2.$props.module['backgrounds'][parseInt(type[1]) - 1] === undefined //&&
          // this.$props.module['backgrounds'][parseInt(type[1]) - 1].image !== 'null'
          ) {
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
exports.push([module.i, "@charset \"UTF-8\";\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.button {\n  padding: 20px 84px;\n  border-radius: 6px;\n  border: 0;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.primary {\n  background: #56AF1A;\n  color: #fff !important;\n}\n\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.container_small {\n  max-width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.pt-20 {\n  padding-top: 20px;\n}\n\n.mt-60 {\n  margin-top: 60px;\n}\n\n.mb-30 {\n  margin-bottom: 30px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n\n  .col-lg-five {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@font-face {\n  font-family: \"MeriBold\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Merriweather-Bold.ttf */ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf")) + ");\n}\n.w-100 {\n  width: 100%;\n}\n\n.wb-padding {\n  padding: 84px 114px;\n}\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #489613;\n  background-color: #fff;\n  border: 1px solid #cdd4e0;\n  text-decoration: none;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #0148ae;\n  text-decoration: none;\n  background-color: #e3e7ed;\n  border-color: #cdd4e0;\n}\n\n.page-link:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(1, 104, 250, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #489613;\n  border-color: #489613;\n}\n\n.page-item.disabled .page-link {\n  color: #7987a1;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #cdd4e0;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.09375rem;\n  line-height: 1.5;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.76562rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #F5F5F5;\n}\n\nhtml {\n  min-width: 1230px;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.all_img_width img {\n  width: 100%;\n}\n\n.template {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 16px;\n  color: #333333;\n}\n.template a {\n  color: #55A321;\n}\n.template .flex-div {\n  display: flex;\n}\n.template h1 {\n  font-family: \"MeriBold\";\n  font-size: 72px;\n  font-weight: bold;\n  line-height: 60px;\n}\n.template h1 p {\n  padding-bottom: 0 !important;\n  color: #FFFFFF;\n  line-height: 60px;\n}\n.template h2 {\n  font-family: \"MeriBold\";\n  font-size: 36px;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.template h2 p {\n  padding-bottom: 0 !important;\n  line-height: 58px;\n}\n.template .vacancy_cell ol {\n  list-style: disc;\n}\n.template .req_table td {\n  white-space: break-spaces;\n}\n.template .font-weight-bold {\n  font-weight: bold;\n}\n.template p {\n  padding: 0;\n  margin: 0;\n  padding-bottom: 1em !important;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n}\n.template .only_text {\n  position: relative;\n}\n.template .only_header {\n  position: relative;\n}\n.template .only_header h1, .template .only_header h1 p {\n  font-size: 72px;\n  font-weight: bold;\n  line-height: 60px;\n  color: #333333;\n  font-size: 46px;\n}\n.template .dd {\n  position: relative;\n}\n.template .dd .dd_menu {\n  display: none;\n  position: absolute;\n  z-index: 9999999;\n}\n.template .dd .dd_menu ul {\n  list-style: none;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);\n  padding: 0 30px;\n  display: block;\n  margin-top: 15px;\n}\n.template .dd .dd_menu ul:before {\n  content: \"\";\n  position: absolute;\n  left: 30px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background: #fff;\n  transform: rotateZ(45deg);\n}\n.template .dd .dd_menu ul li {\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n}\n.template .dd .dd_menu ul a {\n  color: #333333;\n  line-height: 64px;\n  border-bottom: 1px solid #eee;\n  width: 100%;\n  display: block;\n  white-space: nowrap;\n  min-width: 140px;\n}\n.template .dd:hover .dd_menu {\n  display: block !important;\n}\n.template .vacancy_text {\n  width: 580px;\n  margin: 0 auto;\n}\n.template .vacancy_text .cont {\n  margin-top: 40px;\n}\n.template .vacancy_text img {\n  width: 100%;\n}\n.template .vacancy_cell .name {\n  background: #489613;\n  height: 64px;\n  line-height: 64px !important;\n  padding: 0 30px;\n  color: #fff;\n}\n.template .vacancy_cell .content_thin {\n  padding: 30px;\n}\n.template header {\n  position: relative;\n  color: #FFFFFF;\n  font-weight: 500;\n  background-position: center;\n  background-size: cover;\n  padding-bottom: 45px;\n}\n.template header .top_container a {\n  text-decoration: none;\n  color: #fff;\n  margin-bottom: 30px;\n  padding-bottom: 30px;\n}\n.template header .ico_img {\n  width: 72px;\n  height: 72px;\n}\n.template header .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template header h1 {\n  margin-top: 70px;\n}\n.template header.fullsize {\n  min-height: 1080px;\n}\n.template header.fullsize .ico_img {\n  width: 94px;\n  height: 94px;\n}\n.template header.fullsize h1 p {\n  line-height: 86px;\n}\n.template header .trasp_box {\n  padding: 70px;\n  margin-right: -70px;\n  margin-left: -70px;\n  background: #15350060;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  font-weight: 400;\n  margin-top: 70px;\n}\n.template header .trasp_box .ico_img {\n  margin-bottom: 20px;\n}\n.template header .bg {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  height: 1395px;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  pointer-events: none;\n}\n.template header .phone_head {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.template header .burger-menu {\n  background: url(/templates/maximum/assets/img/burger.png) no-repeat left;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  position: relative;\n}\n.template header .r_side .top_container {\n  text-align: right;\n}\n.template header .head_container {\n  display: flex;\n}\n.template header .l_side, .template header .r_side {\n  width: calc((100% - 234px) / 2);\n}\n.template header .links {\n  margin-top: 74px;\n}\n.template header .links a {\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  letter-spacing: 0.04em;\n}\n.template header .links ul {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.template header .l_side .links ul li {\n  margin-right: 30px;\n}\n.template header .r_side .links ul {\n  flex-flow: row-reverse;\n}\n.template header .r_side .links ul li {\n  margin-left: 30px;\n}\n.template header .bg_image {\n  position: absolute;\n  left: calc(50% - 960px);\n  height: 100%;\n  top: 0;\n  z-index: -1;\n}\n.template header .bg_image img {\n  display: block;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template footer {\n  margin-top: 100px;\n  background: #29570B;\n  padding-bottom: 60px;\n  padding-top: 60px;\n  position: relative;\n}\n.template footer .tab_cont {\n  border-bottom: 1px solid #438B13;\n  font-size: 18px;\n  font-weight: 600;\n  color: #56AF1A;\n}\n.template footer .tab_cont .tb {\n  border-bottom: 4px solid #56AF1A;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  line-height: 40px;\n  margin-bottom: -1px;\n}\n.template footer .foot_menu {\n  list-style: none;\n  padding: 0;\n  color: #fff;\n}\n.template footer .foot_menu a {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  line-height: 30px;\n  position: relative;\n}\n.template footer .foot_menu a:hover {\n  color: #56AF1A;\n}\n.template footer .foot_menu a:hover:after {\n  content: \"\";\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  bottom: -4px;\n  left: 0;\n  background-color: #56AF1A;\n}\n.template footer .foot_menu li {\n  margin: 20px 0;\n}\n.template footer .copy {\n  color: #fff;\n  padding-top: 86px;\n  display: block;\n}\n.template footer .footer_adds {\n  margin-top: 40px;\n}\n.template .product {\n  position: relative;\n}\n.template .product h1 {\n  font-size: 46px;\n}\n.template .product .product-image img {\n  width: 100%;\n  display: block;\n}\n.template .product .product-description {\n  background: #fff;\n  padding: 30px;\n  border-radius: 6px;\n}\n.template .product .price {\n  font-weight: bold;\n  font-size: 32px;\n  margin-top: 30px;\n}\n.template .new {\n  position: relative;\n  margin-bottom: 160px;\n}\n.template .new h1 {\n  font-size: 46px;\n}\n.template .new .new-image img {\n  width: 100%;\n  display: block;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .new .new-description {\n  background: #fff;\n  padding: 30px;\n  border-radius: 6px;\n  margin-bottom: 30px;\n}\n.template .new .date {\n  margin-bottom: 30px;\n}\n.template .left_menu {\n  position: relative;\n}\n.template .left_menu h1 {\n  font-size: 46px;\n  margin-bottom: 50px;\n}\n.template .left_menu h1 p {\n  color: #333333;\n}\n.template .left_menu .round-73 {\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n}\n.template .left_menu .client_img {\n  width: 100%;\n  margin-bottom: 25px;\n}\n.template .left_menu .img_wh {\n  display: block;\n  margin-bottom: 20px;\n}\n.template .left_menu .name_thin {\n  line-height: 24px;\n}\n.template .left_menu .name, .template .left_menu .city {\n  font-weight: 600;\n  line-height: 24px;\n  margin-bottom: 15px;\n}\n.template a.n-dec {\n  text-decoration: none;\n}\n.template .white_cell {\n  background: #FFFFFF;\n  border: 1px solid #E0E0E0;\n  padding: 30px;\n}\n.template .сlient_cell {\n  margin-bottom: 30px;\n}\n.template .deliv {\n  width: 680px;\n  margin: 0 auto;\n}\n.template .deliv .deliver img {\n  width: 120px;\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.template .deliv .deliver .descr {\n  text-align: center;\n}\n.template .info_cont .about_block {\n  padding: 30px 0px;\n}\n.template .fullsize .white_cell:before {\n  content: \"\";\n  position: absolute;\n  height: 313px;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left !important;\n}\n.template .fullsize .white_cell h3 {\n  color: #fff !important;\n}\n.template .fullsize .white_cell .date {\n  color: #fff !important;\n}\n.template .fullsize img {\n  width: 100% !important;\n  height: 100% !important;\n}\n.template .fullsize .news-cont {\n  position: absolute !important;\n  width: 100% !important;\n  bottom: 0;\n  height: auto !important;\n}\n.template .fullsize .news-cont:after {\n  content: none;\n  display: none;\n}\n.template .fullsize .new-descr {\n  display: none;\n}\n.template .white_cell.news {\n  padding: 0px;\n  margin-bottom: 30px;\n  height: 400px;\n  position: relative;\n}\n.template .white_cell.news:hover {\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);\n}\n.template .white_cell.news .news-cont {\n  padding: 20px;\n  height: calc(100% - 130px);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.template .white_cell.news .news-cont .date {\n  color: #333333;\n}\n.template .white_cell.news .news-cont:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 20px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/gradw.png);\n}\n.template .white_cell.news img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  margin-bottom: 0px;\n  display: block;\n}\n.template .white_cell.news .new-descr {\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n  height: auto;\n}\n.template .white_cell.news h3 {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .white_cell.news .name_thin {\n  padding: 20px;\n}\n.template .white_cell.actions {\n  position: relative;\n  padding: 0px;\n  width: 688px;\n  height: 405px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n}\n.template .white_cell.actions img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  display: block;\n}\n.template .pr_container .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  padding: 70px 100px;\n  width: 100%;\n}\n.template .pr_container .prices h2 {\n  font-family: \"Montserrat\";\n  font-weight: bold;\n  font-size: 28px;\n}\n.template .pr_container .prices table {\n  border-spacing: 0;\n  margin-bottom: 50px;\n}\n.template .pr_container .prices table tr, .template .pr_container .prices table td, .template .pr_container .prices table th {\n  text-align: left;\n  border: 0;\n  line-height: 42px;\n}\n.template .pr_container .prices table .b-bot td {\n  border-bottom: 1px dashed #828282;\n}\n.template .pr_container .prices table th {\n  border-bottom: 2px solid #000;\n  line-height: 38px;\n}\n.template .aside_menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #fff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);\n}\n.template .aside_menu ul li.active {\n  background: #489613;\n}\n.template .aside_menu ul li.active a {\n  color: #fff;\n}\n.template .aside_menu ul a {\n  line-height: 64px;\n  margin: 0 30px;\n  border-bottom: 1px dashed #BDBDBD;\n  display: block;\n  color: #4F4F4F;\n  text-decoration: none;\n  font-weight: 500;\n}\n.template .req_table tr {\n  line-height: 24px;\n}\n.template .req_table tr td {\n  border-bottom: 1px dashed #BDBDBD;\n  padding: 10px 0;\n}\n.template .req_table tr > td:first-child {\n  white-space: nowrap;\n  padding-right: 40px;\n  font-weight: bold;\n  vertical-align: top;\n}\n.template .map {\n  margin-top: 80px;\n}\n.template #map {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  height: 460px;\n}\n.template .shop_categories {\n  position: relative;\n}\n.template .shop_categories .cats_box {\n  background: #fff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);\n}\n.template .shop_categories .cat_item a {\n  color: #4F4F4F;\n  display: block;\n}\n.template .shop_categories .cat_item p {\n  line-height: 24px;\n  padding: 20px 30px !important;\n}\n.template .shop_categories .cat_item:hover {\n  background-color: #489613;\n}\n.template .shop_categories .cat_item:hover a {\n  color: #fff;\n}\n.template .shop_categories h1 {\n  font-size: 46px;\n}\n.template .shop_categories a {\n  text-decoration: none;\n}\n.template .shop_categories .cat_descr {\n  height: 144px;\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell:hover {\n  border: 4px solid #56AF1A;\n  padding: 57px 37px;\n  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.1);\n}\n.template .shop_categories .cat_cell:hover:after {\n  bottom: 57px;\n}\n.template .shop_categories .cat_description {\n  background: #fff;\n  padding: 30px;\n  border: 1px solid #E0E0E0;\n}\n.template .shop_categories .no-items {\n  text-align: center;\n  width: 100%;\n  font-weight: bold;\n  background: #fff;\n  padding: 22px;\n}\n.template .shop_categories .cat_cell, .template .shop_categories .product_cell {\n  background: #fff;\n  border: 1px solid #E0E0E0;\n  padding: 60px 40px;\n  display: flex;\n  flex-direction: column;\n  height: 440px;\n  position: relative;\n}\n.template .shop_categories .cat_cell:after, .template .shop_categories .product_cell:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 60px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/gradw.png);\n}\n.template .shop_categories .cat_cell h3, .template .shop_categories .product_cell h3 {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell img, .template .shop_categories .product_cell img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .shop_categories .cat_description {\n  margin-top: 60px;\n}\n.template .shop_categories .product_cell {\n  padding: 30px 30px !important;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  height: 440px;\n  position: relative;\n}\n.template .shop_categories .product_cell:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 30px;\n  left: 0;\n  background: url(\"/templates/maximum/assets/img/gradw.png\");\n}\n.template .shop_categories .cat_descr {\n  height: auto;\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n}\n.template .about_us {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .about_us .pic_container {\n  margin-right: 102px;\n}\n.template .about_us .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .about_us .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .about_us .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .about_us .text_container .about_block h2 {\n  width: 100%;\n}\n.template .about_us .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .inter {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .inter ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .inter .pic_container {\n  margin-left: 102px;\n  position: relative;\n}\n.template .inter .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: -25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .inter .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .inter .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .inter .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .inter .text_container .about_block h2 {\n  width: 100%;\n}\n.template .inter .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .inter .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .inter .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .map_link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .left_pic {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .left_pic .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .left_pic .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .left_pic .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .left_pic .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .left_pic .text_container .about_block h2 {\n  width: 100%;\n}\n.template .left_pic .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .left_pic .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .left_pic .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .contact {\n  margin-top: 40px;\n  position: relative;\n  display: flex;\n}\n.template .contact .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .contact .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .contact .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .contact .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .contact .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .contact .text_container .about_block h2 {\n  width: 100%;\n}\n.template .contact .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .contact .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .contact .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .left_pic3 {\n  margin-top: 100px;\n  position: relative;\n}\n.template .left_pic3 .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .left_pic3 .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic3 h3 {\n  margin-bottom: 0px;\n}\n.template .left_pic3 .pic_container.right {\n  margin-left: 102px !important;\n  margin-right: 0px !important;\n  position: relative;\n}\n.template .left_pic3 .pic_container.right:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: -25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic3 .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .left_pic3 .info_cont {\n  margin-top: 60px;\n}\n.template .left_pic3 .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .left_pic3 .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .left_pic3 .text_container .about_block h2 {\n  width: 100%;\n}\n.template .left_pic3 .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .left_pic3 .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .left_pic3 .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .callback_block {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .callback_block .pic_container {\n  margin-right: 102px;\n}\n.template .callback_block .pic_container img {\n  height: 100%;\n  width: 511px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .callback_block .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .callback_block .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .callback_block .text_container .about_block h2 {\n  width: 100%;\n}\n.template .callback_block .text_container .about_block .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .callback_block .text_container .about_block .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .callback_block .text_container .about_block .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .burger-menu:hover .service_window {\n  opacity: 1;\n  -webkit-user-select: auto;\n     -moz-user-select: auto;\n      -ms-user-select: auto;\n          user-select: auto;\n  pointer-events: auto;\n}\n.template .service_window {\n  width: 1200px;\n  background: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin-top: 35px;\n  border-radius: 6px;\n  padding: 60px 102px;\n  z-index: 99999;\n  opacity: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  transition: 0.5s all;\n}\n.template .service_window img {\n  width: 72px !important;\n  height: 72px !important;\n  display: block;\n  margin: 0 auto;\n}\n.template .service_window a {\n  width: 100%;\n  display: block;\n  color: #333333 !important;\n  text-align: center;\n  padding-top: 15px;\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n  min-height: 90px;\n}\n.template .service_window .menu_f {\n  background: white;\n  padding: 12px;\n  margin: 0px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.template .service_window .menu_f:hover {\n  box-shadow: 0 0 10px #eee;\n}\n.template .service_window .col-lg-five {\n  margin-bottom: 30px;\n}\n.template .examples {\n  position: relative;\n}\n.template .examples h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .examples .all_catalogue a {\n  margin: auto;\n}\n.template .examples .ex_block {\n  height: 316px;\n  display: flex;\n  flex-basis: calc(16.666666% - 8px);\n  justify-content: center;\n  flex-direction: column;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 4px;\n  position: relative;\n}\n.template .examples .pr-row {\n  display: flex;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.template .examples .pr-row .ex_block {\n  flex-basis: calc(33.333333% - 8px);\n}\n.template .examples .ex-container {\n  max-width: 1920px;\n  display: flex;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.template .projects h1 p {\n  font-size: 46px;\n  color: #333333;\n}\n.template .only_text {\n  margin-top: 20px;\n}\n.template .only_text .first_text {\n  margin-bottom: 40px;\n}\n.template .only_text ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .only_text .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .only_text h3 {\n  margin: 0;\n}\n.template .only_text h3 p {\n  padding: 0 !important;\n}\n.template .only_text .pic_container.left {\n  margin-right: 100px;\n}\n.template .only_text .pic_container.right {\n  margin-left: 100px;\n}\n.template .benefits_left {\n  margin-top: 150px;\n  position: relative;\n}\n.template .benefits_left .first_text {\n  margin-bottom: 40px;\n}\n.template .benefits_left .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .benefits_left h3 {\n  margin: 0;\n}\n.template .benefits_left h3 p {\n  padding: 0 !important;\n}\n.template .benefits_left .pic_container.left {\n  margin-right: 100px;\n}\n.template .benefits_left .pic_container.right {\n  margin-left: 100px;\n}\n.template .benefits_left h2 {\n  margin-bottom: 40px;\n}\n.template .benefits_left ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .benefits_left #callback {\n  padding-right: 50px;\n}\n.template .benefits_left .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits_left .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits_left .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits_left h2 {\n  display: block;\n}\n.template .benefits_left .decor_img {\n  position: absolute;\n  top: -110px;\n  left: 19px;\n}\n.template .benefits_left .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits_left .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits_left .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits_left .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits_left .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits_left .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits_left .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .benefits3 {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits3 h2 {\n  margin-bottom: 60px;\n}\n.template .benefits3 #callback {\n  padding-right: 50px;\n}\n.template .benefits3 .ic_label {\n  align-items: center;\n  justify-content: center;\n}\n.template .benefits3 .ico_img {\n  width: 102px;\n  height: 102px;\n  margin-bottom: 20px;\n  min-width: 102px;\n  margin-right: 22px;\n}\n.template .benefits3 .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits3 .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits3 h2 {\n  display: block;\n}\n.template .benefits3 .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits3 .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits3 .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits3 .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits3 .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits3 .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits3 .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits3 .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .benefits {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits h2 {\n  margin-bottom: 60px;\n}\n.template .benefits #callback {\n  padding-right: 50px;\n}\n.template .benefits .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits h2 {\n  display: block;\n}\n.template .benefits .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .catalogue {\n  margin-top: 100px;\n  position: relative;\n}\n.template .catalogue h1 {\n  font-family: \"MeriBold\";\n  font-size: 46px;\n  font-weight: bold;\n  color: #333333;\n}\n.template .catalogue h1 p {\n  color: #333333;\n}\n.template .catalogue h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .catalogue .all_catalogue {\n  margin-top: 30px;\n}\n.template .catalogue .all_catalogue a {\n  margin: auto;\n}\n.template .catalogue .cat_block {\n  border-radius: 8px;\n  padding: 30px;\n  height: 312px;\n  margin-bottom: 30px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  position: relative;\n}\n.template .catalogue .cat_block a {\n  align-self: flex-end;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  z-index: 99;\n}\n.template .catalogue .cat_block:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left;\n  pointer-events: none;\n  border-radius: 8px;\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/NzgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzYzNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzI0OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT9mMzYzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzP2MxMjgiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9taXhpbnMvdGFnX3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzg2MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzNiMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzIxNGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT8zNDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/YmVlNCJdLCJuYW1lcyI6WyJkYXRhIiwidGFncyIsIm1ldGhvZHMiLCJwYXJzZSIsIm1vZHVsZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsImkiLCJsZW5ndGgiLCJ0YWdfaW5kZXgiLCJ0YWciLCJwdXNoIiwiZm9yRWFjaCIsInRhZ19zcGxpdGVkIiwic3BsaXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsc0VBRkE7QUFHQSxtQkFIQTtBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBREE7QUFJQSxHQVRBO0FBVUEsU0FWQSxxQkFVQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLEtBSEE7QUFJQSxHQWhCQTtBQWlCQTtBQUNBLGFBREEscUJBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxtQkFJQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1vZHVsZVwiIHYtaHRtbD1cInBhcnNlKG1vZHVsZSlcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHRhZ19wYXJzZXIgZnJvbSAnLi4vbWl4aW5zL3RhZ19wYXJzZXInXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk1vZHVsZVwiLFxuICAgICAgICBtaXhpbnM6IFt0YWdfcGFyc2VyXSxcbiAgICAgICAgcHJvcHM6IFsnbW9kdWxlJ10sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGEgOiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy5tb3VudCgpO1xuICAgICAgICAgICAgdGhpcy4kb24oJ2ZyZXNoJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW91bnQoKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgc2V0TW9kdWxlKG0pe1xuICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZSA9IG07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91bnQoKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRwcm9wcy5tb2R1bGUpO1xuICAgICAgICAgICAgICAgIC8vIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ2ltYWdlcyddLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ2ltYWdlcyddLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkIDogMCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IGltYWdlX3BhcmFtcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IGltYWdlX3BhcmFtcy53aWR0aCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlIDoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogMFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdHlwZVsyXTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlWzBdID09PSAnbGluaycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmtfcGFyYW1zID0gcGFyYW1zID8gSlNPTi5wYXJzZShwYXJhbXMpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ2xpbmtzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydsaW5rcyddLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBcItCh0YHRi9C70LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluayA6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiBsaW5rX3BhcmFtcyA/IGxpbmtfcGFyYW1zLmNsYXNzIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcHJvcHMubW9kdWxlWydsaW5rcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0uY2xhc3MgPSBsaW5rX3BhcmFtcy5jbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICd0ZXh0Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kcHJvcHMubW9kdWxlWyd0ZXh0cyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsndGV4dHMnXS5wdXNoKHt0ZXh0IDogXCLQotC10LrRgdGCXCJ9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlWzBdID09PSAnYmFja2dyb3VuZCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0gPT09IHVuZGVmaW5lZCAvLyYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0uaW1hZ2UgIT09ICdudWxsJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJy9pbWFnZXMvbm9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZighdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2JhY2tncm91bmQnKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJy9pbWFnZXMvbm9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBpdGVtLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY2h1bmtbMF0gIT09ICdzZXR0aW5ncycgJiYgY2h1bmsubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2ggPSB0aGlzLiRwcm9wcy5tb2R1bGVbY2h1bmtbMF0gKyAncyddW3BhcnNlSW50KGNodW5rWzFdKSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IHdpbmRvd1tjaHVua1swXV0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLiRzdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNEYXRhOiB7IGNodW5rOiBjaCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoaWxkcmVuLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJyNjaHVua18nICsgY2h1bmtbMF0gKyAnXycgKyBjaHVua1sxXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibXItM1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9zaXRlXCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiID48YSA6aHJlZj1cImhyZWZcIiBAY2xpY2s9XCJuYXZpZ2F0ZVwiPtCj0L/RgNCw0LLQu9C10L3QuNC1INGB0LDQudGC0L7QvDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5IZWxwZGVzayBNYW5hZ2VtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiPnt7IHBhZ2UubmFtZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2F2ZVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1saW5lXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGlkPVwiaG9tZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjaG9tZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiaG9tZVwiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+0JLQuNC30YPQsNC70YzQvdGL0Lkg0YDQtdC00LDQutGC0L7RgDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInByb2ZpbGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3Byb2ZpbGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInByb2ZpbGVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj7QntC/0LjRgdCw0L3QuNC1PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwiY29udGFjdC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjc2VvXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJjb250YWN0XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+U0VPPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IHBkLXktMjBcIiBpZD1cIm15VGFiQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIiBpZD1cImhvbWVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJob21lLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cIm1vZHVsZXNfc2hvdyA9ICFtb2R1bGVzX3Nob3dcIiBjbGFzcz1cImFkZF9tb2R1bGUgcG9pbnRlciB1c2VyLXNlbGVjdC1ub25lIG10LTRcIj4g0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70Yw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm1vZHVsZXNfc2hvd1wiIGNsYXNzPVwibW9kdWxlc19waWNrX2NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIiB2LWZvcj1cIm1vZHVsZSBpbiAkc3RvcmUuZ2V0dGVycy5tb2R1bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYXBwZW5kTW9kdWxlKG1vZHVsZSlcIj57eyBtb2R1bGUubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKG1vZHVsZSwgaW5kZXgpIGluIG1vZHVsZXNcIiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1vZHVsZV9ib3hcIiB2LWJpbmQ6aWQ9XCInbW9kdWxlXycgKyBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kdWxlX3NldHRpbmdzIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0X2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzd2FwKGluZGV4LCAtMSlcIj7QktCy0LXRgNGFPC9idXR0b24+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInN3YXAoaW5kZXgsIDEpXCI+0JLQvdC40Lc8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJkZWxldGVNb2R1bGUoaW5kZXgpXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjb3B5TW9kdWxlKGluZGV4KVwiPtCh0LrQvtC/0LjRgNC+0LLQsNGC0Ywg0LjQtzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1mb3I9XCJwYWdlIGluIHBhZ2VzXCIgQGNsaWNrPVwiY29weU1vZHVsZShwYWdlLCBtb2R1bGUsIGluZGV4KVwiID57eyBwYWdlLm5hbWUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2R1bGUgdi1iaW5kOm1vZHVsZT1cIm1vZHVsZVwiPjwvTW9kdWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cIm1vZHVsZXNfc2hvdyA9ICFtb2R1bGVzX3Nob3dcIiBjbGFzcz1cImFkZF9tb2R1bGUgcG9pbnRlciB1c2VyLXNlbGVjdC1ub25lIG10LTRcIj4g0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70Yw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9kdWxlc19zaG93XCIgY2xhc3M9XCJtb2R1bGVzX3BpY2tfY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCIgdi1mb3I9XCJtb2R1bGUgaW4gJHN0b3JlLmdldHRlcnMubW9kdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYXBwZW5kTW9kdWxlKG1vZHVsZSwgaW5kZXggKyAxKVwiPnt7IG1vZHVsZS5uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJwcm9maWxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwicHJvZmlsZS10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgbWctdC0xMCBtZy1sZy10LTAgYnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLmlzUHVibGlzaGVkXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwiaXNQdWJsaXNoZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImlzUHVibGlzaGVkXCI+INCe0L/Rg9Cx0LvQuNC60L7QstCw0L08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QotC10LrRgdGCINC80LXQvdGOPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5tZW51XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwic2VvXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFjdC10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+U0VPINC30LDQs9C+0LvQvtCy0L7QujwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UudGl0bGVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlNFTyDQvtC/0LjRgdCw0L3QuNC1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5kZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNFTyDQvtC/0LjRgdCw0L3QuNC1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPnVybCDRgdGC0YDQsNC90LjRhtGLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5zbHVnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwidXJsINGB0YLRgNCw0L3QuNGG0YtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTW9kdWxlIGZyb20gJy4vLi4vLi4vbW9kdWxlcy9Nb2R1bGUnO1xuICAgIGltcG9ydCBzdHlsZXMgZnJvbSAnL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiUGFnZVwiLFxuICAgICAgICBjb21wb25lbnRzOntcbiAgICAgICAgICAgIE1vZHVsZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlIDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJ9Cd0L7QstCw0Y8g0YHRgtGA0LDQvdC40YbQsCcsXG4gICAgICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlcyA6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnMicsXG4gICAgICAgICAgICAgICAgbW9kdWxlc19zaG93IDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbW9kdWxlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm1vZHVsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMucGFnZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoIDoge1xuICAgICAgICAgICAgJ3BhZ2Uuc2x1Zyc6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5wYWdlLmlkICYmIHRoaXMucGFnZS5pZCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5zbHVnID0gd2luZG93LnVybFJ1c0xhdCh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGFnZS5uYW1lJzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBhZ2UuaWQgJiYgdGhpcy5wYWdlLmlkICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5zbHVnID0gd2luZG93LnVybFJ1c0xhdCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UudGl0bGUgPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9wYWdlcycpO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9tb2R1bGVzJywgdGhpcy5wYWdlX2lkKTtcbiAgICAgICAgICAgIHRoaXMucGFnZV9pZCA9ICEhdGhpcy4kcm91dGUucGFyYW1zLmlkID8gcGFyc2VJbnQodGhpcy4kcm91dGUucGFyYW1zLmlkKSA6IG51bGw7XG4gICAgICAgICAgICBpZih0aGlzLnBhZ2VfaWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfcGFnZScsIHRoaXMucGFnZV9pZCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0b3JlLmdldHRlcnMucGFnZSh0aGlzLnBhZ2VfaWQpLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kZW1pdCgndGl0bGVTZXQnLCB0aGlzLiRzdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHRoaXMuJHN0b3JlLmdldHRlcnMucGFnZSh0aGlzLnBhZ2VfaWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdCA9IHguaW5jbHVkZXMo4oCcaHRtbOKAnSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldF9tb2R1bGVfY2h1bmsoMSwgMSwgJ3RleHQnLCAxKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFwcGVuZE1vZHVsZShtb2R1bGUsIGluZGV4ID0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmsgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA6IG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlX3RlbXBsYXRlX2lkIDogbW9kdWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXMgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dHMgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbGlua3MgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZHMgOiBbXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzLnB1c2gobSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4LCAwLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3dhcChpbmRleF9BLCBkaXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleF9BLCBkaXIsIChpbmRleF9BICsgZGlyKSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICBpZihpbmRleF9BICsgZGlyIDw9IDAgfHwgaW5kZXhfQSArIGRpciA+PSB0aGlzLnBhZ2UubW9kdWxlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhfQSArIGRpcl0gPSB0aGlzLnBhZ2UubW9kdWxlcy5zcGxpY2UoaW5kZXhfQSxpbmRleF9BICsgZGlyLCB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9BICsgZGlyXSlbaW5kZXhfQV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRlbXAgPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9BXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4X0EsIDEsIHRlbXApO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2UubW9kdWxlcy5zcGxpY2UoaW5kZXhfQSArIGRpciwgMSwgdGVtcCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZWxlbV8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZHVsZV8nICsgaW5kZXhfQSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbGVtXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kdWxlXycgKyAoaW5kZXhfQSArIGRpcikpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtXzEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbV8yLCBlbGVtXzEucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGV0IG0gPSB0aGlzLnBhZ2UubW9kdWxlcztcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGVtcCA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0FdO1xuICAgICAgICAgICAgICAgIC8vIG1baW5kZXhfQV0gPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9CXTtcbiAgICAgICAgICAgICAgICAvLyBtW2luZGV4X0JdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2UubW9kdWxlcyA9IG07XG4gICAgICAgICAgICAgICAgLy8gbS5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hcHBlbmRNb2R1bGUobW9kdWxlKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy90aGlzLnBhZ2UubW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHsgcmV0dXJuIGNoaWxkLiRvcHRpb25zLm5hbWUgPT09IFwiTW9kdWxlXCI7IH0pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGl0ZW0uc2V0TW9kdWxlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGl0ZW0uJGVtaXQoJ2ZyZXNoJyk7XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVNb2R1bGUoaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29weU1vZHVsZShwYWdlLCBtb2R1bGUsIGluZGV4KXtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcGFnZS5tb2R1bGVzLmZpbHRlcigobSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS50ZW1wbGF0ZS5pZCA9PT0gbW9kdWxlLnRlbXBsYXRlLmlkO1xuICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4XSA9IGRhdGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZU1vZHVsZShpbmRleCwgZGlyKXtcbiAgICAgICAgICAgICAgICBpZihpbmRleCArIGRpciA9PT0gMCB8fCBpbmRleCArIGRpciA+IHRoaXMucGFnZS5tb2R1bGVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vW3RoaXMucGFnZS5tb2R1bGVzW2luZGV4ICsgZGlyXSwgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdXSA9IFt0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF0sIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4ICsgZGlyXV07XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wYWdlLm1vZHVsZXMucHVzaCh0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGFnZS5tb2R1bGVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSB0aGlzLnBhZ2UubW9kdWxlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbVtpbmRleF0gPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleCArIGRpcl07XG4gICAgICAgICAgICAgICAgICAgIG1baW5kZXggKyBkaXJdID0gdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlcyA9IG07XG5cbiAgICAgICAgICAgICAgICAgICAgLy9lbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW0sIGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRjaGlsZHJlblswXS4kb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHsgcmV0dXJuIGNoaWxkLiRvcHRpb25zLm5hbWUgPT09IFwiTW9kdWxlXCI7IH0pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS4kZW1pdCgnZnJlc2gnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZSgpe1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9kdWN0LmNhdGVnb3J5X2lkID0gISF0aGlzLmNhdGVnb3J5ID8gdGhpcy5jYXRlZ29yeS5pZCA6IDA7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWV0aG9kID0gISF0aGlzLnBhZ2UuaWQgPyAndXBkYXRlX3BhZ2UnIDogJ3N0b3JlX3BhZ2UnO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9kdWN0LmltYWdlcyA9IHRoaXMuaW1hZ2VzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2gobWV0aG9kLCB0aGlzLnBhZ2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdwYWdlcyd9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLm1vZHVsZXNfcGlja19jb250e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmID4gZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hZGRfbW9kdWxle1xuICAgICAgICBib3JkZXI6IDRweCBkYXNoZWQgI2VlZWVlZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2M3YzNjMztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmY7XG4gICAgfVxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gICAgLm1vZHVsZV9zZXR0aW5nc3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL2ljb25zL3NsaWRlcnMuc3ZnKSBjZW50ZXIgbm8tcmVwZWF0ICNmZmY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgYWxsO1xuICAgIH1cbiAgICAubW9kdWxlX2JveDpob3ZlciAubW9kdWxlX3NldHRpbmdze1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgLnNldHRfYm94e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgLmlubmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuXG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Vze1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbjwvc3R5bGU+XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAyMHB4IDg0cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kOiAjNTZBRjFBO1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxufVxcblxcbi5jb250YWluZXJfc21hbGwge1xcbiAgbWF4LXdpZHRoOiAxMDUwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbn1cXG5cXG4ucHQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5tdC02MCB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cXG4ubWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLm10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNvbC1sZy0xIHtcXG4gICAgZmxleDogMCAwIDguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0yIHtcXG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTMge1xcbiAgICBmbGV4OiAwIDAgMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNCB7XFxuICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1maXZlIHtcXG4gICAgZmxleDogMCAwIDIwJTtcXG4gICAgbWF4LXdpZHRoOiAyMCU7XFxuICB9XFxuXFxuICAuY29sLWxnLTUge1xcbiAgICBmbGV4OiAwIDAgNDEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNiB7XFxuICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy03IHtcXG4gICAgZmxleDogMCAwIDU4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTgge1xcbiAgICBmbGV4OiAwIDAgNjYuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOSB7XFxuICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMCB7XFxuICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMSB7XFxuICAgIGZsZXg6IDAgMCA5MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMiB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5jb2wtMSwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wsIC5jb2wtYXV0bywgLmNvbC1zbS0xLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbSwgLmNvbC1zbS1hdXRvLCAuY29sLW1kLTEsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLCAuY29sLW1kLWF1dG8sIC5jb2wtbGctMSwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGcsIC5jb2wtbGctYXV0bywgLmNvbC14bC0xLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bCwgLmNvbC14bC1hdXRvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGZcIikpICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGZcIikpICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01vbnRzZXJyYXQtTWVkaXVtLnR0ZlwiKSkgKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTW9udHNlcnJhdC1Cb2xkLnR0ZlwiKSkgKyBcIik7XFxufVxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndiLXBhZGRpbmcge1xcbiAgcGFkZGluZzogODRweCAxMTRweDtcXG59XFxuXFxuLnBhZ2luYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4ucGFnZS1saW5rIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICM0ODk2MTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkZDRlMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnBhZ2UtbGluazpob3ZlciB7XFxuICB6LWluZGV4OiAyO1xcbiAgY29sb3I6ICMwMTQ4YWU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlN2VkO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2RkNGUwO1xcbn1cXG5cXG4ucGFnZS1saW5rOmZvY3VzIHtcXG4gIHotaW5kZXg6IDI7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMSwgMTA0LCAyNTAsIDAuMjUpO1xcbn1cXG5cXG4ucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnBhZ2UtaXRlbTpsYXN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg5NjEzO1xcbiAgYm9yZGVyLWNvbG9yOiAjNDg5NjEzO1xcbn1cXG5cXG4ucGFnZS1pdGVtLmRpc2FibGVkIC5wYWdlLWxpbmsge1xcbiAgY29sb3I6ICM3OTg3YTE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGN1cnNvcjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNjZGQ0ZTA7XFxufVxcblxcbi5wYWdpbmF0aW9uLWxnIC5wYWdlLWxpbmsge1xcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XFxuICBmb250LXNpemU6IDEuMDkzNzVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4ucGFnaW5hdGlvbi1sZyAucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ucGFnaW5hdGlvbi1sZyAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnBhZ2luYXRpb24tc20gLnBhZ2UtbGluayB7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NjU2MnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQgLnBhZ2UtbGluayB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjJyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi13aWR0aDogMTIzMHB4O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5hbGxfaW1nX3dpZHRoIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRlbXBsYXRlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSBhIHtcXG4gIGNvbG9yOiAjNTVBMzIxO1xcbn1cXG4udGVtcGxhdGUgLmZsZXgtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcmlCb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxufVxcbi50ZW1wbGF0ZSBoMSBwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRlbXBsYXRlIGgyIHAge1xcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfY2VsbCBvbCB7XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbn1cXG4udGVtcGxhdGUgLnJlcV90YWJsZSB0ZCB7XFxuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcbn1cXG4udGVtcGxhdGUgLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50ZW1wbGF0ZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X2hlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAub25seV9oZWFkZXIgaDEsIC50ZW1wbGF0ZSAub25seV9oZWFkZXIgaDEgcCB7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXNpemU6IDQ2cHg7XFxufVxcbi50ZW1wbGF0ZSAuZGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmRkIC5kZF9tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5OTk5O1xcbn1cXG4udGVtcGxhdGUgLmRkIC5kZF9tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi50ZW1wbGF0ZSAuZGQgLmRkX21lbnUgdWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzBweDtcXG4gIHRvcDogMTBweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XFxufVxcbi50ZW1wbGF0ZSAuZGQgLmRkX21lbnUgdWwgbGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5kZCAuZGRfbWVudSB1bCBhIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWluLXdpZHRoOiAxNDBweDtcXG59XFxuLnRlbXBsYXRlIC5kZDpob3ZlciAuZGRfbWVudSB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfdGV4dCB7XFxuICB3aWR0aDogNTgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X3RleHQgLmNvbnQge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X3RleHQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfY2VsbCAubmFtZSB7XFxuICBiYWNrZ3JvdW5kOiAjNDg5NjEzO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgbGluZS1oZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udGVtcGxhdGUgLnZhY2FuY3lfY2VsbCAuY29udGVudF90aGluIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC50b3BfY29udGFpbmVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmljb19pbWcge1xcbiAgd2lkdGg6IDcycHg7XFxuICBoZWlnaHQ6IDcycHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmljb19pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIuZnVsbHNpemUge1xcbiAgbWluLWhlaWdodDogMTA4MHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyLmZ1bGxzaXplIC5pY29faW1nIHtcXG4gIHdpZHRoOiA5NHB4O1xcbiAgaGVpZ2h0OiA5NHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyLmZ1bGxzaXplIGgxIHAge1xcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnRyYXNwX2JveCB7XFxuICBwYWRkaW5nOiA3MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtNzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNzBweDtcXG4gIGJhY2tncm91bmQ6ICMxNTM1MDA2MDtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC50cmFzcF9ib3ggLmljb19pbWcge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEzOTVweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnBob25lX2hlYWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJ1cmdlci1tZW51IHtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9idXJnZXIucG5nKSBuby1yZXBlYXQgbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUgLnRvcF9jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmhlYWRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxfc2lkZSwgLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIHtcXG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjM0cHgpIC8gMik7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDc0cHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubGlua3MgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5sX3NpZGUgLmxpbmtzIHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIC5saW5rcyB1bCB7XFxuICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5yX3NpZGUgLmxpbmtzIHVsIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5iZ19pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDk2MHB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5iZ19pbWFnZSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQ6ICMyOTU3MEI7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC50YWJfY29udCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzOEIxMztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzU2QUYxQTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAudGFiX2NvbnQgLnRiIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNTZBRjFBO1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IGE6aG92ZXIge1xcbiAgY29sb3I6ICM1NkFGMUE7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBhOmhvdmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogLTRweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZBRjFBO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290X21lbnUgbGkge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmNvcHkge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXRvcDogODZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290ZXJfYWRkcyB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLnByb2R1Y3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLnByb2R1Y3QgaDEge1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbn1cXG4udGVtcGxhdGUgLnByb2R1Y3QgLnByb2R1Y3QtaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAucHJvZHVjdCAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnRlbXBsYXRlIC5wcm9kdWN0IC5wcmljZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAubmV3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDE2MHB4O1xcbn1cXG4udGVtcGxhdGUgLm5ldyBoMSB7XFxuICBmb250LXNpemU6IDQ2cHg7XFxufVxcbi50ZW1wbGF0ZSAubmV3IC5uZXctaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLnRlbXBsYXRlIC5uZXcgLm5ldy1kZXNjcmlwdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAubmV3IC5kYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUgaDEge1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUgaDEgcCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUgLnJvdW5kLTczIHtcXG4gIHdpZHRoOiA3M3B4O1xcbiAgaGVpZ2h0OiA3M3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSAuY2xpZW50X2ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IC5pbWdfd2gge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSAubmFtZV90aGluIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSAubmFtZSwgLnRlbXBsYXRlIC5sZWZ0X21lbnUgLmNpdHkge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLnRlbXBsYXRlIGEubi1kZWMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwge1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLtGBbGllbnRfY2VsbCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLmRlbGl2IHtcXG4gIHdpZHRoOiA2ODBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4udGVtcGxhdGUgLmRlbGl2IC5kZWxpdmVyIGltZyB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuZGVsaXYgLmRlbGl2ZXIgLmRlc2NyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRlbXBsYXRlIC5pbmZvX2NvbnQgLmFib3V0X2Jsb2NrIHtcXG4gIHBhZGRpbmc6IDMwcHggMHB4O1xcbn1cXG4udGVtcGxhdGUgLmZ1bGxzaXplIC53aGl0ZV9jZWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMzEzcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9ncmFkLnBuZykgcmVwZWF0LXggbGVmdCAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLmZ1bGxzaXplIC53aGl0ZV9jZWxsIGgzIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuZnVsbHNpemUgLndoaXRlX2NlbGwgLmRhdGUge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5mdWxsc2l6ZSBpbWcge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLmZ1bGxzaXplIC5uZXdzLWNvbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuZnVsbHNpemUgLm5ld3MtY29udDphZnRlciB7XFxuICBjb250ZW50OiBub25lO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRlbXBsYXRlIC5mdWxsc2l6ZSAubmV3LWRlc2NyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3czpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyAubmV3cy1jb250IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEzMHB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyAubmV3cy1jb250IC5kYXRlIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyAubmV3cy1jb250OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDIwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKC90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvaW1nL2dyYWR3LnBuZyk7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5uZXdzIC5uZXctZGVzY3Ige1xcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyBoMyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyAubmFtZV90aGluIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5hY3Rpb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHdpZHRoOiA2ODhweDtcXG4gIGhlaWdodDogNDA1cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAud2hpdGVfY2VsbC5hY3Rpb25zIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLndoaXRlX2Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA3MHB4IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC5wcmljZXMgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG4udGVtcGxhdGUgLnByX2NvbnRhaW5lciAucHJpY2VzIHRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLnByaWNlcyB0YWJsZSB0ciwgLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLnByaWNlcyB0YWJsZSB0ZCwgLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLnByaWNlcyB0YWJsZSB0aCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxufVxcbi50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC5wcmljZXMgdGFibGUgLmItYm90IHRkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzgyODI4MjtcXG59XFxuLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLnByaWNlcyB0YWJsZSB0aCB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbn1cXG4udGVtcGxhdGUgLmFzaWRlX21lbnUgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbn1cXG4udGVtcGxhdGUgLmFzaWRlX21lbnUgdWwgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM0ODk2MTM7XFxufVxcbi50ZW1wbGF0ZSAuYXNpZGVfbWVudSB1bCBsaS5hY3RpdmUgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRlbXBsYXRlIC5hc2lkZV9tZW51IHVsIGEge1xcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI0JEQkRCRDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICM0RjRGNEY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4udGVtcGxhdGUgLnJlcV90YWJsZSB0ciB7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLnRlbXBsYXRlIC5yZXFfdGFibGUgdHIgdGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjQkRCREJEO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG4udGVtcGxhdGUgLnJlcV90YWJsZSB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4udGVtcGxhdGUgLm1hcCB7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG4udGVtcGxhdGUgI21hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDQ2MHB4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRzX2JveCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2l0ZW0gYSB7XFxuICBjb2xvcjogIzRGNEY0RjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2l0ZW0gcCB7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4OTYxMztcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9pdGVtOmhvdmVyIGEge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIGgxIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfZGVzY3Ige1xcbiAgaGVpZ2h0OiAxNDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzRGNEY0RjtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICM1NkFGMUE7XFxuICBwYWRkaW5nOiA1N3B4IDM3cHg7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsOmhvdmVyOmFmdGVyIHtcXG4gIGJvdHRvbTogNTdweDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9kZXNjcmlwdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5uby1pdGVtcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDIycHg7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfY2VsbCwgLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLnByb2R1Y3RfY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcXG4gIHBhZGRpbmc6IDYwcHggNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA0NDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsOmFmdGVyLCAudGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAucHJvZHVjdF9jZWxsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDYwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKC90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvaW1nL2dyYWR3LnBuZyk7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfY2VsbCBoMywgLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLnByb2R1Y3RfY2VsbCBoMyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGwgaW1nLCAudGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAucHJvZHVjdF9jZWxsIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5wcm9kdWN0X2NlbGwge1xcbiAgcGFkZGluZzogMzBweCAzMHB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDQ0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAucHJvZHVjdF9jZWxsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9ncmFkdy5wbmdcXFwiKTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9kZXNjciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICM0RjRGNEY7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgb2wge1xcbiAgbGlzdC1zdHlsZTogZGlzYztcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAucGljX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogMTAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnBpY19jb250YWluZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmZmY7XFxuICBsZWZ0OiAtMjVweDtcXG4gIHRvcDogMjVweDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnBpY19jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHAge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5tYXBfbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAucGljX2NvbnRhaW5lcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZmZjtcXG4gIGxlZnQ6IDI1cHg7XFxuICB0b3A6IDI1cHg7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC5waWNfY29udGFpbmVyID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSBwIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAucGljX2NvbnRhaW5lcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZmZjtcXG4gIGxlZnQ6IDI1cHg7XFxuICB0b3A6IDI1cHg7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnBpY19jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSBwIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC5waWNfY29udGFpbmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmZmO1xcbiAgbGVmdDogMjVweDtcXG4gIHRvcDogMjVweDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXIucmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwMnB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAucGljX2NvbnRhaW5lci5yaWdodDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZmZjtcXG4gIGxlZnQ6IC0yNXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgei1pbmRleDogMDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLmluZm9fY29udCB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSBwIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAucGljX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMnB4O1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC5waWNfY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTExcHg7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4MjgyODI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYnVyZ2VyLW1lbnU6aG92ZXIgLnNlcnZpY2Vfd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi50ZW1wbGF0ZSAuc2VydmljZV93aW5kb3cge1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luLXRvcDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDYwcHggMTAycHg7XFxuICB6LWluZGV4OiA5OTk5OTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuLnRlbXBsYXRlIC5zZXJ2aWNlX3dpbmRvdyBpbWcge1xcbiAgd2lkdGg6IDcycHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogNzJweCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnRlbXBsYXRlIC5zZXJ2aWNlX3dpbmRvdyBhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIG1pbi1oZWlnaHQ6IDkwcHg7XFxufVxcbi50ZW1wbGF0ZSAuc2VydmljZV93aW5kb3cgLm1lbnVfZiB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRlbXBsYXRlIC5zZXJ2aWNlX3dpbmRvdyAubWVudV9mOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlZWU7XFxufVxcbi50ZW1wbGF0ZSAuc2VydmljZV93aW5kb3cgLmNvbC1sZy1maXZlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAuZXhhbXBsZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIGgyIHtcXG4gIHBhZGRpbmc6IDAgMTE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2OHB4O1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5hbGxfY2F0YWxvZ3VlIGEge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5leF9ibG9jayB7XFxuICBoZWlnaHQ6IDMxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtYmFzaXM6IGNhbGMoMTYuNjY2NjY2JSAtIDhweCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5wci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5wci1yb3cgLmV4X2Jsb2NrIHtcXG4gIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMzMzMzJSAtIDhweCk7XFxufVxcbi50ZW1wbGF0ZSAuZXhhbXBsZXMgLmV4LWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDE5MjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLnRlbXBsYXRlIC5wcm9qZWN0cyBoMSBwIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCAuZmlyc3RfdGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCBvbCB7XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IGgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQgaDMgcCB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IC5waWNfY29udGFpbmVyLmxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQgLnBpY19jb250YWluZXIucmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQge1xcbiAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuZmlyc3RfdGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgaDMgcCB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAucGljX2NvbnRhaW5lci5sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAucGljX2NvbnRhaW5lci5yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgb2wge1xcbiAgbGlzdC1zdHlsZTogZGlzYztcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0ICNjYWxsYmFjayB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmljb19pbWcge1xcbiAgd2lkdGg6IDcycHg7XFxuICBoZWlnaHQ6IDcycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmljb19pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLndoaXRlX2Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCBoMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5kZWNvcl9pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTEwcHg7XFxuICBsZWZ0OiAxOXB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmRlY29yX2ltZzIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTE3cHg7XFxuICByaWdodDogMTlweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5waWNfY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmNvbnQgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODI4MjgyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA0NjBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgI2NhbGxiYWNrIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5pY19sYWJlbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5pY29faW1nIHtcXG4gIHdpZHRoOiAxMDJweDtcXG4gIGhlaWdodDogMTAycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWluLXdpZHRoOiAxMDJweDtcXG4gIG1hcmdpbi1yaWdodDogMjJweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmljb19pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAud2hpdGVfYmxvY2sge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5kZWNvcl9pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTEwcHg7XFxuICByaWdodDogMTlweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmRlY29yX2ltZzIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTE3cHg7XFxuICByaWdodDogMTlweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5jb250IGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuZm9ybS1ncm91cCBsYWJlbCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODI4MjgyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA0NjBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgI2NhbGxiYWNrIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmljb19pbWcge1xcbiAgd2lkdGg6IDcycHg7XFxuICBoZWlnaHQ6IDcycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5pY29faW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAud2hpdGVfYmxvY2sge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyBoMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuZGVjb3JfaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTExMHB4O1xcbiAgcmlnaHQ6IDE5cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmRlY29yX2ltZzIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTE3cHg7XFxuICByaWdodDogMTlweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAucGljX2NvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuY29udCBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODI4MjgyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA0NjBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSBoMSBwIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSBoMiB7XFxuICBwYWRkaW5nOiAwIDExNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjhweDtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmFsbF9jYXRhbG9ndWUge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmFsbF9jYXRhbG9ndWUgYSB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2sge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMzEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5jYXRfYmxvY2sgYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuY2F0X2Jsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9ncmFkLnBuZykgcmVwZWF0LXggbGVmdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2R1bGVzX3BpY2tfY29udFtkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9kdWxlc19waWNrX2NvbnQgPiBkaXZbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAyMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGRfbW9kdWxlW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgYm9yZGVyOiA0cHggZGFzaGVkICNlZWVlZWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjYzdjM2MzO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW46IDQwcHggMDtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmO1xcbn1cXG4uY29udGFpbmVyW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4ubW9kdWxlX3NldHRpbmdzW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7XFxuICB6LWluZGV4OiA5OTk5OTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL2ljb25zL3NsaWRlcnMuc3ZnKSBjZW50ZXIgbm8tcmVwZWF0ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiA1MDBtcyBhbGw7XFxufVxcbi5tb2R1bGVfYm94OmhvdmVyIC5tb2R1bGVfc2V0dGluZ3NbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdG9wOiAwcHg7XFxufVxcbi5zZXR0X2JveFtkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94W2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjAwcHg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG4ubW9kdWxlX3NldHRpbmdzOmhvdmVyIC5zZXR0X2JveCAuaW5uZXJbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XFxufVxcbi5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94IC5pbm5lciBidXR0b25bZGF0YS12LTkwOTAwYjFlXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ubW9kdWxlX3NldHRpbmdzOmhvdmVyIC5zZXR0X2JveCAuaW5uZXIgLnBhZ2VzW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kdWxlXCIsXG4gICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnBhcnNlKF92bS5tb2R1bGUpKSB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTNcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZC1zbS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtZy1iLTEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwibmF2XCIsIHsgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiYnJlYWRjcnVtYlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm9sXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iIGJyZWFkY3J1bWItc3R5bGUxIG1nLWItMTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvc2l0ZVwiLCBjdXN0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSByZWYuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGUgPSByZWYucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdmlnYXRlID0gcmVmLm5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHJlZi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGFjdEFjdGl2ZSA9IHJlZi5pc0V4YWN0QWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGhyZWYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogbmF2aWdhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KPQv9GA0LDQstC70LXQvdC40LUg0YHQsNC50YLQvtC8XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkhlbHBkZXNrIE1hbmFnZW1lbnRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFnZS5uYW1lKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtbm9uZSBkLW1kLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIHBkLXgtMTUgYnRuLXdoaXRlIGJ0bi11cHBlcmNhc2VcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQvtGF0YDQsNC90LjRgtGMXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudCBwZC15LTIwXCIsIGF0dHJzOiB7IGlkOiBcIm15VGFiQ29udGVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUgb3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiaG9tZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGVtcGxhdGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmUgbXQtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2R1bGVzX3Nob3cgPSAhX3ZtLm1vZHVsZXNfc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiDQlNC+0LHQsNCy0LjRgtGMINC80L7QtNGD0LvRjFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZHVsZXNfc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlc19waWNrX2NvbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS4kc3RvcmUuZ2V0dGVycy5tb2R1bGVzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3NpdGlvbi1yZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFwcGVuZE1vZHVsZShtb2R1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhtb2R1bGUubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubW9kdWxlcywgZnVuY3Rpb24obW9kdWxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2R1bGVfYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJtb2R1bGVfXCIgKyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2R1bGVfc2V0dGluZ3MgbXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRfYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbm5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVNb2R1bGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C00LDQu9C40YLRjFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb3B5TW9kdWxlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQutC+0L/QuNGA0L7QstCw0YLRjCDQuNC3XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGFnZXMsIGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29weU1vZHVsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwYWdlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIk1vZHVsZVwiLCB7IGF0dHJzOiB7IG1vZHVsZTogbW9kdWxlIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX21vZHVsZSBwb2ludGVyIHVzZXItc2VsZWN0LW5vbmUgbXQtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2R1bGVzX3Nob3cgPSAhX3ZtLm1vZHVsZXNfc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiDQlNC+0LHQsNCy0LjRgtGMINC80L7QtNGD0LvRjFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZHVsZXNfc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlc19waWNrX2NvbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS4kc3RvcmUuZ2V0dGVycy5tb2R1bGVzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3NpdGlvbi1yZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFwcGVuZE1vZHVsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG1vZHVsZS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcInByb2ZpbGUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTIgbWctdC0xMCBtZy1sZy10LTAgYnJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5pc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLmlzUHVibGlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJpc1B1Ymxpc2hlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnBhZ2UuaXNQdWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5wYWdlLmlzUHVibGlzaGVkLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBhZ2UuaXNQdWJsaXNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnBhZ2UuaXNQdWJsaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNQdWJsaXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNQdWJsaXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJpc1B1Ymxpc2hlZFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpc1B1Ymxpc2hlZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg0J7Qv9GD0LHQu9C40LrQvtCy0LDQvVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQotC10LrRgdGCINC80LXQvdGOXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UubWVudSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UubWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UubWVudSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcIm1lbnVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LfQstCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwic2VvXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImNvbnRhY3QtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNFTyDQt9Cw0LPQvtC70L7QstC+0LpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLnRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwidGl0bGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTRU8g0L7Qv9C40YHQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJ1cmwg0YHRgtGA0LDQvdC40YbRi1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLnNsdWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwidXJsINGB0YLRgNCw0L3QuNGG0YtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLnNsdWcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJzbHVnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi1saW5lXCIsIGF0dHJzOiB7IGlkOiBcIm15VGFiXCIsIHJvbGU6IFwidGFibGlzdFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImhvbWUtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI2hvbWVcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQktC40LfRg9Cw0LvRjNC90YvQuSDRgNC10LTQsNC60YLQvtGAXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcInByb2ZpbGUtdGFiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI3Byb2ZpbGVcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcInByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0J7Qv9C40YHQsNC90LjQtVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJjb250YWN0LXRhYlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNzZW9cIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImNvbnRhY3RcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiU0VPXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuL3N0eWxlLm1vZHVsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGY/OWNjYjg4NWM5Y2Y4ZTUwM2Q1NTdmMTVlMGIyY2JmMjRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC50dGY/YWRlOTFmNDczMjU1OTkxZjQxMGY2MTg1NzY5NjQzNGJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtTWVkaXVtLnR0Zj9jOGI2ZTA4M2FmM2Y5NDAwOTgwMTk4OWMzNzM5NDI1ZVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0Zj9lZTY1Mzk5MjFkNzEzNDgyYjhjY2Q0ZDBkMjM5NjFiYlwiOyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHBhcnNlKG1vZHVsZSl7XHJcbiAgICAgICAgICAgIGxldCBodG1sID0gbW9kdWxlLnRlbXBsYXRlLmh0bWw7XHJcbiAgICAgICAgICAgIGxldCB0YWdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZihodG1sW2ldID09PSBcIltcIiAmJiBodG1sW2krMV0gPT09IFwiW1wiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZ19pbmRleCA9IGkrMjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGh0bWxbdGFnX2luZGV4XSAhPT0gJ10nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICs9IGh0bWxbdGFnX2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhZyAhPT0gJ3Rva2VuJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhZ19zcGxpdGVkID0gdGFnLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKCdbWycgKyB0YWcgKyAnXV0nLCAnPGRpdiBpZD1cImNodW5rXycgKyB0YWdfc3BsaXRlZFswXSArICdfJyArIHRhZ19zcGxpdGVkWzFdICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50YWdzID0gdGFncztcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzZTQ5YjFmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAzZTQ5YjFmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDNlNDliMWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDNlNDliMWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDNlNDliMWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNlNDliMWYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDNlNDliMWYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL21vZHVsZXMvTW9kdWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNlNDliMWYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOTA5MDBiMWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcbWF4aW11bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MDkwMGIxZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MDkwMGIxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MDkwMGIxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTA5MDBiMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==