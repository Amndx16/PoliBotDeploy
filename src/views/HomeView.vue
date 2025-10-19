<template>
  <div class="flex h-screen bg-g90">
    <div class="w-64 p-5">
      <LateralBar />
    </div>
    <div class="h-full w-px bg-g50"></div>
    <div class="flex-1 p-5 overflow-y-auto">
      <RouterView v-slot="{ Component }">
        <Transition name="slide-fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  display: none;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
