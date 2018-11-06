const fb = require('@/services/firebase/init.js');
import pageHolderTemplate from '@/components/Main/Pages/showinfo/Includes/pageHolder.vue';
//Headers
import headerStyleOne from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleOne.vue';
import headerStyleTwo from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleTwo.vue';
import headerStyleThree from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleThree.vue';
import headerStyleFour from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleFour.vue';

//Content
//Footers
import footerStyleOne from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleOne.vue';
import footerStyleTwo from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleTwo.vue';
import footerStyleThree from '@/components/Main/Pages/showinfo/blocks/Footers/footerStyleThree.vue';
export const getVendorPage = {
  components: {

    pageHolderTemplate,
    //buildingblocks
    headerStyleOne,
    headerStyleTwo,
    headerStyleThree,
    headerStyleFour,
    footerStyleOne,
    footerStyleTwo,
    footerStyleThree
  },
  data() {
    return {
      expo_id: null,
      vendor_id: null,
      page_id: null,
      pageHeaderStyle: 'headerStyleOne',
      pageHeaderData: {
        headerImage: 'https://bulkitv2.cssninja.io/dashboard/assets/images/dashboard/feed-post-1.jpeg',
        headerText: 'headerText',
        headerStyle: {
          color: 'red',
          fontSize: '13px'
        },
        headerClassNames: ['title is-1 mt-60']
      },
      pageFooterStyle: 'footerStyleOne',
      pageFooterData: {
        pageFooterImage: 'https://bulkitv2.cssninja.io/dashboard/assets/images/dashboard/feed-post-1.jpeg',
        pageFooterText: 'headerText',
        pageFooterStyle: {
          color: 'red',
          fontSize: '13px'
        }
      }
    }
  },
  methods: {
    fetchVendors() {
      const xID = this.$route.params.pgid;
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
