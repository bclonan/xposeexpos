export const modalCloseMixin = {
    methods: {
        resetModalOverlay() {
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