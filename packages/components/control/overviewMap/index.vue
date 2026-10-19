<script setup lang="ts">
import { toPoint } from '@vue-tianditu/core'
import { onMounted, watch } from 'vue'

import { useInitControl, useWatch } from '../../composables'
import { controlOverviewMapEmits, controlOverviewMapProps } from './props'

defineOptions({ name: 'TdtControlOverviewMap' })
const props = defineProps(controlOverviewMapProps)
const emit = defineEmits(controlOverviewMapEmits)

onMounted(() => {
  const control = new T.Control.OverviewMap({
    anchor: props.position || props.anchor,
    size: props.size && toPoint(props.size),
    isOpen: props.isOpen,
  })
  useInitControl(props, control)

  control.addEventListener('viewchange', (e) => emit('viewchange', e))

  useWatch(props, {
    anchor: (val) => control.setPosition(props.position || val),
    isOpen: (val) => control.isOpen() !== val && control.changeView(),
    borderColor: (val) => val && control.setBorderColor(val),
    rectBorderColor: (val) => val && control.setRectBorderColor(val),
    rectBackColor: (val) => val && control.setRectBackColor(val),
  })
  watch(
    () => [props.imgOpen, props.imgClose],
    ([imgOpen, imgClose]) => {
      if (!imgOpen || !imgClose) return
      control.setButtonImage(imgOpen, imgClose)
    },
    { immediate: true },
  )
  emit('init', control)
})
</script>
