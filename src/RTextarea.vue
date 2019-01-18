<template>
  <RField>
    <RLabel v-if="label" :text="label"/>
    <textarea class="ve-input" :placeholder="placeholder" v-model="localValue"/>
  </RField>
</template>
<script>
import RField from "./RField";
import RLabel from "./RLabel";
export default {
  components: { RField, RLabel },
  data() {
    return {
      localValue: this.value
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    value: String,
    label: String
  },
  watch: {
    localValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

