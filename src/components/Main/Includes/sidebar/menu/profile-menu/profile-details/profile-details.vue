<template>
<!-- Profile details -->
<div id="profile-details">
    <div class="columns">
        
       
        <component @toggleProfEdit="editproftoggle" v-bind:is="currentComponent" />
    </div>
</div>
<!-- /Profile details -->
</template>

<script>
    import ProfileDetailsView from "@/components/Main/Includes/sidebar/menu/profile-menu/profile-details/profile-details-view.vue";
    import ProfileDetailsEdit from "@/components/Main/Includes/sidebar/menu/profile-menu/profile-details/profile-details-edit.vue";

    export default {
      name: "ProfileDetails",
      data() {
        return {
          currentComponent: "ProfileDetailsView"
        };
      },
      methods: {
        editproftoggle(i) {
          this.currentComponent = i;
          return;
        }
      },
      components: {
        ProfileDetailsView,
        ProfileDetailsEdit
      }
    };
</script>

<style scoped>
</style>