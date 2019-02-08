import RContainer from './container'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RContainer
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
