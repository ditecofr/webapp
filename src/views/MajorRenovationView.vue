<template>
  <div>
    <div class="hero-background">
      <div class="container mx-auto px-8 sm:px-6 lg:px-8 pb-12">
        <Header />

        <!-- Hero -->
        <div class="flex flex-col lg:flex-row lg:mt-16 items-center justify-between pt-8">
          <div class="w-full lg:w-[60%] text-white text-center lg:text-left lg:pt-8">
            <h1 class="text-4xl lg:text-7xl font-bold font-jakarta mb-8 lg:mb-10">
              Donnez<br class="block lg:hidden" />
              une nouvelle vie à votre logement
            </h1>
            <div class="flex flex-col lg:mb-10 gap-6">
              <p class="text-xl md:text-2xl">
                Jusqu'à 63 000 € d'aides pour améliorer votre Classe Énergétique.
                <br class="hidden lg:block" />Diteco vous accompagne pour réduire vos factures
              </p>
            </div>
          </div>

          <div id="eligibility" class="relative w-full lg:w-[40%] pt-8 lg:pt-0">
            <!-- Desktop form -->
            <div class="hidden lg:block">
              <EligibilityForm formType="renovation-dampleur" />
            </div>
            <!-- Mobile button -->
            <div class="lg:hidden flex justify-center">
              <RouterLink
                to="/eligibility?formType=majorRenovation"
                class="inline-block rounded-full px-8 py-3.5 bg-primary-green text-white hover:bg-primary-green/90 text-center"
              >
                Vérifier mon éligibilité
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits -->
    <div id="benefits" class="container mx-auto px-8 sm:px-6 lg:px-8 py-12 lg:py-20">
      <h1 class="text-4xl text-center lg:text-5xl font-bold font-jakarta mb-10 lg:mb-14">
        Pourquoi opter pour<br class="hidden lg:block" />
        la rénovation d'ampleur ?
      </h1>

      <div class="hidden lg:flex flex-row justify-between gap-8 lg:gap-12 xl:gap-20 mb-20">
        <div class="flex h-full flex-1 flex-col items-center gap-6 text-center">
          <div class="bg-repeat bg-primary-green/5 rounded-xl p-8 mb-2">
            <TrendingDown class="text-primary-green size-24" />
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Économies d'énergie</h2>
            <p>
              Passez de la classe G ou F à une classe D, C ou mieux et économisez jusqu'à 70 % sur
              vos factures
            </p>
          </div>
        </div>

        <div class="flex h-full flex-1 flex-col items-center gap-6 text-center">
          <div class="bg-repeat bg-primary-green/5 rounded-xl p-8 mb-2">
            <Leaf class="text-primary-green size-24" />
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Un confort amélioré</h2>
            <p>Température stable, meilleure isolation acoustique et qualité de l'air améliorée</p>
          </div>
        </div>

        <div class="flex h-full flex-1 flex-col items-center gap-6 text-center">
          <div class="bg-repeat bg-primary-green/5 rounded-xl p-8 mb-2">
            <ShieldCheck class="text-primary-green size-24" />
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Conformité réglementaire</h2>
            <p>
              Les logements classés G ou F ne pourront bientôt plus être loués. Prenez de l'avance
              dès maintenant
            </p>
          </div>
        </div>
      </div>

      <!-- Version mobile avec Swiper -->
      <div class="lg:hidden relative">
        <swiper
          :modules="[Pagination, Autoplay]"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000 }"
          class="w-full"
        >
          <swiper-slide class="px-4">
            <div class="flex flex-col items-center gap-4 text-center">
              <div class="bg-repeat bg-primary-green/5 rounded-xl p-6">
                <TrendingDown class="text-primary-green size-16" />
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">Économies d'énergie</h2>
                <p class="text-sm">Économisez jusqu'à 70% sur vos factures</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="px-4">
            <div class="flex flex-col items-center gap-4 text-center">
              <div class="bg-repeat bg-primary-green/5 rounded-xl p-6">
                <Leaf class="text-primary-green size-16" />
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">Un confort amélioré</h2>
                <p class="text-sm">Température stable et meilleure isolation</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="px-4">
            <div class="flex flex-col items-center gap-4 text-center">
              <div class="bg-repeat bg-primary-green/5 rounded-xl p-6">
                <ShieldCheck class="text-primary-green size-16" />
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">Conformité réglementaire</h2>
                <p class="text-sm">Anticipez les nouvelles réglementations</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Section des exemples avec fond contrasté -->
      <div class="bg-gray-50 rounded-2xl p-6 lg:p-12 mt-10 lg:mt-20">
        <h2 class="text-2xl font-bold text-center mb-8 lg:mb-12">
          Exemples de rénovations réussies
          <span class="block text-lg font-normal text-gray-600 mt-2">
            Découvrez les transformations réalisées
          </span>
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="relative h-full">
            <div class="h-full flex flex-col">
              <img
                src="@/assets/major-renovation/example1.png"
                alt="Exemple de rénovation 1"
                class="w-full h-56 object-cover object-center rounded-t-lg"
              />
              <div class="bg-white rounded-lg p-6 flex-1">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center">
                      <div class="h-10 px-4 bg-[#d31d1d] flex items-center">
                        <span class="text-white font-bold text-lg">G</span>
                      </div>
                      <div
                        class="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-l-[#d31d1d] border-t-transparent border-b-transparent"
                      ></div>
                    </div>

                    <div class="flex items-center">
                      <div class="h-0.5 w-8 bg-primary-green relative">
                        <div
                          class="absolute right-0 -mt-1.5 w-3 h-3 border-t-2 border-r-2 border-primary-green transform rotate-45"
                        ></div>
                      </div>
                    </div>

                    <div class="flex items-center">
                      <div class="h-10 px-4 bg-[#fece00] flex items-center">
                        <span class="text-black font-bold text-lg">D</span>
                      </div>
                      <div
                        class="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-l-[#fece00] border-t-transparent border-b-transparent"
                      ></div>
                    </div>
                  </div>
                  <i class="fas fa-home text-primary-green text-2xl"></i>
                </div>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-tools text-primary-green mt-1"></i>
                    <p class="flex-1">
                      <strong>Travaux :</strong> Isolation des murs et des combles, remplacement
                      d'un chauffage électrique par une pompe à chaleur
                    </p>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-euro-sign text-primary-green mt-1"></i>
                    <p class="flex-1"><strong>Aides obtenues :</strong> 38 000 €</p>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-piggy-bank text-primary-green mt-1"></i>
                    <p class="flex-1">
                      <strong>Économies réalisées :</strong> -55 % sur les factures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-full">
            <div class="h-full flex flex-col">
              <img
                src="@/assets/major-renovation/example2.png"
                alt="Exemple de rénovation 2"
                class="w-full h-56 object-cover object-center rounded-t-lg"
              />
              <div class="bg-white rounded-lg p-6 flex-1">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center">
                      <div class="h-10 px-4 bg-[#f48e1b] flex items-center">
                        <span class="text-white font-bold text-lg">F</span>
                      </div>
                      <div
                        class="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-l-[#f48e1b] border-t-transparent border-b-transparent"
                      ></div>
                    </div>

                    <div class="flex items-center">
                      <div class="h-0.5 w-8 bg-primary-green relative">
                        <div
                          class="absolute right-0 -mt-1.5 w-3 h-3 border-t-2 border-r-2 border-primary-green transform rotate-45"
                        ></div>
                      </div>
                    </div>

                    <div class="flex items-center">
                      <div class="h-10 px-4 bg-[#8dc63f] flex items-center">
                        <span class="text-white font-bold text-lg">B</span>
                      </div>
                      <div
                        class="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-l-[#8dc63f] border-t-transparent border-b-transparent"
                      ></div>
                    </div>
                  </div>
                  <i class="fas fa-home text-primary-green text-2xl"></i>
                </div>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-tools text-primary-green mt-1"></i>
                    <p class="flex-1">
                      <strong>Travaux :</strong> Isolation globale, ventilation performante,
                      remplacement des fenêtres, chaudière
                    </p>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-euro-sign text-primary-green mt-1"></i>
                    <p class="flex-1"><strong>Aides obtenues :</strong> 50 000 €</p>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-piggy-bank text-primary-green mt-1"></i>
                    <p class="flex-1">
                      <strong>Économies réalisées :</strong> -70 % sur les factures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-full">
            <div class="h-full flex flex-col">
              <img
                src="@/assets/major-renovation/example3.png"
                alt="Exemple de rénovation 3"
                class="w-full h-56 object-cover object-center rounded-t-lg"
              />
              <div class="bg-white rounded-lg p-6 flex-1">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center">
                      <div class="h-10 px-4 bg-[#d31d1d] flex items-center">
                        <span class="text-white font-bold text-lg">G</span>
                      </div>
                      <div
                        class="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-l-[#d31d1d] border-t-transparent border-b-transparent"
                      ></div>
                    </div>

                    <div class="flex items-center">
                      <div class="h-0.5 w-8 bg-primary-green relative">
                        <div
                          class="absolute right-0 -mt-1.5 w-3 h-3 border-t-2 border-r-2 border-primary-green transform rotate-45"
                        ></div>
                      </div>
                    </div>

                    <div class="flex items-center">
                      <div class="h-10 px-4 bg-[#c1d82f] flex items-center">
                        <span class="text-black font-bold text-lg">C</span>
                      </div>
                      <div
                        class="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-l-[#c1d82f] border-t-transparent border-b-transparent"
                      ></div>
                    </div>
                  </div>
                  <i class="fas fa-home text-primary-green text-2xl"></i>
                </div>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-tools text-primary-green mt-1"></i>
                    <p class="flex-1">
                      <strong>Travaux :</strong> Rénovation complète financée à 80 % grâce au
                      programme
                    </p>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-euro-sign text-primary-green mt-1"></i>
                    <p class="flex-1"><strong>Aides obtenues :</strong> 63 000 € cumulées</p>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-piggy-bank text-primary-green mt-1"></i>
                    <p class="flex-1">
                      <strong>Économies réalisées :</strong> -65 % sur les factures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="steps"
      class="container flex flex-col items-center mx-auto py-12 lg:py-12 px-8 sm:px-6 lg:px-16"
    >
      <h1 class="text-4xl text-center lg:text-5xl font-bold mb-12 lg:mb-20">Comment ça marche ?</h1>

      <div class="flex flex-col lg:flex-row gap-12">
        <img
          src="@/assets/major-renovation/artisanal-work.png"
          class="rounded-lg w-full lg:w-1/2 object-cover object-center"
        />

        <div class="flex flex-col gap-12 flex-1">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center size-12 text-2xl font-bold text-white bg-primary rounded-full bg-primary-green"
              >
                1
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl font-bold mb-4">Diagnostic gratuit</h2>
              <p class="text-gray-600">
                Évaluation complète de votre logement avec étude thermique et recommandations pour
                gagner au moins 2 classes énergétiques.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center size-12 text-2xl font-bold text-white bg-primary rounded-full bg-primary-green"
              >
                2
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl font-bold mb-4">Gestion des aides</h2>
              <p class="text-gray-600">
                Nous gérons toutes vos démarches administratives et trouvons les meilleures aides
                financières, jusqu'à 63 000 €.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center size-12 text-2xl font-bold text-white bg-primary rounded-full bg-primary-green"
              >
                3
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl font-bold mb-4">Réalisation des travaux</h2>
              <p class="text-gray-600">
                Réalisation des travaux par des professionnels certifiés avec suivi de chantier et
                contrôle des performances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="eligibility" class="py-12 lg:py-20 container mx-auto px-8 sm:px-6 lg:px-8">
      <h1 class="mb-16 text-4xl lg:text-5xl text-center font-bold">Conditions d'éligibilité</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="bg-gray-50 rounded-xl p-8">
          <div class="flex flex-col items-center">
            <div class="bg-primary-green/10 rounded-full p-6 mb-6">
              <House class="text-primary-green" :size="48" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center">Ancienneté du logement</h3>
            <p class="text-gray-600 text-center">
              Votre logement doit avoir été construit il y a plus de 15 ans
            </p>
          </div>
        </div>

        <div class="bg-primary-green text-white rounded-xl p-8">
          <div class="flex flex-col items-center">
            <div class="bg-white/10 rounded-full p-6 mb-6">
              <ChartSpline class="text-white" :size="48" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center">Gain énergétique</h3>
            <p class="text-white/90 text-center">
              Les travaux doivent permettre un saut d'au moins 2 classes énergétiques
            </p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-8">
          <div class="flex flex-col items-center">
            <div class="bg-primary-green/10 rounded-full p-6 mb-6">
              <List class="text-primary-green" :size="48" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center">Conditions de ressources</h3>
            <p class="text-gray-600 text-center">
              Vos revenus doivent respecter les plafonds fixés par l'ANAH
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <a
          href="#eligibility"
          class="inline-block rounded-full px-8 py-3.5 bg-primary-dark text-white hover:bg-primary-dark/80"
        >
          Vérifiez gratuitement votre éligibilité
        </a>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import EligibilityForm from '@/components/EligibilityForm.vue'
import { ChartSpline, Leaf, List, House, ShieldCheck, TrendingDown } from 'lucide-vue-next'
</script>

<style>
/* Hero background */
.hero-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('@/assets/major-renovation/hero-bg-mobile.png');
  @apply bg-cover bg-center bg-no-repeat relative;
}

@media (min-width: 1024px) {
  .hero-background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('@/assets/major-renovation/hero-bg.png');
  }
}

/* Swiper pagination */
.swiper-pagination-bullet {
  background-color: #ccc !important;
}
.swiper-pagination-bullet-active {
  background-color: #4caf50 !important;
}

/** Swiper Pagination position */
.swiper-pagination {
  position: relative !important;
  margin-top: 30px !important;
}
</style>
