const fb = require('@/services/firebase/init.js');
import { uuid } from 'vue-uuid';
export const sendMessageMixin = {
  data() {
    return {
      feedback: null,
      new_category_name: null,
      new_category_description: null,
      fromname: null,
      fromEmail: null,
      message_status: false,
      message_content: null,
      message_topic: null,
      pg_owner_id: null,
      successMessage: null
    };
  },
  methods: {
    sendAnonymousMessage() {
      console.log('sending');
      let msg_id = uuid.v4();
      let sender_id = 'none';
      let sender_name = this.fromname;
      let sender_email = this.fromEmail;
      let msgContent = this.message_content;
      let msgTopic = this.message_topic;
      let msgToId = this.vendor_id;

      if (sender_name && msgToId) {
        const msgTocoll = fb.usersCollection
          .doc(msgToId)
          .collection('messages')
          .doc();

        var mData = {
          message_id: msg_id,
          sender_id: sender_id,
          sender_msg_id: sender_id,
          sender_email: sender_email,
          sender_name: sender_name,
          message_status: this.message_status,
          message_content: msgContent,
          message_topic: msgTopic,
          message_date: Date.now()
        };

        msgTocoll
          .set(mData)
          .then(() => {
            this.successMessage = !this.successMessage;
            this.fromname = null;
            this.fromEmail = null;
            this.message_topic = null;
            this.message_content = null;
            return;
          })
          .catch(err => {
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
      this.$store.commit('toggleActiveModal/toggleModalOverlay', null);

      return;
    }
  },
  computed: {
    //User Info
    currentUser() {
      return this.$store.state.userProfile;
    }
  }
};
