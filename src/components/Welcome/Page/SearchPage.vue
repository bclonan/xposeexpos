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
          <div class="columns is-multiline">
            <!--event card-->
            <div class="column is-4" v-for="item in filteredList" :key="item.id">
              <div class="event-card">
                <div class="card-date">
                  <div class="date">
                    <span class="day">{{item.expo_date_start}}</span>
                    <span class="month">{{item.expo_date_start_month}}</span>
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
              </div>
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

  import { getAllExpos } from '@/components/Welcome/mixins/getAllExpos.js';
  export default {
    name: 'searchpage',
    mixins: [getAllExpos],
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
      dateFormating() {
        let newdate = this.exposResults.expo_single_day_format;
        return newdate;
      }
    },
    methods: {
      navigateTo(i) {
        this.$store.commit('chooseExpo/selectExpo', i);
        this.$router.push({
          path: `Categories/${i.expo_id}`
        });
        return;
      }
    }
  };
</script>

<style>
</style>