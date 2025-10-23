<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-vue-next"
import { computed } from "vue"
import profileImg from "@/assets/profile.png"


interface Props {
  src?: string
  name: string
}

const props = defineProps<Props>()
const emit = defineEmits(["upload"])

const initials = computed(() =>
  props.name
    ? props.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "?"
)

/* const safeSrc = computed(() => props.src ?? "")
const safeAlt = computed(() => props.name || "Foto de perfil") */
</script>

<template>
  <div class="relative group">
    <Avatar class="w-32 h-32 border border-border overflow-hidden">
    <AvatarImage :src="profileImg" alt="Foto de perfil" />
      <AvatarFallback>{{ initials }}</AvatarFallback>
    </Avatar>

    <Button
      size="icon"
      class="absolute bottom-0 right-0 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition"
      @click="emit('upload')"
    >
      <Upload class="h-4 w-4" />
    </Button>
  </div>
</template>
