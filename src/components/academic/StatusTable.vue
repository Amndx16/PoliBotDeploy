<template>
  <div class="overflow-x-auto rounded-lg border border-border shadow-sm">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No. Periodo</TableHead>
          <TableHead>Materia</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Periodo Escolar</TableHead>
          <TableHead>Veces</TableHead>
          <TableHead class="text-center">Estado</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
          v-for="(item, index) in items"
          :key="index"
          class="hover:bg-muted/40 transition-colors"
        >
          <TableCell>{{ item.periodo || item.noPeriodo || '-' }}</TableCell>
          <TableCell class="font-medium">{{ item.materia }}</TableCell>
          <TableCell>{{ item.descripcion }}</TableCell>
          <TableCell>{{ item.periodo_escolar || item.periodoEscolar || '-' }}</TableCell>
          <TableCell class="text-center">{{ item.veces ?? 0 }}</TableCell>
          <TableCell class="text-center">
            <Badge
              :variant="getBadgeVariant(item.estado || sectionType)"
              class="capitalize"
            >
              {{ item.estado || sectionType }}
            </Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface StatusItem {
  periodo?: number
  noPeriodo?: number
  materia: string
  descripcion: string
  periodo_escolar?: string
  periodoEscolar?: string
  veces?: number
  estado?: string
}

defineProps<{
  items: StatusItem[]
  sectionType?: "reprobada" | "no cursada" | "desfasada"
}>()

/**
 * Define el color del badge según tipo de materia
 */
const getBadgeVariant = (type?: string) => {
  switch (type?.toLowerCase()) {
    case "reprobada":
      return "destructive"
    case "no cursada":
      return "secondary"
    case "desfasada":
      return "outline"
    default:
      return "default"
  }
}
</script>

<style scoped>

</style>
