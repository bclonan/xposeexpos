const fb = require('@/services/firebase/init.js');
export const expolistAutocomplete = {
  data() {
    return {
      search: '',
      exposResults: []
    }
  },
  methods: {
    fetchExpos() {

      const expoList = fb.expoCollection.orderBy("expo_date_start", "desc")

      expoList.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;

              this.exposResults.push({
                id: doc.id,
                expo_id: doc.data().expo_id,
                expo_owner_id: doc.data().expo_owner_id,
                expo_contact_name: doc.data().expo_contact_name,
                expo_owner_businessname: doc.data().expo_owner_businessname,

                expo_name: doc.data().expo_name

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
    filteredList() {
      return this.exposResults.filter(expo => {
        return expo.expo_name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  created() {
    this.fetchExpos();

  }
};
