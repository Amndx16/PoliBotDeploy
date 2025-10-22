<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Upload } from "lucide-vue-next"

// ✅ Datos simulados (mock)
const alumno = ref({
  nombre: "Andrea Medellín Niño",
  foto: "/mock/foto.png",
  carrera: "Ingeniería en Inteligencia Artificial",
  boleta: "2023630592",
  plantel: "ESCOM",
  curp: "TURF020523MMCRDR4R4",
  rfc: "TURF020523",
  sexo: "Mujer",
  nacimiento: {
    fecha: "23 May 2002",
    nacionalidad: "México",
    entidad: "Ciudad de México",
  },
  direccion: {
    calle: "Avenida Centenario 3004 BIS",
    colonia: "Lomas de Tarango",
    cp: "01620",
    estado: "Ciudad de México",
    municipio: "Álvaro Obregón",
    telefono: "5528618496",
    email: "trujillo.rodriguez.fernanda23@gmail.com",
    labora: "No",
  },
  escolaridad: {
    procedencia: "CET 1",
    entidadEscuela: "Ciudad de México",
    promedioSecundaria: "9.00",
    promedioBachillerato: "8.10",
  },
  tutor: {
    nombreTutor: "Sin especificar",
    rfcTutor: "XXXX999999",
    padre: "Sin especificar",
    madre: "Sin especificar",
  },
})

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
    <section class="md:col-span-1 flex flex-col items-center space-y-4">
      <div class="relative">
        <Avatar class="w-32 h-32 border border-border shadow-sm">
          <AvatarImage :src="alumno.foto" alt="Foto de perfil" />
          <AvatarFallback>{{ initials(alumno.nombre) }}</AvatarFallback>
        </Avatar>
        <Button
          variant="ghost"
          size="icon"
          class="absolute bottom-0 right-0 rounded-full bg-primary text-white hover:bg-primary/90 shadow-md"
        >
          <Upload class="h-4 w-4" />
        </Button>
      </div>

      <div class="text-center space-y-1">
        <h2 class="text-lg font-semibold">{{ alumno.nombre }}</h2>
        <p class="text-sm text-muted-foreground">{{ alumno.carrera }}</p>
      </div>

      <Button variant="secondary" class="w-full">Imprimir datos</Button>
    </section>

    <section class="md:col-span-2">
      <Tabs default-value="generales" class="w-full">
        <TabsList class="grid grid-cols-5 mb-3">
          <TabsTrigger value="generales">Generales</TabsTrigger>
          <TabsTrigger value="nacimiento">Nacimiento</TabsTrigger>
          <TabsTrigger value="direccion">Dirección</TabsTrigger>
          <TabsTrigger value="escolaridad">Escolaridad</TabsTrigger>
          <TabsTrigger value="tutor">Padre/Tutor</TabsTrigger>
        </TabsList>

        <TabsContent value="generales">
          <Card>
            <CardHeader><CardTitle>Datos Generales</CardTitle></CardHeader>
            <CardContent class="space-y-2 text-sm">
              <Field label="Boleta" :value="alumno.boleta" />
              <Field label="Plantel" :value="alumno.plantel" />
              <Field label="CURP" :value="alumno.curp" />
              <Field label="RFC" :value="alumno.rfc" />
              <Field label="Sexo" :value="alumno.sexo" />
            </CardContent>
            <CardFooter class="justify-end">
              <Button variant="outline" size="sm">Modificar</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="nacimiento">
          <Card>
            <CardHeader><CardTitle>Nacimiento</CardTitle></CardHeader>
            <CardContent class="space-y-2 text-sm">
              <p class="text-red-600 text-xs">
                Si vas a modificar tu fecha de nacimiento, usa el formato "15 Mar 1992".
              </p>
              <Field label="Fecha de Nacimiento" :value="alumno.nacimiento.fecha" />
              <Field label="Nacionalidad" :value="alumno.nacimiento.nacionalidad" />
              <Field label="Entidad de Nacimiento" :value="alumno.nacimiento.entidad" />
            </CardContent>
            <CardFooter class="justify-end">
              <Button variant="outline" size="sm">Modificar</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="direccion">
          <Card>
            <CardHeader><CardTitle>Dirección</CardTitle></CardHeader>
            <CardContent class="space-y-2 text-sm">
              <Field label="Calle" :value="alumno.direccion.calle" />
              <Field label="Colonia" :value="alumno.direccion.colonia" />
              <Field label="C.P." :value="alumno.direccion.cp" />
              <Field label="Estado" :value="alumno.direccion.estado" />
              <Field label="Municipio" :value="alumno.direccion.municipio" />
              <Field label="Teléfono" :value="alumno.direccion.telefono" />
              <Field label="Email" :value="alumno.direccion.email" />
              <Field label="Labora" :value="alumno.direccion.labora" />
            </CardContent>
            <CardFooter class="justify-end">
              <Button variant="outline" size="sm">Modificar</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="escolaridad">
          <Card>
            <CardHeader><CardTitle>Escolaridad</CardTitle></CardHeader>
            <CardContent class="space-y-2 text-sm">
              <Field label="Escuela de Procedencia" :value="alumno.escolaridad.procedencia" />
              <Field
                label="Entidad de la Escuela"
                :value="alumno.escolaridad.entidadEscuela"
              />
              <Field label="Promedio Secundaria" :value="alumno.escolaridad.promedioSecundaria" />
              <Field
                label="Promedio Nivel Medio Superior"
                :value="alumno.escolaridad.promedioBachillerato"
              />
            </CardContent>
            <CardFooter class="justify-end">
              <Button variant="outline" size="sm">Modificar</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tutor">
          <Card>
            <CardHeader><CardTitle>Padre / Tutor</CardTitle></CardHeader>
            <CardContent class="space-y-2 text-sm">
              <Field label="Nombre del Tutor" :value="alumno.tutor.nombreTutor" />
              <Field label="RFC del Tutor" :value="alumno.tutor.rfcTutor" />
              <Field label="Nombre del Padre" :value="alumno.tutor.padre" />
              <Field label="Nombre de la Madre" :value="alumno.tutor.madre" />
            </CardContent>
            <CardFooter class="justify-end">
              <Button variant="outline" size="sm">Modificar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    Field: {
      props: {
        label: { type: String, required: true },
        value: { type: [String, Number], required: true },
      },
      template: `
        <div class="flex justify-between py-1 border-b border-muted/30">
          <span class="text-muted-foreground">{{ label }}:</span>
          <span class="font-medium text-right ml-2">{{ value }}</span>
        </div>
      `,
    },
  },
}
</script>

<style scoped>
</style>
