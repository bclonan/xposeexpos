<template>
<section class="hero is-fullheight is-light-grey is-bold brcol">
        <transition name="fade">
            <div v-if="performingRequest" class="loading">
                <p>Loading...</p>
            </div>
        </transition>
   <div class="hero-body">
      <div class="container">
         <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
               <!-- Classic inputs -->
               <div id="classic" class="login-form-wrapper" :class="{ 'is-hidden': showForgotPassword }">
                  <!-- Classic login form -->
                  <form id="login-form" class="animated preFadeInLeft fadeInLeft" @submit.prevent="onSubmit" >
                     <div class="flex-card auth-card is-light-raised light-bordered card-overflow">
                        <div class="auth-card-header header-primary">
                           <router-link to="/"><img src="../../../styles/Main/images/logos/xyzlogo.png" alt="XYZ Leads"></router-link>
                        </div>
                        <!-- username-->
                        <div class="field pb-10" v-if="!isLogin">
                           <div class="control has-icons-right">
                              <AppControlInput :inputClass="inputClass"  type="text" placeholder="Name" v-model="name"></AppControlInput>

                              <span class="icon is-medium is-right">
                              <i class="sl sl-icon-user"></i>
                              </span>
                           </div>
                        </div>
                        <!-- /username-->
                        <!-- username-->
                        <div class="field pb-10" v-if="!isLogin">
                           <div class="control has-icons-right">
                              <AppControlInput :inputClass="inputClass"  type="text" placeholder="Username" v-model="username"></AppControlInput>

                              <span class="icon is-medium is-right">
                              <i class="sl sl-icon-user"></i>
                              </span>
                           </div>
                        </div>
                        <!-- /username-->

                        <!-- email-->
                        <div class="field pb-10">
                           <div class="control has-icons-right">
                              <AppControlInput :inputClass="inputClass"  type="email" placeholder="Email" v-model="email"></AppControlInput>
                              <span class="icon is-medium is-right">
                              <i class="sl sl-icon-user"></i>
                              </span>
                           </div>
                        </div>
                        <!-- /email-->

                        <!-- password -->
                        <div class="field pb-10">
                           <div class="control has-icons-right">
                              <AppControlInput :inputClass="inputClass" type="password" placeholder="Password" v-model="password"></AppControlInput>
                              <span class="icon is-medium is-right">
                              <i class="sl sl-icon-lock"></i>
                              </span>
                           </div>
                        </div>
                         <h6 class="danger-text has-text-centered" v-if="feedback"> {{ feedback }}</h6>
                        <!-- /password -->
                        <p class="has-text-left pt-10 pb-10">
                           <a class="no-account" href="#">Dont have an account?</a>
                           <AppButton
                              class="no-account"
                              type="button"
                              btn-style="inverted"
                              style="margin-left: 10px"
                              @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
                        </p>
                        <div class="pt-10 pb-10">
                           <AppButton class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh" type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
                        </div>
                     </div>
                     <p class="has-text-centered">
                       <button @click="togglePasswordReset" class="button">Forgot Password</button>
                     </p>
                  </form>
               </div>
               <!-- recover form-->
             <div  class="login-form-wrapper" v-if="showForgotPassword">
                  <form  class="animated preFadeInLeft fadeInLeft" @submit.prevent="resetPassword" v-if="!passwordResetSuccess" >
                            <div class="flex-card auth-card is-light-raised light-bordered card-overflow">
                                <div class="auth-card-header header-primary">
                              <router-link to="/"><img src="../../../styles/Main/images/logos/xyzlogo.png" alt="XYZ Leads"></router-link>
                                </div>
                                <div class="field pb-10">
                           <div class="control has-icons-right">
                              <AppControlInput :inputClass="inputClass"  type="email" placeholder="Email address" v-model="email"></AppControlInput>
                              <span class="icon is-medium is-right">
                              <i class="sl sl-icon-paper-plane"></i>
                              </span>
                           </div>
                                </div>
                                <p class="has-text-left pt-10 pb-10">
                                    <a class="no-account" href="#">Need Support?</a>
                                </p>
                                <div class="pt-10 pb-10">
                                    <button class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh">Reset password</button>
                                      <AppButton class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh" type="submit">Reset</AppButton>
                                </div>
                            </div>


    </form>
                 <div v-else>
                        <h1>Email Sent</h1>
                        <p>check your email for a link to reset your password</p>

                    </div>
                      <p class="has-text-centered">
                                <button @click="togglePasswordReset" class="button">Back to login</button>
                            </p>
                        </div>
    </div>
                <!-- /recover form-->
            </div>
         </div>
      </div>


