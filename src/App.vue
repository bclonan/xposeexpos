<template>
  <span id="app">
    <router-view/>
  </span>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>


<style>
/*css debugger
    @import url("./assets/debugger.css");*/
</style>

