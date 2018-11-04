<template>
    <div class="social-card is-twitter flex-card light-bordered light-raised padding-20">
                                            <div class="social-icon">
                                                <i class="fa fa-twitter"></i>
                                            </div>
                                            <div class="stat-count">
                                                <div class="count">15k <span>people</span></div>
                                                <div class="count-info">are following you</div>
                                            </div>
                                            <div class="symbol">
                                                <i class="fa fa-check"></i>
                                            </div>
      </div>
</template>

<script>
export default {
  props: {
    contentAttached: {
      type: Array,
      default() {
        return { contentAttached: false };
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
</style>
