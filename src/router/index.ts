import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/renovation-ampleur',
      name: 'renovation-ampleur',
      component: () => import('../views/MajorRenovation.vue'),
    },
    {
      path: '/pac-ssc',
      name: 'pac-ssc',
      component: () => import('../views/HeatPump.vue'),
    },
  ],
})

export default router
