import RField from '../field/field'
import RLabel from '../label/label'
export default {
  name: 'RTextarea',
  components: { RField, RLabel },
  template: `<RField>
  <RLabel v-if="label" :text="label"/>
  <textarea class="ve-input" :placeholder="placeholder" v-model="localValue"/>
</RField>`,
  data() {
    return {
      localValue: this.value
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: String,
    label: String
  },
  watch: {
    localValue(value) {
      this.$emit('input', value)
    }
  }
}
