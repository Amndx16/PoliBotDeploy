<template>
  <Tabs default-value="kardex">
    <TabsList class="flex flex-wrap gap-2 justify-start mb-3 w-2/6">
      <TabsTrigger value="kardex">Kardex</TabsTrigger>
      <TabsTrigger value="estado">Estado General</TabsTrigger>
      <TabsTrigger value="mapa">Mapa Curricular</TabsTrigger>
    </TabsList>

    <TabsContent value="kardex">
      <slot name="kardex" />
    </TabsContent>

    <TabsContent value="estado">
      <slot name="estado" />
    </TabsContent>

    <TabsContent value="mapa">
      <slot name="mapa" />
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
</script>
