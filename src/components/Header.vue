<template>
  <header class="py-6">
    <nav class="flex items-center justify-between">
      <img
        v-if="isOnRenovationDampleur"
        class="h-16 md:h-24"
        src="@/assets/logo_renov.png"
        alt="Diteco"
      />
      <img v-else class="h-16 md:h-24" src="@/assets/logo_pac.png" alt="Diteco" />

      <!-- Menu burger pour mobile -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
        <Menu v-if="!isMenuOpen" class="text-gray-600" :size="24" />
        <X v-else class="text-gray-600" :size="24" />
      </button>

      <!-- Menu desktop -->
      <div class="hidden md:flex items-center gap-24">
        <a class="text-gray-600" href="#benefits">Bénéfices</a>
        <a class="text-gray-600" href="#steps">Étapes</a>
        <a class="text-gray-600" href="#eligibility">Éligibilité</a>
        <a
          class="flex rounded-full px-5 py-2.5 text-white"
          :class="
            isOnRenovationDampleur
              ? 'bg-[#56B476] hover:bg-[#45a065]'
              : 'bg-[#3E9AEA] hover:bg-[#3487d0]'
          "
          href="#"
          >Diagnostic gratuit</a
        >
      </div>

      <!-- Menu mobile -->
      <div
        v-show="isMenuOpen"
        class="absolute top-24 left-0 right-0 bg-white shadow-lg md:hidden z-50"
      >
        <div class="flex flex-col p-4 gap-4">
          <a class="text-gray-600 py-2" href="#benefits">Bénéfices</a>
          <a class="text-gray-600 py-2" href="#steps">Étapes</a>
          <a class="text-gray-600 py-2" href="#eligibility">Éligibilité</a>
          <a
            class="flex justify-center rounded-full px-5 py-2.5 text-white"
            :class="
              isOnRenovationDampleur
                ? 'bg-[#56B476] hover:bg-[#45a065]'
                : 'bg-[#3E9AEA] hover:bg-[#3487d0]'
            "
            href="#"
            >Diagnostic gratuit</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)

const router = useRouter()
const isOnRenovationDampleur = computed(
  () =>
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/renovation-dampleur',
)
</script>
