<template>
  <div class="flex flex-col items-center justify-center w-full gap-4">
    <!-- Tabs -->
    <Tabs v-if="displayedSchedules.length" v-model="selectedTab" class="w-full flex flex-col items-center">
      <!-- Lista de pestañas -->
      <TabsList
        class="flex justify-center flex-wrap"
      >
        <TabsTrigger
          v-for="(_, i) in displayedSchedules"
          :key="i"
          :value="String(i)"
          class="rounded-2xl font-thin text-sm text-C90 hover:bg-G10 transition-all"
        >
          Horario {{ i + 1 }}
        </TabsTrigger>
      </TabsList>

      <!-- Contenido centrado -->
      <div class="flex justify-center w-full">
        <div class="w-full max-w-5xl px-4">
          <TabsContent
            v-for="(horario, i) in displayedSchedules"
            :key="'content-' + i"
            :value="String(i)"
            class="flex flex-col items-center gap-6"
          >
            <ScheduleGrid :horario="horario" />
          </TabsContent>
        </div>
      </div>
    </Tabs>

    <!-- Estado vacío -->
    <div v-else class="text-center text-G50 italic py-8">
      Aún no has generado ningún horario.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ScheduleGrid from "./ScheduleGrid.vue"

interface Materia {
  nombre: string
  profesor: string
  grupo: string
  salon: string
  dias: string[]
  horaInicio: string
  horaFin: string
}

interface Horario {
  materias: Materia[]
  metrics: {
    huecos: number
    creditos: number
    eficiencia: number
  }
}

const props = defineProps<{ schedules: Horario[] }>()
const emit = defineEmits(["comparar", "exportar", "update:selectedTab"])

const selectedTab = ref("0")
watch(selectedTab, (newVal) => emit("update:selectedTab", Number(newVal)))


const displayedSchedules = computed(() => {
  if (props.schedules.length >= 3) return props.schedules
  const filler = Array.from({ length: 3 - props.schedules.length }, () => ({
    materias: [],
    metrics: { huecos: 0, creditos: 0, eficiencia: 0 },
  }))
  return [...props.schedules, ...filler]
})
</script>
