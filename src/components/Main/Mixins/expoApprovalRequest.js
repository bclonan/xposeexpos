const fb = require('@/services/firebase/init.js');
export const expoApprovalRequest = {
  data() {
    return {

      approvalList: [],
      choosenExpoId: null,
      autoverifycode: null,
      autoverifycodeExpo: null,
      businessname: null,
      contact_name: null,
      feedback: null,
      expo_name_choosen: null,
      expo_date_start_choosen: null
    };
  },
  methods: {
    fetchRequests() {
      const xID = this.$route.params.id;
      const requestCollection = fb.expoApproval.doc(xID).collection('requests');

      requestCollection.onSnapshot(
        snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type == 'added') {
              const doc = change.doc;

              this.approvalList.push({
                req_id: doc.id,
                expo_id: doc.data().expo_id,
                exhibitor_message_id: doc.data().exhibitor_message_id,
                exhibitor_business_name: doc.data().exhibitor_name,
                exhibitor_user_id: doc.data().exhibitor_user_id,
                id: doc.data().id,
                exhibitor_name: doc.data().name
              });
              console.log(doc.data());
              //console.log(doc.data().file_ref)
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

  },
  created() {
    this.fetchRequests();
  }
};
