import Axios from 'axios';

let state = {
    vacancies : [],
    vacancy_errors : [],
};

let getters = {
    vacancies : state => {
        return state.vacancies
    },
    getVacancyById : (state) => (id) => {
        console.log(id);
        return id == 0 ?
            [{
                id : 0,
                title : 'Новая вакансия',
                content : '',
                isPublished : true,
            }]
            : state.vacancies.filter(item => item.id === parseInt(id));
    },
    getvacancy : (state) => (id) => {
        return state.vacancies.filter(item => item.id === id)[0];
    },
    vacancy_store_errors : state => {
        return !!state.vacancy_errors ? state.vacancy_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            vacancy_id: null,
            description: null,
        }
    },
};

let mutations = {
    vacancies(state, vacancies){
        state.vacancies = vacancies;
    },
    push_vacancy(state, vacancy){
        state.vacancies.pushIfNotExist(vacancy, function(e) {
            return e.id === vacancy.id;
        });
    },
    push_vacancy_errors(state, errors){
        state.vacancy_errors = errors;
    }
};

let actions = {

    get_vacancies({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/vacancies', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('vacancies', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_vacancy({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/vacancies/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_vacancy', resp.data.vacancy);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_vacancy({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/vacancies/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_vacancy', resp.data.vacancy);
                    commit('push_vacancy_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_vacancy_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_vacancy({commit}, vacancy){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/vacancies/' + vacancy.id + '/update', data: vacancy, method: 'POST' })
                .then(resp => {
                    commit('push_vacancy_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_vacancy_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
