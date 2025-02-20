<template>
  <RouterLink to="/eligibility?formType=majorRenovation">
    <div class="container mx-auto px-8 sm:px-6 lg:px-8 pt-12 pb-8">
      <h2 class="text-3xl font-bold text-center mb-8">
        Nos agences<br class="block lg:hidden" />
        en France
      </h2>
      <div class="flex flex-col items-center">
        <img
          :src="mapSrc"
          alt="Carte des agences Diteco en France"
          class="w-full max-w-3xl mb-8 -ml-6 lg:-ml-12"
        />
        <div class="text-center text-sm text-gray-600 max-w-2xl w-full">
          <span
            >Île-de-France • Nouvelle-Aquitaine • Bourgogne-Franche-Comté • Hauts-de-France • Pays
            de la Loire • Grand Est • Bretagne • Normandie • Auvergne-Rhône-Alpes • Occitanie •
            Centre-Val de Loire</span
          >
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOnRenovationDampleur = computed(
  () =>
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/renovation-dampleur',
)
const mapSrc = computed(() => {
  return isOnRenovationDampleur.value
    ? new URL('@/assets/major-renovation/france-map.png', import.meta.url).href
    : new URL('@/assets/heat-pump/france-map.png', import.meta.url).href
})
</script>
