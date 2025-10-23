<template>
  <div class="w-full">
    <Collapsible v-model="open" class="w-full transition-all duration-300">
      <!-- Encabezado -->
      <CollapsibleTrigger
        class="flex items-center justify-between w-full bg-white text-C90 px-5 py-3 rounded-t-2xl transition-all font-semibold"
      >
        <span>Parámetros de Generación</span>
        <IconChevronUp
          v-if="open"
          class="w-5 h-5 text-C80 transition-transform duration-300"
        />
        <IconChevronDown
          v-else
          class="w-5 h-5 text-C80 transition-transform duration-300"
        />
      </CollapsibleTrigger>

      <!-- Contenido -->
      <CollapsibleContent
        class="bg-white rounded-b-2xl transition-all duration-300 overflow-hidden"
      >
        <div class="flex flex-col w-full p-5">
          <GeneratorSidebar
            class="w-full"
            @generar="emit('generar', $event)"
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-vue"
import GeneratorSidebar from "./GeneratorSidebar.vue"

const open = ref(true)
const emit = defineEmits(["generar"])
</script>
