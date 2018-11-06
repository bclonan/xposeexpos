<template>
  <div :class="parentClass" :style="parentStyleBind">
    <button :style="styleBind" :class="contentClass" :href="buttonLink">
      {{content}}</button>
  </div>
</template>

<script>
  export default {
    name: 'buttonSection',
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