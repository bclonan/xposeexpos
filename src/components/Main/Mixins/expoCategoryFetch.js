import {
  uuid
} from 'vue-uuid';
const fb = require('@/services/firebase/init.js');

export const getAllCategories = {
  data() {
    return {
      expoCategories: [],

      categoryName: null
    }
  },
  methods: {
    fetchAssets() {
      const xID = this.$route.params.id;
      const categoryList = fb.expoCollection.doc(xID).collection("categories");

      categoryList.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;


              this.expoCategories.push({
                id: doc.id,
                category_id: doc.data().category_id,
                category_name: doc.data().category_name,
                category_description: doc.data().category_description
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

  },
  created() {
    this.fetchAssets();

  }
};
