<template>
    <!-- Hero and Navbar -->
    <div class="hero is-fullheight is-theme-accent">

        <!-- Navbar partial -->
        <NavBar />

        <!-- Hero content -->
        <div class="hero-body ">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-6 is-offset-3 has-text-centered">
                        <h1 class="parallax-hero-title light-text">
                            Beyond the Booth.
                        </h1>
                        <h2 class="subtitle is-5 light-text">
                            get the most out of your expo experience.
                        </h2>
                        <br>
                        <p class="has-text-centered">

                            <input class="input rounded is-large" type="text" placeholder="Expo name, exhibitor, presentor name....">
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- /Hero and Navbar -->

</template>

<script>
    import NavBar from '@/components/Welcome/Includes/navbar/navbar.vue';
    export default {
      name: 'Hero',
      data() {
        return {};
      },
      components: {
        NavBar
      }
    };
</script>