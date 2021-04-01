import Axios from 'axios';

let state = {
    articles : [],
    article_errors : [],
};

let getters = {
    articles : state => {
        return state.articles
    },
    getarticleById : (state) => (id) => {
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
            : state.articles.filter(item => item.id === parseInt(id));
    },
    getarticle : (state) => (id) => {

        return state.articles.filter(item => item.id === id)[0];
    },
    article_store_errors : state => {
        return !!state.article_errors ? state.article_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            article_id: null,
            description: null,
        }
    },
};

let mutations = {
    articles(state, articles){
        state.articles = articles;
    },
    push_article(state, article){
        state.articles.pushIfNotExist(article, function(e) {
            return e.id === article.id;
        });
    },
    push_article_errors(state, errors){
        state.article_errors = errors;
    }
};

let actions = {

    get_articles({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/articles', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('articles', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_article({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/articles/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_article', resp.data.article);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_article({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/articles/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_article', resp.data.article);
                    commit('push_article_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_article_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_article({commit}, article){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/articles/' + article.id + '/update', data: article, method: 'POST' })
                .then(resp => {
                    commit('push_article_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_article_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
