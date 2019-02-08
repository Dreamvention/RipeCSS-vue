import isEmpty from 'lodash/isEmpty'
export default {
  name: 'RBtn',
  template: `<a :class="classContent" class="ve-btn" @click="handleClick">
  <slot>Show</slot>
</a>`,
  props: {
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    value: {
      type: String | Number,
      default: ''
    }
  },
  computed: {
    classContent() {
      let result = []

      if (!isEmpty(this.color)) {
        result = [...result, 've-btn--' + this.color]
      }

      if (!isEmpty(this.size)) {
        result = [...result, 've-btn--' + this.size]
      }

      if (this.active) {
        result = [...result, 'active']
      }

      if (this.block) {
        result = [...result, 've-btn-group--block']
      }
      return result.join(' ')
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
