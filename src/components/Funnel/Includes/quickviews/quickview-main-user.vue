<template>
<div class="shop-quickview has-background-image is-active" data-background="http://via.placeholder.com/1280x853">
    <div class="inner">
        <!-- Header -->
        <div class="quickview-header">
            <h2>Navigation</h2>
            <span id="close-shop-sidebar">
                <feather-icon type="x" :style="{stroke : 'white'}"></feather-icon>
            </span>
        </div>
        <!-- Shop menu -->
        <ul class="shop-menu">
            <li>
                <a href="shop.html">
                    <span>Settings</span>
                    <feather-icon type="settings" :style="{stroke : 'white'}"></feather-icon>
                </a>
            </li>
            <li>
                <a href="account.html">
                    <span>Steps</span>
                    <feather-icon type="layers" :style="{stroke : 'white'}"></feather-icon>
                </a>
            </li>
            <li>
                <a href="orders.html">
                    <span>Assets</span>
                    <feather-icon type="folder" :style="{stroke : 'white'}"></feather-icon>
                </a>
            </li>
            <li>
                <a href="wishlist.html">
                    <span>Export</span>
                    <feather-icon type="download-cloud" :style="{stroke : 'white'}"></feather-icon>
                </a>
            </li>
            <li>
                <a href="wishlist.html">
                    <span>Share</span>
                    <feather-icon type="share-2" :style="{stroke : 'white'}"></feather-icon>
                </a>
            </li>
        </ul>
        <!-- Profile image -->
        <ul class="user-profile">
            <li>
                <a href="account.html">
                    <img src="http://via.placeholder.com/250x250" alt="">
                    <span class="user">
                        <span>ELie Daniels</span>
                        <span>0 <small>Orders</small></span>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
      name: "QuickviewUser"
    };
</script>