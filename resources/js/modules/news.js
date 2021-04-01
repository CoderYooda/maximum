import Axios from 'axios';

let state = {
    newws : [],
    neww_errors : [],
};

let getters = {
    newws : state => {
        return state.newws
    },
    getnewwById : (state) => (id) => {
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
            : state.newws.filter(item => item.id === parseInt(id));
    },
    getneww : (state) => (id) => {

        return state.newws.filter(item => item.id === id)[0];
    },
    neww_store_errors : state => {
        return !!state.neww_errors ? state.neww_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            neww_id: null,
            description: null,
        }
    },
};

let mutations = {
    newws(state, newws){
        state.newws = newws;
    },
    push_neww(state, neww){
        state.newws.pushIfNotExist(neww, function(e) {
            return e.id === neww.id;
        });
    },
    push_neww_errors(state, errors){
        state.neww_errors = errors;
    }
};

let actions = {

    get_newws({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/news', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('newws', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_neww({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/news/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_neww', resp.data.neww);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_neww({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/news/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_neww', resp.data.neww);
                    commit('push_neww_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_neww_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_neww({commit}, neww){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/news/' + neww.id + '/update', data: neww, method: 'POST' })
                .then(resp => {
                    commit('push_neww_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_neww_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
