<template>
<!-- Hero and Navbar -->
<div class="hero is-default is-bold is-fullheight">
    
    <!-- Navbar partial -->
    <The-Navbar />

    <!-- Hero content -->
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6">
                    <figure class="">
                        <img src="../../../styles/Welcome/images/illustrations/drawings/landing5-2.svg" alt="">
                    </figure>
                </div>
                <div class="column is-5 is-offset-1 is-hero-title">
                    <h1 class="title is-1 is-bigger">
                        Collaborate.
                    </h1>
                    <h2 class="subtitle is-4">
                        Work with people differently.
                    </h2>
                    <p class="">
                        <router-link to="login" class="button button-cta is-bold btn-align secondary-btn raised">
                            Get Started
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Client logos -->
    <div class="hero-foot pt-30 pb-30">
        <div class="container">
            <div class="tabs partner-tabs is-centered">
                <ul>
                    <li><a><img src="../../../styles/Welcome/images/logos/custom/covenant.svg" alt="xxxxx"></a></li>
                    <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/infinite.svg" alt=""></a></li>
                    <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/phasekit.svg" alt=""></a></li>
                    <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/grubspot.svg" alt=""></a></li>
                    <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/gutwork.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- /Hero and Navbar -->

</template>

<script>
    import TheNavbar from './TheNavbar.vue';
    export default {
        name: 'Hero',
        data () {
            return {
            }
        },
        components: {
            TheNavbar
        }
    }
</script>

<style>
    
</style>