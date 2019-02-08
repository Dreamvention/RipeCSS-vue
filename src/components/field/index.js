import RField from './field'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RField
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
