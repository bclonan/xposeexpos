<template>
<div class="column is-7 is-hidden-mobile">
  <div class="flex-card light-bordered light-raised">
    <h3 class="card-heading has-icon">Projects overview <i class="sl sl-icon-settings"></i></h3>
    <table class="table project-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Name</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in updatesProjectOverviews" :key="item.id">
          <td><b>#{{ item.projectNumber }}</b></td>
          <td><a>{{ item.projectName }}</a></td>
          <td class="deadline">{{ item.projectDeadline }}</td>
          <td><span :class="item.projectStatusIcon">{{ item.projectStatus }}</span></td>
          <td><i class="material-icons">menu</i></td>
        </tr>

      </tbody>
    </table>
  </div>
</div>    
</template>

<script>
    export default {
        props: {
            updatesProjectOverviews: {
                type: Array,
                required: false
            }
        },
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style>
    
</style>