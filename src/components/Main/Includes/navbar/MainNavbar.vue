<template>
    <!-- Top Navbar -->
    <nav class="navbar dashboard-nav has-shadow" :class="[ sidebarStoreMenu ? 'is-pushed' : '']">
        <div class="container is-fluid">
            <!-- Nav left -->
            <div class="navbar-brand">
                <!-- Logout button -->
                <div class="navbar-item nav-icon logout-button"  @click="logout">
                    <i class="sl sl-icon-power"></i>
                </div>
                <!-- /Logout button -->

                <!-- Reader mode switch -->
                <div class="navbar-item reader-switch is-hidden-desktop is-hidden-tablet">
                    <div class="field">
                        <input @click="toggleNavLeft" type="checkbox" name="reader-mode-switch" class="switch is-outlined is-primary is-small">
                        <label for="reader-mode-switch" :class="[ sidebarStoreMenu ? 'is-disabled' : '']"></label>
                    </div>
                </div>
                <!-- Reader mode switch -->
                <!-- /Quick search -->

                <!-- Global search (visible on mobile only) -->
                <div class="navbar-item nav-icon search-icon modal-trigger is-hidden-desktop is-hidden-tablet" @click="toggleModalOverlay" data-modal="search-modal">
                    <i class="sl sl-icon-magnifier"></i>
                </div>
                <!-- /Global search -->

                <!-- Right sidebar trigger (visible on mobile only)  -->
                <div class="navbar-item nav-icon chat-button is-hidden-desktop is-hidden-tablet" @click="toggleChatRight" data-show="quickview" data-target="main-quickview">
                    <i class="im im-icon-Speach-Bubble11"></i>
                </div>
                <!-- /Right sidebar trigger -->
            </div>
            <!-- /Nav left -->

            <!-- Nav right -->
            <div class="navbar-menu">
                <div class="navbar-end">

                    <Message-Dropdown />

                    <Notification-Dropdown />

                    <!-- Global search (desktop and tablet only) -->
                    <div class="navbar-item nav-icon search-icon modal-trigger" @click="toggleModalOverlay" data-modal="search-modal">
                        <i class="sl sl-icon-magnifier"></i>
                    </div>
                    <!-- /Global search -->

                    <!-- Right sidebar trigger (desktop and tablet only) -->
                    <div class="navbar-item nav-icon chat-button" @click="toggleChatRight" data-show="quickview" data-target="main-quickview">
                        <i class="im im-icon-Speach-Bubble11"></i>
                    </div>
                    <!-- /Right sidebar trigger-->
                </div>
            </div>
            <!-- /Nav right -->
        </div>
    </nav>
    <!-- /Top Navbar -->
</template>

<script>
import NotificationDropdown from "@/components/Main/Includes/navbar/dropdowns/notification-dropdown.vue";
import MessageDropdown from "@/components/Main/Includes/navbar/dropdowns/messages-dropdown.vue";
import { modalToggleMixin } from "@/components/Main/Mixins/modalToggle.js";
//fbase
const fb = require("@/services/firebase/init.js");

export default {
  name: "MainNavbar",
  mixins: [modalToggleMixin],
  components: {
    NotificationDropdown,
    MessageDropdown
  },
  methods: {
    toggleNavLeft() {
      this.$store.commit("mainNavLeft/toggleNavLeft");
    },
    toggleChatRight() {
      this.$store.commit("mainSidebarRight/toggleChatMenu");
    },
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push({
            name: "login"
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    sidebarStoreMenu() {
      return this.$store.getters["mainPushMenu/showPushMenu"];
    }
  }
};
</script>