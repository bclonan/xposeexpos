<template>
  <span>
    <div class="hero is-small is-theme-secondary" style="background-color:#0066ff;">

      <!-- Navbar partial -->
      <NavBar :textcolor="textcolor" />

      <!-- Hero content -->
      <div class="hero-body ">
        <div class="container ">
          <div class="columns   pb-10">

            <div class="column is-6 is-offset-1 is-hero-title">
              <h1 class="title is-1 " style="color:white;"> {{expoSelected.expo_name}} :
                <span class="title is-1" style="color:white;">{{expoSelected.expo_address_state}}</span>
                <h2 class="title is-5" style="color:white;">{{expoSelected.expo_date_start}} {{expoSelected.expo_date_start_month}}</h2>
                <h2 class="title is-4" style="color:white;">{{expoSelected.expo_description}} </h2>
              </h1>
              <div class="buttons" @click.prevent="navigateTo(expoSelected.expo_page_id)">
                <span class="button is-success">Organizers Page</span>

              </div>
              <router-link to="/Browse">
                <span class="button is-success">Go Back</span>

              </router-link>
              <input class="input rounded is-medium" type="text" placeholder="Find an exhibitor" v-model="search">
            </div>
          </div>

        </div>

      </div>
    </div>

    <section class="section is-small section-feature-grey">
      <div class="container">

        <div class="content-wrapper">
          <div class="columns is-multiline">
            <!--event card-->
            <div class="column is-4" v-for="item in vendorResults" :key="item.id">
              <div class="event-card">

                <div class="img-container">
                  <img :src="item.expo_logo" :alt="item.expo_owner_businessname" />
                </div>
                <div class="card-text">
                  <div class="text text-container">
                    <div class="text text-header">
                      <h2 class="text text-title">{{item.expo_owner_businessname}}</h2>

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

  import { getVendorThumbs } from '@/components/Welcome/mixins/getVendorThumbs.js';
  //import { getExpoVendors } from '@/components/Welcome/mixins/getExpoVendors.js';
  import { getExpoCategories } from '@/components/Welcome/mixins/getExpoCategories.js';
  export default {
    name: 'ExpoCategory',
    mixins: [getVendorThumbs, getExpoCategories],
    data() {
      return {
        vendor_page_id: null,
        textcolor: 'color:grey;',
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
        const xID = this.$route.params.id;
        this.$router.push({
          path: `/Exhibitor/${xID}/${i.expo_page_id}`
        });

        return;
      },
      resetSelectedVendor() {
        this.selected_vendor_id = null;
        return;
      }
    }
  };
</script>

<style >
  #backtotop {
    position: fixed;
    right: 0;
    opacity: 0;
    visibility: hidden;
    bottom: 25px;
    margin: 0 25px 0 0;
    z-index: 9999;
    transition: 0.35s;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    transition: all 0.5s;
  }
  #backtotop.visible {
    opacity: 1;
    visibility: visible;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  #backtotop.visible a:hover {
    outline: none;
    opacity: 0.9;
    background: #7f00ff;
  }
  #backtotop a {
    outline: none;
    text-decoration: none;
    border: 0 none;
    display: block;
    width: 46px;
    height: 46px;
    background-color: #66676b;
    opacity: 1;
    transition: all 0.3s;
    border-radius: 50%;
    text-align: center;
    font-size: 26px;
  }
  body #backtotop a {
    outline: none;
    color: #fff;
  }
  #backtotop a:after {
    outline: none;
    content: '\f106';
    font-family: 'FontAwesome';
    position: relative;
    display: block;
    top: 50%;
    -webkit-transform: translateY(-55%);
    transform: translateY(-55%);
  }
  ::-webkit-input-placeholder {
    color: #cecece;
  }
  ::-moz-placeholder {
    color: #cecece;
  }
  :-ms-input-placeholder {
    color: #cecece;
  }
  :-moz-placeholder {
    color: #cecece;
  }
</style>