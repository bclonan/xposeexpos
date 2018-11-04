<template>
<span>
    <Pricing-Hero />
    <Pricing-Section />
    <Pricing-Faq />
    <Footer />
</span>    
</template>

<script>
    import PricingHero from "../Sections/PricingHero.vue";
    import PricingSection from "../Sections/PricingSection.vue";
    import PricingFaq from "../Sections/PricingFaq.vue";
    
    import Footer from "../UI/Footer.vue";

    export default {
        name: 'Pricing',
        data () {
            return {
            }
        },
        components: {
            PricingHero,
            PricingSection,
            PricingFaq,
            Footer
        }
    }
</script>

<style>
    
</style>