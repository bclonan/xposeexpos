<template>
  <!-- Content Wrapper -->
  <div class="shop-wrapper">

    <!-- Search overlay -->
    <search-overlay />
    <!-- Main section -->
    <router-view />
    
  </div>
  <!-- /Content Wrapper -->
</template>

<script>
import SearchOverlay from "@/components/Funnel/Includes/search/search-overlay.vue";

export default {
  name: "DefaultFunnelContent",
  computed: {
    sidebarStoreMenu() {
      return this.$store.getters["funnelmainPushMenu/showPushMenu"];
    }
  },
  components: {
    SearchOverlay
  }
};
</script>


