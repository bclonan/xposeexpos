<template>
<nav class="main-menu">
    <div class="main-menu-inner">
        
        <Icon-Menu />

        <Profile-Menu />
        
    </div>
</nav>
</template>

<script>
    import IconMenu from "@/components/Main/Includes/sidebar/menu/icon-menu.vue";
    import ProfileMenu from "@/components/Main/Includes/sidebar/menu/profile-menu.vue";
    export default {
      name: "MainSidebar",
      components: {
        IconMenu,
        ProfileMenu
      }
    };
</script>

<style scoped>
</style>