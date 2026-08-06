import { toPoint } from '@vue-tianditu/core'
import { watch } from 'vue'

import type { Props } from './'

export function useWatch({ props, instance }: { props: Props; instance: T.Control }) {
  watch(
    () => props.position,
    (val) => val && instance.setPosition(val),
  )
  watch(
    () => props.offset,
    (val) => val && instance.setOffset(toPoint(val)),
    { immediate: true },
  )
  watch(
    () => props.visible,
    (val) => (val ? instance.show() : instance.hide()),
    { immediate: true },
  )
}
