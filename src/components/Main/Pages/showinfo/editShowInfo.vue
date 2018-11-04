<template>
  <div class="content column is-11">

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
      <ul>
        <li>
          <router-link to="/main">Home</router-link>
        </li>
        <li>Collaborate</li>
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
                          <div class="column is-8 is-offset-2">
                            <div class="flex-card light-bordered light-raised">
                              <div class="card-body">
                                <h2 class="title is-4 text-bold mb-20">Expo Info</h2>
                                <p v-if="feedback">{{this.feedback}}</p>
                                <form @submit.prevent="onSubmit">
                                  <div class="columns mt-50">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo Name</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Team Name" v-model="expo_name" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo Contact</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Contact" v-model="expo_contact" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-50">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo address</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Team Name" v-model="expo_address" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo business address</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Contact" v-model="business_location" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-50">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo date</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Team Name" v-model="expo_date" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo time</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Contact" v-model="expo_time" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-50">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo industry</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Team Name" v-model="expo_industry" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo organizer</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Contact" v-model="expo_organizer" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-50">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo contact</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Team Name" v-model="organizer_name" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo website</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Contact" v-model="expo_website" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-50">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo number</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Team Name" v-model="expo_organizer_number" />
                                      </div>

                                    </div>

                                  </div>
                                  <div class="columns mt-10">
                                    <div class="column">

                                      <div class="control">
                                        <label>Expo Description</label>
                                        <AppControlInput :inputClass="inputTypeTwo" rows="5" type="textarea" placeholder="Enter a expo description ..." v-model="expo_description" />

                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-30">

                                    <AppButton class="button btn-align no-lh raised primary-btn" type="submit">Create</AppButton>
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
                          <span>Team Invites</span>

                        </div>

                      </div>
                      <div class="list-body">
                        <div class="columns is-multiline">
                          <div class="column is-4">
                            <div class=" flex-card light-bordered light-raised">

                              <div class="card-content">
                                <div class="info-block mt-40">
                                  <h4>Team Name</h4>
                                  <p>Team description</p>
                                </div>
                                <div class="level mb-40 mt-40">
                                  <div class="level-item">
                                    <a class="button button-cta btn-outlined is-bold">Deny</a>
                                  </div>
                                  <div class="level-item">
                                    <a class="button button-cta btn-outlined is-bold primary-btn">Accept</a>
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

  //Mixins
  import { activeModalToggle } from '@/components/Main/Mixins/activeModalToggle.js';
  import { activeTabMixin } from '@/components/Main/Mixins/activeTabMixin.js';

  export default {
    name: 'DashCollaborateMain',
    mixins: [activeModalToggle, activeTabMixin],
    data() {
      return {
        activeTabChosen: 'newTeam',
        inputTypeOne: 'input is-medium mt-5',
        inputTypeTwo: 'textarea is-grow',
        teamName: null,
        teamTagline: null,
        teamDescription: null,
        feedback: null,
        randomID: uuid.v4(),
        organizer_name: null,
        businessname: null,
        business_location: null,
        expo_description: null,
        expo_date: null,
        expo_address: null,
        expo_time: null,
        expo_industry: null,
        expo_contact: null,
        expo_organizer: null,
        expo_website: null,
        expo_organizer_number: null,
        expo_organizer_email: null,
        expo_name: null
      };
    },
    components: {
      AppControlInput,
      AppButton
    },
    methods: {
      onSubmit() {
        if (this.teamName && this.teamTagline && this.teamDescription) {
          // xyz user info
          const currentUserid = this.currentUser.uid;

          let expo_id = uuid.v4();
          // ref to current user team collection
          const currentUserRef = fb.usersCollection.doc(currentUserid).collection('expos');

          //ref to new team doc
          var expocollection = fb.expoCollection.doc(expo_id);

          //create a new team
          const userteamRef = fb.expoCollection
            .doc(currentUserid)
            .collection('teams')
            .doc();

          const batch = fb.db.batch();

          //add to users collabs
          batch.set(userteamRef, {
            expo_id: expo_id,
            expo_permissions: {
              owner: true,
              read: true,
              write: true
            },
            expo_ref: expocollection
          });

          //create new team
          batch.set(expocollection, {
            expo_id: expo_id,
            expo_owner_id: currentUserid,
            expo_owner_name: this.organizer_name,
            expo_owner_businessname: this.business,
            expo_owner_businessname: this.business_location,
            expo_description: this.expo_description,
            expo_logo: 'https://place-hold.it/250x250',
            expo_date: this.expo_date,
            expo_address: this.expo_address,
            expo_time: this.expo_time,
            expo_industry: this.expo_industry,
            expo_contact: this.expo_contact,
            expo_organizer: this.expo_organizer,
            expo_organizer_website: this.expo_website,
            expo_organizer_number: this.expo_organizer_number,
            expo_name: this.expo_name,
            expo_message_id: uuid.v4(),
            expo_organizer_email: this.expo_organizer_email
          });

          //set
          return batch
            .commit()
            .then(() => {
              this.$router.push({
                path: `/teamview/${expo_id}`
              });
            })
            .catch(err => {
              this.feedback = err.message;
            });
        } else {
          return (this.feedback = 'All fields must be filled in');
        }
      }
    },
    computed: {
      ...mapState(['currentUser'])
    }
  };
</script>

<style>
</style>