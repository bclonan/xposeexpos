<template>
<div class="flex-card light-bordered light-raised padding-10">
  <h3 class="card-heading">Activity feed</h3>
  <div class="header-control ml-auto is-drop drop-sm">
    <i class="sl sl-icon-arrow-down"></i>
    <div class="dropContain">
      <div class="dropOut">
        <ul>
          <li><i class="drop-icon sl sl-icon-refresh"></i> Refresh</li>
          <li><i class="drop-icon sl sl-icon-user"></i> My activity</li>
          <li><i class="drop-icon sl sl-icon-people"></i> All activity</li>
        </ul>
      </div>
    </div>
  </div>
  <ol class="simple-feed">
    <li class="feed-item" v-for="item in chatActivity" :key="item.id">
      <div class="feed-item-text">
      <span class="date" >{{ item.activityDate }}</span>
      <span class="text">
      <span class="name">{{ item.userName }}</span>
      {{ item.activityMessage }}</span>
      </div>
    </li>
  </ol>
</div>
</template>

<script>
export default {
  props: {
    chatActivity: {
      type: Array,
      required: false
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
