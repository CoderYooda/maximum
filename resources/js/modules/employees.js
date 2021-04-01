import Axios from 'axios';

let state = {
    employees : [],
    employee_errors : [],
};

let getters = {
    employees : state => {
        return state.employees
    },
    getemployeeById : (state) => (id) => {
        return id == 0 ?
            [{
                name : '',
                post : '',
                isPublished : true,
                images : []
            }]
            : state.employees.filter(item => item.id === parseInt(id));
    },
    getemployee : (state) => (id) => {
        return state.employees.filter(item => item.id === id)[0];
    },
    employee_store_errors : state => {
        return !!state.employee_errors ? state.employee_errors : {
            price: null,
            action_price: null,
            name: null,
            article: null,
            employee_id: null,
            description: null,
        }
    },
};

let mutations = {
    employees(state, employees){
        state.employees = employees;
    },
    push_employee(state, employee){
        state.employees.pushIfNotExist(employee, function(e) {
            return e.id === employee.id;
        });
    },
    push_employee_errors(state, errors){
        state.employee_errors = errors;
    }
};

let actions = {

    get_employees({commit}, filter_data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/employees', data: filter_data, method: 'GET' })
                .then(resp => {
                    commit('employees', resp.data);
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    get_employee({commit}, id){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/employees/' + id + '/get', method: 'GET' })
                .then(resp => {
                    console.log('success');
                    commit('push_employee', resp.data.employee);
                    resolve(resp);
                })
                .catch(err => {
                    console.log('Err');
                    reject(err);
                })
        })
    },
    store_employee({commit}, data){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/employees/store', data: data, method: 'POST' })
                .then(resp => {
                    commit('push_employee', resp.data.employee);
                    commit('push_employee_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_employee_errors', !!err.response.data.errors ? err.response.data.errors : null);
                    reject(err);
                })
        })
    },
    update_employee({commit}, employee){
        return new Promise((resolve, reject) => {
            //commit('auth_request');
            axios({url: '/api/common/employees/' + employee.id + '/update', data: employee, method: 'POST' })
                .then(resp => {
                    commit('push_employee_errors', null);
                    resolve(resp);
                })
                .catch(err => {
                    commit('push_employee_errors', !!err.response.data.errors ? err.response.data.errors : null);
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
