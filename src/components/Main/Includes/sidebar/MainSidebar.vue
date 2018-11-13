<template>
    <nav class="main-menu">
        <div class="main-menu-inner">

            <Icon-Menu v-if="currentUser === 'vendor'" />

            <!--<Profile-Menu />-->

              <organizer-menu v-if="currentUser === 'organizer'" />

        </div>
    </nav>
</template>

<script>
    import IconMenu from '@/components/Main/Includes/sidebar/menu/icon-menu.vue';
    import OrganizerMenu from '@/components/Main/Includes/sidebar/menu/organizer-icon.vue';
    import ProfileMenu from '@/components/Main/Includes/sidebar/menu/profile-menu.vue';
    export default {
      name: 'MainSidebar',
      components: {
        IconMenu,
        OrganizerMenu,
        ProfileMenu
      },
          computed: {
      currentUser() {
        return this.$store.getters.getUserProf.account_type;
      }
    }
    };
</script>

<style scoped>
</style>
