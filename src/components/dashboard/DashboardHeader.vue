<template>
  <div class="flex items-center justify-between bg-white rounded-2xl px-6 py-4">
    <div class="flex flex-col">
      <h1 class="text-xl font-semibold text-C90">Hola, Andrea </h1>
      <p class="text-sm text-G50 font-mont">Tu resumen académico del semestre</p>
    </div>
    <span class="text-xs text-G50">{{ today }}</span>
  </div>
</template>

<script setup lang="ts">
const today = new Date().toLocaleDateString('es-MX', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
</script>
