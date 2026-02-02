<template>
  <div class="inputs">
    <input
      placeholder="Nombre"
      :value="name"
      @input="onInput('name', $event)"
    />
    <input
      placeholder="Email"
      :value="email"
      @input="onInput('email', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const name = route.query.name ?? ''
const email = route.query.email ?? ''

const onInput = (key: string, e: Event) => {
  router.push({
    query: {
      ...route.query,
      page: 1,
      [key]: (e.target as HTMLInputElement).value,
    },
  })
}
</script>
