<template>
  <body>

       <Mobile-Navbar-User />

       <Main-Sidebar />

       <Funnel-Fab />

       <Funnel-Categories-Right />

      <SearchOverlay />

       <FunnelDefaultView />

       <PushSidebar />
       <PushStepsSidebar />

  </body>
</template>

<script>
import MobileNavbarUser from "@/components/Funnel/Includes/navbars/mobile-navbar-user.vue";
import PushSidebar from "@/components/Funnel/Includes/pushSidebar/push-sidebar.vue";
import PushStepsSidebar from "@/components/Funnel/Includes/pushSidebar/push-step-sidebar.vue";
//import SearchOverlay from "@/components/Funnel/Includes/search/search-overlay.vue";

import MainSidebar from "@/components/Funnel/Includes/sidebar/funnel-sidebar.vue";
import FunnelFab from "@/components/Funnel/Includes/quickviews/flying-button.vue";
import FunnelCategoriesRight from "@/components/Funnel/Includes/quickviews/quickview-categories.vue";
//Steps Empty Quickview
import FunnelStepsEmpty from "@/components/Funnel/Includes/quickviews/quickview-steps-empty.vue";
//Steps Full Quickview
import FunnelStepsFull from "@/components/Funnel/Includes/quickviews/quickview-steps-full.vue";
//Default Router-ViewHolder
import FunnelDefaultView from "@/components/Funnel/Layouts/DefaultFunnelLayout.vue";

//Footer
// import FunnelFooter from "@/components/Funnel/Includes/footer/Footer.vue";

export default {
  name: "FunnelDashView", // id of the layout (required)
  components: {
    MobileNavbarUser,
    MainSidebar,
    FunnelFab,
    FunnelCategoriesRight,
    FunnelStepsEmpty,
    FunnelStepsFull,
    FunnelDefaultView,
    PushSidebar,
    PushStepsSidebar
  }
};
</script>

<style scoped>
@import url("../../styles/Main/css/bulma.css");
@import url("../../styles/Funnel/css/icons.min.css");
@import url("../../styles/Funnel/css/core.css");
</style>
