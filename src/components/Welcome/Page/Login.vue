<template>
  <section class=" hero   is-fullwidth">
    <NavBar :textcolor="textcolor" />
    <transition name="fade">
      <div v-if="performingRequest" class="loading">
        <p>Loading...</p>
      </div>
    </transition>

    <div class="columns is-fullheight" v-if="!typeSelected" style="min-height:100vh">
      <div class="column is-6" @click.stop="settype('vendor')" style="background-color:green;">
        <div class="section-title-wrapper" style="padding-top:50%">

          <h2 class="title light-text text-bold main-title is-2 has-text-centered">
            Exhibitor
          </h2>
          <h3 class="subtitle light-text has-text-centered is-4">
            Exhibitor
          </h3>
        </div>
      </div>
      <div class="column is-6 is-fullheight" @click.stop="settype('vendor')">
        <div class="section-title-wrapper" style="padding-top:50%">

          <h2 class="title dark-text text-bold main-title is-2 has-text-centered">
            Organizer
          </h2>
          <h3 class="subtitle has-text-centered is-4">
            Exhibitor
          </h3>
        </div>
      </div>

      <div class="content column is-6" style="background-color: blue;">
        <div class="column is-12">
          <div class="section-title-wrapper">

            <h2 class="title dark-text text-bold main-title is-2 has-text-centered">
              Organizer
            </h2>
            <h3 class="subtitle has-text-centered is-4">

            </h3>
          </div>
        </div>
      </div>
    </div>

    <section class="section" v-else>
      <div class="container">
        <div class="columns is-vcentered is-fullheight">
          <div class="column is-5 is-offset-4">
            <!-- Classic inputs -->
            <div id="classic" class="login-form-wrapper" :class="{ 'is-hidden': showForgotPassword }">
              <!-- Classic login form -->
              <form id="login-form" v-if="acttype" class="animated preFadeInLeft fadeInLeft" @submit.prevent="onSubmit">
                <div class="flex-card auth-card is-light-raised light-bordered card-overflow">
                  <div class="auth-card-header header-primary">
                    <router-link to="/"><img src="../../../styles/Main/images/logos/xyzlogo.png" alt="XYZ Leads"></router-link>
                  </div>
                  <!-- username-->
                  <div class="field pb-10" v-if="!isLogin">
                    <div class="control has-icons-right">
                      <AppControlInput :inputClass="inputClass" type="text" placeholder="Name" v-model="name"></AppControlInput>
                      <span class="icon is-medium is-right">
                        <i class="sl sl-icon-user"></i>
                      </span>
                    </div>
                  </div>
                  <!-- /username-->
                  <!-- username-->
                  <div class="field pb-10" v-if="!isLogin">
                    <div class="control has-icons-right">
                      <AppControlInput :inputClass="inputClass" type="text" placeholder="Username" v-model="username"></AppControlInput>
                      <span class="icon is-medium is-right">
                        <i class="sl sl-icon-user"></i>
                      </span>
                    </div>
                  </div>
                  <!-- /username-->
                  <!-- username-->
                  <!-- /username-->
                  <!-- email-->
                  <div class="field pb-10">
                    <div class="control has-icons-right">
                      <AppControlInput :inputClass="inputClass" type="email" placeholder="Email" v-model="email"></AppControlInput>
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
                    <AppButton class="no-account" type="button" btn-style="inverted" style="margin-left: 10px" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
                  </p>
                  <div class="pt-10 pb-10">
                    <AppButton class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh" type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
                  </div>
                </div>

              </form>
            </div>
            <!-- expo organizer login form -->
            <!-- expo organizer login form -->
            <!-- Vendor Login Form -->
            <!-- Vendor Login Form -->
            <!-- recover form-->
            <div class="login-form-wrapper" v-if="showForgotPassword">
              <form class="animated preFadeInLeft fadeInLeft" @submit.prevent="resetPassword" v-if="!passwordResetSuccess">
                <div class="flex-card auth-card is-light-raised light-bordered card-overflow">
                  <div class="auth-card-header header-primary">
                    <router-link to="/"><img src="../../../styles/Main/images/logos/xyzlogo.png" alt="XYZ Leads"></router-link>
                  </div>
                  <div class="field pb-10">
                    <div class="control has-icons-right">
                      <AppControlInput :inputClass="inputClass" type="email" placeholder="Email address" v-model="email"></AppControlInput>
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
          <!--/vendorlogin-->
          <!--expologin-->
          <!--/expologin-->
          <!-- /recover form-->
        </div>
        <div class="projects-list-wrapper">

          <div class="list-body">
            <div class="columns is-multiline">
              <div class="columns is-vcentered is-fullheight">
                <div class="column is-5 is-offset-4">
                  <!-- Classic inputs -->
                  <div id="classic" class="login-form-wrapper" :class="{ 'is-hidden': showForgotPassword }">
                    <!-- Classic login form -->
                    <form id="login-form" v-if="account_type === 'exhibitor'" class="animated preFadeInLeft fadeInLeft" @submit.prevent="onSubmit">
                      <div class="flex-card auth-card is-light-raised light-bordered card-overflow">
                        <div class="auth-card-header header-primary">
                          <router-link to="/"><img src="../../../styles/Main/images/logos/xyzlogo.png" alt="XYZ Leads"></router-link>
                        </div>
                        <!-- username-->
                        <div class="field pb-10" v-if="!isLogin">
                          <div class="control has-icons-right">
                            <AppControlInput :inputClass="inputClass" type="text" placeholder="Name" v-model="name"></AppControlInput>
                            <span class="icon is-medium is-right">
                              <i class="sl sl-icon-user"></i>
                            </span>
                          </div>
                        </div>
                        <!-- /username-->
                        <!-- username-->
                        <div class="field pb-10" v-if="!isLogin">
                          <div class="control has-icons-right">
                            <AppControlInput :inputClass="inputClass" type="text" placeholder="Username" v-model="username"></AppControlInput>
                            <span class="icon is-medium is-right">
                              <i class="sl sl-icon-user"></i>
                            </span>
                          </div>
                        </div>
                        <!-- /username-->
                        <!-- username-->
                        <!-- /username-->
                        <!-- email-->
                        <div class="field pb-10">
                          <div class="control has-icons-right">
                            <AppControlInput :inputClass="inputClass" type="email" placeholder="Email" v-model="email"></AppControlInput>
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
                        <div class="fieldpb-10" v-if="!isLogin">
                          <div class="control">
                            <ul>
                              <li class="mb-20">
                                <!-- Radio -->
                                <label class="radio-wrap is-accent">
                                  <input type="radio" class="b-radio" name="radio-group-3" value="organizer" v-model="account_type">
                                  <span></span>
                                  Expo Organizer
                                </label>
                                <!-- /Radio -->
                              </li>
                              <li class="mb-20">
                                <!-- Radio -->
                                <label class="radio-wrap is-accent">
                                  <input type="radio" class="b-radio" name="radio-group-3" value="exhibitor" v-model="account_type">
                                  <span></span>
                                  Exhibitor
                                </label>
                                <!-- /Radio -->
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h6 class="danger-text has-text-centered" v-if="feedback"> {{ feedback }}</h6>
                        <!-- /password -->
                        <p class="has-text-left pt-10 pb-10">
                          <a class="no-account" href="#">Dont have an account?</a>
                          <AppButton class="no-account" type="button" btn-style="inverted" style="margin-left: 10px" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
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
                  <!-- expo organizer login form -->
                  <!-- expo organizer login form -->
                  <!-- Vendor Login Form -->
                  <!-- Vendor Login Form -->
                  <!-- recover form-->

                </div>
                <!--/vendorlogin-->
                <!--expologin-->
                <!--/expologin-->
                <!-- /recover form-->
              </div>

            </div>
          </div>
        </div>
        <div class="columns is-vcentered is-fullheight">
          <div class="column is-2 is-offset-4">
            <p class="has-text-centered">
              <button @click="resetTypePicked" class="button">Switch Account Type</button>
            </p>
          </div>
          <div class="column is-2 is-offset-1">
            <p class="has-text-centered">
              <button @click="togglePasswordReset" class="button">Forgot Password</button>
            </p>
          </div>

        </div>
      </div>
    </section>

  </section>
