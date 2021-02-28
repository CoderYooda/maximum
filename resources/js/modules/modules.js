
let state = {
    modules : [],
    // product_errors : [],
};

let getters = {
    modules : state => {
        return state.modules
    },
    module : (state) => (id) => {
        return state.modules.filter(item => item.id === id)[0];
    },
    get_module : (state) => (id) => {
        return state.modules.filter(item => item.id === id)[0];
    },
};

let mutations = {
    module(state, module){
        state.modules.push(module);
    },
    modules(state, modules){
        state.modules = modules;
    },
    push_module(state, module){
        state.modules.pushIfNotExist(module, function(e) {
            return e.id === module.id;
        });
    },
};

let actions = {
    get_module({commit}, id){
        return new Promise((resolve, reject) => {
            axios({url: '/api/front/modules/' + id + '/edit', method: 'GET' })
                .then(resp => {
                    commit('push_module', resp.data.module);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_modules({commit}, filter_data){
        return new Promise((resolve, reject) => {
            axios({url: '/api/front/modules', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('modules', resp.data.modules);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    store_module({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/front/modules/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_module', resp.data.page);
                    //commit('push_page_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    //commit('push_page_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_module({commit}, module){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/front/modules/' + module.id + '/update', data: module, method: 'POST' })
                .then(resp => {
                    //commit('push_page_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    //commit('push_page_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
