import RCardHeader from './card-header'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCardHeader
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
