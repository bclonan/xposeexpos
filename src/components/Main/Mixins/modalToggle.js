export const modalToggleMixin = {
    data() {
        return {
            activeModal: ''
        }
    },
    methods: {
        toggleModalOverlay(i) {
            this.$store.commit("toggleMainModal/toggleModalOverlay");
            return
        }
    },
    /*computed: {
        activeItem() {
            return this.activeModal
        }
    }*/
};