<script setup lang="ts">
import { useState } from "../use";
import "../styles/route-policies.scss";

defineOptions({ name: "RoutePolicies" });
const state = useState();
const drivingPolicies = { 0: "最少时间", 1: "最短距离", 2: "避开高速" };
const transitPolicies = { 1: "最少时间", 2: "最少换乘", 4: "最少步行", 8: "不乘地铁" };
</script>

<template>
  <div class="route-policies">
    <template v-if="state.routeType === 0">
      <div
        v-for="(label, key) in drivingPolicies"
        :key="key"
        class="route-policies-item"
        :class="{ active: state.drivingPolicy === Number(key) }"
        @click="state.drivingPolicy = Number(key)"
      >
        {{ label }}
      </div>
    </template>
    <template v-else-if="state.routeType === 1">
      <div
        v-for="(label, key) in transitPolicies"
        :key="key"
        class="route-policies-item"
        :class="{ active: state.transitPolicy === Number(key) }"
        @click="state.transitPolicy = Number(key)"
      >
        {{ label }}
      </div>
    </template>
  </div>
</template>
