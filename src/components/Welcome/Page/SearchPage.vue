<template>
  <span>
    <div class="hero is-small is-theme-secondary">

      <!-- Navbar partial -->
      <NavBar />

      <!-- Hero content -->
      <div class="hero-body ">
        <div class="container ">
          <div class="columns is-vcentered">

            <div class="column is-6 is-hero-title">

              <h2 class="subtitle is-4 pt-10 pb-10">
                Expo Name
              </h2>
              <p class="">

                <input class="input rounded is-medium" type="text" placeholder="Find your Expo....">

              </p>
            </div>

            <div class="column is-6 is-hero-title">

              <h2 class="subtitle is-4 pt-10 pb-10">
                Exhibitor Name
              </h2>
              <p class="">

                <input class="input rounded is-medium" type="text" placeholder="Find your Expo....">

              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <section class="section is-medium section-feature-grey">
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
    </section>
    <Footer />
  </span>
</template>

<script>
  import NavBar from '@/components/Welcome/Includes/navbar/navbar.vue';

  import Footer from '@/components/Welcome/Includes/Footer.vue';
  export default {
    name: 'searchpage',
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