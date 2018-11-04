<template>
<!-- Profile team -->
<div id="profile-team">
    <!-- Team header -->
    <div class="columns">
        <div class="column is-10 is-offset-1">
            <div class="flex-card is-top light-bordered raised animated preFadeInUp fadeInUp">
                <div class="card-body">
                    <div class="columns is-vcentered">
                        <div class="column is-6">
                            <div class="team-logo">
                                <img src="https://via.placeholder.com/250x250" alt="">
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="team-info">
                                <div class="team-number">
                                    <span>15</span> Team members
                                </div>
                                <div class="team-avatars">
                                    <img src="https://via.placeholder.com/250x250" alt="">
                                    <span>+9</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Team header -->

    <!-- Team List -->
    <div class="columns is-vcentered is-multiline animated preFadeInUp fadeInUp">
        <!-- Team member -->
        <div class="column is-4">
            <div class="flex-card team-card light-bordered light-raised">
                <div class="card-heading padding-10">
                    <span class="tag is-success">Online</span>
                </div>
                <div class="card-body">
                    <div class="avatar">
                        <img src="https://via.placeholder.com/250x250" alt="">
                    </div>
                    <div class="user-id">
                        <div class="name">Anthony Briggs</div>
                        <div class="position">Sales Manager</div>
                        <div class="location"><i class="sl sl-icon-globe"></i> Stockholm</div>
                    </div>
                    <div class="user-description">
                        Anthony is a specialist of online sales and abandoned cart recovery process
                    </div>
                    <div class="card-action has-text-centered">
                        <button class="button btn-dash rounded accent-btn is-raised is-fullwidth ripple no-lh">Profile</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    <!-- /Team List -->
</div>
<!-- /Profile team -->
</template>

<script>
    export default {
      name: "ProfileTeam"
    };
</script>

<style scoped>
</style>