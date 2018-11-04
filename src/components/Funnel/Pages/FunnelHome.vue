<template>
        <!-- Content Wrapper -->
       <div class="shop-wrapper">
        
            <!-- Search overlay -->
            <FunnelSearchOverlay />
            <!-- Background Caption -->
            <div class="background-caption">
                <h1>XYZ Leads</h1>
            </div>
        
            <!-- Hero Caption -->
            <div class="hero-caption">
                <h1>Funnel Builder</h1>
                <h2>MODERN LEAD GENERATION</h2>
                <a href="shop.html" class="button big-button primary-button upper-button rounded raised">GET STARTED</a>
            </div>
        
        </div>
        <!-- /Content Wrapper -->
</template>

<script>
    import FunnelSearchOverlay from "@/components/Funnel/Includes/search/search-overlay.vue";
    export default {
      name: "FunnelHome",
      components: {
        FunnelSearchOverlay
      }
    };
</script>