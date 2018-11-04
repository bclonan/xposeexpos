<template>
  <div class="card card-floating-boxed card-shadow">
    <form @submit.prevent="onSave">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            :src="editedBio.photo"
            alt="">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <div class="field pb-10">
              <div class="control has-icons-right">
                <AppControlInput
                  type="text"
                  placeholder="Name"
                  v-model="editedBio.Name"
                  :input-class="inputClass"/>

              </div>
            </div>


          </div>
        </div>
        <div class="content">
          <div class="field">
            <div>
              <AppControlInput
                type="textarea"
                placeholder="Biography"
                v-model="editedBio.bio"
                :input-class="inputTextarea"/>

            </div>
          </div>
        </div>
        <div class="has-text-left">
          <AppButton
            class="button btn-align accent-btn raised"
            type="submit">Save</AppButton>
        </div>
      </div>
    </form>
    <AppButton
      class="button btn-align accent-btn raised"
      @click="onCancel">Cancel</AppButton>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/Forms/AppControlInput.vue';
import AppButton from '@/components/UI/Forms/AppButton.vue';
// import fbase db
const fb = require('@/services/firebase/init.js');

export default {
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    userData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      inputClass: 'input is-large',
      inputTextarea: 'textarea',
      editedBio: this.userData
        ? {
          ...this.userData,
        }
        : {
          Name: '',
          bio: '',
          user_id: '',
          photo: '',
        },
    };
  },
  methods: {
    onSave() {
      const colRef = fb.doc(this.cuUser.uid);
      const Name = this.editedBio.Name,
        bio = this.editedBio.bio,
        photo = this.editedBio.photo;
      colRef
        .update({ Name, bio, photo })
        .then(() => {
          //  console.log("Document successfully written!");
        })
        .catch(() => {
          // console.error("Error writing document: ", error);
        });
    },
    onCancel() {
      // biocancel
      //  this.$emit('biocancel', 'none');
    },
  },
  computed: {
    cuUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
