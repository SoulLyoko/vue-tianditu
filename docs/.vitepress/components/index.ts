import type { App, Component } from 'vue'

const modules = import.meta.glob<{ default: Component & { name?: string } }>('./**/*.vue', {
  eager: true,
})

export default {
  install(app: App) {
    Object.values(modules).forEach(({ default: component }) => {
      if (component.name) app.component(component.name, component)
    })
  },
}
