<template>
  <details>
    <summary>查看代码</summary>
    <slot></slot>
  </details>
</template>

<script lang="ts">
export default { name: "code-details" };
</script>

<style scoped>
details {
  border: 1px solid var(--vp-c-divider);
}

summary {
  text-align: center;
  cursor: pointer;
}
</style>
