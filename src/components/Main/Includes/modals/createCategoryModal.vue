<template>
  <!-- Create Project Modal -->
  <div class="modal modal-md icon-action-modal modal-hero" v-if="activeModalOverlayToggled === 'createCategorymodal'" :class="[ activeModalOverlayToggled === 'createCategorymodal' ? 'is-active' : '']">
    <div class="modal-background scaleInCircle"></div>
    <div class="modal-content scaleIn">
      <div class="flex-card simple-shadow">
        <h2 class="dark-text">New Category</h2>
        <div class="card-body">
          <div class="has-text-centered">
            <div class="image">
              <img src="@/styles/Main/images/icons/folder.svg">
            </div>
            <div class="help-text has-text-left">Category Name</div>

            <div class="field">
              <div class="control has-icons-left">
                <input class="input is-medium" type="text" placeholder="Tech Vendors" v-model="new_category_name">
                <span class="icon is-left">
                  <i class="fa fa-sticky-note"></i>
                </span>
              </div>
            </div>

            <div class="columns is-fieldset">
              <div class="column">
                <textarea class="textarea" rows="3" placeholder="a description about those exhibitors joining this category" v-model="new_category_description"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="button modal-dismiss">Cancel</button>
          <button type="submit" class="button is-modal" @click="addExpoCategory">Create Category</button>
        </div>
      </div>
    </div>
    <button @click="resetActiveModalOverlay" :class="[ activeModalOverlayToggled === 'createCategorymodal' ? 'is-large' : 'is-hidden']" aria-label="close"></button>
  </div>

</template>

<script>
  import { activeModalToggle } from '@/components/Main/Mixins/activeModalToggle.js';

  import { createCategory } from '@/components/Main/Mixins/fireFormSubmitMixin.js';

  export default {
    name: 'createCategorymodal',
    mixins: [activeModalToggle, createCategory],
    data() {
      return {};
    }
  };
</script>