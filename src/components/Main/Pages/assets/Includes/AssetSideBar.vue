<template>
  <div class="column is-3 is-hidden-mobile">
                                <div class="right-options">

                                     <button type="button" class="button button-cta secondary-btn is-fullwidth is-bold raised  mb-20" @click.prevent="setActiveModal('UploadAssetModal')">Upload files</button>

                                    <!-- Actions list -->
                                    <div  class="controls is-hidden">
                                        <a class="control-block">
                                            <i class="sl sl-icon-cloud-download"></i> Download
                                        </a>
                                        <a class="control-block">
                                            <i class="sl sl-icon-star"></i> Bookmark
                                        </a>
                                        <a class="control-block">
                                            <i class="sl sl-icon-pencil"></i> Rename
                                        </a>
                                        <a class="control-block">
                                            <i class="sl sl-icon-arrow-right-circle"></i> Move
                                        </a>
                                        <a class="control-block">
                                            <i class="sl sl-icon-docs"></i> Copy
                                        </a>
                                        <a class="control-block">
                                            <i class="sl sl-icon-eye"></i> Delete
                                        </a>
                                    </div>
                                    <!-- Actions list -->
                                    <div id="bulk-controls" class="controls is-hidden">
                                        <a class="control-block">
                                            <i class="sl sl-icon-arrow-right-circle"></i> Move
                                        </a>
                                        <a class="control-block">
                                            <i class="sl sl-icon-docs"></i> Copy
                                        </a>
                                        <a class="control-block">
                                            <i class="sl sl-icon-eye"></i> Delete
                                        </a>
                                    </div>
                                </div>
                                <div class="flex-card simple-shadow has-text-centered ">

                                    <div class="card-icon">

                                        <figure class="image is-square">
                                            <img src="../../../../../styles/Main/images/illustrations/icons/wallet.svg"
                                                alt="">
                                        </figure>
                                    </div>
                                    <div class="card-title mb-20">
                                        <h3>Earn on Xyz</h3>
                                    </div>
                                    <div class="card-feature-description mb-10">
                                        <span class="mb-10">Created something
                                            <strong>Awesome?</strong>
                                        </span>

                                    </div>
                                    <div class="card-feature-description mb-20">

                                        <span class="">List it on the Marketplace and start earning!</span>
                                    </div>
                                    <a class="button btn-align accent-btn raised mb-20">Earn now</a>

                                </div>

                            </div>

</template>

<script>
//Mixins
import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";

export default {
  name: "AssetSideBar",
  mixins: [activeModalToggle]
  //todo make mixin when file selected show single controls menu
};
</script>

<style scoped>
</style>
