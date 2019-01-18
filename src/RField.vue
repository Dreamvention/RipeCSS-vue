<template>
  <div class="ve-field" :class="{'ve-field--error': error}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
};
</script>

