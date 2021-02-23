
let state = {
    products : [],
    product_errors : [],
};

let getters = {
    products : state => {
        return state.products
    },
    getByCategoryId : (state) => (category_id) => {
        return state.products.filter(item => item.category_id === category_id)
    },
    getProduct : (state) => (id) => {
        return state.products.filter(item => item.id === id)[0];
    },
    product_store_errors : state => {
        return !!state.product_errors ? state.product_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            category_id: null,
            description: null,
        }
    },
    // get_product_images : (state) => (id) => {
    //     return state.products.filter(item => item.id === id).images;
    // },

    // getParent : (state) => (id) => {
    //     let parent = state.products.filter(item => item.id === id)[0];
    //     if(!!parent && !!parent.parent_id){
    //         return parent.parent_id;
    //     } else {
    //         return 0;
    //     }
    // }

};

let mutations = {
    product(state, product){
        state.products.push(product);
    },
    products(state, products){
        state.products = products;
    },
    push_product(state, product){
        state.products.pushIfNotExist(product, function(e) {
            return e.id === product.id;
        });
    },
    push_product_errors(state, errors){
        state.product_errors = errors;
    }
};

let actions = {

    get_product({commit}, id){
        return new Promise((resolve, reject) => {
            axios({url: '/api/shop/product/' + id + '/get', method: 'GET' })
                .then(resp => {
                    commit('push_product', resp.data.product);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_products({commit}, filter_data){
        return new Promise((resolve, reject) => {
            axios({url: '/api/shop/products', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('products', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    store_product({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/shop/products/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_product', resp.data.product);
                    commit('push_product_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_product_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_product({commit}, product){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/shop/products/' + product.id + '/update', data: product, method: 'POST' })
                .then(resp => {
                    commit('push_product_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_product_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
