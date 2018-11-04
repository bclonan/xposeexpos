<template>
<!-- Pricing Section -->
<div class="section section-secondary">
    <div class="container">
        <!-- Pricing wrapper -->
        <div class="switch-pricing-wrapper">
            <div class="pricing-container">
                <!-- Pricing Switcher -->
                <div class="pricing-switcher">
                    <p class="fieldset">
                        <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked>
                        <label for="monthly-1">Monthly</label>
                        <input type="radio" name="duration-1" value="yearly" id="yearly-1">
                        <label for="yearly-1">Yearly</label>
                        <span class="switch"></span>
                    </p>
                </div>

                <div class="columns tables-wrap">
                    <!-- Pricing table -->
                    <div class="column is-4">
                        <div class="flex-card">
                            <!-- Pricing image -->
                            <div class="pricing-image-container">
                                <img src="../../../styles/Welcome/images/illustrations/icons/pricing/scooter.svg" alt="">
                                <div class="plan-price is-monthly is-active">
                                    <span>15</span>
                                </div>
                                <div class="plan-price is-yearly">
                                    <span>180</span>
                                </div>
                            </div>
                            <!-- Pricing plan name -->
                            <div class="plan-name has-text-centered">
                                <h3>Starter</h3>
                            </div>
                            <!-- Pricing plan features -->
                            <ul class="plan-features">
                                <li>1 Agent</li>
                                <li>1 Project</li>
                                <li>1 Account</li>
                            </ul>
                            <!-- Pricing action -->
                            <div class="button-wrapper">
                                <a href="#" class="button secondary-btn is-fullwidth raised btn-align is-bold btn-upper">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <!-- Pricing table -->
                    <div class="column is-4">
                        <div class="flex-card">
                            <!-- Pricing image -->
                            <div class="pricing-image-container">
                                <img src="../../../styles/Welcome/images/illustrations/icons/pricing/motorcycle.svg" alt="">
                                <div class="plan-price is-monthly is-active">
                                    <span>35</span>
                                </div>
                                <div class="plan-price is-yearly">
                                    <span>400</span>
                                </div>
                            </div>
                            <!-- Pricing plan name -->
                            <div class="plan-name has-text-centered">
                                <h3>Business</h3>
                            </div>
                            <!-- Pricing plan features -->
                            <ul class="plan-features">
                                <li>5 Agents</li>
                                <li>20 Projects</li>
                                <li>3 Accounts</li>
                            </ul>
                            <!-- Pricing action -->
                            <div class="button-wrapper">
                                <a href="#" class="button secondary-btn is-fullwidth raised btn-align is-bold btn-upper">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <!-- Pricing table -->
                    <div class="column is-4">
                        <div class="flex-card">
                            <!-- Pricing image -->
                            <div class="pricing-image-container">
                                <img src="../../../styles/Welcome/images/illustrations/icons/pricing/zeppelin.svg" alt="">
                                <div class="plan-price is-monthly is-active">
                                    <span>55</span>
                                </div>
                                <div class="plan-price is-yearly">
                                    <span>600</span>
                                </div>
                            </div>
                            <!-- Pricing plan name -->
                            <div class="plan-name has-text-centered">
                                <h3>Enterprise</h3>
                            </div>
                            <!-- Pricing plan features -->
                            <ul class="plan-features">
                                <li>10 Agents</li>
                                <li>100 Projects</li>
                                <li>20 Accounts</li>
                            </ul>
                            <!-- Pricing action -->
                            <div class="button-wrapper">
                                <a href="#" class="button secondary-btn is-fullwidth raised btn-align is-bold btn-upper">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Clients -->
        <div class="hero-foot pt-10 pb-10">
            <div class="container">
                <div class="tabs partner-tabs is-centered">
                    <ul>
                        <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/covenant.svg" alt=""></a></li>
                        <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/infinite.svg" alt=""></a></li>
                        <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/kromo.svg" alt=""></a></li>
                        <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/grubspot.svg" alt=""></a></li>
                        <li><a><img class="partner-logo" src="../../../styles/Welcome/images/logos/custom/systek.svg" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Clients -->
    </div>
</div>
<!-- /Pricing Section -->

    
</template>

<script>

    export default {
        name: 'PriceSection',
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