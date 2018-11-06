<template>
  <span>
    <div class="hero is-small is-theme-secondary" style="background-color:#f44242;">

      <!-- Navbar partial -->
      <NavBar :textcolor="textcolor" />

      <!-- Hero content -->
      <div class="hero-body ">
        <div class="container ">
          <div class="columns is-centered  pb-10">

            <div class="column is-6 is-offset-1 is-hero-title">
              <h1 class="title is-1 mt-60"> {{expoSelected.expo_name}}</h1>

            </div>
          </div>
          <div class="columns is-12 is-centered">

            <div class="column is-4 is-offset-1 is-hero-title">
              <h3>{{expoSelected.expo_start_date}} {{expoSelected.expo_end_date}}</h3>
            </div>
            <div class="column is-4 is-offset-1 is-hero-title">
              <h3> {{expoSelected.expo_description}}</h3>
            </div>

          </div>
        </div>

      </div>
    </div>

    <section class="section mb-50">
      <div class="container">
        <div class="projects-list-wrapper">

          <div class="list-body">
            <div class="columns is-multiline">
              <div class="column is-3">

                <div class="flex-card light-bordered light-raised">
                  <div class="card-body">
                    <h2 class="title is-4 text-bold mb-20">Categories</h2>
                    <input class="input rounded is-medium" type="text" placeholder="Category Name" v-model="searchCategories">

                    <hr/>
                    <h4 class="title is-4 text-bold mb-20" v-for="item in filteredCategories" :key="item.category_id">{{item.category_name}}</h4>
                  </div>
                </div>
              </div>
              <div class="column is-4" v-if="!vendor_page_id">
                <div class="flex-card light-bordered light-raised">
                  <div class="card-body">

                    <hr/>
                  </div>
                </div>
              </div>
              <!--vendorselected-->
              <div class="column is-9" v-else>
                <div class="flex-card light-bordered light-raised">
                  <div class="card-body">

                    <hr/>
                  </div>
                </div>
              </div>
              <!--/vendorselected-->
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

  import { getExpoVendors } from '@/components/Welcome/mixins/getExpoVendors.js';
  import { getExpoCategories } from '@/components/Welcome/mixins/getExpoCategories.js';
  export default {
    name: 'ExpoCategory',
    mixins: [getExpoVendors, getExpoCategories],
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
        // this.$store.commit('chooseExpo/selectExpo', i);
        //   this.$router.push({
        //    path: `Categories/${i.expo_id}`
        //  });
        return;
      }
    }
  };
</script>
