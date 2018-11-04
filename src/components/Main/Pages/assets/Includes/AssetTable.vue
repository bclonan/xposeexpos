<template>
    <div class="column is-9 is-hidden-mobile">
        <!-- Page Title -->
        <div class="documents-title-wrapper">
            <h3 class="documents-title">
                <a href="#">Documents</a>
                <i class="material-icons">keyboard_arrow_right</i>
                <span>My foder - <small>(shared)</small></span>
            </h3>

            <!-- Filter input -->
            <div class="list-filter">
                <div class="control">
                    <input class="input is-medium is-rounded" type="text" placeholder="Search documents">
                    <div class="input-icon">
                        <span class="material-icons">filter_list</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-card is-document-list light-bordered card-overflow">
            <!-- Documents table -->
            <table class="table documents-table">
                <!-- Header -->
                <thead>
                    <tr>
                        <th>
                            <div class="b-checkbox is-secondary">
                                <input id="checkbox-docs-all" class="styled" type="checkbox">
                                <label for="checkbox-docs-all"></label>
                            </div>
                        </th>
                        <th class="w-50">
                            <!-- Filter dropdown -->
                            <div class="dropdown filter-dropdown dropdown-trigger">
                                <div class="button">
                                    <span>Name</span>
                                    <i class="material-icons">keyboard_arrow_down</i>
                                </div>

                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <div class="dropdown-item filter-title">
                                            Order
                                        </div>
                                        <a href="#" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Ascending</span>
                                        </a>
                                        <a class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Descending</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th>
                            <!-- Filter dropdown -->
                            <div class="dropdown filter-dropdown dropdown-trigger">
                                <div class="button">
                                    <span>Type</span>
                                    <i class="material-icons">keyboard_arrow_down</i>
                                </div>

                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <div class="dropdown-item filter-title">
                                            Order
                                        </div>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Ascending</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Descending</span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <div class="dropdown-item filter-title">
                                            Display
                                        </div>
                                        <a href="javascript:void(0);" class="dropdown-item is-active">
                                            <span><i class="fa fa-check"></i> Modification</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item is-disabled">
                                            <span><i class="fa fa-check"></i> Members</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Type</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Size</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th>
                            <!-- Filter dropdown -->
                            <div class="dropdown filter-dropdown dropdown-trigger">
                                <div class="button">
                                    <span>Created</span>
                                    <i class="material-icons">keyboard_arrow_down</i>
                                </div>

                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <div class="dropdown-item filter-title">
                                            Order
                                        </div>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Ascending</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Descending</span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <div class="dropdown-item filter-title">
                                            Display
                                        </div>
                                        <a href="javascript:void(0);" class="dropdown-item is-disabled">
                                            <span><i class="fa fa-check"></i> Modification</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item is-active">
                                            <span><i class="fa fa-check"></i> Members</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Type</span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span><i class="fa fa-check"></i> Size</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th class="w-5">
                            <!-- Filter dropdown -->
                            <div class="dropdown filter-dropdown is-right dropdown-trigger">
                                <div class="button">
                                    <span class="material-icons">subject</span>
                                    <i class="material-icons">keyboard_arrow_down</i>
                                </div>

                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <div class="dropdown-item filter-title">
                                            View type
                                        </div>
                                        <a href="#" class="dropdown-item is-spaced is-active">
                                            <span><i class="fa fa-check"></i> List view</span>
                                            <i class="material-icons">view_list</i>
                                        </a>
                                        <a class="dropdown-item is-spaced">
                                            <span><i class="fa fa-check"></i> Grid view</span>
                                            <i class="material-icons">view_module</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <!-- Body -->
                <tbody>
                    <!-- Table row -->
                    <tr v-for="item in userAssets" :key="item.file_id" >
                        <td>
                            <div class="b-checkbox is-secondary">
                                <input id="checkbox-docs-1" class="styled" type="checkbox">
                                <label for="checkbox-docs-1"></label>
                            </div>
                        </td>
                        <td class="document-preview">
                            <span class="inner">

                                <a @click.prevent="previewAsset(item.file_id)">{{item.file_name}} </a>
                                <i class="material-icons">bookmark_border</i>
                            </span>
                        </td>
                         <td class="type">
                          <span class="inner">

                                <p>{{item.file_type}} </p>

                            </span>
                        </td>
                        <td class="created">
                              <p>{{item.file_date}} </p>
                        </td>

                        <td class="actions">
                            <document-list-dropdown />
                            <a href="#" class="button is-hidden"><i class="material-icons">remove_red_eye</i></a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocumentListDropdown from "@/components/Main/Pages/assets/Includes/document-list-dropdown";
import { getAllAssets } from "@/components/Main/Mixins/userAssetFetchMixin.js";
export default {
  name: "AssetTable",
  mixins: [getAllAssets],
  components: {
    DocumentListDropdown
  },
  methods: {
    previewAsset(i) {
      this.$router.push({path: `/documentPreview/${i}`});
      return;
    }
  },
};
</script>

<style scoped>
</style>
