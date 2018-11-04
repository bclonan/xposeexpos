<template>
<!-- User directory tab -->
<div id="user-directory" class="navtab-content is-active">
    <div class="panel-title">
        <h3>USER DIRECTORY</h3>
        <i class="material-icons ml-auto">more_vert</i>
    </div>

    <!-- Seach field -->
    <div class="field">
        <div class="searchbox control has-icons-left">
            <input class="input" type="text" placeholder="Search users">
            <span class="icon is-left">
                <i class="sl sl-icon-magnifier"></i>
            </span>
        </div>
    </div>
    <!-- /Seach field -->

    <!-- User list -->
    <ol class="user-list">
        <!-- User -->
        <li class="quickview-trigger" data-quickview="chat-quickview">
            <div class="status-dot"></div>
            <img src="https://via.placeholder.com/250x250" alt="">
            <div class="user-status">
                <div class="name">Anthony Briggs</div>
                <div class="status">Offline</div>
            </div>
        </li>
    </ol>
    <!-- /User list -->
</div>
<!-- /User directory tab -->
</template>

<script>
    export default {
      name: "UserTab"
    };
</script>