<template>
    <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>Dashboard</li>
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
                        <div class="columns dashboard-columns">
                            <!-- Tile -->
                            <div class="column is-3">
                                <div class="flex-card card-overflow light-bordered light-raised">
                                    <div class="icon-header">
                                        <i class="material-icons primary">account_balance_wallet</i>
                                    </div>
                                    <div class="content">
                                        <div class="card-title is-tile has-text-right">
                                            Sales
                                            <div class="card-stat primary has-text-right">284
                                                <span class="stat-type">this month</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more">
                                        <a class="primary" href="#">See all</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Tile -->
                            <div class="column is-3">
                                <div class="flex-card card-overflow light-bordered light-raised">
                                    <div class="icon-header">
                                        <i class="material-icons primary">account_balance</i>
                                    </div>
                                    <div class="content">
                                        <div class="card-title is-tile has-text-right">
                                            Account
                                            <div class="card-stat primary has-text-right">
                                                <span class="stat-type">$</span> 122 839,49</div>
                                        </div>
                                    </div>
                                    <div class="more">
                                        <a class="primary" href="#">Open</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Tile -->
                            <div class="column is-3">
                                <div class="flex-card card-overflow light-bordered light-raised">
                                    <div class="icon-header">
                                        <i class="material-icons secondary">work</i>
                                    </div>
                                    <div class="content">
                                        <div class="card-title is-tile has-text-right">
                                            Deals
                                            <div class="card-stat secondary has-text-right">14
                                                <span class="stat-type">pending</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more">
                                        <a class="secondary" href="#">See all</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Tile -->
                            <div class="column is-3">
                                <div class="flex-card card-overflow light-bordered light-raised">
                                    <div class="icon-header">
                                        <i class="material-icons secondary">business</i>
                                    </div>
                                    <div class="content">
                                        <div class="card-title is-tile has-text-right">
                                            Leads
                                            <div class="card-stat secondary has-text-right">53
                                                <span class="stat-type">new leads</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more">
                                        <a class="secondary" href="#">See all</a>
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
    import { fruitMixin } from '@/components/Main/Mixins/fruitMixin.js';

    export default {
      name: 'DashHome',
      mixins: [fruitMixin],
      data() {
        return {};
      }
    };
</script>

<style>
</style>