<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-6">
    <h1 class="text-4xl font-bold text-primary">
      🎉 Shadcn-Vue funcionando correctamente
    </h1>

    <!-- Ejemplo de uso del botón de Shadcn -->
    <Button @click="handleClick">
      Haz clic aquí
    </Button>

    <p v-if="clicked" class="text-green-500 text-lg mt-2">
      ¡Perfecto! Todo está funcionando 🟢
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const clicked = ref(false)

function handleClick() {
  clicked.value = true
}
</script>

<style scoped>

</style>
