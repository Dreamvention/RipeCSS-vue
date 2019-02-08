import RCheckbox from './checkbox'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCheckbox
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
