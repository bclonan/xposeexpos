const fb = require('@/services/firebase/init.js');

export const getAllExpos = {
  data() {
    return {
      search: '',

      exposResults: []
    }
  },
  methods: {
    fetchExpos() {

      const expoList = fb.expoCollection.orderBy("assetDate", "desc")

      expoList.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;
              const doctimeCreated = doc.data().expo_create_date;
              const formatedCreated = new Date(doctimeCreated);
              var month = formatedCreated.getUTCMonth() + 1; //months from 1-12
              var day = formatedCreated.getUTCDate();
              var year = formatedCreated.getUTCFullYear();

              var newdate = year + "/" + month + "/" + day;

              this.exposResults.push({
                id: doc.id,
                expo_id: doc.data().expo_id,
                expo_name: doc.data().expo_name,
                expo_owner_businessname: doc.data().assetName,
                expo_owner_name: doc.data().expo_owner_name,
                expo_owner_businessname: doc.data().expo_owner_businessname,
                expo_organizer_location: doc.data().expo_organizer_location,
                expo_details: doc.data().expo_details,
                expo_tags: doc.data().expo_tags,
                expo_description: doc.data().expo_description,
                expo_logo: doc.data().expo_logo,
                expo_image: doc.data().expo_image,
                expo_date: doc.data().expo_date,
                expo_address: doc.data().expo_address,
                expo_time: doc.data().expo_time,
                expo_industry: doc.data().expo_industry,
                expo_contact: doc.data().expo_contact,
                expo_organizer: doc.data().expo_organizer,
                expo_organizer_website: doc.data().expo_organizer_website,
                expo_organizer_number: doc.data().expo_organizer_number,
                expo_organizer_facebook: doc.data().expo_organizer_facebook,
                expo_organizer_linkdin: doc.data().expo_organizer_linkdin,
                expo_organizer_twitter: doc.data().expo_organizer_twitter,
                expo_organizer_instagram: doc.data().expo_organizer_instagram,
                expo_message_id: doc.data().expo_message_id,
                expo_organizer_email: doc.data().expo_organizer_email,
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
    /* filteredList() {
       return this.exposResults.filter(expo => {
         return expo.expo_name.toLowerCase().includes(this.search.toLowerCase());
       });
     }*/
  },
  created() {
    this.fetchExpos();

  }
};
