const fb = require('@/services/firebase/init.js');
import pageHolderTemplate from '@/components/Main/Pages/showinfo/Includes/pageHolder.vue';

import headerStyleOne from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleOne.vue';
import headerStyleTwo from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleTwo.vue';
import headerStyleThree from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleThree.vue';
import headerStyleFour from '@/components/Main/Pages/showinfo/blocks/Headers/headerStyleFour.vue';

import contentTitle from '@/components/Main/Pages/showinfo/blocks/Content/titleOne.vue';
import contentText from '@/components/Main/Pages/showinfo/blocks/Content/textOne.vue';
import contentButton from '@/components/Main/Pages/showinfo/blocks/Content/buttonOne.vue';
import textSection from '@/components/Main/Pages/showinfo/blocks/Content/textSecton.vue';
import buttonSection from '@/components/Main/Pages/showinfo/blocks/Content/buttonSection.vue';
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
    footerStyleThree,
    contentTitle,
    contentText,
    contentButton,
    textSection,
    buttonSection,
  },
  data() {
    return {
      expo_id: null,
      vendor_id: null,
      page_id: null,
      pageHeaderStyle: null,
      pageHeaderData: {},
      pageFooterStyle: null,
      pageFooterData: {},
      pagecontentbackuptwo: [],
      pageContentListHolder: [],
      analyticId: null,
      message_id: null
    }
  },
  methods: {
    fetchVendors() {
      const xID = this.$route.params.pageid;
      const pgref = fb.expoPagesCollection.doc(xID);

      pgref
        .get()
        .then(result => {
          this.message_id = result.data().message_id;

          this.pageHeaderStyle = result.data().pageHeaderStyle;
          console.log(xID);
          this.pageHeaderData = result.data().pageHeaderData;
          this.pageFooterStyle = result.data().pageFooterStyle;
          this.pageFooterData = result.data().pageFooterData;

          if (result.data().pageContentList) {
            this.pageContentListHolder = result.data().pageContentList;
            //this.orgitionalPageData.push(result.data().pageContentList);

          }
        })
        .catch(err => {
          console.log(err);
        });



    }
  },
  computed: {

  },
  created() {
    this.fetchVendors();

  }
};
