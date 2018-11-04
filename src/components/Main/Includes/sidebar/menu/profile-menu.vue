<template>
<!-- Profile wrapper -->
<ul class="profile">
    <li>
        <!-- Profile avatar -->
        <a class="profile-trigger" href="javascript:void(0);" @click="triggerProfile">
            <img class="main-menu-avatar" :class="[ profileOverlayStatus ? 'vanish' : '']" src="https://via.placeholder.com/250x250" alt="">
            <span class="dot" :class="[ profileOverlayStatus ? 'vanish' : '']"></span>
        </a>
        <!-- /Profile avatar -->

        <!-- Profile avatar -->
        <div class="fab js-hamburger" :class="[ profileOverlayStatus ? 'is-active' : '']">
            <!-- Profile page wrapper -->
            <div class="profile-container">
                <div class="inner">
                    <div class="container is-fluid">

                        <Profile-Cover />

                        <!-- Profile Sections -->
                        <div class="container">
                            <div class="columns">
                                <div class="column is-10 is-offset-1">
                                    <div class="profile-sections-wrapper">

                                        <Profile-Details v-if="activeProfileContainer === 'profileDetails'" />
                                        <Profile-Notifications v-else-if="activeProfileContainer === 'profileNotifications'" />
                                        <Profile-Team v-else />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Profile Sections -->
                    </div>
                </div>
            </div>
            <!-- Profile page wrapper -->
            <div class="fab__ripple"></div>
            <div class="hamburger"></div>
        </div>
        <!-- Profile avatar -->
    </li>  
</ul>
<!-- /Profile wrapper -->
</template>

<script>
    import ProfileCover from "@/components/Main/Includes/sidebar/menu/profile-menu/profile-details/profile-cover.vue";
    import ProfileDetails from "@/components/Main/Includes/sidebar/menu/profile-menu/profile-details/profile-details.vue";
    import ProfileTeam from "@/components/Main/Includes/sidebar/menu/profile-menu/profile-details/profile-team.vue";
    import ProfileNotifications from "@/components/Main/Includes/sidebar/menu/profile-menu/profile-details/profile-notifications.vue";

    export default {
      name: "ProfileMenu",
      components: {
        ProfileDetails,
        ProfileTeam,
        ProfileNotifications,
        ProfileCover
      },
      methods: {
        triggerProfile() {
          this.$store.commit("mainToggleProfile/toggleProfileOverlay");
          return;
        }
      },
      computed: {
        profileOverlayStatus() {
          return this.$store.getters["mainToggleProfile/showProfileOverlay"];
        },
        activeProfileContainer() {
          return this.$store.getters["mainToggleProfile/activeProfileContainer"];
        }
      }
    };
</script>

<style scoped>
</style>