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
                        <a>Details</a>
                      </li>
                      <li class="tab-link" @click="setTheActiveTab('expoDescription')" :class="[ isTabActiveNow === 'expoDescription' ? 'is-active' : '']">
                        <a>Xpose Page</a>
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
                                          <input type="text" class="input is-medium" v-model="pageHeaderImage" :placeholder="pageHeaderImage">
                                        </div>
                                      </div>
                                      <div class="field mt-20">
                                        <label class="form-label">Text</label>
                                        <div class="control">
                                          <input type="text" class="input is-medium" v-model="pageHeaderText" :placeholder="pageHeaderText">
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
                                      Toggle Sorting
                                    </p>
                                    <div class="field">
                                      <div class="control mt-20">
                                        <div class="checkbox">
                                          <label><input type="checkbox" v-model="editable">Enable drag and drop</label>
                                        </div>
                                      </div>
                                    </div>

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
                                          <input type="text" class="input is-medium" >
                                        </div>
                                      </div>
                                      <div class="field mt-20">
                                        <label class="form-label">Text</label>
                                        <div class="control">
                                          <input type="email" class="input is-medium" >
                                        </div>
                                      </div>

                                      <div class="mt-20 has-text-right">
                                        <button type="submit" class="button btn-align info-btn raised">Save</button>
                                      </div>
                                    </form>

                                  </aside>
                                  <!--/footer-->
                                </div>
                              </div>
                              <footer class="card-footer">
                                <a @click.prevent="pullOrigionalData" class="card-footer-item">Reset</a>

                                <a @click.prevent="saveThePage" class="card-footer-item">Save</a>
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
                              {{checklistholder}}
                              <draggable :pageContentListHolder="pageContentListHolder" class="dragArea" v-model="pageContentListHolder" slot="main" :move="onMove" :options="dragOptions">
                                <component v-for="blocks in pageContentListHolder" :key="blocks.id" :is="blocks.tagName" :contentClass="blocks.class" :contentStyle="blocks.style" :content="blocks.content" :parentClass="blocks.parentClass" :parentStyle="blocks.parentStyle" :editable="editable" />

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

  import approvalTable from '@/components/Main/Pages/showinfo/Includes/approvalTable.vue';

  export default {
    name: 'DashCollaborateMain',
    mixins: [activeModalToggle, activeTabMixin, activeTabMixinTwo],
    data() {
      return {
        activeTabChosen: 'Analytics',
        currenteditingpage: null,
        activeTabTwoChosen: 'pgSettings',
        inputTypeOne: 'input is-medium mt-5',
        inputTypeTwo: 'textarea is-grow',
        editTempArea: 'headerTemp',
        editable: false,
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
        pageHeaderStyle: null,
        pageHeaderData: {},
        pageFooterStyle: null,
        pageFooterData: {},
        pagecontentbackuptwo: [],
        pageContentListHolder: [],
        pageContentList: [],
        orgitionalPageData: [],
        expo_pg_live: false,
        expopgid: null,
        pgownerid: null,
        pageHeaderImage: null,
        pageHeaderText: null
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
      BlockTypesPane,
      approvalTable
    },
    methods: {
      onMove({ relatedContext, draggedContext }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
      },
      dropBlock(u) {
        this.pageContentListHolder.push(u);
      },
      pullOrigionalData() {
        this.pagecontentbackuptwo = this.pageContentListHolder;
        this.pageContentListHolder = this.orgitionalPageData;
        return;
      },
      saveThePage() {
        var docData = {
          expo_id: this.expo_id,
          pg_owner_id: this.pgownerid,
          page_id: this.expopgid,
          expo_pg_live: this.expo_pg_live,
          message_id: this.currentUser.user_message_id,
          pageHeaderStyle: this.pageHeaderStyle,
          pageHeaderData: {
            headerImage: this.pageHeaderImage,
            headerText: this.pageHeaderText,
            headerStyle: this.pageHeaderData.headerStyle,

            headerClassNames: this.pageHeaderData.headerClassNames
          },
          pageFooterStyle: this.pageFooterStyle,
          pageFooterData: {
            pageFooterImage: this.pageFooterData.pageFooterImage,
            pageFooterText: this.pageFooterData.pageFooterText,
            pageFooterStyle: this.pageFooterData.pageFooterStyle
          },
          pageContentList: this.pageContentListHolder
        };
        fb.expoPagesCollection
          .doc(this.currenteditingpage)
          .set(docData)
          .then(function() {
            console.log('Document successfully written!');
          });

        return;
      },

      fetchExpoData() {
        const xID = this.$route.params.id;
        const expoRef = fb.expoPagesCollection.doc(xID);

        expoRef
          .get()
          .then(res => {
            this.expo_id = res.data().expo_id;
            this.currenteditingpage = this.$route.params.id;
            this.pageHeaderStyle = res.data().pageHeaderStyle;
            this.pageHeaderImage = res.data().pageHeaderStyle[0].headerImage;
            this.pageHeaderText = res.data().pageHeaderStyle[0].headerText;
            this.pageHeaderData = res.data().pageHeaderData;
            this.pageFooterStyle = res.data().pageFooterStyle;
            this.pageFooterData = res.data().pageFooterData;
            this.pageContentListHolder = res.data().pageContentList;

            this.orgitionalPageData = res.data().pageContentList;
            this.expo_pg_live = res.data().expo_pg_live;
            this.expopgid = res.data().page_id;
            this.pgownerid = res.data().pg_owner_id;
          })
          .catch(err => {
            console.log(err);
          });

        return;
      },

      //dragable
      change(evt) {
        //return console.log(evt);
      },
      dragStart(evt) {},
      dragEnd(evt) {},
      //addblocks
      changeEditStyle() {
        this.draggediting = !this.draggediting;
        return;
      }
    },

    computed: {
      currentUser() {
        return this.$store.getters.getUserProf;
      },

      checklistholder() {
        if (this.pageContentListHolder) {
          return false;
        } else {
          return true;
        }
      },

      dragOptions() {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost',
          animation: 100
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
