const fb = require('@/services/firebase/init.js');

export const getExpoCategories = {
  data() {
    return {
      searchCategories: '',
      categoriesResults: []
    }
  },
  methods: {
    fetchExpoCategories() {
      const xID = this.$route.params.id;
      const expoRef = fb.expoCollection.doc(xID).collection("categories")

      expoRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.categoriesResults.push({
              id: doc.id,
              category_id: doc.data().category_id,
              category_name: doc.data().category_name,
              category_description: doc.data().category_description,
            })
            console.log(doc.id, '=>', doc.data());

          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
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
    filteredCategories() {
      return this.categoriesResults.filter(category => {
        return category.category_name.toLowerCase().includes(this.searchCategories.toLowerCase());
      });
    },
    //expoID() {
    // return $route.params.id;
    // }
  },
  created() {
    this.fetchExpoCategories();

  }
};
