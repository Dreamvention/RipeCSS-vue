<template>
  <RField>
    <label class="ve-checkbox">
      <input type="checkbox" name="option1" :checked="isChecked" @change="handleChange">
      <i></i>
      {{label}}
    </label>
  </RField>
</template>
<script>
import RField from "./RField";
import RLabel from "./RLabel";
import { includes, filter, isUndefined } from "lodash";
export default {
  components: { RField, RLabel },
  model: {
    prop: "inputValue",
    event: "change"
  },
  props: {
    label: String,
    value: String | Boolean,
    inputValue: null
  },
  computed: {
    isChecked() {
      let result = false;
      if (!isUndefined(this.value)) {
        result = includes(this.inputValue, this.value);
      } else {
        result = !!this.inputValue;
      }
      return result;
    }
  },
  methods: {
    handleChange(e) {
      if (e.target.checked) {
        if (!isUndefined(this.value)) {
          if (!includes(this.inputValue, this.value)) {
            const newValue = this.inputValue;
            newValue.push(this.value);
            this.$emit("change", newValue);
          }
        } else {
          this.$emit("change", true);
        }
      } else {
        if (!isUndefined(this.value)) {
          const newValue = filter(this.inputValue, text => text !== this.value);
          this.$emit("change", newValue);
        } else {
          this.$emit("change", false);
        }
      }
    }
  }
};
</script>
