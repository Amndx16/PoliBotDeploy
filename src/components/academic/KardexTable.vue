<template>
  <div class="space-y-4">
    <Collapsible
      v-for="(semestre, index) in semestres"
      :key="index"
      class="border border-G20 rounded-2xl transition-all shadow-sm hover:shadow-md"
      default-open
    >
      <CollapsibleTrigger
        class="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-C90 border-b border-G20 hover:bg-G10/40 rounded-t-2xl"
      >
        <span class="flex items-center gap-2">
          <BookOpen class="h-4 w-4 text-C70" />
          {{ semestre.nombre }}
        </span>

        <ChevronDown
          class="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
        />
      </CollapsibleTrigger>

      <CollapsibleContent class="p-4 overflow-x-auto bg-transparent">
        <Table>
          <TableHeader>
            <TableRow class="border-b border-G20">
              <TableHead>Clave</TableHead>
              <TableHead>Materia</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Periodo</TableHead>
              <TableHead>Forma Eval.</TableHead>
              <TableHead>Calificación</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="mat in semestre.materias"
              :key="mat.clave"
              class="hover:bg-G10/30 transition-colors"
            >
              <TableCell class="font-medium">{{ mat.clave }}</TableCell>
              <TableCell>{{ mat.nombre }}</TableCell>
              <TableCell>{{ mat.fecha }}</TableCell>
              <TableCell>{{ mat.periodo }}</TableCell>
              <TableCell>
                <Badge
                  :variant="
                    mat.forma === 'ORD'
                      ? 'secondary'
                      : mat.forma === 'REC'
                      ? 'outline'
                      : 'default'
                  "
                  class="uppercase"
                >
                  {{ mat.forma }}
                </Badge>
              </TableCell>
              <TableCell>
                <span
                  :class="{
                    'text-green-600 font-semibold': mat.calif >= 9,
                    'text-yellow-600 font-medium':
                      mat.calif >= 7 && mat.calif < 9,
                    'text-red-600 font-semibold': mat.calif < 7
                  }"
                >
                  {{ mat.calif }}
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>

<script setup lang="ts">
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from "@/components/ui/collapsible"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, BookOpen } from "lucide-vue-next"

interface Materia {
  clave: string
  nombre: string
  fecha: string
  periodo: string
  forma: string
  calif: number
}

interface Semestre {
  nombre: string
  materias: Materia[]
}

defineProps<{ semestres: Semestre[] }>()
</script>

<style scoped>

</style>
