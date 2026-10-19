import { beforeEach, describe, expect, it, vi } from 'vite-plus/test'
import { createApp, nextTick, ref } from 'vue'

import * as components from './components'
import installer from './install'
import SearchBox from './service/search/components/SearchBox.vue'

describe('component package', () => {
  beforeEach(() => vi.stubGlobal('T', {}))

  it('registers all public components', () => {
    const component = vi.fn()
    installer.install({ component } as never)
    expect(component).toHaveBeenCalledTimes(24)
    expect(component.mock.calls.map((call) => call[0])).toEqual(
      expect.arrayContaining(Object.keys(components)),
    )
  })

  it('uses Vue 3 modelValue updates in SearchBox', async () => {
    const value = ref('start')
    const host = document.createElement('div')
    const app = createApp(SearchBox, {
      modelValue: value.value,
      'onUpdate:modelValue': (next: string) => (value.value = next),
    })
    app.mount(host)
    const input = host.querySelector('input') as HTMLInputElement
    input.value = 'next'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    expect(value.value).toBe('next')
    app.unmount()
  })
})
