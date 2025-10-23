<template>
  <div class="w-full bg-G10 rounded-2xl p-4 overflow-x-auto transition-all duration-300">
    <!-- Cabecera de días -->
    <div class="grid grid-cols-6 text-sm font-semibold text-G90 mb-3">
      <div></div>
      <div v-for="d in dias" :key="d" class="text-center">{{ d }}</div>
    </div>

    <!-- Grid principal -->
    <div class="grid grid-cols-6 text-xs">
      <!-- Columna de horas -->
      <div class="flex flex-col gap-2 pr-2 text-right text-G50">
        <div
          v-for="h in horas"
          :key="h"
          class="h-12 flex items-center justify-end pr-1"
        >
          {{ h }}
        </div>
      </div>

      <!-- Celdas por día -->
      <div
        v-for="d in dias"
        :key="d"
        class="flex flex-col gap-2"
      >
        <div
          v-for="h in horas"
          :key="`${d}-${h}`"
          class="relative h-12 rounded-2xl bg-white/40"
        >
          <!-- Materias -->
          <div
            v-for="materia in materiasDia(d, h)"
            :key="materia.nombre"
            class="absolute inset-0 flex flex-col justify-center items-center text-center rounded-2xl bg-C10 text-C90 font-medium px-2 shadow-sm"
          >
            <span class="text-sm font-semibold leading-tight truncate w-full">{{ materia.nombre }}</span>
            <span class="text-[11px] text-G50 leading-tight">
              {{ materia.horaInicio }} - {{ materia.horaFin }}
            </span>
            <span class="text-[11px] text-G50">{{ materia.salon }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Materia {
  nombre: string
  profesor: string
  grupo: string
  salon: string
  dias: string[]
  horaInicio: string
  horaFin: string
}

const props = defineProps<{
  horario: {
    materias: Materia[]
  }
}>()

const dias = ["Lun", "Mar", "Mié", "Jue", "Vie"]
const horas = [
  "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00"
]

// Filtrar materias por día y hora
function materiasDia(dia: string, hora: string) {
  return props.horario.materias.filter((m) => {
    const coincideDia = m.dias.includes(dia)
    return coincideDia && hora === m.horaInicio
  })
}
</script>

<style scoped>
/* Hover sutil */
div[class*="bg-C10"]:hover {
  background-color: var(--color-C10);
  transform: scale(1.015);
  transition: all 0.15s ease-in-out;
}

/* Eliminar bordes del grid */
.grid > div {
  border: none !important;
}
</style>
