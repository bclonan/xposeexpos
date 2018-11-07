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
              <h1 class="title is-1 mt-60"> vendorname</h1>

            </div>
          </div>
          <div class="columns is-12 is-centered">

            <div class="column is-4 is-offset-1 is-hero-title">
              <div class="buttons">
                <span class="button is-success" @click.prevent="navigateTo">Go Back</span>

              </div>
            </div>
            <div class="column is-4 is-offset-1 is-hero-title">

              <div class="buttons">
                <span class="button is-success">Send Message</span>

              </div>
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
              <div class="column is-12">
                <page-holder-template>
                  <template slot="header">
                    <component :is="pageHeaderStyle" :pageHeaderData="pageHeaderData" />
                  </template>

                  <component slot="main" v-for="blocks in pageContentListHolder" :key="blocks.id" :is="blocks.tagName" :contentClass="blocks.class" :contentStyle="blocks.style" :content="blocks.content" :parentClass="blocks.parentClass" :parentStyle="blocks.parentStyle" />

                  <template slot="footer">
                    <component :is="pageFooterStyle" :pageFooterData="pageFooterData" />
                  </template>
                </page-holder-template>
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
  import { getVendorPage } from '@/components/Welcome/mixins/getVendorInfo.js';

  export default {
    name: 'exibitorPage',
    mixins: [getVendorPage],
    data() {
      return {
        expo_id: null,
        textcolor: 'color:grey;'
      };
    },
    components: {
      NavBar,
      Footer
    },
    computed: {},
    methods: {
      navigateTo() {
        const xID = this.$route.params.id;
        this.$router.push({
          path: `/Categories/${xID}`
        });
        // this.$store.commit('chooseExpo/selectExpo', i);
        //   this.$router.push({
        //    path: `/Categories/${xID}`
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

<style scoped>
</style>