import RBtnToggle from './btn-toggle'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RBtnToggle
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
