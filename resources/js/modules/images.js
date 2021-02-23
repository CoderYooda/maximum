import Axios from 'axios';

let state = {
    images : [],
    temp_image : null,
};

let getters = {
    images : state => {
        return state.images
    },
    getImageById : (state) => (id) => {
        return state.images.filter(item => item.id === parseInt(id))
    },
    getTempImage : (state) => () => {
        return state.temp_image;
    },
};

let mutations = {
    images(state, images){
        state.images = images;
    },
    set_temp_image(state, url){
        state.temp_image = url;
    }
};

let actions = {

    get_images({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/images/get', data: data, method: 'GET' })
                .then(resp => {
                    commit('images', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_image({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/images/' + id + '/get', method: 'GET' })
                .then(resp => {
                    commit('set_temp_image', resp.data.image);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    store_temp_image({commit}, data){
        return new Promise((resolve, reject) => {
            let formData = new FormData();
            formData.append('file', data.file);
            axios({
                url: '/api/images/temp/store',
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'},
                method: 'POST'
            })
                .then(resp => {
                    commit('set_temp_image', resp.data.url);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    store_image({commit}, data){
        return new Promise((resolve, reject) => {
            axios({
                url: '/api/images/store',
                data: data,
                method: 'POST'
            })
                .then(resp => {
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
