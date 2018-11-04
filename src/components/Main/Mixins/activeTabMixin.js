export const activeTabMixin = {
    data() {
        return {
            activeTabChosen: ''
        };
    },
    methods: {
        setTheActiveTab(tabName) {
            this.activeTabChosen = tabName;
            return;
        }
    },
    computed: {
        isTabActiveNow() {
            return this.activeTabChosen;
        }
    }
};