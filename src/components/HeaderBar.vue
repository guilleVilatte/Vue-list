<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const title = computed(() => {
  if (route.path === '/usuarios') return 'Usuarios'
  if (route.path === '/usuarios/nuevo') return 'Crear usuario'
  if (route.path.startsWith('/usuarios/')) return 'Detalle de usuario'
  return ''
})
</script>
