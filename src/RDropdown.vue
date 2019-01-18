<template>
  <div class="ve-dropdown" :class="{'ve-dropdown--open': open}">
    <div
      class="ve-dropdown__toggle"
      @mouseenter="handleOpen"
      @mouseleave="handleClose"
      @click="toggleOpen"
    >
      <slot name="activator"></slot>
    </div>
    <div class="ve-dropdown__menu">
      <slot>
        <div
          v-for="(value, index) in items"
          v-html="value.title"
          :key="index"
          class="ve-dropdown__menu__item"
          @click="handleClick(value)"
        />
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    openOnHover: {
      type: Boolean,
      default: false
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    items: {
      type: Array,
      default: Array
    }
  },
  data() {
    return {
      open: false,
      activator: ""
    };
  },
  watch: {
    value(value, oldValue) {
      if (value !== oldValue) {
        this.open = value;
      }
    }
  },
  methods: {
    handleOpen() {
      if (this.openOnHover) {
        this.open = true;
        this.$emit("input", true);
      }
    },
    handleClose() {
      if (this.openOnHover) {
        this.open = false;
        this.$emit("input", false);
      }
    },
    handleClick(value) {
      this.$emit("click-input", value);
    },
    toggleOpen() {
      if (this.openOnClick) {
        this.open = !this.open;
        this.$emit("input", this.open);
        this.open &&
          this.$nextTick(() => {
            document.addEventListener("click", this.hide);
          });
      }
    },
    hide: function() {
      this.open = false;
      this.$emit("input", false);
      document.removeEventListener("click", this.hide);
    }
  }
};
</script>

