<template>
  <div class="column is-12">
    <!-- Page Title -->
    <div class="documents-title-wrapper">
      <h3 class="documents-title" v-if="!messageSelected">
        <a href="#">Messages</a>

      </h3>
      <h3 class="documents-title" v-else>
        <a @click.prevent="clearMessage">Return</a>

      </h3>

      <!-- Filter input -->
      <div class="list-filter">
        <div class="control">
          <input class="input is-medium is-rounded" type="text" placeholder="Messages">
          <div class="input-icon">
            <span class="material-icons">filter_list</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-card is-document-list light-bordered card-overflow" v-if="!messageSelected">
      <!-- Documents table -->
      <table class="table contacts-table">
        <!-- Table header -->
        <thead>
          <tr>

            <th class="w-50">
              <!-- Filter dropdown -->
              <span>From</span>
            </th>

            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Topic</span>

                </div>

              </div>
            </th>
            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Date</span>

                </div>

              </div>
            </th>
            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>View</span>

                </div>

              </div>
            </th>
            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Delete</span>

                </div>

              </div>
            </th>

          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          <!-- Table row -->

          <div class="column is-12 ">

            <!-- Page Title -->

          </div>
          <tr v-for="item in messageList" :key="item.id">

            <td class="contact-preview">
              <span class="inner">

                <a href="#"> {{item.sender_name}} </a>

              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">

                <a href="#"> {{item.message_topic}} </a>

              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">

                <a href="#"> {{item.message_date}} </a>

              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">

                <a class="button is-success" style="color:white;" @click.prevent="viewMessage(item)">View</a>
              </span>
            </td>

            <td class="contact-preview">
              <span class="inner">
                <a class="button is-danger" style="color:white;" @click.prevent="deleteMessage(item)">Delete</a>
              </span>
            </td>

          </tr>
          <!-- Table row -->

        </tbody>
      </table>
    </div>
    <!--showmsg-->
    <div class="column is-10 is-offset-1" v-else>
      <div class="flex-card featured-feed-post light-bordered light-raised">

        <div class="card-body is-responsive">

          <div class="post-meta">
            <div class="author-meta">
              <div class="author-name">From:
                <span>{{messageSelected.sender_name}}</span>
                <br/>
                <span>{{messageSelected.sender_email}}</span>
              </div>

            </div>

          </div>
          <div class="post-body">
            <p>
              <b>Topic</b>
            </p>
            <p>{{messageSelected.message_topic}}</p>
            <p>
              <b>Content</b>
            </p>
            <p>{{messageSelected.message_content}} </p>

          </div>
          <div class="post-share">

          </div>
        </div>
      </div>

    </div>
    <!--/showmsg-->
  </div>
</template>

<script>
  import DocumentListDropdown from '@/components/Main/Pages/assets/Includes/document-list-dropdown';
  const fb = require('@/services/firebase/init.js');
  export default {
    data() {
      return {
        messageList: [],
        search: '',
        messageSelected: null
      };
    },
    name: 'messageTable',
    components: {
      DocumentListDropdown
    },
    methods: {
      previewAsset(i) {
        this.$router.push({ path: `/documentPreview/${i}` });
        return;
      },
      viewMessage(u) {
        this.messageSelected = u;
        return;
      },
      deleteMessage(u) {
        //this.messageSelected.push(u);
        return;
      },
      clearMessage() {
        this.messageSelected = null;
        return;
      },
      getAllMessages() {
        let xID = this.currentUser.user_id;

        const requestCollection = fb.usersCollection.doc(xID).collection('messages');

        requestCollection.onSnapshot(
          snapshot => {
            snapshot.docChanges().forEach(change => {
              if (change.type == 'added') {
                const doc = change.doc;

                this.messageList.push({
                  id: doc.id,
                  message_id: doc.data().message_id,
                  sender_id: doc.data().sender_id,
                  sender_msg_id: doc.data().sender_id,
                  sender_name: doc.data().sender_name,
                  message_status: doc.data().message_status,
                  message_content: doc.data().message_content,
                  message_topic: doc.data().message_topic,
                  message_date: doc.data().message_date
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
          error => {
            this.feedback = error;
          }
        );
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters.getUserProf;
      }
    },
    created() {
      this.getAllMessages();
    }
  };
</script>

<style scoped>
</style>