</section>
</template>

<script>
  import AppControlInput from "@/components/UI/Forms/AppControlInput.vue";
  import AppButton from "@/components/UI/Forms/AppButton.vue";
  // import slugify
  import slugify from "slugify";
  import * as functions from "firebase/functions";
  // import fbase db
  const fb = require("@/services/firebase/init.js");

  export default {
    name: "AuthPage",
    data() {
      return {
        isLogin: true,
        email: null,
        username: null,
        name: null,
        password: null,
        inputClass: "input is-large",
        feedback: null,
        slug: null,
        passwordResetSuccess: false,
        performingRequest: false,
        errorMsg: "",
        showForgotPassword: false
      };
    },
    components: {
      AppControlInput,
      AppButton,
      functions
    },
    methods: {
      // toggle between login and shor password
      togglePasswordReset() {
        this.showForgotPassword = !this.showForgotPassword;
      },
      onSubmit() {
        // check if user entered a username than slugify to format the input
        if (!this.isLogin) {
          this.performingRequest = true;
          if (this.username && this.name && this.email && this.password) {
            this.slug = slugify(this.username, {
              replacement: "-",
              remove: /[$*_+~.()'"!\-:@]/g,
              lower: true
            });
            // check if slug record exists already
            const checkAlias = fb.checkAliasfunc;
            checkAlias({
              slug: this.slug
            }).then(result => {
              // async function
              if (!result.data.unique) {
                this.feedback = "Username taken";
              } else {
                // fb auth lib to create with email/pw
                fb.auth
                  .createUserWithEmailAndPassword(this.email, this.password)
                  .then(cred => {
                    this.$store.commit("setCurrentUser", cred.user);
                    // add aditional info for login
                    fb.usersCollection.doc(cred.user.uid).set({
                      username: this.username,
                      Name: this.name,
                      email: this.email,
                      photo: "https://xyzleads.com/bulkitassets/6.svg",
                      bio: "Let others know a little bit about you",
                      notificationSettings: {
                        busyMode: false,
                        hideEmail: false,
                        hideName: false,
                        pushNotify: false,
                        onlineStatus: "is-online"
                      },
                      user_id: cred.user.uid,
                      jobTitle: "Xyz Leader",
                      Company: "",
                      Department: "",
                      Position: "",
                      country: "",
                      facebook: "",
                      linkdin: "",
                      twitter: "",
                      phone: ""
                    });
                  })
                  .then(() => {
                    this.$store.dispatch("fetchUserProfile");
                    this.performingRequest = false;
                    this.$router.push("/main");
                  })
                  .catch(err => {
                    console.log(err);
                    this.performingRequest = false;
                    this.errorMsg = err.message;
                    this.feedback = err.message;
                  });
                this.performingRequest = false;
                this.feedback = "Free to use";
              }
            });
          } else {
            this.feedback = "All fields are required";
            this.performingRequest = false;
          }
        } else if (this.email && this.password) {
          this.performingRequest = true;
          fb.auth
            .signInWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              this.$store.commit("setCurrentUser", cred.user);
              this.$store.dispatch("fetchUserProfile");
              this.performingRequest = false;
              this.$router.push("/main");
            })
            .catch(err => {
              console.log(err);
              this.feedback = err.message;
              this.performingRequest = false;
              this.errorMsg = err.message;
            });
          this.feedback = null;
        } else {
          this.feedback = "Please fill in both fields";
        }
      },
      resetPassword() {
        this.performingRequest = true;
        fb.auth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.performingRequest = false;
            this.passwordResetSuccess = true;
            this.email = "";
          })
          .catch(err => {
            console.log(err);
            this.performingRequest = false;
            this.errorMsg = err.message;
          });
      }
    }
  };
</script>
<style scoped>
  @import url("../../../styles/Main/css/bulma.css");
  @import url("../../../styles/Main/css/app.css");
  @import url("../../../styles/Main/css/dashboard.css");
  @import url("../../../styles/Main/css/icons.min.css");
</style>
