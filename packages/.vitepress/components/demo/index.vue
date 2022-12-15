<template>
  <div class="demo">
    <div class="code-demo">
      <slot name="demo"></slot>
    </div>
    <details class="code-details">
      <summary>View source</summary>
      <slot name="code"></slot>
    </details>
  </div>
</template>

<script lang="ts">
export default { name: "demo" };
</script>

<style lang="scss" scoped>
.demo {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;

  .code-demo {
    padding: 20px;
  }

  .code-details {
    text-align: center;
    border-top: 1px solid var(--vp-c-divider-light);

    summary {
      padding: 10px 0;
      margin: 0;
      cursor: pointer;
    }

    :deep([class^="language"]) {
      margin: 0 !important;
    }
  }
}
</style>
