<template>
 <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li><router-link to="/main">Home</router-link></li>
                <li>Integration Manager</li>
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
                                                <div class="lib-name">Integration Name</div>
                                                <div class="subname">Integration purpose</div>
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
  name: "IntegrationsManage"
};
</script>


<style>
</style>