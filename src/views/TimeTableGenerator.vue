<template>
  <div class="flex flex-col md:flex-row gap-8 w-full h-full p-8 bg-G10">
    <!--  Sidebar de filtros -->
    <GeneratorSidebar
      class="md:w-1/4"
      @generar="generarHorarios"
    />

    <!--  Contenido principal -->
    <div class="flex flex-col gap-6 w-full">
      <!-- Loader -->
      <div v-if="loading" class="flex flex-col items-center justify-center h-full text-center">
        <Loader2 class="w-10 h-10 text-C90 animate-spin mb-3" />
        <p class="text-G50 text-sm">Generando horarios...</p>
      </div>

      <!-- Tabs con horarios generados -->
      <ScheduleTabs
        v-else
        :schedules="horarios"
        @comparar="compararHorarios"
        @exportar="exportarPDF"
      />

      <!-- Barra inferior -->
      <ScheduleToolbar
        v-if="horarios.length"
        @comparar="compararHorarios"
        @exportar="exportarPDF"
        @guardar="guardarHorario"
        @regenerar="regenerarHorarios"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import GeneratorSidebar from "@/components/timetable/GeneratorSidebar.vue"
import ScheduleTabs from "@/components/timetable/ScheduleTabs.vue"
import ScheduleToolbar from "@/components/timetable/ScheduleToolbar.vue"

import { Loader2 } from "lucide-vue-next"

const loading = ref(false)
const horarios = ref<any[]>([])

async function generarHorarios(_: any) {
  loading.value = true
  horarios.value = []

  // Simulación de retardo
  await new Promise((r) => setTimeout(r, 1200))

  horarios.value = [
    {
      materias: [
        {
          nombre: "Álgebra Lineal",
          profesor: "Herrera Yañez",
          grupo: "2BM1",
          salon: "113",
          dias: ["Lun", "Mar", "Mié", "Jue"],
          horaInicio: "12:00",
          horaFin: "13:30"
        },
        {
          nombre: "Diseño Digital",
          profesor: "Hernández",
          grupo: "2BM2",
          salon: "013",
          dias: ["Lun", "Mar", "Mié", "Jue"],
          horaInicio: "10:30",
          horaFin: "12:00"
        }
      ],
      metrics: {
        huecos: 1,
        creditos: 32,
        eficiencia: 88
      }
    },
    {
      materias: [
        {
          nombre: "Programación Avanzada",
          profesor: "Martínez Pérez",
          grupo: "2BM3",
          salon: "212",
          dias: ["Lun", "Mar", "Mié", "Jue"],
          horaInicio: "09:00",
          horaFin: "10:30"
        },
        {
          nombre: "Física II",
          profesor: "Gómez Díaz",
          grupo: "2BM4",
          salon: "010",
          dias: ["Lun", "Mar", "Mié", "Jue"],
          horaInicio: "12:00",
          horaFin: "13:30"
        }
      ],
      metrics: {
        huecos: 2,
        creditos: 30,
        eficiencia: 80
      }
    }
  ]

  loading.value = false
}

function exportarPDF() {
  console.log("Exportar a PDF (próximamente conectado al backend).")
}

function compararHorarios() {
  console.log("Comparar horarios (vista futura).")
}

function guardarHorario() {
  console.log("Guardar horario favorito (a implementar).")
}

function regenerarHorarios() {
  generarHorarios({})
}
</script>

<style scoped>
</style>
