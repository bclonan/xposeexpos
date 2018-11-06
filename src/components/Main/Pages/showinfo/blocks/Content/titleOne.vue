<template>
  <h3 class="has-text-centered" :style="contentStyle" :class="contentClass">{{content}}</h3>
</template>

<script>
  export default {
    name: 'titleOne',
    props: ['contentClass', 'contentStyle', 'content']
  };
</script>

<style scoped>
</style>