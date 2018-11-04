
<template>

  <body>
    <default-content />
  </body>
</template>

<script>
  import DefaultContent from '@/components/Welcome/Layouts/DefaultContent.vue';

  export default {
    name: 'WelcomeView',
    data() {
      return {};
    },
    components: {
      DefaultContent
    }
  };
</script>

<style scoped lang="scss" src="../../styles/Welcome/scss/core_new.scss">
</style>
