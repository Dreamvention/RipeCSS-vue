import RCol from './col'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCol
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
