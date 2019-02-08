import RDropdown from './dropdown'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RDropdown
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
