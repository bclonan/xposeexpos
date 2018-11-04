<template>
<div class="menu-fab is-hidden-mobile" :class="[ quickviewStoreMenu ? 'is-hidden' : '']">
    <a class="hamburger-btn" href="javascript:void(0);">
        <span class="menu-toggle">	
            <span class="icon-box-toggle"> 	
                <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i> 
                </span>
            </span>
        </span>
    </a>
</div>
</template>

<script>
export default {
  name: "FunnelFlyingButton",
  computed: {
    quickviewStoreMenu() {
      return this.$store.getters["funnelFabMenu/showFabMenu"];
    }
  }
};
</script>