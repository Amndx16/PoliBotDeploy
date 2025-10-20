<template>
  <div class="h-full w-full flex flex-col text-G50 gap-6">
    <!-- Logo -->
    <div class="flex justify-start items-star">
      <img src="@/assets/Logo.png" alt="Logo" class="w-48" />
    </div>

    <!-- Buscar -->
    <div class="relative flex items-center">
      <Input
        type="text"
        placeholder="Buscar..."
        class="text-sm bg-white border border-G50/20 focus:ring-0 focus:border-C90 w-full"
      />
      <i class="ti ti-search absolute left-3 top-1/2 -translate-y-1/2 text-G50"></i>
    </div>

    <!-- Navegación -->
    <nav class="flex flex-col gap-2">
      <button
        v-for="(item, index) in menuItems"
        :key="index"
        @click="setActive(index)"
        :class="[
          'flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 select-none w-full',
          activeIndex === index ? 'text-C90 bg-G10' : 'text-G50 hover:text-C90'
        ]"
      >
        <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

/* Shadcn Components */
import { Input } from "@/components/ui/input";

/* Tabler Icons Vue */
import {
  IconLayoutDashboard,
  IconUserCircle,
  IconSchool,
  IconChalkboardTeacher,
  IconCalendarCog,
  IconChecklist,
} from "@tabler/icons-vue";

const activeIndex = ref<number | null>(null);

const setActive = (index: number) => {
  activeIndex.value = index;
};

const menuItems = [
  { label: "Dashboard", icon: IconLayoutDashboard },
  { label: "Datos Personales", icon: IconUserCircle },
  { label: "Datos Académicos", icon: IconSchool },
  { label: "Oferta Académica", icon: IconChalkboardTeacher },
  { label: "Generador de Horario", icon: IconCalendarCog },
  { label: "Docentes y Reseñas", icon: IconChecklist },
];
</script>

<style scoped>
button {
  transition: color 0.2s ease-in-out;
}

button:hover {
  color: var(--C90);
}
</style>
