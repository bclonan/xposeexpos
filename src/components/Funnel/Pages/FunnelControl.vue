<template>
<div class="section">
        <!-- Container -->
        <div class="container">

            <!-- Account Layout -->
            <div class="columns account-header">
                <div class="column is-10 is-offset-1 is-tablet-landscape-padded">
                    <!-- Title -->
                    <div class="account-title">
                        <h2>ACCOUNT</h2>
                        <img class="brand-filigrane" src="assets/images/logo/nephos-greyscale.svg" alt="">
                    </div>

                    <!-- Account tabs -->
                    <div class="tabs account-tabs">
                        <ul>
                            <li @click="setTheActiveTab('myFunnel')" :class="[ isTabActiveNow === 'myFunnel' ? 'is-active' : '']"><a >Details</a></li>
                            <li @click="setTheActiveTab('mySteps')" :class="[ isTabActiveNow === 'mySteps' ? 'is-active' : '']"><a >Steps</a></li>
                            <li @click="setTheActiveTab('myIntegrations')" :class="[ isTabActiveNow === 'myIntegrations' ? 'is-active' : '']"><a>Integrations</a></li>
                            <li @click="setTheActiveTab('myAssets')" :class="[ isTabActiveNow === 'myAssets' ? 'is-active' : '']"><a>Assets</a></li>
                        </ul>
                    </div>

                    <!-- funnel Details Tab -->
                    <div class="columns is-account-grid is-multiline" :class="[ isTabActiveNow === 'myFunnel' ? '' : 'hiddenTab']">

                        <div class="column is-5">
                            <!-- User card -->
                            <div class="flat-card profile-card is-auto">
                                <div class="card-body">
                                    <div class="profile-image">
                                        <img src="http://via.placeholder.com/250x250" alt="">
                                    </div>
                                    <div class="username has-text-centered">
                                        <span>Elie Daniels</span>
                                        <small>Member since Sep 23 2017</small>
                                    </div>
                                </div>
                                <div class="profile-footer has-text-centered">
                                    <span class="achievement-title">Next Achievement</span>
                                    <div class="count">
                                        24/150
                                    </div>
                                </div>
                            </div>
                            <!-- Gold Customer card -->
                            <div class="flat-card profile-info-card is-auto is-dark is-achievement">
                                <div class="card-body">
                                    <img src="assets/images/logo/nephos-gold.svg" alt="">
                                    <div class="achievement-name">
                                        <span class="is-gold">Nephos Gold Customer</span>
                                        <span>As a Gold Customer, you have a permanent 10% discount on all your purchases.</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Referal card -->
                            <div class="flat-card profile-info-card is-auto is-dark is-achievement">
                                <div class="card-body">
                                    <img src="assets/images/logo/nephos-referral.svg" alt="">
                                    <div class="achievement-name">
                                        <span class="is-green">Nephos Referer</span>
                                        <span>You have referred <b>30+</b> customers. You get a 2.5% discount on all your purchases.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Details -->
                        <div class="column is-7">
                            <div class="flat-card profile-info-card is-auto">
                                <!-- Title -->
                                <div class="card-title">
                                    <h3>Account details</h3>

                                    <div class="edit-account has-simple-popover popover-hidden-mobile" data-content="Edit Account" data-placement="top">
                                        <a href="account-edit.html"><i class="feather-icons" data-feather="settings"></i></a>
                                    </div>
                                </div>
                                <!-- Contact Info -->
                                <div class="card-body">
                                    <div class="columns">
                                        <div class="column is-6">
                                            <div class="info-block">
                                                <span class="label-text">First Name</span>
                                                <span class="label-value">Elie</span>
                                            </div>

                                            <div class="info-block">
                                                <span class="label-text">Email</span>
                                                <span class="label-value">eliedaniels@gmail.com</span>
                                            </div>
                                        </div>

                                        <div class="column is-6">
                                            <div class="info-block">
                                                <span class="label-text">Last Name</span>
                                                <span class="label-value">Daniels</span>
                                            </div>

                                            <div class="info-block">
                                                <span class="label-text">Phone</span>
                                                <span class="label-value">+1 555 623 568</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Background Nephos Icon -->
                                <img class="card-bg" src="assets/images/logo/nephos-greyscale.svg" alt="">
                            </div>

                            <!-- Address Info -->
                            <div class="flat-card profile-info-card is-auto">
                                <!-- Title -->
                                <div class="card-title">
                                    <h3>Billing address</h3>
                                    <!-- Cog Button -->
                                    <div class="edit-account is-vhidden">
                                        <a href="account-edit.html"><i class="feather-icons" data-feather="settings"></i></a>
                                    </div>

                                </div>
                                <!-- Billing Address -->
                                <div class="card-body">
                                    <div class="columns">
                                        <div class="column is-6">
                                            <div class="info-block">
                                                <span class="label-text">Number</span>
                                                <span class="label-value">23, Block C2</span>
                                            </div>

                                            <div class="info-block">
                                                <span class="label-text">City</span>
                                                <span class="label-value">Los Angeles</span>
                                            </div>

                                            <div class="info-block">
                                                <span class="label-text">State</span>
                                                <span class="label-value">CA</span>
                                            </div>
                                        </div>

                                        <div class="column is-6">
                                            <div class="info-block">
                                                <span class="label-text">Street</span>
                                                <span class="label-value">Church Street</span>
                                            </div>

                                            <div class="info-block">
                                                <span class="label-text">Postal Code</span>
                                                <span class="label-value">100065</span>
                                            </div>

                                            <div class="info-block">
                                                <span class="label-text">Country</span>
                                                <span class="label-value">United States</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /Address Form -->
                            </div>
                        </div>
                    </div>
                    <!-- funnels steps tab -->
                    <div class="columns is-account-grid is-multiline" :class="[ isTabActiveNow === 'mySteps' ? '' : 'hiddenTab']">
                                <!-- Wishlists -->
                                <div class="column is-4">
                                    <!-- List of Wishlists -->
                                    <div class="flat-card is-auto menu-card">
                                        <div class="card-title">
                                            <h3>Add Wishlist</h3>
        
                                            <div class="edit-account">
                                                <a href="javascript:void(0);" class="modal-trigger has-simple-popover" data-modal="new-wishlist" data-content="Add a New Wishlist" data-placement="top"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus feather-icons"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></a>
                                            </div>
                                        </div>
                                        <ul class="wishlists">
                                            <li class="is-active"><a>Main List</a></li>
                                            <li><a>Couches</a></li>
                                            <li><a>Tables</a></li>
                                            <li><a>Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div class="column is-8">
                                    <div class="flat-card wishlist-card is-auto">
                                        <!-- List of Wishlist Items -->
                                        <ul class="wishlist">
        
                                            <!-- Wishlist Item -->
                                            <li class="wishlist-item" onclick="return true">
                                                <div class="item-wrapper">
                                                    <!-- Product Image -->
                                                    <img src="assets/images/products/office6.png" alt="">
                                                    <!-- Product meta -->
                                                    <span class="product-info">
                                                        <span>The Conqueror</span>
                                                        <span>Office</span>
                                                    </span>
                                                    <div class="action">
                                                        <!-- Dropdown button -->
                                                        <div class="dropdown is-right">
                                                            <span class="dropdown-trigger">
                                                                <span class="dropdown-button">
                                                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down feather-icons"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                                </span>
                                                            </span>
                                                            <!-- Dropdown menu-->
                                                            <div class="dropdown-menu" role="menu">
                                                                <div class="dropdown-content">
                                                                    <!-- Dropdown item -->
                                                                    <a href="#" class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list feather-icons"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg> <span>Move to List</span>
                                                                    </a>
                                                                    <!-- Dropdown item -->
                                                                    <a class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye feather-icons"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> <span>View Product</span>
                                                                    </a>
                                                                    <!-- Dropdown item -->
                                                                    <a href="#" class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart feather-icons"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> <span>Add to Cart</span>
                                                                    </a>
                                                                    <hr class="dropdown-divider">
                                                                    <!-- Dropdown item -->
                                                                    <a href="#" class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x feather-icons"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> <span>Remove</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
        
                                            <!-- Wishlist Item -->
                                            <li class="wishlist-item" onclick="return true">
                                                <div class="item-wrapper">
                                                    <img src="assets/images/products/office7.gif" alt="">
                                                    <span class="product-info">
                                                        <span>The Gentleman</span>
                                                        <span>Office</span>
                                                    </span>
                                                    <div class="action">
                                                        <div class="dropdown is-right">
                                                            <span class="dropdown-trigger">
                                                                <span class="dropdown-button">
                                                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down feather-icons"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                                                                </span>
                                                            </span>
                                                            <div class="dropdown-menu" role="menu">
                                                                <div class="dropdown-content">
                                                                    <a href="#" class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list feather-icons"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg> <span>Move to List</span>
                                                                    </a>
                                                                    <a class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye feather-icons"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> <span>View Product</span>
                                                                    </a>
                                                                    <a href="#" class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart feather-icons"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> <span>Add to Cart</span>
                                                                    </a>
                                                                    <hr class="dropdown-divider">
                                                                    <a href="#" class="dropdown-item">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x feather-icons"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> <span>Remove</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
        
                                        </ul>
                                    </div>
        
                                    <!-- List Pagination -->
                                    <div class="wishlist-pagination">
                                        <ul>
                                            <li class="is-active"><span>1</span></li>
                                            <li><span>2</span></li>
                                            <li><span>3</span></li>
                                            <li><span>4</span></li>
                                        </ul>
                                    </div>
                                    <!-- /List Pagination -->
                                </div>
                            </div>
