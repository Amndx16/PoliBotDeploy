<template>
  <div class="flex flex-col justify-between bg-white rounded-2xl p-4 border-l-4" :class="`border-${color}`">
    <div class="flex items-center gap-2 text-G90">
      <component :is="icon" class="w-6 h-6 text-C90" />
      <h3 class="text-sm font-regular">{{ title }}</h3>
    </div>
    <p class="text-xl font-semibold mt-2 ">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  icon: any
  color?: string
}>()
</script>
