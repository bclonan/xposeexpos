<template>
    <section class=" column is-12 hero  is-fullheight is-fullwidth">
        <div class="columns">
            <div class="content column is-4" style="background-color: white;">
                <div class="column is-12">
                    <div class="column is-12">
                        <div class="field">
                            <div class="control"><input type="text" placeholder="Search for an integration" class="input is-rounded is-large"></div>
                        </div>
                    </div>
                    <hr>
                    <div class="columns is-vcentered">
                        <div class="column">
                            Filter
                            <div class="field mt-40"><input id="switchNormal-o-d" type="checkbox" name="switch-o-d"
                                    checked="checked" class="switch is-outlined"><label for="switchNormal-o-d">Popular</label></div>
                            <div class="field mt-40"><input id="switchNormal-o-p" type="checkbox" name="switch-o-p"
                                    checked="checked" class="switch is-outlined is-primary"><label for="switchNormal-o-p">Email</label></div>
                            <div class="field mt-40"><input id="switchNormal-o-s" type="checkbox" name="switch-o-s"
                                    checked="checked" class="switch is-outlined is-secondary"><label for="switchNormal-o-s">CRM</label></div>
                            <div class="field mt-40"><input id="switchNormal-o-a" type="checkbox" name="switch-o-a"
                                    checked="checked" class="switch is-outlined is-accent"><label for="switchNormal-o-a">Automation</label></div>
                        </div>
                        <div class="column">
                            <div class="field mt-40"><input id="switchNormal-o-d1" type="checkbox" name="switch-o-d1"
                                    checked="checked" class="switch is-outlined is-info"><label for="switchNormal-o-d1">Design</label></div>
                            <div class="field mt-40"><input id="switchNormal-o-p1" type="checkbox" name="switch-o-p1"
                                    checked="checked" class="switch is-outlined is-success"><label for="switchNormal-o-p1">File
                                    Storage</label></div>
                            <div class="field mt-40"><input id="switchNormal-o-s1" type="checkbox" name="switch-o-s1"
                                    checked="checked" class="switch is-outlined is-warning"><label for="switchNormal-o-s1">Social</label></div>
                            <div class="field mt-40"><input id="switchNormal-o-a1" type="checkbox" name="switch-o-a1"
                                    checked="checked" class="switch is-outlined is-danger"><label for="switchNormal-o-a1">Payment</label></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content column is-8 is-multiline" style="background-color:#209cee;">

                <!-- Dashboard Wrapper -->
                <div class="dashboard-wrapper">

                    <div class="columns">
                                              <div class="column is-4">
                                        <div class="flex-card light-bordered  light-raised">
                                            <div class="card-body">
                                                <div class="content">
                                                    <h2 class="no-margin title-bold">Integration Name</h2>
                                                    <p class="pt-10">Lorem ipsum dolor sit amet, has vero libris melius
                                                        ea, omnis velit comprehensam
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

    </section>
</template>

<script>
export default {
  name: "DashIntegrationsMain"
};
</script>

<style>
</style>