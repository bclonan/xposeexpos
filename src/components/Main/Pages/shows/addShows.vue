<template>
  <div class="content column is-11">

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
      <ul>
        <li>
          <router-link to="/main">Home</router-link>
        </li>
        <li>Shows</li>
      </ul>
    </nav>
    <!-- /Breadcrumbs -->

    <!-- Dashboard Wrapper -->
    <div class="dashboard-wrapper">

      <div class="columns">
        <div class="column">
          <!-- Main content -->
          <div class="section-wrapper">
            <!-- Dashboard content -->
            <div class="columns dashboard-columns">

              <div class="column"></div>

              <div class="column is-11">

                <div class="navigation-tabs layout-tabs animated-tabs mt-20 mb-20">
                  <div class="tabs is-toggle is-fullwidth">
                    <ul>
                      <li class="tab-link" @click="setTheActiveTab('newTeam')" :class="[ isTabActiveNow === 'newTeam' ? 'is-active' : '']">
                        <a>Add Expo</a>
                      </li>
                      <li class="tab-link" @click="setTheActiveTab('manageInvites')" :class="[ isTabActiveNow === 'manageInvites' ? 'is-active' : '']">
                        <a>Manage Expos</a>
                      </li>

                    </ul>
                  </div>
                  <div class="navtab-content" :class="[ isTabActiveNow === 'newTeam' ? 'is-active' : '']">

                    <!-- Projects Group -->
                    <div class="projects-list-wrapper">
                      <div class="list-header">
                        <div class="list-title">
                          <span>New Expo</span>

                        </div>

                      </div>
                      <div class="list-body">
                        <div class="columns is-multiline">
                          <div class="column is-10 is-offset-1">
                            <div class="flex-card light-bordered light-raised">
                              <div class="card-body">
                                <h2 class="title is-4 text-bold mb-20">Apply for verifications</h2>
                                <p v-if="feedback">{{this.feedback}}</p>
                                <form @submit.prevent="onSubmit">
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo</label>
                                        <expo-select-list :expoChoices="expoChoices" @selected="updateChoice" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo Auto Verify Code (optional)</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="4401240140-1400124-0124" v-model="autoverifycode" />
                                      </div>

                                    </div>

                                  </div>

                                  <h2 class="title is-4 text-bold mb-20">Your Information</h2>

                                  <div class="columns mt-30">

                                    <div class="column">
                                      <div class="control">
                                        <label>Business Name</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Expo Event Company .inc" v-model="businessname" />
                                      </div>

                                    </div>

                                  </div>
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Your Name</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Sally Smith" v-model="contact_name" />
                                      </div>

                                    </div>

                                  </div>

                                  <div class="mt-30">

                                    <AppButton class="button btn-align no-lh raised primary-btn" type="submit">Send</AppButton>
                                    <button class="button is-link no-lh">Cancel</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="navtab-content" :class="[ isTabActiveNow === 'manageInvites' ? 'is-active' : '']">

                    <!-- Projects Group -->
                    <div class="projects-list-wrapper">
                      <div class="list-header">
                        <div class="list-title">
                          <span>Your Expos</span>

                        </div>

                      </div>
                      <div class="list-body">
                        <div class="columns is-multiline">
                          <div class="column is-4" v-for="item in vendorExpos" :key="item.id">
                            <div class=" flex-card light-bordered light-raised">

                              <div class="card-content">
                                <div class="info-block mt-40">
                                  <h4>{{item.expo_name}}</h4>
                                  <p>{{item.expo_date_start}}</p>
                                </div>
                                <div class="level mb-40 mt-40">
                                  <div class="level-item">
                                    <a class="button button-cta btn-outlined is-bold" @click.prevent="goto('vendorManageShows' , item.expo_page_id)">Manage</a>
                                  </div>

                                </div>
                              </div>

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <div class="column"></div>

            </div>
            <!-- /Dashboard content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //Inputs
  import AppControlInput from '@/components/UI/Forms/AppControlInput.vue';
  import AppButton from '@/components/UI/Forms/AppButton.vue';
  //Additional
  import { mapState } from 'vuex';
  import { uuid } from 'vue-uuid';
  // import fbase db
  const fb = require('@/services/firebase/init.js');
  //Components
  //import expoAutoComplete from '@/components/Main/Pages/shows/Includes/expoAutocomplete.vue';
  import expoSelectList from '@/components/Main/Pages/shows/Includes/expoSelectList.vue';
  //Mixins
  import { activeModalToggle } from '@/components/Main/Mixins/activeModalToggle.js';
  import { activeTabMixin } from '@/components/Main/Mixins/activeTabMixin.js';
  import { getExhibitorExpos } from '@/components/Main/Mixins/getExhibitorExpos.js';

  import { expoSelectListMixin } from '@/components/Main/Mixins/expoSelectMixin.js';
  import { addNewExpoVendor } from '@/components/Main/Mixins/addNewExpoVendor.js';

  export default {
    name: 'DashCollaborateMain',
    mixins: [activeModalToggle, activeTabMixin, getExhibitorExpos, expoSelectListMixin, addNewExpoVendor],
    data() {
      return {
        activeTabChosen: 'newTeam',
        inputTypeOne: 'input is-medium mt-5',
        inputTypeTwo: 'textarea is-grow'
      };
    },
    components: {
      AppControlInput,
      AppButton,
      expoSelectList
    },
    methods: {
      goto(l, i) {
        console.log(l + i);
        this.$router.push({
          path: `${l}/${i}`
        });
        return;
      }
    },
    computed: {}
  };
</script>

<style>
</style>
