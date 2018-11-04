<template>
    <!-- Child push sidebar menu -->
    <div class="shop-quickview has-background-image"  :class="[ sidebarStoreMenu ? 'is-active' : '']" data-background="http://via.placeholder.com/1280x853">
        <div class="inner">
        <!-- Header -->
        <div class="quickview-header">
            <h2>Navigation</h2>
            <span @click="closeSlideMenu">
                <feather-icon type="x" :style="{stroke : 'white'}"></feather-icon>
            </span>
        </div>
        <!-- Shop menu -->
        <ul class="shop-menu">
            <li v-for="item in activeSidebar" :key="item.id" :class="[selectedDropdown === item.name ? 'active' : '', item.liType]"
                @click.prevent="gotolink(item)">
                <a @click.prevent="navigateTo(item.to)">
                    <span>{{item.name}}</span>
                    <feather-icon :type="item.icon" :style="{stroke : 'white'}"></feather-icon>
                </a>
            </li>
        </ul>

        <ul class="user-profile">
            <li>
                <a href="account.html">
                    <img src="http://via.placeholder.com/250x250" alt="">
                    <span class="user">
                        <span>ELie Daniels</span>
                        <span>0 <small>Orders</small></span>
                    </span>
                </a>
            </li>
        </ul>
        </div>
    </div>

</template>

<script>
export default {
  name: "PushSidebar",
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
        this.$store.commit("funnelmainPushMenu/resetPushMenu");
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
      this.$store.commit("funnelmainPushMenu/resetPushMenu");
      this.$router.push(p);
      return;
    },
    closeSlideMenu() {
      this.$store.commit("funnelmainPushMenu/resetPushMenu");
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
      return this.$store.getters["funnelmainPushMenu/showPushMenu"];
    },
    sidebarCurrentMenu() {
      return this.$store.getters["funnelmainPushMenu/currentPushMenu"];
    }
  },
  components: {}
};
</script>

<style scoped>
.selectedDropdown {
  display: block;
}
</style>