<template>
  <!-- Slide sidebar menu -->
  <span v-if="isTabActive" >
    <nav
      class="child-menu"
      :class="{ 'is-sidebar-translated' : selectedMenu }" >
      <notifications-Slideout v-if="selectedMenu === 'notificationsSlideout'" />
      <createAssetsSlidemenu v-else-if="selectedMenu === 'createAssetsSlidemenu'" />
      <statisticsSlideoutmenu v-else-if="selectedMenu === 'statisticsSlideoutmenu'" />
    </nav>
  </span>
  <!-- /Slide sidebar menu -->
</template>

<script>
// default slide menu component
import DefaultSlideMenu from '@/components/UI/SlideMenus/MainSlideMenu.vue';
// create asssets
import createAssetsSlidemenu from '@/components/UI/SlideMenus/createAssetsSlidemenu.vue';
// statisticsSlideoutmenu asssets
import statisticsSlideoutmenu from '@/components/UI/SlideMenus/statisticsSlideoutmenu.vue';
// notificationsSlideout asssets
import notificationsSlideout from '@/components/UI/SlideMenus/notificationsSlideout.vue';

export default {
  name: 'SlideOutSidebar',
  props: {
    selectedMenu: {
      type: String,
      default: null,
      required: false,
    },
    selectedTitle: {
      type: String,
      default: 'Home',
      required: false,
    },
  },
  data() {
    return {
      activeItem: this.selectedMenu,
      isActive: '',
      showAssetmenu: true,
      showStatsmenu: false,
      showNotifications: false,
    };
  },
  components: {
    // default slide menu component
    DefaultSlideMenu,
    // funnelbuilderand seetsmenus
    createAssetsSlidemenu,
    statisticsSlideoutmenu,
    notificationsSlideout,
  },
  computed: {
    isTabActive() {
      const bb = this.selectedMenu;
      return bb;
    },
  },
};
</script>

<style>
</style>
