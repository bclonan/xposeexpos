<template>
    <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/main">Home</router-link>
                </li>
                <li>New Story Form</li>
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
                            <section class="column is-8">


                                <div class="flex-card light-bordered light-raised">
                                    <div class="section-title-wrapper mt-20">

                                        <h2 class="title dark-text text-bold main-title is-2 has-text-centered">
                                            Getting Started
                                        </h2>
                                        <h3 class="subtitle has-text-centered is-4">
                                            Fill out some basic info for your form
                                        </h3>
                                    </div>
                                    <div class="card-body">
                                         <p v-if="feedback">{{this.feedback}}</p>
                                        <form class="padding-20" @submit.prevent="onSubmit">
                                            <div class="control-material is-primary">
                                              
                                                 <AppControlInput :inputClass="inputTypeOne"
                                                                                    type="text" 
                                                                                    v-model="storyName" />
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Story Name</label>
                                            </div>
 
                                            <div class="control-material is-primary">
                                                 <AppControlInput :inputClass="inputTypeOne"
                                                                                    type="textarea" 
                                                                                    v-model="storyDescription" />
                                              
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Story Description</label>
                                            </div>
                                            <div class="mt-20 has-text-right">
                                                  <AppButton class="button btn-align info-btn raised"
                                                                            type="submit">Create</AppButton>
                                               
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section class="column is-4">
                                <div class="section-title-wrapper">

                                    <h2 class="title dark-text text-bold main-title is-2 has-text-centered">
                                        Guides and tips
                                    </h2>
                                    <h3 class="subtitle has-text-centered is-4">
                                        placeholder tips and guides
                                    </h3>
                                </div>
                            </section>
                        </div>
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
export default {
  name: "LeadFormMain",
  data() {
    return {
      inputTypeOne: "material-input",
      inputTypeTwo: "",
      storyName: null,
      storyDescription: null,
      feedback: null
    };
  },
  components: {
    AppControlInput,
    AppButton
  },
  methods: {
    onSubmit() {
      if (this.storyName) {
        // variables for post
        const currentUserid = this.currentUser.uid;
        let story_id = uuid.v4();
        const story_data_id = uuid.v4();
        const current_version_id = uuid.v4();

        const story_mod_timestamp = Date.now();

        // ref to current user story collection
        const currentUserRef = fb.usersCollection
          .doc(currentUserid)
          .collection("storyForms");

        //ref to hold story
        const storyCol = fb.storyFormCollection.doc(story_id);

        //ref to hold story data
        const storyFormDataCollection = fb.storyFormDataCollection.doc(
          story_data_id
        );

        const batch = fb.db.batch();

        const usercbref = fb.usersCollection
          .doc(currentUserid)
          .collection("storyForms")
          .doc();

        const storyColconvos = storyCol
          .collection("versions")
          .doc(current_version_id);
        batch.set(usercbref, {
          story_id,
          story_permissions: {
            owner: true,
            read: true,
            write: true
          },
          story_ref: storyCol,
          chat_data_ref: storyFormDataCollection
        });

        batch.set(storyCol, {
          story_id,
          story_name: this.storyName,
          story_pub_timestamp: Date.now(),
          story_mod_timestamp: Date.now(),
          current_version_id,
          story_description: this.storyDescription
        });

        batch.set(storyColconvos, {
          version_name: "Name this version",
          story_id,
          version_id: current_version_id,
          version_pub_timestamp: Date.now(),
          version_mod_timestamp: Date.now(),
          versions_data_refId: storyFormDataCollection
        });

        batch.set(storyFormDataCollection, {
          story_id,
          version_id: current_version_id
        });
        //set
        return batch
          .commit()
          .then(() => {
            /* this.$router.push({
                                    name: 'Dashboard'
                                }) */
            this.$router.push({
              path: `/NewStory/${story_id}/${current_version_id}`
            });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        return (this.feedback =
          "You have to atleast set a name for your story");
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