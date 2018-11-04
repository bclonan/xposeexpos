<template>

<div class="column" >
 <!-- input component todo get  feedComments.feedCommentsColumnSize to decide what type of tasks and such can be added-->
  <div class="flex-card compose-card light-bordered light-raised is-flex is-start is-vcenter padding-10">
    <figure class="avatar image is-48x48 is-hidden-mobile">

    </figure>
    <div class="status-wrapper">
      <textarea class="textarea is-grow" rows="5" placeholder="Write something ..."></textarea>
    </div>
    <div class="icon-button">
      <i class="material-icons">cloud_upload</i>
    </div>
  </div>
   <!-- /input component todo -->
  <!-- post holder <component is="FeedPostAudio"/> v-for="item in userAssets" :key="userAssets.id" -->
  <section v-for="item in feed" :key="item.id">

       <span v-for="subItem in item.feedComments" :key="subItem.id" >
      <!-- todo fix <div>
        <FeedPostAudio v-if="subItem.feedComponent === 'FeedPostAudio'"
        :contentAttached="subItem.commentAudioContentsSrc"/>
       </div> -->
        <div>
        <FeedPostSimple v-if="subItem.feedComponent === 'FeedPostSimple'"
        :contentAttached="subItem.commentTextResponse"/>
       </div>
       <div>
        <FeedPostTask v-if="subItem.feedComponent === 'FeedPostTask'"
        :contentAttached="subItem.commentTaskContents"/>
       </div>
       <div>
        <FeedPostVideo v-if="subItem.feedComponent === 'FeedPostVideo'"
        :contentAttached="subItem.commentVideoContents"/>
       </div>
       <div>
        <FeedPostImage v-if="subItem.feedComponent === 'FeedPostImage'"
        :contentAttached="subItem.commentImageContents"/>
       </div>
       <!-- todo fix   <div>
        <FeedPostPdf v-if="subItem.feedComponent === 'FeedPostPdf'"
        :contentAttached="subItem.commentPdfContents"/>
       </div>-->
      </span>


</section>
                                         <div class="load-more-wrapper pt-20 pb-40 has-text-centered">
                                            <button class="button btn-dash is-fullwidth secondary-btn raised ripple rounded no-lh">Load more</button>
                                        </div>
</div>

</template>

<script>
// audio post
import FeedPostAudio from "@/components/FeedUI/FeedPostAudio.vue";
// Simple post
import FeedPostSimple from "@/components/FeedUI/FeedPostSimple.vue";
// task post
import FeedPostTask from "@/components/FeedUI/FeedPostTask.vue";
// video post
import FeedPostVideo from "@/components/FeedUI/FeedPostVideo.vue";
// image post
import FeedPostImage from "@/components/FeedUI/FeedPostImage.vue";
// pdf post
import FeedPostPdf from "@/components/FeedUI/FeedPostPdf.vue";

export default {
  props: {
    feed: {
      type: Array,
      required: false
    }
  },
  data() {
    return {};
  },
  components: {
    FeedPostAudio,
    FeedPostSimple,
    FeedPostTask,
    FeedPostVideo,
    FeedPostImage,
    FeedPostPdf
  }
};
</script>

<style>
</style>
