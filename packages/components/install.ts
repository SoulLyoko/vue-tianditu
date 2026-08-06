import { useApiLoader, type LoadConfig } from '@vue-tianditu/core'
import type { App } from 'vue'

import * as components from './components'

export default {
  install(app: App, config?: LoadConfig) {
    if (typeof document !== 'undefined') void useApiLoader(config)
    Object.values(components).forEach((component) => {
      if ('name' in component && 'setup' in component) {
        app.component(component.name!, component)
      }
    })
  },
}
