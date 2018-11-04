<template>
<!-- Profile notifications -->
<div id="profile-notifications">
    <div class="columns">
        <div class="column is-10 is-offset-1">
            <div class="flex-card is-top light-bordered raised animated preFadeInUp fadeInUp">
                <div class="title is-3 padding-20">Notifications <span class="b-badge is-accent">6 New</span></div>
                <div class="card-body">
                    <ol class="notifications-center">
                        <!-- Notification item -->
                        <li>
                            <div class="icon is-hidden-mobile">
                                <i class="im im-icon-Heart-2"></i>
                            </div>
                            <div class="description">
                                <div class="timestamp">30 minutes ago</div>
                                <b>5 users</b> liked your <b>publication</b> on the company's public blog
                            </div>
                            <div class="controls is-hidden-mobile">
                                <span data-toggle="tooltip" data-placement="top" data-title="Delete"><i class="sl sl-icon-trash"></i></span>
                            </div>
                        </li>
                        <li class="is-old">
                            <div class="icon is-hidden-mobile">
                                <img src="https://via.placeholder.com/250x250" alt="">
                            </div>
                            <div class="description">
                                <div class="timestamp">Monday, 07:57pm</div>
                                <b>Anthony Briggs</b> joined the <b>Analytics App</b> project.
                            </div>
                            <div class="controls is-hidden-mobile">
                                <span data-toggle="tooltip" data-placement="top" data-title="Delete"><i class="sl sl-icon-trash"></i></span>
                            </div>
                        </li>
                    </ol>
                    <!-- Load more -->
                    <div class="has-text-centered mt-40">
                        <button class="button btn-dash is-raised accent-btn rounded ripple no-lh">Load more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Profile notifications -->
</template>

<script>
    export default {};
</script>
