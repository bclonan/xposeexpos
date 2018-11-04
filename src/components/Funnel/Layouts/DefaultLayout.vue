<template>
        <!-- Content Wrapper -->
       <div class="shop-wrapper">
        
            <!-- Search overlay -->
            <FunnelSearchOverlay />
              <!-- Main section -->
    <div class="section">
        <!-- Container -->
        <div class="container">
           <router-view />
        </div>
    </div>
        </div>
        <!-- /Content Wrapper -->
</template>

<script>
import FunnelSearchOverlay from "@/components/Funnel/Includes/search/search-overlay.vue";
export default {
  name: "DefaultFunnelContainer",
  components: {
    FunnelSearchOverlay
  }
};
</script>