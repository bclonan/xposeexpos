
<template>

  <body>
    <default-content />
    <send-message-modal />
  </body>
</template>

<script>
  import DefaultContent from '@/components/Welcome/Layouts/DefaultContent.vue';
  import sendMessageModal from '@/components/Welcome/Includes/modals/sendMessageModal.vue';

  export default {
    name: 'WelcomeView',
    data() {
      return {};
    },
    components: {
      DefaultContent,
      sendMessageModal
    }
  };
</script>

<style scoped lang="scss" src="../../styles/Welcome/scss/core_new.scss">
</style>
