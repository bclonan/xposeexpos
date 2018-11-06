<template>
  <a class="button is-medium" :style="styleBind" :class="contentClass">{{styleBind}}</a>
</template>

<script>
  export default {
    name: 'buttonOne',
    props: ['contentClass', 'contentStyle', 'content'],
    computed: {
      styleBind() {
        var b = this.contentStyle.join('');

        return b;
      }
    }
  };
</script>

<style scoped>
</style>