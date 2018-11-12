<template>
  <h3 class="has-text-centered" :style="styleBind" :class="contentClass">{{content}}</h3>
</template>

<script>
  export default {
    name: 'titleOne',
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