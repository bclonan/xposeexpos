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
                {{expoSelected.expo_name}}
              </h2>
              <p class="">
                {{expoSelected.expo_description}}

              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
    <section class="section is-medium section-feature-grey">
      <div class="container">

        <div class="column is-6 is-hero-title">

          <h2 class="subtitle is-4 pt-10 pb-10" style="color:white;">
            Vendor Name
          </h2>
          <p class="">

            <input class="input rounded is-medium" type="text" placeholder="Find your Expo...." v-model="search">

          </p>
        </div>
        <div class="content-wrapper">
          <div class="columns is-multiline">
            <!--event card-->
            <div class="column is-4">
              <!--<div class="event-card" v-for="item in filteredList" :key="item.id">
                <div class="card-date">
                  <div class="date">
                    <span class="day">05</span>
                    <span class="month">Nov</span>
                  </div>
                </div>
                <div class="img-container">
                  <img :src="item.expo_logo" :alt="item.expo_name" />
                </div>
                <div class="card-text">
                  <div class="text text-container">
                    <div class="text text-header">
                      <h2 class="text text-title">{{item.expo_name}}</h2>
                      <p class="text text-subtitle">{{item.expo_industry}}</p>
                    </div>
                    <div class="text text-details">
                      <p class="text text-description">{{item.expo_description}}</p>
                      <a @click="navigateTo(item)" class="button btn-align btn-more is-link color-white mt-10">
                        View Attendees
                        <i class="sl sl-icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
            <!--eventcard-->
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

  import { getExpoVendors } from '@/components/Welcome/mixins/getExpoVendors.js';
  export default {
    name: 'ExpoCategory',
    mixins: [getExpoVendors],
    data() {
      return {
        textcolor: 'color:white;',
        search: '',

        exposResults: [],
        selected_expo_id: null
      };
    },
    components: {
      NavBar,
      Footer
    },
    computed: {
      expoSelected() {
        return this.$store.getters['chooseExpo/expoInfo'];
      }
    },
    methods: {
      navigateTo(i) {
        // this.$store.commit('chooseExpo/selectExpo', i);
        //   this.$router.push({
        //    path: `Categories/${i.expo_id}`
        //  });
        return;
      }
    }
  };
</script>