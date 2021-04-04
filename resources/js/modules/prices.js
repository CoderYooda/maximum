import Axios from 'axios';

let state = {
    prices : [],
    price_errors : [],
};

let getters = {
    prices : state => {
        return state.prices
    },
    getpriceById : (state) => (id) => {
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
            : state.prices.filter(item => item.id === parseInt(id));
    },
    getprice : (state) => (id) => {

        return state.prices.filter(item => item.id === id)[0];
    },
    price_store_errors : state => {
        return !!state.price_errors ? state.price_errors : {
            price: null,
            price_price: null,
            name: null,
            article: null,
            price_id: null,
            description: null,
        }
    },
};

let mutations = {
    prices(state, prices){
        state.prices = prices;
    },
    push_price(state, price){
        state.prices.pushIfNotExist(price, function(e) {
            return e.id === price.id;
        });
    },
    push_price_errors(state, errors){
        state.price_errors = errors;
    }
};

let actions = {

    get_prices({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/system/prices', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('prices', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_price({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/system/prices/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_price', resp.data.price);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    save_prices({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/system/prices/update', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_price_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_price_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
