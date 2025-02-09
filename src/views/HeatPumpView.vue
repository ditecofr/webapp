<template>
  <div>
    <div class="bg-primary-blue">
      <div class="container mx-auto px-8 pb-12">
        <Header />

        <!-- Hero -->
        <div class="flex flex-col lg:flex-row lg:mt-16 items-center justify-between">
          <div class="w-full lg:w-[60%] text-white text-center lg:text-left pt-8 lg:pt-0">
            <h1 class="text-4xl lg:text-7xl font-bold font-jakarta mb-8 lg:mb-10 leading-[1.3]">
              Votre Pompe à Chaleur Air/Eau pour 1 €
            </h1>
            <div class="flex flex-col mb-8 lg:mb-10 gap-6">
              <p class="text-xl md:text-2xl leading-[1.8]">
                Profitez des aides disponibles pour réduire vos factures d'énergie.
                <br class="hidden lg:block" />
                Avec Diteco, accédez à une installation clé en main pour seulement 1 €
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
    <div id="benefits" class="container mx-auto px-8 pt-12 mt-12">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl font-bold text-center mb-14 text-primary-blue">
          Pourquoi Installer une Pompe à Chaleur Air/Eau avec Diteco ?
        </h1>

        <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div class="flex h-full flex-1 flex-col items-center gap-4 lg:gap-10 text-center">
            <EuroIcon class="text-primary-blue" :size="100" />
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
            <Award class="text-primary-blue" :size="100" />
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
            <Banknote class="text-primary-blue" :size="100" />
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

    <!-- Solar System Explanation -->
    <div class="container mx-auto px-8 pt-12 mt-12">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div class="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 class="text-4xl font-bold mb-8">C'est quoi un système solaire combiné ?</h1>

          <p class="mb-6">
            Un système solaire combiné utilise des panneaux solaires thermiques pour produire de
            l'énergie renouvelable.
          </p>

          <p class="mb-6">Il permet de :</p>
          <ul class="list-none space-y-2 mb-6">
            <li class="text-primary-blue">• Chauffer votre logement.</li>
            <li class="text-primary-blue">• Produire de l'eau chaude sanitaire.</li>
          </ul>

          <p>
            Combiné à une pompe à chaleur Air/Eau, il maximise les économies d'énergie tout en
            réduisant votre impact environnemental. Cette solution est idéale pour optimiser la
            performance énergétique de votre maison.
          </p>
        </div>

        <div class="w-full lg:w-1/2">
          <img
            class="w-full h-auto rounded-lg"
            src="@/assets/heat-pump/solar-system.png"
            alt="Système solaire combiné"
          />
        </div>
      </div>
    </div>

    <!-- Key Steps -->
    <div class="container mx-auto px-8 pt-12 mt-12">
      <h2 class="text-4xl font-bold text-center text-primary-blue mb-14">
        Étapes clés avec Diteco
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Step 1 -->
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="bg-primary-blue text-white text-center py-2 rounded-lg mb-4">
            Diagnostic gratuit et personnalisé
          </div>
          <p class="text-gray-600">
            Nos experts analysent vos besoins, évaluent les aides auxquelles vous êtes éligible
            (MaPrimeRénov', CEE, etc.) et vous proposent une solution sur mesure pour optimiser vos
            économies.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="bg-primary-blue text-white text-center py-2 rounded-lg mb-4">
            Accompagnement complet pour le montage de votre dossier
          </div>
          <div class="space-y-4">
            <p class="text-gray-600">
              Nous vous guidons de A à Z dans la constitution et le dépôt de votre dossier d'aides
              (MaPrimeRénov', CEE, etc.).
            </p>
            <p class="text-gray-600">
              Vous pouvez également nous désigner comme mandataire administratif et financier, ce
              qui signifie :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2">
              <li>Nous nous chargeons de toutes les démarches auprès des organismes compétents.</li>
              <li>
                Vous n'avancez aucun frais : les fonds sont directement versés sur le compte de
                Diteco.
              </li>
              <li>
                Si le montant des aides obtenues ne couvre pas l'intégralité, vous le réglez
                uniquement après la réalisation des travaux.
              </li>
              <li>
                Des solutions de financement adaptées vous sont également proposées, avec des
                facilités de paiement pour amplifier votre investissement.
              </li>
            </ul>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="bg-primary-blue text-white text-center py-2 rounded-lg mb-4">
            Installation par des experts certifiés RGE partout en France
          </div>
          <div class="space-y-4">
            <p class="text-gray-600">
              Nos équipes d'installation, déployées sur l'ensemble du territoire français, sont
              composées de professionnels certifiés RGE.
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2">
              <li>Nous intervenons dans toutes les régions et sur toute la France.</li>
              <li>
                Notre priorité est de vous garantir une installation rapide, impeccable et conforme
                aux normes en vigueur.
              </li>
              <li>
                Chaque chantier est mené avec soin et précision pour assurer la durabilité des
                équipements et maximiser vos économies d'énergie.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Examples -->
    <div class="container flex flex-col items-center mx-auto pt-12 mt-12 px-8">
      <h1 class="text-4xl font-bold text-center mb-14 text-primary-blue">
        Exemples de réalisations
      </h1>

      <div class="flex flex-col-reverse lg:flex-row justify-between gap-8 mb-14">
        <div class="flex w-full lg:w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-4">Exemple 1</h2>
          <ul class="space-y-2">
            <li><strong>Coût total :</strong> 14 000 €</li>
            <li><strong>Aides obtenues :</strong></li>
            <li class="ml-4">• 5 000 € (MaPrimeRénov')</li>
            <li class="ml-4">• 4 000 € (CEE)</li>
            <li><strong>Reste à charge pris en charge par Diteco :</strong> 5 000 €</li>
            <li><strong>Coût final :</strong> 1 €</li>
          </ul>
        </div>
        <div class="w-full lg:w-1/2">
          <img class="w-full h-auto" src="@/assets/heat-pump/example-1.png" alt="Financement" />
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-between gap-8 mb-14">
        <div class="w-full lg:w-1/2">
          <img class="w-full h-auto" src="@/assets/heat-pump/example-2.png" alt="Energie" />
        </div>
        <div class="flex w-full lg:w-1/2 flex-col justify-end pb-6">
          <h2 class="text-2xl font-bold mb-4">Exemple 2</h2>
          <ul class="space-y-2">
            <li><strong>Coût total :</strong> 22 000 €</li>
            <li><strong>Aides obtenues :</strong></li>
            <li class="ml-4">• 5 000 € (MaPrimeRénov' pour la PAC)</li>
            <li class="ml-4">• 10 000 € (MaPrimeRénov' pour le système solaire combiné)</li>
            <li class="ml-4">• 4 000 € (CEE pour la PAC uniquement)</li>
            <li><strong>Reste à charge pris en charge par Diteco :</strong> 3 000 €</li>
            <li><strong>Coût final :</strong> 1 €</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="eligibility" class="pt-12 md:mt-12 container mx-auto px-8 flex flex-col items-center">
      <h1 class="mb-14 text-3xl text-center font-bold">Êtes-vous Éligible au Programme ?</h1>

      <div class="flex flex-col md:flex-row mb-14">
        <div class="flex flex-col items-center p-8 md:my-8 md:w-[250px] bg-primary-blue-light">
          <div class="bg-white rounded-full p-4 mb-4">
            <House class="text-primary-blue" :size="56" />
          </div>
          <p class="text-center">
            Logement construit <br />
            il y a plus de 2 ans
          </p>
        </div>

        <div class="flex items-center p-8 md:p-12 bg-primary-blue">
          <div class="flex flex-col items-center">
            <div class="bg-white rounded-full p-4 mb-4">
              <KeyRound class="text-primary-blue" :size="56" />
            </div>
            <p class="text-center text-lg text-white">
              Vous êtes propriétaire <br />occupant ou bailleur
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center p-8 md:my-8 md:w-[250px] bg-primary-blue-light">
          <div class="bg-white rounded-full p-4 mb-4">
            <Wallet class="text-primary-blue" :size="56" />
          </div>
          <p class="text-center">Revenus répondant <br />aux critères des <br />aides nationales</p>
        </div>
      </div>

      <a
        href="#"
        class="inline-block rounded-full px-8 py-3.5 bg-primary-blue text-white hover:bg-primary-blue-hover"
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

import { Award, EuroIcon, KeyRound, House, Wallet, Banknote } from 'lucide-vue-next'
</script>
