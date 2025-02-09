import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MajorRenovationView.vue'),
    },
    {
      path: '/renovation-dampleur',
      name: 'renovation-dampleur',
      component: () => import('../views/MajorRenovationView.vue'),
    },
    {
      path: '/pac-ssc',
      name: 'pac-ssc',
      component: () => import('../views/HeatPumpView.vue'),
    },
    {
      path: '/eligibility',
      name: 'eligibility',
      component: () => import('../views/EligibilityView.vue'),
    },
  ],
})

export default router
