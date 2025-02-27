<template>
  <footer
    :class="[
      'md:pt-12 mt-12',
      isOnRenovationDampleur ? 'bg-primary-green-light' : 'bg-primary-blue-light',
    ]"
  >
    <div class="container mx-auto px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Contact -->
        <div class="flex md:justify-center">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Contact</h3>
            <p class="flex items-center gap-2">
              <Phone
                :class="isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue'"
                :size="20"
              />
              <a href="tel:0184602689" class="hover:underline">01 84 60 26 89</a>
            </p>
            <p class="flex items-center gap-2">
              <Mail
                :class="isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue'"
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
                :class="isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue'"
                :size="20"
              />
              <span>
                30 rue Baudin<br />92400 Courbevoie<br />France
                <br />
                <a
                  href="#"
                  class="mt-3 hover:underline"
                  :class="isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue'"
                  @click.prevent="showAllLocations"
                >
                  Voir toutes nos agences →
                </a>
              </span>
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
              <li>
                <router-link to="/mentions-legales" class="hover:underline"
                  >Mentions légales</router-link
                >
              </li>
              <li>
                <router-link to="/politique-de-confidentialite" class="hover:underline"
                  >Politique de confidentialité</router-link
                >
              </li>
              <li>
                <router-link to="/conditions-generales-de-vente" class="hover:underline"
                  >CGV</router-link
                >
              </li>
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

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold">Nos agences</h2>
          <button @click="showModal = false" class="text-gray-500 hover:text-gray-700">
            <XIcon :size="24" />
          </button>
        </div>

        <div class="space-y-6">
          <div
            v-for="(location, index) in locations"
            :key="index"
            class="p-4 rounded-lg"
            :class="[
              index === 0
                ? isOnRenovationDampleur
                  ? 'bg-primary-green-light'
                  : 'bg-primary-blue-light'
                : 'bg-gray-50',
            ]"
          >
            <div class="flex items-start gap-3">
              <MapPin
                :class="isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue'"
                :size="20"
              />
              <div>
                <h3 class="font-bold">{{ location.city }}</h3>
                <p class="text-gray-600">{{ location.address }}</p>
                <div v-if="index === 0" class="mt-1">
                  <span
                    class="text-sm font-medium"
                    :class="isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue'"
                    >Siège social</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { Phone, Mail, MapPin, X as XIcon } from 'lucide-vue-next'

const router = useRouter()
const showModal = ref(false)

const isOnRenovationDampleur = computed(
  () =>
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/renovation-dampleur',
)

const locations = [
  {
    city: 'Courbevoie',
    address: '30 rue Baudin, 92400 Courbevoie',
  },
  {
    city: 'Bordeaux',
    address: '81, Boulevard Pierre 1er, 33110 Bordeaux',
  },
  {
    city: 'Dijon',
    address: '8, Rue Marcel Dassault, 21000 Dijon',
  },
  {
    city: 'Douai',
    address: '148, Rue de Bellain, 59500 Douai',
  },
  {
    city: 'Nantes',
    address: '6, Rue du Danemark, 44470 Nantes',
  },
  {
    city: 'Reims',
    address: '9-11, Rue Gaston Boyer, 51100 Reims',
  },
  {
    city: 'Rennes',
    address: '18, Rue du Bourg Nouveau, 35000 Rennes',
  },
  {
    city: 'Rouen',
    address: '72, Rue de Lessard, 76100 Rouen',
  },
  {
    city: 'Saint Priest',
    address: '117, Allée des Parcs, 69800 Saint Priest',
  },
  {
    city: 'Toulouse',
    address: '3, Rue Dieudonné Costes, 31700 Toulouse',
  },
  {
    city: 'Tours',
    address: '31 Bât D, 45 bât G rue de la Milletière, 37100 Tours',
  },
]

const showAllLocations = () => {
  showModal.value = true
}
</script>

<style scoped>
/* Animation de la modale */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
