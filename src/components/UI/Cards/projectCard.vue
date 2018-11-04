<template>

  <div class="column is-4">
    <div class="flex-card light-bordered light-shadow project-card card-overflow  hover-raised">
      <div class="header">
        <h3 class="no-margin-bottom title-bold">{{ item.projectName }}</h3>
        <!-- Task card dropdown -->
        <div
          class="dropdown is-right"
          @click.stop="toggleActive(item.id)"
          :class="{ 'is-active' : activeelement}"
          v-click-outside="closeAll">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              :aria-controls="item.id">
              <span class="material-icons">more_vert</span>
            </button>
          </div>
          <div
            class="dropdown-menu"
            role="menu"
            :id="item.id" >
            <div class="dropdown-content">
              <div class="dropdown-item">
                <p @click.stop="editProject(item)">Edit</p>
              </div>
              <div class="dropdown-item">
                <p @click.stop="ProjectStats(item.id)">Details</p>
              </div>
              <hr class="dropdown-divider">
              <div class="dropdown-item">
                <p @click.stop="deleteProject(item.id)">Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="progress-block">
        <progress class="progress is-xs is-blue" value="100" max="100">100%</progress>
        <div class="task-count">
          <span class="sl sl-icon-check"></span>
          <span>2/8</span>
        </div>
      </div>-->
    </div>

  </div>
</template>
<script>
export default {
  props: ['item', 'dropDownActiveItem'],
  data() {
    return {
      isActive: false,
    };
  },
  components: {},
  methods: {
    toggleActive(i) {
      this.$emit('toggleDropdown', i);
    },
    closeAll() {
      this.$emit('toggleDropdown', 'none');
    },
    editProject(i) {
      this.$emit('editProject', i);
    },
    projectStats(i) {
      this.$emit('projectStats', i);
    },
    deleteProject(i) {
      this.$emit('deleteProject', i);
    },
  },
  computed: {
    activeelement() {
      if (this.dropDownActiveItem == this.item.id) {
        return (this.isActive = true);
      }
      return (this.isActive = false);
    },
  },
};
</script>
<style>
</style>
