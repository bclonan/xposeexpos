<template>
  <div class="content column is-11">

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
      <ul>
        <li>
          <router-link to="/main">Home</router-link>
        </li>
        <li>Messages</li>
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
              <message-table />
              <!-- /Assets Table-->

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import messageTable from '@/components/Main/Pages/messages/Includes/messageTable.vue';
  import RightSideBar from '@/components/Main/Pages/assets/Includes/AssetSideBar.vue';
  import { dropdownMixin } from '@/components/Main/Mixins/dropdownMixin.js';
  export default {
    name: 'DashMessages',
    mixins: [dropdownMixin],
    data() {
      return {};
    },
    components: {
      messageTable,
      RightSideBar
    }
  };
</script>

<style>
</style>