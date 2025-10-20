<template>
  <div class="bg-white rounded-2xl p-4 flex flex-col gap-3">
    <h3 class="text-sm font-semibold text-G90 font-mont mb-1">Última actividad</h3>
    <div class="flex items-center gap-2 text-G50 text-xs" v-for="(item, i) in activities" :key="i">
      <component :is="item.icon" class="w-4 h-4 text-C90" />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconClockHour4, IconHistory } from "@tabler/icons-vue"

const activities = [
  { icon: IconClockHour4, text: "Último horario generado: hace 2 días" },
  { icon: IconHistory, text: "Kardex actualizado: 12/oct/2025" },
  { icon: IconHistory, text: "Oferta académica consultada: hace 3 días" },
]
</script>
