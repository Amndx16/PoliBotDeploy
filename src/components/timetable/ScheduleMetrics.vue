<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto px-4"
  >
    <!-- Créditos -->
    <div
      class="bg-white rounded-2xl p-5 text-center transition-all flex flex-col items-center justify-center"
    >
      <h4 class="text-sm text-G50 font-medium mb-1">Créditos</h4>
      <p class="text-2xl font-semibold text-C90">{{ metrics.creditos }}</p>
    </div>

    <!-- Huecos -->
    <div
      class="bg-white rounded-2xl p-5 text-center transition-all flex flex-col items-center justify-center"
    >
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
    </div>

    <!-- Eficiencia -->
    <div
      class="bg-white rounded-2xl p-5 text-center transition-all flex flex-col items-center justify-center"
    >
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
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  metrics: {
    huecos: number
    creditos: number
    eficiencia: number
  }
}>()
</script>

<style scoped>
div:hover {
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
}
</style>
