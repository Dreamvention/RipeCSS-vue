import isUndefined from 'lodash/isUndefined'
export default {
  name: 'RCol',
  template: `<div class="ve-col" :class="sizeClass">
  <slot></slot>
</div>`,
  props: {
    xs: String,
    sm: String,
    md: String,
    lg: String,
    xl: String
  },
  computed: {
    sizeClass() {
      let sizeClass = []

      if (!isUndefined(this.xs)) {
        sizeClass = [...sizeClass, `ve-col-xs-${this.xs}`]
      }
      if (!isUndefined(this.sm)) {
        sizeClass = [...sizeClass, `ve-col-sm-${this.sm}`]
      }
      if (!isUndefined(this.md)) {
        sizeClass = [...sizeClass, `ve-col-md-${this.md}`]
      }
      if (!isUndefined(this.lg)) {
        sizeClass = [...sizeClass, `ve-col-lg-${this.lg}`]
      }
      if (!isUndefined(this.xl)) {
        sizeClass = [...sizeClass, `ve-col-xl-${this.xl}`]
      }

      return sizeClass
    }
  }
}
