<template>
  <div>
    <!-- Hero section avec background -->
    <div class="hero-background">
      <div class="container mx-auto px-8 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <Header />

        <!-- Hero -->
        <div class="flex flex-col lg:flex-row lg:mt-24 items-center justify-between pt-12">
          <div class="w-full lg:w-[60%] text-white text-center lg:text-left lg:pt-8">
            <h1 class="text-4xl lg:text-7xl font-bold font-jakarta mb-8 lg:mb-10">
              Votre Pompe à Chaleur Air/Eau pour 1 €
            </h1>
            <div class="flex flex-col lg:mb-10 gap-6">
              <p class="text-xl md:text-2xl">
                Profitez des aides disponibles pour réduire vos factures d'énergie.
                <br class="hidden lg:block" />
                Avec Diteco, accédez à une installation clé en main pour seulement 1 €
              </p>
            </div>
          </div>

          <div id="eligibility" class="relative w-full lg:w-[40%] pt-8 lg:pt-0">
            <!-- Desktop form -->
            <div class="hidden lg:block">
              <EligibilityForm formType="pac-ssc" />
            </div>
            <!-- Mobile button -->
            <div class="lg:hidden flex justify-center">
              <RouterLink
                to="/eligibility?formType=pac-ssc"
                class="inline-block rounded-full px-8 py-3.5 bg-primary-blue text-white hover:bg-primary-blue/90 text-center"
              >
                Vérifier mon éligibilité
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partners carousel -->
    <PartnersCarousel />
    <!-- Benefits -->
    <div id="benefits" class="container mx-auto px-8 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 class="text-4xl text-center lg:text-5xl font-bold font-jakarta mb-12 lg:mb-16">
        Pourquoi Installer une Pompe à<br class="hidden lg:block" />
        Chaleur Air/Eau avec Diteco ?
      </h1>

      <div class="hidden lg:flex flex-row justify-between gap-8 lg:gap-12 xl:gap-20 mb-20">
        <div class="flex h-full flex-1 flex-col items-center gap-6 text-center">
          <div class="bg-repeat bg-primary-blue/5 rounded-xl p-8 mb-2">
            <EuroIcon class="text-primary-blue size-24" />
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Aides MaPrimeRénov'</h2>
            <p>
              Les aides MaPrimeRénov' varient selon les revenus : jusqu'à 5 000 € (PAC) et 10 000 €
              (système solaire combiné) pour les revenus très modestes.
            </p>
          </div>
        </div>

        <div class="flex h-full flex-1 flex-col items-center gap-6 text-center">
          <div class="bg-repeat bg-primary-blue/5 rounded-xl p-8 mb-2">
            <Award class="text-primary-blue size-24" />
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Certificats d'Économies d'Énergie</h2>
            <p>
              Les CEE financent jusqu'à 4 000 € pour la PAC Air/Eau (non cumulables avec le
              solaire).
            </p>
          </div>
        </div>

        <div class="flex h-full flex-1 flex-col items-center gap-6 text-center">
          <div class="bg-repeat bg-primary-blue/5 rounded-xl p-8 mb-2">
            <Banknote class="text-primary-blue size-24" />
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Installation pour 1 €</h2>
            <p>
              Profitez d'une installation complète pour seulement 1 € grâce au cumul des aides
              disponibles.
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile version with Swiper -->
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
              <div class="bg-repeat bg-primary-blue/5 rounded-xl p-6">
                <EuroIcon class="text-primary-blue size-16" />
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">Aides MaPrimeRénov'</h2>
                <p class="text-sm">Jusqu'à 15 000 € d'aides cumulées</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="px-4">
            <div class="flex flex-col items-center gap-4 text-center">
              <div class="bg-repeat bg-primary-blue/5 rounded-xl p-6">
                <Award class="text-primary-blue size-16" />
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">CEE</h2>
                <p class="text-sm">Jusqu'à 4 000 € d'aides supplémentaires</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="px-4">
            <div class="flex flex-col items-center gap-4 text-center">
              <div class="bg-repeat bg-primary-blue/5 rounded-xl p-6">
                <Banknote class="text-primary-blue size-16" />
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">Installation pour 1 €</h2>
                <p class="text-sm">Installation complète à moindre coût</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Solar System Explanation -->
    <div class="bg-gray-50 py-20 lg:py-28">
      <div class="container mx-auto px-8">
        <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div class="w-full lg:w-1/2">
            <img
              class="w-full h-auto rounded-2xl shadow-lg"
              src="@/assets/heat-pump/solar-system.png"
              alt="Système solaire combiné"
            />
          </div>

          <div class="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 class="text-4xl font-bold mb-8 text-primary-blue">
              C'est quoi un système solaire combiné ?
            </h1>

            <div class="bg-white rounded-xl p-8 shadow-sm">
              <p class="mb-6 text-lg">
                Un système solaire combiné utilise des panneaux solaires thermiques pour produire de
                l'énergie renouvelable.
              </p>

              <p class="font-bold mb-4 text-lg">Il permet de :</p>
              <ul class="space-y-4 mb-6">
                <li class="flex items-center gap-3">
                  <div class="bg-primary-blue/10 p-2 rounded-full">
                    <i class="fas fa-home text-primary-blue"></i>
                  </div>
                  <span>Chauffer votre logement</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="bg-primary-blue/10 p-2 rounded-full">
                    <i class="fas fa-shower text-primary-blue"></i>
                  </div>
                  <span>Produire de l'eau chaude sanitaire</span>
                </li>
              </ul>

              <p class="text-gray-600">
                Combiné à une pompe à chaleur Air/Eau, il maximise les économies d'énergie tout en
                réduisant votre impact environnemental. Cette solution est idéale pour optimiser la
                performance énergétique de votre maison.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Steps -->
    <div
      id="steps"
      class="container flex flex-col items-center mx-auto py-16 lg:py-24 px-8 sm:px-6 lg:px-16"
    >
      <h1 class="text-4xl text-center lg:text-5xl font-bold mb-12 lg:mb-20">Comment ça marche ?</h1>

      <div class="flex flex-col lg:flex-row gap-12">
        <img
          src="@/assets/heat-pump/installation.png"
          class="rounded-lg w-full lg:w-1/2 object-cover object-center"
        />

        <div class="flex flex-col gap-12 flex-1">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center size-12 text-2xl font-bold text-white bg-primary rounded-full bg-primary-blue"
              >
                1
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl font-bold mb-4">Diagnostic gratuit et personnalisé</h2>
              <p class="text-gray-600">
                Nos experts analysent vos besoins, évaluent les aides auxquelles vous êtes éligible
                (MaPrimeRénov', CEE, etc.) et vous proposent une solution sur mesure.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center size-12 text-2xl font-bold text-white bg-primary rounded-full bg-primary-blue"
              >
                2
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl font-bold mb-4">Accompagnement complet</h2>
              <p class="text-gray-600">
                Nous gérons toutes vos démarches administratives et le montage de votre dossier
                d'aides, sans aucune avance de frais de votre part.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center size-12 text-2xl font-bold text-white bg-primary rounded-full bg-primary-blue"
              >
                3
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl font-bold mb-4">Installation certifiée</h2>
              <p class="text-gray-600">
                Installation réalisée par des professionnels certifiés RGE avec suivi de chantier et
                garantie de performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Examples -->
    <div class="bg-gray-50 rounded-2xl p-8 lg:p-16 mt-16 lg:mt-24 container mx-auto px-8">
      <h2 class="text-2xl font-bold text-center mb-8 lg:mb-12">
        Exemples de réalisations
        <span class="block text-lg font-normal text-gray-600 mt-2">
          Découvrez nos installations réussies
        </span>
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Example 1 -->
        <div class="relative h-full">
          <div class="h-full flex flex-col">
            <img
              src="@/assets/heat-pump/example1.png"
              alt="Exemple d'installation 1"
              class="w-full h-56 object-cover object-center rounded-t-lg"
            />
            <div class="bg-white rounded-lg p-6 flex-1">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-tag text-primary-blue mt-1"></i>
                  <p class="flex-1"><strong>Coût total :</strong> 14 000 €</p>
                </div>

                <div class="flex items-start space-x-3">
                  <i class="fas fa-euro-sign text-primary-blue mt-1"></i>
                  <div class="flex-1">
                    <p class="font-bold mb-2">Aides obtenues :</p>
                    <ul class="list-disc list-inside pl-2 space-y-1">
                      <li>5 000 € (MaPrimeRénov')</li>
                      <li>4 000 € (CEE)</li>
                    </ul>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <i class="fas fa-hands-helping text-primary-blue mt-1"></i>
                  <p class="flex-1">
                    <strong>Reste à charge pris en charge par Diteco :</strong> 5 000 €
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <i class="fas fa-piggy-bank text-primary-blue mt-1"></i>
                  <p class="flex-1"><strong>Coût final :</strong> 1 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Example 2 -->
        <div class="relative h-full">
          <div class="h-full flex flex-col">
            <img
              src="@/assets/heat-pump/example2.png"
              alt="Exemple d'installation 2"
              class="w-full h-56 object-cover object-center rounded-t-lg"
            />
            <div class="bg-white rounded-lg p-6 flex-1">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-tag text-primary-blue mt-1"></i>
                  <p class="flex-1"><strong>Coût total :</strong> 22 000 €</p>
                </div>

                <div class="flex items-start space-x-3">
                  <i class="fas fa-euro-sign text-primary-blue mt-1"></i>
                  <div class="flex-1">
                    <p class="font-bold mb-2">Aides obtenues :</p>
                    <ul class="list-disc list-inside pl-2 space-y-1">
                      <li>5 000 € (MaPrimeRénov' pour la PAC)</li>
                      <li>10 000 € (MaPrimeRénov' pour le système solaire combiné)</li>
                      <li>4 000 € (CEE pour la PAC uniquement)</li>
                    </ul>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <i class="fas fa-hands-helping text-primary-blue mt-1"></i>
                  <p class="flex-1">
                    <strong>Reste à charge pris en charge par Diteco :</strong> 3 000 €
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <i class="fas fa-piggy-bank text-primary-blue mt-1"></i>
                  <p class="flex-1"><strong>Coût final :</strong> 1 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="eligibility" class="py-16 lg:py-24 container mx-auto px-8 sm:px-6 lg:px-8">
      <h1 class="mb-16 text-4xl lg:text-5xl text-center font-bold">Conditions d'éligibilité</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="bg-gray-50 rounded-xl p-8">
          <div class="flex flex-col items-center">
            <div class="bg-primary-blue/10 rounded-full p-6 mb-6">
              <House class="text-primary-blue" :size="48" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center">Ancienneté du logement</h3>
            <p class="text-gray-600 text-center">
              Votre logement doit avoir été construit il y a plus de 2 ans
            </p>
          </div>
        </div>

        <div class="bg-primary-blue text-white rounded-xl p-8">
          <div class="flex flex-col items-center">
            <div class="bg-white/10 rounded-full p-6 mb-6">
              <KeyRound class="text-white" :size="48" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center">Statut d'occupation</h3>
            <p class="text-white/90 text-center">Vous êtes propriétaire occupant ou bailleur</p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-8">
          <div class="flex flex-col items-center">
            <div class="bg-primary-blue/10 rounded-full p-6 mb-6">
              <Wallet class="text-primary-blue" :size="48" />
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

    <!-- Map section -->
    <Map />

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
import EligibilityForm from '@/components/EligibilityForm.vue'
import PartnersCarousel from '@/components/PartnersCarousel.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

import { Award, EuroIcon, KeyRound, House, Wallet, Banknote } from 'lucide-vue-next'
</script>

<style>
/* Hero background */
.hero-background {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
    url('@/assets/major-renovation/hero-bg-mobile.png');
  @apply bg-cover bg-center bg-no-repeat relative;
}

@media (min-width: 1024px) {
  .hero-background {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
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
