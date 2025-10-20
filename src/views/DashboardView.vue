<template>
  <div class="flex flex-col h-full w-full bg-G10 gap-6 p-6">
    <DashboardHeader />

    <!-- Tarjetas de estadísticas -->
    <div class="grid grid-cols-3 gap-4">
      <DashboardStatCard title="Créditos Totales" :value="'245 / 280'" :icon="IconBook2" color="C90" />
      <DashboardStatCard title="Promedio General" :value="'8.9'" :icon="IconChartBar" color="V10" />
      <DashboardStatCard title="Materias Cursadas" :value="'35'" :icon="IconSchool" color="Y10" />
    </div>

    <!-- Progreso -->
    <DashboardProgress :value="87" />

    <!-- Accesos rápidos -->
    <div class="grid grid-cols-4 gap-4">
      <DashboardQuickAction label="Cargar Kardex" :icon="IconFileUpload" />
      <DashboardQuickAction label="Generar Perfil" :icon="IconUserCog" />
      <DashboardQuickAction label="Generar Horario" :icon="IconCalendarCog" />
      <DashboardQuickAction label="Ver Reseñas" :icon="IconStar" />
    </div>

    <!-- Actividad -->
    <DashboardActivity />
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue"
import DashboardStatCard from "@/components/dashboard/DashboardStatCard.vue"
import DashboardProgress from "@/components/dashboard/DashboardProgress.vue"
import DashboardQuickAction from "@/components/dashboard/DashboardQuickAction.vue"
import DashboardActivity from "@/components/dashboard/DashboardActivity.vue"

import {
  IconBook2,
  IconChartBar,
  IconSchool,
  IconFileUpload,
  IconUserCog,
  IconCalendarCog,
  IconStar,
} from "@tabler/icons-vue"
</script>
