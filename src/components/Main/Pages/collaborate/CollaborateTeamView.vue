<template>
 <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li><router-link to="/main">Home</router-link></li>
                <li>Your Teams</li>
            </ul>
        </nav>
        <!-- /Breadcrumbs -->

        <!-- Dashboard Wrapper -->
        <div class="dashboard-wrapper">

            <div class="columns">           
                <div class="column">
                    <!-- Main content -->
                    <div  class="section-wrapper">
                        <!-- Dashboard content -->
                        <div class="columns dashboard-columns">
                            <div class="column is-4">
                                        <div class="logo-card flex-card light-bordered light-raised">
                                            
                                            <div class="logo-card-content">
                                                <div class="lib-name">Team Name</div>
                                                <div class="subname">Team Purpose</div>
                                                 <a class="button button-cta is-medium btn-outlined secondary-btn margin-10" @click.stop="goToTeam('teamid')">Visit</a>
                                            <a class="button button-cta is-medium btn-outlined secondary-btn margin-10">Leave</a>
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
  name: "CollabTeamView",
  methods: {
    goToTeam(teamID) {
      const teamid = teamID;
      this.$router.push({ path: `/teamview/${teamid}` });
    }
  }
};
</script>


<style>
</style>