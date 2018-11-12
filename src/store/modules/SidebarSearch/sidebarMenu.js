// initial state
const state = {
  showFabMenu: false,
  currentFabMenu: ''
};

// getters
const getters = {
  showFabMenu: state => state.showFabMenu,
  currentFabMenu: state => state.currentFabMenu
};

// actions
const actions = {};

// mutations
const mutations = {
  toggleFabMenu: (state, payload) => {
    if (payload) {
      state.showFabMenu = !state.showFabMenu;
      state.currentFabMenu = payload;
    } else {
      state.showFabMenu = !state.showFabMenu;
    }
  },
  changeFabMenu: (state, payload) => {
    if (!payload) {
      state.currentFabMenu = payload;
    } else {
      state.currentFabMenu = payload;
    }
  },
  resetPushMenu: (state) => {
    state.showFabMenu = false;
    state.currentFabMenu = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
