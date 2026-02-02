import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUsers } from '@/services/users.service'
import type { User } from '@/types/user'

export function useUsersList() {
  const route = useRoute()
  const router = useRouter()

  const users = ref<User[]>([])
  const totalPages = ref(1)
  const loading = ref(false)

  const pageSize = 10

  const fetchUsers = async () => {
    loading.value = true

    const page = Number(route.query.page ?? 1)

    const { items, totalPages: tp } = await getUsers({
      page,
      pageSize,
      name: route.query.name as string,
      email: route.query.email as string,
    })

    users.value = items
    totalPages.value = tp
    loading.value = false
  }

  watch(() => route.query, fetchUsers, { immediate: true })

  const setQuery = (query: Record<string, any>) => {
    router.push({ query: { ...route.query, ...query } })
  }

  return {
    users,
    totalPages,
    loading,
    setQuery,
  }
}
