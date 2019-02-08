import RCard from './card'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCard
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
