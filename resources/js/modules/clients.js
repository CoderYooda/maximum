import Axios from 'axios';

let state = {
    clients : [],
    client_errors : [],
};

let getters = {
    clients : state => {
        return state.clients
    },
    getclientById : (state) => (id) => {
        return id == 0 ?
            [{
                id : 0,
                name : '',
                content : '',
                link : '',
                phone : '',
                isPublished : true,
                images : []
            }]
            : state.clients.filter(item => item.id === parseInt(id));
    },
    getclient : (state) => (id) => {

        return state.clients.filter(item => item.id === id)[0];
    },
    client_store_errors : state => {
        return !!state.client_errors ? state.client_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            client_id: null,
            description: null,
        }
    },
};

let mutations = {
    clients(state, clients){
        state.clients = clients;
    },
    push_client(state, client){
        state.clients.pushIfNotExist(client, function(e) {
            return e.id === client.id;
        });
    },
    push_client_errors(state, errors){
        state.client_errors = errors;
    }
};

let actions = {

    get_clients({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/clients', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('clients', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_client({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/clients/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_client', resp.data.client);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_client({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/clients/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_client', resp.data.client);
                    commit('push_client_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_client_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_client({commit}, client){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/clients/' + client.id + '/update', data: client, method: 'POST' })
                .then(resp => {
                    commit('push_client_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_client_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
