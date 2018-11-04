<template>
<div class="main-sidebar">
    <div class="sidebar-brand">
        <router-link to="/"><img src="@/styles/Funnel/images/logo/nephos.svg" alt=""></router-link>
    </div>
    <div class="sidebar-inner">
        <Icon-Menu />   
        <!-- User account -->
        <ul class="bottom-menu is-hidden-mobile">
            <li>
    <a @click.prevent="subMenu(userSlideout.subMenus)">
         <feather-icon :type="userSlideout.icon" ></feather-icon>
    </a>
</li>
             
        </ul>
        
    </div>
</div>
<!-- /Main Sidebar-->
</template>

<script>
import IconMenu from "@/components/Funnel/Includes/sidebar/menu/icon-menu.vue";

export default {
  name: "funnelSidebar",
  components: {
    IconMenu
  },
  data() {
    return {
      userSlideout: {
        name: "logout",
        icon: "log-out",
        menuName: "",
        buttontype: "submenu",
        to: "",
        tag: "i",
        subMenus: [
          {
            name: "Main Dashboard",
            to: "/funneldash",
            icon: "home"
          },
          {
            name: "Tutorials",
            to: "/assets",
            icon: "home"
          },
          {
            name: "Save Funnel",
            to: "/funnellist",
            icon: "home"
          },
          {
            name: "Exit Without Saving",
            to: "/assets",
            icon: "home"
          }
        ]
      }
    };
  },
  methods: {
    subMenu(i) {
      let submenuArray = i;
      if (!this.sidebarStoreMenu) {
        this.$store.commit("funnelmainPushMenu/togglePushMenu", submenuArray);
        this.$store.commit("funnelstepsPushMenu/resetPushMenu");
        return;
      } else {
        this.$store.commit("funnelmainPushMenu/changePushMenu", submenuArray);
        this.$store.commit("funnelstepsPushMenu/resetPushMenu");
        return;
      }
      return;
    }
  }
};
</script>

<style scoped>
</style>