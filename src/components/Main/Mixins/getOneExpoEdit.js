const fb = require('@/services/firebase/init.js');

export const getVendorExposEdit = {
  data() {
    return {
      searchVendor: '',
      searchCategory: '',
      currentExpoPageID: null,
      expoMainResults: [],
      expoPageResults: [],
      expoAnalyticResults: [],
      expoVendorResults: [],
      expoVendorRequestResults : [],
              organizer_name: null,
        businessname: null,
        business_location: null,
        expo_description: null,
        expo_date_start: null,
        expo_address_town: null,
        expo_address_zip: null,
        expo_address_country: null,
        expo_address_state: null,
        expo_address_address: null,
        expo_time: null,
        expo_contact: null,
        expo_organizer: null,
        expo_organizer_website: null,
        expo_organizer_number: null,
        expo_organizer_email: null,
        expo_name: null,
        expo_promo_website: null,
        expo_date_end: null
    }
  },
  methods: {
    fetchExpoData() {
      const xID = this.$route.params.id;
      const expoRef = fb.expoCollection.doc(xID)


expoRef.get().then(function(doc) {
    if (doc.exists) {


      this.organizer_name = doc.data().



      console.log(doc.data())
           this.expoMainResults.push({
           id: doc.id,
           expo_id: doc.data().expo_id,
           expo_owner_id: doc.data().expo_owner_id,
           expo_contact_name: doc.data().expo_contact_name,
           expo_owner_businessname: doc.data().expo_owner_businessname,
           expo_owner_businesLocation: doc.data().expo_owner_businesLocation,
           expo_description: doc.data().expo_description,
           expo_logo: doc.data().expo_logo,
           expo_date_start: doc.data().expo_date_start,
           expo_date_end: doc.data().expo_date_end,
           expo_address_town: doc.data().expo_address_town,
           expo_address_zip: doc.data().expo_address_zip,
           expo_address_country: doc.data().expo_address_country,
           expo_address_state: doc.data().expo_address_state,
           expo_address_address: doc.data().expo_address_address,
           expo_industry: doc.data().expo_industry,
           expo_promo_website: doc.data().expo_promo_website,
           expo_organizer: doc.data().expo_organizer,
           expo_organizer_website: doc.data().expo_organizer_website,
           expo_organizer_number: doc.data().expo_organizer_number,
           expo_name: doc.data().expo_name,
           expo_message_id: doc.data().expo_message_id,
           expo_organizer_email: doc.data().expo_organizer_email,
         });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

      /*
         this.exposResults.push({
           id: doc.id,
           expo_id: doc.data().expo_id,
           expo_owner_id: doc.data().expo_owner_id,
           expo_contact_name: doc.data().expo_contact_name,
           expo_owner_businessname: doc.data().expo_owner_businessname,
           expo_owner_businesLocation: doc.data().expo_owner_businesLocation,
           expo_description: doc.data().expo_description,
           expo_logo: doc.data().expo_logo,
           expo_date_start: doc.data().expo_date_start,
           expo_date_end: doc.data().expo_date_end,
           expo_address_town: doc.data().expo_address_town,
           expo_address_zip: doc.data().expo_address_zip,
           expo_address_country: doc.data().expo_address_country,
           expo_address_state: doc.data().expo_address_state,
           expo_address_address: doc.data().expo_address_address,
           expo_industry: doc.data().expo_industry,
           expo_promo_website: doc.data().expo_promo_website,
           expo_organizer: doc.data().expo_organizer,
           expo_organizer_website: doc.data().expo_organizer_website,
           expo_organizer_number: doc.data().expo_organizer_number,
           expo_name: doc.data().expo_name,
           expo_message_id: doc.data().expo_message_id,
           expo_organizer_email: doc.data().expo_organizer_email,
         });

      */

    }
  },
  computed: {
   /* filterCategory() {
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
  },*/
  },
  created() {
    this.fetchExpoData();

  }
};
