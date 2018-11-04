<template>
  <span>
    <div class="hero is-small is-theme-secondary" style="background-color:#0C4767;">

      <!-- Navbar partial -->
      <NavBar :textcolor="textcolor" />

      <!-- Hero content -->
      <div class="hero-body ">
        <div class="container ">
          <div class="columns is-vcentered">

            <div class="column is-6 is-hero-title">

              <h2 class="subtitle is-4 pt-10 pb-10" style="color:white;">
                Expo Name
              </h2>
              <p class="">

                <input class="input rounded is-medium" type="text" placeholder="Find your Expo...." v-model="search">

              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
    <section class="section is-medium section-feature-grey">
      <div class="container">

        <div class="content-wrapper">
          <div class="dropdown">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                <span>Click me</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Overview
                </a>
                <a href="#" class="dropdown-item">
                  Modifiers
                </a>
                <a href="#" class="dropdown-item">
                  Grid
                </a>
                <a href="#" class="dropdown-item">
                  Form
                </a>
                <a href="#" class="dropdown-item">
                  Elements
                </a>
                <a href="#" class="dropdown-item">
                  Components
                </a>
                <a href="#" class="dropdown-item">
                  Layout
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  More
                </a>
              </div>
            </div>
          </div>

          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                <span>Hover me</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <p>You can insert
                    <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
              </div>
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

  import { getAllExpos } from '@/components/Welcome/mixins/getAllExpos.js';
  export default {
    name: 'searchpage',
    mixins: [getAllExpos],
    data() {
      return {
        textcolor: 'color:white;',
        search: '',

        exposResults: []
      };
    },
    components: {
      NavBar,
      Footer
    },
    computed: {}
  };
</script>

<style>
</style>