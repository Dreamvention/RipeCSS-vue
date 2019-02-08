import RField from '../field/field'
import RLabel from '../label/label'
export default {
  name: 'RSelect',
  components: { RField, RLabel },
  template: `<RField>
  <RLabel v-if="label" :text="label"/>
  <select class="ve-input" :value="value" @change="handleChange">
    <option v-if="none" value>{{ noneText }}</option>
    <option v-for="(option, key) in options" :key="key" :value="key" v-html="option"></option>
  </select>
</RField>`,
  props: {
    value: {
      type: String,
      default() {
        return ''
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    none: {
      type: Boolean,
      default() {
        return false
      }
    },
    noneText: {
      type: String,
      default: 'None'
    },
    label: String
  },
  computed: {},
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
