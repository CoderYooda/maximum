
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
        return !!module ? module.html : '';
    },


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
    // push_product_errors(state, errors){
    //     state.product_errors = errors;
    // }
};

let actions = {

    get_page({commit}, id){
        return new Promise((resolve, reject) => {
            axios({url: '/api/pages/' + id + '/edit', method: 'GET' })
                .then(resp => {
                    commit('push_page', resp.data.page);
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
