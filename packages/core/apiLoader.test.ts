import { beforeEach, describe, expect, it, vi } from 'vite-plus/test'

async function freshLoader() {
  vi.resetModules()
  return import('./apiLoader')
}

function scripts() {
  return Array.from(document.querySelectorAll('script'))
}

async function completeScript(index: number) {
  await vi.waitFor(() => expect(scripts()[index]).toBeDefined())
  scripts()[index].onload?.(new Event('load'))
}

describe('useApiLoader', () => {
  beforeEach(() => {
    document.head.replaceChildren()
    document.body.replaceChildren()
    Reflect.deleteProperty(globalThis, 'T')
    vi.unstubAllGlobals()
  })

  it('builds a custom API URL and loads overridden plugin URLs in order', async () => {
    const { useApiLoader } = await freshLoader()
    const promise = useApiLoader({
      apiUrl: '/proxy/tianditu?tenant=demo&v=3.0',
      v: '4.0',
      tk: 'token',
      plugins: ['D3'],
      pluginUrls: { D3: ['/plugins/d3.js', '/plugins/overlay.js'] },
    })

    await completeScript(0)
    expect(new URL(scripts()[0].src).pathname).toBe('/proxy/tianditu')
    expect(scripts()[0].src).toContain('tenant=demo')
    expect(scripts()[0].src).toContain('v=4.0')
    expect(scripts()[0].src).toContain('tk=token')

    await completeScript(1)
    expect(new URL(scripts()[1].src).pathname).toBe('/plugins/d3.js')
    await completeScript(2)
    expect(new URL(scripts()[2].src).pathname).toBe('/plugins/overlay.js')
    await promise
  })

  it('shares one API request between concurrent calls', async () => {
    const { useApiLoader } = await freshLoader()
    const first = useApiLoader({ apiUrl: '/first' })
    const second = useApiLoader({ apiUrl: '/second' })
    await vi.waitFor(() => expect(scripts()).toHaveLength(1))
    expect(new URL(scripts()[0].src).pathname).toBe('/first')
    await completeScript(0)
    await Promise.all([first, second])
  })

  it('loads plugins when the base API already exists', async () => {
    vi.stubGlobal('T', {})
    const { useApiLoader } = await freshLoader()
    const promise = useApiLoader({ plugins: ['D3'], pluginUrls: { D3: ['/plugin.js'] } })
    await completeScript(0)
    expect(new URL(scripts()[0].src).pathname).toBe('/plugin.js')
    await promise
  })

  it('clears failed script state so a later call can retry', async () => {
    const { useApiLoader } = await freshLoader()
    const first = useApiLoader({ apiUrl: '/retry' })
    await vi.waitFor(() => expect(scripts()).toHaveLength(1))
    scripts()[0].onerror?.(new Event('error'))
    await expect(first).rejects.toThrow('Failed to load Tianditu script')

    const second = useApiLoader({ apiUrl: '/retry' })
    await vi.waitFor(() => expect(scripts()).toHaveLength(2))
    scripts()[1].onload?.(new Event('load'))
    await second
  })

  it('rejects with a clear error without a browser document', async () => {
    vi.stubGlobal('document', undefined)
    const { useApiLoader } = await freshLoader()
    await expect(useApiLoader()).rejects.toThrow('requires a browser document')
  })
})
