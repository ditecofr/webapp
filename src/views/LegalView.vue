<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <Header :is-legal-page="true" />
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <h1 class="text-3xl font-bold mb-8">Mentions Légales</h1>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">1. Informations légales</h2>
        <p class="mb-4">
          Le site <strong>diteco.fr</strong> est édité par <strong>DNART</strong> pour le compte de
          <strong>DITECO</strong> :
        </p>

        <h3 class="font-semibold mt-6 mb-2">Éditeur du site :</h3>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>DNART</strong> - SAS au capital de 1 000 euros</li>
          <li>RCS Nanterre 981 568 280</li>
          <li>Siège social : 30 RUE BAUDIN, 92400 COURBEVOIE</li>
          <li>Président : <strong>M. Kevin FENECH</strong></li>
          <li>
            Activité principale : Direction artistique, Création, Design digital, Communication
          </li>
        </ul>

        <h3 class="font-semibold mb-2">Propriétaire du site :</h3>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>DITECO</strong> - SASU au capital de 32 000 euros</li>
          <li>RCS Nanterre B 851 722 546</li>
          <li>Siège social : 30 RUE BAUDIN, 92400 COURBEVOIE</li>
          <li>Président : <strong>M. Kevin FENECH</strong></li>
          <li>
            Activité principale : Travaux d'installation d'eau et de gaz en tous locaux (4322A)
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">2. Hébergement</h2>
        <p class="mb-4">Le site est hébergé par :</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>Vercel Inc.</strong></li>
          <li>440 N Barranca Ave #4133</li>
          <li>Covina, CA 91723</li>
          <li>États-Unis</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
        <p class="mb-4">
          L'ensemble de ce site relève de la législation française et internationale sur le droit
          d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y
          compris pour les documents téléchargeables et les représentations iconographiques et
          photographiques.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
        <p class="mb-4">
          Conformément à la loi <strong>"Informatique et Libertés"</strong> du 6 janvier 1978
          modifiée et au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>,
          vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux
          données personnelles vous concernant.
        </p>
        <p class="mb-4">
          Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous
          pouvez nous contacter à l'adresse suivante : <strong>contact@diteco.fr</strong>
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">5. Cookies</h2>
        <p class="mb-4">
          Le site utilise des cookies à des fins de statistiques, de mesure d'audience et
          d'amélioration de la navigation. Vous pouvez désactiver ces cookies dans les paramètres de
          votre navigateur.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">6. Contact</h2>
        <p>
          Pour toute question concernant ces mentions légales, vous pouvez nous contacter à
          l'adresse suivante : <strong>contact@diteco.fr</strong> ou par téléphone au
          <strong>01 84 60 26 89</strong>
        </p>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
