<template>
<div class="post-item animated preFadeInLeft fadeInLeft">
   <div class="is-flex is-start is-vcenter padding-10">
      <img src="https://place-hold.it/250x250g" alt="" class="feed-avatar">
      <div class="item-title">Posted by <a href="#" class="ml-5">Marjory Cambell</a><br><span class="feed-time-small">45 minutes ago</span></div>
      <span class="item-menu"><i class="sl sl-icon-arrow-down"></i></span>
   </div>
   <div class="is-flex is-start is-vcenter">
      <div class="feed-image-container">
         <div class="soft-overlay"></div>
          <iframe width="100%" height="auto" :src="previewLink" allowfullscreen class="video"></iframe>
         <div class="social-fab">
            <div class="fab-wrapper"><button data-toggle="tooltip" data-placement="left" data-title="Like" data-original-title="" class="like fab-btn mini"><span class="like-wrapper"><i class="material-icons unliked">favorite_border</i><i class="material-icons liked">favorite</i><span class="like-overlay"></span></span></button><button data-toggle="tooltip" data-placement="top" data-title="Share" data-original-title="" class="share fab-btn mini ripple"><i class="material-icons">share</i></button><button data-toggle="tooltip" data-placement="top" data-title="Comment" data-original-title="" class="comment fab-btn mini ripple"><i class="material-icons">chat_bubble</i></button><button class="fab-btn pop-fab social-fab-trigger ripple"><span class="plus-toggle"><i class="material-icons">add</i></span></button></div>
         </div>
      </div>
   </div>
   <div class="is-flex is-start is-vcenter padding-10">
      <div class="is-flex is-start is-vcenter feed-item-footer">
         <div class="counter-block">
            <span class="im im-icon-Heart-2 im-footer"></span>
            <div class="rating-counter small">31</div>
         </div>
         <div class="counter-block">
            <span class="im im-icon-Speach-Bubble11 im-footer"></span>
            <div class="rating-counter small">5</div>
         </div>
         <div class="counter-block">
            <span class="sl sl-icon-paper-clip im-footer"></span>
            <div class="rating-counter small">1</div>
         </div>
      </div>
      <span class="like-icon liked"></span>
   </div>
</div>
</template>

<script>
export default {
  props: {
    contentAttached: {
      type: Array,
      default() {
        return { contentAttached: false };
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
</style>
