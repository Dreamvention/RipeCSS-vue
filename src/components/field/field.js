export default {
  name: 'RField',
  template: `<div class="ve-field" :class="{'ve-field--error': error}">
  <slot></slot>
</div>`,
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
}
