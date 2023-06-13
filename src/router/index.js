import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      // 路由懒加载
      component: () => import('@/views/Login/Login.vue')
    }
  ]
})

export default router
