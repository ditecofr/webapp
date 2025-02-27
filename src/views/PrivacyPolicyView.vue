<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <Header :is-legal-page="true" />
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <h1 class="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p class="mb-4">
          La présente politique de confidentialité décrit la manière dont <strong>DITECO</strong> et
          <strong>DNART</strong> collectent et traitent vos données personnelles lors de votre
          utilisation du site <strong>diteco.fr</strong>.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">2. Données collectées</h2>
        <p class="mb-4">
          Nous collectons les données suivantes via notre formulaire d'éligibilité :
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Adresse postale</li>
          <li>Type de logement</li>
          <li>Statut d'occupation (propriétaire/locataire)</li>
          <li>Année de construction du logement</li>
          <li>Surface habitable</li>
          <li>Type de chauffage actuel</li>
          <li>Revenus du foyer</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
        <p class="mb-4">Vos données sont utilisées pour :</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Évaluer votre éligibilité aux aides à la rénovation énergétique</li>
          <li>Vous contacter pour vous présenter les solutions adaptées à votre situation</li>
          <li>Établir un devis personnalisé</li>
          <li>Réaliser les travaux si vous acceptez notre proposition</li>
          <li>Vous informer sur l'avancement de votre dossier</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">4. Base légale du traitement</h2>
        <p class="mb-4">Le traitement de vos données est basé sur :</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Votre consentement explicite lors de la soumission du formulaire</li>
          <li>
            L'exécution de mesures précontractuelles (évaluation d'éligibilité et établissement de
            devis)
          </li>
          <li>L'exécution du contrat lorsque vous acceptez nos services</li>
          <li>Notre intérêt légitime à développer et améliorer nos services</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">5. Conservation des données</h2>
        <p class="mb-4">
          Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles
          elles sont collectées, notamment :
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>3 ans à compter de notre dernier contact si vous n'êtes pas devenu client</li>
          <li>
            10 ans après la fin de la relation commerciale si vous êtes devenu client (obligation
            légale)
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">6. Destinataires des données</h2>
        <p class="mb-4">Vos données peuvent être transmises aux destinataires suivants :</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Le personnel habilité de DITECO</li>
          <li>Nos sous-traitants techniques (hébergeur, outils CRM)</li>
          <li>Les organismes publics dans le cadre des aides à la rénovation énergétique</li>
          <li>Nos partenaires financiers si vous sollicitez un financement</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">7. Sécurité des données</h2>
        <p class="mb-4">
          Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour
          assurer la sécurité de vos données personnelles, notamment contre le traitement non
          autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine
          accidentelle.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">8. Vos droits</h2>
        <p class="mb-4">Conformément à la réglementation, vous disposez des droits suivants :</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification des données inexactes</li>
          <li>Droit à l'effacement (droit à l'oubli)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit d'opposition au traitement</li>
          <li>Droit de retirer votre consentement à tout moment</li>
          <li>
            Droit d'introduire une réclamation auprès de la CNIL (<a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-blue hover:underline"
              >www.cnil.fr</a
            >)
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">9. Contact</h2>
        <p class="mb-4">
          Pour exercer vos droits ou pour toute question sur le traitement de vos données, vous
          pouvez contacter notre Délégué à la Protection des Données :
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Par email : <strong>contact@diteco.fr</strong></li>
          <li>Par téléphone : <strong>01 84 60 26 89</strong></li>
          <li>Par courrier : <strong>30 RUE BAUDIN, 92400 COURBEVOIE</strong></li>
        </ul>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
