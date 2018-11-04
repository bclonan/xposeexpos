<template>
  <!-- Main sidebar menu -->
  <nav class="main-menu">
    <div class="main-menu-inner">
      <!-- Side icon menu -->
      <ul>
        <li
          v-for="item in sideItems"
          class="side-icon"
          :key="sideItems.id"
          @click="$emit('sidenavToggle', item.menuName)">
          <i :class="item.icon"/>
        </li>
      </ul>
      <!-- special help items-->
      <hr>
      <ul>
        <li
          v-for="item in helpSideitems"
          class="side-icon"
          :key="sideItems.id">
          <i :class="item.icon"/>
        </li>
      </ul>

    </div>
  </nav>
  <!-- /Main sidebar menu -->
</template>

<script>
export default {
  props: {
    sideItems: {
      type: Array,
      required: true,
    },
    helpSideitems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      msg: 'This is a button.',
    };
  },
  components: {},
  methods: {
    clickControl(message) {
      alert(message);
    },
  },
};
</script>

<style>
</style>
