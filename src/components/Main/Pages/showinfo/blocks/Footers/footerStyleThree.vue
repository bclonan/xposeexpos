<template>
  <nav class="level is-mobile">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Twitter</p>
        <p class="title">
          <i class="fa fa-twitter"></i>
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Facebook</p>
        <p class="title">
          <i class="fa fa-facebook-f"></i>
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Linkdin</p>
        <p class="title">
          <i class="fa fa-linkedin"></i>
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Website</p>
        <p class="title">
          <i class="fa fa-tumblr"></i>
        </p>
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'footerStyleThree',

    props: ['pageFooterData']
  };
</script>

<style scoped>
</style>