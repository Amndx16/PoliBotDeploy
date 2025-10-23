<template>
  <div class="flex flex-col gap-8 w-full h-full p-8 bg-G10">
    <!-- 🔹 Filtros -->
    <Card class="p-6 rounded-2xl bg-G10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Carrera -->
        <div>
          <Label for="carrera" class="text-sm text-G90 font-semibold">Carrera</Label>
          <Select v-model="filtros.carrera">
            <SelectTrigger id="carrera" class="w-full mt-1 bg-white rounded-2xl">
              <SelectValue placeholder="Selecciona una carrera" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="c in carreras" :key="c" :value="c">{{ c }}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Plan -->
        <div>
          <Label for="plan" class="text-sm text-G90 font-semibold">Plan de estudio</Label>
          <Select v-model="filtros.plan">
            <SelectTrigger id="plan" class="w-full mt-1 bg-white rounded-2xl">
              <SelectValue placeholder="Selecciona un plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PLAN 20">PLAN 20</SelectItem>
              <SelectItem value="PLAN 19">PLAN 19</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Turno -->
        <div>
          <Label for="turno" class="text-sm text-G90 font-semibold">Turno</Label>
          <Select v-model="filtros.turno">
            <SelectTrigger id="turno" class="w-full mt-1 bg-white rounded-2xl">
              <SelectValue placeholder="Selecciona turno" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Matutino">Matutino</SelectItem>
              <SelectItem value="Vespertino">Vespertino</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <!-- Segunda fila -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-end">
        <!-- Periodo -->
        <div>
          <Label for="periodo" class="text-sm text-G90 font-semibold">Periodo</Label>
          <Select v-model="filtros.periodo">
            <SelectTrigger id="periodo" class="w-full mt-1 bg-white rounded-2xl">
              <SelectValue placeholder="Selecciona periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="n in 8" :key="n" :value="String(n)">Periodo {{ n }}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Tipo de periodo -->
        <div>
          <Label class="text-sm text-G90 font-semibold mb-1 block">Selección de periodo</Label>
          <RadioGroup v-model="filtros.tipoPeriodo" class="flex flex-col gap-2">
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="actual" value="actual" />
              <Label for="actual" class="text-sm">Periodo actual</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="proximo" value="proximo" />
              <Label for="proximo" class="text-sm">Próximo periodo</Label>
            </div>
          </RadioGroup>
        </div>

        <!-- Botón -->
        <div class="flex justify-end">
          <Button
            class="w-full md:w-auto mt-4 bg-C90 hover:bg-C80 text-white rounded-2xl"
            @click="consultarOferta"
          >
            <IconSearch class="w-4 h-4 mr-2" /> Ver oferta académica
          </Button>
        </div>
      </div>
    </Card>

    <Card class="p-4 rounded-2xl bg-G10">
      <h2 class="text-lg font-semibold text-G90 mb-4">Horarios disponibles</h2>

      <div v-if="oferta.length" class="overflow-x-auto rounded-xl border border-G10">
        <Table>
          <TableHeader>
            <TableRow class="bg-C10 text-C90">
              <TableHead>Grupo</TableHead>
              <TableHead>Asignatura</TableHead>
              <TableHead>Profesor</TableHead>
              <TableHead>Edificio</TableHead>
              <TableHead>Salón</TableHead>
              <TableHead>Lun</TableHead>
              <TableHead>Mar</TableHead>
              <TableHead>Mié</TableHead>
              <TableHead>Jue</TableHead>
              <TableHead>Vie</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow
              v-for="(fila, i) in oferta"
              :key="i"
              class="hover:bg-C10/30 transition-colors"
            >
              <TableCell class="font-semibold">{{ fila.grupo }}</TableCell>
              <TableCell>{{ fila.asignatura }}</TableCell>
              <TableCell>{{ fila.profesor }}</TableCell>
              <TableCell>{{ fila.edificio }}</TableCell>
              <TableCell>{{ fila.salon }}</TableCell>
              <TableCell>{{ fila.lunes }}</TableCell>
              <TableCell>{{ fila.martes }}</TableCell>
              <TableCell>{{ fila.miercoles }}</TableCell>
              <TableCell>{{ fila.jueves }}</TableCell>
              <TableCell>{{ fila.viernes }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div v-else class="text-center text-G50 italic py-8">
        No hay horarios para los criterios seleccionados.
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table"

import { IconSearch } from "@tabler/icons-vue"

const filtros = ref({
  carrera: "",
  plan: "",
  turno: "",
  periodo: "",
  tipoPeriodo: "actual"
})

const carreras = [
  "INGENIERÍA EN INTELIGENCIA ARTIFICIAL",
  "LICENCIATURA EN CIENCIA DE DATOS"
]

const oferta = ref<any[]>([])

function consultarOferta() {
  oferta.value = [
    {
      grupo: "2BM1",
      asignatura: "Álgebra Lineal",
      profesor: "HERRERA YAÑEZ CRISPIN",
      edificio: "1",
      salon: "113",
      lunes: "12:00–13:30",
      martes: "12:00–13:30",
      miercoles: "12:00–13:30",
      jueves: "12:00–13:30",
      viernes: "—"
    },
    {
      grupo: "2BM2",
      asignatura: "Fundamentos de Diseño Digital",
      profesor: "HERNÁNDEZ CELESTINO",
      edificio: "1",
      salon: "013",
      lunes: "10:30–12:00",
      martes: "10:30–12:00",
      miercoles: "10:30–12:00",
      jueves: "10:30–12:00",
      viernes: "—"
    }
  ]
}
</script>
