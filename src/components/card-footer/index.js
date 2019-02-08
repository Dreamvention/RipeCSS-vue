import RCardFooter from './card-footer'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCardFooter
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
