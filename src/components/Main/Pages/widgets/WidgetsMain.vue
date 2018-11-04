<template>
    <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/main">Home</router-link>
                </li>
                <li>Widgets</li>
            </ul>
        </nav>
        <!-- /Breadcrumbs -->

        <!-- Dashboard Wrapper -->
        <div class="dashboard-wrapper">

            <div class="columns">
                <div class="column">
                    <!-- Main content -->
                    <div class="section-wrapper">
                        <div class="projects-list-wrapper">
                            <div class="list-header">
                                <div class="list-title">
                                    <span>Lead widgets</span>

                                </div>

                            </div>
                            <div class="list-body">
                                <!-- Dashboard content -->
                                <div class="columns dashboard-columns is-multiline">
                                    <div class="column is-3 m-20 mt-10 mb-10">
                                        <div class="feature-card card-md light-bordered hover-inset has-text-centered">
                                            <div class="card-icon">
                                                <img src="@/styles/Main/images/illustrations/icons/wallet.svg" alt="">
                                            </div>
                                            <div class="card-title">
                                                <h4>Slide up</h4>
                                            </div>
                                            <div class="card-feature-description">
                                                <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His
                                                    caelus
                                                    elet cu harum inermis iudicabit.</span>
                                            </div>
                                            <a href="#" class="button btn-align btn-more is-link color-primary">
                                                View Demo <i class="sl sl-icon-arrow-right"></i>
                                            </a>
                                            <a href="#" class="button btn-align btn-more is-link color-primary">
                                                Create <i class="sl sl-icon-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DashWidgetsMain"
};
</script>

<style>
</style>