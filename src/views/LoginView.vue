<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'

const auth = useAuthStore()

const boleta = ref('')
const password = ref('')

const handleLogin = async () => {
  if (!boleta.value || !password.value) {
    return console.warn('Completa ambos campos')
  }
  await auth.login(boleta.value, password.value)
}
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen bg-gray-50">
    <div class="bg-white rounded-md p-6 w-96 space-y-4">
      <h1 class="text-2xl font-bold text-center text-blue-600">Inicio de Sesión</h1>

      <div>
        <label class="block text-sm font-medium text-gray-700">Boleta</label>
        <input
          v-model="boleta"
          type="text"
          class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Ej. 2025123456"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input
          v-model="password"
          type="password"
          class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Tu contraseña"
        />
      </div>

      <button
        @click="handleLogin"
        :disabled="auth.loading"
        class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-60"
      >
        {{ auth.loading ? 'Cargando...' : 'Iniciar sesión' }}
      </button>

      <p v-if="auth.error" class="text-red-500 text-sm text-center">
        {{ auth.error }}
      </p>
    </div>
  </div>
</template>
