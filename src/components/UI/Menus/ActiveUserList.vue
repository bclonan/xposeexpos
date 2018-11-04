<template>
  <div class="flex-card light-bordered light-raised padding-10">
    <h3 class="card-heading">Active users</h3>
    <!-- user holder-->
    <ul class="user-list" >
      <li
        class="side-icon"
        v-for="item in activeUserIds"
        :key="item.id">
        <div class="user-list-avatar">
          <img
            :src="item.photo"
            alt="">
        </div>
        <div class="user-list-info">
          <div class="name">{{ item.Name }}</div>
          <div class="position">{{ item.jobTitle }}</div>
        </div>
        <div
          class="user-list-status"
          :class="item.notificationSettings.onlineStatus"/>
      </li>
    </ul>

  </div>
</template>

<script>
// import firebase from 'firebase';
// import fbase db
// import db from '@/services/firebase/init'
export default {
  props: {
    ActiveUserList: {
      type: Array,
      required: false,
    },
    activeUserIds: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      activeUsersNew: [],
      uidlist: '',
    };
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style>
</style>
