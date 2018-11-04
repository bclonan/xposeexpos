<template>
<div class="cart-quickview" 
:class="[ sidebarStoreMenu ? 'is-active' : '']"
>
    <div class="inner">
        <!-- Header -->
        <div class="quickview-header">
            <h2>Quick Cart</h2>
            <span id="close-cart-sidebar"><i data-feather="x"></i></span>
        </div>
        <!-- Empty steps -->
        <div class="cart-body">
            <div class="empty-cart has-text-centered">
                <h3>Your cart is empty</h3>
                <img src="assets/images/icons/new-cart.svg" alt="">
                <a href="shop.html" class="button big-button rounded">Start Shopping</a>
                <small>You can create your account later</small>
            </div>
        </div>
        <!-- has setps -->
        <div class="cart-body">
            <ul class="shopping-cart-items">
                <!-- Item -->
                <li class="clearfix">
                    <img src="http://via.placeholder.com/250x250" alt="" />
                    <span class="item-meta">
                        <span class="item-name">Conqueror</span>
                        <span class="item-price">$385,00</span>
                    </span>
                    <span class="quantity">
                        <input class="input is-rounded" type="number" value="1">
                    </span>

                    <span class="remove-item">
                        <i data-feather="x" class="has-simple-popover" data-content="Remove from Cart" data-placement="top"></i>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "pushstepsidebar",
  data() {
    return {
      activePushMenu: "Create",
      chosenSidebar: "MainCreation",
      activeNavDropdown: "",
      selectedDropdown: "",
      isActive: true,
      error: null,
      styleObject: {
        display: "block"
      }
    };
  },
  methods: {
    collapseSubmenu(i) {
      this.activeNavDropdown = i;
      this.selectedDropdown = i;
      return;
    },
    gotolink(item) {
      if (!item.toggleMenu) {
        alert("router");
        this.$store.commit("funnelstepsPushMenu/resetPushMenu");
        //this.$router.push('/path')
        //this.$router.push({path: '/'})
        //this.$router.push({path: '/'})
        return;
      } else {
        this.selectedDropdown = item.name;
        return;
      }
    },
    navigateTo(p) {
      this.$store.commit("funnelstepsPushMenu/resetPushMenu");
      this.$router.push(p);
      return;
    },
    closeSlideMenu() {
      this.$store.commit("funnelstepsPushMenu/resetPushMenu");
      return;
    }
  },
  computed: {
    activeSidebar() {
      let activeBar;
      activeBar = this.sidebarCurrentMenu;

      return activeBar;
    },
    sidebarStoreMenu() {
      return this.$store.getters["funnelstepsPushMenu/showPushMenu"];
    },
    sidebarCurrentMenu() {
      return this.$store.getters["funnelstepsPushMenu/currentPushMenu"];
    }
  },
  components: {}
};
</script>