const fb = require('@/services/firebase/init.js');

export const getExhibitorExpos = {
  data() {
    return {
      vendorExpos: [],
    }
  },
  methods: {
    fetchAssets() {
      console.log(this.currentUser)
      const expoList = fb.usersCollection.doc(this.currentUser.user_id).collection("expos");

      expoList.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;
              const doctimeCreated = doc.data().expo_date_start;
              const formatedCreated = new Date(doctimeCreated);
              var month = formatedCreated.getUTCMonth() + 1; //months from 1-12
              var day = formatedCreated.getUTCDate();
              var year = formatedCreated.getUTCFullYear();

              var newdate = year + "/" + month + "/" + day;

              this.vendorExpos.push({
                id: doc.id,
                expo_id: doc.data().expo_id,
                expo_name: doc.data().expo_name,
                expo_date_start: doc.data().expo_date_start,
                expo_page_id: doc.data().vendor_page_id
              });
              console.log(doc.data())
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
        (error) => {
          this.feedback = error;
        },
      );
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  created() {
    this.fetchAssets();

  }
};
