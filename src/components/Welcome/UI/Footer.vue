<template>
  <footer class="footer footer-light-medium">
    <div class="container">
      <div class="columns">
        <!-- Column -->
        <div class="column is-4">
          <div class="pt-10 pb-10">
            <img class="small-footer-logo" src="assets/images/logos/bulkit-logo-g.png" alt="">
            <div class="footer-description pt-10 pb-10"></div>
          </div>
          <div>
            <span class="moto">Designed and coded with <i class="fa fa-heart color-red"></i> by XYZ Leads.</span>
            <div class="social-links pt-10 pb-10">
              <a href="#">
              <span class="icon"><i class="fa fa-facebook"></i></span>
              </a>
              <a href="#">
              <span class="icon"><i class="fa fa-twitter"></i></span>
              </a>
              <a href="#">
              <span class="icon"><i class="fa fa-linkedin"></i></span>
              </a>
              <a href="#">
              <span class="icon"><i class="fa fa-dribbble"></i></span>
              </a>
              <a href="#">
              <span class="icon"><i class="fa fa-github"></i></span>
              </a>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns">
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  XYZ Leads
                </li>
                <li class="column-item"><a href="#">Home</a></li>
                <li class="column-item"><a href="#">Pricing</a></li>
                <li class="column-item"><a href="#">Get started</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  Ressources
                </li>
                <li class="column-item"><a href="#">Learning</a></li>
                <li class="column-item"><a href="#">Support center</a></li>
                <li class="column-item"><a href="#">Frequent questions</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  Terms
                </li>
                <li class="column-item"><a href="#">Terms of Service</a></li>
                <li class="column-item"><a href="#">Privacy policy</a></li>
                <li class="column-item"><a href="#">SaaS services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style lang="scss" scoped>
    
$primary: #00edb1;
$secondary: #6EBDFF;
$accent: #7F00FF;

/* ==========================================================================
1. Theme gradient
========================================================================== */
$webkit-hero-gradient: linear-gradient(to right, $secondary, $accent);
$hero-gradient: linear-gradient(to top, $secondary, $accent);

/* ==========================================================================
2. Box shadows
========================================================================== */
//Base shadow
$base-shadow: rgba(0, 0, 0, 0.12);

//Primary box shadow
$primary-shadow-from: rgba(79, 193, 234, 0.42);
$primary-shadow-to: rgba(79, 193, 234, 0.2);
$primary-box-shadow:  0 14px 26px -12px $primary-shadow-from, 0 4px 23px 0px $base-shadow, 0 8px 10px -5px $primary-shadow-to !important;

//Secondary box shadow
$secondary-shadow-from: rgba(25, 104, 252, 0.42);
$secondary-shadow-to: rgba(25, 104, 252, 0.2);
$secondary-box-shadow:  0 14px 26px -12px $secondary-shadow-from, 0 4px 23px 0px $base-shadow, 0 8px 10px -5px $secondary-shadow-to !important;

//Accent box shadow
$accent-shadow-from: rgba(127, 0, 255, 0.42);
$accent-shadow-to: rgba(127, 0, 255, 0.2);
$accent-box-shadow:  0 14px 26px -12px $accent-shadow-from, 0 4px 23px 0px $base-shadow, 0 8px 10px -5px $accent-shadow-to !important;


/* ==========================================================================
3. Pageloader
========================================================================== */
.pageloader {
    background-color: $secondary;
    background: $hero-gradient !important;
}


$white: #fff;
$smoke-white: #fcfcfc;
$grey-white: #f2f2f2;
$grey-white-accent: #e2e2e2;
$command-grey: #fafbfc;
$light-grey: #EFF4F7;
$ultra-light-grey: #f7fcff;
$title-grey: #A9ABAC;
$blue-grey: #444F60;
$light-blue-grey: #98a9c3;
$medium-grey: #66676b;
$basaltic-grey: #878787;
$muted-grey: #999;
$section-grey: #fbfbfb;
$section-grey-accent: #efefef;
$background-grey: #f3f5f7;
$header-grey: #F5F9FC;
$default-input: #ccc;
$placeholder: #cecece;
$fade-grey: #ededed;
$sidebar: #344258;
$coal: #444444;
$grey-6: #666;
$grey-5: #555;
$grey-3: #333;
$cream-grey: #f6f4ff;
$icon-grey: #818a97;
$border-grey: #d4dadf;
$dashboard-grey: #f4f6fb;
$link-grey: #f5f5f5;

/* ==========================================================================
1. State colors
========================================================================== */

