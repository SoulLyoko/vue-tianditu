import { watch } from 'vue'

import type { ToolInstances } from '../types'
import type { Props } from './'

export function useWatch({ props, instances }: { props: Props; instances: ToolInstances }) {
  watch(
    () => props.markTool?.icon,
    (val) => {
      if (!val) return
      if (typeof val === 'string') {
        instances.markTool?.setPointImage(val)
      } else {
        if (val?.iconUrl) instances.markTool?.setPointImage(val.iconUrl)
      }
    },
  )
}
