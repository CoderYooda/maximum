import Vue from 'vue'
import Vuex from 'vuex'

//Modules import
import auth from './modules/auth';
import categories from './modules/categories';
import products from './modules/products';
import images from './modules/images';

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
    },
})
