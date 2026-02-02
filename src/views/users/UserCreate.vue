<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="Nombre" />
    <span v-if="errors.name">{{ errors.name }}</span>

    <input v-model="email" placeholder="Email" />
    <span v-if="errors.email">{{ errors.email }}</span>

    <button type="submit">Guardar</button>

    <p v-if="serverError">{{ serverError }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createUser } from '@/services/users.service'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const errors = ref<{ name?: string; email?: string }>({})
const serverError = ref('')

const submit = async () => {
  errors.value = {}
  serverError.value = ''

  if (!name.value) errors.value.name = 'Requerido'
  if (!email.value) errors.value.email = 'Requerido'

  if (Object.keys(errors.value).length) return

  try {
    await createUser({ name: name.value, email: email.value })
    router.push('/usuarios')
  } catch (e) {
    serverError.value = e.message
  }
}
</script>
