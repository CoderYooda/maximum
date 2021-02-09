import Axios from 'axios';

let state = {
    categories : [],
};

let getters = {
    categories : state => {
        return state.categories
    },
    getByParent : (state) => (parent_id) => {
        return state.categories.filter(item => item.parent_id === parent_id)
    },
    getCategoryById : (state) => (id) => {
        return state.categories.filter(item => item.id === id)
    },
    getCategory : (state) => (id) => {

        return state.categories.filter(item => item.id === id)[0];
    },
    getParent : (state) => (id) => {
        let parent = state.categories.filter(item => item.id === id)[0];
        if(!!parent && !!parent.parent_id){
            return parent.parent_id;
        } else {
            return 0;
        }
    }

};

let mutations = {
    all(state, categories){
        state.categories = categories;
    },
    push(state, category){
        state.categories.pushIfNotExist(category, function(e) {
            return e.id === category.id;
        });
    }
};

let actions = {

    get_categories({commit}, filter_data){
        return new Promise((resolve, reject) => {
            commit('auth_request');
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
    store_category({commit}, data){
        return new Promise((resolve, reject) => {
            commit('auth_request');
            axios({url: '/api/shop/categories/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push', resp.data.category);
                    resolve(resp);
                })
                .catch(err => {
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