$red: #FF7273;
$blue: #039BE5;
$green: #00b289;
$orange: #eda514;

/* ==========================================================================
2. Social colors
========================================================================== */

$facebook: #3B5998;
$twitter: #1dcaff;
$linkedin: #007bb6;
$tumblr: #35465c;
$github: #444;
$dribbble: #ea4c89;
$google-plus: #d34836;
$youtube: #cc181e;
$reddit: #ff4500;


/* ==========================================================================
3. Predefined gradients
========================================================================== */

// Modal gradient
$modal-ga: #6a85b6;
$modal-gb: #bac8e0;

$webkit-modal-gradient: -webkit-linear-gradient(45deg, $modal-ga 0%, $modal-gb 100%);
$modal-gradient: linear-gradient(45deg, $modal-ga 0%, $modal-gb 100%);

// Coal
$coal-a: $blue-grey;
$coal-b: #444;

$webkit-coal-gradient: -webkit-linear-gradient(45deg, $coal-a, $coal-b); /* Chrome 10-25, Safari 5.1-6 */
$coal-gradient: linear-gradient(45deg, $coal-a, $coal-b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



/* ==========================================================================
4. Predefined box shadows
========================================================================== */

$base-shadow: rgba(0, 0, 0, 0.12);

//Orange box shadow
$orange-shadow-from: rgba(237, 165, 20, 0.42);
$orange-shadow-to: rgba(237, 165, 20, 0.2);
$orange-box-shadow:  0 14px 26px -12px $orange-shadow-from, 0 4px 23px 0px $base-shadow, 0 8px 10px -5px $orange-shadow-to !important;

//Green box shadow
$green-shadow-from: rgba(0, 178, 137, 0.42);
$green-shadow-to: rgba(0, 178, 137, 0.2);
$green-box-shadow:  0 14px 26px -12px $green-shadow-from, 0 4px 23px 0px $base-shadow, 0 8px 10px -5px $green-shadow-to !important;

//Red box shadow
$red-shadow-from: rgba(255, 114, 115, 0.42);
$red-shadow-to: rgba(255, 114, 115, 0.2);
$red-box-shadow:  0 14px 26px -12px $red-shadow-from, 0 4px 23px 0px $base-shadow, 0 8px 10px -5px $red-shadow-to !important;

//Blue box shadow
$blue-shadow-from: rgba(3, 155, 229, 0.42);
$blue-shadow-to: rgba(3, 155, 229, 0.2);
$blue-box-shadow:  0 14px 26px -12px $blue-shadow-from, 0 4px 23px 0px $base-shadow, 0 8px 10px -5px $blue-shadow-to !important;    
    
    
footer.footer-light {
    background: $white;
    color: $blue-grey;
    position: relative;
    .columns {
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .footer-logo {
        padding: 10px 0;
        img {
            height: 25px;
        }
    }
    .footer-column {
        .footer-header {
            padding: 10px 0;
            h3 {
                font-family: 'Nexa Bold', sans-serif;
                font-weight:400;
                font-size: 1.1rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 0 !important;
                color: $blue-grey;
            }
        }
        ul.link-list {
            line-height: 30px;
            font-size: 1rem;
            a {
                color: $light-blue-grey;
                font-weight: 400;
                transition: all 0.5s;
            }
            :hover {
                color: $primary;
            }
        }
        .level-item .icon {
            color: $muted-grey;
            transition: all 0.5s;
            i {
                font-size: 20px;
            }
            :hover {
                color: $secondary;
            }
        }
        .copyright {
            padding: 10px 0;
        }
    }
}


@media (max-width: 768px) {
    .footer-columns.is-flex-mobile {
        flex-wrap: wrap !important;
    }
}

/* ==========================================================================
2. Light left Footer
========================================================================== */
footer.footer-light-left {
    padding: 5rem 1.5rem !important;
    .footer-nav-right {
        display: flex;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        .footer-nav-link {
            margin: 0 10px;
            padding: 20px 0;
            color: $blue-grey !important;
            border-bottom: 2px solid transparent;
            &:hover {
                color: $muted-grey !important;
                border-bottom: 2px solid $muted-grey;
            }
            &.is-active {
                color: $primary !important;
                border-bottom: 2px solid $primary !important;
            }
        }

    }
    .level-item .icon {
        color: $placeholder;
        transition: all 0.5s;
        :hover {
            color: $primary;
        }
    }
    .moto {
        color: $muted-grey;
    }
}

//Mobile adjustment
@media (max-width: 768px) {
    .footer-nav-right {
        margin-top: 0 !important;
    }
}
    
</style>