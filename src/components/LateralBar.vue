<template>
  <div class="h-full w-full flex flex-col bg-g10 text-g50 p-4">
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <img src="@/assets/Logo.png" alt="Logo" class="w-16" />
    </div>

    <!-- Buscar -->
    <div class="relative mb-8">
      <Input
        type="text"
        placeholder="Buscar..."
        class="pl-10 text-sm bg-white border border-G50/20 focus:ring-0 focus:border-C90"
      />
      <i class="ti ti-search absolute left-3 top-1/2 -translate-y-1/2 text-G50"></i>
    </div>

    <!-- Navegación -->
    <nav class="flex flex-col gap-3">
      <button
        v-for="(item, index) in menuItems"
        :key="index"
        @click="setActive(index)"
        :class="[
          'flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
          activeIndex === index ? 'text-C90' : 'text-G50 hover:text-C90'
        ]"
      >
        <component :is="item.icon" class="w-5 h-5" />
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
</style>
