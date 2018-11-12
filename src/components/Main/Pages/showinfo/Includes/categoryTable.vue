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
                  <span>Description</span>

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
          <tr v-for="item in expoCategories" :key="item.category_id">

            <td class="contact-preview">
              <span class="inner">

                <a href="#"> {{item.category_name}} </a>
                <i class="material-icons">bookmark_border</i>
              </span>
            </td>
            <td class="contact-preview">
              <span class="inner">

                <a href="#"> {{item.category_description}} </a>
                <i class="material-icons">bookmark_border</i>
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
  import { getAllCategories } from '@/components/Main/Mixins/expoCategoryFetch.js';
  import { activeModalToggle } from '@/components/Main/Mixins/activeModalToggle.js';

  export default {
    name: 'CategoryTable',
    mixins: [getAllCategories, activeModalToggle],
    components: {},
    methods: {
      previewAsset(i) {
        this.$router.push({ path: `/documentPreview/${i}` });
        return;
      }
    }
  };
</script>

<style scoped>
</style>
