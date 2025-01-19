<template>
  <div>
    <div class="container mx-auto px-8">
      <Header />

      <!-- Hero -->
      <div class="flex flex-col lg:flex-row lg:mt-16 items-center gap-8">
        <div class="w-full lg:w-[55%]">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10 leading-tight bg-gradient-to-r from-[#3E9AEA] to-[#3487d0] bg-clip-text text-transparent"
          >
            Votre Pompe à Chaleur Air/Eau pour 1 € : Saisissez Votre Chance !
          </h1>
          <div class="flex flex-col mb-8 lg:mb-10 gap-6">
            <p class="text-xl md:text-2xl font-medium">
              Profitez des aides disponibles pour réduire vos factures d'énergie
            </p>
            <p class="w-full lg:w-3/4 text-base lg:text-lg leading-relaxed text-gray-600">
              Avec Diteco, accédez à une installation clé en main pour seulement 1 € grâce aux
              subventions et à notre expertise.
            </p>
          </div>
        </div>

        <div class="relative w-full lg:w-[45%] lg:mt-12">
          <div
            class="absolute -z-10 w-[100%] h-[600px] bg-gradient-to-r from-[#3E9AEA]/20 to-[#3487d0]/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <EligibilityForm class="backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl p-8" />
        </div>
      </div>
    </div>

    <!-- Benefits -->
    <div id="benefits" class="container mx-auto px-8 pt-12 mt-12">
      <div class="flex flex-col items-center">
        <h1
          class="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-[#3E9AEA] to-[#3487d0] bg-clip-text text-transparent"
        >
          Les bénéfices d'un saut de classe énergétique
        </h1>

        <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div class="flex h-full flex-1 flex-col items-center gap-4 lg:gap-10 text-center">
            <EuroIcon class="text-[#3E9AEA]" :size="100" />
            <div>
              <h2 class="text-xl lg:text-2xl font-bold mb-4">Aides MaPrimeRénov'</h2>
              <p>
                Les aides MaPrimeRénov' varient selon les revenus : jusqu'à 5 000 € (PAC) et 10 000
                € (système solaire combiné) pour les revenus très modestes, 4 000 € et 8 000 € pour
                les modestes, et 3 000 € et 4 000 € pour les intermédiaires.
              </p>
            </div>
          </div>

          <div class="flex h-full flex-1 flex-col items-center gap-4 lg:gap-10 text-center">
            <Award class="text-[#3E9AEA]" :size="100" />
            <div>
              <h2 class="text-xl lg:text-2xl font-bold mb-4">
                Certificats d'Économies d'Énergie (CEE)
              </h2>
              <p>
                Les CEE financent jusqu'à 4 000 € pour la PAC Air/Eau (non cumulables avec le
                solaire).
              </p>
            </div>
          </div>

          <div class="flex h-full flex-1 flex-col items-center gap-4 lg:gap-10 text-center">
            <Home class="text-[#3E9AEA]" :size="100" />
            <div>
              <h2 class="text-xl lg:text-2xl font-bold mb-4">Une Installation Complète pour 1 €</h2>
              <p>
                Les logements classés G ou F ne pourront bientôt plus être loués. Prenez de l'avance
                dès maintenant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import EligibilityForm from '@/components/EligibilityForm.vue'

import { EuroIcon, Award, Home } from 'lucide-vue-next'
</script>
