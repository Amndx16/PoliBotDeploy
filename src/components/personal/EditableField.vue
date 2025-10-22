<script setup lang="ts">
import { ref } from "vue"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-vue-next"

const props = defineProps<{
  label: string
  value: string | number
}>()

const emit = defineEmits(["update:value"])

const tempValue = ref(props.value)
const open = ref(false)

const save = () => {
  emit("update:value", tempValue.value)
  open.value = false
}
</script>

<template>
  <div class="flex justify-between items-center py-2 border-b border-muted/30">
    <span class="text-sm text-muted-foreground">{{ label }}:</span>

    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <div
          class="flex items-center gap-2 cursor-pointer text-sm font-semibold text-foreground hover:text-primary transition"
        >
          {{ value }}
          <Pencil class="w-3.5 h-3.5" />
        </div>
      </PopoverTrigger>

      <PopoverContent class="w-64 p-3 space-y-2" align="end">
        <Input v-model="tempValue" class="w-full" />
        <div class="flex justify-end gap-2">
          <Button size="sm" variant="secondary" @click="open = false">Cancelar</Button>
          <Button size="sm" @click="save">Guardar</Button>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
