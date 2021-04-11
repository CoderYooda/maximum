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
exports.push([module.i, "@charset \"UTF-8\";\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.button {\n  padding: 20px 84px;\n  border-radius: 6px;\n  border: 0;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.primary {\n  background: #56AF1A;\n  color: #fff !important;\n}\n\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.container_small {\n  max-width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.pt-20 {\n  padding-top: 20px;\n}\n\n.mt-60 {\n  margin-top: 60px;\n}\n\n.mb-30 {\n  margin-bottom: 30px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n@media (min-width: 1246px) {\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n\n  .col-lg-five {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@font-face {\n  font-family: \"MeriBold\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Merriweather-Bold.ttf */ "./public/templates/maximum/assets/fonts/Merriweather-Bold.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Regular.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Medium.ttf")) + ");\n}\n@font-face {\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./public/templates/maximum/assets/fonts/Montserrat-Bold.ttf")) + ");\n}\n.w-100 {\n  width: 100%;\n}\n\n.wb-padding {\n  padding: 84px 114px;\n}\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #489613;\n  background-color: #fff;\n  border: 1px solid #cdd4e0;\n  text-decoration: none;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #0148ae;\n  text-decoration: none;\n  background-color: #e3e7ed;\n  border-color: #cdd4e0;\n}\n\n.page-link:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(1, 104, 250, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #489613;\n  border-color: #489613;\n}\n\n.page-item.disabled .page-link {\n  color: #7987a1;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #cdd4e0;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.09375rem;\n  line-height: 1.5;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.76562rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #F5F5F5;\n}\n\nhtml {\n  min-width: 1230px;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.all_img_width img {\n  width: 100%;\n}\n\n.template {\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 16px;\n  color: #333333;\n}\n.template a {\n  color: #55A321;\n}\n.template .flex-div {\n  display: flex;\n}\n.template h1 {\n  font-family: \"MeriBold\";\n  font-size: 72px;\n  font-weight: bold;\n  line-height: 60px;\n}\n.template h1 p {\n  padding-bottom: 0 !important;\n  color: #FFFFFF;\n  line-height: 60px;\n}\n.template h2 {\n  font-family: \"MeriBold\";\n  font-size: 36px;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.template h2 p {\n  padding-bottom: 0 !important;\n  line-height: 58px;\n}\n.template .vacancy_cell ol {\n  list-style: disc;\n}\n.template .req_table td {\n  white-space: break-spaces;\n}\n.template .font-weight-bold {\n  font-weight: bold;\n}\n.template p {\n  padding: 0;\n  margin: 0;\n  padding-bottom: 1em !important;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n}\n.template .only_text {\n  position: relative;\n}\n.template .only_header {\n  position: relative;\n}\n.template .only_header h1, .template .only_header h1 p {\n  font-size: 72px;\n  font-weight: bold;\n  line-height: 60px;\n  color: #333333;\n  font-size: 46px;\n}\n.template .dd {\n  position: relative;\n}\n.template .dd .dd_menu {\n  display: none;\n  position: absolute;\n  z-index: 9999999;\n}\n.template .dd .dd_menu ul {\n  list-style: none;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);\n  padding: 0 30px;\n  display: block;\n  margin-top: 15px;\n}\n.template .dd .dd_menu ul:before {\n  content: \"\";\n  position: absolute;\n  left: 30px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background: #fff;\n  transform: rotateZ(45deg);\n}\n.template .dd .dd_menu ul li {\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n}\n.template .dd .dd_menu ul a {\n  color: #333333;\n  line-height: 64px;\n  border-bottom: 1px solid #eee;\n  width: 100%;\n  display: block;\n  white-space: nowrap;\n  min-width: 140px;\n}\n.template .dd:hover .dd_menu {\n  display: block !important;\n}\n.template .vacancy_text {\n  width: 580px;\n  margin: 0 auto;\n}\n.template .vacancy_text .cont {\n  margin-top: 40px;\n}\n.template .vacancy_text img {\n  width: 100%;\n}\n.template .vacancy_cell .name {\n  background: #489613;\n  height: 64px;\n  line-height: 64px !important;\n  padding: 0 30px;\n  color: #fff;\n}\n.template .vacancy_cell .content_thin {\n  padding: 30px;\n}\n.template header {\n  position: relative;\n  color: #FFFFFF;\n  font-weight: 500;\n  background-position: center;\n  background-size: cover;\n  padding-bottom: 45px;\n}\n.template header .top_container a {\n  text-decoration: none;\n  color: #fff;\n  margin-bottom: 30px;\n  padding-bottom: 30px;\n}\n.template header .ico_img {\n  width: 72px;\n  height: 72px;\n}\n.template header .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template header h1 {\n  margin-top: 70px;\n}\n.template header.fullsize {\n  min-height: 1080px;\n}\n.template header.fullsize .ico_img {\n  width: 94px;\n  height: 94px;\n}\n.template header.fullsize h1 p {\n  line-height: 86px;\n}\n.template header .trasp_box {\n  padding: 70px;\n  margin-right: -70px;\n  margin-left: -70px;\n  background: #15350060;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  font-weight: 400;\n  margin-top: 70px;\n}\n.template header .trasp_box .ico_img {\n  margin-bottom: 20px;\n}\n.template header .bg {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  height: 1395px;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  pointer-events: none;\n}\n.template header .phone_head {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.template header .burger-menu {\n  background: url(/templates/maximum/assets/img/burger.png) no-repeat left;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  position: relative;\n}\n.template header .r_side .top_container {\n  text-align: right;\n}\n.template header .head_container {\n  display: flex;\n}\n.template header .l_side, .template header .r_side {\n  width: calc((100% - 234px) / 2);\n}\n.template header .links {\n  margin-top: 74px;\n}\n.template header .links a {\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  letter-spacing: 0.04em;\n}\n.template header .links ul {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.template header .l_side .links ul li {\n  margin-right: 30px;\n}\n.template header .r_side .links ul {\n  flex-flow: row-reverse;\n}\n.template header .r_side .links ul li {\n  margin-left: 30px;\n}\n.template header .bg_image {\n  position: absolute;\n  left: calc(50% - 960px);\n  height: 100%;\n  top: 0;\n  z-index: -1;\n}\n.template header .bg_image img {\n  display: block;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template footer {\n  margin-top: 100px;\n  background: #29570B;\n  padding-bottom: 60px;\n  padding-top: 60px;\n  position: relative;\n}\n.template footer .tab_cont {\n  border-bottom: 1px solid #438B13;\n  font-size: 18px;\n  font-weight: 600;\n  color: #56AF1A;\n}\n.template footer .tab_cont .tb {\n  border-bottom: 4px solid #56AF1A;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  line-height: 40px;\n  margin-bottom: -1px;\n}\n.template footer .foot_menu {\n  list-style: none;\n  padding: 0;\n  color: #fff;\n}\n.template footer .foot_menu a {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  line-height: 30px;\n  position: relative;\n}\n.template footer .foot_menu a:hover {\n  color: #56AF1A;\n}\n.template footer .foot_menu a:hover:after {\n  content: \"\";\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  bottom: -4px;\n  left: 0;\n  background-color: #56AF1A;\n}\n.template footer .foot_menu li {\n  margin: 20px 0;\n}\n.template footer .copy {\n  color: #fff;\n  padding-top: 86px;\n  display: block;\n}\n.template footer .footer_adds {\n  margin-top: 40px;\n}\n.template .product {\n  position: relative;\n}\n.template .product h1 {\n  font-size: 46px;\n}\n.template .product .product-image img {\n  width: 100%;\n  display: block;\n}\n.template .product .product-description {\n  background: #fff;\n  padding: 30px;\n  border-radius: 6px;\n}\n.template .product .price {\n  font-weight: bold;\n  font-size: 32px;\n  margin-top: 30px;\n}\n.template .new {\n  position: relative;\n  margin-bottom: 160px;\n}\n.template .new h1 {\n  font-size: 46px;\n}\n.template .new .new-image img {\n  width: 100%;\n  display: block;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .new .new-description {\n  background: #fff;\n  padding: 30px;\n  border-radius: 6px;\n  margin-bottom: 30px;\n}\n.template .new .date {\n  margin-bottom: 30px;\n}\n.template .left_menu {\n  position: relative;\n}\n.template .left_menu h1 {\n  font-size: 46px;\n  margin-bottom: 50px;\n}\n.template .left_menu h1 p {\n  color: #333333;\n}\n.template .left_menu .round-73 {\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n}\n.template .left_menu .client_img {\n  width: 100%;\n  margin-bottom: 25px;\n}\n.template .left_menu .img_wh {\n  display: block;\n  margin-bottom: 20px;\n}\n.template .left_menu .name_thin {\n  line-height: 24px;\n}\n.template .left_menu .name, .template .left_menu .city {\n  font-weight: 600;\n  line-height: 24px;\n  margin-bottom: 15px;\n}\n.template a.n-dec {\n  text-decoration: none;\n}\n.template .white_cell {\n  background: #FFFFFF;\n  border: 1px solid #E0E0E0;\n  padding: 30px;\n}\n.template .сlient_cell {\n  margin-bottom: 30px;\n}\n.template .deliv {\n  width: 680px;\n  margin: 0 auto;\n}\n.template .deliv .deliver img {\n  width: 120px;\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.template .deliv .deliver .descr {\n  text-align: center;\n}\n.template .info_cont .about_block {\n  padding: 30px 0px;\n}\n.template .fullsize .white_cell:before {\n  content: \"\";\n  position: absolute;\n  height: 313px;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left !important;\n}\n.template .fullsize .white_cell h3 {\n  color: #fff !important;\n}\n.template .fullsize .white_cell .date {\n  color: #fff !important;\n}\n.template .fullsize img {\n  width: 100% !important;\n  height: 100% !important;\n}\n.template .fullsize .news-cont {\n  position: absolute !important;\n  width: 100% !important;\n  bottom: 0;\n  height: auto !important;\n}\n.template .fullsize .news-cont:after {\n  content: none;\n  display: none;\n}\n.template .fullsize .new-descr {\n  display: none;\n}\n.template .white_cell.news {\n  padding: 0px;\n  margin-bottom: 30px;\n  height: 400px;\n  position: relative;\n}\n.template .white_cell.news:hover {\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);\n}\n.template .white_cell.news .news-cont {\n  padding: 20px;\n  height: calc(100% - 130px);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.template .white_cell.news .news-cont .date {\n  color: #333333;\n}\n.template .white_cell.news .news-cont:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 20px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/gradw.png);\n}\n.template .white_cell.news img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  margin-bottom: 0px;\n  display: block;\n}\n.template .white_cell.news .new-descr {\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n  height: auto;\n}\n.template .white_cell.news h3 {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .white_cell.news .name_thin {\n  padding: 20px;\n}\n.template .white_cell.actions {\n  position: relative;\n  padding: 0px;\n  width: 688px;\n  height: 405px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n}\n.template .white_cell.actions img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  display: block;\n}\n.template .pr_container .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  padding: 70px 100px;\n  width: 100%;\n}\n.template .pr_container .prices h2 {\n  font-family: \"Montserrat\";\n  font-weight: bold;\n  font-size: 28px;\n}\n.template .pr_container .prices table {\n  border-spacing: 0;\n  margin-bottom: 50px;\n}\n.template .pr_container .prices table tr, .template .pr_container .prices table td, .template .pr_container .prices table th {\n  text-align: left;\n  border: 0;\n  line-height: 42px;\n}\n.template .pr_container .prices table .b-bot td {\n  border-bottom: 1px dashed #828282;\n}\n.template .pr_container .prices table th {\n  border-bottom: 2px solid #000;\n  line-height: 38px;\n}\n.template .aside_menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #fff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);\n}\n.template .aside_menu ul li.active {\n  background: #489613;\n}\n.template .aside_menu ul li.active a {\n  color: #fff;\n}\n.template .aside_menu ul a {\n  line-height: 64px;\n  margin: 0 30px;\n  border-bottom: 1px dashed #BDBDBD;\n  display: block;\n  color: #4F4F4F;\n  text-decoration: none;\n  font-weight: 500;\n}\n.template .req_table tr {\n  line-height: 24px;\n}\n.template .req_table tr td {\n  border-bottom: 1px dashed #BDBDBD;\n  padding: 10px 0;\n}\n.template .req_table tr > td:first-child {\n  white-space: nowrap;\n  padding-right: 40px;\n  font-weight: bold;\n  vertical-align: top;\n}\n.template .map {\n  margin-top: 80px;\n}\n.template #map {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  height: 460px;\n}\n.template .shop_categories {\n  position: relative;\n}\n.template .shop_categories .cats_box {\n  background: #fff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);\n}\n.template .shop_categories .cat_item a {\n  color: #4F4F4F;\n  display: block;\n}\n.template .shop_categories .cat_item p {\n  line-height: 24px;\n  padding: 20px 30px !important;\n}\n.template .shop_categories .cat_item:hover {\n  background-color: #489613;\n}\n.template .shop_categories .cat_item:hover a {\n  color: #fff;\n}\n.template .shop_categories h1 {\n  font-size: 46px;\n}\n.template .shop_categories a {\n  text-decoration: none;\n}\n.template .shop_categories .cat_descr {\n  height: 144px;\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell:hover {\n  border: 4px solid #56AF1A;\n  padding: 57px 37px;\n  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.1);\n}\n.template .shop_categories .cat_cell:hover:after {\n  bottom: 57px;\n}\n.template .shop_categories .cat_description {\n  background: #fff;\n  padding: 30px;\n  border: 1px solid #E0E0E0;\n}\n.template .shop_categories .no-items {\n  text-align: center;\n  width: 100%;\n  font-weight: bold;\n  background: #fff;\n  padding: 22px;\n}\n.template .shop_categories .cat_cell, .template .shop_categories .product_cell {\n  background: #fff;\n  border: 1px solid #E0E0E0;\n  padding: 60px 40px;\n  display: flex;\n  flex-direction: column;\n  height: 440px;\n  position: relative;\n}\n.template .shop_categories .cat_cell:after, .template .shop_categories .product_cell:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 60px;\n  left: 0;\n  background: url(/templates/maximum/assets/img/gradw.png);\n}\n.template .shop_categories .cat_cell h3, .template .shop_categories .product_cell h3 {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.template .shop_categories .cat_cell img, .template .shop_categories .product_cell img {\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.template .shop_categories .cat_description {\n  margin-top: 60px;\n}\n.template .shop_categories .product_cell {\n  padding: 30px 30px !important;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  height: 440px;\n  position: relative;\n}\n.template .shop_categories .product_cell:after {\n  content: \"\";\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 30px;\n  left: 0;\n  background: url(\"/templates/maximum/assets/img/gradw.png\");\n}\n.template .shop_categories .cat_descr {\n  height: auto;\n  padding-bottom: 0px !important;\n  overflow: hidden;\n  color: #4F4F4F;\n}\n.template .about_us {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .about_us .pic_container {\n  margin-right: 102px;\n}\n.template .about_us .pic_container img {\n  height: 100%;\n  width: 100%;\n}\n.template .about_us .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .about_us .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .about_us .text_container .about_block h2 {\n  width: 100%;\n}\n.template .about_us .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .inter {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .inter ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .inter .pic_container {\n  margin-left: 102px;\n  position: relative;\n}\n.template .inter .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: -25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .inter .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .inter .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .inter .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .inter .text_container .about_block h2 {\n  width: 100%;\n}\n.template .inter .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .inter .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .inter .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .map_link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .left_pic {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .left_pic .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .left_pic .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .left_pic .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .left_pic .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .left_pic .text_container .about_block h2 {\n  width: 100%;\n}\n.template .left_pic .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .left_pic .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .left_pic .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .contact {\n  margin-top: 40px;\n  position: relative;\n  display: flex;\n}\n.template .contact .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .contact .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .contact .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .contact .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .contact .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .contact .text_container .about_block h2 {\n  width: 100%;\n}\n.template .contact .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .contact .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .contact .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .left_pic3 {\n  margin-top: 100px;\n  position: relative;\n}\n.template .left_pic3 .pic_container {\n  margin-right: 102px;\n  position: relative;\n}\n.template .left_pic3 .pic_container:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: 25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic3 h3 {\n  margin-bottom: 0px;\n}\n.template .left_pic3 .pic_container.right {\n  margin-left: 102px !important;\n  margin-right: 0px !important;\n  position: relative;\n}\n.template .left_pic3 .pic_container.right:after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  border: 15px solid #fff;\n  left: -25px;\n  top: 25px;\n  z-index: 0;\n}\n.template .left_pic3 .pic_container > img {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 99;\n}\n.template .left_pic3 .info_cont {\n  margin-top: 60px;\n}\n.template .left_pic3 .text_container {\n  display: flex;\n  flex: 1;\n}\n.template .left_pic3 .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .left_pic3 .text_container .about_block h2 {\n  width: 100%;\n}\n.template .left_pic3 .text_container .about_block h1 {\n  width: 100%;\n  font-size: 46px;\n  margin-top: 0px;\n  color: #333333;\n}\n.template .left_pic3 .text_container .about_block h1 p {\n  color: #333333;\n}\n.template .left_pic3 .text_container .about_block .form-group {\n  width: 100%;\n}\n.template .callback_block {\n  margin-top: 100px;\n  position: relative;\n  display: flex;\n}\n.template .callback_block .pic_container {\n  margin-right: 102px;\n}\n.template .callback_block .pic_container img {\n  height: 100%;\n  width: 511px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .callback_block .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .callback_block .text_container .about_block {\n  margin-right: auto;\n  width: 100%;\n}\n.template .callback_block .text_container .about_block h2 {\n  width: 100%;\n}\n.template .callback_block .text_container .about_block .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .callback_block .text_container .about_block .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .callback_block .text_container .about_block .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .burger-menu:hover .service_window {\n  opacity: 1;\n  -webkit-user-select: auto;\n     -moz-user-select: auto;\n      -ms-user-select: auto;\n          user-select: auto;\n  pointer-events: auto;\n}\n.template .service_window {\n  width: 1200px;\n  background: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin-top: 35px;\n  border-radius: 6px;\n  padding: 60px 102px;\n  z-index: 99999;\n  opacity: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  transition: 0.5s all;\n}\n.template .service_window img {\n  width: 72px !important;\n  height: 72px !important;\n  display: block;\n  margin: 0 auto;\n}\n.template .service_window a {\n  width: 100%;\n  display: block;\n  color: #333333 !important;\n  text-align: center;\n  padding-top: 15px;\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n  min-height: 90px;\n}\n.template .service_window .menu_f {\n  background: white;\n  padding: 12px;\n  margin: 0px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.template .service_window .menu_f:hover {\n  box-shadow: 0 0 10px #eee;\n}\n.template .service_window .col-lg-five {\n  margin-bottom: 30px;\n}\n.template .examples {\n  position: relative;\n}\n.template .examples h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .examples .all_catalogue a {\n  margin: auto;\n}\n.template .examples .ex_block {\n  height: 316px;\n  display: flex;\n  flex-basis: calc(16.666666% - 8px);\n  justify-content: center;\n  flex-direction: column;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 4px;\n  position: relative;\n}\n.template .examples .pr-row {\n  display: flex;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.template .examples .pr-row .ex_block {\n  flex-basis: calc(33.333333% - 8px);\n}\n.template .examples .ex-container {\n  max-width: 1920px;\n  display: flex;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.template .projects h1 p {\n  font-size: 46px;\n  color: #333333;\n}\n.template .only_text {\n  margin-top: 20px;\n}\n.template .only_text .first_text {\n  margin-bottom: 40px;\n}\n.template .only_text ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .only_text .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .only_text h3 {\n  margin: 0;\n}\n.template .only_text h3 p {\n  padding: 0 !important;\n}\n.template .only_text .pic_container.left {\n  margin-right: 100px;\n}\n.template .only_text .pic_container.right {\n  margin-left: 100px;\n}\n.template .benefits_left {\n  margin-top: 150px;\n  position: relative;\n}\n.template .benefits_left .first_text {\n  margin-bottom: 40px;\n}\n.template .benefits_left .text_container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.template .benefits_left h3 {\n  margin: 0;\n}\n.template .benefits_left h3 p {\n  padding: 0 !important;\n}\n.template .benefits_left .pic_container.left {\n  margin-right: 100px;\n}\n.template .benefits_left .pic_container.right {\n  margin-left: 100px;\n}\n.template .benefits_left h2 {\n  margin-bottom: 40px;\n}\n.template .benefits_left ol {\n  list-style: disc;\n  padding-left: 20px;\n}\n.template .benefits_left #callback {\n  padding-right: 50px;\n}\n.template .benefits_left .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits_left .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits_left .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits_left h2 {\n  display: block;\n}\n.template .benefits_left .decor_img {\n  position: absolute;\n  top: -110px;\n  left: 19px;\n}\n.template .benefits_left .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits_left .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits_left .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits_left .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits_left .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits_left .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits_left .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .benefits3 {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits3 h2 {\n  margin-bottom: 60px;\n}\n.template .benefits3 #callback {\n  padding-right: 50px;\n}\n.template .benefits3 .ic_label {\n  align-items: center;\n  justify-content: center;\n}\n.template .benefits3 .ico_img {\n  width: 102px;\n  height: 102px;\n  margin-bottom: 20px;\n  min-width: 102px;\n  margin-right: 22px;\n}\n.template .benefits3 .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits3 .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits3 h2 {\n  display: block;\n}\n.template .benefits3 .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits3 .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits3 .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits3 .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits3 .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits3 .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits3 .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits3 .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .benefits {\n  margin-top: 100px;\n  position: relative;\n}\n.template .benefits h2 {\n  margin-bottom: 60px;\n}\n.template .benefits #callback {\n  padding-right: 50px;\n}\n.template .benefits .ico_img {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.template .benefits .ico_img img {\n  width: 100%;\n  height: 100%;\n}\n.template .benefits .white_block {\n  background: #fff;\n  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n.template .benefits h2 {\n  display: block;\n}\n.template .benefits .decor_img {\n  position: absolute;\n  top: -110px;\n  right: 19px;\n}\n.template .benefits .decor_img2 {\n  position: absolute;\n  top: -117px;\n  right: 19px;\n}\n.template .benefits .pic_container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.template .benefits .cont h2 {\n  margin-bottom: 40px;\n}\n.template .benefits .about_block {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.template .benefits .form-group {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.template .benefits .form-group label {\n  font-size: 12px;\n  color: #333333;\n}\n.template .benefits .form-group input {\n  width: 100%;\n  background: none;\n  outline: none;\n  border: 0;\n  border-bottom: 2px solid #828282;\n  font-size: 16px;\n  line-height: 36px;\n  padding: 0;\n  max-width: 460px;\n  margin-right: auto;\n  display: block;\n}\n.template .mobile {\n  display: none;\n}\n.template .catalogue {\n  margin-top: 100px;\n  position: relative;\n}\n.template .catalogue h1 {\n  font-family: \"MeriBold\";\n  font-size: 46px;\n  font-weight: bold;\n  color: #333333;\n}\n.template .catalogue h1 p {\n  color: #333333;\n}\n.template .catalogue h2 {\n  padding: 0 114px;\n  margin-bottom: 68px;\n}\n.template .catalogue .all_catalogue {\n  margin-top: 30px;\n}\n.template .catalogue .all_catalogue a {\n  margin: auto;\n}\n.template .catalogue .cat_block {\n  border-radius: 8px;\n  padding: 30px;\n  height: 312px;\n  margin-bottom: 30px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  position: relative;\n}\n.template .catalogue .cat_block a {\n  align-self: flex-end;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  z-index: 99;\n}\n.template .catalogue .cat_block:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/templates/maximum/assets/img/grad.png) repeat-x left;\n  pointer-events: none;\n  border-radius: 8px;\n}\n\n@media only screen and (max-width: 1246px) {\n  html {\n    min-width: 300px;\n    overflow-x: hidden;\n  }\n\n  .template {\n    overflow-x: hidden;\n  }\n\n  .head_container {\n    display: none !important;\n  }\n\n  .benefits {\n    margin-top: 30px !important;\n  }\n\n  .benefits .white_block {\n    background: #fff;\n    box-shadow: none;\n    border-radius: 0px !important;\n  }\n\n  .wb-padding {\n    padding: 20px 20px !important;\n  }\n\n  .decor_img2 {\n    display: none;\n  }\n\n  .template .flex-div {\n    flex-direction: column !important;\n  }\n\n  .template .benefits .white_block {\n    box-shadow: none !important;\n  }\n\n  .template .left_menu h1 {\n    font-size: 35px;\n    margin-bottom: 20px;\n    padding: 0 10px;\n  }\n\n  .left_menu > div > .row {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .employees_co {\n    padding: 0 20px;\n  }\n  .employees_co .col-lg-4 {\n    width: 50%;\n  }\n\n  .template .benefits .cont h2 {\n    margin-bottom: 0px;\n  }\n\n  .template h2 {\n    margin-bottom: 10px;\n  }\n\n  .template h2 p {\n    padding-bottom: 0 !important;\n    line-height: 34px;\n    font-size: 30px;\n  }\n\n  .template .benefits #callback {\n    padding-right: 0px;\n  }\n\n  .benefits .pic_container {\n    display: none;\n  }\n\n  #callback .mt-60 {\n    margin-top: 25px;\n    margin-bottom: 0px;\n  }\n\n  #callback button {\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  .template .left_pic {\n    margin-top: 0px;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .template .left_pic .pic_container:after {\n    content: none;\n  }\n\n  .template .left_pic .text_container {\n    padding: 0 20px;\n  }\n\n  .template .only_text .pic_container {\n    margin-left: 0px !important;\n    margin-right: 0 !important;\n    width: 100% !important;\n    min-width: auto !important;\n    height: auto !important;\n  }\n  .template .only_text .pic_container > img {\n    width: 100%;\n  }\n\n  .benefits_left .info_cont {\n    flex-direction: column;\n  }\n\n  .only_text .info_cont:not(:nth-child(2n)) {\n    flex-direction: column !important;\n  }\n\n  .only_text .info_cont:nth-child(2n) {\n    flex-direction: column-reverse !important;\n  }\n\n  .benefits_left .info_cont:nth-child(2n) {\n    flex-direction: column-reverse !important;\n  }\n\n  .template .benefits_left .decor_img {\n    display: none;\n  }\n\n  .template .inter .text_container .about_block {\n    padding: 0 20px;\n  }\n\n  .template .inter {\n    margin-top: 30px;\n    flex-direction: column;\n  }\n\n  .template .benefits_left .white_block {\n    border-radius: 0px;\n  }\n\n  .template .benefits_left .pic_container.left {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n    width: 100% !important;\n    min-width: auto !important;\n  }\n\n  .template .benefits_left .pic_container.right {\n    margin-left: 0px;\n    width: 100%;\n    min-width: auto !important;\n    height: auto !important;\n  }\n\n  .template .benefits_left .about_block {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n\n  .benefits_left .bot_text {\n    margin-top: 15px;\n  }\n\n  .template .benefits_left .first_text {\n    margin-bottom: 0px;\n  }\n\n  .template .inter .text_container {\n    width: 100%;\n  }\n\n  .template .inter .text_container .about_block h1 {\n    font-size: 35px;\n    margin-bottom: 0;\n  }\n\n  .template .benefits_left {\n    margin-top: 30px;\n  }\n\n  .template .inter .pic_container {\n    margin-left: 0;\n    min-width: auto !important;\n    width: 100%;\n    height: auto !important;\n  }\n\n  .template .inter .pic_container:after {\n    content: none;\n  }\n\n  .template .benefits3 .decor_img {\n    display: none;\n  }\n\n  .template .benefits3 {\n    margin-top: 30px;\n  }\n\n  .template .benefits3 h2 {\n    margin-bottom: 10px;\n  }\n\n  .benefits3 .w-100.row {\n    margin: 0;\n  }\n\n  .template .benefits3 .about_block {\n    padding: 0;\n  }\n\n  .template .left_pic3 {\n    margin-top: 40px;\n    padding: 0 20px;\n  }\n\n  .template .benefits3 .ic_label {\n    justify-content: unset;\n  }\n\n  .template .left_pic3 .info_cont {\n    margin-top: 10px;\n    flex-direction: column;\n  }\n\n  .template .left_pic3 .pic_container {\n    margin-right: 0;\n    position: relative;\n    width: 100%;\n    height: auto !important;\n  }\n  .template .left_pic3 .pic_container:after {\n    content: none !important;\n  }\n\n  .template .info_cont .about_block {\n    padding: 15px 0px;\n  }\n\n  .template .left_pic3 .text_container {\n    flex-direction: column;\n  }\n\n  .left_pic3 .info_cont:nth-child(1n) {\n    flex-direction: column-reverse;\n  }\n\n  .template .left_pic3 .pic_container {\n    margin-right: 0;\n    position: relative;\n    width: 100% !important;\n    margin-left: 0 !important;\n    height: auto !important;\n  }\n\n  .template .left_pic .text_container .about_block {\n    margin-top: 25px;\n  }\n\n  .template .left_pic3 h3 {\n    margin-top: 0px;\n  }\n\n  .template .left_pic3 .pic_container.right {\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n    position: relative;\n  }\n\n  template .left_pic3 .pic_container.right:after {\n    content: none !important;\n  }\n\n  .template .left_pic .pic_container {\n    margin-right: 0px;\n    position: relative;\n    width: 100% !important;\n    min-width: auto !important;\n    height: auto !important;\n  }\n\n  .template h1 p {\n    line-height: 40px;\n  }\n\n  .template footer {\n    margin-top: 20px;\n    padding: 0 20px;\n  }\n\n  .footer_adds img {\n    display: block;\n    margin: 0 auto;\n  }\n\n  .template footer .copy {\n    color: #fff;\n    padding-top: 10px;\n    display: block;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .template footer .footer_adds {\n    margin-top: 20px;\n    padding-bottom: 0px !important;\n  }\n\n  header {\n    background-image: none !important;\n    height: auto;\n  }\n  header > .container {\n    padding-top: 0 !important;\n    height: auto;\n  }\n\n  .mobile {\n    display: flex !important;\n    background: #fff;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile .burger {\n    background: url(/images/bugrer.svg) no-repeat left;\n    position: relative;\n    width: 40px;\n    height: 40px;\n    max-width: 40px;\n    flex: 1;\n    margin: 0 20px;\n  }\n  .mobile .phone {\n    background: url(/images/call.svg) no-repeat center;\n    position: relative;\n    width: 40px;\n    max-width: 40px;\n    height: 40px;\n    flex: 1;\n    margin: 0 20px;\n  }\n  .mobile .logo {\n    background: url(/images/logo_mobile.svg) no-repeat center;\n    position: relative;\n    height: 40px;\n    flex: 1;\n    min-width: 120px;\n    margin: 0 auto;\n  }\n  .mobile .bur_menu {\n    position: absolute;\n    opacity: 0;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    pointer-events: none;\n    width: 100%;\n    top: 0px;\n    background: #fff;\n    z-index: 999;\n    transition: 0.3s all;\n  }\n  .mobile .mob_serv h2 {\n    color: #675d5d;\n    font-size: 22px;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .mobile .mob_serv .menu_f {\n    float: left;\n    width: 100%;\n    padding: 10px;\n    display: flex;\n    cursor: pointer;\n  }\n  .mobile .mob_serv .menu_f img {\n    width: 40px !important;\n    height: 40px !important;\n  }\n  .mobile .mob_serv .menu_f a {\n    display: flex;\n    margin-left: 15px;\n    text-decoration: none;\n  }\n  .mobile .bur_menu.show {\n    box-shadow: 0px 8px 20px #afafaf;\n    opacity: 1;\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto;\n    pointer-events: auto;\n  }\n  .mobile .bur_menu.show .close {\n    position: absolute;\n    color: #307006;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    line-height: 50px;\n    right: 0;\n  }\n  .mobile .bur_menu.show ul {\n    margin: 0;\n    padding: 10px 20px;\n    list-style: none;\n  }\n  .mobile .bur_menu.show ul li {\n    line-height: 30px;\n  }\n  .mobile .bur_menu.show ul li a {\n    text-decoration: none;\n  }\n\n  .template header h1 {\n    margin-top: 20px;\n    font-size: 46px;\n  }\n  .template header h1 p {\n    line-height: 40px !important;\n    font-size: 30px;\n    padding: 0 20px;\n    color: #333333;\n    text-align: center;\n  }\n\n  header .button {\n    display: block !important;\n    width: 100% !important;\n    padding: 10px 10px;\n  }\n\n  .template header .trasp_box {\n    margin-right: 0;\n    margin-left: 0;\n    background: #56AF1A;\n    border-radius: 0;\n    -webkit-backdrop-filter: none;\n    backdrop-filter: none;\n    font-weight: 400;\n    text-align: center;\n    margin-top: 30px;\n    padding: 20px;\n  }\n\n  .template header.fullsize .ico_img {\n    width: 94px;\n    height: 94px;\n    margin: 0 auto;\n  }\n\n  .fullsize .bg {\n    display: none;\n  }\n\n  .template .about_us {\n    margin-top: 30px;\n    position: relative;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .template .about_us .text_container {\n    padding: 0 20px;\n  }\n\n  .template .about_us .pic_container {\n    margin-right: 0;\n    width: 100% !important;\n    height: auto !important;\n    min-width: auto !important;\n  }\n\n  .template .benefits h2 {\n    margin-bottom: 20px;\n  }\n\n  .template .benefits .decor_img {\n    display: none;\n  }\n\n  .template .benefits .ico_img {\n    margin: 0 auto;\n    margin-bottom: 20px;\n  }\n\n  .template .benefits .about_block {\n    text-align: center;\n  }\n\n  .template .catalogue h2 {\n    padding: 0 20px;\n    margin-bottom: 30px;\n  }\n\n  .template .catalogue {\n    margin-top: 30px;\n    position: relative;\n  }\n\n  .template .container .row > div:last-child .cat_block {\n    margin-bottom: 0;\n  }\n\n  .template .callback_block {\n    margin-top: 30px;\n    flex-direction: column-reverse;\n    padding: 0 20px;\n  }\n  .template .callback_block .pic_container {\n    display: none;\n  }\n\n  .template .examples {\n    position: relative;\n    margin-top: 30px;\n  }\n\n  .template .examples h2 {\n    padding: 0 20px;\n    margin-bottom: 30px;\n  }\n\n  .template .examples .ex_block {\n    height: 160px;\n    display: flex;\n    flex-basis: calc(50% - 8px);\n  }\n\n  .template .examples .ex-container {\n    margin-bottom: 20px;\n  }\n\n  .template .catalogue .all_catalogue {\n    margin-top: 30px;\n    padding: 0 20px;\n  }\n\n  .template .catalogue .all_catalogue a {\n    display: block;\n    margin: auto;\n    width: 100%;\n  }\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/NzgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzYzNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzI0OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT9mMzYzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzP2MxMjgiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9NZXJyaXdlYXRoZXItQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1NZWRpdW0udHRmIiwid2VicGFjazovLy8uL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9taXhpbnMvdGFnX3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzg2MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbW9kdWxlcy9Nb2R1bGUudnVlPzNiMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlPzIxNGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvc2l0ZS9QYWdlLnZ1ZT8zNDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3NpdGUvUGFnZS52dWU/YmVlNCJdLCJuYW1lcyI6WyJkYXRhIiwidGFncyIsIm1ldGhvZHMiLCJwYXJzZSIsIm1vZHVsZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsImkiLCJsZW5ndGgiLCJ0YWdfaW5kZXgiLCJ0YWciLCJwdXNoIiwiZm9yRWFjaCIsInRhZ19zcGxpdGVkIiwic3BsaXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsc0VBRkE7QUFHQSxtQkFIQTtBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBREE7QUFJQSxHQVRBO0FBVUEsU0FWQSxxQkFVQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLEtBSEE7QUFJQSxHQWhCQTtBQWlCQTtBQUNBLGFBREEscUJBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxtQkFJQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR3pGO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IlBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1vZHVsZVwiIHYtaHRtbD1cInBhcnNlKG1vZHVsZSlcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHRhZ19wYXJzZXIgZnJvbSAnLi4vbWl4aW5zL3RhZ19wYXJzZXInXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk1vZHVsZVwiLFxuICAgICAgICBtaXhpbnM6IFt0YWdfcGFyc2VyXSxcbiAgICAgICAgcHJvcHM6IFsnbW9kdWxlJ10sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGEgOiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy5tb3VudCgpO1xuICAgICAgICAgICAgdGhpcy4kb24oJ2ZyZXNoJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW91bnQoKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgc2V0TW9kdWxlKG0pe1xuICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZSA9IG07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91bnQoKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRwcm9wcy5tb2R1bGUpO1xuICAgICAgICAgICAgICAgIC8vIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ2ltYWdlcyddLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLiRwcm9wcy5tb2R1bGVbJ2ltYWdlcyddLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkIDogMCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IGltYWdlX3BhcmFtcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IGltYWdlX3BhcmFtcy53aWR0aCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlIDoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogMFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gaXRlbS5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdHlwZVsyXTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlWzBdID09PSAnbGluaycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmtfcGFyYW1zID0gcGFyYW1zID8gSlNPTi5wYXJzZShwYXJhbXMpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRwcm9wcy5tb2R1bGVbJ2xpbmtzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydsaW5rcyddLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBcItCh0YHRi9C70LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluayA6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiBsaW5rX3BhcmFtcyA/IGxpbmtfcGFyYW1zLmNsYXNzIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcHJvcHMubW9kdWxlWydsaW5rcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0uY2xhc3MgPSBsaW5rX3BhcmFtcy5jbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVbMF0gPT09ICd0ZXh0Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kcHJvcHMubW9kdWxlWyd0ZXh0cyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsndGV4dHMnXS5wdXNoKHt0ZXh0IDogXCLQotC10LrRgdGCXCJ9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlWzBdID09PSAnYmFja2dyb3VuZCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlX3BhcmFtcyA9IEpTT04ucGFyc2UocGFyYW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXVtwYXJzZUludCh0eXBlWzFdKSAtIDFdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0gPT09IHVuZGVmaW5lZCAvLyYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddW3BhcnNlSW50KHR5cGVbMV0pIC0gMV0uaW1hZ2UgIT09ICdudWxsJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJy9pbWFnZXMvbm9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHByb3BzLm1vZHVsZVsnaW1hZ2VzJ11bcGFyc2VJbnQodHlwZVsxXSkgLSAxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMubW9kdWxlWydpbWFnZXMnXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZighdGhpcy4kcHJvcHMubW9kdWxlWydiYWNrZ3JvdW5kcyddLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdHlwZSA9IGl0ZW0uc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBwYXJhbXMgPSB0eXBlWzJdO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodHlwZVswXSA9PT0gJ2JhY2tncm91bmQnKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW1hZ2VfcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuJHByb3BzLm1vZHVsZVsnYmFja2dyb3VuZHMnXS5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpbWFnZV9wYXJhbXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpbWFnZV9wYXJhbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IDAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJy9pbWFnZXMvbm9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBpdGVtLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY2h1bmtbMF0gIT09ICdzZXR0aW5ncycgJiYgY2h1bmsubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2ggPSB0aGlzLiRwcm9wcy5tb2R1bGVbY2h1bmtbMF0gKyAncyddW3BhcnNlSW50KGNodW5rWzFdKSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IHdpbmRvd1tjaHVua1swXV0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLiRzdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNEYXRhOiB7IGNodW5rOiBjaCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoaWxkcmVuLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJyNjaHVua18nICsgY2h1bmtbMF0gKyAnXycgKyBjaHVua1sxXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibXItM1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1zdHlsZTEgbWctYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9zaXRlXCIgdi1zbG90PVwieyBocmVmLCByb3V0ZSwgbmF2aWdhdGUsIGlzQWN0aXZlLCBpc0V4YWN0QWN0aXZlIH1cIiBjdXN0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiID48YSA6aHJlZj1cImhyZWZcIiBAY2xpY2s9XCJuYXZpZ2F0ZVwiPtCj0L/RgNCw0LLQu9C10L3QuNC1INGB0LDQudGC0L7QvDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5IZWxwZGVzayBNYW5hZ2VtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtZy1iLTAgdHgtc3BhY2luZy0tMVwiPnt7IHBhZ2UubmFtZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2F2ZVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1saW5lXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGlkPVwiaG9tZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjaG9tZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiaG9tZVwiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+0JLQuNC30YPQsNC70YzQvdGL0Lkg0YDQtdC00LDQutGC0L7RgDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInByb2ZpbGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3Byb2ZpbGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInByb2ZpbGVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj7QntC/0LjRgdCw0L3QuNC1PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwiY29udGFjdC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjc2VvXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJjb250YWN0XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+U0VPPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IHBkLXktMjBcIiBpZD1cIm15VGFiQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIiBpZD1cImhvbWVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJob21lLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cIm1vZHVsZXNfc2hvdyA9ICFtb2R1bGVzX3Nob3dcIiBjbGFzcz1cImFkZF9tb2R1bGUgcG9pbnRlciB1c2VyLXNlbGVjdC1ub25lIG10LTRcIj4g0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70Yw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm1vZHVsZXNfc2hvd1wiIGNsYXNzPVwibW9kdWxlc19waWNrX2NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIiB2LWZvcj1cIm1vZHVsZSBpbiAkc3RvcmUuZ2V0dGVycy5tb2R1bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYXBwZW5kTW9kdWxlKG1vZHVsZSlcIj57eyBtb2R1bGUubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKG1vZHVsZSwgaW5kZXgpIGluIG1vZHVsZXNcIiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1vZHVsZV9ib3hcIiB2LWJpbmQ6aWQ9XCInbW9kdWxlXycgKyBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kdWxlX3NldHRpbmdzIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0X2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzd2FwKGluZGV4LCAtMSlcIj7QktCy0LXRgNGFPC9idXR0b24+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInN3YXAoaW5kZXgsIDEpXCI+0JLQvdC40Lc8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJkZWxldGVNb2R1bGUoaW5kZXgpXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjb3B5TW9kdWxlKGluZGV4KVwiPtCh0LrQvtC/0LjRgNC+0LLQsNGC0Ywg0LjQtzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1mb3I9XCJwYWdlIGluIHBhZ2VzXCIgQGNsaWNrPVwiY29weU1vZHVsZShwYWdlLCBtb2R1bGUsIGluZGV4KVwiID57eyBwYWdlLm5hbWUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2R1bGUgdi1iaW5kOm1vZHVsZT1cIm1vZHVsZVwiPjwvTW9kdWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cIm1vZHVsZXNfc2hvdyA9ICFtb2R1bGVzX3Nob3dcIiBjbGFzcz1cImFkZF9tb2R1bGUgcG9pbnRlciB1c2VyLXNlbGVjdC1ub25lIG10LTRcIj4g0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70Yw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9kdWxlc19zaG93XCIgY2xhc3M9XCJtb2R1bGVzX3BpY2tfY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCIgdi1mb3I9XCJtb2R1bGUgaW4gJHN0b3JlLmdldHRlcnMubW9kdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYXBwZW5kTW9kdWxlKG1vZHVsZSwgaW5kZXggKyAxKVwiPnt7IG1vZHVsZS5uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJwcm9maWxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwicHJvZmlsZS10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgbWctdC0xMCBtZy1sZy10LTAgYnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYWdlLmlzUHVibGlzaGVkXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwiaXNQdWJsaXNoZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImlzUHVibGlzaGVkXCI+INCe0L/Rg9Cx0LvQuNC60L7QstCw0L08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7QotC10LrRgdGCINC80LXQvdGOPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5tZW51XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwic2VvXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFjdC10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWJsb2NrXCI+U0VPINC30LDQs9C+0LvQvtCy0L7QujwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhZ2UudGl0bGVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlNFTyDQvtC/0LjRgdCw0L3QuNC1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5kZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNFTyDQvtC/0LjRgdCw0L3QuNC1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPnVybCDRgdGC0YDQsNC90LjRhtGLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFnZS5zbHVnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwidXJsINGB0YLRgNCw0L3QuNGG0YtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTW9kdWxlIGZyb20gJy4vLi4vLi4vbW9kdWxlcy9Nb2R1bGUnO1xuICAgIGltcG9ydCBzdHlsZXMgZnJvbSAnL3B1YmxpYy90ZW1wbGF0ZXMvbWF4aW11bS9hc3NldHMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiUGFnZVwiLFxuICAgICAgICBjb21wb25lbnRzOntcbiAgICAgICAgICAgIE1vZHVsZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlIDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJ9Cd0L7QstCw0Y8g0YHRgtGA0LDQvdC40YbQsCcsXG4gICAgICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlcyA6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdlX2lkIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnMicsXG4gICAgICAgICAgICAgICAgbW9kdWxlc19zaG93IDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbW9kdWxlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm1vZHVsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMucGFnZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoIDoge1xuICAgICAgICAgICAgJ3BhZ2Uuc2x1Zyc6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5wYWdlLmlkICYmIHRoaXMucGFnZS5pZCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5zbHVnID0gd2luZG93LnVybFJ1c0xhdCh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGFnZS5uYW1lJzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBhZ2UuaWQgJiYgdGhpcy5wYWdlLmlkICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5zbHVnID0gd2luZG93LnVybFJ1c0xhdCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UudGl0bGUgPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9wYWdlcycpO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldF9tb2R1bGVzJywgdGhpcy5wYWdlX2lkKTtcbiAgICAgICAgICAgIHRoaXMucGFnZV9pZCA9ICEhdGhpcy4kcm91dGUucGFyYW1zLmlkID8gcGFyc2VJbnQodGhpcy4kcm91dGUucGFyYW1zLmlkKSA6IG51bGw7XG4gICAgICAgICAgICBpZih0aGlzLnBhZ2VfaWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRfcGFnZScsIHRoaXMucGFnZV9pZCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0b3JlLmdldHRlcnMucGFnZSh0aGlzLnBhZ2VfaWQpLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kZW1pdCgndGl0bGVTZXQnLCB0aGlzLiRzdG9yZS5nZXR0ZXJzLnBhZ2UodGhpcy5wYWdlX2lkKS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHRoaXMuJHN0b3JlLmdldHRlcnMucGFnZSh0aGlzLnBhZ2VfaWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdCA9IHguaW5jbHVkZXMo4oCcaHRtbOKAnSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldF9tb2R1bGVfY2h1bmsoMSwgMSwgJ3RleHQnLCAxKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFwcGVuZE1vZHVsZShtb2R1bGUsIGluZGV4ID0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmsgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA6IG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlX3RlbXBsYXRlX2lkIDogbW9kdWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXMgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dHMgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbGlua3MgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZHMgOiBbXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzLnB1c2gobSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4LCAwLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3dhcChpbmRleF9BLCBkaXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleF9BLCBkaXIsIChpbmRleF9BICsgZGlyKSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICBpZihpbmRleF9BICsgZGlyIDw9IDAgfHwgaW5kZXhfQSArIGRpciA+PSB0aGlzLnBhZ2UubW9kdWxlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhfQSArIGRpcl0gPSB0aGlzLnBhZ2UubW9kdWxlcy5zcGxpY2UoaW5kZXhfQSxpbmRleF9BICsgZGlyLCB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9BICsgZGlyXSlbaW5kZXhfQV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRlbXAgPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9BXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlLm1vZHVsZXMuc3BsaWNlKGluZGV4X0EsIDEsIHRlbXApO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2UubW9kdWxlcy5zcGxpY2UoaW5kZXhfQSArIGRpciwgMSwgdGVtcCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZWxlbV8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZHVsZV8nICsgaW5kZXhfQSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBlbGVtXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kdWxlXycgKyAoaW5kZXhfQSArIGRpcikpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtXzEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbV8yLCBlbGVtXzEucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGV0IG0gPSB0aGlzLnBhZ2UubW9kdWxlcztcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGVtcCA9IHRoaXMucGFnZS5tb2R1bGVzW2luZGV4X0FdO1xuICAgICAgICAgICAgICAgIC8vIG1baW5kZXhfQV0gPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF9CXTtcbiAgICAgICAgICAgICAgICAvLyBtW2luZGV4X0JdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2UubW9kdWxlcyA9IG07XG4gICAgICAgICAgICAgICAgLy8gbS5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hcHBlbmRNb2R1bGUobW9kdWxlKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy90aGlzLnBhZ2UubW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHsgcmV0dXJuIGNoaWxkLiRvcHRpb25zLm5hbWUgPT09IFwiTW9kdWxlXCI7IH0pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGl0ZW0uc2V0TW9kdWxlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGl0ZW0uJGVtaXQoJ2ZyZXNoJyk7XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVNb2R1bGUoaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29weU1vZHVsZShwYWdlLCBtb2R1bGUsIGluZGV4KXtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcGFnZS5tb2R1bGVzLmZpbHRlcigobSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS50ZW1wbGF0ZS5pZCA9PT0gbW9kdWxlLnRlbXBsYXRlLmlkO1xuICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4XSA9IGRhdGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZU1vZHVsZShpbmRleCwgZGlyKXtcbiAgICAgICAgICAgICAgICBpZihpbmRleCArIGRpciA9PT0gMCB8fCBpbmRleCArIGRpciA+IHRoaXMucGFnZS5tb2R1bGVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vW3RoaXMucGFnZS5tb2R1bGVzW2luZGV4ICsgZGlyXSwgdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdXSA9IFt0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF0sIHRoaXMucGFnZS5tb2R1bGVzW2luZGV4ICsgZGlyXV07XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wYWdlLm1vZHVsZXMucHVzaCh0aGlzLnBhZ2UubW9kdWxlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGFnZS5tb2R1bGVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSB0aGlzLnBhZ2UubW9kdWxlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLm1vZHVsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbVtpbmRleF0gPSB0aGlzLnBhZ2UubW9kdWxlc1tpbmRleCArIGRpcl07XG4gICAgICAgICAgICAgICAgICAgIG1baW5kZXggKyBkaXJdID0gdGhpcy5wYWdlLm1vZHVsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UubW9kdWxlcyA9IG07XG5cbiAgICAgICAgICAgICAgICAgICAgLy9lbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW0sIGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRjaGlsZHJlblswXS4kb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHsgcmV0dXJuIGNoaWxkLiRvcHRpb25zLm5hbWUgPT09IFwiTW9kdWxlXCI7IH0pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS4kZW1pdCgnZnJlc2gnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZSgpe1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9kdWN0LmNhdGVnb3J5X2lkID0gISF0aGlzLmNhdGVnb3J5ID8gdGhpcy5jYXRlZ29yeS5pZCA6IDA7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWV0aG9kID0gISF0aGlzLnBhZ2UuaWQgPyAndXBkYXRlX3BhZ2UnIDogJ3N0b3JlX3BhZ2UnO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9kdWN0LmltYWdlcyA9IHRoaXMuaW1hZ2VzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2gobWV0aG9kLCB0aGlzLnBhZ2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdwYWdlcyd9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLm1vZHVsZXNfcGlja19jb250e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmID4gZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hZGRfbW9kdWxle1xuICAgICAgICBib3JkZXI6IDRweCBkYXNoZWQgI2VlZWVlZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2M3YzNjMztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmY7XG4gICAgfVxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gICAgLm1vZHVsZV9zZXR0aW5nc3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL2ljb25zL3NsaWRlcnMuc3ZnKSBjZW50ZXIgbm8tcmVwZWF0ICNmZmY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgYWxsO1xuICAgIH1cbiAgICAubW9kdWxlX2JveDpob3ZlciAubW9kdWxlX3NldHRpbmdze1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgLnNldHRfYm94e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2R1bGVfc2V0dGluZ3M6aG92ZXIgLnNldHRfYm94e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgLmlubmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuXG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Vze1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbjwvc3R5bGU+XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAyMHB4IDg0cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kOiAjNTZBRjFBO1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxufVxcblxcbi5jb250YWluZXJfc21hbGwge1xcbiAgbWF4LXdpZHRoOiAxMDUwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbn1cXG5cXG4ucHQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5tdC02MCB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cXG4ubWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLm10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjQ2cHgpIHtcXG4gIC5jb2wtbGctMSB7XFxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMiB7XFxuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0zIHtcXG4gICAgZmxleDogMCAwIDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTQge1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctZml2ZSB7XFxuICAgIGZsZXg6IDAgMCAyMCU7XFxuICAgIG1heC13aWR0aDogMjAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy01IHtcXG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTYge1xcbiAgICBmbGV4OiAwIDAgNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNyB7XFxuICAgIGZsZXg6IDAgMCA1OC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy04IHtcXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTkge1xcbiAgICBmbGV4OiAwIDAgNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTAge1xcbiAgICBmbGV4OiAwIDAgODMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTEge1xcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTIge1xcbiAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4uY29sLTEsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLCAuY29sLWF1dG8sIC5jb2wtc20tMSwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20sIC5jb2wtc20tYXV0bywgLmNvbC1tZC0xLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZCwgLmNvbC1tZC1hdXRvLCAuY29sLWxnLTEsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLCAuY29sLWxnLWF1dG8sIC5jb2wteGwtMSwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwsIC5jb2wteGwtYXV0byB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvTWVycml3ZWF0aGVyLUJvbGQudHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCIpKSArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Nb250c2VycmF0LU1lZGl1bS50dGZcIikpICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC50dGZcIikpICsgXCIpO1xcbn1cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53Yi1wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDg0cHggMTE0cHg7XFxufVxcblxcbi5wYWdpbmF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnBhZ2UtbGluayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGNvbG9yOiAjNDg5NjEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGQ0ZTA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5wYWdlLWxpbms6aG92ZXIge1xcbiAgei1pbmRleDogMjtcXG4gIGNvbG9yOiAjMDE0OGFlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTdlZDtcXG4gIGJvcmRlci1jb2xvcjogI2NkZDRlMDtcXG59XFxuXFxuLnBhZ2UtbGluazpmb2N1cyB7XFxuICB6LWluZGV4OiAyO1xcbiAgb3V0bGluZTogMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEsIDEwNCwgMjUwLCAwLjI1KTtcXG59XFxuXFxuLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xcbiAgei1pbmRleDogMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4OTYxMztcXG4gIGJvcmRlci1jb2xvcjogIzQ4OTYxMztcXG59XFxuXFxuLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rIHtcXG4gIGNvbG9yOiAjNzk4N2ExO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2RkNGUwO1xcbn1cXG5cXG4ucGFnaW5hdGlvbi1sZyAucGFnZS1saW5rIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcbiAgZm9udC1zaXplOiAxLjA5Mzc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtaXRlbTpsYXN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWxpbmsge1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBmb250LXNpemU6IDAuNzY1NjJyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4ucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4ucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcXG59XFxuXFxuaHRtbCB7XFxuICBtaW4td2lkdGg6IDEyMzBweDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYWxsX2ltZ193aWR0aCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50ZW1wbGF0ZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgYSB7XFxuICBjb2xvcjogIzU1QTMyMTtcXG59XFxuLnRlbXBsYXRlIC5mbGV4LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgaDEgcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG59XFxuLnRlbXBsYXRlIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVyaUJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSBoMiBwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogNThweDtcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X2NlbGwgb2wge1xcbiAgbGlzdC1zdHlsZTogZGlzYztcXG59XFxuLnRlbXBsYXRlIC5yZXFfdGFibGUgdGQge1xcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcXG59XFxuLnRlbXBsYXRlIC5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udGVtcGxhdGUgcCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbSAhaW1wb3J0YW50O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAub25seV9oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfaGVhZGVyIGgxLCAudGVtcGxhdGUgLm9ubHlfaGVhZGVyIGgxIHAge1xcbiAgZm9udC1zaXplOiA3MnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbn1cXG4udGVtcGxhdGUgLmRkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5kZCAuZGRfbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5OTk5OTtcXG59XFxuLnRlbXBsYXRlIC5kZCAuZGRfbWVudSB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4udGVtcGxhdGUgLmRkIC5kZF9tZW51IHVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMwcHg7XFxuICB0b3A6IDEwcHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xcbn1cXG4udGVtcGxhdGUgLmRkIC5kZF9tZW51IHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuZGQgLmRkX21lbnUgdWwgYSB7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1pbi13aWR0aDogMTQwcHg7XFxufVxcbi50ZW1wbGF0ZSAuZGQ6aG92ZXIgLmRkX21lbnUge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X3RleHQge1xcbiAgd2lkdGg6IDU4MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi50ZW1wbGF0ZSAudmFjYW5jeV90ZXh0IC5jb250IHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAudmFjYW5jeV90ZXh0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X2NlbGwgLm5hbWUge1xcbiAgYmFja2dyb3VuZDogIzQ4OTYxMztcXG4gIGhlaWdodDogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRlbXBsYXRlIC52YWNhbmN5X2NlbGwgLmNvbnRlbnRfdGhpbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNDVweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAudG9wX2NvbnRhaW5lciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5pY29faW1nIHtcXG4gIHdpZHRoOiA3MnB4O1xcbiAgaGVpZ2h0OiA3MnB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5pY29faW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciBoMSB7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyLmZ1bGxzaXplIHtcXG4gIG1pbi1oZWlnaHQ6IDEwODBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlci5mdWxsc2l6ZSAuaWNvX2ltZyB7XFxuICB3aWR0aDogOTRweDtcXG4gIGhlaWdodDogOTRweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlci5mdWxsc2l6ZSBoMSBwIHtcXG4gIGxpbmUtaGVpZ2h0OiA4NnB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC50cmFzcF9ib3gge1xcbiAgcGFkZGluZzogNzBweDtcXG4gIG1hcmdpbi1yaWdodDogLTcwcHg7XFxuICBtYXJnaW4tbGVmdDogLTcwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMTUzNTAwNjA7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAudHJhc3BfYm94IC5pY29faW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmJnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzk1cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5waG9uZV9oZWFkIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5idXJnZXItbWVudSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9pbWcvYnVyZ2VyLnBuZykgbm8tcmVwZWF0IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIC50b3BfY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5oZWFkX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5sX3NpZGUsIC50ZW1wbGF0ZSBoZWFkZXIgLnJfc2lkZSB7XFxuICB3aWR0aDogY2FsYygoMTAwJSAtIDIzNHB4KSAvIDIpO1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5saW5rcyB7XFxuICBtYXJnaW4tdG9wOiA3NHB4O1xcbn1cXG4udGVtcGxhdGUgaGVhZGVyIC5saW5rcyBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLmxpbmtzIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAubF9zaWRlIC5saW5rcyB1bCBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSBoZWFkZXIgLnJfc2lkZSAubGlua3MgdWwge1xcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAucl9zaWRlIC5saW5rcyB1bCBsaSB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuYmdfaW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA5NjBweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLnRlbXBsYXRlIGhlYWRlciAuYmdfaW1hZ2UgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMjk1NzBCO1xcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAudGFiX2NvbnQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MzhCMTM7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICM1NkFGMUE7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLnRhYl9jb250IC50YiB7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzU2QUYxQTtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290X21lbnUgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSBmb290ZXIgLmZvb3RfbWVudSBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjNTZBRjFBO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5mb290X21lbnUgYTpob3ZlcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBib3R0b206IC00cHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2QUYxQTtcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdF9tZW51IGxpIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4udGVtcGxhdGUgZm9vdGVyIC5jb3B5IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZy10b3A6IDg2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIGZvb3RlciAuZm9vdGVyX2FkZHMge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLnRlbXBsYXRlIC5wcm9kdWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5wcm9kdWN0IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG59XFxuLnRlbXBsYXRlIC5wcm9kdWN0IC5wcm9kdWN0LWltYWdlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLnByb2R1Y3QgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi50ZW1wbGF0ZSAucHJvZHVjdCAucHJpY2Uge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLm5ldyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxNjBweDtcXG59XFxuLnRlbXBsYXRlIC5uZXcgaDEge1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbn1cXG4udGVtcGxhdGUgLm5ldyAubmV3LWltYWdlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi50ZW1wbGF0ZSAubmV3IC5uZXctZGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLm5ldyAuZGF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IGgxIHAge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9tZW51IC5yb3VuZC03MyB7XFxuICB3aWR0aDogNzNweDtcXG4gIGhlaWdodDogNzNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUgLmNsaWVudF9pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfbWVudSAuaW1nX3doIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUgLm5hbWVfdGhpbiB7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X21lbnUgLm5hbWUsIC50ZW1wbGF0ZSAubGVmdF9tZW51IC5jaXR5IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi50ZW1wbGF0ZSBhLm4tZGVjIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsIHtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuLnRlbXBsYXRlIC7RgWxpZW50X2NlbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRlbXBsYXRlIC5kZWxpdiB7XFxuICB3aWR0aDogNjgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnRlbXBsYXRlIC5kZWxpdiAuZGVsaXZlciBpbWcge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmRlbGl2IC5kZWxpdmVyIC5kZXNjciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZW1wbGF0ZSAuaW5mb19jb250IC5hYm91dF9ibG9jayB7XFxuICBwYWRkaW5nOiAzMHB4IDBweDtcXG59XFxuLnRlbXBsYXRlIC5mdWxsc2l6ZSAud2hpdGVfY2VsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDMxM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9pbWcvZ3JhZC5wbmcpIHJlcGVhdC14IGxlZnQgIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5mdWxsc2l6ZSAud2hpdGVfY2VsbCBoMyB7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLmZ1bGxzaXplIC53aGl0ZV9jZWxsIC5kYXRlIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcbi50ZW1wbGF0ZSAuZnVsbHNpemUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5mdWxsc2l6ZSAubmV3cy1jb250IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLmZ1bGxzaXplIC5uZXdzLWNvbnQ6YWZ0ZXIge1xcbiAgY29udGVudDogbm9uZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50ZW1wbGF0ZSAuZnVsbHNpemUgLm5ldy1kZXNjciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3M6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3MgLm5ld3MtY29udCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzBweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3MgLm5ld3MtY29udCAuZGF0ZSB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3MgLm5ld3MtY29udDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9ncmFkdy5wbmcpO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwubmV3cyAubmV3LWRlc2NyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzRGNEY0RjtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3MgaDMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzRGNEY0RjtcXG59XFxuLnRlbXBsYXRlIC53aGl0ZV9jZWxsLm5ld3MgLm5hbWVfdGhpbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwuYWN0aW9ucyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwcHg7XFxuICB3aWR0aDogNjg4cHg7XFxuICBoZWlnaHQ6IDQwNXB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLndoaXRlX2NlbGwuYWN0aW9ucyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC53aGl0ZV9ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNzBweCAxMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLnByX2NvbnRhaW5lciAucHJpY2VzIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuLnRlbXBsYXRlIC5wcl9jb250YWluZXIgLnByaWNlcyB0YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC5wcmljZXMgdGFibGUgdHIsIC50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC5wcmljZXMgdGFibGUgdGQsIC50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC5wcmljZXMgdGFibGUgdGgge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbn1cXG4udGVtcGxhdGUgLnByX2NvbnRhaW5lciAucHJpY2VzIHRhYmxlIC5iLWJvdCB0ZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM4MjgyODI7XFxufVxcbi50ZW1wbGF0ZSAucHJfY29udGFpbmVyIC5wcmljZXMgdGFibGUgdGgge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG59XFxuLnRlbXBsYXRlIC5hc2lkZV9tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuLnRlbXBsYXRlIC5hc2lkZV9tZW51IHVsIGxpLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjNDg5NjEzO1xcbn1cXG4udGVtcGxhdGUgLmFzaWRlX21lbnUgdWwgbGkuYWN0aXZlIGEge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50ZW1wbGF0ZSAuYXNpZGVfbWVudSB1bCBhIHtcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcbiAgbWFyZ2luOiAwIDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNCREJEQkQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnRlbXBsYXRlIC5yZXFfdGFibGUgdHIge1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi50ZW1wbGF0ZSAucmVxX3RhYmxlIHRyIHRkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI0JEQkRCRDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuLnRlbXBsYXRlIC5yZXFfdGFibGUgdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnRlbXBsYXRlIC5tYXAge1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuLnRlbXBsYXRlICNtYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiA0NjBweDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0c19ib3gge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9pdGVtIGEge1xcbiAgY29sb3I6ICM0RjRGNEY7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9pdGVtIHAge1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODk2MTM7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfaXRlbTpob3ZlciBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyBoMSB7XFxuICBmb250LXNpemU6IDQ2cHg7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2Rlc2NyIHtcXG4gIGhlaWdodDogMTQ0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICM0RjRGNEY7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjNTZBRjFBO1xcbiAgcGFkZGluZzogNTdweCAzN3B4O1xcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfY2VsbDpob3ZlcjphZnRlciB7XFxuICBib3R0b206IDU3cHg7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfZGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAubm8taXRlbXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAyMnB4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGwsIC50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5wcm9kdWN0X2NlbGwge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XFxuICBwYWRkaW5nOiA2MHB4IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfY2VsbDphZnRlciwgLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLnByb2R1Y3RfY2VsbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiA2MHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHVybCgvdGVtcGxhdGVzL21heGltdW0vYXNzZXRzL2ltZy9ncmFkdy5wbmcpO1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAuY2F0X2NlbGwgaDMsIC50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5wcm9kdWN0X2NlbGwgaDMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzRGNEY0RjtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9jZWxsIGltZywgLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLnByb2R1Y3RfY2VsbCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLmNhdF9kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgLnNob3BfY2F0ZWdvcmllcyAucHJvZHVjdF9jZWxsIHtcXG4gIHBhZGRpbmc6IDMwcHggMzBweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA0NDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5zaG9wX2NhdGVnb3JpZXMgLnByb2R1Y3RfY2VsbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9pbWcvZ3JhZHcucG5nXFxcIik7XFxufVxcbi50ZW1wbGF0ZSAuc2hvcF9jYXRlZ29yaWVzIC5jYXRfZGVzY3Ige1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjNEY0RjRGO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAucGljX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMnB4O1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC5waWNfY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAuYWJvdXRfdXMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5hYm91dF91cyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmludGVyIG9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC5waWNfY29udGFpbmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmZmO1xcbiAgbGVmdDogLTI1cHg7XFxuICB0b3A6IDI1cHg7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC5waWNfY29udGFpbmVyID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5pbnRlciAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuaW50ZXIgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSBwIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmludGVyIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAubWFwX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC5waWNfY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogMTAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnBpY19jb250YWluZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmZmY7XFxuICBsZWZ0OiAyNXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgei1pbmRleDogMDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAucGljX2NvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEgcCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3Qge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAucGljX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnBpY19jb250YWluZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmZmY7XFxuICBsZWZ0OiAyNXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgei1pbmRleDogMDtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC5waWNfY29udGFpbmVyID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAudGV4dF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi50ZW1wbGF0ZSAuY29udGFjdCAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmNvbnRhY3QgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEgcCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5jb250YWN0IC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAucGljX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAucGljX2NvbnRhaW5lcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDE1cHggc29saWQgI2ZmZjtcXG4gIGxlZnQ6IDI1cHg7XFxuICB0b3A6IDI1cHg7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC5waWNfY29udGFpbmVyLnJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDJweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXIucmlnaHQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmZmY7XFxuICBsZWZ0OiAtMjVweDtcXG4gIHRvcDogMjVweDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC5waWNfY29udGFpbmVyID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC5pbmZvX2NvbnQge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGVtcGxhdGUgLmxlZnRfcGljMyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIGgxIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAubGVmdF9waWMzIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgaDEgcCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnBpY19jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDJweDtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAucGljX2NvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUxMXB4O1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5jYWxsYmFja19ibG9jayAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIC5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmNhbGxiYWNrX2Jsb2NrIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sgLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODI4MjgyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA0NjBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmJ1cmdlci1tZW51OmhvdmVyIC5zZXJ2aWNlX3dpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4udGVtcGxhdGUgLnNlcnZpY2Vfd2luZG93IHtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA2MHB4IDEwMnB4O1xcbiAgei1pbmRleDogOTk5OTk7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XFxufVxcbi50ZW1wbGF0ZSAuc2VydmljZV93aW5kb3cgaW1nIHtcXG4gIHdpZHRoOiA3MnB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDcycHggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi50ZW1wbGF0ZSAuc2VydmljZV93aW5kb3cgYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxuICBtaW4taGVpZ2h0OiA5MHB4O1xcbn1cXG4udGVtcGxhdGUgLnNlcnZpY2Vfd2luZG93IC5tZW51X2Yge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50ZW1wbGF0ZSAuc2VydmljZV93aW5kb3cgLm1lbnVfZjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZWVlO1xcbn1cXG4udGVtcGxhdGUgLnNlcnZpY2Vfd2luZG93IC5jb2wtbGctZml2ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyBoMiB7XFxuICBwYWRkaW5nOiAwIDExNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjhweDtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAuYWxsX2NhdGFsb2d1ZSBhIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAuZXhfYmxvY2sge1xcbiAgaGVpZ2h0OiAzMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiBjYWxjKDE2LjY2NjY2NiUgLSA4cHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAucHItcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLnRlbXBsYXRlIC5leGFtcGxlcyAucHItcm93IC5leF9ibG9jayB7XFxuICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzMzMzMyUgLSA4cHgpO1xcbn1cXG4udGVtcGxhdGUgLmV4YW1wbGVzIC5leC1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi50ZW1wbGF0ZSAucHJvamVjdHMgaDEgcCB7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQgLmZpcnN0X3RleHQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQgb2wge1xcbiAgbGlzdC1zdHlsZTogZGlzYztcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5vbmx5X3RleHQgLnRleHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCBoMyB7XFxuICBtYXJnaW46IDA7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IGgzIHAge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLm9ubHlfdGV4dCAucGljX2NvbnRhaW5lci5sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcbi50ZW1wbGF0ZSAub25seV90ZXh0IC5waWNfY29udGFpbmVyLnJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IHtcXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmZpcnN0X3RleHQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC50ZXh0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IGgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IGgzIHAge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLnBpY19jb250YWluZXIubGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLnBpY19jb250YWluZXIucmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IG9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAjY2FsbGJhY2sge1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5pY29faW1nIHtcXG4gIHdpZHRoOiA3MnB4O1xcbiAgaGVpZ2h0OiA3MnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5pY29faW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC53aGl0ZV9ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuZGVjb3JfaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTExMHB4O1xcbiAgbGVmdDogMTlweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5kZWNvcl9pbWcyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTExN3B4O1xcbiAgcmlnaHQ6IDE5cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAucGljX2NvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5jb250IGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuZm9ybS1ncm91cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAuZm9ybS1ncm91cCBsYWJlbCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgyODI4MjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzICNjYWxsYmFjayB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuaWNfbGFiZWwge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuaWNvX2ltZyB7XFxuICB3aWR0aDogMTAycHg7XFxuICBoZWlnaHQ6IDEwMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1pbi13aWR0aDogMTAycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIycHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5pY29faW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLndoaXRlX2Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIGgyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuZGVjb3JfaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTExMHB4O1xcbiAgcmlnaHQ6IDE5cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5kZWNvcl9pbWcyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTExN3B4O1xcbiAgcmlnaHQ6IDE5cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5waWNfY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuY29udCBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzMyAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0czMgLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgyODI4MjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzICNjYWxsYmFjayB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5pY29faW1nIHtcXG4gIHdpZHRoOiA3MnB4O1xcbiAgaGVpZ2h0OiA3MnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuaWNvX2ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLndoaXRlX2Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgaDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmRlY29yX2ltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMTBweDtcXG4gIHJpZ2h0OiAxOXB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5kZWNvcl9pbWcyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTExN3B4O1xcbiAgcmlnaHQ6IDE5cHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLnBpY19jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmNvbnQgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnRlbXBsYXRlIC5iZW5lZml0cyAuYWJvdXRfYmxvY2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi50ZW1wbGF0ZSAuYmVuZWZpdHMgLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGVtcGxhdGUgLmJlbmVmaXRzIC5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgyODI4MjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRlbXBsYXRlIC5tb2JpbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVyaUJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgaDEgcCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgaDIge1xcbiAgcGFkZGluZzogMCAxMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDY4cHg7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5hbGxfY2F0YWxvZ3VlIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5hbGxfY2F0YWxvZ3VlIGEge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuY2F0X2Jsb2NrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDMxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGxhdGUgLmNhdGFsb2d1ZSAuY2F0X2Jsb2NrIGEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuLnRlbXBsYXRlIC5jYXRhbG9ndWUgLmNhdF9ibG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL3RlbXBsYXRlcy9tYXhpbXVtL2Fzc2V0cy9pbWcvZ3JhZC5wbmcpIHJlcGVhdC14IGxlZnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQ2cHgpIHtcXG4gIGh0bWwge1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB9XFxuXFxuICAudGVtcGxhdGUge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB9XFxuXFxuICAuaGVhZF9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuYmVuZWZpdHMge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuYmVuZWZpdHMgLndoaXRlX2Jsb2NrIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAud2ItcGFkZGluZyB7XFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmRlY29yX2ltZzIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5mbGV4LWRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHMgLndoaXRlX2Jsb2NrIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5sZWZ0X21lbnUgaDEge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5sZWZ0X21lbnUgPiBkaXYgPiAucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmVtcGxveWVlc19jbyB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG4gIC5lbXBsb3llZXNfY28gLmNvbC1sZy00IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHMgLmNvbnQgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIGgyIHAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICBsaW5lLWhlaWdodDogMzRweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5iZW5lZml0cyAjY2FsbGJhY2sge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICB9XFxuXFxuICAuYmVuZWZpdHMgLnBpY19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2NhbGxiYWNrIC5tdC02MCB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gICNjYWxsYmFjayBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5sZWZ0X3BpYyB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5sZWZ0X3BpYyAucGljX2NvbnRhaW5lcjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmxlZnRfcGljIC50ZXh0X2NvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAub25seV90ZXh0IC5waWNfY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnRlbXBsYXRlIC5vbmx5X3RleHQgLnBpY19jb250YWluZXIgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5iZW5lZml0c19sZWZ0IC5pbmZvX2NvbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLm9ubHlfdGV4dCAuaW5mb19jb250Om5vdCg6bnRoLWNoaWxkKDJuKSkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAub25seV90ZXh0IC5pbmZvX2NvbnQ6bnRoLWNoaWxkKDJuKSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmJlbmVmaXRzX2xlZnQgLmluZm9fY29udDpudGgtY2hpbGQoMm4pIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmRlY29yX2ltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmludGVyIC50ZXh0X2NvbnRhaW5lciAuYWJvdXRfYmxvY2sge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmludGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAud2hpdGVfYmxvY2sge1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLnBpY19jb250YWluZXIubGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCAucGljX2NvbnRhaW5lci5yaWdodCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmJlbmVmaXRzX2xlZnQgLmFib3V0X2Jsb2NrIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICAuYmVuZWZpdHNfbGVmdCAuYm90X3RleHQge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5iZW5lZml0c19sZWZ0IC5maXJzdF90ZXh0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5pbnRlciAudGV4dF9jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuaW50ZXIgLnRleHRfY29udGFpbmVyIC5hYm91dF9ibG9jayBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHNfbGVmdCB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmludGVyIC5waWNfY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmludGVyIC5waWNfY29udGFpbmVyOmFmdGVyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHMzIC5kZWNvcl9pbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5iZW5lZml0czMge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5iZW5lZml0czMgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmJlbmVmaXRzMyAudy0xMDAucm93IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5iZW5lZml0czMgLmFib3V0X2Jsb2NrIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAubGVmdF9waWMzIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5iZW5lZml0czMgLmljX2xhYmVsIHtcXG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAubGVmdF9waWMzIC5pbmZvX2NvbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXI6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmluZm9fY29udCAuYWJvdXRfYmxvY2sge1xcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAubGVmdF9waWMzIC50ZXh0X2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubGVmdF9waWMzIC5pbmZvX2NvbnQ6bnRoLWNoaWxkKDFuKSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAubGVmdF9waWMzIC5waWNfY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5sZWZ0X3BpYyAudGV4dF9jb250YWluZXIgLmFib3V0X2Jsb2NrIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAubGVmdF9waWMzIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXIucmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIHRlbXBsYXRlIC5sZWZ0X3BpYzMgLnBpY19jb250YWluZXIucmlnaHQ6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmxlZnRfcGljIC5waWNfY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIGgxIHAge1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyX2FkZHMgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIGZvb3RlciAuY29weSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSBmb290ZXIgLmZvb3Rlcl9hZGRzIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICBoZWFkZXIgPiAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5tb2JpbGUgLmJ1cmdlciB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL2J1Z3Jlci5zdmcpIG5vLXJlcGVhdCBsZWZ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICB9XFxuICAubW9iaWxlIC5waG9uZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL2NhbGwuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICB9XFxuICAubW9iaWxlIC5sb2dvIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvbG9nb19tb2JpbGUuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICAubW9iaWxlIC5idXJfbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG4gIH1cXG4gIC5tb2JpbGUgLm1vYl9zZXJ2IGgyIHtcXG4gICAgY29sb3I6ICM2NzVkNWQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgLm1vYmlsZSAubW9iX3NlcnYgLm1lbnVfZiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLm1vYmlsZSAubW9iX3NlcnYgLm1lbnVfZiBpbWcge1xcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tb2JpbGUgLm1vYl9zZXJ2IC5tZW51X2YgYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuICAubW9iaWxlIC5idXJfbWVudS5zaG93IHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4ICNhZmFmYWY7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IGF1dG87XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgfVxcbiAgLm1vYmlsZSAuYnVyX21lbnUuc2hvdyAuY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiAjMzA3MDA2O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgICByaWdodDogMDtcXG4gIH1cXG4gIC5tb2JpbGUgLmJ1cl9tZW51LnNob3cgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIC5tb2JpbGUgLmJ1cl9tZW51LnNob3cgdWwgbGkge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gIH1cXG4gIC5tb2JpbGUgLmJ1cl9tZW51LnNob3cgdWwgbGkgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSBoZWFkZXIgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDQ2cHg7XFxuICB9XFxuICAudGVtcGxhdGUgaGVhZGVyIGgxIHAge1xcbiAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGhlYWRlciAuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIGhlYWRlciAudHJhc3BfYm94IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogIzU2QUYxQTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIGhlYWRlci5mdWxsc2l6ZSAuaWNvX2ltZyB7XFxuICAgIHdpZHRoOiA5NHB4O1xcbiAgICBoZWlnaHQ6IDk0cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLmZ1bGxzaXplIC5iZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmFib3V0X3VzIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmFib3V0X3VzIC50ZXh0X2NvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYWJvdXRfdXMgLnBpY19jb250YWluZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHMgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5iZW5lZml0cyAuZGVjb3JfaW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHMgLmljb19pbWcge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuYmVuZWZpdHMgLmFib3V0X2Jsb2NrIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5jYXRhbG9ndWUgaDIge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmNhdGFsb2d1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuY29udGFpbmVyIC5yb3cgPiBkaXY6bGFzdC1jaGlsZCAuY2F0X2Jsb2NrIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG4gIC50ZW1wbGF0ZSAuY2FsbGJhY2tfYmxvY2sgLnBpY19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnRlbXBsYXRlIC5leGFtcGxlcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuZXhhbXBsZXMgaDIge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmV4YW1wbGVzIC5leF9ibG9jayB7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gOHB4KTtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuZXhhbXBsZXMgLmV4LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAudGVtcGxhdGUgLmNhdGFsb2d1ZSAuYWxsX2NhdGFsb2d1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG5cXG4gIC50ZW1wbGF0ZSAuY2F0YWxvZ3VlIC5hbGxfY2F0YWxvZ3VlIGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kdWxlc19waWNrX2NvbnRbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZHVsZXNfcGlja19jb250ID4gZGl2W2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMjAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkX21vZHVsZVtkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGJvcmRlcjogNHB4IGRhc2hlZCAjZWVlZWVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2M3YzNjMztcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiA0MHB4IDA7XFxuICB6LWluZGV4OiA5OTk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZjtcXG59XFxuLmNvbnRhaW5lcltkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLm1vZHVsZV9zZXR0aW5nc1tkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xcbiAgei1pbmRleDogOTk5OTk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9pY29ucy9zbGlkZXJzLnN2ZykgY2VudGVyIG5vLXJlcGVhdCAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogNTAwbXMgYWxsO1xcbn1cXG4ubW9kdWxlX2JveDpob3ZlciAubW9kdWxlX3NldHRpbmdzW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRvcDogMHB4O1xcbn1cXG4uc2V0dF9ib3hbZGF0YS12LTkwOTAwYjFlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kdWxlX3NldHRpbmdzOmhvdmVyIC5zZXR0X2JveFtkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxuICBwYWRkaW5nLXRvcDogNDBweDtcXG59XFxuLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3ggLmlubmVyW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcbn1cXG4ubW9kdWxlX3NldHRpbmdzOmhvdmVyIC5zZXR0X2JveCAuaW5uZXIgYnV0dG9uW2RhdGEtdi05MDkwMGIxZV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLm1vZHVsZV9zZXR0aW5nczpob3ZlciAuc2V0dF9ib3ggLmlubmVyIC5wYWdlc1tkYXRhLXYtOTA5MDBiMWVdIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA5MDBiMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZHVsZVwiLFxuICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wYXJzZShfdm0ubW9kdWxlKSkgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0zXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImQtc20tZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWctYi0xMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcIm5hdlwiLCB7IGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBcImJyZWFkY3J1bWJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJvbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYiBicmVhZGNydW1iLXN0eWxlMSBtZy1iLTEwXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL3NpdGVcIiwgY3VzdG9tOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gcmVmLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlZi5uYXZpZ2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSByZWYuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhhY3RBY3RpdmUgPSByZWYuaXNFeGFjdEFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IG5hdmlnYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0L/RgNCw0LLQu9C10L3QuNC1INGB0LDQudGC0L7QvFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJIZWxwZGVzayBNYW5hZ2VtZW50XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWctYi0wIHR4LXNwYWNpbmctLTFcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhZ2UubmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLW5vbmUgZC1tZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBwZC14LTE1IGJ0bi13aGl0ZSBidG4tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcItCh0L7RhdGA0LDQvdC40YLRjFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnQgcGQteS0yMFwiLCBhdHRyczogeyBpZDogXCJteVRhYkNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlIG92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImhvbWUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRlbXBsYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF9tb2R1bGUgcG9pbnRlciB1c2VyLXNlbGVjdC1ub25lIG10LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kdWxlc19zaG93ID0gIV92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70YxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZXNfcGlja19jb250XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uJHN0b3JlLmdldHRlcnMubW9kdWxlcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zaXRpb24tcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hcHBlbmRNb2R1bGUobW9kdWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobW9kdWxlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1vZHVsZXMsIGZ1bmN0aW9uKG1vZHVsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9zaXRpb24tcmVsYXRpdmUgbW9kdWxlX2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibW9kdWxlX1wiICsgaW5kZXggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlX3NldHRpbmdzIG10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0X2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5uZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlTW9kdWxlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KPQtNCw0LvQuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29weU1vZHVsZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCh0LrQvtC/0LjRgNC+0LLQsNGC0Ywg0LjQt1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhZ2VzLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNvcHlNb2R1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocGFnZS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJNb2R1bGVcIiwgeyBhdHRyczogeyBtb2R1bGU6IG1vZHVsZSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF9tb2R1bGUgcG9pbnRlciB1c2VyLXNlbGVjdC1ub25lIG10LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kdWxlc19zaG93ID0gIV92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg0JTQvtCx0LDQstC40YLRjCDQvNC+0LTRg9C70YxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2R1bGVzX3Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZXNfcGlja19jb250XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uJHN0b3JlLmdldHRlcnMubW9kdWxlcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zaXRpb24tcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hcHBlbmRNb2R1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhtb2R1bGUubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJwcm9maWxlLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0yIG1nLXQtMTAgbWctbGctdC0wIGJyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UuaXNQdWJsaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5pc1B1Ymxpc2hlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwiaXNQdWJsaXNoZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5wYWdlLmlzUHVibGlzaGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ucGFnZS5pc1B1Ymxpc2hlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5wYWdlLmlzUHVibGlzaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5wYWdlLmlzUHVibGlzaGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzUHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzUHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwiaXNQdWJsaXNoZWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaXNQdWJsaXNoZWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiINCe0L/Rg9Cx0LvQuNC60L7QstCw0L1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0KLQtdC60YHRgiDQvNC10L3RjlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLm1lbnUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGFnZSwgXCJtZW51XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCd0LDQt9Cy0LDQvdC40LUg0YHRgtGA0LDQvdC40YbRi1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhZ2UubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInNlb1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJjb250YWN0LXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU0VPINC30LDQs9C+0LvQvtCy0L7QulwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTRU8g0LfQsNCz0L7Qu9C+0LLQvtC6XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS50aXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYWdlLCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU0VPINC+0L/QuNGB0LDQvdC40LVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2UuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU0VPINC+0L/QuNGB0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYWdlLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwidXJsINGB0YLRgNCw0L3QuNGG0YtcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZS5zbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcInVybCDRgdGC0YDQsNC90LjRhtGLXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFnZS5zbHVnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhZ2UsIFwic2x1Z1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtbGluZVwiLCBhdHRyczogeyBpZDogXCJteVRhYlwiLCByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBhY3RpdmVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJob21lLXRhYlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNob21lXCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JLQuNC30YPQsNC70YzQvdGL0Lkg0YDQtdC00LDQutGC0L7RgFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJwcm9maWxlLXRhYlwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCe0L/QuNGB0LDQvdC40LVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiY29udGFjdC10YWJcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjc2VvXCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJjb250YWN0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlNFT1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4vc3R5bGUubW9kdWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCIvZm9udHMvTWVycml3ZWF0aGVyLUJvbGQudHRmPzljY2I4ODVjOWNmOGU1MDNkNTU3ZjE1ZTBiMmNiZjI0XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9Nb250c2VycmF0LUJvbGQudHRmP2FkZTkxZjQ3MzI1NTk5MWY0MTBmNjE4NTc2OTY0MzRiXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9mb250cy9Nb250c2VycmF0LU1lZGl1bS50dGY/YzhiNmUwODNhZjNmOTQwMDk4MDE5ODljMzczOTQyNWVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGY/ZWU2NTM5OTIxZDcxMzQ4MmI4Y2NkNGQwZDIzOTYxYmJcIjsiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFnczogW10sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBwYXJzZShtb2R1bGUpe1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9IG1vZHVsZS50ZW1wbGF0ZS5odG1sO1xyXG4gICAgICAgICAgICBsZXQgdGFncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaHRtbFtpXSA9PT0gXCJbXCIgJiYgaHRtbFtpKzFdID09PSBcIltcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdfaW5kZXggPSBpKzI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChodG1sW3RhZ19pbmRleF0gIT09ICddJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyArPSBodG1sW3RhZ19pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ19pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0YWcgIT09ICd0b2tlbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzLnB1c2godGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YWdfc3BsaXRlZCA9IHRhZy5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgnW1snICsgdGFnICsgJ11dJywgJzxkaXYgaWQ9XCJjaHVua18nICsgdGFnX3NwbGl0ZWRbMF0gKyAnXycgKyB0YWdfc3BsaXRlZFsxXSArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudGFncyA9IHRhZ3M7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2U0OWIxZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwM2U0OWIxZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxtYXhpbXVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAzZTQ5YjFmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAzZTQ5YjFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAzZTQ5YjFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzZTQ5YjFmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAzZTQ5YjFmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2R1bGVzL01vZHVsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzZTQ5YjFmJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjkwOTAwYjFlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXG1heGltdW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTA5MDBiMWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTA5MDBiMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTA5MDBiMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzkwOTAwYjFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9zaXRlL1BhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwOTAwYjFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDkwMGIxZSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=