<!-- funnels integrations tab -->
<div class="columns is-account-grid is-multiline" :class="[ isTabActiveNow === 'myIntegrations' ? '' : 'hiddenTab']">
                                <!-- Product list -->
                                <div class="column is-12">
                                    <!-- Product -->
                                    <div class="flat-card is-auto cart-card">
                                        <ul class="cart-content">
                                            <li>
                                                <img src="assets/images/products/office6.png" alt="">
                                                <span class="product-info">
                                                    <span>The Conqueror</span>
                                                    <span>Office</span>
                                                </span>
                                                <span class="product-price">
                                                    <span>Price</span>
                                                    <span>385,00</span>
                                                </span>
        
                                                <span class="product-quantity">
                                                    <span>Qty</span>
                                                    <span class="control">
                                                        <input class="input" type="number" value="1">
                                                    </span>
                                                </span>
        
                                                <span class="action">
                                                    <span class="action-link is-like has-simple-popover" data-content="Add to Wishlist" data-placement="top" data-target="webuiPopover4">
                                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart feather-icons"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
                                                    </span>
                                                    <span class="action-link is-remove has-simple-popover" data-content="Remove from Cart" data-placement="top" data-target="webuiPopover5">
                                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x feather-icons"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                  
                                </div>
                            </div>
                <!-- Funnel Asset Tab -->
                <div class="columns is-account-grid is-multiline" :class="[ isTabActiveNow === 'myAssets' ? '' : 'hiddenTab']">
                                <!-- Order card -->
                                <div class="column is-4">
                                    <div class="flat-card order-card has-popover-top" data-target="webuiPopover0">
                                        <div class="order-info">
                                            <span><a href="invoice.html" onclick="return true">ORDER-46895</a></span>
                                            <span class="tag is-primary">Shipping</span>
                                        </div>
                                        <!-- Progress Circle -->
                                        <div class="circle-chart-wrapper">
                                            <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle class="circle-chart-background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                                <circle class="circle-chart-circle" stroke="#0023ff" stroke-width="2" stroke-dasharray="66,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                            </svg>
                                            <!-- Icon -->
                                            <div class="chart-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                            </div>
                                            <!-- Label -->
                                            <div class="ring-title has-text-centered">
                                                <span>66% Complete</span>
                                            </div>
                                        </div>
                                    </div>
        
                                    <!-- Order 46895 Popover -->
                                    
                                </div>
        
                                <!-- Order card -->
                                <div class="column is-4">
                                    <div class="flat-card order-card has-popover-top" data-target="webuiPopover1">
                                        <div class="order-info">
                                            <span><a href="invoice.html">ORDER-46878</a></span>
                                            <span class="tag is-success">Preparing</span>
                                        </div>
                                        <!-- Progress Circle -->
                                        <div class="circle-chart-wrapper">
                                            <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle class="circle-chart-background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                                <circle class="circle-chart-circle" stroke="#00b289" stroke-width="2" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                            </svg>
                                            <!-- Icon -->
                                            <div class="chart-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line></svg>
                                            </div>
                                            <!-- Label -->
                                            <div class="ring-title has-text-centered">
                                                <span>33% Complete</span>
                                            </div>
                                        </div>
                                    </div>
        
                                    <!-- Order 46878 Popover -->
                                    
                                </div>
        
                                <!-- Order card -->
                                <div class="column is-4">
                                    <div class="flat-card order-card has-popover-top" data-target="webuiPopover2">
                                        <div class="order-info">
                                            <span><a href="invoice.html" class="is-disabled">ORDER-42135</a></span>
                                            <span class="tag is-warning">Pending</span>
                                        </div>
                                        <!-- Progress Circle -->
                                        <div class="circle-chart-wrapper">
                                            <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle class="circle-chart-background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                                <circle class="circle-chart-circle" stroke="#eda514" stroke-width="2" stroke-dasharray="10,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                            </svg>
                                            <!-- Icon -->
                                            <div class="chart-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                            </div>
                                            <!-- Label -->
                                            <div class="ring-title has-text-centered">
                                                <span>10% Complete</span>
                                            </div>
                                        </div>
                                    </div>
        
                                    <!-- Order 42135 Popover -->
                                    
                                </div>
        
                                <!-- Order card -->
                                <div class="column is-4">
                                    <div class="flat-card order-card has-popover-top">
                                        <div class="order-info">
                                            <span><a href="invoice.html">ORDER-39456</a></span>
                                            <span class="tag is-danger">Has issue</span>
                                        </div>
                                        <!-- Progress Circle -->
                                        <div class="circle-chart-wrapper">
                                            <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle class="circle-chart-background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                                <circle class="circle-chart-circle" stroke="#FF7273" stroke-width="2" stroke-dasharray="40,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                            </svg>
                                            <!-- Icon -->
                                            <div class="chart-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
                                            </div>
                                            <!-- Label -->
                                            <div class="ring-title has-text-centered">
                                                <span>40% Complete</span>
                                            </div>
                                        </div>
                                    </div>
        
                                    <!-- Order 39456 Popover -->
                                    <div class="webui-popover-content">
                                        <!-- Popover Block -->
                                        <div class="popover-flex-block">
                                            <img class="staff-avatar" src="assets/images/avatars/janet.jpg" alt="">
                                            <div class="content-block">
                                                <label>Order handled by</label>
                                                <span>Janet Smith</span>
                                            </div>
                                        </div>
                                        <!-- Popover Block -->
                                        <div class="popover-flex-block">
                                            <div class="icon-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            </div>
                                            <div class="content-block">
                                                <label>Ordered on</label>
                                                <span>feb 19th 2018</span>
                                            </div>
                                        </div>
                                        <!-- Popover Block -->
                                        <div class="popover-flex-block">
                                            <div class="icon-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                            </div>
                                            <div class="content-block">
                                                <label>Order Total</label>
                                                <span>$219,22</span>
                                            </div>
                                        </div>
                                        <!-- Popover Block -->
                                        <div class="popover-flex-block">
                                            <div class="icon-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                            </div>
                                            <div class="content-block">
                                                <label>Shipping Method</label>
                                                <span>FedEx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <!-- Order card -->
                                <div class="column is-4">
                                    <div class="flat-card order-card has-popover-top" data-target="webuiPopover4">
                                        <div class="order-info">
                                            <span><a href="invoice.html">ORDER-38246</a></span>
                                            <span class="tag is-primary">Complete</span>
                                        </div>
                                        <!-- Progress Circle -->
                                        <div class="circle-chart-wrapper">
                                            <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle class="circle-chart-background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                                <circle class="circle-chart-circle" stroke="#0023ff" stroke-width="2" stroke-dasharray="100,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                            </svg>
                                            <!-- Icon -->
                                            <div class="chart-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                            </div>
                                            <!-- Label -->
                                            <div class="ring-title has-text-centered">
                                                <span>100% Complete</span>
                                            </div>
                                        </div>
                                    </div>
        
                                    <!-- Order 38246 Popover -->
                                    
                                </div>
                            </div>
                
                
                
                
                
                </div>
            </div>
        </div>
        <!-- /Container -->
    </div>
</template>

<script>
import { activeTabMixin } from "@/components/Main/Mixins/activeTabMixin.js";

export default {
  name: "FunnelControl",
  mixins: [activeTabMixin],
  data() {
    return {
      activeTabChosen: "myFunnel"
    };
  }
};
</script>

<style scoped>
.hiddenTab {
  display: none;
}
</style>