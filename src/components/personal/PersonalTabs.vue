<template>
  <Tabs default-value="generales" class="w-full">
    <TabsList class="grid grid-cols-5">
      <TabsTrigger v-for="s in sections" :key="s.key" :value="s.key">
        {{ s.name }}
      </TabsTrigger>
    </TabsList>

    <TabsContent value="generales">
      <PersonalCard title="Datos Generales">
        <PersonalField label="Boleta" value="2023970398" />
        <PersonalField label="Plantel" value="ESCOM" />
        <PersonalField label="CURP" value="ABCD098765DDHSTAE" />
        <PersonalField label="RFC" value="MDJSH785634" />
        <PersonalField label="Sexo" value="Mujer" />
      </PersonalCard>
    </TabsContent>

    <TabsContent value="nacimiento">
      <PersonalCard title="Nacimiento">
        <p class="text-sm text-red-600 mb-3">
          Si vas a modificar tu fecha de nacimiento, usa el formato "15 Mar 1992"
        </p>
        <PersonalField label="Fecha de Nacimiento" value="1 ene 2005" />
        <PersonalField label="Nacionalidad" value="México" />
        <PersonalField label="Entidad de Nacimiento" value="CDMX" />
      </PersonalCard>
    </TabsContent>

  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import PersonalCard from "@/components/personal/PersonalCard.vue";
import PersonalField from "@/components/personal/PersonalField.vue";

defineProps<{ sections: { name: string; key: string }[] }>();
</script>
