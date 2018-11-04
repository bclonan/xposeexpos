export const dropdownMixin = {
    data() {
        return {
            activeDropdownItem: ''
        }
    },
    methods: {
        setActiveDropdown(i) {
            this.activeDropdownItem = i;
            return
        }
    },
    computed: {
        activeItemDropdown() {
            return this.activeDropdownItem
        }
    }
};