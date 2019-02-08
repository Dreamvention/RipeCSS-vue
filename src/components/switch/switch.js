import RField from '../field/field'
import RLabel from '../label/label'
import includes from 'lodash/includes'
import filter from 'lodash/filter'
import isUndefined from 'lodash/isUndefined'
import toNumber from 'lodash/toNumber'
export default {
  name: 'RSwitch',
  components: { RField, RLabel },
  template: `<RField>
  <label class="ve-switch">
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
    inputValue: null,
    numeric: false
  },
  computed: {
    isChecked() {
      let result = false
      if (!isUndefined(this.value)) {
        result = includes(this.inputValue, this.value)
      } else {
        result = !!toNumber(this.inputValue)
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
          this.$emit('change', this.numeric ? 1 : true)
        }
      } else {
        if (!isUndefined(this.value)) {
          const newValue = filter(this.inputValue, text => text !== this.value)
          this.$emit('change', newValue)
        } else {
          this.$emit('change', this.numeric ? 0 : false)
        }
      }
    }
  }
}
