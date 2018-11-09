const fb = require('@/services/firebase/init.js');
import {
  uuid
} from 'vue-uuid';
export const addNewExpoVendor = {
  data() {
    return {
      choosenExpoId: null,
      autoverifycode: null,
      autoverifycodeExpo: null,
      businessname: null,
      contact_name: null,
      feedback: null,
      expo_name_choosen: null,
      expo_date_start_choosen: null

    }
  },
  methods: {
    updateChoice(i) {
      console.log(i);
      this.autoverifycodeExpo = i.expo_invite_key;
      this.choosenExpoId = i.expo_id;
      this.expo_name_choosen = i.expo_name;
      this.expo_date_start_choosen = i.expo_date_start;
      return;
    },
    onSubmit() {
       let currentUserid = this.currentUser.user_id;
        let usermessageId = this.currentUser.user_message_id;
        console.log(currentUserid)
      if (this.businessname && this.choosenExpoId) {


        let expo_id = this.choosenExpoId;
        let vendor_id = uuid.v4();
        let buzname = this.businessname;
        let exhibitorname = this.contact_name;
        let expoApprovalRef = fb.expoApproval.doc(expo_id).collection('requests').doc();





        if (this.autoverifycode && this.autoverifycode === this.autoverifycodeExpo) {

          let expo_pg_id = uuid.v4();
          //ref to new team doc
          var expocollection = fb.expoCollection.doc(expo_id).collection('vendors').doc();
          //analytic ref
          var expoA = fb.expoAnalytics.doc(expo_pg_id);

          //create a new team
          const userExpoRef = fb.usersCollection
            .doc(currentUserid)
            .collection('expos')
            .doc(expo_id);
          //create expos page placeholder
          const expospageref = fb.expoPagesCollection.doc(expo_pg_id);

          const batch = fb.db.batch();

          //add to users collabs
          batch.set(userExpoRef, {
            expo_id: expo_id,
            vendor_id: vendor_id,
            expo_name: this.expo_name_choosen,
            expo_date_start: this.expo_date_start_choosen,
            expo_permissions: {
              owner: true,
              read: true,
              write: true
            },
            expo_analytic_ref: expoA,
          });

          //create new team
          batch.set(expocollection, {
            expo_id: expo_id,
            vendor_id: vendor_id,
            expo_owner_id: currentUserid,
            expo_contact_name: this.exhibitorname,
            expo_owner_businessname: this.buzname,
            expo_description: '',
            expo_logo: 'https://place-hold.it/250x250',

            expo_message_id: uuid.v4(),
            expo_page_id: expo_pg_id,
            page_current_version: expo_pg_id,
            expo_organizer_email: this.currentUser.email,
            paid_xpose: false
          });

          //analytics
          batch.set(expoA, {
            expo_id: expo_id,
            expo_owner_id: currentUserid,
            expo_organizer_email: this.currentUser.email
          });
          //expo page
          batch.set(expospageref, {
            expo_id: expo_id,
            page_id: expo_pg_id,
            pg_owner_id: currentUserid,
            name: exhibitorname,
            paid_xpose: false,
            expo_pg_live: true,
            pageHeaderStyle: 'headerStyleOne',
            pageHeaderData: {
              headerImage: 'https://phylat.com/images/placeholderimgs/imgplaceholder.jpg',
              headerText: 'Header Text',
              headerStyle: [''],

              headerClassNames: ['title is-1 mt-60']
            },
            pageFooterStyle: 'footerStyleOne',
            pageFooterData: {
              pageFooterImage: 'https://phylat.com/images/placeholderimgs/imgplaceholder.jpg',
              pageFooterText: 'headerText',
              pageFooterStyle: ['']
            },
            pageContentList: ['']
          });

          //set
          return batch
            .commit()
            .then(() => {
              /*this.$router.push({
                                                                  path: `/teamview/${expo_id}`
                                                                });*/
            })
            .catch(err => {
              this.feedback = err.message;
            });


        } else {


          expoApprovalRef.set({
              id: uuid.v4(),
              name: exhibitorname,
              exhibitor_name: buzname,
              exhibitor_user_id: currentUserid,
              exhibitor_message_id: usermessageId
            })
            .then(function () {
              console.log("Document successfully written!");
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            });
          this.feedback = 'your auto verification code was incorrect and your request has been sent to the organizer for verification';
          return;
        }



      } else {
        return (this.feedback = 'All required fields must be filled in');
      }
    },
  },
  computed: {},
  created() {

  }
};
