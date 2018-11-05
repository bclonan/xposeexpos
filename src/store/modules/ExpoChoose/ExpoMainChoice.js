// initial state
const state = {
  choosenExpo: []
};

// getters
const getters = {
  expoInfo: state => state.choosenExpo
};

// actions
const actions = {};

// mutations
const mutations = {
  selectExpo: (state, payload) => {
    state.choosenExpo = payload;
  },

  resetChoosenExpo: (state) => {
    state.choosenExpo = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
