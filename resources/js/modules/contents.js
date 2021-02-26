
let state = {
    contents : [],
};

let getters = {
    contents : state => {
        return state.contents
    },
    content : (state) => (type, id) => {
        return state.contents.filter(item => item.id === id && item.type === type)[0];
    },
};

let mutations = {
    content(state, content){
        state.contents.push(content);
    },
    contents(state, contents){
        state.contents = contents;
    },
    push_content(state, content){
        state.contents.pushIfNotExist(content, function(e) {
            return e.id === content.id && e.type === content.type;
        });
    },
};

let actions = {

    get_content({commit}, tag_array){
        return new Promise((resolve, reject) => {
            axios({url: '/api/content/' + tag_array[0] + '/' + tag_array[1] , method: 'GET' })
                .then(resp => {
                    let data = resp.data.content;
                    data.type = tag_array[0];
                    commit('push_content', resp.data.content);
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
