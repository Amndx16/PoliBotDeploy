<template>
  <div class="w-full bg-G10 rounded-2xl p-4 overflow-x-auto transition-all duration-300">
    <!-- Cabecera de días -->
    <div class="grid grid-cols-6 text-xs font-semibold text-G90 mb-3 gap-x-3">
      <div></div>
      <div v-for="d in dias" :key="d" class="text-center">{{ d }}</div>
    </div>

    <!-- Grid principal -->
    <div class="grid grid-cols-6 text-[11px] gap-x-3 gap-y-0">
      <!-- Columna de horas -->
      <div class="flex flex-col gap-3 pr-2 text-right text-G50">
        <div
          v-for="h in horas"
          :key="h"
          class="h-10 flex items-center justify-end pr-1"
        >
          {{ h }}
        </div>
      </div>

      <!-- Celdas por día -->
      <div
        v-for="d in dias"
        :key="d"
        class="flex flex-col gap-3"
      >
        <div
          v-for="h in horas"
          :key="`${d}-${h}`"
          class="relative h-10 rounded-2xl bg-white flex items-center justify-center p-1"
        >
          <!-- Materias -->
          <div
            v-for="materia in materiasDia(d, h)"
            :key="materia.nombre"
            class="absolute inset-0 flex flex-col justify-center items-center text-center rounded-xl bg-C10 text-C90 font-medium p-1"
          >
            <span class="text-xs font-semibold leading-tight truncate w-full">{{ materia.nombre }}</span>
            <span class="text-[10px] text-G50">{{ materia.salon }}</span>
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
div[class*="bg-C10"]:hover {
  background-color: var(--color-C10);
  transform: scale(1.01);
  transition: all 0.15s ease-in-out;
}
</style>
