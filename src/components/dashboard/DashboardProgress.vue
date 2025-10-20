<template>
  <div class="flex flex-col bg-white rounded-2xl p-4">
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-sm text-G90 font-mont">Avance en tu plan de estudios</h3>
      <span class="text-sm text-C80 font-regular">{{ value }}%</span>
    </div>

    <div class="relative w-full h-3 bg-C80 rounded-full overflow-hidden">
      <div
        class="absolute top-0 left-0 h-full bg-C90 rounded-full transition-all duration-500"
        :style="{ width: `${value}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: number }>()
</script>
