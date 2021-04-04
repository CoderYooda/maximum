import Axios from 'axios';

let state = {
    settings : [],
    setting_errors : [],
};

let getters = {
    settings : state => {
        return state.settings
    },
    getsettingById : (state) => (id) => {
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
            : state.settings.filter(item => item.id === parseInt(id));
    },
    getsetting : (state) => (id) => {

        return state.settings.filter(item => item.id === id)[0];
    },
    setting_store_errors : state => {
        return !!state.setting_errors ? state.setting_errors : {
            price: null,
            setting_price: null,
            name: null,
            article: null,
            setting_id: null,
            description: null,
        }
    },
};

let mutations = {
    settings(state, settings){
        state.settings = settings;
    },
    push_setting(state, setting){
        state.settings.pushIfNotExist(setting, function(e) {
            return e.id === setting.id;
        });
    },
    push_setting_errors(state, errors){
        state.setting_errors = errors;
    }
};

let actions = {

    get_settings({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/system/settings', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('settings', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_setting({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/system/settings/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_setting', resp.data.setting);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    save_settings({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/system/settings/update', data: data, method: 'POST' })
                .then(resp => {
                    //commit('push_setting', resp.data.setting);
                    commit('push_setting_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_setting_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
