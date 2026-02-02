import type { User } from '@/types/user'

const users: User[] = Array.from({ length: 42 }).map((_, i) => ({
  id: i + 1,
  name: `Usuario ${i + 1}`,
  email: `user${i + 1}@mail.com`,
}))

export async function getUsers(params: {
  page: number
  pageSize: number
  name?: string
  email?: string
}) {
  await new Promise(r => setTimeout(r, 300))

  let filtered = [...users]

  if (params.name) {
    filtered = filtered.filter(u =>
      u.name.toLowerCase().includes(params.name!.toLowerCase())
    )
  }

  if (params.email) {
    filtered = filtered.filter(u =>
      u.email.toLowerCase().includes(params.email!.toLowerCase())
    )
  }

  const total = filtered.length
  const totalPages = Math.ceil(total / params.pageSize)

  const start = (params.page - 1) * params.pageSize
  const items = filtered.slice(start, start + params.pageSize)

  return { items, totalPages }
}

export async function getUserById(id: number) {
  await new Promise(r => setTimeout(r, 200))
  return users.find(u => u.id === id)
}

export async function createUser(data: Omit<User, 'id'>) {
  await new Promise(r => setTimeout(r, 300))

  if (users.some(u => u.email === data.email)) {
    throw new Error('Email ya registrado')
  }

  const newUser: User = {
    id: Date.now(),
    ...data,
  }

  users.push(newUser)
  return newUser
}
