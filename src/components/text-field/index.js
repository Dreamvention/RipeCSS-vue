import RTextField from './text-field'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RTextField
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
