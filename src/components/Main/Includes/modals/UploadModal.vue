<template>
<div class="modal modal-md icon-action-modal modal-hero" v-if="activeModalOverlayToggled === 'UploadAssetModal'" :class="[ activeModalOverlayToggled === 'UploadAssetModal' ? 'is-active' : '']">
   <div class="modal-background scaleInCircle"></div>
   <div class="modal-content scaleIn">
      <div class="flex-card simple-shadow">
         <h2 class="dark-text">File Upload</h2>
         <div class="card-body">
            <div class="has-text-centered">
               <div class="image">
                  <img src="@/styles/Main/images/icons/folder.svg">
                        </div>

                  <div class="field">
                     <div class="control has-icons-left">
                        <input class="input is-medium" type="file" placeholder="Choose a File" style="display:none"
                                @change.stop="onFileSelected" ref="fileInput">

                            </div>
                     </div>
                     <h2 class="dark-text" v-if="uploadProgress">{{uploadProgress}}</h2>
                     <button type="button" class="button is-fullwidth is-bold raised mt-20 mb-20" style="color:black" v-else @click="$refs.fileInput.click()">Choose File</button>
                  </div>
               </div>
               <div class="modal-footer">
                  <div class="level">
                     <div class="level-left">
                        <div class="level-item"><button class="button modal-dismiss " @click="resetActiveModalOverlay">Cancel</button></div>
                     </div>
                     <div class="level-right">
                        <div class="level-item">

                           <button type="submit" class="button is-modal" @click="uploadNewFile" >Upload</button>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </div>
</template>

<script>
//Libs
import axios from 'axios';
//Components

//Mixins
import {
   activeModalToggle
} from "@/components/Main/Mixins/activeModalToggle.js";
import { uploadAsset } from "@/components/Main/Mixins/fireFormSubmitMixin.js";

export default {
   name: "UploadFileModal",
   mixins: [activeModalToggle, uploadAsset],
   data() {
      return {
         selectedFile: null,
         uploadProgress: null
      };
   },
};
</script>

<style>
</style>
