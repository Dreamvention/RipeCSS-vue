<template>
  <RField :error="isError">
    <RLabel v-if="label" :text="label"/>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :class="`ve-input--${size}`"
      class="ve-input"
      @input="handleChange"
    >
    <span class="ve-help ve-text-danger" v-if="isError">{{errorMessage}}</span>
  </RField>
</template>
<script>
import RField from "./RField";
import RLabel from "./RLabel";
import { isEmpty } from "lodash";
export default {
  components: { RField, RLabel },
  props: {
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "md"
    },
    errorMessages: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: String,
    placeholder: String
  },
  computed: {
    isError() {
      return !isEmpty(this.errorMessages);
    },
    errorMessage() {
      return this.errorMessages[0];
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

