<template>
    <!-- Invite User Modal -->
    <div class="modal modal-md invite-user-modal modal-hero" v-if="activeModalOverlayToggled === 'inviteUserModal'" :class="[ activeModalOverlayToggled === 'inviteUserModal' ? 'is-active' : '']">
        <div class="modal-background scaleInCircle"></div>
        <div class="modal-content scaleIn">
            <div class="flex-card simple-shadow">
                <h2 class="dark-text">Invite Users</h2>
                <div class="card-body">
                    <div class="has-text-centered">
                        <div class="image">
                            <img src="assets/images/icons/invitation.svg">
                        </div>
                        <div class="help-text has-text-left">Send an invite link via email to add members to this team</div>

                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" type="text" placeholder="Recipient email address">
                                <span class="icon is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div class="add-more">
                            <i class="material-icons">add</i>
                            <span>Add another</span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="button is-modal">Invite Users</button>
                </div>
            </div>
        </div>
        <button class="modal-close" @click="resetActiveModalOverlay" :class="[ activeModalOverlayToggled === 'inviteUserModal' ? 'is-large' : 'is-hidden']" aria-label="close"></button>
    </div>
    <!-- /Invite User Modal -->
</template>

<script>
    import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";
    export default {
      name: "InviteUserModal",
      mixins: [activeModalToggle]
    };
</script>