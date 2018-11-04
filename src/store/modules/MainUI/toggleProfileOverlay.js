// initial state
const state = {
    showProfileOverlay: false,
    showProfileFab: false,
    activeProfileContainer: '',
};

// getters
const getters = {
    showProfileOverlay: state => state.showProfileOverlay,
    showProfileFab: state => state.showProfileFab,
    activeProfileContainer: state => state.activeProfileContainer
};

// actions
const actions = {};

// mutations
const mutations = {
    toggleProfileOverlay: (state, payload) => {
        state.showProfileOverlay = !state.showProfileOverlay;
    },
    toggleProfileFab: (state, payload) => {
        state.showProfileFab = !state.showProfileFab;
    },
    changeActiveProfileContainer: (state, payload) => {
        state.activeProfileContainer = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};