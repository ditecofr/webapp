<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, watch } from 'vue'

const router = useRouter()
const isOnRenovationDampleur = computed(
  () =>
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/renovation-dampleur',
)

const title = computed(() =>
  isOnRenovationDampleur.value ? "Diteco - Rénovation D'ampleur" : 'Diteco - Pompe à chaleur',
)

watch(
  title,
  (newTitle) => {
    document.title = newTitle
  },
  { immediate: true },
)
</script>
