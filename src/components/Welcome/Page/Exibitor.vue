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
              <div class="column is-12">
                <page-holder-template>
                  <template slot="header">
                    <component :is="pageHeaderStyle" :pageHeaderData="pageHeaderData" />
                  </template>
                  <template slot="main">
                    <p>A paragraph for the main content.</p>
                    <p>And another one.</p>

                  </template>

                  <template slot="footer">
                    <component :is="pageFooterStyle" :pageFooterData="pageFooterData" />
                  </template>
                </page-holder-template>
              </div>
              <!--vendorselected-->
              <div class="column is-12">
                <div class="flex-card featured-feed-post light-bordered light-raised">
                  <div class="image">
                    <img src="https://bulkitv2.cssninja.io/dashboard/assets/images/dashboard/feed-post-1.jpeg" alt="">

                  </div>
                  <div class="card-body is-responsive">
                    <h2 class="responsive-title has-text-centered mt-40">How the new prototyping tools impact the design process</h2>

                    <div class="post-body">
                      <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no.
                        <a href="#">Cu vim ludus equidem facilisis</a>, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>

                      <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no. Cu vim ludus equidem facilisis, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>

                      <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no. Cu vim ludus equidem facilisis, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>

                      <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no. Cu vim ludus equidem facilisis, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>
                    </div>
                    <div class="post-share">
                      <i class="fa fa-facebook-f"></i>
                      <i class="fa fa-twitter"></i>
                      <i class="fa fa-linkedin"></i>
                      <i class="fa fa-tumblr"></i>
                    </div>
                  </div>
                </div>

              </div>
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

  import pageHolderTemplate from '@/components/Main/Pages/showinfo/Includes/pageHolder.vue';
  //Headers
  import headerStyleOne from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleOne.vue';
  import headerStyleTwo from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleTwo.vue';
  import headerStyleThree from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleThree.vue';
  import headerStyleFour from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleFour.vue';

  //Content
  //Footers
  import footerStyleOne from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleOne.vue';
  import footerStyleTwo from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleTwo.vue';
  import footerStyleThree from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleThree.vue';
  export default {
    name: 'exibitorPage',
    mixins: [getVendorPage],
    data() {
      return {
        expo_id: null,
        textcolor: 'color:grey;',
        pageHeaderStyle: 'headerStyleOne',
        pageHeaderData: {
          headerImage: 'https://bulkitv2.cssninja.io/dashboard/assets/images/dashboard/feed-post-1.jpeg',
          headerText: 'headerText',
          headerStyle: {
            color: 'red',
            fontSize: '13px'
          },
          headerClassNames: ['title is-1 mt-60']
        },
        pageFooterStyle: 'footerStyleOne',
        pageFooterData: {
          pageFooterImage: 'https://bulkitv2.cssninja.io/dashboard/assets/images/dashboard/feed-post-1.jpeg',
          pageFooterText: 'headerText',
          pageFooterStyle: {
            color: 'red',
            fontSize: '13px'
          }
        }
      };
    },
    components: {
      NavBar,
      Footer,
      pageHolderTemplate,
      //buildingblocks
      headerStyleOne,
      headerStyleTwo,
      headerStyleThree,
      headerStyleFour,
      footerStyleOne,
      footerStyleTwo,
      footerStyleThree
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

<style scoped>
</style>