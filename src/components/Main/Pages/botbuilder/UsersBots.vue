<template>
 <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li><router-link to="/main">Home</router-link></li>
                <li>Your Bots</li>
            </ul>
        </nav>
        <!-- /Breadcrumbs -->

        <!-- Dashboard Wrapper -->
        <div class="dashboard-wrapper">

            <div class="columns">           
                <div class="column">
                    <!-- Main content -->
                    <div  class="section-wrapper">
                        <!-- Dashboard content -->
                        <div class="columns dashboard-columns">
                            <div class="column"></div>
                              <div class="column is-11">
            <h2 class="project-title">Your Bots</h2>
            <div class="navigation-tabs layout-tabs animated-tabs mt-20 mb-20">
              <div class="tabs is-toggle is-fullwidth">
                <ul>
                  <li class="tab-link"  @click.stop="setActiveTab('soloTab')" :class="{ 'is-active': isTabActive('soloTab') }"><a >Solo</a></li>
                  <li class="tab-link"  @click.stop="setActiveTab('collaborative')" :class="{ 'is-active': isTabActive('collaborative') }"><a>Purchased/download/incomplete</a></li>
                </ul>
              </div>
              <div class="navtab-content"  :class="{ 'is-active': isTabActive('soloTab') }">
                <div class="projects-list-wrapper">
                  <div class="list-header">
                    <div class="list-title">
                      <span>Bot List
                      </span>
                    </div>
                    <div class="list-filter">
                     <!--<auto-Complete :items="[]" />-->
                      <div class="control">
                        <input class="input is-medium is-rounded" type="text" placeholder="Filter Projects">
                        <span class="material-icons">filter_list</span>
                      </div>
                    </div>
                  </div>
                  <div class="list-body">
                    <div class="columns is-multiline">
                      <!-- Project card -->
                      <!--<project-Card
                        v-for="item in projectData"
                        v-bind:item="item"
                        v-bind:key="item.id"
                        v-bind:title="item.projectName"
                        v-bind:projectId="item.projectName"

                        />-->
                      <project-Card
                        v-for="item in projectData"
                        :item="item"
                        :key="item.id"
                        :dropDownActiveItem ="dropDownActiveItem"
                        @toggleDropdown="toggleDropdown"
                        @editProject="editThisProject"
                        @projectStats="pullProjectStats"
                        @deleteProject="deleteThisProject"
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div  class="navtab-content" :class="{ 'is-active': isTabActive('collaborative') }">
                <div class="projects-list-wrapper">
                  <div class="list-header">
                    <div class="list-title">
                      <span>Purchased</span>
                      <div class="add-button modal-trigger" data-modal="invite-user-modal">
                        <i class="material-icons">add</i>
                      </div>
                    </div>
                    <div class="list-filter">
                      <div class="control">
                        <input class="input is-medium is-rounded" type="text" placeholder="Filter Funnels">
                        <span class="material-icons">filter_list</span>
                      </div>
                    </div>
                  </div>
                  <div class="list-body">
                    <div class="columns is-multiline">
                      <!-- Todo Purchased -->


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
 </div>
</template>

<script>
    import projectCard from "@/components/UI/Cards/projectCard.vue";
    const fb = require("@/services/firebase/init.js");

    export default {
      data() {
        return {
          userid: "",
          projectData: "",
          activeTab: "soloTab",
          dropDownActiveItem: ""
        };
      },
      components: {
        projectCard
        // autoComplete
      },
      computed: {
        user() {
          return this.$store.getters.getUser.uid;
        }
      },
      methods: {
        isTabActive(tab) {
          return this.activeTab === tab;
        },
        setActiveTab(tab) {
          this.activeTab = tab; // no need for Vue.set()
        },
        toggleDropdown(i) {
          this.dropDownActiveItem = i;
        },
        editThisProject(i) {
          const funnelData = {
            funnel_id: i.funnel_id,
            funnel_name: i.funnel_name,
            current_version_id: i.current_version_id,
            funnel_avatar: i.funnel_avatar,
            funnel_bio: i.funnel_bio
          };
          this.$store.commit("setCurrentFunnel", funnelData);
          this.$router.push({
            path: "/buildfunnel"
          });
        },
        pullProjectStats(i) {
          // todo go to stats page
          console.log(`Todo stats page${i}`);
        },
        deleteThisProject(i) {
          // todo delete project
          console.log(`Todo delete project${i}`);
        }
      },
      created() {
        const self = this;
        // let filtFunnel
        const currentUserid = this.$store.state.currentUser.uid;
        const ownerpermission = "funnel_permissions.owner";
        const RPerm = "funnel_permissions.read";
        const WPerm = "funnel_permissions.write";
        // user funnel Ref
        const fRef = fb.usersCollection.doc(currentUserid).collection("funnels");
        // filter
        const fQuery = fRef
          .where(ownerpermission, "==", true)
          .where(RPerm, "==", true)
          .where(WPerm, "==", true);

        fQuery.get().then(querySnapshot => {
          const userFunnels = [];
          querySnapshot.forEach(doc => {
            const funnelid = doc.data();
            // funnelid.dataRef = doc.data().funnel_data_ref

            const fData = doc.data().funnel_ref;
            fData
              .get()
              .then(doc => {
                if (doc.exists) {
                  const fDataRet = doc.data();
                  fDataRet.version = doc.data().current_version_id;
                  fDataRet.projectId = doc.data().funnel_id;
                  fDataRet.avatar = doc.data().projectAvatar;
                  fDataRet.projectBio = doc.data().funnel_bio;
                  fDataRet.projectName = doc.data().funnel_name;
                  fDataRet.lastModified = doc.data().last_modified_by;
                  fDataRet.id = doc.id;
                  userFunnels.push(fDataRet);
                } else {
                  // doc.data() will be undefined in this case
                  console.log("Start out by building your first funnel");
                }
              })
              .catch(error => {
                console.log("Error getting document:", error);
              });
          });

          self.projectData = userFunnels;
          console.log(self.projectData);
        });
      }
    };
</script>

<style>
</style>