import RField from '../field/field'
import RLabel from '../label/label'
import isEmpty from 'lodash/isEmpty'
export default {
  name: 'RTextField',
  components: { RField, RLabel },
  template: `<RField :error="isError">
  <RLabel v-if="label" :text="label"/>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :class="'ve-input--'+size"
    class="ve-input"
    @input="handleChange"
  >
  <span class="ve-help ve-text-danger" v-if="isError">{{errorMessage}}</span>
</RField>`,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'md'
    },
    errorMessages: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: String,
      default: ''
    },
    label: String,
    placeholder: String
  },
  computed: {
    isError() {
      return !isEmpty(this.errorMessages)
    },
    errorMessage() {
      return this.errorMessages[0]
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
