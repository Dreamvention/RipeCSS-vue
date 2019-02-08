import RRow from './row'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RRow
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
