// initial state
const state = {
  showMessageModal: false,
  messageTarget: []
};

// getters
const getters = {
  showMessageModal: state => state.showMessageModal
};

// actions
const actions = {};

// mutations
const mutations = {
  toggleshowMessageModalOverlay: (state, payload) => {
    state.messageTarget = payload;
    state.showMessageModal = !state.showMessageModal;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
