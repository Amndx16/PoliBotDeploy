<template>
  <div class="flex flex-col gap-6 w-full">
    <!-- Encabezado -->
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-C90">Horarios Generados</h2>
      <div v-if="schedules.length" class="flex gap-2">
        <Button variant="outline" size="sm" @click="$emit('comparar')">
          <IconLayoutGrid class="w-4 h-4 mr-2" /> Comparar
        </Button>
        <Button variant="outline" size="sm" @click="$emit('exportar')">
          <IconDownload class="w-4 h-4 mr-2" /> Exportar
        </Button>
      </div>
    </div>

    <!-- Tabs -->
    <Tabs v-if="schedules.length" v-model="selectedTab" class="w-full">
      <TabsList class="flex flex-wrap gap-2 bg-G10/60 rounded-2xl p-1">
        <TabsTrigger
          v-for="(_, i) in schedules"
          :key="i"
          :value="String(i)"
          class="rounded-xl px-4 py-1 text-sm data-[state=active]:bg-C10 data-[state=active]:text-C90"
        >
          Horario {{ i + 1 }}
        </TabsTrigger>
      </TabsList>

      <TabsContent
        v-for="(horario, i) in schedules"
        :key="'content-' + i"
        :value="String(i)"
        class="mt-4"
      >
        <ScheduleGrid :horario="horario" />
        <ScheduleMetrics :metrics="horario.metrics" class="mt-6" />
      </TabsContent>
    </Tabs>

    <div v-else class="text-center text-G50 italic py-8">
      Aún no has generado ningún horario.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

import ScheduleGrid from "./ScheduleGrid.vue"
import ScheduleMetrics from "./ScheduleMetrics.vue"

import { IconDownload, IconLayoutGrid } from "@tabler/icons-vue"

/* Props */
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

defineProps<{
  schedules: Horario[]
}>()

defineEmits(["comparar", "exportar"])

const selectedTab = ref("0")
</script>
