export default {
  name: 'RContainer',
  template: `<div :class="{'ve-container-fluid': fluid, 've-no-gutters': noGutters}" class="ve-container">
    <slot></slot>
  </div>`,
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
}
