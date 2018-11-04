<template>
    <!-- Sidebar menu 1 -->
    <ul class="sidebar-menu is-active animated preFadeInRIght fadeInRight">
        <li class="have-children">
            <a class="parent-link" href="#">
                <span class="material-icons">dashboard</span>Dashboard</a>
            <ul>
                <li>
                    <a href="dashboard.html">Main layout</a>
                </li>
            </ul>
        </li>
    </ul>
    <!-- /Sidebar menu 1 -->
</template>

<script>
    export default {
      name: "pushChildMenu"
    };
</script>