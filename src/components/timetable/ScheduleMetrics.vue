<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
    <!-- Créditos -->
    <Card class="p-4 text-center rounded-2xl border bg-white/70 hover:bg-white transition-all">
      <h4 class="text-sm text-G50 font-medium mb-1">Créditos</h4>
      <p class="text-2xl font-semibold text-C90">{{ metrics.creditos }}</p>
    </Card>

    <!-- Huecos -->
    <Card class="p-4 text-center rounded-2xl border bg-white/70 hover:bg-white transition-all">
      <h4 class="text-sm text-G50 font-medium mb-1">Huecos</h4>
      <p
        class="text-2xl font-semibold"
        :class="{
          'text-green-600': metrics.huecos === 0,
          'text-yellow-600': metrics.huecos === 1,
          'text-red-600': metrics.huecos >= 2
        }"
      >
        {{ metrics.huecos }}
      </p>
    </Card>

    <!-- Eficiencia -->
    <Card class="p-4 text-center rounded-2xl border bg-white/70 hover:bg-white transition-all">
      <h4 class="text-sm text-G50 font-medium mb-1">Eficiencia</h4>
      <p
        class="text-2xl font-semibold"
        :class="{
          'text-green-600': metrics.eficiencia >= 90,
          'text-yellow-600': metrics.eficiencia >= 75 && metrics.eficiencia < 90,
          'text-red-600': metrics.eficiencia < 75
        }"
      >
        {{ metrics.eficiencia }}%
      </p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from "@/components/ui/card"

defineProps<{
  metrics: {
    huecos: number
    creditos: number
    eficiencia: number
  }
}>()
</script>

<style scoped>
div[class*="Card"]:hover {
  transform: translateY(-2px);
  transition: all 0.15s ease-in-out;
}
</style>
