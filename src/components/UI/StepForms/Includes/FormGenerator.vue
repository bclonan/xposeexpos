<template>
<span>

    <component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"
               :value="formData[field.name]"

               :class="field.ClassExtras"
               @input="updateForm(field.name, $event)"
               v-bind="field">
    </component>

</span>
</template>

<script>
import NumberInput from "@/components/UI/StepForms/Includes/NumberInput";
import SelectList from "@/components/UI/StepForms/Includes/SelectList";
import TextInput from "@/components/UI/StepForms/Includes/TextInput";
export default {
  name: "FormGenerator",
  components: { NumberInput, SelectList, TextInput },
  props: ["schema", "value"],
  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
};
</script>
