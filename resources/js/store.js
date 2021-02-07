import Vue from 'vue'
import Vuex from 'vuex'

//Modules import
import auth from './modules/auth';
import categories from './modules/categories';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    getters : {
        score : state => {
            return 1
        },
    },
    mutations: {
        app_state(state){
            state.status = 'loading';
        },
    },
    actions:{
    },
    modules: {
        auth,
        categories,
        products,
    },
})
