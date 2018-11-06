<template>
  <div :class="parentClass" :style="[parentStyle]">
    <button :style="[contentStyle]" :class="contentClass" :href="buttonLink">
      {{content}}</button>
  </div>
</template>

<script>
  export default {
    name: 'buttonSection',
    props: ['contentClass', 'contentStyle', 'content', 'buttonLink', 'parentClass', 'parentStyle']
  };
</script>

<style scoped>
</style>