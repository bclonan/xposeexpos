<template>
  <div class="autocomplete">
    <input type="text" v-model="search" @input="onChange" />
    <ul v-show="isOpen" class="autocomplete-results">

      <li v-for="(result, i) in filteredTyping" :key="i" @click="setResult(result)" class="autocomplete-result">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
  // import fbase db
  const fb = require('@/services/firebase/init.js');

  import { expolistAutocomplete } from '@/components/Main/Mixins/expoAutocompletelist.js';
  export default {
    name: 'expoAutotype',
    mixins: [expolistAutocomplete],
    data() {
      return {};
    },
    components: {},
    methods: {
      setResult(result) {
        this.search = filteredTyping;
        this.isOpen = false;
      }
    },
    computed: {
      isOpen() {
        var bb = this.filteredTyping;
        if (this.filteredTyping) {
          this.isOpen = true;
        }
      }
    }
  };
</script>

<style scoped>
  .autocomplete {
    position: relative;
    width: 130px;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4aae9b;
    color: white;
  }
</style>