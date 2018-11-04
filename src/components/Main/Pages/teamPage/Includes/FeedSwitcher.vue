<template>
<ul class="feed-channels list-block bordered">
  <li  class="is-active"><a><i class="sl sl-icon-globe mr-20"></i>Main Channel</a></li>
  <li v-for="item in collabFeeds" :key="item.id">
    <a>{{ item.feedName }}</a><span :class="item.feedUnreadClass">{{ item.feedNotifications }}</span>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    collabFeeds: {
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
