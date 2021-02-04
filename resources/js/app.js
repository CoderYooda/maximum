require('./bootstrap');
window.feather = require('feather-icons');

import Vue from 'vue';

//import auth from './auth';
import App from './components/App.vue'
import router from './router';
import store from './store';
import Axios from 'axios'

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import ruRU from './services/editor.lang.ru';
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);
VueMarkdownEditor.lang.use('ru-Ru', ruRU);

Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.headers.common['Accept'] = 'application/json';
Axios.defaults.headers.common['Content-Type'] = 'application/json';

Vue.prototype.$http = Axios;
Vue.prototype.$eventBus = new Vue();

let app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
