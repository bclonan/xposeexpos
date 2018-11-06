<template>
  <component v-if="element.type === 'element'" :is="element.tagName" v-bind="attributes">
    <json-html v-for="element in element.children" :element="element" />
  </component>
  <span v-else>{{element.content}}</span>
</template>

<script>
export default {
  props: ['element'],
  computed: {
    attributes() {
      if (!this.element.attributes) return {}

      // Map attributes to a key => value object
      return this.element.attributes.reduce(
        (obj, attr) => {
          //Reducer
          obj[attr.key] = attr.value
          return obj
        },
        {}, // Initial empty object
      )
    },
  },
}
</script>
