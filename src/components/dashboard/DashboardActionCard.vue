<template>
  <button
    class="flex items-center justify-between w-full bg-white text-white rounded-2xl p-4 transition hover:bg-C70"
    @click="$emit('action')"
  >
    <div class="flex items-center gap-3">
      <component :is="icon" class="w-6 h-6" />
      <span class="text-G50 font-mont">{{ label }}</span>
    </div>
    <span class="text-xs text-G50 opacity-80">{{ hint }}</span>
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
