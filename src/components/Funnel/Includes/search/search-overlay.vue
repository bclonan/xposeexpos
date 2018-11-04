<template>
<span>
<!-- Search overlay -->
<div class="search-overlay" :class="[ searchToggleChecker ? 'is-active' : '']"></div>

<!-- Search input -->
<div class="search-input-wrapper is-desktop" :class="[ searchToggleChecker ? 'is-active' : 'is-hidden']">
  <div class="field">
                    <div class="control" :class="[ searchToggleChecker ? 'is-active' : 'is-hidden']">
                        <input type="text" name="search" autofocus="" required="">
                        <span id="clear-search" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                        <span class="search-help">Type the name of the product you are looking for</span>
                    </div>
                </div>
</div>
</span>
</template>

<script>
export default {
  name: "SearchOverlay",
  computed: {
    searchToggleChecker() {
      return this.$store.getters["funnelSearchOverlay/showSearch"];
    }
  }
};
</script>