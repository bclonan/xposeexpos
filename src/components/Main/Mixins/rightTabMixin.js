export const rightTabMixin = {
    data() {
        return {
            activeTab: "UserTab"
        };
    },
    methods: {
        setActiveTab(tabSelected) {
            this.activeTab = tabSelected;
            return;
        }
    },
    computed: {
        isTabActive() {
            return this.activeTab;
        }
    }
};