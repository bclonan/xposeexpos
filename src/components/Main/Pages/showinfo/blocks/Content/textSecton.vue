<template>
  <div class="section text-centered">
    <p :style="[contentStyle]" :class="contentClass">
      {{content}}</p>
  </div>
</template>

<script>
  export default {
    name: 'textSection'
  };
</script>

<style scoped>
</style>