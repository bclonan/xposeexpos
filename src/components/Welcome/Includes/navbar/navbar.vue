<template>
  <nav class="navbar navbar-wrapper is-transparent is-static">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link to="home" class="navbar-item">
          <img src="assets/images/logos/bulkit-blue.svg" alt="">
        </router-link>

        <!-- Responsive toggle -->
        <div class="custom-burger" data-target="is-static">
          <a class="responsive-btn" href="javascript:void(0);">
            <span class="menu-toggle">
              <span class="icon-box-toggle">
                <span class="rotate">
                  <i class="icon-line-top"></i>
                  <i class="icon-line-center"></i>
                  <i class="icon-line-bottom"></i>
                </span>
              </span>
            </span>
          </a>
        </div>
        <!-- /Responsive toggle -->
      </div>

      <!-- Navbar menu -->
      <div id="is-static" class="navbar-menu">
        <!-- Navbar Start -->
        <div class="navbar-start">
          <!-- Dropdown -->
          <router-link to="Howitworks" class="navbar-item is-slide is-centered-tablet">
            How it Works?
          </router-link>
          <!-- Navbar item -->
          <router-link to="features" class="navbar-item is-slide is-centered-tablet is-hidden-desktop is-hidden-tablet">
            Features
          </router-link>

        </div>

        <!-- Navbar end -->
        <div class="navbar-end">
          <!-- Navbar item -->

          <!-- Navbar item -->
          <router-link to="Browse" class="navbar-item is-slide is-centered-tablet">
            Browse
          </router-link>
          <router-link to="Contact" class="navbar-item is-slide is-centered-tablet" href="#">
            Contact
          </router-link>
          <!-- Signup button -->
          <div class="navbar-item is-button is-centered-tablet">
            <router-link to="login" class="button button-cta is-bold btn-align secondary-btn raised">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'TheNavbar',
    data() {
      return {};
    },
    components: {}
  };
</script>

<style>
</style>