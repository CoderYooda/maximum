import Axios from 'axios';

let state = {
    actions : [],
    action_errors : [],
};

let getters = {
    actions : state => {
        return state.actions
    },
    getactionById : (state) => (id) => {
        return id == 0 ?
            [{
                id : 0,
                name : '',
                description : '',
                slug : '',
                title : '',
                content : '',
                isPublished : true,
                images : []
            }]
            : state.actions.filter(item => item.id === parseInt(id));
    },
    getaction : (state) => (id) => {

        return state.actions.filter(item => item.id === id)[0];
    },
    action_store_errors : state => {
        return !!state.action_errors ? state.action_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            action_id: null,
            description: null,
        }
    },
};

let mutations = {
    actions(state, actions){
        state.actions = actions;
    },
    push_action(state, action){
        state.actions.pushIfNotExist(action, function(e) {
            return e.id === action.id;
        });
    },
    push_action_errors(state, errors){
        state.action_errors = errors;
    }
};

let actions = {

    get_actions({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/actions', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('actions', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_action({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/actions/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_action', resp.data.action);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_action({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/actions/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_action', resp.data.action);
                    commit('push_action_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_action_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_action({commit}, action){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/actions/' + action.id + '/update', data: action, method: 'POST' })
                .then(resp => {
                    commit('push_action_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_action_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
