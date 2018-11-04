<template>
    <ul class="icon-menu">
        <li v-for="item in NavItems" :key="item.id" :class="[activeNavItem === item.name ? 'is-active' : '', extraClassItems]"
            @click="setActive(item.name)">
            <a v-if="item.buttontype === 'route'" @click="navigateToRoute(item.to)">
                <feather-icon :type="item.icon"></feather-icon>
            </a>
            <a v-else-if="item.buttontype === 'submenu'" @click="subMenu(item.subMenus)">
                <feather-icon :type="item.icon"></feather-icon>
            </a>
            <a v-else-if="item.buttontype === 'stepMenu'" @click="subStepMenu(item.subMenus)">
                <feather-icon :type="item.icon"></feather-icon>
            </a>
            <a v-else-if="item.buttontype === 'searchButton'" @click="toggleSearch">
                <feather-icon v-if="!searchToggleChecker" :type="item.icon"></feather-icon>
                <feather-icon v-else type="x"></feather-icon>
               
            </a>
           
            <feather-icon v-else :type="item.icon"></feather-icon>
        </li>

    </ul>
</template>

<script>
import { navbarMixin } from "@/components/Main/Mixins/navbarMixin.js";
export default {
  name: "IconMenu",
  mixins: [navbarMixin],
  data() {
    return {
      extraClassItems: "side-icon",
      NavItems: [
        //name = tool name icon = icon for sidebar , menuname = prop to call for inner component
        {
          name: "home",
          icon: "home",
          menuName: "",
          buttontype: "submenu",
          to: "",
          tag: "i",
          subMenus: [
            {
              name: "Add Step",
              to: "/funneldash",
              icon: "home"
            },
            {
              name: "Template Steps",
              to: "/stepTemplates",
              icon: "home"
            },
            {
              name: "Funnel Settings",
              to: "/funnelControl",
              icon: "settings"
            }
          ]
        },
        {
          name: "plus",
          icon: "plus",
          menuName: "",
          buttontype: "stepMenu",
          to: "",
          tag: "i",
          subMenus: [
            {
              name: "Create New",
              to: "/funneldash",
              icon: "home"
            },
            {
              name: "Your Funnels",
              to: "/funnellist"
            },
            {
              name: "Templates",
              to: "/assets"
            },
            {
              name: "Market Place",
              to: "/assets"
            }
          ]
        },
        {
          name: "Search",
          icon: "search",
          menuName: "",
          buttontype: "searchButton"
        }
      ]
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
    },
    subStepMenu(stepsList) {
      let submenuArray = stepsList;
      this.$store.commit("funnelmainPushMenu/resetPushMenu");
      this.$store.commit("funnelstepsPushMenu/togglePushMenu", stepsList);
      return;
    },
    navigateToRoute(p) {
      this.$store.commit("funnelmainPushMenu/resetPushMenu");
      this.$router.push(p);
      return;
    },
    toggleSearch() {
      this.$store.commit("funnelSearchOverlay/toggleMainSearch");
      return;
    }
  },
  computed: {
    sidebarStoreMenu() {
      return this.$store.getters["funnelmainPushMenu/showPushMenu"];
    },
    searchToggleChecker() {
      return this.$store.getters["funnelSearchOverlay/showSearch"];
    }
  }
};
</script>

<style scoped>
</style>