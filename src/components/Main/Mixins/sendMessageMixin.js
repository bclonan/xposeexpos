const fb = require('@/services/firebase/init.js');
import {
  uuid
} from 'vue-uuid';
export const createCategory = {
  data() {
    return {

      feedback: null,

      new_category_name: null,
      new_category_description: null,
      fromname: null,
      fromEmail: null,
      message_status: false,
      message_content: null,
      message_topic: null
    };
  },
  methods: {
    sendAnonymousMessage() {


      let msg_id = uuid.v4();
      let sender_id = 'none';
      let sender_name = this.fromname;
      let sender_email = this.fromEmail;
      let msgContent = this.message_content;
      let msgTopic = this.msgTopic;
      let msgToId = this.msgToId;
      let msgToCode = this.msgToCode;

      const userteamRef = fb.usersCollection

        .doc(currentUserid)
        .collection('expos')
        .doc(expo_id);

      if (this.new_category_description && this.new_category_name) {
        const xID = this.$route.params.id;
        const msgTocoll = fb.expoCollection.doc(pg_owner_id).collection("messages").doc();
        const category_id = uuid.v4();
        var categorydata = {
          message_id: msg_id,
          sender_id: sender_id,
          sender_msg_id: sender_id,
          sender_email: sender_email,
          sender_name: sender_name,
          message_status: message_status,
          message_content: msgContent,
          message_topic: msgTopic,
          message_date: Date.now(),
        };


        categoryList.set(categorydata).then(() => {
            CreatedCategoryToast;

            this.$store.commit("toggleActiveModal/toggleModalOverlay", null);
          })
          .catch((err) => {
            this.feedback = 'There was a problem creating the category please try again.';
          });

        // /add to store folder



      } else {
        this.feedback = 'You have to fill in all fields';
        return;
      }
    },

    resetActiveModalOverlay() {
      this.new_category_name = null;
      this.new_category_description = null;
      this.$store.commit("toggleActiveModal/toggleModalOverlay", null);

      return;
    }
  },
  computed: {
    //User Info
    currentUser() {
      return this.$store.state.userProfile;
    },

  }
};
