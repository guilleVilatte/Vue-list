<template>
  <aside>
    <nav>
      <RouterLink
        to="/usuarios"
        :class="{ active: isUsersSection }"
      >
        Usuarios
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isUsersSection = computed(() =>
  route.path.startsWith('/usuarios')
)
</script>
