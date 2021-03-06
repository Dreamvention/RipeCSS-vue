import RColorPicker from './color-picker'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RColorPicker
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
