import RBtn from './btn'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RBtn
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
