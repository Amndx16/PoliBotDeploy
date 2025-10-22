<template>
  <div
    class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-5 bg-card border rounded-lg shadow-sm transition-all hover:shadow-md"
  >
    <div>
      <div class="flex items-center gap-3">
        <Badge variant="outline" class="text-sm px-3 py-1">
          {{ boleta }}
        </Badge>
        <Badge variant="secondary" class="text-xs font-medium uppercase tracking-wide">
          Plan {{ plan }}
        </Badge>
      </div>

      <h2 class="text-xl font-semibold mt-2 leading-tight">
        {{ nombre }}
      </h2>
      <p class="text-sm text-muted-foreground">
        {{ carrera }}
      </p>
    </div>

    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div
        class="flex flex-col items-center justify-center border rounded-md p-3 w-28 h-24 bg-muted/40"
      >
        <span class="text-xs text-muted-foreground">Promedio</span>
        <span
          class="text-3xl font-semibold tracking-tight"
          :class="{
            'text-green-600': promedio >= 9,
            'text-yellow-600': promedio >= 8 && promedio < 9,
            'text-red-600': promedio < 8
          }"
        >
          {{ promedio.toFixed(2) }}
        </span>
      </div>

      <Button variant="outline" size="sm" @click="$emit('download')">
        <Download class="h-4 w-4 mr-2" /> Descargar Kardex
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-vue-next"

defineProps<{
  boleta: string
  nombre: string
  carrera: string
  plan: string
  promedio: number
}>()

defineEmits(["download"])
</script>

<style scoped>

</style>
