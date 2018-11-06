<template>
  <ul class="menu-list">
    <li class="blockType" v-for="block in blockList" :key="block.blockName">

      <a @click.stop="addBlock(block)"> {{block.blockName}} </a>
    </li>
  </ul>

</template>

<script>
  export default {
    components: {},
    data() {
      return {
        blockList: [
          {
            blockName: 'Title Block',
            tagName: 'contentTitle',
            content: 'Sample Title',
            class: [''],
            style: ['']
          },
          {
            blockName: 'Text Block',
            tagName: 'textSection',
            content: 'heywhatggggggsup',
            class: [''],
            style: [''],
            parentClass: [''],
            parentStyle: ['']
          },
          {
            blockName: 'Button Block',
            tagName: 'buttonSection',
            buttonLink: '',
            content: 'heywhatggggggsup',
            class: [''],
            style: [''],
            parentClass: [''],
            parentStyle: ['']
          }
        ]
      };
    },

    methods: {
      addBlock(b) {
        this.$emit('dragOnBlock', b);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
