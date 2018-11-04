<template>
<section>
  <MainContainer>
    <!-- Define Breadcrumb -->
    <li slot="breadcrumb">Team
    <li/>
      <!-- /Define Breadcrumb -->
      <!-- dashboard content -->
      <div slot="mainContent">
        <!-- Dashboard content -->
        <div class="columns dashboard-columns">
          <div class="column"></div>
          <div class="column is-11">
            <h2 class="project-title">Acme Inc.</h2>
            <h4 class="project-tagline">We're building crazy things.</h4>
            <div class="project-members-avatars">
              <div class="face">
                <img src="https://via.placeholder.com/250x250">
              </div>
              <div class="face">
                <img src="https://via.placeholder.com/250x250">
              </div>
              <div class="face is-fake">+4</div>
              <div class="add-button modal-trigger" @click="openModalbuttons('inviteMemberModal')">
                <i class="material-icons">add</i>
              </div>
            </div>
            <div class="navigation-tabs layout-tabs animated-tabs mt-20 mb-20">
              <div class="tabs is-toggle is-fullwidth">
                <ul>
                  <li class="tab-link" @click="setActive('projects')" :class="{ 'is-active': isTabActive === 'projects' }"><a>Projects</a></li>
                  <li class="tab-link" @click="setActive('members')" :class="{ 'is-active': isTabActive === 'members' }"><a>Members</a></li>
                  <li class="tab-link" @click="setActive('Feed')" :class="{ 'is-active': isTabActive === 'Feed' }"><a>Feed</a></li>
                </ul>
              </div>
              <div id="tab-a1" class="navtab-content" :class="{ 'is-active': isTabActive === 'projects' }">
                <div class="projects-list-wrapper">
                  <div class="list-header">
                    <div class="list-title">
                      <span>Projects</span>
                      <div class="add-button modal-trigger" data-modal="create-project-modal" @click="openModalbuttons('newProjectModal')">
                        <i class="material-icons">add</i>
                      </div>
                    </div>
                    <div class="list-filter">
                      <div class="control">
                        <input class="input is-medium is-rounded" type="text" placeholder="Filter Projects">
                        <span class="material-icons">filter_list</span>
                      </div>
                    </div>
                  </div>
                  <div class="list-body">
                    <div class="columns is-multiline">
                      <div class="column is-4">
                        <div class="flex-card light-bordered light-shadow project-card card-overflow">
                          <div class="header">
                            <h4 class="no-margin-bottom">ICO Website Project</h4>
                            <div class="dropdown is-right dropdown-trigger">
                              <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span class="material-icons">more_vert</span>
                              </div>
                              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                  <a href="#" class="dropdown-item">
                                  Edit
                                  </a>
                                  <a class="dropdown-item">
                                  Details
                                  </a>
                                  <hr class="dropdown-divider">
                                  <a href="#" class="dropdown-item is-flex">
                                  <span class="material-icons">check_circle</span>
                                  Finish
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="project-members">
                            <div class="face">
                              <img src="https://via.placeholder.com/250x250">
                            </div>
                            <div class="face">
                              <img src="https://via.placeholder.com/250x250">
                            </div>
                          </div>
                          <div class="progress-block">
                            <progress class="progress is-xs is-orange" value="30" max="100">30%</progress>
                            <div class="task-count">
                              <span class="sl sl-icon-check"></span>
                              <span>2/8</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="navtab-content" :class="{ 'is-active': isTabActive === 'members' }">
                <div class="projects-list-wrapper">
                  <div class="list-header">
                    <div class="list-title">
                      <span>Members</span>
                      <div class="add-button modal-trigger" data-modal="invite-user-modal" @click="openModalbuttons('inviteMemberModal')">
                        <i class="material-icons">add</i>
                      </div>
                    </div>
                    <div class="list-filter">
                      <div class="control">
                        <input class="input is-medium is-rounded" type="text" placeholder="Filter Members">
                        <span class="material-icons">filter_list</span>
                      </div>
                    </div>
                  </div>
                  <div class="list-body">
                    <div class="columns is-multiline">
                      <!-- Member box -->
                      <div class="column is-4">
                        <div class="member-box">
                          <img src="https://via.placeholder.com/250x250">
                          <div class="member-info">
                            <span class="name">Joaquim Ravel</span>
                            <span class="role">Product Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="navtab-content" :class="{ 'is-active': isTabActive === 'Feed' }">
                    <div class="columns dashboard-columns" >
                <div class="column is-3">
                    <div class="flex-card company-card light-bordered light-raised">
                        <div class="header">
                            <img class="company-avatar" src="@/assets/images/logos/partners/acme-solo.svg" alt="">
                        </div>
                        <div class="card-body"></div>
                    </div>
                    <Feed-Switcher :collabFeeds="collabFeeds" />

                    <!-- Widget -->
                    <Project-Menu :collabProjects="collabProjects" />
                    <!-- /Widget -->
                </div>
                 <Feed-Container />
                <div class="column is-4">
                    <!-- active users-->
                    <User-Container :activeUserIds="activeUserIds" />
                    <!-- /active users-->
                    <!-- Activity Feed -->
                    <Activity-Feed :chatActivity="ChatActivity" />
                    <!-- /Activity feed -->

                </div>
            </div>


              </div>
            </div>
          </div>
          <div class="column"></div>
          <newProjectModal :isModalActive="isModalActive" @closeModal="closeThis"/>
          <InviteMemberModal :isModalActive="isModalActive" @closeModal="closeThis"/>
        </div>
      </div>
      <!-- /dashboard content -->
  </MainContainer>
