import { beforeEach, describe, expect, it, vi } from 'vite-plus/test'
import { createApp, defineComponent, h, nextTick, reactive, shallowRef, type Component } from 'vue'

import { provideMap } from '../composables'
import Circle from './circle/index.vue'
import CloudMarkerCollection from './cloudMarkerCollection/index.vue'
import Infowindow from './infowindow/index.vue'
import Label from './label/index.vue'
import Marker from './marker/index.vue'
import MarkerClusterer from './markerClusterer/index.vue'
import Polygon from './polygon/index.vue'
import Polyline from './polyline/index.vue'
import Rectangle from './rectangle/index.vue'

const addOverLay = vi.fn()
const removeOverLay = vi.fn()
const openInfoWindow = vi.fn()
const closeInfoWindow = vi.fn()

class OverlayStub {
  addEventListener = vi.fn()
  show = vi.fn()
  hide = vi.fn()
  setOpacity = vi.fn()
  setColor = vi.fn()
  setWeight = vi.fn()
  setLineStyle = vi.fn()
  setFillColor = vi.fn()
  setFillOpacity = vi.fn()
  setLngLats = vi.fn()
  setBounds = vi.fn()
  setCenter = vi.fn()
  setRadius = vi.fn()
  enableEdit = vi.fn()
  disableEdit = vi.fn()
  setLngLat = vi.fn()
  setIcon = vi.fn()
  setZIndexOffset = vi.fn()
  enableDragging = vi.fn()
  disableDragging = vi.fn()
  setLabel = vi.fn()
  setOffset = vi.fn()
  setTitle = vi.fn()
  setZIndex = vi.fn()
  setFontSize = vi.fn()
  setFontColor = vi.fn()
  setBackgroundColor = vi.fn()
  setBorderLine = vi.fn()
  setBorderColor = vi.fn()
  setContent = vi.fn()
  closeInfoWindow = vi.fn()
  clear = vi.fn()
  setLnglats = vi.fn()
  setStyles = vi.fn()
  clearMarkers = vi.fn()
  addMarkers = vi.fn()
  setGridSize = vi.fn()
  setMaxZoom = vi.fn()

  constructor(
    public first?: unknown,
    public second?: unknown,
    public third?: unknown,
  ) {}
}

class MarkerStub extends OverlayStub {}
class LabelStub extends OverlayStub {}
class PolylineStub extends OverlayStub {}
class PolygonStub extends OverlayStub {}
class RectangleStub extends OverlayStub {}
class CircleStub extends OverlayStub {}
class InfoWindowStub extends OverlayStub {}
class CloudStub extends OverlayStub {}
class ClustererStub extends OverlayStub {}

function mountOverlay(component: Component, initial: Record<string, unknown>) {
  const props = reactive(initial)
  const onInit = vi.fn()
  const onClick = vi.fn()
  const onUpdateTarget = vi.fn()
  const app = createApp(
    defineComponent({
      setup() {
        provideMap(
          shallowRef({
            addOverLay,
            removeOverLay,
            openInfoWindow,
            closeInfoWindow,
          } as unknown as T.Map),
        )
        return () => h(component, { ...props, onInit, onClick, 'onUpdate:target': onUpdateTarget })
      },
    }),
  )
  app.mount(document.createElement('div'))
  return { app, props, instance: onInit.mock.lastCall![0] as OverlayStub, onClick, onUpdateTarget }
}

