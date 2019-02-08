import RCardSection from './card-section'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCardSection
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
