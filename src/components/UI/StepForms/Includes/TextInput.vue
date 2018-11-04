<template>
  <div>


    <input type="text"
           :name="name"
           :value="value"
           @input="$emit('input',$event.target.value)"
           :placeholder="placeholder"
           :class="inputClass"
           >

  </div>
</template>
<script>
export default {
  name: "TextInput",
  props: ["placeholder", "label", "name", "value","inputClass"]
};
</script>