describe('overlay components', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('T', {
      Marker: MarkerStub,
      Label: LabelStub,
      Polyline: PolylineStub,
      Polygon: PolygonStub,
      Rectangle: RectangleStub,
      Circle: CircleStub,
      InfoWindow: InfoWindowStub,
      CloudMarkerCollection: CloudStub,
      MarkerClusterer: ClustererStub,
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
      Point: class {
        constructor(
          public x: number,
          public y: number,
        ) {}
      },
      Icon: class {
        constructor(public options: unknown) {}
      },
    })
  })

  it('mounts a marker, forwards extData, updates props and removes it', async () => {
    const { app, props, instance, onClick } = mountOverlay(Marker, {
      position: [1, 2],
      icon: '/marker.png',
      extData: 'marker-1',
      visible: false,
    })
    expect(instance.first).toMatchObject({ lng: 1, lat: 2 })
    expect(instance.setIcon).toHaveBeenCalledWith(
      expect.objectContaining({ options: { iconUrl: '/marker.png' } }),
    )
    expect(addOverLay).toHaveBeenCalledWith(instance)
    expect(instance.hide).toHaveBeenCalled()
    const callback = instance.addEventListener.mock.calls.find(([event]) => event === 'click')![1]
    callback({ type: 'click' })
    expect(onClick).toHaveBeenCalledWith({ type: 'click', extData: 'marker-1' })
    props.opacity = 0
    props.zIndexOffset = 0
    props.position = [3, 4]
    await nextTick()
    expect(instance.setOpacity).toHaveBeenLastCalledWith(0)
    expect(instance.setZIndexOffset).toHaveBeenLastCalledWith(0)
    expect(instance.setLngLat).toHaveBeenLastCalledWith(expect.objectContaining({ lng: 3, lat: 4 }))
    app.unmount()
    expect(removeOverLay).toHaveBeenCalledWith(instance)
  })

  it('updates label text, including an empty string', async () => {
    const { app, props, instance } = mountOverlay(Label, { text: 'start', zIndex: 0 })
    expect(instance.setZIndex).toHaveBeenCalledWith(0)
    props.text = ''
    await nextTick()
    expect(instance.setLabel).toHaveBeenLastCalledWith('')
    app.unmount()
  })

  it.each([
    ['polyline', Polyline, { path: [[1, 2]] }, 'path', [], 'setLngLats'],
    [
      'polygon',
      Polygon,
      {
        path: [
          [
            [1, 2],
            [3, 4],
          ],
        ],
      },
      'path',
      [],
      'setLngLats',
    ],
    [
      'rectangle',
      Rectangle,
      {
        bounds: [
          [1, 2],
          [3, 4],
        ],
      },
      'bounds',
      [
        [2, 3],
        [4, 5],
      ],
      'setBounds',
    ],
    ['circle', Circle, { center: [1, 2], radius: 5 }, 'radius', 0, 'setRadius'],
  ] as const)('mounts and updates %s', async (_name, component, initial, key, value, setter) => {
    const { app, props, instance } = mountOverlay(component, initial)
    expect(addOverLay).toHaveBeenCalledWith(instance)
    props[key] = value
    await nextTick()
    expect(instance[setter]).toHaveBeenCalled()
    app.unmount()
    expect(removeOverLay).toHaveBeenCalledWith(instance)
  })

  it('opens and closes info windows through the provided map', async () => {
    const { app, props, instance, onUpdateTarget } = mountOverlay(Infowindow, {
      content: 'start',
      target: [1, 2],
    })
    expect(openInfoWindow).toHaveBeenCalledWith(
      instance,
      expect.objectContaining({ lng: 1, lat: 2 }),
    )
    props.content = ''
    await nextTick()
    expect(instance.setContent).toHaveBeenCalledWith('')
    const close = instance.addEventListener.mock.calls.find(([event]) => event === 'close')![1]
    close({ type: 'close' })
    expect(onUpdateTarget).toHaveBeenCalledWith(null)
    app.unmount()
    expect(closeInfoWindow).toHaveBeenCalled()
  })

  it('registers and clears cloud markers', async () => {
    const { app, props, instance } = mountOverlay(CloudMarkerCollection, {
      lnglats: [[1, 2]],
    })
    expect(instance.first).toEqual([expect.objectContaining({ lng: 1, lat: 2 })])
    props.color = '#123456'
    props.lnglats = []
    await nextTick()
    expect(instance.setStyles).toHaveBeenCalledWith(expect.objectContaining({ color: '#123456' }))
    expect(instance.setLnglats).toHaveBeenCalledWith([])
    app.unmount()
    expect(instance.clear).toHaveBeenCalled()
    expect(removeOverLay).toHaveBeenCalledWith(instance)
  })

  it('creates clusters on the map and clears their markers on unmount', async () => {
    const { app, props, instance } = mountOverlay(MarkerClusterer, {
      markers: [{ position: [1, 2] }],
      styles: [{ offset: [4, 5] }],
    })
    expect(instance.second).toMatchObject({ markers: [expect.any(MarkerStub)] })
    expect(instance.setStyles).toHaveBeenCalledWith([
      expect.objectContaining({ offset: expect.objectContaining({ x: 4, y: 5 }) }),
    ])
    props.markers = []
    await nextTick()
    expect(instance.clearMarkers).toHaveBeenCalled()
    app.unmount()
    expect(instance.clearMarkers).toHaveBeenCalledTimes(2)
  })
})
