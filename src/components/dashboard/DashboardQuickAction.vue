<template>
  <div
    class="flex flex-col items-center justify-center bg-white rounded-2xl p-4 hover:bg-C90 hover:text-white transition-all duration-200 cursor-pointer"
  >
    <component :is="icon" class="w-6 h-6 mb-2" />
    <span class="text-sm font-medium font-mont">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  icon: any
}>()
</script>
