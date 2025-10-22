<template>
  <button
    class="flex items-center justify-between w-full bg-white rounded-2xl p-4 border border-G30"
    @click="$emit('action')"
  >
    <!-- Contenido principal -->
    <div class="flex items-center gap-3">
      <!-- Ícono principal -->
      <component :is="icon" class="w-6 h-6 text-C90" />

      <!-- Texto -->
      <div class="flex flex-col items-start">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-G90 font-mont">{{ label }}</span>
        </div>
        <span v-if="hint" class="text-xs text-G60 mt-1">{{ hint }}</span>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">

defineProps<{
  label: string
  hint?: string
  icon: any
}>()

defineEmits<{
  (e: "action"): void
}>()
</script>
