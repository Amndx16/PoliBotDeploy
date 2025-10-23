<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 p-4 rounded-2xl border bg-G10"
  >
    <!-- Información -->
    <div class="text-sm text-G50 text-center sm:text-left">
      <p>
        <span class="font-semibold text-C90">Acciones disponibles:</span>
        puedes exportar, guardar o volver a generar horarios.
      </p>
    </div>

    <!-- Botones -->
    <div class="flex flex-wrap justify-center sm:justify-end gap-2">
      <Button
        variant="outline"
        class="rounded-2xl"
        @click="$emit('comparar')"
      >
        <IconLayoutGrid class="w-4 h-4 mr-2" /> Comparar
      </Button>

      <Button
        variant="outline"
        class="rounded-2xl"
        @click="$emit('regenerar')"
      >
        <IconRefresh class="w-4 h-4 mr-2" /> Regenerar
      </Button>

      <Button
        variant="outline"
        class="rounded-2xl"
        @click="$emit('guardar')"
      >
        <IconBookmark class="w-4 h-4 mr-2" /> Guardar
      </Button>

      <Button
        class="bg-C90 hover:bg-C80 text-white rounded-2xl"
        @click="$emit('exportar')"
      >
        <IconDownload class="w-4 h-4 mr-2" /> Exportar PDF
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"
import {
  IconLayoutGrid,
  IconDownload,
  IconBookmark,
  IconRefresh,
} from "@tabler/icons-vue"

defineEmits(["comparar", "exportar", "guardar", "regenerar"])
</script>
