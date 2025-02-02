<template>
  <header class="py-6">
    <nav class="flex items-center justify-between">
      <h1 class="text-3xl lg:text-5xl font-bold text-white">Diteco</h1>

      <!-- Mobile burger menu -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
        <Menu v-if="!isMenuOpen" class="text-white" :size="24" />
        <X v-else class="text-white" :size="24" />
      </button>

      <!-- Desktop menu -->
      <div class="hidden md:flex items-center gap-24">
        <a class="text-white" href="#benefits">Bénéfices</a>
        <a class="text-white" href="#steps">Comment ça marche ?</a>
        <a class="text-white" href="#eligibility">Éligibilité</a>
        <a class="flex rounded-full px-5 py-2.5 bg-white" href="#footer"> Contactez-nous </a>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="isMenuOpen"
        class="fixed top-[88px] inset-x-0 bottom-0 md:hidden z-50 flex items-start pt-16 justify-center text-white overflow-y-auto"
        :class="[isOnRenovationDampleur ? 'bg-primary-green' : 'bg-primary-blue']"
      >
        <div class="flex flex-col items-center p-6 gap-8 text-center">
          <a
            v-for="(item, index) in menuItems"
            :key="index"
            :href="item.href"
            class="transition-colors duration-200 text-2xl font-medium py-2 hover:text-opacity-80"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </a>
          <a
            href="#footer"
            class="flex justify-center rounded-full px-8 py-4 bg-white transition-colors duration-200 text-xl hover:bg-opacity-90"
            :class="[isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue']"
            @click="isMenuOpen = false"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)

// Watch for isMenuOpen changes to block/unblock scrolling
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const menuItems = [
  { label: 'Bénéfices', href: '#benefits' },
  { label: 'Comment ça marche ?', href: '#steps' },
  { label: 'Éligibilité', href: '#eligibility' },
]

const router = useRouter()
const isOnRenovationDampleur = computed(
  () =>
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/renovation-dampleur',
)
</script>
