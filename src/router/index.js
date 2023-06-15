import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/ILayout.vue'
import Home from '@/views/Home/IHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/ICategory.vue')
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/SubCategory/SubCategory.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Detail/IDetail.vue')
        },
        {
          path: 'cartList',
          component: () => import('@/views/CartList/CartList.vue')
        },
        {
          path: 'checkout',
          component: () => import('@/views/Checkout/Checkout.vue')
        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/IPay.vue')
        }
      ]
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
