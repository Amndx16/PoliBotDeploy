<template>
  <div class="space-y-6">
    <section v-if="estado.reprobadas.length">
      <h4 class="font-semibold text-red-600 mb-2">Materias Reprobadas</h4>
      <StatusTable :items="estado.reprobadas" sectionType="reprobada" />
    </section>

    <section v-if="estado.noCursadas.length">
      <h4 class="font-semibold text-amber-600 mb-2">Materias No Cursadas</h4>
      <StatusTable :items="estado.noCursadas" sectionType="no cursada" />
    </section>

    <section v-if="estado.desfasadas.length">
      <h4 class="font-semibold text-blue-600 mb-2">Materias Desfasadas</h4>
      <StatusTable :items="estado.desfasadas" sectionType="desfasada" />
    </section>

    <section
      v-if="!estado.reprobadas.length && !estado.noCursadas.length && !estado.desfasadas.length"
      class="text-center text-muted-foreground italic py-8"
    >
      No hay materias pendientes
    </section>
  </div>
</template>

<script setup lang="ts">
import StatusTable from "@/components/academic/StatusTable.vue"

defineProps<{
  estado: {
    reprobadas: any[]
    noCursadas: any[]
    desfasadas: any[]
  }
}>()
</script>
