<template>
  <TooltipProvider>
    <div
      class="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-2xl"
    >
      <p class="text-C90 font-semibold text-center select-none">
        Acciones rápidas
      </p>

      <div class="flex flex-row flex-wrap justify-center gap-3">
        <!-- Comparar -->
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="outline"
              @click="$emit('comparar')"
            >
              <IconLayoutGrid class="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" class="text-xs px-2 py-1">
            Comparar horarios
          </TooltipContent>
        </Tooltip>

        <!-- Regenerar -->
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="outline"
              @click="$emit('regenerar')"
            >
              <IconRefresh class="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" class="text-xs px-2 py-1">
            Regenerar horarios
          </TooltipContent>
        </Tooltip>

        <!-- Guardar -->
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="outline"
              @click="$emit('guardar')"
            >
              <IconBookmark class="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" class="text-xs px-2 py-1">
            Guardar horario
          </TooltipContent>
        </Tooltip>

        <!-- Exportar -->
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              @click="$emit('exportar')"
            >
              <IconDownload class="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" class="text-xs px-2 py-1">
            Exportar a PDF
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"
import {
  IconLayoutGrid,
  IconDownload,
  IconBookmark,
  IconRefresh,
} from "@tabler/icons-vue"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"

defineEmits(["comparar", "exportar", "guardar", "regenerar"])
</script>

<style scoped>
</style>
