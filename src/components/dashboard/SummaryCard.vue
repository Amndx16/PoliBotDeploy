<template>
  <div class="flex flex-col justify-between bg-white rounded-2xl p-4 border border-G30 shadow-sm">
    <div class="flex items-center gap-2 text-G90">
      <component :is="icon" class="w-6 h-6 text-C90" />
      <h3 class="text-sm font-semibold font-mont">{{ title }}</h3>
    </div>

    <p class="text-xl font-semibold text-G90 mt-2 font-mont">
      {{ value }}
    </p>

    <p v-if="description" class="text-xs text-G60 mt-1">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  description?: string
  icon: any
}>()
</script>
