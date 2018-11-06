const fb = require('@/services/firebase/init.js');

export const getVendorPage = {
  data() {
    return {
      searchVendor: '',
      searchCategory: '',
      vendorResults: []
    }
  },
  methods: {
    fetchVendors() {
      const xID = this.$route.params.id;
      const expoRef = fb.expoCollection.doc(xID).collection("vendorPages")

      expoRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());

          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });



    }
  },
  computed: {
    filterCategory() {
      return this.vendorResults.filter(vendor => {
        return vendor.vendorResults.toLowerCase().includes(this.searchVendor.toLowerCase());
      });
    },
    filterVendor() {
      return this.vendorResults.filter(vendor => {
        return vendor.vendorResults.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    //expoID() {
    // return $route.params.id;
    // }
  },
  created() {
    this.fetchVendors();

  }
};
