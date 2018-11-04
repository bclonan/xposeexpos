<template>

  <body :class="[ currentDashMode ? '' : 'reader-mode', modalOverlayToggled ? 'is-fixed' : '', activeModalOverlayToggled ? 'is-fixed' : '']">
    <main-navbar />
    <main-sidebar />
    <push-sidebar />
    <main-body />
    <main-footer />
    <right-sidebar/>
    <chat-sidebar />
    <search-modal />
    <create-task-modal />
    <create-note-modal />
    <create-project-modal />

    <invite-user-modal />
    <upload-assets-modal />
    <create-reminder-modal />
  </body>
</template>

<script>
import MainSidebar from "@/components/Main/Includes/sidebar/MainSidebar.vue";
import PushSidebar from "@/components/Main/Includes/pushSidebar/push-sidebar.vue";
import MainNavbar from "@/components/Main/Includes/navbar/MainNavbar.vue";
import MainFooter from "@/components/Main/Includes/footer/MainFooter.vue";
import RightSidebar from "@/components/Main/Includes/rightSidebar/RightSidebar.vue";
import ChatSidebar from "@/components/Main/Includes/chat/chatSidebar.vue";
import SearchModal from "@/components/Main/Includes/modals/SearchModal.vue";

import DefaultBody from "@/components/Main/Layouts/DefaultContent.vue";
//Modals
import CreateTaskModal from "@/components/Main/Includes/modals/CreateTaskModal.vue";
import CreateNoteModal from "@/components/Main/Includes/modals/CreateNoteModal.vue";
import CreateProjectModal from "@/components/Main/Includes/modals/CreateProjectModal.vue";
import InviteUserModal from "@/components/Main/Includes/modals/InviteUserModal.vue";
import CreateReminderModal from "@/components/Main/Includes/modals/ReminderModal.vue";

import UploadAssetModal from "@/components/Main/Includes/modals/UploadModal.vue";

export default {
  name: "home",
  components: {
    "main-sidebar": MainSidebar,
    "push-sidebar": PushSidebar,
    "main-navbar": MainNavbar,
    "main-body": DefaultBody,
    "main-footer": MainFooter,
    "right-sidebar": RightSidebar,
    "chat-sidebar": ChatSidebar,
    "search-modal": SearchModal,
    "create-task-modal": CreateTaskModal,
    "create-note-modal": CreateNoteModal,
    "create-project-modal": CreateProjectModal,
    "invite-user-modal": InviteUserModal,
    "create-reminder-modal": CreateReminderModal,
    "upload-assets-modal": UploadAssetModal
  },
  computed: {
    currentDashMode() {
      return this.$store.getters["mainNavLeft/showNavLeft"];
    },
    modalOverlayToggled() {
      return this.$store.getters["toggleMainModal/showModal"];
    },
    activeModalOverlayToggled() {
      return this.$store.getters["toggleActiveModal/isActiveModal"];
    }
  }
};
</script>

<style scoped>
@import url("../../styles/Main/newcss/bulma.css");
@import url("../../styles/Main/newcss/app.css");
@import url("../../styles/Main/newcss/icons.min.css");
@import url("../../styles/Main/newcss/dashboard.css");

.successToast {
  background-color: green;
}
</style>
