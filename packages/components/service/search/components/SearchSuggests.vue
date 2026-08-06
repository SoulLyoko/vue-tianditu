<script setup lang="ts">
import '../styles/search-suggests.scss'

defineOptions({ name: 'SearchSuggests' })
withDefaults(defineProps<{ suggests?: T.LocalSearchSuggest[] }>(), { suggests: () => [] })
const emit = defineEmits<{ 'suggest-click': [suggest: T.LocalSearchSuggest] }>()
</script>

<template>
  <div v-show="suggests.length" class="tdt-search-suggests">
    <div
      v-for="item in suggests"
      :key="`${item.name}-${item.address}`"
      class="search-suggests-item"
      @click="emit('suggest-click', item)"
    >
      <span class="search-suggests-item__name">{{ item.name }}</span>
      <span class="search-suggests-item__address">{{ item.address }}</span>
    </div>
  </div>
</template>
