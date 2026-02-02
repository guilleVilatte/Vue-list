import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import UsersList from '@/views/users/UsersList.vue'
import UserDetail from '@/views/users/UserDetail.vue'
import UserCreate from '@/views/users/UserCreate.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/usuarios',
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'usuarios',
          name: 'users',
          component: UsersList,
        },
        {
          path: 'usuarios/nuevo',
          name: 'user-create',
          component: UserCreate,
        },
        {
          path: 'usuarios/:id',
          name: 'user-detail',
          component: UserDetail,
        },
      ],
    },
  ],
})

export default router
