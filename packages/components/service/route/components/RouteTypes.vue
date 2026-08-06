<script setup lang="ts">
import { useState } from '../use'

import '../styles/route-types.scss'

defineOptions({ name: 'RouteTypes' })
const state = useState()
const routeTypes = { 0: '驾车', 1: '公交', 2: '步行' }
</script>

<template>
  <div class="route-types">
    <div
      v-for="(label, key) in routeTypes"
      :key="key"
      class="route-types-item"
      :class="{ active: state.routeType === Number(key) }"
      @click="state.routeType = Number(key)"
    >
      {{ label }}
    </div>
  </div>
</template>
