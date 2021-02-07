
let state = {
    products : [],
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
    products(state, products){
        state.products = products;
    },
    push_product(state, category){
        state.products.pushIfNotExist(category, function(e) {
            return e.id === category.id;
        });
    }
};

let actions = {

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
            commit('auth_request');
            axios({url: '/api/shop/products/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_product', resp.data.product);
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
