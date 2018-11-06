<template>
  <a class="button is-medium" :style="contentStyle" :class="contentClass">{{content}}</a>
</template>

<script>
  export default {
    name: 'buttonOne',
    props: ['contentClass', 'contentStyle', 'content']
  };
</script>

<style scoped>
</style>