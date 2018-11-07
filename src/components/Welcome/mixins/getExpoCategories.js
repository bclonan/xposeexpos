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


          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });



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
