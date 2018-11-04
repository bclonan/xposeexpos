// initial state
const state = {
    showModal: false,
};

// getters
const getters = {
    showModal: state => state.showModal
};

// actions
const actions = {};

// mutations
const mutations = {
    toggleModalOverlay: (state, payload) => {
        state.showModal = !state.showModal;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};