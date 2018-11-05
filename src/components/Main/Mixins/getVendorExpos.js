const fb = require('@/services/firebase/init.js');

export const getVendorExpos = {
  data() {
    return {
      vendorExpos: [],
    }
  },
  methods: {
    fetchAssets() {

      const expoList = fb.usersCollection.doc(this.currentUser.uid).collection("expos").orderBy("expo_date_start", "desc")

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
                vendor_expo_id: doc.data().expo_id,
                vendor_expo_name: doc.data().expo_name,
                vendor_expo_date_start: doc.data().expo_date_start
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
