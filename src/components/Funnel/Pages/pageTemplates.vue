<template>
  <div class="section">
        <!-- Container -->
        <div class="container">
          <!-- Elements Grid -->
          <div class="columns category-header">
            <div class="column is-10 is-offset-1 is-tablet-landscape-padded">
              <!-- Title -->
              <div class="category-title">
                <!-- Main Title -->
                <h2 >BUILDING BLOCKS</h2>
                <!-- Elements Titles -->
                <h2  class="element-title is-hidden">PAGES</h2>
                <h2  class="element-title is-hidden">EMAIL</h2>
                <h2  class="element-title is-hidden">TRAFFIC</h2>
                <h2  class="element-title is-hidden">BOTS</h2>
                <h2  class="element-title is-hidden">PLACEHOLDER</h2>
                <h2  class="element-title is-hidden">PLACEHOLDER</h2>
                <h2  class="element-title is-hidden">PLACEHOLDER</h2>
                <h2  class="element-title is-hidden">PLACEHOLDER</h2>
                <!-- Back to selection -->
                <a  class="button feather-button is-small primary-button raised elements-back" @click.prevent="backToMain" v-if="showBlocks">Back</a>
                <!-- Filigrane logo -->
                <img class="brand-filigrane" src="" alt="">
              </div>
              <div class="is-categories-grid">
                <div class="columns is-multiline" v-show="mainActive">
                  <!-- Inputs -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">PAGES</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a class="button feather-button primary-button is-small raised rounded" data-element="inputs" @click.prevent="switchTab('blocksPages')">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Select boxes -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">ATTRACT</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a href="javascript:void(0);" class="button feather-button primary-button is-small raised rounded" data-element="selects">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Autocomplete -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">SOURCES</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a href="javascript:void(0);" class="button feather-button primary-button is-small raised rounded" data-element="autocompletes">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Spinner -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">Spinner</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a href="javascript:void(0);" class="button feather-button primary-button is-small raised rounded" data-element="spinners">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Datepicker -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">Datepicker</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a href="javascript:void(0);" class="button feather-button primary-button is-small raised rounded" data-element="datepicker">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Cards -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">Cards</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a href="javascript:void(0);" class="button feather-button primary-button is-small raised rounded" data-element="cards">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Tabs -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">Tabs</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a href="javascript:void(0);" class="button feather-button primary-button is-small raised rounded" data-element="tabs">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Buttons -->
                  <div class="column is-4">
                    <div class="flat-card is-auto is-element-card">
                      <div class="inner has-text-centered">
                        <h3 class="element-card-title">Buttons</h3>
                        <img src="" alt="">
                        <div class="view-element">
                          <a href="javascript:void(0);" class="button feather-button primary-button is-small raised rounded" data-element="buttons">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Selection -->
                <!-- Components -->
                <component :is="activeBlocks" v-if="showBlocks" @stepSelected="addNewStep($event)"></component>
              <!-- /Components -->
              </div>
            </div>
          </div>
          <!-- /Elements Grid -->
        </div>
        <!-- /Container -->
      </div>
</template>

<script>
import blocksPages from "@/components/Funnel/Includes/blocksholder/oldBlockHolder.vue";

const fb = require("@/services/firebase/init.js");

export default {
  name: "stepQuickview",
  data() {
    return {
      activeBlocks: "blocksPages",
      mainActive: true,
      showBlocks: false,
      // foradding
      stepCount: 0,
      // cookiebackup
      fidcook: null,
      fversioncook: null,
      rfid: null,
      rvid: null
    };
  },
  components: {
    blocksPages
  },
  methods: {
    switchTab(i) {
      this.activeBlocks = i;
      this.mainActive = !this.mainActive;
      this.showBlocks = !this.showBlocks;
    },
    backToMain() {
      this.mainActive = !this.mainActive;
      this.showBlocks = !this.showBlocks;
    }
  }
};
</script>

<style scoped>
</style>