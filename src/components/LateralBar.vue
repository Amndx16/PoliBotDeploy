<template>
  <div class="h-full w-full flex flex-col bg-G10 text-G50 gap-8">
    <!-- Logo -->
    <div class="flex justify-start items-start">
      <img src="@/assets/Logo.png" alt="Logo" class="w-48" />
    </div>

    <!-- Buscar -->
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

    <!-- Navegación -->
    <nav class="flex flex-col gap-2">
      <RouterLink
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.to"
        class="flex items-center gap-3 px-4 py-2 rounded-2xl text-sm font-medium select-none transition-all duration-200 cursor-pointer w-full"
        :class="[
          route.name === item.name
            ? 'text-C90 bg-white'
            : 'text-G50 hover:text-C90 hover:bg-white/60'
        ]"
      >
        <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <div
      class="mt-auto bg-white rounded-2xl flex items-center justify-between gap-2 p-3"
    >
      <div class="flex items-center gap-2">
        <div class="gap-2">
          <span class="block text-xs text-G50 font-thin mb-1">Bienvenido</span>
          <span class="block text-xs font-normal leading-none text-G90">
            Andrea Medellin
          </span>
        </div>
      </div>

      <div
        class="flex items-center justify-center text-G90 hover:text-C90 transition-colors duration-200 cursor-pointer"
        @click="cerrarSesion"
      >
        <IconLogout class="w-5 h-5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/AuthStore";

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

const route = useRoute();
const authStore = useAuthStore();

const menuItems = [
  { label: "Dashboard", icon: IconLayoutDashboard, to: { name: "dashboard" }, name: "dashboard" },
  { label: "Datos Personales", icon: IconUserCircle, to: { name: "datos-personales" }, name: "datos-personales" },
  { label: "Datos Académicos", icon: IconSchool, to: { name: "datos-academicos" }, name: "datos-academicos" },
  { label: "Oferta Académica", icon: IconChalkboardTeacher, to: { name: "oferta-academica" }, name: "oferta-academica" },
  { label: "Generador de Horario", icon: IconCalendarCog, to: { name: "generador-horario" }, name: "generador-horario" },
  { label: "Docentes y Reseñas", icon: IconChecklist, to: { name: "docentes-resenas" }, name: "docentes-resenas" },
];

const cerrarSesion = () => {
  authStore.logout();
};
</script>

<style scoped>
nav a {
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  text-decoration: none;
}
</style>
