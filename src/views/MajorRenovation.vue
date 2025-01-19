<template>
  <div>
    <div class="container mx-auto px-8">
      <Header />

      <!-- Hero -->
      <div class="flex mt-10 items-center gap-6">
        <div class="w-[55%]">
          <h1 class="text-7xl font-bold mb-8">
            Transformez votre logement avec le programme rénovation d'ampleur
          </h1>
          <div class="flex flex-col mb-8 gap-6">
            <p class="text-2xl">
              Passez à une Classe Énergétique Supérieure avec Jusqu'à 63 000 € d'Aides
            </p>
            <p class="w-3/4 text-lg leading-relaxed text-gray-600">
              Avec Diteco et le Programme Rénovation d'Ampleur, améliorez la performance énergétique
              de votre logement, réduisez vos factures, et bénéficiez d'un accompagnement
              personnalisé grâce à Mon Accompagnateur Rénov.
            </p>
          </div>

          <button class="rounded-full px-8 py-3.5 bg-[#56B476] text-white hover:bg-[#45a065]">
            Passer à l'action dès maintenant
          </button>
        </div>

        <div class="relative w-[45%]">
          <EligibilityForm />
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row mt-20 bg-[#DAEADF]">
      <div class="w-full lg:w-[45%] rounded-none lg:rounded-tr-[250px] bg-[#56B476]">
        <div class="container flex h-full mx-auto px-4 md:px-20 py-12">
          <div class="self-end text-white">
            <h1 class="text-3xl font-bold">
              Des Aides Financières <br />
              Exceptionnelles : <br /><br />
              Jusqu'à 63 000 €
            </h1>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-[55%]">
        <div class="container mx-auto px-4 md:px-20 lg:ps-40 py-12">
          <h1 class="text-3xl font-bold mb-6">
            Pourquoi choisir le programme <br />
            rénovation d'ampleur ?
          </h1>
          <p class="text-lg">
            Ce programme soutient vos projets de rénovation globale en récompensant les sauts de
            classe énergétique. Plus vous améliorez votre logement, plus les aides augmentent. Un
            Accompagnement sur-mesure avec mon accompagnateur rénov', un expert dédié à vos côtés
            pour chaque étape, depuis le diagnostic initial jusqu'à la validation post-travaux.
            Réduisez vos factures d'énergie de 30 % à 70 %, améliorez votre confort et valorisez la
            valeur de votre bien immobilier.
          </p>
        </div>
      </div>
    </div>

    <!-- Benefits -->
    <div id="benefits" class="container mx-auto px-8 pt-12 mt-12">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center mb-14">
          Les bénéfices d'un saut de classe énergétique
        </h1>

        <div class="flex justify-between gap-20">
          <div class="flex h-full flex-1 flex-col items-center gap-10 text-center">
            <TrendingDown class="text-[#56B476]" :size="148" />
            <div>
              <h2 class="text-2xl font-bold mb-4">Réduction de dépenses énergétiques</h2>
              <p>
                Température stable, meilleure isolation acoustique et qualité de l'air améliorée.
              </p>
            </div>
          </div>

          <div class="flex h-full flex-1 flex-col items-center gap-10 text-center">
            <div class="h-[156px]">
              <leaf class="text-[#56B476]" :size="148" />
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">Un confort amélioré</h2>
              <p>
                Température stable, meilleure isolation acoustique et qualité de l'air améliorée.
              </p>
            </div>
          </div>

          <div class="flex h-full flex-1 flex-col items-center gap-10 text-center">
            <div class="h-[156px]">
              <ShieldCheck class="text-[#56B476]" :size="148" />
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">Conformité avec la réglementation</h2>
              <p>
                Les logements classés G ou F ne pourront bientôt plus être loués. Prenez de l'avance
                dès maintenant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Examples -->
    <div class="container flex flex-col items-center mx-auto pt-12 mt-12 px-8">
      <h1 class="text-3xl font-bold text-center mb-14">
        Exemples concrets de rénovations avec le programme
      </h1>

      <div class="flex justify-between gap-20">
        <div class="flex h-full flex-1">
          <img src="@/assets/example-image.png" alt="Rénovation" />
        </div>

        <div class="flex flex-1 flex-col justify-between gap-12">
          <!-- De classe G à classe D -->
          <div class="flex gap-20">
            <div class="flex-1">
              <div class="space-y-2">
                <p>
                  <strong>Travaux :</strong> Isolation des murs et des combles, remplacement d'un
                  chauffage électrique par une pompe à chaleur
                </p>
                <p><strong>Aides obtenues :</strong> 38 000 €</p>
                <p><strong>Économies réalisées :</strong> -55 % sur les factures</p>
              </div>
              <h2 class="text-xl font-bold p-2 mt-5 mb-4 bg-[#2C7688] text-white">
                De classe G à classe D
              </h2>
            </div>

            <!-- De classe F à classe B -->
            <div class="flex-1">
              <div class="space-y-2">
                <p>
                  <strong>Travaux :</strong> Isolation globale, ventilation performante,
                  remplacement des fenêtres, chaudière
                </p>
                <p><strong>Aides obtenues :</strong> 50 000 €</p>
                <p><strong>Économies réalisées :</strong> -70 % sur les factures</p>
              </div>
              <h2 class="text-xl font-bold p-2 mt-5 mb-4 bg-[#2C7688] text-white">
                De classe F à classe B
              </h2>
            </div>
          </div>

          <div class="flex gap-20">
            <div class="flex-1"></div>
            <div class="flex-1">
              <!-- De classe G à classe C -->
              <div class="space-y-2">
                <p>
                  <strong>Travaux :</strong> Rénovation complète financée à 80 % grâce au programme
                </p>
                <p><strong>Aides obtenues :</strong> 63 000 € cumulées</p>
              </div>
              <h2 class="text-xl font-bold p-2 mt-5 mb-4 bg-[#2C7688] text-white">
                De classe G à classe C
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="steps" class="container flex flex-col items-center mx-auto pt-12 mt-12 px-32">
      <h1 class="text-3xl font-bold text-center mb-14">
        Les étapes clés avec Diteco et mon<br />
        Accompagnateur Rénov'
      </h1>

      <div class="flex justify-between gap-8 mb-14">
        <div class="w-1/2">
          <img class="w-full h-auto" src="@/assets/energy-audit.png" alt="Energie" />
        </div>
        <div class="flex w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-2">Diagnostic Énergétique Gratuit :</h2>
          <p>
            Évaluation de votre logement et définition des travaux nécessaires pour un saut d'au
            moins 2 classes énergétiques.
          </p>
        </div>
      </div>

      <div class="flex justify-between gap-8 mb-14">
        <div class="flex w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-2">Gestion des Subventions et Financements :</h2>
          <p>Maximisation de vos aides (jusqu'à 63 000 €).</p>
        </div>
        <div class="w-1/2">
          <img class="w-full h-auto" src="@/assets/funding-management.png" alt="Financement" />
        </div>
      </div>

      <div class="flex justify-between gap-8 mb-14">
        <div class="w-1/2">
          <img class="w-full h-auto" src="@/assets/artisanal-work.png" alt="Travaux Artisanaux" />
        </div>
        <div class="flex w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-2">Travaux Réalisés par des Artisans Certifiés RGE :</h2>
          <p>Qualité et conformité garanties.</p>
        </div>
      </div>
    </div>

    <div id="eligibility" class="pt-12 mt-12 container mx-auto px-8 flex flex-col items-center">
      <h1 class="mb-14 text-3xl text-center font-bold">Êtes-vous Éligible au Programme ?</h1>

      <div class="flex mb-14">
        <div class="my-12 flex flex-col items-center p-8 bg-[#DAEADF]">
          <div class="bg-white rounded-full p-4 mb-4">
            <House class="text-[#56B476]" :size="56" />
          </div>
          <p class="text-center">
            Logement construit<br />
            depuis plus de 15 ans
          </p>
        </div>

        <div class="flex items-center p-12 px-8 bg-gray-100">
          <div class="flex flex-col items-center">
            <div class="bg-white rounded-full p-4 mb-4">
              <ChartSpline class="text-[#56B476]" :size="56" />
            </div>
            <p class="text-center text-lg">
              Saut d'au moins 2 classes<br />
              énergétiques
            </p>
          </div>
        </div>

        <div class="my-12 flex flex-col items-center p-8 bg-[#DAEADF]">
          <div class="bg-white rounded-full p-4 mb-4">
            <List class="text-[#56B476]" :size="56" />
          </div>
          <p class="text-center">
            Revenus respectant les<br />
            plafonds
          </p>
        </div>
      </div>

      <a
        href="#"
        class="inline-block rounded-full px-8 py-3.5 bg-[#56B476] text-white hover:bg-[#45a065]"
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
