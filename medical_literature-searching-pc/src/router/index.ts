import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/search-view',
      name: 'search-view',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/update-pdf',
      name: 'update-pdf',
      component: () => import('../views/UploadPdf.vue')
    },
    {
      path: '/my-info',
      name: 'my-info',
      component: () => import('../views/MyInfo.vue')
    },
    {
      path: '/list-show',
      name: 'list-show',
      component: () => import('../views/ListShow.vue')
    },
    {
      path: '/search-list-detail',
      name: 'search-list-detail',
      component: () => import('../views/SearchListDetail.vue')
    },

  ]
})

export default router
