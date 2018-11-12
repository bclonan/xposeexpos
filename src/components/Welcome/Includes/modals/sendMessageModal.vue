<template>

  <div id="horizontal-form-modal" class="modal modal-lg" v-if="activeModalOverlayToggled === 'sendMessageModal'" :class="[ activeModalOverlayToggled === 'sendMessageModal' ? 'is-active' : '']">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="flex-card simple-shadow">
        <div class="card-body">
          <h2 class="title is-4 text-bold mb-40">Create project</h2>
          <form>
            <div class="columns mt-40">
              <div class="column">
                <div class="control">
                  <label>Project ID</label>
                  <input class="input is-medium mt-5" type="text">
                </div>
                <div class="control">
                  <label>Project name</label>
                  <input class="input is-medium mt-5" type="text">
                </div>
              </div>
              <div class="column">
                <div class="control">
                  <label>Project category</label>
                  <input class="input is-medium mt-5" type="text">
                </div>
                <div class="control">
                  <label>Project type</label>
                  <input class="input is-medium mt-5" type="text">
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="control">
                  <textarea class="textarea is-grow" rows="5" placeholder="Enter a project description ..."></textarea>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button class="button btn-align no-lh raised accent-btn modal-dismiss">Create</button>
              <button class="button is-link no-lh modal-dismiss">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <button class="modal-close is-large is-hidden" @click="resetActiveModalOverlay" :class="[ activeModalOverlayToggled === 'sendMessageModal' ? 'is-large' : 'is-hidden']" aria-label="close"></button>
  </div>

</template>

<script>
  import { activeMessageModalMixin } from '@/components/Welcome/mixins/messageModalMixin.js';

  import { createCategory } from '@/components/Main/Mixins/fireFormSubmitMixin.js';

  export default {
    name: 'createCategorymodal',
    mixins: [activeMessageModalMixin, createCategory],
    data() {
      return {};
    }
  };
</script>

<style>
</style>
