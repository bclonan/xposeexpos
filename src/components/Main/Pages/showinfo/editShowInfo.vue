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
          <div class="section-wrapper">s
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
                                <h2 class="title is-4 text-bold mb-20">Event Information</h2>
                                <p v-if="feedback">{{this.feedback}}</p>
                                <form @submit.prevent="onSubmit">
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Name of expo</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Expo" v-model="expo_name" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo start date</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="date" value="2018-02-28" min="2017-12-11" max="2180-2-23" v-model="expo_date_start" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo end date</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="date" value="2018-02-28" min="2017-12-11" max="2180-2-23" v-model="expo_date_end" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Address Line 1</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="55 street street" v-model="expo_address_address" />
                                      </div>

                                    </div>

                                  </div>
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>City</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Newark" v-model="expo_address_town" />
                                      </div>

                                    </div>

                                    <div class="column">
                                      <div class="control">
                                        <label>State</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="NJ" v-model="expo_address_state" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Country</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Ireland" v-model="expo_address_country" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Expo Promo website</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="supercoolexpo.com" v-model="expo_promo_website" />
                                      </div>

                                    </div>

                                  </div>
                                  <div class="columns mt-30">
                                    <div class="column">

                                      <div class="control">
                                        <label>Expo Description</label>
                                        <AppControlInput :inputClass="inputTypeTwo" rows="5" type="textarea" placeholder="The biggest tech expo this side of mississippi ..." v-model="expo_description" />

                                      </div>
                                    </div>
                                  </div>

                                  <h2 class="title is-4 text-bold mb-20">Organization Information</h2>
                                  <div class="columns mt-30">

                                    <div class="column">
                                      <div class="control">
                                        <label>Organizer business address</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="77 address way" v-model="business_location" />
                                      </div>

                                    </div>
                                  </div>

                                  <div class="columns mt-30">

                                    <div class="column">
                                      <div class="control">
                                        <label>Business Name</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Expo Event Company .inc" v-model="expo_owner_businessname" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Business Website</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="ExpoEventCompany.com" v-model="expo_organizer_website" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Point of contact name</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="Sally Smith" v-model="expo_contact_name" />
                                      </div>

                                    </div>

                                  </div>
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Point of contact number</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="7327777777" v-model="expo_organizer_number" />
                                      </div>

                                    </div>
                                    <div class="column">
                                      <div class="control">
                                        <label>Point of contact email</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="email" placeholder="youremail@business.com" v-model="expo_organizer_email" />
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
                          <span>Your Expos</span>

                        </div>

                      </div>
                      <div class="list-body">
                        <div class="columns is-multiline">
                          <div class="column is-4" v-for="item in vendorExpos" :key="item.id">
                            <div class=" flex-card light-bordered light-raised">

                              <div class="card-content">
                                <div class="info-block mt-40">
                                  <h4>{{item.vendor_expo_name}}</h4>
                                  <p>{{item.vendor_expo_date_start}}</p>
                                </div>
                                <div class="level mb-40 mt-40">
                                  <div class="level-item">
                                    <a class="button button-cta btn-outlined is-bold" @click.prevent="goto('manageshowInfo' , item.vendor_expo_id)">Manage</a>
                                  </div>
                                  <div class="level-item">
                                    <a class="button button-cta btn-outlined is-bold primary-btn" @click.prevent="goto('confirmVendor' , item.vendor_expo_id)">Vendors</a>
                                  </div>

                                  <div class="level-item">
                                    <a class="button button-cta btn-outlined is-bold primary-btn" @click.prevent="goto('messages' , item.vendor_expo_id)">Messages</a>
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
  import { getVendorExpos } from '@/components/Main/Mixins/getVendorExpos.js';

  export default {
    name: 'DashCollaborateMain',
    mixins: [activeModalToggle, activeTabMixin, getVendorExpos],
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
        expo_contact_name: null,
        expo_owner_businessname: null,
        business_location: null,
        expo_description: null,
        expo_date_start: null,
        expo_address_town: null,
        expo_address_zip: null,
        expo_address_country: null,
        expo_address_state: null,
        expo_address_address: null,
        expo_time: null,
        expo_contact: null,
        expo_organizer: null,
        expo_organizer_website: null,
        expo_organizer_number: null,
        expo_organizer_email: null,
        expo_name: null,
        expo_promo_website: null,
        expo_date_end: null
      };
    },
    components: {
      AppControlInput,
      AppButton
    },
    methods: {
      onSubmit() {
        if (this.expo_owner_businessname && this.expo_name) {
          // xyz user info
          const currentUserid = this.currentUser.uid;
          let expo_pg_id = uuid.v4();
          let expo_invite_key = uuid.v4();
          let expo_id = uuid.v4();
          // ref to current user team collection
          const currentUserRef = fb.usersCollection.doc(currentUserid).collection('expos');

          //ref to new team doc
          var expocollection = fb.expoCollection.doc(expo_id);
          //analytic ref
          var expoA = fb.expoAnalytics.doc(expo_id);

          //approval ref
          var expoApprovals = fb.expoApproval.doc(expo_id);

          //create a new team
          const userteamRef = fb.usersCollection
            .doc(currentUserid)
            .collection('expos')
            .doc(expo_id);
          //create expos page placeholder
          const expospageref = fb.expoCollection
            .doc(expo_id)
            .collection('expopages')
            .doc(expo_pg_id);

          const batch = fb.db.batch();

          //add to users collabs
          batch.set(userteamRef, {
            expo_id: expo_id,
            expo_name: this.expo_name,
            expo_date_start: this.expo_date_start,
            expo_permissions: {
              owner: true,
              read: true,
              write: true
            },
            expo_ref: expocollection,
            expo_analytic_ref: expoA,
            expo_approval_ref: expoApprovals
          });

          //create new team
          batch.set(expocollection, {
            expo_id: expo_id,
            expo_owner_id: currentUserid,
            expo_contact_name: this.expo_contact_name,
            expo_owner_businessname: this.expo_owner_businessname,
            expo_owner_businesLocation: this.business_location,
            expo_description: this.expo_description,
            expo_logo: 'https://place-hold.it/250x250',
            expo_date_start: this.expo_date_start,
            expo_date_end: this.expo_date_end,
            expo_address_town: this.expo_address_town,
            expo_address_zip: this.expo_address_zip,
            expo_address_country: this.expo_address_country,
            expo_address_state: this.expo_address_state,
            expo_address_address: this.expo_address_address,
            expo_promo_website: this.expo_promo_website,
            expo_organizer: this.expo_organizer,
            expo_organizer_website: this.expo_organizer_website,
            expo_organizer_number: this.expo_organizer_number,
            expo_name: this.expo_name,
            expo_message_id: uuid.v4(),
            expo_page_id: expo_pg_id,
            current_page_id: expo_pg_id,
            expo_organizer_email: this.expo_organizer_email,
            expo_invite_key: this.expo_invite_key
          });

          //analytics
          batch.set(expoA, {
            expo_id: expo_id,
            expo_owner_id: currentUserid,
            expo_organizer_email: this.expo_organizer_email
          });

          //aprobal
          batch.set(expoApprovals, {
            expo_id: expo_id,
            expo_owner_id: currentUserid,
            expo_organizer_email: this.expo_organizer_email
          });

          //expo page
          batch.set(expospageref, {
            expo_id: expo_id,
            expo_page_id: expo_pg_id
          });

          //set
          return batch
            .commit()
            .then(() => {
              /*this.$router.push({
                  path: `/teamview/${expo_id}`
                });*/
            })
            .catch(err => {
              this.feedback = err.message;
            });
        } else {
          return (this.feedback = 'All fields must be filled in');
        }
      },
      goto(l, i) {
        console.log(l + i);
        // this.$store.commit('chooseExpo/selectExpo', i);
        this.$router.push({
          path: `${l}/${i}`
        });
        return;
      }
    },
    computed: {
      ...mapState(['currentUser'])
    }
  };
</script>

<style>
</style>
