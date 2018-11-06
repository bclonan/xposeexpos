<template>
  <div class="content column is-11">
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
      <ul>
        <li>
          <router-link to="/main">Home</router-link>
        </li>
        <li>Manage</li>
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
                      <li class="tab-link" @click="setTheActiveTab('Analytics')" :class="[ isTabActiveNow === 'Analytics' ? 'is-active' : '']">
                        <a>Overview</a>
                      </li>
                      <li class="tab-link" @click="setTheActiveTab('Categories')" :class="[ isTabActiveNow === 'Categories' ? 'is-active' : '']">
                        <a>Categories</a>
                      </li>
                      <li class="tab-link" @click="setTheActiveTab('expoDescription')" :class="[ isTabActiveNow === 'expoDescription' ? 'is-active' : '']">
                        <a>Xpose Page</a>
                      </li>
                      <li class="tab-link" @click="setTheActiveTab('vendorList')" :class="[ isTabActiveNow === 'vendorList' ? 'is-active' : '']">
                        <a>Vendors</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navtab-content" :class="[ isTabActiveNow === 'expoDescription' ? 'is-active' : '']">
                    <!-- Projects Group -->
                    <div class="projects-list-wrapper">
                      <div class="list-header">
                        <div class="list-title">
                          <span>Primary Information</span>
                        </div>
                      </div>
                      <div class="list-body">
                        <div class="columns is-multiline">
                          <div class="column is-8 ">
                            <div class="flex-card light-bordered light-raised">
                              <div class="card-body">
                                <h2 class="title is-4 text-bold mb-20">EventEvent Information</h2>
                                <p v-if="feedback">{{this.feedback}}</p>
                                <form @submit.prevent="onSubmit">
                                  <div class="columns mt-30">
                                    <div class="column">
                                      <div class="control">
                                        <label>Name of expo</label>
                                        <AppControlInput :inputClass="inputTypeOne" type="text" :placeholder="expo_name" v-model="expo_name" />
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
                                        <AppControlInput :inputClass="inputTypeOne" type="text" placeholder="77 address way" v-model="expo_owner_businesLocation" />
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
                          <div class="column is-4 ">
                            <div class="flex-card light-bordered light-raised">
                              <div class="card-body">
                                <h2 class="title is-4 text-bold mb-20">Xpos Analytics</h2>
                                <p v-if="feedback">{{this.feedback}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Analytics Group -->
                    <div class="projects-list-wrapper">
                      <div class="list-header">
                        <div class="list-title">
                          <span>Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="navtab-content" :class="[ isTabActiveNow === 'Categories' ? 'is-active' : '']">
                    <!-- Projects Group -->
                    <div class="projects-list-wrapper">
                      <div class="list-header">
                        <div class="list-title">
                          <span>Manage Categories</span>
                        </div>
                      </div>
                      <category-table />

                    </div>
                  </div>
                  <div class="navtab-content" :class="[ isTabActiveNow === 'Analytics' ? 'is-active' : '']">
                    <!-- Projects Group -->

                    <div class="projects-list-wrapper">

                      <div class="list-body">
                        <div class="columns is-multiline">

                          <div class="column is-3">
                            <div class="navigation-tabs simple-tabs animated-tabs">
                              <div class="tabs">
                                <ul>
                                  <li class="tab-link" @click="setTheActiveTabTwo('pgSettings')" :class="[ isTabActiveNowTwo === 'pgSettings' ? 'is-active' : '']">
                                    <a>Settings</a>
                                  </li>
                                  <li class="tab-link" @click="setTheActiveTabTwo('pgBlocks')" :class="[ isTabActiveNowTwo === 'pgBlocks' ? 'is-active' : '']">
                                    <a>Blocks</a>
                                  </li>
                                  <li class="tab-link" @click="setTheActiveTabTwo('pgStyles')" :class="[ isTabActiveNowTwo === 'pgStyles' ? 'is-active' : '']">
                                    <a>Style Editor</a>
                                  </li>

                                </ul>
                              </div>

                            </div>
                            <div class="card navtab-content" :class="[ isTabActiveNowTwo === 'pgSettings' ? 'is-active' : '']">

                              <div class="field">
                                <label class=" card-header-title form-label">Editing</label>
                                <div class="control mt-20">
                                  <div class="select is-medium">
                                    <select v-model="editTempArea">
                                      <option disabled value="">{{editTempArea}}</option>
                                      <option value="headerTemp">Header</option>
                                      <option value="contentTemp">Content</option>
                                      <option value="footerTemp">Footer</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div class="card-content">
                                <div class="content">
                                  <!--header edit-->
                                  <aside class="menu navtab-content" :class="[ editTempArea === 'headerTemp' ? 'is-active' : '']">
                                    <p class="menu-label">
                                      Template Style
                                    </p>
                                    <div class="field">
                                      <div class="control mt-20">
                                        <div class="select is-small">
                                          <select v-model="pageHeaderStyle">
                                            <option disabled value="">Please select one</option>
                                            <option value="headerStyleOne">Style One</option>
                                            <option value="headerStyleTwo">Style Two</option>
                                            <option value="headerStyleThree">Style Three</option>
                                            <option value="headerStyleFour">Style Four</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    <p class="menu-label">
                                      Template Values
                                    </p>

                                    <form class="">
                                      <div class="field">
                                        <label class="form-label">Image Value</label>
                                        <div class="control">
                                          <input type="text" class="input is-medium">
                                        </div>
                                      </div>
                                      <div class="field mt-20">
                                        <label class="form-label">Text</label>
                                        <div class="control">
                                          <input type="email" class="input is-medium">
                                        </div>
                                      </div>

                                      <div class="mt-20 has-text-right">
                                        <button type="submit" class="button btn-align info-btn raised">Save</button>
                                      </div>
                                    </form>

                                  </aside>
                                  <!--/header-->
                                  <aside class="menu navtab-content" :class="[ editTempArea === 'contentTemp' ? 'is-active' : '']">
                                    <p class="menu-label">
                                      Template Style
                                    </p>
                                    <div class="field">
                                      <div class="control mt-20">
                                        <div class="select is-small">
                                          <select v-model="pageHeaderStyle">
                                            <option disabled value="">Please select one</option>
                                            <option value="headerStyleOne">Style One</option>
                                            <option value="headerStyleTwo">Style Two</option>
                                            <option value="headerStyleThree">Style Three</option>
                                            <option value="headerStyleFour">Style Four</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    <p class="menu-label">
                                      Template Values
                                    </p>

                                    <form class="">
                                      <div class="field">
                                        <label class="form-label">Image Value</label>
                                        <div class="control">
                                          <input type="text" class="input is-medium">
                                        </div>
                                      </div>
                                      <div class="field mt-20">
                                        <label class="form-label">Text</label>
                                        <div class="control">
                                          <input type="email" class="input is-medium">
                                        </div>
                                      </div>

                                      <div class="mt-20 has-text-right">
                                        <button type="submit" class="button btn-align info-btn raised">Save</button>
                                      </div>
                                    </form>

                                    <p class="menu-label">
                                      Add Content
                                    </p>
                                    <block-types-pane @dragOnBlock="dropBlock" />

                                  </aside>

                                  <!--/main-->
                                  <aside class="menu navtab-content" :class="[ editTempArea === 'footerTemp' ? 'is-active' : '']">
                                    <p class="menu-label">
                                      Footer Style
                                    </p>
                                    <div class="field">
                                      <div class="control mt-20">
                                        <div class="select is-small">
                                          <select v-model="pageFooterStyle">
                                            <option disabled value="">Please select one</option>
                                            <option value="footerStyleOne">Style One</option>
                                            <option value="footerStyleTwo">Style Two</option>
                                            <option value="footerStyleThree">Style Three</option>
                                          </select>

                                        </div>
                                      </div>
                                    </div>

                                    <p class="menu-label">
                                      Template Values
                                    </p>

                                    <form class="">
                                      <div class="field">
                                        <label class="form-label">Image Value</label>
                                        <div class="control">
                                          <input type="text" class="input is-medium">
                                        </div>
                                      </div>
                                      <div class="field mt-20">
                                        <label class="form-label">Text</label>
                                        <div class="control">
                                          <input type="email" class="input is-medium">
                                        </div>
                                      </div>

                                      <div class="mt-20 has-text-right">
                                        <button type="submit" class="button btn-align info-btn raised">Save</button>
                                      </div>
                                    </form>

                                    <p class="menu-label">
                                      Transactions
                                    </p>
                                    <ul class="menu-list">

                                      <li>
                                        <a>Transfers</a>
                                      </li>
                                      <li>
                                        <a>Balance</a>
                                      </li>
                                    </ul>
                                  </aside>
                                  <!--/footer-->
                                </div>
                              </div>
                              <footer class="card-footer">
                                <a @click.prevent="setTheActiveTabTwo('pgSettings')" :class="[ isTabActiveNowTwo === 'pgSettings' ? 'is-active' : '']" class="card-footer-item">Reset</a>

                                <a @click.prevent="setTheActiveTabTwo('pgStyles')" :class="[ isTabActiveNowTwo === 'pgStyles' ? 'is-active' : '']" class="card-footer-item">Save</a>
                              </footer>
                            </div>
                            <div class="card navtab-content" :class="[ isTabActiveNowTwo === 'pgBlocks' ? 'is-active' : '']">

                            </div>
                            <div class="card navtab-content" :class="[ isTabActiveNowTwo === 'pgStyles' ? 'is-active' : '']">

                            </div>

                            <!--styleeditor-->
                          </div>
                          <!-- page template builder-->
                          <div class="column is-9">
                            <page-holder-template>
                              <template slot="header">
                                <component :is="pageHeaderStyle" :pageHeaderData="pageHeaderData" />
                              </template>
                              <draggable :pageContentList="pageContentList" class="dragArea" slot="main" @change="change" @start="dragStart" @end="dragEnd" :options="{group: {
          name: 'blocks',
          pull: false,
          put: true,
          sort: true
        }}">
                                <component v-for="blocks in pageContentList" :key="blocks.id" :is="blocks.tagName" :contentClass="blocks.class" :contentStyle="blocks.style" :content="blocks.content" :parentClass="blocks.parentClass" :parentStyle="blocks.parentStyle" />

                              </draggable>

                              <template slot="footer">
                                <component :is="pageFooterStyle" :pageFooterData="pageFooterData" />
                              </template>
                            </page-holder-template>
                          </div>
                          <!-- page template builder-->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="navtab-content" :class="[ isTabActiveNow === 'vendorList' ? 'is-active' : '']">
                    <!-- Projects Group -->
                    <div class="projects-list-wrapper">
                      <div class="list-header">
                        <div class="list-title">
                          <span>Your Expos</span>
                        </div>
                      </div>
                      <div class="list-body">
                        <div class="columns is-multiline">
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
  import { activeTabMixinTwo } from '@/components/Main/Mixins/extraActiveTabMixin.js';

  //category mixins
  import categoryTable from '@/components/Main/Pages/showinfo/Includes/categoryTable.vue';
  //block template holder
  import pageHolderTemplate from '@/components/Main/Pages/showinfo/Includes/pageHolderEditable.vue';
  //Headers
  import headerStyleOne from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleOne.vue';
  import headerStyleTwo from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleTwo.vue';
  import headerStyleThree from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleThree.vue';
  import headerStyleFour from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleFour.vue';

  //Content
  import contentTitle from '@/components/Main/Pages/showinfo/blocks/Content/titleOne.vue';
  import contentText from '@/components/Main/Pages/showinfo/blocks/Content/textOne.vue';
  import contentButton from '@/components/Main/Pages/showinfo/blocks/Content/buttonOne.vue';
  //content sections
  import textSection from '@/components/Main/Pages/showinfo/blocks/Content/textSecton.vue';
  import buttonSection from '@/components/Main/Pages/showinfo/blocks/Content/buttonSection.vue';
  //Footers
  import footerStyleOne from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleOne.vue';
  import footerStyleTwo from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleTwo.vue';
  import footerStyleThree from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleThree.vue';
  //content blocks
  import draggable from 'vuedraggable';
  import BlockTypesPane from '@/components/Main/Pages/showinfo/blocks/blockdata/blocksTypes.vue';

  export default {
    name: 'DashCollaborateMain',
    mixins: [activeModalToggle, activeTabMixin, activeTabMixinTwo],
    data() {
      return {
        activeTabChosen: 'Analytics',
        activeTabTwoChosen: 'pgSettings',
        inputTypeOne: 'input is-medium mt-5',
        inputTypeTwo: 'textarea is-grow',
        editTempArea: 'headerTemp',
        feedback: null,
        randomID: uuid.v4(),
        searchVendor: '',
        searchCategory: '',
        expoMainResults: [],
        expoPageResults: [],
        expoAnalyticResults: [],
        expoVendorResults: [],
        expoVendorRequestResults: [],
        organizer_name: null,
        expo_owner_businessname: null,
        expo_owner_businesLocation: null,
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
        expo_date_end: null,
        current_page_id: null,
        expo_contact_name: null,
        expopageResults: [],
        //testdata
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
        },
        //

        //
        pageContentList: [
          {
            tagName: 'contentTitle',
            content: 'heywhatsup',
            class: ['has-text-centered', 'lol'],
            style: ['color:red;', 'lol']
          }
        ]
      };
    },
    components: {
      AppControlInput,
      AppButton,
      categoryTable,
      pageHolderTemplate,
      //buildingblocks
      headerStyleOne,
      headerStyleTwo,
      headerStyleThree,
      headerStyleFour,
      footerStyleOne,
      footerStyleTwo,
      footerStyleThree,
      contentTitle,
      contentText,
      contentButton,
      buttonSection,
      textSection,
      draggable,
      BlockTypesPane
    },
    methods: {
      dropBlock(u) {
        this.pageContentList.push(u);
        console.log(u);
      },
      fetchExpoData() {
        const xID = this.$route.params.id;
        const expoRef = fb.expoCollection.doc(xID);
        let expodat = [];
        let pgdat = [];

        expoRef
          .get()
          .then(res => {
            this.expo_address_address = res.data().expo_address_address;

            this.expo_id = res.data().expo_id;
            this.expo_owner_id = res.data().expo_owner_id;
            this.expo_contact_name = res.data().expo_contact_name;
            this.expo_owner_businessname = res.data().expo_owner_businessname;
            this.expo_owner_businesLocation = res.data().expo_owner_businesLocation;
            this.expo_description = res.data().expo_description;
            this.expo_logo = res.data().expo_logo;
            this.expo_date_start = res.data().expo_date_start;
            this.expo_date_end = res.data().expo_date_end;
            this.expo_address_town = res.data().expo_address_town;
            this.expo_address_zip = res.data().expo_address_zip;
            this.expo_address_country = res.data().expo_address_country;
            this.expo_address_state = res.data().expo_address_state;
            this.expo_address_address = res.data().expo_address_address;
            this.expo_industry = res.data().expo_industry;
            this.expo_promo_website = res.data().expo_promo_website;
            this.expo_organizer = res.data().expo_organizer;
            this.expo_organizer_website = res.data().expo_organizer_website;
            this.expo_organizer_number = res.data().expo_organizer_number;
            this.expo_name = res.data().expo_name;
            this.expo_message_id = res.data().expo_message_id;
            this.expo_organizer_email = res.data().expo_organizer_email;
            this.current_page_id = res.data().current_page_id;

            if (this.current_page_id) {
              let pgid = res.data().current_page_id;
              const pgref = fb.expoCollection
                .doc(xID)
                .collection('expopages')
                .doc(pgid);
              pgref
                .get()
                .then(res => {
                  this.expopageResults.push(res.data());
                })
                .catch(err => {
                  console.log(err);
                });
            }
          })
          .catch(err => {
            console.log(err);
          });

        return;
      },
      onSubmit() {
        const currentUserid = this.currentUser.uid;

        const xID = this.$route.params.id;

        // ref to current user expo ref
        const userExpoRef = fb.usersCollection
          .doc(currentUserid)
          .collection('expos')
          .doc(xID);

        //ref to expo collection
        const expoRef = fb.expoCollection.doc(xID);

        const batch = fb.db.batch();

        //add to users collabs
        batch.update(userExpoRef, {
          expo_name: this.expo_name,
          expo_date_start: this.expo_date_start,
          expo_date_end: this.expo_date_end
        });

        //create new team
        batch.update(expoRef, {
          expo_contact_name: this.expo_contact_name,
          expo_owner_businessname: this.expo_owner_businessname,
          expo_owner_businesLocation: this.expo_owner_businesLocation,
          expo_description: this.expo_description,
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
          expo_organizer_email: this.expo_organizer_email
        });

        //set
        return batch
          .commit()
          .then(() => {
            console.log('success');
          })
          .catch(err => {
            this.feedback = err.message;
          });
      },
      //dragable
      change(evt) {
        return console.log(evt);
      },
      dragStart(evt) {},
      dragEnd(evt) {},
      //addblocks
      add(i) {
        console.log(i);
        this.pageContentList.push(i);
      }
    },

    computed: {
      currentUser() {
        return this.$store.state.currentUser;
      },

      draggableOptions() {
        return {
          group: {
            pull: false,
            put: false,
            sort: true,
            handle: '.handle',
            animation: 100,
            ghostClass: 'ghost',
            delay: 0, // time in milliseconds to define when the sorting should start
            touchStartThreshold: 0, // px, how many pixels the point should move before cancelling a delayed drag event
            disabled: false // Disables the sortable if set to true.
          }
        };
      }
    },
    created() {
      this.fetchExpoData();
    }
  };
</script>

<style>
</style>
