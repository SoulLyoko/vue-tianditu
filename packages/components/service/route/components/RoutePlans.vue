<script setup lang="ts">
import { useState } from '../use'

import '../styles/route-plans.scss'

defineOptions({ name: 'RoutePlans' })
const state = useState()

function transitDescription(plan: (typeof state.transitPlans)[number]) {
  const descriptions = plan.segments.map((segment) => {
    const line = segment.segmentLine[0]
    const stationCount = line.segmentStationCount ? `，经过${line.segmentStationCount}站` : ''
    if (segment.segmentType === 1)
      return `步行约${line.segmentDistance}米，到达${segment.stationEnd.name}`
    if (segment.segmentType === 2 || segment.segmentType === 3) {
      return `乘坐${line.direction}${stationCount}，到达${segment.stationEnd.name}`
    }
    return segment.segmentType === 4 ? '站内换乘' : ''
  })
  return `${descriptions.join('，')}终点`
}
</script>

<template>
  <div class="route-plans">
    <div v-if="state.drivingPlans.length">
      <details
        v-for="(plan, planIndex) in state.drivingPlans"
        :key="planIndex"
        @click="state.drivingPlanIndex = planIndex"
      >
        <summary>
          方案{{ planIndex + 1 }}: {{ plan.duration }} 秒 | {{ plan.distance }} 公里
        </summary>
        <div v-for="(item, itemIndex) in plan.routes.item" :key="itemIndex">
          {{ itemIndex + 1 }}.{{ item.strguide }}
        </div>
      </details>
    </div>
    <div v-if="state.transitPlans.length">
      <details
        v-for="(plan, planIndex) in state.transitPlans"
        :key="planIndex"
        style="background-color: #fff"
        @click="state.transitPlanIndex = planIndex"
      >
        <summary>方案{{ planIndex + 1 }}: {{ plan.lineName }}</summary>
        {{ transitDescription(plan) }}
      </details>
    </div>
  </div>
</template>
