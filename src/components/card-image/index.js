import RCardImage from './card-image'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RCardImage
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
