<template>
  <div class="image is-2by1">
    <img :src="pageHeaderData.headerImage" alt="">

  </div>
</template>

<script>
  export default {
    name: 'headerStyleFour',
    props: ['pageHeaderData']
  };
</script>

<style scoped>
</style>