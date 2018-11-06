<template>

  <div class="content responsive-title has-text-centered">
    <h1 class="title is-1 mt-60" :class="pgclassNames">{{pageHeaderData.headerText}}</h1>
    <h2 class="title is-2 mt-40">This is a H2 Heading</h2>
    <h3 class="title is-3 mt-40">This is a H3 Heading</h3>
    <h4 class="title is-4 mt-40">This is a H4 Heading</h4>
    <h5 class="title is-5 mt-40">This is a H5 Heading</h5>
    <h6 class="title is-6 mt-40">This is a H6 Heading</h6>
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