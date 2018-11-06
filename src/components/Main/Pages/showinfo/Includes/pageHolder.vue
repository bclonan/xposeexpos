<template>
  <div class="column is-9">
    <div class="flex-card featured-feed-post light-bordered light-raised">
      <header>
        <slot name="header"></slot>
      </header>
      <div class="card-body is-responsive">
        <main>

          <slot name="main"></slot>

        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'pageHolder'
  };
</script>
