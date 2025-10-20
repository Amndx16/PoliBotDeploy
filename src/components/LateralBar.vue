<template>
  <div class="h-full w-full flex flex-col bg-G10 text-G50 gap-8">

    <div class="flex justify-start items-start">
      <img src="@/assets/Logo.png" alt="Logo" class="w-48" />
    </div>

    <div class="relative flex items-center w-full">
      <Input
        type="text"
        placeholder="Buscar..."
        class="text-sm bg-white w-full pl-10 rounded-2xl"
      />
      <div
        class="absolute left-3 top-1/2 -translate-y-1/2 text-G50 flex items-center justify-center"
      >
        <IconSearch class="w-5 h-5" />
      </div>
    </div>

    <nav class="flex flex-col gap-2">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        @click="setActive(index)"
        :class="[
          'flex items-center gap-3 px-4 py-2 rounded-2xl text-sm font-medium select-none transition-all duration-200 cursor-pointer w-full',
          activeIndex === index
            ? 'text-C90 bg-white'
            : 'text-G50 hover:text-C90 hover:bg-white/60'
        ]"
      >
        <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
        <span>{{ item.label }}</span>
      </div>
    </nav>

    <div
      class="mt-auto bg-white rounded-2xl flex items-center justify-between gap-2 p-3"
    >
      <div class="flex items-center gap-2">
        <div class="gap-2">
          <span class="block text-xs text-G50 font-thin mb-1">Bienvenido</span>
          <span
            class="block text-xs font-normal leading-none text-G90"
          >Mariana Robledo</span>
        </div>
      </div>
      <div
        class="flex items-center justify-center text-G90 hover:text-C90 transition-colors duration-200 cursor-pointer"
      >
        <IconLogout class="w-5 h-5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Input } from "@/components/ui/input";

/* Tabler Icons */
import {
  IconLayoutDashboard,
  IconUserCircle,
  IconSchool,
  IconChalkboardTeacher,
  IconCalendarCog,
  IconChecklist,
  IconSearch,
  IconLogout,
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
nav div {
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
</style>
