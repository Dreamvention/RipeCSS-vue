import RSwitch from './switch'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RSwitch
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
