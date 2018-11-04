<template>
  <div>
    <component v-for="(field, index) in schema" :key="index" :is="field.fieldType" :value="formData[field.name]" @input="updateForm(field.name, $event)" :wholearray="field" @selectedInput="selectedUpdateForm(field.name, $event, field)" v-bind="field">
    </component>
    <button v-for="item in currentOptions" :key="item.id" @click.prevent="optionAction(item.action)">{{item.text}}</button>

  </div>
</template>

<script>
import NumberInput from "@/components/forms/Includes/NumberInput";
import SelectList from "@/components/forms/Includes/SelectList";
import TextInput from "@/components/forms/Includes/TextInput";
export default {
  name: "StepFormGenerator",
  components: { NumberInput, SelectList, TextInput },
  props: ["schema", "value", "stepButtons", "currentStep", "currentOptions"],
  data() {
    return {
      formData: this.value || {},
      totScore: this.upScored || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    },
    selectedUpdateForm(fieldName, value, thefield) {
      var selectScore = event.target.selectedIndex;

      var upScored = thefield.optionsValues[selectScore];

      this.$set(this.formData, fieldName, value);
      this.$set(this.totScore, fieldName, upScored);
      //this.$emit("sdataup", this.sdata);
      this.$emit("update:foo", this.totScore);
      this.$emit("input", this.formData);
    },
    optionAction(i) {
      if (i === "save") {
        this.$emit("saveAction", i);
      } else {
        this.$emit("clickAction", i);
      }
    }
  }
};
</script>