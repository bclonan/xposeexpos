<template>
  <nav class="navbar navbar-wrapper is-transparent is-static" style="background-color:white;">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h1 class="title components-title is-3" style="color:red;">
            xposexpos
          </h1>

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

          <!-- Navbar item -->

        </div>

        <!-- Navbar end -->
        <div class="navbar-end">
          <!-- Navbar item -->

          <!-- Navbar item -->

          <router-link to="/Howitworks" class="navbar-item is-slide is-centered-tablet" style="color:grey;">
            <h1 class="title components-title is-6">
              How it works?
            </h1>

          </router-link>

          <router-link to="/Browse" class="navbar-item is-slide is-centered-tablet">
            <h1 class="title components-title is-6" style="color:blue;">
              Browse
            </h1>
          </router-link>
          <router-link to="/login" class="navbar-item is-slide is-centered-tablet" style="color:grey;">
            <h1 class="title components-title is-6">
              Login
            </h1>
          </router-link>
          <!-- Signup button -->

        </div>
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'TheNavbar',
    props: ['textcolor'],
    data() {
      return {};
    },
    components: {}
  };
</script>

<style>
</style>