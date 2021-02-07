import Axios from 'axios';

let state = {
    user : null,
    isLogged : false,
    token: localStorage.getItem('token') || '',
    auth_errors : null,
};

let getters = {
    isLoggedIn: state => !!state.token,
    // authStatus: state => state.status,
    user : state => {
        return state.user
    },
    login_email_error : state => {
        return !!state.auth_errors ? state.auth_errors.email : null;
    },
    login_password_error : state => {
        return !!state.auth_errors ? state.auth_errors.password : null;
    },
    auth_errors : state => {
        return state.auth_errors
    },
};

let mutations = {

    clear_auth_request(state){
        state.auth_errors = null;
    },
    auth_success(state, token, user){
        state.status = 'success';
        state.token = token;
        state.user = user;
    },
    auth_errors(state, errors){
        state.auth_errors = errors;
    },
    logout(state){
        state.status = '';
        state.token = '';
    },
};

let actions = {

    login({commit}, user){
        return new Promise((resolve, reject) => {
            commit('app_state');
            axios({url: '/api/login', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.token;
                    const user = resp.data.user;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    commit('auth_success', token, user);
                    resolve(resp);
                })
                .catch(err => {
                    commit('auth_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    localStorage.removeItem('token');
                    reject(err);
                })
        })
    },
    register({commit}, user){
        return new Promise((resolve, reject) => {
            commit('auth_request');
            axios({url: '/api/register', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.token;
                    const user = resp.data.user;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    commit('auth_success', token, user);
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err);
                    localStorage.removeItem('token');
                    reject(err)
                })
        })
    },
    logout({commit}){
        return new Promise((resolve, reject) => {

            axios({url: '/api/logout', method: 'POST' })
                .then(resp => {
                    commit('logout');
                    localStorage.removeItem('token');
                    delete axios.defaults.headers.common['Authorization'];
                    resolve();
                })
                .catch(err => {
                    reject(err)
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
