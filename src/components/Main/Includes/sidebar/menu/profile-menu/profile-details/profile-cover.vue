<template>
<!-- Profile with cover -->
<div id="profile-cover" class="columns">
    <div class="cover-overlay"></div>
    <div class="column is-10 is-offset-1 heading-wrapper">
        <div class="profile-heading">
            <div class="columns">
                <div class="column is-2 has-text-centered">
                    <div class="image is-128x128 avatar">
                        <div class="avatar-overlay">
                            <i class="fa fa-camera fa-2x"></i>
                        </div>
                        <img src="https://via.placeholder.com/250x250" alt="">
                    </div>
                </div>
                <div class="column is-4 name">
                    <p>
                        <span class="title light-text is-bold">Helen Miller</span>
                    </p>
                    <p class="tagline light-text">Sales Manager @ Acme Inc.</p>
                    <div>
                        <button class="button dash-btn ripple primary-btn btn-outlined follow rounded width-100">
                            <i class="fa fa-check"></i>Follow
                        </button>
                    </div>
                </div>
                <div class="column is-2 followers has-text-centered is-hidden-mobile">
                    <p class="stat-val">74</p>
                    <p class="stat-key">Projects</p>
                </div>
                <div class="column is-2 following has-text-centered is-hidden-mobile">
                    <p class="stat-val">179</p>
                    <p class="stat-key">Deals</p>
                </div>
                <div class="column is-2 likes has-text-centered is-hidden-mobile">
                    <p class="stat-val">963</p>
                    <p class="stat-key">Leads</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Profile menu FAB -->
    <div class="profile-fab" :class="[ profileFabStatus ? 'is-open' : '']">
        <div class="fab-wrapper">
            <button id="show-notifications" class="notifications fab-btn mini ripple" @click="changeProfContainer('profileNotifications')">
                <i class="material-icons">notifications</i>
            </button>
            <button id="show-team" class="team fab-btn mini ripple" @click="changeProfContainer('profileTeams')">
                <i class="material-icons">group</i>
            </button>
            <button id="show-details" class="details fab-btn mini ripple" @click="changeProfContainer('profileDetails')">
                <i class="material-icons">subject</i>
            </button>
            <button id="profile-fab-trigger" class="fab-btn pop-fab"
            @click="triggerProfileFab">
                <span class="profile-menu-wrapper">
                    <span class="icon-box-toggle" :class="[ profileFabStatus ? 'active' : '']"> 	
                        <span class="rotate">
                            <i class="icon-line-top"></i>
                            <i class="icon-line-center"></i>
                            <i class="icon-line-bottom"></i> 
                        </span>
                    </span>
                </span>
            </button>
        </div>
    </div>
    <!-- /Profile menu FAB -->
</div>
<!-- /Profile with cover -->
</template>

<script>
    export default {
      name: "ProfileCover",
      methods: {
        triggerProfileFab() {
          this.$store.commit("mainToggleProfile/toggleProfileFab");
          return;
        },
        changeProfContainer(c) {
          this.$store.commit("mainToggleProfile/changeActiveProfileContainer", c);
          return;
        }
      },
      computed: {
        profileFabStatus() {
          return this.$store.getters["mainToggleProfile/showProfileFab"];
        }
      }
    };
</script>

<style scoped>
</style>