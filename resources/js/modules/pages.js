
let state = {
    pages : [],
    // product_errors : [],
};

let getters = {
    pages : state => {
        return state.pages
    },
    // getByCategoryId : (state) => (category_id) => {
    //     return state.products.filter(item => item.category_id === category_id)
    // },
    page : (state) => (id) => {
        return state.pages.filter(item => item.id === id)[0];
    },
    page_modules : (state) => (id) => {
        let page = state.pages.filter(item => item.id === id)[0];
        return !!page ? page.modules : null;
    },
    page_module_html : (state) => (page_id, id) => {
        let page = state.pages.filter(item => item.id === page_id)[0];
        let module = page.modules.filter(item => item.id === id)[0];
        let className = module.name + 'Class';
        let instance = new window[className]({
            propsData: { module: module }
        });
        instance.$mount();

        return !!module ? instance.$el.outerHTML : '';
    },

    get_page : (state) => (id) => {
        return state.pages.filter(item => item.id === id)[0];
    },
    get_module : (state) => (page_id, id) => {
        return state.getters.get_page(page_id).modules.filter(item => item.id === id)[0];
    },
    get_module_chunk : (state) => (page_id, module_id, type, id) => {
        let module = state.getters.get_module(page_id, module_id);
        let ch = type + 's';
        return module[ch].filter(item => item.id === id)[0];
    }
    // product_store_errors : state => {
    //     return !!state.product_errors ? state.product_errors : {
    //         price: null,
    //         action_price: null,
    //         name: null,
    //         article: null,
    //         category_id: null,
    //         description: null,
    //     }
    // },
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
    page(state, page){
        state.pages.push(page);
    },
    pages(state, pages){
        state.pages = pages;
    },
    push_page(state, page){
        state.pages.pushIfNotExist(page, function(e) {
            return e.id === page.id;
        });
    },
    mm(state, id){
        let page = state.pages.filter(item => item.id === id)[0];
        page.modules.push({});
    },
    // push_product_errors(state, errors){
    //     state.product_errors = errors;
    // }
};

let actions = {
    get_page({commit}, id){
        return new Promise((resolve, reject) => {
            axios({url: '/api/front/pages/' + id + '/edit', method: 'GET' })
                .then(resp => {
                    commit('push_page', resp.data.page);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_pages({commit}, filter_data){
        return new Promise((resolve, reject) => {
            axios({url: '/api/front/pages', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('pages', resp.data.pages);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    store_page({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/front/pages/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_page', resp.data.page);
                    //commit('push_page_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    //commit('push_page_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_page({commit}, page){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/front/pages/' + page.id + '/update', data: page, method: 'POST' })
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
