<template>
<div class="main-sidebar">
    <div class="sidebar-brand">
        <router-link to="/"><img src="@/styles/Funnel/images/logo/nephos.svg" alt=""></router-link>
    </div>
    <div class="sidebar-inner">
        <ul class="icon-menu">
            <fsidebar-Home />
            <fsidebar-StepActive />
            <fsidebar-Search />
            <fsidebar-Mode />
        </ul>    
        <!-- User account -->
        <ul class="bottom-menu is-hidden-mobile">
            <fsidebar-Logout />
        </ul>
        
    </div>
</div>
<!-- /Main Sidebar-->
</template>

<script>
    import fsidebarLogout from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-logout";
    import fsidebarHome from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-home";
    import fsidebarFilters from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-filters";
    import fsidebarGuests from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-guest";
    import fsidebarLike from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-like";
    import fsidebarMode from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-mode";
    import fsidebarSearch from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-search";
    import fsidebarStepActive from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-step-active";
    import fsidebarStep from "@/components/Funnel/Includes/sidebar-menu-items/sidebar-item-step";

    export default {
      name: "funnelSidebar",
      components: {
        fsidebarLogout,
        fsidebarHome,
        fsidebarFilters,
        fsidebarGuests,
        fsidebarLike,
        fsidebarMode,
        fsidebarSearch,
        fsidebarStepActive,
        fsidebarStep
      }
    };
</script>

<style scoped>
</style>