</template>

<script>
  import NavBar from '@/components/Welcome/Includes/navbar/navbar.vue';

  import AppControlInput from '@/components/UI/Forms/AppControlInput.vue';
  import AppButton from '@/components/UI/Forms/AppButton.vue';
  // import slugify
  import slugify from 'slugify';
  import * as functions from 'firebase/functions';
  // import fbase db
  const fb = require('@/services/firebase/init.js');

  export default {
    name: 'AuthPage',
    data() {
      return {
        isLogin: true,
        email: null,
        username: null,
        name: null,
        password: null,
        inputClass: 'input is-large',
        feedback: null,
        slug: null,
        passwordResetSuccess: false,
        performingRequest: false,
        errorMsg: '',
        showForgotPassword: false,
        account_type: null,
        typeSelected: null,
        textcolor: 'color:grey'
      };
    },
    components: {
      AppControlInput,
      AppButton,
      functions,
      NavBar
    },
    methods: {
      settype(i) {
        this.account_type = i;
        this.typeSelected = !this.typeSelected;
        return;
      },
      resetTypePicked() {
        this.account_type = null;
        this.typeSelected = !this.typeSelected;
        return;
      },
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
              replacement: '-',
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
                this.feedback = 'Username taken';
              } else {
                // fb auth lib to create with email/pw
                fb.auth
                  .createUserWithEmailAndPassword(this.email, this.password)
                  .then(cred => {
                    this.$store.commit('setCurrentUser', cred.user);
                    // add aditional info for login
                    fb.usersCollection.doc(cred.user.uid).set({
                      username: this.username,
                      Name: this.name,
                      email: this.email,
                      photo: 'https://xyzleads.com/bulkitassets/6.svg',
                      bio: 'Let others know a little bit about you',
                      notificationSettings: {
                        busyMode: false,
                        hideEmail: false,
                        hideName: false,
                        pushNotify: false,
                        onlineStatus: 'is-online'
                      },
                      user_id: cred.user.uid,
                      jobTitle: 'Xyz Leader',
                      Company: '',
                      Department: '',
                      Position: '',
                      country: '',
                      facebook: '',
                      linkdin: '',
                      twitter: '',
                      phone: '',
                      account_type: this.account_type
                    });
                  })
                  .then(() => {
                    this.$store.dispatch('fetchUserProfile');
                    this.performingRequest = false;
                    this.$router.push('/main');
                  })
                  .catch(err => {
                    console.log(err);
                    this.performingRequest = false;
                    this.errorMsg = err.message;
                    this.feedback = err.message;
                  });
                this.performingRequest = false;
                this.feedback = 'Free to use';
              }
            });
          } else {
            this.feedback = 'All fields are required';
            this.performingRequest = false;
          }
        } else if (this.email && this.password) {
          this.performingRequest = true;
          fb.auth
            .signInWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              this.$store.commit('setCurrentUser', cred.user);
              this.$store.dispatch('fetchUserProfile');
              this.performingRequest = false;
              this.$router.push('/main');
            })
            .catch(err => {
              console.log(err);
              this.feedback = err.message;
              this.performingRequest = false;
              this.errorMsg = err.message;
            });
          this.feedback = null;
        } else {
          this.feedback = 'Please fill in both fields';
        }
      },
      resetPassword() {
        this.performingRequest = true;
        fb.auth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.performingRequest = false;
            this.passwordResetSuccess = true;
            this.email = '';
          })
          .catch(err => {
            console.log(err);
            this.performingRequest = false;
            this.errorMsg = err.message;
          });
      }
    },
    computed: {
      acttype() {
        let accttpe = this.account_type;
        let chker = false;
        if (accttpe === 'vendor') {
          return true;
        } else {
          return false;
        }
        return;
      }
    }
  };
</script>
<style scoped>
  @import url('../../../styles/Main/css/bulma.css');
  @import url('../../../styles/Main/css/app.css');
  @import url('../../../styles/Main/css/dashboard.css');
  @import url('../../../styles/Main/css/icons.min.css');
</style>
