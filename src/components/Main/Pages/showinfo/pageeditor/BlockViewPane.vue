<template>
  <div class="blockView">
    <div class="blockPage">
      <div class="blockPageTitle">
        <div class="dot" v-for="i in 3" :key="i" />
        <span>yourpage.html</span>
      </div>
      <draggable class="blockDropArea" v-model="blocks" :options="draggableOptions">
        <div class="blockWrap" v-for="block in blocks" :key="block.id" :data-id="block.id">
          <span>{{block.name}}</span>
          <div v-html="block.html"></div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  computed: {
    blocks: {
      get() {

        return this.$store.state["blockeditor/blocks"];
      },
      set(newValue) {
        this.$store.commit('blockeditor/updateBlocks', newValue)

      },
    },
    draggableOptions() {
      return {
        group: {
          name: 'blocks',
          pull: false,
          put: true,
        },
      }
    },
  },
  methods: {
    pickElement(event) {
      // The actual selected element
      const el = document.elementFromPoint(event.pageX, event.pageY)

      if (!el) return //Invalid element

      // The wrapper that keeps information about it
      const wrapper = el.closest('.blockWrap')

      if (!wrapper || wrapper === el || wrapper === el.parentNode) {
        // Not an editable element
        this.$emit('pick-node', null)
      } else {
        // Initiate editing
        this.$emit('pick-node', {
          element: el,
          block: this.blocks.find(b => b.id === +wrapper.dataset.id),
        })
      }
    },
  },
  mounted() {
    // Listen for all clicks and sort them out later
    this.$el.addEventListener('click', this.pickElement)
  },
  beforeDestroy() {
    // Remove the listener from above, otherwise it can cause duplicating events
    this.$el.removeEventListener('click', this.pickElement)
  },
}
</script>

<style lang="scss" scoped>

.blockView {
  flex: 1;
  padding: 1rem;

  .blockPage {
    background: white;
    border: 1px solid gray;

    .blockPageTitle {
      line-height: 40px;
      background: lightgrey;

      .dot {
        display: inline-block;
        margin: 0 0.5rem;
        width: 12px;
        height: 12px;
        border-radius: 50%;

        &:nth-child(1) {
          background: #e74c3c;
        }
        &:nth-child(2) {
          background: #f4a62a;
        }
        &:nth-child(3) {
          background: #16a085;
        }
      }

      span {
        margin-left: 1rem;
      }
    }

    .blockDropArea {
      min-height: 8rem;
    }

    .blockWrap {
      margin: 1rem;

      span {
        font-size: 12px;
        color: #aaa;
      }

      div {
        border: 1px solid lightgray;
        padding: 0.5rem;
      }
    }
  }
}
</style>
