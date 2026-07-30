<script setup lang="ts">
import { onMounted, provide } from "vue";
import { fixMapPropagation } from "@vue-tianditu/core";
import { useInit, useState, useWatch } from "./use";
import { RouteMapView, RoutePlans, RoutePolicies, RouteSearch, RouteTypes } from "./components";
import "../../styles/tdt-icon.scss";
import "./styles/tdt-route.scss";

defineOptions({ name: "TdtRoute" });
const state = useState();
provide("routeState", state);

onMounted(async () => {
  await useInit(state);
  useWatch(state);
});
</script>

<template>
  <div class="tdt-route" v-on="fixMapPropagation(state.tdtMap)">
    <RouteTypes />
    <RouteSearch />
    <RoutePolicies />
    <RoutePlans />
    <RouteMapView />
  </div>
</template>
