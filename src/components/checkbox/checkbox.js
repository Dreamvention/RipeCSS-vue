import RField from '../field/field'
import RLabel from '../label/label'
import includes from 'lodash/includes'
import filter from 'lodash/filter'
import isUndefined from 'lodash/isUndefined'
export default {
  name: 'RCheckbox',
  components: { RField, RLabel },
  template: `<RField>
    <label class="ve-checkbox">
      <input type="checkbox" name="option1" :checked="isChecked" @change="handleChange">
      <i></i>
      {{label}}
    </label>
  </RField>`,
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    label: String,
    value: String | Boolean,
    inputValue: null
  },
  computed: {
    isChecked() {
      let result = false
      if (!isUndefined(this.value)) {
        result = includes(this.inputValue, this.value)
      } else {
        result = !!this.inputValue
      }
      return result
    }
  },
  methods: {
    handleChange(e) {
      if (e.target.checked) {
        if (!isUndefined(this.value)) {
          if (!includes(this.inputValue, this.value)) {
            const newValue = this.inputValue
            newValue.push(this.value)
            this.$emit('change', newValue)
          }
        } else {
          this.$emit('change', true)
        }
      } else {
        if (!isUndefined(this.value)) {
          const newValue = filter(this.inputValue, text => text !== this.value)
          this.$emit('change', newValue)
        } else {
          this.$emit('change', false)
        }
      }
    }
  }
}
