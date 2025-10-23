<template>
  <div class="flex flex-col h-full w-full bg-G10 gap-6 p-6">
    <DashboardHeader />

    <!-- Estadísticas -->
    <div class="grid grid-cols-3 gap-4">
      <DashboardStatCard title="Créditos Totales" :value="'245 / 280'" :icon="IconBook2"  />
      <DashboardStatCard title="Promedio General" :value="'10'" :icon="IconChartBar"  />
      <DashboardStatCard title="Materias Cursadas" :value="'35'" :icon="IconSchool" />
    </div>

    <!-- Progreso global -->
    <DashboardProgress :value="progressValue" />

    <!-- Resumen de estado -->
    <div class="grid grid-cols-2 gap-4">
      <DashboardSummaryCard
        title="Perfil académico"
        :value="hasKardex ? 'Generado' : 'Pendiente'"
        :description="hasKardex ? 'Última actualización: 6 Oct 2025' : 'Carga tu Kardex para iniciar'"
        :icon="IconUserCog"
      />
      <DashboardSummaryCard
        title="Horario recomendado"
        :value="hasSchedule ? 'Listo' : 'En espera'"
        :description="hasSchedule ? '2 escenarios disponibles' : 'Genera tu perfil académico primero'"
        :icon="IconCalendarCog"
      />
    </div>

    <!-- Acción contextual -->
    <div class="mt-4">
      <DashboardActionCard
        v-if="!hasKardex"
        label="Cargar Kardex"
        hint="Archivo .csv o .pdf"
        :icon="IconFileUpload"
        @action="handleUpload"
      />
      <DashboardActionCard
        v-else-if="!hasSchedule"
        label="Generar Horario"
        hint="Basado en tu perfil"
        :icon="IconCalendarCog"
        @action="handleGenerateSchedule"
      />
      <DashboardActionCard
        v-else
        label="Ver Comparativas"
        hint="Revisa tus escenarios"
        :icon="IconChartBar"
        @action="handleCompare"
      />
    </div>

    <!-- Actividad reciente -->
    <DashboardActivity />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue"
import DashboardStatCard from "@/components/dashboard/DashboardStatCard.vue"
import DashboardProgress from "@/components/dashboard/DashboardProgress.vue"
import DashboardSummaryCard from "@/components/dashboard/SummaryCard.vue"
import DashboardActionCard from "@/components/dashboard/DashboardActionCard.vue"
import DashboardActivity from "@/components/dashboard/DashboardActivity.vue"

import {
  IconBook2,
  IconChartBar,
  IconSchool,
  IconFileUpload,
  IconUserCog,
  IconCalendarCog,
} from "@tabler/icons-vue"

// Estados del alumno
const hasKardex = ref(false)
const hasSchedule = ref(false)

const progressValue = ref(87)

// Acciones
function handleUpload() {
  console.log("Subir Kardex")
}
function handleGenerateSchedule() {
  console.log("Generar Horario")
}
function handleCompare() {
  console.log("Comparar Horarios")
}
</script>
