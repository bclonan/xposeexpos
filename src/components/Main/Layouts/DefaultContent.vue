<template>
<!-- Main dashboard container -->
<div id="dashboard-wrapper" class="columns" :class="[ sidebarStoreMenu ? 'is-pushed' : '']">
    <!-- removed column -->
        <router-view />
    <!-- removed column -->
    
</div>
<!-- Main dashboard container -->
</template>

<script>
  export default {
    name: "DefaultContent",
    computed: {
      sidebarStoreMenu() {
        return this.$store.getters["mainPushMenu/showPushMenu"];
      }
    }
  };
</script>


