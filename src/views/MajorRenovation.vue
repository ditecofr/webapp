<template>
  <div>
    <div class="bg-primary-green">
      <div class="container mx-auto px-8 pb-12">
        <Header />

        <!-- Hero -->
        <div class="flex flex-col lg:flex-row lg:mt-16 items-center justify-between">
          <div class="w-full lg:w-[60%] text-white text-center lg:text-left pt-8 lg:pt-0">
            <h1 class="text-4xl lg:text-7xl font-bold font-jakarta mb-8 lg:mb-10">
              Donnez<br class="block lg:hidden" />
              une nouvelle vie à votre logement
            </h1>
            <div class="flex flex-col mb-8 lg:mb-10 gap-6">
              <p class="text-xl md:text-2xl">
                Jusqu'à 63 000 € d'aides pour améliorer votre Classe Énergétique.
                <br class="hidden lg:block" />Diteco vous accompagne pour réduire vos factures
              </p>
            </div>
          </div>

          <div class="relative w-full lg:w-[40%] lg:mt-12">
            <EligibilityForm />
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits -->
    <div id="benefits" class="container mx-auto px-8 pt-24">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl text-center lg:text-6xl font-bold font-jakarta pb-10 lg:pb-14">
          Pourquoi opter pour<br class="hidden lg:block" />
          la rénovation d'ampleur ?
        </h1>

        <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div class="flex h-full flex-1 flex-col items-center gap-4 lg:gap-6 text-center">
            <img
              src="@/assets/illustrations/Savings.svg"
              class="size-[250px] scale-x-[-1]"
              alt="Illustration économies d'énergie"
            />
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold mb-4">Économies d'énergie</h2>
              <p>
                Passez de la classe G ou F à une classe D, C ou mieux et économisez jusqu'à 70 % sur
                vos factures
              </p>
            </div>
          </div>

          <div class="flex h-full flex-1 flex-col items-center gap-4 lg:gap-6 text-center">
            <img
              src="@/assets/illustrations/Comfort.svg"
              class="size-[250px] scale-x-[-1]"
              alt="Illustration confort"
            />
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold mb-4">Un confort amélioré</h2>
              <p>
                Température stable, meilleure isolation acoustique et qualité de l'air améliorée
              </p>
            </div>
          </div>

          <div class="flex h-full flex-1 flex-col items-center gap-4 lg:gap-6 text-center">
            <img
              src="@/assets/illustrations/Insurance.svg"
              class="size-[250px]"
              alt="Illustration confort"
            />
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold mb-4">Conformité réglementaire</h2>
              <p>
                Les logements classés G ou F ne pourront bientôt plus être loués. Prenez de l'avance
                dès maintenant
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- <p class="text-lg">
        Ce programme soutient vos projets de rénovation globale en récompensant les sauts de classe
        énergétique. Plus vous améliorez votre logement, plus les aides augmentent. Un
        Accompagnement sur-mesure avec mon accompagnateur rénov', un expert dédié à vos côtés pour
        chaque étape, depuis le diagnostic initial jusqu'à la validation post-travaux. Réduisez vos
        factures d'énergie de 30 % à 70 %, améliorez votre confort et valorisez la valeur de votre
        bien immobilier.
      </p> -->
    </div>

    <!-- Examples -->
    <div class="container flex flex-col items-center mx-auto pt-12 mt-12 px-8">
      <h1 class="text-4xl font-bold text-center mb-14 text-primary-green">
        Exemples concrets de rénovations avec le programme
      </h1>

      <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        <div class="flex h-full flex-1">
          <img src="@/assets/major-renovation/example-image.png" alt="Rénovation" class="w-full" />
        </div>

        <div class="flex flex-1 flex-col justify-between gap-8 lg:gap-12">
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div class="flex-1">
              <div class="space-y-2">
                <p>
                  <strong>Travaux :</strong> Isolation des murs et des combles, remplacement d'un
                  chauffage électrique par une pompe à chaleur
                </p>
                <p><strong>Aides obtenues :</strong> 38 000 €</p>
                <p><strong>Économies réalisées :</strong> -55 % sur les factures</p>
              </div>
              <h2 class="text-xl font-bold p-2 mt-5 mb-4 bg-primary-green text-white">
                De classe G à classe D
              </h2>
            </div>

            <div class="flex-1">
              <div class="space-y-2">
                <p>
                  <strong>Travaux :</strong> Isolation globale, ventilation performante,
                  remplacement des fenêtres, chaudière
                </p>
                <p><strong>Aides obtenues :</strong> 50 000 €</p>
                <p><strong>Économies réalisées :</strong> -70 % sur les factures</p>
              </div>
              <h2 class="text-xl font-bold p-2 mt-5 mb-4 bg-primary-green text-white">
                De classe F à classe B
              </h2>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div class="hidden lg:block flex-1"></div>
            <div class="flex-1">
              <div class="space-y-2">
                <p>
                  <strong>Travaux :</strong> Rénovation complète financée à 80 % grâce au programme
                </p>
                <p><strong>Aides obtenues :</strong> 63 000 € cumulées</p>
              </div>
              <h2 class="text-xl font-bold p-2 mt-5 mb-4 bg-primary-green text-white">
                De classe G à classe C
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="steps" class="container flex flex-col items-center mx-auto pt-12 mt-12 px-8 lg:px-32">
      <h1 class="text-3xl font-bold text-center mb-14">
        Les étapes clés avec Diteco et mon<br class="hidden md:block" />
        Accompagnateur Rénov'
      </h1>

      <div class="flex flex-col lg:flex-row justify-between gap-8 mb-14">
        <div class="w-full lg:w-1/2">
          <img
            class="w-full h-auto"
            src="@/assets/major-renovation/energy-audit.png"
            alt="Energie"
          />
        </div>
        <div class="flex w-full lg:w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-2">Diagnostic Énergétique Gratuit :</h2>
          <p>
            Évaluation de votre logement et définition des travaux nécessaires pour un saut d'au
            moins 2 classes énergétiques.
          </p>
        </div>
      </div>

      <div class="flex flex-col-reverse lg:flex-row justify-between gap-8 mb-14">
        <div class="flex w-full lg:w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-2">Gestion des Subventions et Financements :</h2>
          <p>Maximisation de vos aides (jusqu'à 63 000 €).</p>
        </div>
        <div class="w-full lg:w-1/2">
          <img
            class="w-full h-auto"
            src="@/assets/major-renovation/funding-management.png"
            alt="Financement"
          />
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-between gap-8 mb-14">
        <div class="w-full lg:w-1/2">
          <img
            class="w-full h-auto"
            src="@/assets/major-renovation/artisanal-work.png"
            alt="Travaux Artisanaux"
          />
        </div>
        <div class="flex w-full lg:w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-2">Travaux Réalisés par des Artisans Certifiés RGE :</h2>
          <p>Qualité et conformité garanties.</p>
        </div>
      </div>
    </div>

    <div id="eligibility" class="pt-12 md:mt-12 container mx-auto px-8 flex flex-col items-center">
      <h1 class="mb-14 text-3xl text-center font-bold">Êtes-vous Éligible au Programme ?</h1>

      <div class="flex flex-col md:flex-row mb-14">
        <div class="flex flex-col items-center p-8 md:my-8 md:w-[250px] bg-primary-green-light">
          <div class="bg-white rounded-full p-4 mb-4">
            <House class="text-primary-green" :size="56" />
          </div>
          <p class="text-center">
            Logement construit<br />
            depuis plus de 15 ans
          </p>
        </div>

        <div class="flex items-center p-8 md:p-12 bg-primary-green">
          <div class="flex flex-col items-center">
            <div class="bg-white rounded-full p-4 mb-4">
              <ChartSpline class="text-primary-green" :size="56" />
            </div>
            <p class="text-center text-lg text-white">
              Saut d'au moins 2 classes<br />
              énergétiques
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center p-8 md:my-8 md:w-[250px] bg-primary-green-light">
          <div class="bg-white rounded-full p-4 mb-4">
            <List class="text-primary-green" :size="56" />
          </div>
          <p class="text-center">
            Revenus respectant les<br />
            plafonds
          </p>
        </div>
      </div>

      <a
        href="#"
        class="inline-block rounded-full px-8 py-3.5 bg-primary-green text-white hover:bg-primary-green-hover"
      >
        Vérifiez gratuitement votre éligibilité
      </a>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import EligibilityForm from '@/components/EligibilityForm.vue'

import { ChartSpline, Leaf, List, House, ShieldCheck, TrendingDown } from 'lucide-vue-next'
</script>
