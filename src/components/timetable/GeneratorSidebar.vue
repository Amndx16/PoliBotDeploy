<template>
  <div class="flex flex-col gap-6 bg-G10 rounded-2xl p-6 border w-full md:w-72">
    <h2 class="text-C90 font-semibold text-lg">Parámetros de Generación</h2>

    <!-- Turno preferido -->
    <div>
      <Label>Turno de Preferencia</Label>
      <Select v-model="filtros.turno">
        <SelectTrigger class="mt-1 bg-white rounded-2xl">
          <SelectValue placeholder="Selecciona turno" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Matutino">Matutino</SelectItem>
          <SelectItem value="Vespertino">Vespertino</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <!-- Carga de créditos -->
    <div>
    <Label>Carga de Créditos</Label>
    <Slider
        v-model="filtros.creditos"
        :max="45"
        :min="20"
        :step="1"
        class="mt-2"
    />
    <span class="text-xs text-G50">{{ filtros.creditos[0] }} créditos</span>
    </div>

    <!-- Tolerancia de huecos -->
    <div>
    <Label>Tolerancia de Huecos</Label>
    <Slider
        v-model="filtros.huecos"
        :max="3"
        :min="0"
        :step="1"
        class="mt-2"
    />
    <span class="text-xs text-G50">{{ filtros.huecos[0] }} horas</span>
    </div>


    <!-- Incluir reseñas -->
    <div class="flex items-center justify-between">
      <Label>Incluir Reseñas</Label>
    <Switch v-model="filtros.incluirResenas" />
    </div>

    <!-- Botón principal -->
    <Button
      class="mt-4 bg-C90 hover:bg-C80 text-white rounded-2xl"
      @click="$emit('generar', filtros)"
    >
      <IconClockCog class="w-4 h-4 mr-2" /> Generar Horarios
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { IconClockCog } from "@tabler/icons-vue"

const filtros = ref({
  creditos: [30], 
  huecos: [1],
  turno: "Matutino",
  incluirResenas: true
})


defineEmits(["generar"])
</script>
