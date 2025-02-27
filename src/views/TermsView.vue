<template>
  <div class="container mx-auto px-8 sm:px-6 lg:px-8 pb-12">
    <Header :is-legal-page="true" />
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <h1 class="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">1. Objet</h2>
        <p class="mb-4">
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
          entre la société <strong>DITECO</strong>, SASU au capital de 32 000 euros, immatriculée au
          RCS de Nanterre sous le numéro 851 722 546, dont le siège social est situé au 30 RUE
          BAUDIN, 92400 COURBEVOIE, et ses clients dans le cadre de la vente de prestations de
          services de rénovation énergétique.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">2. Services proposés</h2>
        <p class="mb-4">DITECO propose les services suivants :</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Rénovation énergétique globale</li>
          <li>Installation de pompes à chaleur</li>
          <li>Isolation thermique</li>
          <li>Accompagnement dans l'obtention des aides à la rénovation énergétique</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">3. Devis et commande</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Tout devis est gratuit et valable 30 jours à compter de sa date d'émission</li>
          <li>
            La commande n'est définitive qu'après acceptation écrite du devis par le client et
            versement de l'acompte prévu
          </li>
          <li>
            Le client s'engage à fournir toutes les informations nécessaires à la bonne réalisation
            des prestations
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">4. Prix et paiement</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Les prix sont exprimés en euros TTC</li>
          <li>Le paiement s'effectue selon l'échéancier défini dans le devis</li>
          <li>
            Les aides financières sont déduites du montant final selon les conditions d'éligibilité
            en vigueur
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">5. Délais d'exécution</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Les délais d'exécution sont donnés à titre indicatif</li>
          <li>
            DITECO s'engage à informer le client de tout retard prévisible dans la réalisation des
            travaux
          </li>
          <li>
            Les retards ne peuvent donner lieu à dommages et intérêts sauf accord préalable écrit
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">6. Obligations du client</h2>
        <p class="mb-4">Le client s'engage à :</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Fournir un accès adapté au chantier</li>
          <li>Mettre à disposition les alimentations nécessaires (eau, électricité)</li>
          <li>Obtenir les autorisations administratives requises</li>
          <li>Informer DITECO de toute particularité pouvant affecter les travaux</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">7. Garanties</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>
            Les travaux sont garantis conformément à la législation en vigueur (garantie décennale,
            garantie de parfait achèvement)
          </li>
          <li>Les équipements installés bénéficient de la garantie constructeur</li>
          <li>
            DITECO dispose des assurances professionnelles nécessaires à l'exercice de son activité
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">8. Réception des travaux</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>
            La réception des travaux est formalisée par un procès-verbal signé par les deux parties
          </li>
          <li>
            Les éventuelles réserves doivent être mentionnées sur le procès-verbal de réception
          </li>
          <li>DITECO s'engage à lever les réserves dans les meilleurs délais</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">9. Résiliation</h2>
        <p class="mb-4">
          En cas de manquement par l'une des parties à ses obligations, le contrat pourra être
          résilié de plein droit après mise en demeure restée sans effet pendant 15 jours.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">10. Droit de rétractation</h2>
        <p class="mb-4">
          Conformément au Code de la consommation, le client particulier dispose d'un délai de 14
          jours pour exercer son droit de rétractation à compter de la signature du devis, sans
          avoir à motiver sa décision.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">11. Propriété intellectuelle</h2>
        <p class="mb-4">
          Tous les éléments techniques, plans et études remis au client restent la propriété
          exclusive de DITECO jusqu'au paiement intégral des prestations.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">12. Protection des données</h2>
        <p class="mb-4">
          Les données personnelles collectées font l'objet d'un traitement informatique dans le
          respect de la réglementation en vigueur. Pour plus d'informations, consultez notre
          <router-link to="/privacy-policy" class="text-primary-blue hover:underline"
            >Politique de confidentialité</router-link
          >.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">13. Médiation</h2>
        <p class="mb-4">
          En cas de litige, le client peut recourir gratuitement au service de médiation MEDICYS :
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>
            Par voie électronique :
            <a href="https://medicys.fr" class="text-primary-blue hover:underline"
              >www.medicys.fr</a
            >
          </li>
          <li>Par voie postale : MEDICYS - 73 Boulevard de Clichy - 75009 Paris</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">14. Droit applicable</h2>
        <p class="mb-4">
          Les présentes CGV sont soumises au droit français. Tout litige relatif à leur
          interprétation et/ou à leur exécution relève des tribunaux compétents.
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
