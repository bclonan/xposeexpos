export const activeTabMixinTwo = {
  data() {
    return {
      activeTabTwoChosen: ''
    };
  },
  methods: {
    setTheActiveTabTwo(tabName) {
      this.activeTabTwoChosen = tabName;
      return;
    }
  },
  computed: {
    isTabActiveNowTwo() {
      return this.activeTabTwoChosen;
    }
  }
};
