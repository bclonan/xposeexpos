<template>
  <span>
    <div class="hero is-medium is-theme-primary" style="background-color:#2dbe60">

      <!-- Navbar partial -->
      <NavBar />

      <!-- Hero content -->
      <div class="hero-body ">
        <div class="container has-text-centered">
          <div class="container has-text-centered">
            <div class="columns">
              <div class="column is-8 is-offset-2 has-text-centered">
                <h1 class="title big-title text-bold is-2" style="color:#ffffff">
                  Beyond the Booth.
                </h1>
                <div class="subtitle light-subtitle" style="color:#ffffff">
                  get the most out of your expo experience.
                </div>
                <!-- CTA button -->
                <div class="has-text-centered">
                  <router-link to="/Browse" class="button button-cta primary-btn rounded raised" style="background:#f13a59;">Browse Expos</router-link>
                </div>
                <!-- Popup video link -->

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="section  is-medium" style="background:white;">
      <div class="container">
        <div id="start" class="columns">
          <!-- Benefit box -->
          <div class="column is-4">
            <div class="flex-card is-feature padding-40" style="background:#f4f2f2;">
              <!-- Icon -->
              <div class="icon-container is-first is-icon-reveal">
                <img src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt="">
              </div>
              <!-- Content -->
              <div class="content-container has-text-centered">
                <h3>Save Time</h3>
                <p>Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius.</p>
              </div>
            </div>
          </div>
          <!-- Benefit box -->
          <div class="column is-4">
            <div class="flex-card is-feature padding-40" style="background:#f4f2f2;">
              <!-- Icon -->
              <div class="icon-container is-second is-icon-reveal">
                <img src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt="">
              </div>
              <!-- Content -->
              <div class="content-container has-text-centered">
                <h3>Improve skills</h3>
                <p>Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius.</p>
              </div>
            </div>
          </div>
          <!-- Benefit box -->
          <div class="column is-4">
            <div class="flex-card is-feature padding-40" style="background:#f4f2f2;">
              <!-- Icon -->
              <div class="icon-container is-third is-icon-reveal">
                <img src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt="">
              </div>
              <!-- Content -->
              <div class="content-container has-text-centered">
                <h3>Take Off</h3>
                <p>Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<section class="section is-medium section-feature-grey">
      <div class="container">
        <div class="section-title-wrapper">

          <h2 class="title section-title has-text-centered dark-text text-bold">
            Recent Expos

          </h2>
        </div>

        <div class="content-wrapper">
          <div class="grid-clients five-grid">
            <div class="columns is-vcentered">
              <div class="column"></div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column"></div>
            </div>
            <div class="columns is-vcentered is-separator">
              <div class="column"></div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="../../../styles/Welcome/images/logos/custom/phasekit-dark.svg" alt=""></a>
              </div>
              <div class="column"></div>
            </div>
            <div class="columns is-vcentered is-separator">
              <div class="column"></div>
              <div class="column">
                <a><img class="client" src="assets/images/logos/custom/powerball.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="assets/images/logos/custom/evently.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="assets/images/logos/custom/proactive.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="assets/images/logos/custom/transfuseio.svg" alt=""></a>
              </div>
              <div class="column">
                <a><img class="client" src="assets/images/logos/custom/livetalk.svg" alt=""></a>
              </div>
              <div class="column"></div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <Footer />
  </span>
</template>

<script>
  import NavBar from '@/components/Welcome/Includes/navbar/navbar.vue';

  import Footer from '@/components/Welcome/Includes/Footer.vue';
  export default {
    name: 'Home',
    data() {
      return {};
    },
    components: {
      NavBar,
      Footer
    }
  };
</script>

<style>
</style>