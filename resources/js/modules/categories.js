import Axios from 'axios';

let state = {
    categories : [],
    category_errors : [],
};

let getters = {
    categories : state => {
        return state.categories
    },
    getByParent : (state) => (parent_id) => {
        return state.categories.filter(item => item.category_id === parent_id)
    },
    getCategoryById : (state) => (id) => {
        return id == 0 ?
            [{name: 'Корневая директория', id: 0}]
            : state.categories.filter(item => item.id === parseInt(id));
    },
    getCategory : (state) => (id) => {

        return state.categories.filter(item => item.id === id)[0];
    },
    getParent : (state) => (id) => {
        let parent = state.categories.filter(item => item.id === id)[0];
        if(!!parent && !!parent.category_id){
            return parent.category_id;
        } else {
            return 0;
        }
    },
    category_store_errors : state => {
        return !!state.category_errors ? state.category_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            category_id: null,
            description: null,
        }
    },
};

let mutations = {
    all(state, categories){
        state.categories = categories;
    },
    push_category(state, category){
        state.categories.pushIfNotExist(category, function(e) {
            return e.id === category.id;
        });
    },
    push_category_errors(state, errors){
        state.category_errors = errors;
    }
};

let actions = {

    get_categories({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/shop/categories', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('all', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_category({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/shop/categories/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_category', resp.data.category);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_category({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/shop/categories/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_category', resp.data.category);
                    commit('push_category_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_category_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_category({commit}, category){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/shop/categories/' + category.id + '/update', data: category, method: 'POST' })
                .then(resp => {
                    commit('push_category_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_category_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
