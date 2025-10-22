<script setup lang="ts">
defineProps<{ label: string; value: string | number }>()
</script>

<template>
  <div class="flex justify-between py-1 border-b border-muted/30">
    <span class="text-muted-foreground text-sm">{{ label }}:</span>
    <span class="text-xs font-medium text-right ml-2">{{ value }}</span>
  </div>
</template>
