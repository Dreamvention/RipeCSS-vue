import RCardHr from './card-hr'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCardHr
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
