<template>
<ul class="feed-channels list-block bordered">
  <li  class="is-active"><a><i class="sl sl-icon-globe mr-20"></i>Projects</a></li>
  <li v-for="item in collabProjects" :key="item.id">
    <a>{{ item.ProjectsName }}</a><span :class="item.ProjectsUnreadClass">{{ item.ProjectsNotifications }}</span>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    collabProjects: {
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
