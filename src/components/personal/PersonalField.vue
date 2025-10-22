<template>
  <div class="flex justify-between items-center py-2 border-b border-muted/30">
    <span class="text-sm font-medium text-muted-foreground">{{ label }}:</span>
    <span class="text-sm font-semibold text-foreground">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; value: string | number }>();
</script>
