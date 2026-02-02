<template>
  <div v-if="user" class="info">
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
  <div>
    <button @click="$router.back()">Volver</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getUserById } from '@/services/users.service'
import type { User } from '@/types/user'

const route = useRoute()
const user = ref<User | undefined>()

onMounted(async () => {
  user.value = await getUserById(Number(route.params.id))
})
</script>
