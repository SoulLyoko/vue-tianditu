import { toLngLats } from '@vue-tianditu/core'
import { watch } from 'vue'

import type { Props } from './'

export function useWatch({ props, instance }: { props: Props; instance: T.CloudMarkerCollection }) {
  watch(
    () => props.lnglats,
    (val) => val && instance.setLnglats(toLngLats(val)),
  )
  watch(
    () => props,
    (val) => instance.setStyles(val),
  )
}
