<template>
  <div class="blockProperties">
    <h2>Node Type</h2>
    <div>
      <select>
        <option
          v-for="(value, tag) in htmlTags"
          :key="tag"
          :selected="tag === tagName"
        >
          {{tag}}
        </option>
      </select>
    </div>

    <h2>Node Content</h2>
    <div>
      <textarea cols="30" rows="10" v-model="element.innerHTML"></textarea>
    </div>

    <h2>Node Attributes</h2>
    <div>
      <div v-for="attribute in attributes" :key="attribute.name">
        <select>
          <option
            v-for="(values, attr) in htmlAttributes"
            :key="attr"
            :selected="attr === attribute.name"
          >
            {{attr}}
          </option>
        </select>
        <input :value="attribute.value" />
      </div>
      <button @click="addAttribute">Add Attribute</button>
    </div>

    <h2>Node Style</h2>
    <div>
      <div v-for="property in style">
        <select>
          <option
            v-for="(values, name) in cssProperties"
            :key="name"
          >
            {{name}}
          </option>
        </select>
        <input :value="property.value" />
      </div>
      <button @click="addProperty">Add Property</button>
    </div>
  </div>
</template>

<script>
// "Borrow" DOM data from brackets
import tagsJSON from 'brackets/brackets-dist/extensions/default/HTMLCodeHints/HtmlTags.json'
import attributesJSON from 'brackets/brackets-dist/extensions/default/HTMLCodeHints/HtmlAttributes.json'
import propertiesJSON from 'brackets/brackets-dist/extensions/default/CSSCodeHints/CSSProperties.json'

export default {
  props: {
    element: HTMLElement,
    block: Object,
  },
  data: () => ({
    attributes: [],
    style: [],
  }),
  computed: {
    tagName() {
      return this.element.tagName.toLowerCase()
    },
    htmlTags() {
      return tagsJSON
    },
    htmlAttributes() {
      return attributesJSON
    },
    cssProperties() {
      return propertiesJSON
    },
  },
  methods: {
    addAttribute() {
      this.attributes.push({ name: '', value: '' })
    },
    getAttributes() {
      const elementAttrs = [...this.element.attributes]
      this.attributes = elementAttrs.filter(attr => !attr.name.match(/style/i))
    },
    addProperty() {
      this.style.push({ name: '', value: '' })
    },
  },
  watch: {
    element() {
      this.getAttributes()
    },
  },
  created() {
    this.getAttributes()
  },
}
</script>

<style lang="scss" scoped>

.blockProperties {
  min-width: 150px;
  background: steelblue;
  padding: 1rem;

  h2:not(:first-child) {
    margin-top: 1rem;
  }
}
</style>
