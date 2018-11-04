<template>
  <div class="child-menu-inner" >
    <ul>
      <li class="child-header">
        <div class="sidebar-title">{{ menuSlideTitle }}</div>
        <a
          id="close-child-menu"
          href="#"
          class="menu-wrapper">
          <span class="icon-box-toggle ef-4 active">
            <span class="rotate">
              <i class="icon-line-top"/>
              <i class="icon-line-center"/>
              <i class="icon-line-bottom"/>
            </span>
          </span>
        </a>
      </li>
    </ul>
    <ul class="sidebar-menu animated preFadeInRIght fadeInRight is-active">
      <li
        class="have-children"
        v-for="item in routerLinks"
        :key="item.id">
        <router-link :to="item.to"><i :class="item.icon"/><span class="material-icons">{{ item.icon }}</span>{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuSlideTitle: 'Notifications',
      routerLinks: [
        // name = tool name icon = icon for sidebar , menuname = prop to call for inner component
        {
          name: 'Messages',
          icon: 'insert_drive_file',
          to: '/chatpage',
        },
        {
          name: 'Notifications',
          icon: 'insert_drive_file',
          to: '/mynotifications',
        },
      ],
    };
  },
  components: {},
};
</script>

<style>
</style>
