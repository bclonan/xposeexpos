export const activeSecondTabMixin = {
    data() {
        return {
            activeSecondTabChosen: ''
        };
    },
    methods: {
        setTheactiveSecondTab(tabName) {
            this.activeSecondTabChosen = tabName;
            return;
        }
    },
    computed: {
        isTabactiveSecondNow() {
            return this.activeSecondTabChosen;
        }
    }
};
