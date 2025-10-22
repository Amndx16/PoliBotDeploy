<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

defineProps<{
  title: string
  editable?: boolean
}>()

const emit = defineEmits(["edit"])
</script>

<template>
  <Card class="shadow-sm hover:shadow-md transition-all duration-200">
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
    </CardHeader>

    <CardContent class="space-y-2 text-sm">
      <slot />
    </CardContent>

    <CardFooter class="justify-end">
      <Button v-if="editable" variant="outline" size="sm" @click="emit('edit')">
        Modificar
      </Button>
    </CardFooter>
  </Card>
</template>
