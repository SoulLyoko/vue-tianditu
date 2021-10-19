<template>
  <details class="code-details">
    <summary>查看代码</summary>
    <slot></slot>
  </details>
</template>

<script lang="ts">
export default { name: "code-details" };
</script>

<style scoped>
.code-details {
  padding: 10px 0;
  text-align: center;
  border: 1px solid #eee;
}
</style>
