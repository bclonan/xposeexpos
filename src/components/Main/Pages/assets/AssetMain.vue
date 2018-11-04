<template>
    <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/main">Home</router-link>
                </li>
                <li>Assets</li>
            </ul>
        </nav>
        <!-- /Breadcrumbs -->

        <!-- Dashboard Wrapper -->
        <div class="dashboard-wrapper">

            <div class="columns">
                <div class="column">
                    <!-- Main content -->
                    <div class="section-wrapper">
                        <!-- Dashboard content -->
                        <div class="columns dashboard-columns">


                            <!-- Assets Table-->
                            <asset-table />
                            <!-- /Assets Table-->

                            <!-- Right side menu -->
                          <right-side-bar />
                            <!-- Mobile placeholder -->
                            <div class="column is-8 is-offset-2 is-hidden-desktop is-hidden-tablet">
                                <div class="flex-card is-not-supported light-bordered">
                                    <img src="assets/images/illustrations/not-mobile.svg" alt="">
                                    <div class="has-text-centered">
                                        <h3>Ouch...</h3>
                                        <p>Sorry, the document view is not supported on mobile. Please try a device
                                            with a wider screen.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import AssetTable from "@/components/Main/Pages/assets/Includes/AssetTable.vue";
import RightSideBar from "@/components/Main/Pages/assets/Includes/AssetSideBar.vue";
import { dropdownMixin } from "@/components/Main/Mixins/dropdownMixin.js";

dropdownMixin.js;
export default {
  name: "DashAssetsMain",
  mixins: [dropdownMixin],
  data() {
    return {};
  },
  components: {
    AssetTable,
    RightSideBar
  }
};
</script>

<style>
</style>