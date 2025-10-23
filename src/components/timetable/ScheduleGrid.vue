<template>
  <div class="bg-G10 rounded-2xl p-4 border w-full overflow-x-auto">
    <!-- Cabecera de días -->
    <div class="grid grid-cols-6 text-sm font-semibold text-G90 border-b pb-2 mb-2">
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
          class="h-16 flex items-start justify-end pr-1"
        >
          {{ h }}
        </div>
      </div>

      <!-- Celdas de días -->
      <div
        v-for="d in dias"
        :key="d"
        class="flex flex-col gap-2 border-l pl-2"
      >
        <div
          v-for="h in horas"
          :key="`${d}-${h}`"
          class="h-16 relative rounded-xl bg-white/50 border border-G10"
        >
          <!-- Materias -->
          <div
            v-for="materia in materiasDia(d, h)"
            :key="materia.nombre"
            class="absolute inset-0 flex flex-col justify-center items-center text-center text-xs font-medium text-G90 rounded-xl bg-C10 border border-C80"
          >
            <span class="text-sm font-semibold text-C90 leading-tight">
              {{ materia.nombre }}
            </span>
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
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00"
]

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
