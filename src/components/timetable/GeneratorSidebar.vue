<template>
  <div
    class="flex flex-col gap-6 bg-white rounded-2xl p-4  w-full transition-all"
  >
    <h2 class="text-C90 font-semibold text-lg text-center tracking-tight">
      Parámetros
    </h2>

    <!-- Turno preferido -->
    <div class="flex flex-col gap-2">
      <Label>Turno de Preferencia</Label>
      <Select v-model="filtros.turno">
        <SelectTrigger class="bg-G10 rounded-2xl border-none focus:ring-0">
          <SelectValue placeholder="Selecciona turno" />
        </SelectTrigger>
        <SelectContent class="bg-white rounded-2xl shadow-md">
          <SelectItem value="Matutino">Matutino</SelectItem>
          <SelectItem value="Vespertino">Vespertino</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <!-- Carga de créditos -->
    <div class="flex flex-col gap-2">
      <Label>Carga de Créditos</Label>
      <Slider
        v-model="filtros.creditos"
        :max="45"
        :min="20"
        :step="1"
      />
      <span class="text-xs text-G50">{{ filtros.creditos[0] }} créditos</span>
    </div>

    <!-- Tolerancia de huecos -->
    <div class="flex flex-col gap-2">
      <Label>Tolerancia de Huecos</Label>
      <Slider
        v-model="filtros.huecos"
        :max="8"
        :min="0"
        :step="0.5"
        :class="sliderColor"
      />
      <span class="text-xs text-G50">
        {{ filtros.huecos[0] }}
        {{ filtros.huecos[0] === 1 ? "hora" : "horas" }}
      </span>
    </div>

    <!-- Incluir reseñas -->
    <div class="flex items-center justify-between">
      <Label>Incluir Reseñas</Label>
      <Switch v-model="filtros.incluirResenas" />
    </div>

    <!-- Botón -->
    <Button
      class="bg-C90 hover:bg-C80 text-white rounded-2xl py-2 flex items-center justify-center gap-2"
      @click="$emit('generar', filtros)"
    >
      <IconClockCog class="w-4 h-4" /> Generar Horarios
    </Button>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from "vue"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { IconClockCog } from "@tabler/icons-vue"

const filtros = ref({
  creditos: [30],
  huecos: [1],
  turno: "Matutino",
  incluirResenas: true,
})

const sliderColor = computed(() => {
  const h = filtros.value.huecos?.[0] ?? 0 

  if (h <= 2) return "data-[state=active]:bg-V10" // Verde
  if (h <= 4) return "data-[state=active]:bg-Y10" // Amarillo
  return "data-[state=active]:bg-R10" // Rojo
})


defineEmits(["generar"])
</script>

<style scoped>
:deep(.reka-slider-track) {
  background-color: var(--color-G10);
}
:deep(.reka-slider-range) {
  transition: background-color 0.3s ease-in-out;
}
:deep(.data-[state=active]:bg-V10 .reka-slider-range) {
  background-color: var(--color-V10) !important;
}
:deep(.data-[state=active]:bg-Y10 .reka-slider-range) {
  background-color: var(--color-Y10) !important;
}
:deep(.data-[state=active]:bg-R10 .reka-slider-range) {
  background-color: var(--color-R10) !important;
}
</style>
