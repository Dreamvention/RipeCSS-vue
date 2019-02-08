import RField from '../field/field'
import RLabel from '../label/label'
import RRow from '../row/row'
import RCol from '../col/col'
import RDropdown from '../dropdown/dropdown'
import { Sketch } from 'vue-color'
import debounce from 'lodash/debounce'
import moment from 'moment'
export default {
  name: 'RColorPicker',
  components: { Sketch, RField, RLabel, RDropdown, RRow, RCol },
  template: `<RField>
  <RLabel v-if="label" :text="label"/>
  <RRow>
    <RCol xs="12">
      <div
        @click="handleOpen"
        :style="'background-color: '+ value| sanitaze_css"
        class="color-box-icon"
      ></div>
      <RLabel :text="color" class="color-box-text"/>
    </RCol>
  </RRow>
  <RDropdown v-model="pickerOpen">
    <Sketch :value="value" @input="updatePicker"/>
  </RDropdown>
</RField>`,
  props: {
    value: {
      type: String
    },
    label: String
  },
  data() {
    return {
      pickerOpen: false,
      color: this.value,
      last_change_picker: 0
    }
  },
  watch: {
    value(value, oldValue) {
      if (value !== oldValue) {
        this.color = value
      }
    }
  },
  filters: {
    sanitaze_css(value) {
      if (value.indexOf('!default') !== -1) {
        return value.substr(0, value.indexOf('!default'))
      } else {
        return value
      }
    }
  },
  methods: {
    handleOpen() {
      this.pickerOpen = !this.pickerOpen
    },
    updatePicker(value) {
      this.last_change_picker = moment().valueOf()
      debounce(() => {
        if (moment().valueOf() - this.last_change_picker > 50) {
          this.color = value.hex.toLowerCase()
          this.$emit('input', value.hex.toLowerCase())
        }
      }, 50)()
    }
  }
}
