import { beforeEach, describe, expect, it, vi } from 'vite-plus/test'
import { createApp, defineComponent, h, nextTick, reactive, shallowRef, type Component } from 'vue'

import { provideMap } from '../composables'
import Copyright from './copyright/index.vue'
import MapType from './mapType/index.vue'
import OverviewMap from './overviewMap/index.vue'
import Zoom from './zoom/index.vue'

const addControl = vi.fn()
const removeControl = vi.fn()

class Control {
  constructor(public options?: unknown) {}
  setPosition = vi.fn()
  setOffset = vi.fn()
  show = vi.fn()
  hide = vi.fn()
}

class ZoomControl extends Control {}

class CopyrightControl extends Control {
  addCopyright = vi.fn()
  removeCopyright = vi.fn()
}

class OverviewMapControl extends Control {
  opened = false
  addEventListener = vi.fn()
  isOpen = () => this.opened
  changeView = vi.fn(() => (this.opened = !this.opened))
  setButtonImage = vi.fn()
  setBorderColor = vi.fn()
  setRectBorderColor = vi.fn()
  setRectBackColor = vi.fn()

  constructor(options?: { isOpen?: boolean }) {
    super(options)
    this.opened = options?.isOpen ?? false
  }
}

class MapTypeControl extends Control {}

function mountControl(component: Component, initial: Record<string, unknown>) {
  const props = reactive(initial)
  const onInit = vi.fn()
  const onViewchange = vi.fn()
  const app = createApp(
    defineComponent({
      setup() {
        provideMap(shallowRef({ addControl, removeControl } as unknown as T.Map))
        return () => h(component, { ...props, onInit, onViewchange })
      },
    }),
  )
  app.mount(document.createElement('div'))
  return { app, props, control: onInit.mock.lastCall![0], onViewchange }
}

describe('control components', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('T', {
      Control: {
        Zoom: ZoomControl,
        Copyright: CopyrightControl,
        OverviewMap: OverviewMapControl,
        MapType: MapTypeControl,
      },
      Point: class {
        constructor(
          public x: number,
          public y: number,
        ) {}
      },
      LngLat: class {
        constructor(
          public lng: number,
          public lat: number,
        ) {}
      },
      LngLatBounds: class {
        constructor(
          public sw: unknown,
          public ne: unknown,
        ) {}
      },
    })
  })

  it('initializes zoom options and removes the control on unmount', () => {
    const { app, control } = mountControl(Zoom, { zoomInText: 'plus', visible: false })
    expect(control.options).toMatchObject({ position: 'topleft', zoomInText: 'plus' })
    expect(addControl).toHaveBeenCalledWith(control)
    expect(control.hide).toHaveBeenCalled()
    app.unmount()
    expect(removeControl).toHaveBeenCalledWith(control)
  })

  it('adds copyright after mounting and replaces it when its content changes', async () => {
    const { app, props, control } = mountControl(Copyright, {
      id: 'license',
      content: 'initial',
      bounds: [
        [1, 2],
        [3, 4],
      ],
    })
    expect(addControl.mock.invocationCallOrder[0]).toBeLessThan(
      control.addCopyright.mock.invocationCallOrder[0],
    )
    expect(control.addCopyright).toHaveBeenCalledWith({
      id: 'license',
      content: 'initial',
      bounds: expect.objectContaining({ sw: expect.objectContaining({ lng: 1, lat: 2 }) }),
    })
    props.content = 'updated'
    await nextTick()
    expect(control.removeCopyright).toHaveBeenCalledWith(
      expect.objectContaining({ content: 'initial' }),
    )
    expect(control.addCopyright).toHaveBeenLastCalledWith(
      expect.objectContaining({ content: 'updated' }),
    )
    app.unmount()
  })

  it('passes overview options, updates its state, and forwards viewchange', async () => {
    const { app, props, control, onViewchange } = mountControl(OverviewMap, {
      anchor: 'topleft',
      size: [120, 90],
      isOpen: false,
    })
    expect(control.options).toMatchObject({ anchor: 'topleft', size: { x: 120, y: 90 } })
    const callback = control.addEventListener.mock.calls[0][1]
    callback({ type: 'viewchange', isOpen: true })
    expect(onViewchange).toHaveBeenCalledWith({ type: 'viewchange', isOpen: true })
    props.isOpen = true
    await nextTick()
    expect(control.changeView).toHaveBeenCalledOnce()
    app.unmount()
  })

  it('resolves named map types to Tianditu map type objects', () => {
    const layer = { name: 'normal' }
    vi.stubGlobal('TMAP_NORMAL_MAP', layer)
    const { app, control } = mountControl(MapType, {
      mapTypes: [{ title: 'Normal', layer: 'TMAP_NORMAL_MAP' }],
    })
    expect(control.options).toEqual([{ title: 'Normal', layer }])
    expect(control.setPosition).toHaveBeenCalledWith('topright')
    app.unmount()
  })
})
