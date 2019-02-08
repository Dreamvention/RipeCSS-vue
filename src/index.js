import * as components from './components'
import { vueUse } from './utils/plugins'

const VuePlugin = {
  install: function(Vue) {
    if (Vue._ripecss_vue_installed) {
      return
    }

    Vue._ripecss_vue_installed = true

    for (let plugin in components) {
      Vue.use(components[plugin])
    }
  }
}
vueUse(VuePlugin)

export default VuePlugin