</section>
</template>

<script>
// chat feed
import FeedContainer from "./FeedContainer.vue";
// Menus
import ActivityFeed from "./ActivityFeed.vue";
import ProjectMenu from "./ProjectMenu.vue";
import FeedSwitcher from "./FeedSwitcher.vue";
import UserContainer from "./UpdatedActiveUsers.vue";

//import newProjectModal from './UI/NewProject.vue';
//import InviteMemberModal from './UI/InviteMemberModal.vue';
// import fbase db
const fb = require("@/services/firebase/init.js");

export default {
  props: {
    /* audioAttached: {
          type: String,
          default: function () {
            return { audioAttached: false }
          }
        } */
  },
  data() {
    return {
      // single project view

      activeUserIds: [],
      activeUserIdstemparray: [],
      ChatActivity: [
        {
          userName: "John Smith",
          activityDate: "2 minutes ago",
          activityMessage: "sent you a message",
          activityStatus: "read"
        },
        {
          userName: "John Smith",
          activityDate: "Yesterday",
          activityMessage: "uploaded a file",
          activityStatus: "read"
        },
        {
          userName: "John Smith",
          activityDate: "Monday",
          activityMessage: "sent you an update",
          activityStatus: "unread"
        },
        {
          userName: "John Smith",
          activityDate: "Last Week",
          activityMessage: "sent you a message",
          activityStatus: "read"
        }
      ],
      collabFeeds: [
        {
          feedName: "Main",
          feedNotifications: "4",
          feedUnreadClass: "b-badge rounded is-primary"
        },
        {
          feedName: "Test",
          feedNotifications: "",
          feedUnreadClass: ""
        }
      ],
      collabProjects: [
        {
          ProjectsName: "Main",
          ProjectsNotifications: "4",
          ProjectsUnreadClass: "b-badge rounded is-primary"
        },
        {
          ProjectsName: "Test",
          ProjectsNotifications: "",
          ProjectsUnreadClass: ""
        }
      ],
      userid: "",
      isTabActive: "projects",
      isModalActive: ""
    };
  },
  components: {
    MainContainer,
    newProjectModal,
    InviteMemberModal,
    FeedContainer,
    // menus
    ActivityFeed,
    FeedSwitcher,
    ProjectMenu,
    UserContainer
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    setActive(menuItem) {
      this.isTabActive = menuItem; // no need for Vue.set()
    },
    openModalbuttons(i) {
      console.log(i);
      this.isModalActive = i; // no need for Vue.set()
    },
    closeThis() {
      this.isModalActive = "none";
    },
    addtostuff(start) {
      // contains
      const idx = this.activeUserIds.findIndex(elm => elm.id === start.id);
      // console.log(this.activeUsersIds, 'insert index', idx, start.id);
      if (idx !== -1) {
        this.activeUserIds.splice(idx, 1, start);
      } else {
        this.activeUserIds.push(start);
      }
      /* if thisactiveuserids == {
                   this.activeUserIds.push(start)
               }
               else if thisactiveuserids != empty
               update the array for object id

               */
    }
  },
  created() {
    const self = this;
    // console.log(this.$route.params.id);
    const collabMembers = {};
    const loadedPosts = {};
    fb.collabMembers
      .where("collab_slugName", "==", this.$route.params.id)
      .get()
      .then(results => {
        results.forEach(doc => {
          collabMembers[doc.id] = doc.data().member_userId;
        });
        // console.log(collabMembers)
        const users = fb.usersCollection;
        // console.log('users', users);
        users.onSnapshot(querySnapshot => {
          querySnapshot.forEach(change => {
            loadedPosts[change.id] = change.data();
            loadedPosts[change.id].id = change.id;
            // get id of individual array objects
            // create reference point for that id
            // console.log( collabMembers[doc.id])
            const start = loadedPosts[change.id];
            //  console.log('Users')
            //  console.log(start);
            self.addtostuff(start);
            if (change.data().type === "added") {
              //   console.log("this added" + loadedPosts[change.id])
            }
            if (change.type === "modified") {
              //  console.log("this modded" + loadedPosts[change.id])
            }
          });
        });
      });
  }
};
</script>

<style>
</style>
