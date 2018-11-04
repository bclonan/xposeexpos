<template>
<div class="column">
  <nav class="level nav-level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5"><strong>Open</strong> Teams
        </p>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control no-margin-bottom"><input type="text" placeholder="Find a task" class="input"></p>
          <p class="control"><button class="button btn-align accent-btn raised">
            Search
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="level-right">
      <p class="level-item"><i class="sl sl-icon-grid is-icon-md"></i></p>
      <p class="level-item"><i class="sl sl-icon-user is-icon-md"></i></p>
      <p class="level-item"><i class="sl sl-icon-picture is-icon-md"></i></p>
      <p class="level-item"><i class="sl sl-icon-check is-icon-md"></i></p>
      <p class="level-item"><a class="button btn-align accent-btn raised">New task</a></p>
    </div>
  </nav>
  <table class="responsive-table is-primary mb-40">
    <tbody>
      <tr>
        <th>Logo</th>
        <th>Name</th>
        <th>Professions</th>
        <th>Size</th>
        <th>Focus</th>
        <th>Type</th>
        <!--<th>Price</th>-->
        <th>Actions</th>
      </tr>
      <tr v-for="item in collabGeneralInfo" :key="item.id">
        <td data-th="Logo">
          <figure class="image is-32x32"><img :src="item.collabLogo" alt="n"></figure>
        </td>
        <td data-th="Name">
         {{ item.collabName }}
        </td>
          <td data-th="Professions">
             <span v-for="subItem in item.collabProfessions" :key="subItem.id" class="tag squared" :class="subItem.professionClass">{{ subItem.professionTag }}</span>
          </td>
        <td data-th="Size">
          {{ item.collabMemberCount }}
        </td>
        <td data-th="Focus">
          <span v-for="subItemtwo in item.collabFocus" :key="subItemtwo.id" class="tag squared" :class="subItemtwo.focusClass">{{ subItemtwo.focusTag }}</span>

        </td>
        <td data-th="Type">
          {{ item.collabJoinType }}
        </td>
        <!--<td data-th="Price">
          <strong>{{ item.collabMembershipPrice }}</strong> {{ item.collabMembershipFrequency }}
        </td>-->
        <td data-th="Actions"><router-link  :to="item.collabPublicPage" class="button is-small btn-align primary-btn raised rounded btn-outlined">View</router-link></td>
      </tr>

    </tbody>
  </table>

</div>
</template>

<script>
export default {
  props: {
    collabGeneralInfo: {
      type: Array,
      required: false
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
