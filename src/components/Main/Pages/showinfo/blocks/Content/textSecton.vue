<template>
  <div :class="parentClass" :style="parentStyleBind">
    <p :style="styleBind" :class="contentClass">
      {{content}}</p>
  </div>
</template>

<script>
  export default {
    name: 'textSection',
    props: ['contentClass', 'contentStyle', 'content', 'buttonLink', 'parentClass', 'parentStyle'],
    computed: {
      styleBind() {
        var b = this.contentStyle.join('');

        return b;
      },
      parentStyleBind() {
        var b = this.parentStyle.join('');

        return b;
      }
    }
  };
</script>

<style scoped>
</style>