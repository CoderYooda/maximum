import Axios from 'axios';

let state = {
    feedbacks : [],
    feedback_errors : [],
};

let getters = {
    feedbacks : state => {
        return state.feedbacks
    },
    getfeedbackById : (state) => (id) => {
        return id == 0 ?
            [{
                id : 0,
                name : 'Без имени',
                email : 'Feedback@mail.ru',
                comment : 'Не указано',
                city : 'Белгород',
                isPublished : true,
                images : []
            }]
            : state.feedbacks.filter(item => item.id === parseInt(id));
    },
    getfeedback : (state) => (id) => {

        return state.feedbacks.filter(item => item.id === id)[0];
    },
    feedback_store_errors : state => {
        return !!state.feedback_errors ? state.feedback_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            feedback_id: null,
            description: null,
        }
    },
};

let mutations = {
    feedbacks(state, feedbacks){
        state.feedbacks = feedbacks;
    },
    push_feedback(state, feedback){
        state.feedbacks.pushIfNotExist(feedback, function(e) {
            return e.id === feedback.id;
        });
    },
    push_feedback_errors(state, errors){
        state.feedback_errors = errors;
    }
};

let actions = {

    get_feedbacks({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/feedbacks', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('feedbacks', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_feedback({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/feedbacks/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_feedback', resp.data.feedback);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_feedback({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/feedbacks/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_feedback', resp.data.feedback);
                    commit('push_feedback_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_feedback_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_feedback({commit}, feedback){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/feedbacks/' + feedback.id + '/update', data: feedback, method: 'POST' })
                .then(resp => {
                    commit('push_feedback_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_feedback_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
