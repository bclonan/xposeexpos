<template>
  <div class="feature-card card-md light-bordered hover-inset has-text-centered ">
    <div class="card-icon"><img
      :src="gettingStarted.getStartedImage"
      alt=""></div>
    <div class="card-title">
      <h4>Getting Started</h4>
    </div>
    <div class="card-feature-description"><span>Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span></div>
    <router-link
      to="gettingStarted.getStartedLink"
      class="button btn-align btn-more is-link"
      style="color:white;">
      Learn more <i class="sl sl-icon-arrow-right"/></router-link>
  </div>
</template>

<script>
export default {
  props: {
    gettingStarted: {
      type: Object,
      required: true,
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
