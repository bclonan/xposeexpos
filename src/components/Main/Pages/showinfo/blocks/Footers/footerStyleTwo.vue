<template>
  <div class="columns is-flex-mobile">
    <!-- Invoice Brand -->
    <div class="column is-7">
      <img src="https://bulkitv2.cssninja.io/dashboard/assets/images/logos/bulkit-purple.svg" class="logo" alt="">
    </div>
    <!-- Invoice Meta -->
    <div class="column is-5">
      <p class="invoice-meta has-text-right">
        <span>Invoice N°
          <small>INV-832</small>
        </span>
        <br>
        <span>Order N°
          <small>6-D820</small>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footerStyleTwo',

    props: ['pageFooterData']
  };
</script>

<style scoped>
</style>