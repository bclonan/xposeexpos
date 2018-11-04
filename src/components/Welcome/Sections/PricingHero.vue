<template>
<!-- Hero and Navbar -->
<div class="hero is-relative is-default is-bold is-medium is-feature-wave is-pricing">
    
    <!-- Navbar partial -->
    <The-Navbar/>
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">

                <div class="column is-6 is-offset-3 is-hero-title has-text-centered">
                    <h1 class="title is-1 is-medium">
                        Pricing.
                    </h1>
                    <h2 class="subtitle is-4">
                        Pick up your Plan.
                    </h2>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Hero and Navbar -->    
</template>

<script>
    import TheNavbar from '../UI/TheNavbar.vue';
    export default {
        name: 'PricingHero',
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