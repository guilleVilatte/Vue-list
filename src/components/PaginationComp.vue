<template>
  <div>
    <button @click="prev" :disabled="page <= 1">Anterior</button>
    Página {{ page }} / {{ totalPages }}
    <button @click="next" :disabled="page >= totalPages">Siguiente</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

defineProps<{ totalPages: number }>()

const route = useRoute()
const router = useRouter()

const page = computed(() => Number(route.query.page ?? 1))

const next = () =>
  router.push({ query: { ...route.query, page: page.value + 1 } })

const prev = () =>
  router.push({ query: { ...route.query, page: page.value - 1 } })
</script>
