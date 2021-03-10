require('./bootstrap');
require('./proto');
require('./functions');
window.feather = require('feather-icons');

import Vue from 'vue';
import wysiwyg from "vue-wysiwyg";
//import auth from './auth';
import App from './components/App.vue'
import router from './router';
import store from './store';
import Axios from 'axios'
import { Cropper } from 'vue-advanced-cropper';
import PerfectScrollbar from 'vue2-perfect-scrollbar'


import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import ruRU from './services/editor.lang.ru';
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);
Vue.use(PerfectScrollbar);
Vue.use(wysiwyg, {}); // config is optional. more below
VueMarkdownEditor.lang.use('ru-Ru', ruRU);

import vSelect from 'vue-select'

Vue.component('v-select', vSelect);

import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
import VModal from 'telvin-vue-js-modal'

Vue.use(VModal);
Vue.directive('tooltip', VTooltip);
Vue.directive('close-popover', VClosePopover);
Vue.component('v-popover', VPopover);
Vue.component('cropper', Cropper);


// import Benefits from "./components/modules/Benefits";
// import Callback from "./components/modules/Callback";
import Text from "./components/modules/Chunks/Text";
import Image from "./components/modules/Chunks/Image";
import Link from "./components/modules/Chunks/Link";
import Background from "./components/modules/Chunks/Background";
// Vue.component('m-Benefits', Benefits);
// Vue.component('m-Callback', Callback);
// Vue.component('text', Text);
// Vue.component('image', Image);
window.text = Vue.extend(Text);
window.image = Vue.extend(Image);
window.link = Vue.extend(Link);
window.background = Vue.extend(Background);


Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.headers.common['Accept'] = 'application/json';
Axios.defaults.headers.common['Content-Type'] = 'application/json';

let token = localStorage.getItem('token');
if(token)
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

Vue.prototype.$http = Axios;
Vue.prototype.$eventBus = new Vue();

let app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
