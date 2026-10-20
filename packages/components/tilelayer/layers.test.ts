import { beforeEach, describe, expect, it, vi } from 'vite-plus/test'
import { createApp, defineComponent, h, nextTick, reactive, shallowRef, type Component } from 'vue'

import { provideMap } from '../composables'
import GridlineLayer from './gridlineLayer/index.vue'
import TdtLayer from './tdt/index.vue'
import TileLayer from './tilelayer/index.vue'
import WmsLayer from './wms/index.vue'

const addLayer = vi.fn()
const removeLayer = vi.fn()

class TileLayerStub {
  addEventListener = vi.fn()
  setOpacity = vi.fn()
  setZIndex = vi.fn()
  setUrl = vi.fn()

  constructor(
    public url: string,
    public options?: unknown,
  ) {}
}

class TdtLayerStub extends TileLayerStub {}
class WmsLayerStub extends TileLayerStub {}
class GridlineLayerStub extends TileLayerStub {
  constructor(options: unknown) {
    super('', options)
  }
}

function mountLayer(component: Component, initial: Record<string, unknown>) {
  const props = reactive(initial)
  const onInit = vi.fn()
  const onTileerror = vi.fn()
  const onLoad = vi.fn()
  const app = createApp(
    defineComponent({
      setup() {
        provideMap(shallowRef({ addLayer, removeLayer } as unknown as T.Map))
        return () => h(component, { ...props, onInit, onTileerror, onLoad })
      },
    }),
  )
  app.mount(document.createElement('div'))
  return { app, props, layer: onInit.mock.lastCall![0] as TileLayerStub, onTileerror, onLoad }
}

describe('tilelayer components', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('T', {
      TileLayer: Object.assign(TileLayerStub, { TDT: TdtLayerStub, WMS: WmsLayerStub }),
      GridlineLayer: GridlineLayerStub,
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

  it('adds tiles, converts bounds, forwards events and updates zero and empty values', async () => {
    const { app, props, layer, onTileerror } = mountLayer(TileLayer, {
      url: 'tiles',
      opacity: 0.5,
      zIndex: 2,
      bounds: [
        [1, 2],
        [3, 4],
      ],
      noWrap: true,
    })
    expect(layer).toBeInstanceOf(TileLayerStub)
    expect(addLayer).toHaveBeenCalledWith(layer)
    expect(layer.options).toMatchObject({
      noWrap: true,
      bounds: { sw: { lng: 1, lat: 2 }, ne: { lng: 3, lat: 4 } },
    })
    const callback = layer.addEventListener.mock.calls.find(([event]) => event === 'tileerror')![1]
    callback({ type: 'tileerror', tile: 'missing' })
    expect(onTileerror).toHaveBeenCalledWith(expect.objectContaining({ tile: 'missing' }))
    props.opacity = 0
    props.zIndex = 0
    props.url = ''
    await nextTick()
    expect(layer.setOpacity).toHaveBeenLastCalledWith(0)
    expect(layer.setZIndex).toHaveBeenLastCalledWith(0)
    expect(layer.setUrl).toHaveBeenLastCalledWith('')
    app.unmount()
    expect(removeLayer).toHaveBeenCalledWith(layer)
  })

  it('passes attribution to TDT and removes the layer on unmount', () => {
    const { app, layer } = mountLayer(TdtLayer, { url: 'tdt', attribution: 'source' })
    expect(layer).toBeInstanceOf(TdtLayerStub)
    expect(layer.options).toMatchObject({ attribution: 'source' })
    app.unmount()
    expect(removeLayer).toHaveBeenCalledWith(layer)
  })

  it('preserves WMS options and applies opacity and z-index when mounting', async () => {
    const { app, props, layer } = mountLayer(WmsLayer, {
      url: 'wms',
      layers: 'roads',
      transparent: true,
      crs: 'EPSG:4326',
      opacity: 0,
      zIndex: 0,
    })
    expect(layer).toBeInstanceOf(WmsLayerStub)
    expect(layer.options).toMatchObject({ layers: 'roads', transparent: true, crs: 'EPSG:4326' })
    expect(layer.setOpacity).toHaveBeenCalledWith(0)
    expect(layer.setZIndex).toHaveBeenCalledWith(0)
    props.url = 'updated'
    await nextTick()
    expect(layer.setUrl).toHaveBeenCalledWith('updated')
    app.unmount()
  })

  it('initializes gridlines, forwards load, and updates opacity and z-index', async () => {
    const { app, props, layer, onLoad } = mountLayer(GridlineLayer, { zIndex: 0 })
    expect(layer).toBeInstanceOf(GridlineLayerStub)
    expect(layer.options).toMatchObject({ tileSize: 256, minZoom: 0, maxZoom: 18 })
    expect(layer.setZIndex).toHaveBeenCalledWith(0)
    const callback = layer.addEventListener.mock.calls.find(([event]) => event === 'load')![1]
    callback({ type: 'load' })
    expect(onLoad).toHaveBeenCalledWith(expect.objectContaining({ type: 'load' }))
    props.opacity = 0
    await nextTick()
    expect(layer.setOpacity).toHaveBeenLastCalledWith(0)
    app.unmount()
    expect(removeLayer).toHaveBeenCalledWith(layer)
  })
})
