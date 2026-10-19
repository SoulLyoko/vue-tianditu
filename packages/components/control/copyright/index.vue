<script setup lang="ts">
import { toBounds } from '@vue-tianditu/core'
import { onMounted, watch } from 'vue'

import { useInitControl } from '../../composables'
import { controlCopyrightEmits, controlCopyrightProps } from './props'

defineOptions({ name: 'TdtControlCopyright' })
const props = defineProps(controlCopyrightProps)
const emit = defineEmits(controlCopyrightEmits)

onMounted(() => {
  const control = new T.Control.Copyright({ position: props.position })
  useInitControl(props, control)

  // 根据官网的示例，需要先初始化控件，再添加版权信息
  let previous: T.Control.CopyrightOptions | undefined
  watch(
    () => [props.id, props.content, props.bounds] as const,
    ([id, content, bounds]) => {
      if (previous) control.removeCopyright(previous)
      previous =
        id && content !== undefined
          ? { id, content, bounds: bounds && toBounds(bounds) }
          : undefined
      if (previous) control.addCopyright(previous)
    },
    { immediate: true },
  )
  emit('init', control)
})
</script>
