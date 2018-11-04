<template>
<!-- Messages dropdown (hidden on mobile) -->
<div class="navbar-item drop-pop is-centered nav-icon" @click="activeDisplayToggle">
    <a href="#" class="nav-inner">
        <i class="sl sl-icon-envelope-open"><span class="new-circle gelatine"></span></i>
    </a>
    <div class="drop-wrapper emails-drop" :style="{ display: activeDisplay }">
        <div class="drop-inner has-arrow" v-if="activeDisplay === 'block'" v-click-outside="ClickedOutside">
            <div class="emails-header has-text-centered">
                <h3>Messages</h3>
            </div>
            <div class="emails-body">
                <ul class="emails-list">
                    <li>
                        <img src="https://via.placeholder.com/250x250" alt="">
                        <div class="email-content">

                            <div class="email-text">
                                <div class="text">
                                    Hello, after our last meetings, it seems that some goals were...
                                </div>
                                <!--div class="timestamp">
                                    Nov 09, 14:18
                                </div-->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Messages dropdown -->
</template>

<script>
    import { displayBlockMixin } from "@/components/Main/Mixins/displayBlockMixin.js";
    export default {
      name: "MessagesDropdown",
      mixins: [displayBlockMixin],
      data() {
        return {
          messageStyle: {
            color: "red",
            fontSize: "13px"
          }
        };
      }
    };
</script>