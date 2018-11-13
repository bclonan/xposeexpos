<template>
  <div class="select">
    <select v-model="selected" @change="setSelected">
      <option disabled value="">Please select one</option>
      <option :value="null"></option>
      <option v-for="item in expoChoices" :key="item.expo_id" :value="item">{{item.expo_name}}</option>

    </select>
  </div>

</template>

<script>
  export default {
    name: 'expoAutotype',
    props: ['expoChoices'],
    data() {
      return {
        selected: null
      };
    },
    components: {},
    methods: {
      setSelected() {
        console.log(this.selected);
        return this.$emit('selected', this.selected);
      }
    },
    computed: {}
  };
</script>

<style scoped>
</style>