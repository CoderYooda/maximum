import Vue from 'vue'
import Vuex from 'vuex'

//Modules import
import auth from './modules/auth';
import categories from './modules/categories';
import products from './modules/products';
import images from './modules/images';
import pages from './modules/pages';
import contents from './modules/contents';
import modules from './modules/modules';

import employee from './modules/employees';
import vacancies from './modules/vacancies';
import feedback from './modules/feedbacks';
import clients from './modules/clients';
import actions from './modules/actions';
import articles from './modules/articles';
import news from './modules/news';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading : false,
    },
    getters : {
        loading : state => {
            return state.loading
        },
    },
    mutations: {
        loading(state, val){
            state.loading = val;
        },
    },
    actions:{
    },
    modules: {
        auth,
        categories,
        products,
        images,
        pages,
        contents,
        modules,
        employee,
        vacancies,
        feedback,
        clients,
        actions,
        articles,
        news,
    },
    mixins: {}
})
