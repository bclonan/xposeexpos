// initial state
const state = {
    showChat: false,
};

// getters
const getters = {
    showChat: state => state.showChat
};

// actions
const actions = {};

// mutations
const mutations = {
    toggleChatMenu: (state, payload) => {
        state.showChat = !state.showChat;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};