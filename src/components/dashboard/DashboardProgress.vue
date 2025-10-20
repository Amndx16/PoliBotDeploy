<template>
  <div class="flex flex-col bg-white rounded-2xl p-4">
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-sm font-semibold text-G90 font-mont">Avance en tu plan de estudios</h3>
      <span class="text-sm text-C90 font-semibold">{{ value }}%</span>
    </div>
    <Progress :value="value" class="h-3 bg-G10 [&>div]:bg-C90 rounded-full" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from "@/components/ui/progress"
defineProps<{ value: number }>()
</script>
