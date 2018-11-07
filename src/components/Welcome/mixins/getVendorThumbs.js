const fb = require('@/services/firebase/init.js');

export const getVendorThumbs = {
  data() {
    return {
      search: '',
      searchCategory: '',
      vendorResults: []
    }
  },
  methods: {
    fetchVendors() {

      const xID = this.$route.params.id;
      const expoRef = fb.expoCollection.doc(xID).collection("vendors")
      expoRef.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;

              this.vendorResults.push({
                id: doc.id,
                expo_logo: doc.data().expo_logo,
                expo_page_id: doc.data().expo_page_id,
                expo_description: doc.data().expo_description,
                expo_owner_businessname: doc.data().expo_owner_businessname
              });

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

    //expoID() {
    // return $route.params.id;
    // }
  },
  created() {
    this.fetchVendors();

  }
};
