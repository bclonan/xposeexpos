<template>
    <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/main">Home</router-link>
                </li>
                <li>Bot Builder</li>
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
                                            Fill out some basic info for your bot
                                        </h3>
                                    </div>

                                    <div class="card-body">
                                         <p v-if="feedback">{{this.feedback}}</p>
                                        <form class="padding-20" @submit.prevent="onSubmit">
                                            <div class="control-material is-primary">
                                               
                                                 <AppControlInput :inputClass="inputTypeOne"
                                                                                    type="text" 
                                                                                    v-model="botName" />
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Bot Name</label>
                                            </div>
                                            <div class="control-material is-primary">
                                                
                                                 <AppControlInput :inputClass="inputTypeOne"
                                                                                    type="text" 
                                                                                    v-model="botAvatar" />
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Bot Avatar</label>
                                            </div>
                                            <div class="control-material is-primary">
                                                 <AppControlInput :inputClass="inputTypeOne"
                                                                                    type="textarea" 
                                                                                    v-model="botBio" />
                                               
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Bot Bio</label>
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
  name: "DashBotMain",
  data() {
    return {
      inputTypeOne: "material-input",
      inputTypeTwo: "",
      botName: null,
      botBio: null,
      botAvatar: null,
      feedback: null
    };
  },
  components: {
    AppControlInput,
    AppButton
  },
  methods: {
    onSubmit() {
      if (this.botName) {
        // variables for post
        const currentUserid = this.currentUser.uid;
        let chatbot_id = uuid.v4();
        const chatbot_data_id = uuid.v4();
        const current_conversation_id = uuid.v4();

        const chatbot_mod_timestamp = Date.now();
        const chatbot_avatar = "https://xyzleads.com/bulkitassets/6.svg";
        // ref to current user chatbot collection
        const currentUserRef = fb.usersCollection
          .doc(currentUserid)
          .collection("chatBots");

        //ref to hold chatbot
        const chatbotCol = fb.chatBotCollection.doc(chatbot_id);

        //ref to hold chatbot data
        const chatbotDataCollection = fb.chatBotDataCollection.doc(
          chatbot_data_id
        );

        const batch = fb.db.batch();

        const usercbref = fb.usersCollection
          .doc(currentUserid)
          .collection("chatBots")
          .doc();

        const chatbotColconvos = chatbotCol
          .collection("conversations")
          .doc(current_conversation_id);
        batch.set(usercbref, {
          chatbot_id,
          chatbot_permissions: {
            owner: true,
            read: true,
            write: true
          },
          chatbot_ref: chatbotCol,
          chat_data_ref: chatbotDataCollection
        });

        batch.set(chatbotCol, {
          chatbot_id,
          chatbot_name: this.botName,
          chatbot_pub_timestamp: Date.now(),
          chatbot_mod_timestamp: Date.now(),
          current_conversation_id,
          chatbot_avatar: this.botAvatar,
          chatbot_bio: this.botBio
        });

        batch.set(chatbotColconvos, {
          conversation_name: "Name this conversation",
          chatbot_id,
          conversation_id: current_conversation_id,
          conversation_pub_timestamp: Date.now(),
          conversation_mod_timestamp: Date.now(),
          conversations_data_refId: chatbotDataCollection
        });

        batch.set(chatbotDataCollection, {
          chatbot_id,
          conversation_id: current_conversation_id
        });
        //set
        return batch
          .commit()
          .then(() => {
            /* this.$router.push({
                                    name: 'Dashboard'
                                }) */
            this.$router.push({
              path: `/NewBot/${chatbot_id}/${current_conversation_id}`
            });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        return (this.feedback =
          "You have to atleast set a name for your chatbot");
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