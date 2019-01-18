<template>
  <div :class="{'ve-container-fluid': fluid, 've-no-gutters': noGutters}" class="ve-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    noGutters: {
      type: Boolean,
      default: false
    }
  }
};
</script>

