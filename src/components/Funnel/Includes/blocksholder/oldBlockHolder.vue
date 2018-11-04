<template>
  <!-- pages -->
  <div class="columns is-element">
    <div class="column">
      <!-- Generic Page -->
      <div class="flat-card is-auto is-element-details" v-for="item in blockTypes" :key="item.id">
        <div class="columns is-gapless is-vcentered">
          <div class="column is-6 is-component">
            <img src="" alt="">
          </div>
          <div class="column is-6 is-description">
            <div class="inner">
              <h2 class="title is-3 is-light">{{ item.blockName }}</h2>
              <div class="divider"></div>
              <p>{{ item.blockDescription }}</p>
              <p>Includes</p>
              <ul v-for="subItem in item.blockSteps" :key="subItem.id">
                <li>{{ subItem.stepName }}</li>
              </ul>
              <br/>
              <a class="button feather-button is-medium secondary-button raised" @click.prevent="addNewStep(item)">Add to funnel</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /Generic Page -->
    </div>
  </div>
  <!-- /pages-->
</template>

<script>
export default {
  name: "blocksPages",
  data() {
    return {
      blockTypes: [
        {
          blockName: "Generic Page",
          blocktype: "gen_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepone: "A" }, { steptwo: "b" }, { stepthree: "c" }],
          blockChecklist: [
            { addPage: false },
            { addForm: false },
            { addImage: false }
          ],
          pageRequires: [
            { formElement: false },
            { introVideo: false },
            { salesPitch: false }
          ],
          pageReccomendations: {
            mailchimp: false,
            blog: false
          }
        },
        {
          blockName: "Download",
          blocktype: "download_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Opt In",
          blocktype: "optin_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Order Page",
          blocktype: "order_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Sales Page",
          blocktype: "sales_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Sales Video",
          blocktype: "salesVideo_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Calendar",
          blocktype: "calendar_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Survey",
          blocktype: "survey_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Upsell",
          blocktype: "upsell_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Webinar",
          blocktype: "webinar_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Webinar Replay",
          blocktype: "webinarReplay_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Blog Post",
          blocktype: "blogPost_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Members Area",
          blocktype: "membersArea_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Thank You",
          blocktype: "thankyou_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Popup",
          blocktype: "popup_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Promotion",
          blocktype: "promotion_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Event",
          blocktype: "event_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        },
        {
          blockName: "Limited Time Offer",
          blocktype: "lto_page",
          blockDescription: "Description",
          blockImage: "",
          blockSteps: [{ stepName: "A" }, { stepName: "b" }, { stepName: "c" }],
          blockChecklist: { addpage: false, settimelimit: false }
        }
      ]
    };
  },
  components: {},
  methods: {
    addNewStep(i) {
      this.$emit("stepSelected", i);
    }
  },
  computed: {}
};
</script>

<style>
</style>
