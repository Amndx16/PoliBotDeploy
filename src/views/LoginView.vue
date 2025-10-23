<template>
  <div class="w-full h-screen flex flex-row bg-slate-50 p-6">
    <!-- Imagen lateral -->
    <div class="w-3/4 h-full rounded-xl overflow-hidden">
      <img
        src="@/assets/LoginPolibot.jpg"
        alt="Login PoliBot"
        class="object-cover w-full h-full rounded-2xl"
      />
    </div>

    <!-- Formulario -->
    <div class="w-1/4 flex flex-col gap-10 p-12 justify-center">
      <!-- Logo -->
      <div class="flex justify-start">
        <img
          src="@/assets/Logo.png"
          alt="Logo PoliBot"
          class="mb-4"
        />
      </div>

      <!-- Encabezado -->
      <div class="flex flex-col text-left">
        <h2 class="text-md font-light text-G50">Sistema de Recomendación de</h2>
        <h1 class="text-4xl font-bold text-C90">POLIBOT</h1>
      </div>

      <!-- Formulario de login -->
      <form @submit="onSubmit" class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <!-- Campo Boleta -->
          <FormField v-slot="{ componentField }" name="boleta">
            <FormItem>
              <FormLabel class="text-C90">Boleta</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="text"
                  placeholder="2020123456"
                />
              </FormControl>
            </FormItem>
          </FormField>

          <!-- Campo Contraseña -->
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel class="text-C90">Contraseña</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="password"
                  placeholder="********"
                />
              </FormControl>
            </FormItem>
          </FormField>
        </div>

        <!-- Botón -->
        <div class="flex justify-center">
          <Button
            class="w-full flex items-center justify-center"
            size="lg"
            type="submit"
            :disabled="authStore.loading"
          >
            Iniciar sesión
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";


// Componentes UI
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Importar store correcta
import { useAuthStore } from "@/stores/AuthStore";

const authStore = useAuthStore();

// Esquema de validación
const formSchema = toTypedSchema(
  z.object({
    boleta: z
      .string({ required_error: "Campo requerido" })
      .regex(/^[0-9]{10}$/, "La boleta debe tener 10 dígitos"),
    password: z.string({ required_error: "Campo requerido" }),
  })
);

const form = useForm({ validationSchema: formSchema });

// Envío del formulario
const onSubmit = form.handleSubmit(async (values) => {
  try {
    await authStore.login(values.boleta, values.password);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
});

</script>

<style scoped>
</style>
