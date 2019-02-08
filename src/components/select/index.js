import RSelect from './select'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RSelect
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
