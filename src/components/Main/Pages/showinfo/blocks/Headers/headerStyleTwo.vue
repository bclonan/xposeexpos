<template>
  <span>
    <img :src="pageHeaderData.headerImage" class="imgHeader" alt="">
  </span>
</template>

<script>
  export default {
    name: 'headerStyleTwo',

    props: ['pageHeaderData']
  };
</script>

<style scoped>
</style>