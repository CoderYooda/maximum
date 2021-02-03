import Vue from 'vue'
import Vuex from 'vuex'

//Modules import
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    getters : {
    },
    mutations: {
    },
    actions:{
    },
    modules: {
        auth,
    },
})
