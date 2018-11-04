<template>
   <span>
   <Hero/>
   <Features/>
   <Home-Showcase/>
   <Home-Side-Features />
   <TeamSection/>
   <HomeClients/>
   <HomeTestimonial/>
   <HomeContact/>
   <Footer/>
     
    </span>
</template>

<script>
    import Hero from "../UI/Hero.vue";
    import Footer from "../UI/Footer.vue";
    import Features from "../Sections/HomeFeatures.vue";
    import HomeShowcase from "../Sections/HomeShowcase.vue";
    import HomeSideFeatures from "../Sections/HomeSideFeatures.vue";
    import HomeContact from "../Sections/HomeContact.vue";
    import HomeTestimonial from "../Sections/HomeTestimonial.vue";
    import TeamSection from "../Sections/TeamSection.vue";
    import HomeClients from "../Sections/HomeClients.vue";
    export default {
      name: "Home",
      data() {
        return {};
      },
      components: {
        Footer,
        Hero,
        Features,
        HomeShowcase,
        HomeSideFeatures,
        HomeTestimonial,
        HomeContact,
        TeamSection,
        HomeClients
      }
    };
</script>

<style>
</style>