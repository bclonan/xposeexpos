<template>
  <!-- Side icon menu -->
  <ul>
    <li class="main-logo">
      <router-link to="/main"><img src="@/styles/Main/images/logos/square-violet.svg" alt="xyz"></router-link>
    </li>
    <li v-for="item in NavItems" :key="item.id" :class="[activeNavItem === item.name ? 'is-active' : '', extraClassItems]" @click="setActive(item.name)">
      <i v-if="item.buttontype === 'route'" :class="item.icon" @click="navigateToRoute(item.to)"></i>

      <i v-else :class="item.icon"></i>
    </li>
    <li v-if="currentUser === 'organizer'" v-for="item in OrganizerItems" :key="item.id" :class="[activeNavItem === item.name ? 'is-active' : '', extraClassItems]" @click="setActive(item.name)">
      <i v-if="item.buttontype === 'route'" :class="item.icon" @click="navigateToRoute(item.to)"></i>

      <i v-else :class="item.icon"></i>
    </li>

  </ul>
  <!-- /Side icon menu -->
</template>

<script>
  import { navbarMixin } from '@/components/Main/Mixins/navbarMixin.js';
  const fb = require('@/services/firebase/init.js');

  export default {
    name: 'IconMenu',
    mixins: [navbarMixin],
    data() {
      return {
        extraClassItems: 'side-icon',
        acctType: '',
        OrganizerItems: [
          {
            name: 'editshowinfo',
            icon: 'sl sl-icon-folder-alt',
            menuName: '',
            buttontype: 'route',
            to: '/editshowinfo',
            tag: 'i'
          },
          {
            name: 'confirmVendor',
            icon: 'sl sl-icon-people',
            menuName: '',
            buttontype: 'route',
            to: '/confirmVendor',
            tag: 'i'
          },
          {
            name: 'messages',
            icon: 'sl sl-icon-speech',
            menuName: '',
            buttontype: 'route',
            to: '/messages',
            tag: 'i'
          },
          {
            name: 'account',
            icon: 'sl sl-icon-settings',
            menuName: '',
            buttontype: 'route',
            to: '/account',
            tag: 'i'
          }
        ],
        NavItems: [
          //name = tool name icon = icon for sidebar , menuname = prop to call for inner component
          {
            name: 'addshows',
            icon: 'sl sl-icon-folder-alt',
            menuName: '',
            buttontype: 'route',
            to: '/addShows',
            tag: 'i'
          },
          {
            name: 'editinfo',
            icon: 'sl sl-icon-book-open',
            menuName: '',
            buttontype: 'route',
            to: '/editinfo',
            tag: 'i'
          },

          {
            name: 'messages',
            icon: 'sl sl-icon-speech',
            menuName: '',
            buttontype: 'route',
            to: '/messages',
            tag: 'i'
          },
          {
            name: 'account',
            icon: 'sl sl-icon-settings',
            menuName: '',
            buttontype: 'route',
            to: '/account',
            tag: 'i'
          }
        ]
      };
    },
    methods: {
      subMenu(i) {
        let submenuArray = i;
        if (!this.sidebarStoreMenu) {
          this.$store.commit('mainPushMenu/togglePushMenu', submenuArray);
          return;
        } else {
          this.$store.commit('mainPushMenu/changePushMenu', submenuArray);
          return;
        }
        return;
      },
      navigateToRoute(p) {
        this.$store.commit('mainPushMenu/resetPushMenu');
        this.$router.push(p);
        return;
      }
    },
    computed: {
      sidebarStoreMenu() {
        return this.$store.getters['mainPushMenu/showPushMenu'];
      },
      currentUser() {
        return this.$store.getters.getUserProf.account_type;
      }
    }
  };
</script>
