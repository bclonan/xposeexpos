// initial state
const state = {
      blocks: [],
    nodes: {},
};

// getters
const getters = {
      selectedNode(state) {
      return Object.values(state.nodes).find(n => n.selected)
    }
};

// actions
const actions = {};

// mutations
const mutations = {
    updateBlocks(state, blocks) {
      state.blocks = blocks
    },
    addNode(state, node) {
      Vue.set(state.nodes, node.uid, node)
    },
    selectNode(state, uid) {
      Object.values(state.nodes).forEach(node => {
        Vue.set(node, 'selected', node.uid === uid)
      })
    },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
