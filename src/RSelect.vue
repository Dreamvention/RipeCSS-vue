<template>
  <RField>
    <RLabel v-if="label" :text="label"/>
    <select class="ve-input" :value="value" @change="handleChange">
      <option v-if="none" value>{{ noneText }}</option>
      <option v-for="(option, key) in options" :key="key" :value="key" v-html="option"></option>
    </select>
  </RField>
</template>
<script>
import RField from "./RField";
import RLabel from "./RLabel";
export default {
  components: { RField, RLabel },
  props: {
    value: {
      type: String,
      default() {
        return "";
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    none: {
      type: Boolean,
      default() {
        return false;
      }
    },
    noneText: {
      type: String,
      default: "None"
    },
    label: String
  },
  computed: {},
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

