export const displayBlockMixin = {
    data() {
        return {
            activeDisplay: "none",
        }
    },
    methods: {
        activeDisplayToggle() {
            this.activeDisplay = 'block';
            return
        },
        ClickedOutside() {
            this.activeDisplay = "none";
            return;
        }
    }
};