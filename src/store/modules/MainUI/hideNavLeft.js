// initial state
const state = {
    showNavLeft: true,
};

// getters
const getters = {
    showNavLeft: state => state.showNavLeft
};

// actions
const actions = {};

// mutations
const mutations = {
    toggleNavLeft: (state) => {
        state.showNavLeft = !state.showNavLeft;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};