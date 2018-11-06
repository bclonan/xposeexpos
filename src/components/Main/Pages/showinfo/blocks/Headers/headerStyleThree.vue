<template>

  <div class="content responsive-title has-text-centered">
    <h1 :class="pgclassNames">{{pageHeaderData.headerText}}</h1>

  </div>

</template>

<script>
  export default {
    name: 'headerStyleThree',

    props: ['pageHeaderData'],
    computed: {
      pgclassNames() {
        let classlist = this.pageHeaderData.headerClassNames.toString();
        console.log(classlist);
        return classlist;
      }
    }
  };
</script>

<style scoped>
</style>