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
    {
      path: '/mentions-legales',
      name: 'legal-mentions',
      component: () => import('../views/LegalView.vue'),
    },
    {
      path: '/politique-de-confidentialite',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
    },
    {
      path: '/conditions-generales-de-vente',
      name: 'cgv',
      component: () => import('../views/TermsView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
