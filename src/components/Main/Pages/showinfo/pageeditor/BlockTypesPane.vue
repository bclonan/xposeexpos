<template>
  <div class="blockTypes">
    <draggable v-model="blockTypes" :options="draggableOptions" :clone="createBlock">
      <div class="blockType" v-for="block in blockTypes" :key="block.name">
        {{block.name}}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import blockTypesJSON from '@/components/Main/Pages/showinfo/blocks/blocks.json'
let id = 1

export default {
  components: { draggable },
  props: {
    blocks: Array,
  },
  computed: {
    draggableOptions() {
      return {
        group: {
          name: 'blocks',
          pull: 'clone',
          put: false,
        },
      }
    },
    blockTypes() {
      return blockTypesJSON
    },
  },
  methods: {
    createBlock(template) {
      return {
        id: id++,
        ...template,
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.blockTypes {
  min-width: 150px;

  padding: 1rem;

  .blockType {

    padding: 0.5rem;
    border-radius: 4px;

    cursor: -webkit-grab;
    cursor: grab;
    margin-bottom: 1rem;
    text-align: center;
  }
}
</style>
