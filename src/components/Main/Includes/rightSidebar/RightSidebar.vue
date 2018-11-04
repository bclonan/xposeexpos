<template>
<!-- Right sidebar quickview -->
<div class="quickview" :class="[ rightSidebarToggled ? 'is-active' : '']">
    <!-- Quickview header -->
    <header class="quickview-header is-secondary">
        <p class="title">Messages</p>
        <div class="cross-container" data-dismiss="quickview" @click="closeRightSidebar">
            <span class="top"></span>
            <span class="bottom"></span>
        </div>
    </header>
    <!-- /Quickview header -->

    <!-- Quickview body -->
    <div class="quickview-body">
        <div class="quickview-block">
            <!-- Quickview tabs -->
            <div class="navigation-tabs translated-tabs simple-tabs">
                <div class="tabs is-fullwidth">
                    <ul>
                        <li data-tab="user-directory" @click="setActiveTab('UserTab')" :class="[ isTabActive === 'UserTab' ? 'is-active' : '']"><a><i class="sl sl-icon-people"></i></a></li>
                        <li data-tab="reminders" @click="setActiveTab('RemindersTab')" :class="[ isTabActive === 'RemindersTab' ? 'is-active' : '']"><a><i class="sl sl-icon-clock"></i></a></li>
                        <li data-tab="quickview-settings" @click="setActiveTab('SettingsTab')" :class="[ activeTab === 'SettingsTab' ? 'is-active' : '']"><a><i class="sl sl-icon-settings"></i></a></li>
                    </ul>
                </div>
                
                <UserTab v-if="activeTab === 'UserTab'"/>

                <ReminderTab v-else-if="activeTab === 'RemindersTab'" />

                <SettingsTab v-else />
            </div>
            <!-- /Quickview tabs -->
        </div>
    </div>
    <!-- /Quickview body -->

    <!-- Quickview footer -->
    <footer class="quickview-footer"></footer>
    <!-- /Quickview footer -->
</div>
</template>

<script>
    import UserTab from "@/components/Main/Includes/rightSidebar/tabitems/users.vue";
    import SettingsTab from "@/components/Main/Includes/rightSidebar/tabitems/settings.vue";
    import ReminderTab from "@/components/Main/Includes/rightSidebar/tabitems/reminders.vue";

    import { rightTabMixin } from "@/components/Main/Mixins/rightTabMixin.js";

    export default {
      name: "RightSidebar",
      mixins: [rightTabMixin],
      data() {
        return {
          activeTab: "UserTab"
        };
      },
      components: {
        UserTab,
        SettingsTab,
        ReminderTab
      },
      methods: {
        closeRightSidebar() {
          this.$store.commit("mainSidebarRight/toggleChatMenu");
          return;
        }
      },
      computed: {
        rightSidebarToggled() {
          return this.$store.getters["mainSidebarRight/showChat"];
        }
      }
    };
</script>