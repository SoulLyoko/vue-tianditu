import type { InjectionKey, ShallowRef } from 'vue'
import { inject, provide } from 'vue'

export const mapInjectionKey: InjectionKey<ShallowRef<T.Map | undefined>> = Symbol('tdt-map')
export function provideMap(map: ShallowRef<T.Map | undefined>) {
  provide(mapInjectionKey, map)
}
export function useMap() {
  const map = inject(mapInjectionKey) as ShallowRef<T.Map>

  if (!map.value)
    throw new Error(
      'Map instance is not provided, please make sure to use <TdtMap> component as the parent component.',
    )

  return map
}
