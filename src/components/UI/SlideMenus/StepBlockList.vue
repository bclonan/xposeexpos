<template>
  <!-- Slide sidebar menu -->
  <ul
    id="dashboard-menu"
    class="sidebar-menu animated preFadeInRIght fadeInRight is-active">
    <li class="have-children"><div
      class="parent-link"
      @click="visible = !visible" ><span class="material-icons">dashboard</span>Dashboard</div>
      <ul>
        <li><a href="dashboard.html">Main layout</a></li>
        <li><a href="dashboard-blank.html">Blank page</a></li>
        <li><a href="dashboard-login.html">Login page</a></li>
      </ul>
    </li>
    <li class="have-children"><a
      class="parent-link"
      href="#"><span class="material-icons">insert_chart</span>Analytics</a>
      <ul>
        <li><a href="dashboard-chartjs.html">Chart js</a></li>
        <li><a href="dashboard-billboardjs.html">Billboard js</a></li>
        <li><a href="dashboard-peityjs.html">Peity js</a></li>
      </ul>
    </li>
    <li class="have-children"><a
      class="parent-link"
      href="#"><span class="material-icons">developer_board</span>Widgets</a>
      <ul>
        <li><a href="dashboard-widgets-data.html">Data widgets</a></li>
        <li><a href="dashboard-widgets-social.html">Social widgets</a></li>
      </ul>
    </li>
    <li class="have-children"><a
      class="parent-link"
      href="#"><span class="material-icons">view_agenda</span>Feed</a>
      <ul>
        <li><a href="dashboard-feed.html">Social feed</a></li>
        <li><a href="dashboard-feed-post.html">Post Item</a></li>
      </ul>
    </li>
    <li class="have-children"><a
      class="parent-link"
      href="#"><span class="material-icons">invert_colors</span>Styles</a>
      <ul>
        <li><a href="dashboard.html">Light sidebar</a></li>
        <li><a href="dashboard-dark-nav.html">Dark sidebar</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
</style>
