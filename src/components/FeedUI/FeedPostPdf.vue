<template>
<object  type="application/pdf" width="100%" height="100%">
<iframe width="100%" height="100%" style="border: none;">
This browser does not support PDFs. Please download the PDF to view it: <a>Download PDF</a>
</iframe>
</object>

</template>

<script>
export default {
  props: {
    contentAttached: {
      type: Array,
      default() {
        return { contentAttached: false };
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
</style>
