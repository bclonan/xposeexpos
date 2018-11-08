<template>
  <span>
    <div class="hero is-small is-theme-secondary" style="background-color:#9900ff;">

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

          </div>
        </div>

      </div>
    </div>

    <section class="section mb-50 ">
      <div class="container">
        <div class="projects-list-wrapper">

          <div class="list-body">
            <div class="columns is-multiline">

              <!--vendorselected-->
              <div class="column is-12">
                <div class="content-wrapper" v-if="sendMsgActive">
                  <div class="columns is-vcentered">
                    <div class="column  is-5 is-offset-3">
                      <!-- Signup form -->
                      <div class="flex-card is-not-supported light-bordered">
                        <div class="quick-signup">
                          <form v-if="!successMessage">
                            <p v-if="feedback">{{feedback}}</p>
                            <h3 class="title is-4 has-text-centered">Send Message</h3>

                            <div class="control-material is-secondary">
                              <input class="material-input" type="text" required="" v-model="fromEmail">
                              <span class="material-highlight"></span>
                              <span class="bar"></span>
                              <label>Email *</label>
                            </div>
                            <div class="control-material is-secondary">
                              <input class="material-input" type="text" required="" v-model="fromname">
                              <span class="material-highlight"></span>
                              <span class="bar"></span>
                              <label>Name *</label>
                            </div>
                            <div class="control-material is-secondary">
                              <input class="material-input" type="text" required="" v-model="message_content">
                              <span class="material-highlight"></span>
                              <span class="bar"></span>
                              <label>Message *</label>
                            </div>
                            <div class="control-material is-secondary">
                              <input class="material-input" type="text" required="" v-model="message_topic">
                              <span class="material-highlight"></span>
                              <span class="bar"></span>
                              <label>Topic *</label>
                            </div>

                            <div class="submit-wrapper">
                              <a href="#" class="button button-cta is-bold is-fullwidth btn-align primary-btn raised no-lh" @click.prevent="sendAnonymousMessage">
                                Send Message
                              </a>
                            </div>
                          </form>
                          <div v-else>
                            <h3 class="title is-4 has-text-centered">Your Message has been sent</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Signup info card -->

                  </div>
                </div>

                <page-holder-template v-else>
                  <template slot="header">
                    <component :is="pageHeaderStyle" :pageHeaderData="pageHeaderData" />
                  </template>

                  <component slot="main" v-for="blocks in pageContentListHolder" :key="blocks.id" :is="blocks.tagName" :contentClass="blocks.class" :contentStyle="blocks.style" :content="blocks.content" :parentClass="blocks.parentClass" :parentStyle="blocks.parentStyle" />

                  <template slot="footer">
                    <component :is="pageFooterStyle" :pageFooterData="pageFooterData" />
                  </template>
                </page-holder-template>
              </div>
              <div id="backtotop" class="visible" @click="sendMessage">
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
  import { sendMessageMixin } from '@/components/Main/Mixins/sendMessageMixin.js';

  export default {
    name: 'exibitorPage',
    mixins: [getVendorPage, sendMessageMixin],
    data() {
      return {
        expo_id: null,
        textcolor: 'color:grey;',
        sendMsgActive: false
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
      },
      sendMessage() {
        let msgtarg = this.message_id;
        this.sendMsgActive = !this.sendMsgActive;
        console.log(msgtarg);
      }
    }
  };
</script>

<style scoped>
</style>