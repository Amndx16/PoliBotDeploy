<template>
  <div class="flex flex-col gap-6 p-6 w-full">
    <section class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="flex items-center gap-4">
        <ProfileAvatar :src="alumno.foto" :name="alumno.nombre" />

        <div>
          <h2 class="text-lg font-semibold leading-tight">
            {{ alumno.nombre }}
          </h2>
          <p class="text-sm text-muted-foreground">{{ alumno.carrera }}</p>
        </div>
      </div>

      <Button variant="secondary" size="sm" class="self-start md:self-auto">
        Imprimir datos
      </Button>
    </section>

    <section class="w-full">
      <Tabs default-value="generales" class="w-full">
        <TabsList class="flex flex-wrap gap-2 justify-start mb-3">
          <TabsTrigger value="generales">Generales</TabsTrigger>
          <TabsTrigger value="nacimiento">Nacimiento</TabsTrigger>
          <TabsTrigger value="direccion">Dirección</TabsTrigger>
          <TabsTrigger value="escolaridad">Escolaridad</TabsTrigger>
          <TabsTrigger value="tutor">Padre/Tutor</TabsTrigger>
        </TabsList>

        <TabsContent value="generales">
          <InfoCard title="Datos Generales" editable>
            <Field label="Boleta" :value="alumno.boleta" />
            <Field label="Plantel" :value="alumno.plantel" />
            <Field label="CURP" :value="alumno.curp" />
            <Field label="RFC" :value="alumno.rfc" />
            <Field label="Sexo" :value="alumno.sexo" />
          </InfoCard>
        </TabsContent>

        <TabsContent value="nacimiento">
          <InfoCard title="Nacimiento" editable>
            <p class="text-xs text-red-600 mb-2">
              Usa el formato "15 Mar 1992" al modificar tu fecha de nacimiento.
            </p>
            <Field label="Fecha de Nacimiento" :value="alumno.nacimiento.fecha" />
            <Field label="Nacionalidad" :value="alumno.nacimiento.nacionalidad" />
            <Field label="Entidad" :value="alumno.nacimiento.entidad" />
          </InfoCard>
        </TabsContent>

        <TabsContent value="direccion">
          <InfoCard title="Dirección" editable>
            <Field label="Calle" :value="alumno.direccion.calle" />
            <Field label="Colonia" :value="alumno.direccion.colonia" />
            <Field label="C.P." :value="alumno.direccion.cp" />
            <Field label="Estado" :value="alumno.direccion.estado" />
            <Field label="Municipio" :value="alumno.direccion.municipio" />
            <Field label="Teléfono" :value="alumno.direccion.telefono" />
            <Field label="Email" :value="alumno.direccion.email" />
            <Field label="Labora" :value="alumno.direccion.labora" />
          </InfoCard>
        </TabsContent>

        <TabsContent value="escolaridad">
          <InfoCard title="Escolaridad" editable>
            <Field label="Escuela de Procedencia" :value="alumno.escolaridad.procedencia" />
            <Field label="Entidad de la Escuela" :value="alumno.escolaridad.entidadEscuela" />
            <Field label="Promedio Secundaria" :value="alumno.escolaridad.promedioSecundaria" />
            <Field label="Promedio Nivel Medio Superior" :value="alumno.escolaridad.promedioBachillerato" />
          </InfoCard>
        </TabsContent>

        <TabsContent value="tutor">
          <InfoCard title="Padre / Tutor" editable>
            <Field label="Nombre del Tutor" :value="alumno.tutor.nombreTutor" />
            <Field label="RFC del Tutor" :value="alumno.tutor.rfcTutor" />
            <Field label="Nombre del Padre" :value="alumno.tutor.padre" />
            <Field label="Nombre de la Madre" :value="alumno.tutor.madre" />
          </InfoCard>
        </TabsContent>
      </Tabs>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import ProfileAvatar from "@/components/personal/ProfileAvatar.vue"
import InfoCard from "@/components/personal/PersonalCard.vue"
import Field from "@/components/personal/Field.vue"

const alumno = ref({
  nombre: "Andrea Medellín Niño",
  carrera: "Ingeniería en Inteligencia Artificial",
  foto: "",
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
</script>

<style scoped>
</style>
