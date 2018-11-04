//Delete this file
// initial state mark
const state = {
    showSearch: false,
};

// getters
const getters = {
    showSearch: state => state.showSearch
};

// actions
const actions = {};

// mutations
const mutations = {
    toggleMainSearch: (state) => {
        state.showSearch = !state.showSearch;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};