
<template>

  <div class="control">
    <input
      class="input is-medium is-rounded"
      type="text"
      placeholder="Filter "
      v-model="search"
      @input="onChange">
    <span class="material-icons">filter_list</span>
  </div>

</template>
<script>
export default {
  name: 'Autocomplete',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    onChange() {
      // ...
    },
  },
};
</script>
