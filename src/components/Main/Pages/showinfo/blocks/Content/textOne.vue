<template>
  <p :style="styleBind" :class="contentClass">
    {{content}}</p>
</template>

<script>
  export default {
    name: 'textOne',

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