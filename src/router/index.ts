import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '../core/constants/routes.constants'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'dashboard',
      path: ROUTES.DASHBOARD,
      component: () => import('../views/dashbaord/DashboardView.vue'),
    },
    {
      name: 'profiles',
      path: ROUTES.USERS,
      component: () => import('../views/profile/ProfileView.vue'),
    },
  ],
})

export default router
