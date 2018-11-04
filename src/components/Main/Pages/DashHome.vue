<template>
 <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li><a href="#">Home</a></li>
                <li>Dashboard</li>
            </ul>
        </nav>
        <!-- /Breadcrumbs -->

        <!-- Dashboard Wrapper -->
        <div class="dashboard-wrapper">

            <div class="columns">           
                <div class="column">
                    <!-- Main content -->
                    <div  class="section-wrapper">
                        <!-- Dashboard content -->
                        <div class="columns dashboard-columns">
                            <!-- test mixins-->
                            <input v-model="filterText">
                            <ul>
                                <li v-for="fruit in filteredFruites" :key="fruit"> {{ fruit }}</li>
                            </ul>
                            <!-- test mixins-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </div>
</template>

<script>
import { fruitMixin } from "@/components/Main/Mixins/fruitMixin.js";

export default {
  name: "DashHome",
  mixins: [fruitMixin],
  data() {
    return {};
  }
};
</script>

<style>
</style>