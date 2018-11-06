<template>

  <div class="flex-card featured-feed-post light-bordered light-raised">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="card-body is-responsive">
      <main>
        <div class="post-body">
          <slot name="main"></slot>
        </div>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'pageHolder'
  };
</script>
