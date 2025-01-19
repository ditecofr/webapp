<template>
  <footer :class="['md:pt-12 mt-12', isOnRenovationDampleur ? 'bg-[#DAEADF]' : 'bg-[#EBF5FC]']">
    <div class="container mx-auto px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and Description -->
        <div class="flex md:justify-center">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">À propos</h3>
            <p class="text-gray-600">
              Avec Diteco et mon accompagnateur Rénov', améliorez votre confort, réduisez vos
              factures et valorisez votre logement.
            </p>
            <p class="font-semibold">Diteco : Expertise, économies, écologie.</p>
          </div>
        </div>

        <!-- Contact -->
        <div class="flex md:justify-center">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Contact</h3>
            <p class="flex items-center gap-2">
              <Phone
                :class="isOnRenovationDampleur ? 'text-[#56B476]' : 'text-[#3E9AEA]'"
                :size="20"
              />
              <span>000000000</span>
            </p>
            <p class="flex items-center gap-2">
              <Mail
                :class="isOnRenovationDampleur ? 'text-[#56B476]' : 'text-[#3E9AEA]'"
                :size="20"
              />
              <span>contact@diteco.fr</span>
            </p>
          </div>
        </div>

        <!-- Address -->
        <div class="flex md:justify-center">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Adresse</h3>
            <p class="flex items-center gap-2">
              <MapPin
                :class="isOnRenovationDampleur ? 'text-[#56B476]' : 'text-[#3E9AEA]'"
                :size="20"
              />
              <span>123 rue de la Rénovation<br />75000 Paris</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-6">
        <p class="text-center text-gray-600 text-sm">
          © {{ new Date().getFullYear() }} Diteco. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const router = useRouter()
const isOnRenovationDampleur = computed(
  () =>
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/renovation-dampleur',
)
</script>
