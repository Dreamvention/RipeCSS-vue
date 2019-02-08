import RAutocomplete from './autocomplete'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  RAutocomplete
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
