<template>
  <span>
    <div class="hero is-small is-theme-secondary" style="background-color:lightgrey;">

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

    <section class="section mb-50 ">
      <div class="container">
        <div class="projects-list-wrapper">

          <div class="list-body">
            <div class="columns is-multiline">

              <div class="column is-3">

                <div class="flex-card light-bordered light-raised padding-10">

                  <h3 class="card-heading">Categories</h3>
                  <input class="input rounded is-medium" type="text" placeholder="Category Name" v-model="searchCategories">
                  <ul class="user-list">
                    <li v-for="item in filteredCategories" :key="item.category_id">

                      <div class="user-list-info">
                        <div class="name">{{item.category_name}}</div>
                        <div class="position">{{item.category_description}}</div>
                      </div>
                      <div class="user-list-status is-online"></div>
                    </li>

                  </ul>
                </div>

                <!--vendorcontrolls-->

                <!--/vendorcontrolss-->

              </div>

              <div class="column is-4">
                <div class="flex-card light-bordered light-raised">
                  <div class="card-body">

                    <hr/>
                  </div>
                </div>
              </div>
              <!--vendorselected-->

              <div id="backtotop" class="visible">
                <a href="#"></a>
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
        selected_expo_id: null,
        vendor_page_style: 'imgheader',
        vendor_page_info: [{}]
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