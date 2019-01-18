<template>
  <RField>
    <label class="ve-switch">
      <input type="checkbox" name="option1" :checked="isChecked" @change="handleChange">
      <i></i>
      {{label}}
    </label>
  </RField>
</template>
<script>
import RField from "./RField";
import RLabel from "./RLabel";
import { includes, filter, isUndefined, toNumber } from "lodash";
export default {
  components: { RField, RLabel },
  model: {
    prop: "inputValue",
    event: "change"
  },
  props: {
    label: String,
    value: String | Boolean,
    inputValue: null,
    numeric: false
  },
  computed: {
    isChecked() {
      let result = false;
      if (!isUndefined(this.value)) {
        result = includes(this.inputValue, this.value);
      } else {
        result = !!toNumber(this.inputValue);
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
          this.$emit("change", this.numeric ? 1 : true);
        }
      } else {
        if (!isUndefined(this.value)) {
          const newValue = filter(this.inputValue, text => text !== this.value);
          this.$emit("change", newValue);
        } else {
          this.$emit("change", this.numeric ? 0 : false);
        }
      }
    }
  }
};
</script>
