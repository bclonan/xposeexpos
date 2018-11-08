const fb = require('@/services/firebase/init.js');
export const getAllMessages = {
  data() {
    return {

      messageList: [],
      search: '',
      messageSelected: null
    };
  },
  methods: {
    getAllMessages() {
      const xID = this.currentUser.user_id;
      const requestCollection = fb.usersCollection.doc(xID).collection("messages")

      requestCollection.onSnapshot(
        snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type == 'added') {
              const doc = change.doc;

              this.messageList.push({
                id: doc.id,
                message_id: doc.data().message_id,
                sender_id: doc.data().sender_id,
                sender_msg_id: doc.data().sender_id,
                sender_name: doc.data().sender_name,
                message_status: doc.data().message_status,
                message_content: doc.data().message_content,
                message_topic: doc.data().message_topic,
                message_date: doc.data().message_date,
              });

            }
            if (change.type === 'modified') {
              // console.log("Modified doc: ");
            }
            if (change.type === 'removed') {
              // console.log("Removed doc: ");
            }
          });
        },
        error => {
          this.feedback = error;
        }
      );
    },


  },
  computed: {
    currentUser() {
      return this.$store.getters.getUserProf;
    },
    filteredMessages() {
      return this.messageList.filter(message => {
        return message.sender_name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  created() {
    this.getAllMessages();
  }
};
