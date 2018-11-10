const fb = require('@/services/firebase/init.js');
export const expolistAutocomplete = {
  data() {
    return {
      search: '',
      expoList: [],
      isOpen: false
    }
  },
  methods: {
    fetchExpos() {

      const expoListCol = fb.expoCollection.orderBy("expo_date_start", "desc")

      expoListCol.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;

              this.expoList.push({
                id: doc.id,
                expo_id: doc.data().expo_id,
                expo_owner_id: doc.data().expo_owner_id,
                expo_message_id: doc.data().expo_message_id,
                expo_free_key: doc.data().expo_free_key,
                expo_invite_key: doc.data().expo_invite_key,
                expo_name: doc.data().expo_name

              });
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
    },
    onChange() {
      let r = this.expoList.length;
    }
  },
  computed: {
    filteredTyping() {
      return this.expoList.filter(expo => {
        return expo.expo_name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  created() {
    this.fetchExpos();

  }
};
