<template>
  <div class="w-full h-full flex flex-col gap-4 p-4 rounded-2xl">

    <!-- Resumen académico -->
    <AcademicSummary
      :boleta="academicData.boleta"
      :nombre="academicData.nombre"
      :carrera="academicData.carrera"
      :plan="academicData.plan"
      :promedio="academicData.promedio"
      @download="descargarKardex"
    />

    <!-- Tabs -->
    <AcademicTabs v-model="activeTab">
      <!-- TAB: KARDEX -->
      <template #kardex>
        <KardexTable :semestres="academicData.kardex" />
      </template>

      <!-- TAB: ESTADO GENERAL -->
      <template #estado>
        <AcademicStatus :estado="academicData.estado" />
      </template>

      <!-- TAB: MAPA CURRICULAR -->
      <template #mapa>
        <div
          class="flex flex-col items-center justify-center text-center text-muted-foreground py-12 border rounded-2xl"
        >
          <p class="text-sm">El mapa curricular estará disponible próximamente.</p>
        </div>
      </template>
    </AcademicTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Componentes
import AcademicSummary from "@/components/academic/AcademicSummary.vue"
import AcademicStatus from "@/components/academic/AcademicStatus.vue"
import AcademicTabs from "@/components/academic/AcademicTabs.vue"
import KardexTable from "@/components/academic/KardexTable.vue"

// Estado local para controlar la pestaña activa
const activeTab = ref("kardex")

// Datos simulados por ahora
const academicData = {
  boleta: "2023970398",
  nombre: "Andrea Medellín Niño",
  carrera: "Ingeniería en Inteligencia Artificial",
  plan: "2020",
  promedio: 10,
  estado: {
    reprobadas: [
      { materia: "Matemáticas Discretas", descripcion: "No aprobada", veces: 2 },
    ],
    noCursadas: [
      { materia: "Administración", descripcion: "Pendiente de cursar", veces: 0 },
    ],
    desfasadas: [],
  },
  kardex: [
    {
      nombre: "1er Semestre",
      materias: [
        {
          clave: "IA101",
          nombre: "Fundamentos de Programación",
          fecha: "2023-06-15",
          periodo: "2023-1",
          forma: "ORD",
          calif: 10,
        },
        {
          clave: "MT101",
          nombre: "Matemáticas Discretas",
          fecha: "2023-06-15",
          periodo: "2023-1",
          forma: "ORD",
          calif: 10,
        },
      ],
    },
    {
      nombre: "2do Semestre",
      materias: [
        {
          clave: "PR102",
          nombre: "Algoritmos y Estructuras de Datos",
          fecha: "2024-01-10",
          periodo: "2023-2",
          forma: "ORD",
          calif: 10,
        },
      ],
    },
  ],
}

// Evento del botón "Descargar Kardex"
const descargarKardex = () => {
  console.log(" Descargando Kardex...")
}
</script>

<style scoped>
</style>
