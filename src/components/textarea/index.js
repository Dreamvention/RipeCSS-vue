import RTextarea from './textarea'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RTextarea
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
