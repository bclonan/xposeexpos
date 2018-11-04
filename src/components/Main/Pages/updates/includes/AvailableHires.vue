<template>
<div class="column is-7 is-hidden-mobile">
  <div class="flex-card light-bordered light-raised">
    <h3 class="card-heading has-icon">XYZ Users Available for hire <i class="sl sl-icon-settings"></i></h3>
    <table class="table hire-table">
      <thead>
        <tr>
          <th></th>
          <th>Username</th>
          <th>Position</th>
          <th>Experience</th>
          <th>Skills</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in updatesHires" :key="item.id">
          <td><img :src="item.hireImage" alt="https://place-hold.it/250x250"></td>
          <td><a>{{ item.hireName }}</a></td>
          <td class="position">{{ item.hirePosition }}</td>
          <td class="experience">{{ item.hireExperience }}<span>{{ item.hireExperienceValue }}</span></td>
          <td>
             <span v-for="subItem in item.hireSkills" :key="subItem.id" class="tag squared " :class="subItem.hireSkillClass">{{ subItem.hireSkillTag}}</span> 
          </td>
          <td><button class="button is-small btn-align accent-btn raised rounded btn-outlined">Hire now</button></td>
        </tr>
 
      </tbody>
    </table>
  </div>
</div>   
</template>

<script>
    export default {
        props: {
            updatesHires: {
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