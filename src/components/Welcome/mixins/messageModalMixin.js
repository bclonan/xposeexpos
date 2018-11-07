export const activeMessageModalMixin = {
  data() {
    return {
      activeMessageModal: '',
      messageToId: null
    };
  },
  methods: {
    setActiveModal(modalName, i) {
      this.messageToId = i
      this.$store.commit("toggleMessageModal/toggleshowMessageModalOverlay", modalName);

      return;
    },
    resetActiveModalOverlay() {
      this.$store.commit("toggleMessageModal/toggleshowMessageModalOverlay", null);

      return;
    }
  },
  computed: {
    /*isModalActive() {
        return this.activeModal;
    }*/
    activeModalOverlayToggled() {

      return this.$store.getters["toggleMessageModal/showMessageModal"];
    }
  }
};
