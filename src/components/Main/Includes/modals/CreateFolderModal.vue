<template>
   <!-- Create Project Modal -->
   <div class="modal modal-md icon-action-modal modal-hero" v-if="activeModalOverlayToggled === 'CreateFolderModal'"
      :class="[ activeModalOverlayToggled === 'CreateFolderModal' ? 'is-active' : '']">
      <div class="modal-background scaleInCircle"></div>
      <div class="modal-content scaleIn">
         <div class="flex-card simple-shadow">
            <h2 class="dark-text">New Folder</h2>
            <div class="card-body">
               <div class="has-text-centered">
                  <div class="image">
                     <img src="@/styles/Main/images/icons/folder.svg">
                  </div>
                  <div class="help-text has-text-left">Create a Folder to hold files</div>
                  <div class="help-text has-text-left" style="color:red;" v-if="feedback">{{feedback}}</div>
                  <div class="field">
                     <div class="control has-icons-left">
                        <form-generator :schema="schema"
                           v-model="formData">
                        </form-generator>
                        <span class="icon is-left">
                        <i class="fa fa-sticky-note"></i>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <div class="level">
                  <div class="level-left">
                     <div class="level-item"><button class="button modal-dismiss " @click="resetActiveModalOverlay">Cancel</button></div>
                  </div>
                  <div class="level-right">
                     <div class="level-item">
                        <button type="submit" class="button is-modal" @click="newFolder" >Create Folder</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";
import { newAssetFolder } from "@/components/Main/Mixins/fireFormSubmitMixin.js";

import FormGenerator from "@/components/UI/StepForms/Includes/FormGenerator.vue";
export default {
  name: "CreateFolderModal",
  mixins: [activeModalToggle, newAssetFolder],
  data() {
    return {
    };
  },
   components: { FormGenerator }
};
</script>
