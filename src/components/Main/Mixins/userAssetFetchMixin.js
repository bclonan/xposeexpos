import {
  uuid
} from 'vue-uuid';
const fb = require('@/services/firebase/init.js');

export const getAllAssets = {
  data() {
    return {
      userAssets: [],

      assetName: null
    }
  },
  methods: {
    fetchAssets() {

      const assetList = fb.usersCollection.doc(this.currentUser.uid).collection("files").orderBy("assetDate", "desc")

      assetList.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;
              const doctimeCreated = doc.data().assetDate;
              const formatedCreated = new Date(doctimeCreated);
              var month = formatedCreated.getUTCMonth() + 1; //months from 1-12
              var day = formatedCreated.getUTCDate();
              var year = formatedCreated.getUTCFullYear();

              var newdate = year + "/" + month + "/" + day;

              this.userAssets.push({
                id: doc.id,
                file_id: doc.data().fileId,
                file_name: doc.data().assetName,
                file_type: doc.data().assetType,
                file_date: newdate,
                file_permissions: doc.data().file_permissions
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
