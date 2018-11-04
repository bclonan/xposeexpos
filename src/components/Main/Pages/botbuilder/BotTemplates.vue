<template>
    <section class=" column is-12 hero  is-fullheight is-fullwidth">
        <div class="columns">
            <div class="content column is-4" style="background-color:white;">

                <!-- Breadcrumbs -->
                <nav class="breadcrumbs">
                    <ul style="color:white;">
                        <li>
                            <router-link to="/main">Home</router-link>
                        </li>
                        <li>Bot Templates</li>
                    </ul>
                </nav>
                <!-- /Breadcrumbs -->

                <!-- Dashboard Wrapper -->
                <div class="dashboard-wrapper">

                    <div class="columns">
                        <div class="column">
                            <!-- Main content -->
                            <div class="section-wrapper">
                                <!-- Dashboard content -->
                                <div class="column is-12">
                                    <div class="columns">
                                        <div class="column">
                                            <a class="button  btn-outlined">Xyz Templates</a>
                                        </div>
                                        <div class="is-divider-vertical" data-content="OR"></div>
                                        <div class="column">
                                            <a class="button  secondary-btn btn-outlined">Your Templates</a>
                                        </div>
                                    </div>


                                    <div class="column is-12">
                                        <div class="field">
                                            <div class="control">
                                                <!-- Large -->
                                                <input class="input is-rounded is-large" type="text" placeholder="Search for a bot">
                                                <!-- /Large -->
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="columns is-vcentered">
                                        <div class="column">
                                            Filter
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-d" type="checkbox" name="switch-o-d" class="switch is-outlined" checked="">
                                                <label for="switchNormal-o-d">Popular</label>
                                            </div>
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-p" type="checkbox" name="switch-o-p" class="switch is-outlined is-primary" checked="">
                                                <label for="switchNormal-o-p">B2B</label>
                                            </div>
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-s" type="checkbox" name="switch-o-s" class="switch is-outlined is-secondary" checked="">
                                                <label for="switchNormal-o-s">Sales</label>
                                            </div>
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-a" type="checkbox" name="switch-o-a" class="switch is-outlined is-accent" checked="">
                                                <label for="switchNormal-o-a">Outreach</label>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-d1" type="checkbox" name="switch-o-d1" class="switch is-outlined is-info" checked="">
                                                <label for="switchNormal-o-d1">Customizable</label>
                                            </div>
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-p1" type="checkbox" name="switch-o-p1" class="switch is-outlined is-success" checked="">
                                                <label for="switchNormal-o-p1">Social</label>
                                            </div>
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-s1" type="checkbox" name="switch-o-s1" class="switch is-outlined is-warning" checked="">
                                                <label for="switchNormal-o-s1">Facebook</label>
                                            </div>
                                            <div class="field mt-40">
                                                <input id="switchNormal-o-a1" type="checkbox" name="switch-o-a1" class="switch is-outlined is-danger" checked="">
                                                <label for="switchNormal-o-a1">Trigger Based</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content column is-8" style="background-color:#209cee;">

                <!-- Dashboard Wrapper -->
                <div class="dashboard-wrapper">

                    <div class="columns">
                        <div class="column">
                            <!-- Main content -->
                            <div  class="section-wrapper">
                                <!-- Dashboard content -->

                                <div class="columns dashboard-columns is-multiline">

                                    <div class="column is-4">
                                        <div class="flex-card light-bordered  light-raised">
                                            <div class="card-body">
                                                <div class="content">
                                                    <h2 class="no-margin title-bold">Bot Name</h2>
                                                    <p class="pt-10">Lorem ipsum dolor sit amet, has vero libris melius ea, omnis velit comprehensam
                                                        duo an, meis ornatus eam ad. Ius ut labores scaevola.</p>
                                                </div>

                                            </div>

                                            <div class="level">
                                                <div class="level-left">
                                                    <div class="level-item">
                                                        <a class="button button-cta btn-outlined ml-10 mb-10 mr-10">Test</a>

                                                    </div>
                                                </div>
                                                <div class="level-right">
                                                    <div class="level-item">
                                                        <a class="button button-cta btn-outlined mr-10 mb-10">Create</a>
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
            </div>
        </div>

    </section>
</template>

<script>
export default {
  name: "BotTemplates"
};
</script>

<style scoped>
</style>