<template>

  <div class="column is-12 is-hidden-mobile">
    <!-- Page title -->
    <div class="contacts-title-wrapper">
      <h3 class="contacts-title">
        <a href="#">Expo</a>
        <i class="material-icons">keyboard_arrow_right</i>
        <span>Categories</span>
      </h3>
      <!-- Filter input -->
      <div class="list-filter">

        <a class="button btn-dash secondary-btn btn-dash raised ripple has-icon modal-trigger" data-ripple-color="" @click.prevent="setActiveModal('createCategorymodal')">
          <i class="material-icons">add</i>
          Category
        </a>
      </div>
    </div>

    <div class="flex-card is-contact-list light-bordered card-overflow">
      <!-- Contacts table -->
      <table class="table contacts-table">
        <!-- Table header -->
        <thead>
          <tr>

            <th class="w-50">
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Name</span>

                </div>

              </div>
            </th>

            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Business</span>

                </div>

              </div>
            </th>
            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Approve</span>

                </div>

              </div>
            </th>
            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Deny</span>

                </div>

              </div>
            </th>
            <th>
              <!-- Filter dropdown -->
              <div class="dropdown filter-dropdown dropdown-trigger">
                <div class="button">
                  <span>Message</span>

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
          <tr v-for="item in approvalList" :key="item.id">

            <td class="contact-preview">
              <span class="inner">

                <a href="#"> {{item.exhibitor_name}} </a>
                <i class="material-icons">bookmark_border</i>
              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">

                <a href="#"> {{item.exhibitor_business_name}} </a>
                <i class="material-icons">bookmark_border</i>
              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">

                <a class="button is-success" style="color:white;" @click.prevent="addExhibitor(item)">Approve</a>
              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">

                <a class="button is-danger" style="color:white;" @click.prevent="denyExhibitor(item)">Deny</a>
              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">
                <a class="button is-info" style="color:white;" @click.prevent="messageExhibitor(item)">Message</a>
              </span>
            </td>

          </tr>
          <!-- Table row -->

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { expoApprovalRequest } from '@/components/Main/Mixins/expoApprovalRequest.js';

  export default {
    name: 'approvalTable',
    mixins: [expoApprovalRequest],
    props: ['organizerInfo'],
    components: {},
    methods: {
      addExhibitor(i) {
        this.$emit('approveExhibitor', i);

        return;
      },
      denyExhibitor(i) {
        this.$emit('denyExhibitor', i);
        return;
      },
      messageExhibitor(i) {
        const message_sender = organizerInfo.name;
        const message_back_id = organizerInfo.messageBackID;

        const message_to_id = i.exhibitor_message_id;

        return;
      }
    }
  };
</script>

<style scoped>
</style>
