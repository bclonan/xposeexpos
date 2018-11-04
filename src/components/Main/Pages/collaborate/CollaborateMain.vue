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
                                                <a>New Team</a>
                                            </li>
                                            <li class="tab-link" @click="setTheActiveTab('manageInvites')" :class="[ isTabActiveNow === 'manageInvites' ? 'is-active' : '']">
                                                <a>Manage Invites</a>
                                            </li>
                                            <li class="tab-link" @click="setTheActiveTab('searchTeams')" :class="[ isTabActiveNow === 'searchTeams' ? 'is-active' : '']">
                                                <a>Search Teams</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="navtab-content" :class="[ isTabActiveNow === 'newTeam' ? 'is-active' : '']">

                                        <!-- Projects Group -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>New Team</span>

                                                </div>

                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">
                                                    <div class="column is-8 is-offset-2">
                                                        <div class="flex-card light-bordered light-raised">
                                                            <div class="card-body">
                                                                <h2 class="title is-4 text-bold mb-20">Team Info</h2>
                                                                <p v-if="feedback">{{this.feedback}}</p>
                                                                <form @submit.prevent="onSubmit">
                                                                    <div class="columns mt-50">
                                                                        <div class="column">
                                                                            <div class="control">
                                                                                <label>Team Name</label>
                                                                                <AppControlInput :inputClass="inputTypeOne"
                                                                                    type="text" placeholder="Team Name"
                                                                                    v-model="teamName" />
                                                                            </div>

                                                                        </div>
                                                                        <div class="column">
                                                                            <div class="control">
                                                                                <label>Team Tagline</label>
                                                                                <AppControlInput :inputClass="inputTypeOne"
                                                                                    type="text" placeholder="Short motto for your team"
                                                                                    v-model="teamTagline" />
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div class="columns mt-10">
                                                                        <div class="column">

                                                                            <div class="control">
                                                                                <label>Team Description</label>
                                                                                <AppControlInput :inputClass="inputTypeTwo"
                                                                                    rows="5" type="textarea"
                                                                                    placeholder="Enter a team description ..."
                                                                                    v-model="teamDescription" />

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-30">

                                                                        <AppButton class="button btn-align no-lh raised primary-btn"
                                                                            type="submit">Create</AppButton>
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

                                    <div class="navtab-content" :class="[ isTabActiveNow === 'searchTeams' ? 'is-active' : '']">


                                        <!-- Projects Group -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>Search Teams</span>

                                                </div>

                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">
                                                    <OpenTeams />
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
import AppControlInput from "@/components/UI/Forms/AppControlInput.vue";
import AppButton from "@/components/UI/Forms/AppButton.vue";
//Additional
import { mapState } from "vuex";
import { uuid } from "vue-uuid";
// import fbase db
const fb = require("@/services/firebase/init.js");
//Components
import OpenTeams from "@/components/Main/Pages/collaborate/Includes/OpenTeams";

//Mixins
import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";
import { activeTabMixin } from "@/components/Main/Mixins/activeTabMixin.js";

export default {
  name: "DashCollaborateMain",
  mixins: [activeModalToggle, activeTabMixin],
  data() {
    return {
      activeTabChosen: "newTeam",
      inputTypeOne: "input is-medium mt-5",
      inputTypeTwo: "textarea is-grow",
      teamName: null,
      teamTagline: null,
      teamDescription: null,
      feedback: null,
      randomID: uuid.v4()
    };
  },
  components: {
    OpenTeams,
    AppControlInput,
    AppButton
  },
  methods: {
    onSubmit() {
      if (this.teamName && this.teamTagline && this.teamDescription) {
        // xyz user info
        const currentUserid = this.currentUser.uid;
        let team_id = uuid.v4();
        // ref to current user team collection
        const currentUserRef = fb.usersCollection
          .doc(currentUserid)
          .collection("teams");

        //ref to hold team member list
        const collabMemberRef = fb.collabMembers.doc(team_id);

        //ref to new team doc
        var collabCollection = fb.collabs.doc(team_id);

        //create a new team
        const userteamRef = fb.usersCollection
          .doc(currentUserid)
          .collection("teams")
          .doc();

        const batch = fb.db.batch();

        //add to users collabs
        batch.set(userteamRef, {
          team_id: team_id,
          team_permissions: {
            owner: true,
            read: true,
            write: true
          },
          team_ref: collabCollection
        });

        //create new team
        batch.set(collabCollection, {
          team_id: team_id,
          teamName: this.teamName,
          teamTagline: this.teamTagline,
          teamDescription: this.teamDescription,
          teamImage: "https://place-hold.it/250x250",
          teamInviteId: uuid.v4()
        });

        //Add userid to team member list
        batch.set(collabMemberRef, {
          team_id: team_id,
          collabMembers: [
            {
              member_id: currentUserid
            }
          ]
        });

        //set
        return batch
          .commit()
          .then(() => {
            this.$router.push({
              path: `/teamview/${team_id}`
            });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        return (this.feedback = "All fields must be filled in");
      }
    }
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style>
</style>