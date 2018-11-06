<template>
  <p :style="[contentStyle]" :class="contentClass">
    {{content}}</p>
</template>

<script>
  export default {
    name: 'textOne',

    props: ['contentClass', 'contentStyle', 'content']
  };
</script>

<style scoped>
</style>