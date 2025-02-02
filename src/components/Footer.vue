<template>
  <footer :class="['md:pt-12 mt-12', isOnRenovationDampleur ? 'bg-[#DAEADF]' : 'bg-[#EBF5FC]']">
    <div class="container mx-auto px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Contact -->
        <div class="flex md:justify-center">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Contact</h3>
            <p class="flex items-center gap-2">
              <Phone
                :class="isOnRenovationDampleur ? 'text-[#56B476]' : 'text-[#3E9AEA]'"
                :size="20"
              />
              <span>08 91 65 21 51</span>
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
              <span>30 rue Baudin<br />92400 Courbevoie<br />France</span>
            </p>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex md:justify-center">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Navigation</h3>
            <ul class="space-y-2">
              <li><RouterLink to="/" class="hover:underline">Accueil</RouterLink></li>
              <li>
                <RouterLink to="/renovation-dampleur" class="hover:underline"
                  >Rénovation d'ampleur</RouterLink
                >
              </li>
              <li><a href="#eligibility" class="hover:underline">Éligibilité</a></li>
            </ul>
          </div>
        </div>

        <!-- Legal -->
        <div class="flex md:justify-center">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Informations légales</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline">Mentions légales</a></li>
              <li><a href="#" class="hover:underline">Politique de confidentialité</a></li>
              <li><a href="#" class="hover:underline">CGU</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-12 border-t border-gray-200">
        <p class="text-center text-gray-600 text-sm">
          © {{ new Date().getFullYear() }} Diteco. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const router = useRouter()
const isOnRenovationDampleur = computed(
  () =>
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/renovation-dampleur',
)
</script>
