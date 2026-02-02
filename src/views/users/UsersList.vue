<template>
  <section>
    <RouterLink to="/usuarios/nuevo">
      Crear usuario
    </RouterLink>

    <UsersFilters />

    <div v-if="loading">Cargando...</div>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} – {{ user.email }}
        <RouterLink :to="`/usuarios/${user.id}`">
          Ir al detalle
        </RouterLink>
      </li>
    </ul>

    <Pagination :total-pages="totalPages" />
  </section>
</template>

<script setup lang="ts">
import { useUsersList } from '@/composables/useUsersList'
import UsersFilters from '@/components/UsersFilters.vue'
import Pagination from '@/components/PaginationComp.vue'

const { users, totalPages, loading } = useUsersList()
</script>
