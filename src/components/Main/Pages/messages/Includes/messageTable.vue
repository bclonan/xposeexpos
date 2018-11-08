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
          <tr v-for="item in filteredMessages" :key="item.id">

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
  import { getAllMessages } from '@/components/Main/Mixins/getAllMessages.js';
  export default {
    name: 'messageTable',
    mixins: [getAllMessages],
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
      }
    }
  };
</script>

<style scoped>
</style>
