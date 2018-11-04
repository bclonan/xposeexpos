<template>
<!-- App showcase Section -->
<div class="section is-medium section-feature-grey has-background-image is-contain" data-background="../../../styles/Welcome/images/bg/shapes/circles-and-shapes.png">
    <div class="container">
        <!-- Title -->
        <div class="section-title-wrapper has-text-centered">
            <!-- Divider -->
            <div class="special-divider">
                <span></span>
                <span></span>
            </div>
            <h2 class="title is-2">Awesome Features.</h2>
            <h4 class="subtitle is-4">Discover our App.</h4>
        </div>
        
        <!-- Content -->
        <div class="content-wrapper">
            <div class="columns is-vcentered">
                <!-- App mockups -->
                <div class="column is-7">
                    <div class="showcase-wrapper">
                        <div id="mockup-1" class="showcase-wrap is-active">
                            <img class="app-showcase" src="../../../styles/Welcome/images/illustrations/UI/project-app.png" alt="">
                        </div>
                        <div id="mockup-2" class="showcase-wrap">
                            <img class="app-showcase" src="../../../styles/Welcome/images/illustrations/UI/project-app.png" alt="">
                        </div>
                        <div id="mockup-3" class="showcase-wrap">
                            <img class="app-showcase" src="../../../styles/Welcome/images/illustrations/UI/project-app.png" alt="">
                        </div>
                    </div>
                </div>
                <!-- Mockups content -->
                <div class="column is-5">
                    <!-- Feature -->
                    <div id="feature-1" class="showcase-text-wrapper animated preFadeInUp fadeInUp">
                        <h3 class="title is-3">Project Management</h3>
                        <p>Project managment is really awesome because lorem ipsum sit dolor amet et cupidis et sil cout marat. Lorem ipsum sit dolor amet et cupidis et sil cout marat.</p>
                        <a href="#" class="button button-cta is-bold btn-align secondary-btn raised mt-20 mb-20">
                            Learn more
                        </a>
                    </div>
                    <!-- Feature -->
                    <div id="feature-2" class="showcase-text-wrapper animated preFadeInUp fadeInUp is-hidden">
                        <h3 class="title is-3">Accounting</h3>
                        <p>Accounting is really awesome because lorem ipsum sit dolor amet et cupidis et sil cout marat. Lorem ipsum sit dolor amet et cupidis et sil cout marat.</p>
                        <a href="#" class="button button-cta is-bold btn-align secondary-btn raised mt-20 mb-20">
                            Learn more
                        </a>
                    </div>
                    <!-- Feature -->
                    <div id="feature-3" class="showcase-text-wrapper animated preFadeInUp fadeInUp is-hidden">
                        <h3 class="title is-3">Document Management</h3>
                        <p>Document managment is really awesome because lorem ipsum sit dolor amet et cupidis et sil cout marat. Lorem ipsum sit dolor amet et cupidis et sil cout marat.</p>
                        <a href="landing-v4-login.html" class="button button-cta is-bold btn-align primary-btn raised mt-20 mb-20">
                            Free Trial
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Controls -->
            <div class="slide-control">
                <div class="slide-dot is-active" data-feature="mockup-1" data-feature-text="feature-1">
                    <img src="../../../styles/Welcome/images/illustrations/icons/landing-v5/dot-1.svg" alt="">
                </div>
                <div class="slide-dot" data-feature="mockup-2" data-feature-text="feature-2">
                    <img src="../../../styles/Welcome/images/illustrations/icons/landing-v5/dot-2.svg" alt="">
                </div>
                <div class="slide-dot" data-feature="mockup-3" data-feature-text="feature-3">
                    <img src="../../../styles/Welcome/images/illustrations/icons/landing-v5/dot-3.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /App showcase Section -->
    
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style>
    
</style>