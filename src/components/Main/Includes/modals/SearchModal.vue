<template>
  <!-- Search Modal -->
  <div class="modal modal-lg modal-hero" :class="[ modalOverlayToggled ? 'is-active' : '']">
    <div class="modal-background scaleInCircle"></div>
    <div class="modal-content scaleIn">
      <div class="control-material has-icon is-light">
        <input class="material-input" type="text" placeholder="Search..." required autofocus>
        <i class="material-icons">search</i>
        <span class="material-highlight"></span>
        <span class="bar"></span>
      </div>
    </div>
    <button class="modal-close" @click="resetModalOverlay" :class="[ modalOverlayToggled ? 'is-large' : 'is-hidden']" aria-label="close"></button>
  </div>
  <!-- Search modal -->
</template>

<script>
  export default {
    name: "SeachModal",
    methods: {
      resetModalOverlay() {
        this.$store.commit("toggleMainModal/toggleModalOverlay");
        return;
      }
    },
    computed: {
      modalOverlayToggled() {
        return this.$store.getters["toggleMainModal/showModal"];
      }
    }
  };
</script>