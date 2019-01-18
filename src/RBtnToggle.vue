<template>
  <div :class="classButton" class="ve-btn-group">
    <slot>
      <a class="ve-btn">Show</a>
      <a class="ve-btn">Show</a>
      <a class="ve-btn">Show</a>
    </slot>
  </div>
</template>
<script>
import { isEmpty, each } from "lodash";
export default {
  props: {
    size: {
      type: String,
      default: ""
    },
    value: {
      type: String | Number,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classButton() {
      let result = [];

      if (!isEmpty(this.size)) {
        result = [...result, "ve-btn-group--" + this.size];
      }
      if (this.block) {
        result = [...result, "ve-btn-group--block"];
      }

      return result.join(" ");
    }
  },
  methods: {
    onClick(item, index) {
      this.$emit("input", item.value);

      each(this.$children, comp => {
        if (item.value === comp.value) {
          comp.active = true;
        } else {
          comp.active = false;
        }
      });
    }
  },
  mounted() {
    each(this.$children, (comp, index) => {
      comp.$on("click", () => this.onClick(comp, index));
      if (comp.value === this.value) {
        comp.active = true;
      }
    });
  }
};
</script>
