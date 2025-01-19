<template>
  <div class="bg-white rounded-lg border-2 border-gray-200 p-8">
    <h2 class="text-2xl font-bold text-center mb-8">Calculer le montant de vos primes</h2>

    <!-- Progress bar -->
    <div v-if="currentStep <= 6" class="flex items-center justify-between mb-8">
      <template v-for="(step, index) in 6" :key="index">
        <div class="relative">
          <div
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center',
              isStepCompleted(index + 1) ? 'bg-[#56B476] text-white' : 'bg-gray-200',
            ]"
          >
            <CheckIcon v-if="isStepCompleted(index + 1)" class="w-5 h-5" />
            <span v-else>{{ index + 1 }}</span>
          </div>
        </div>
        <div
          v-if="index < 5"
          class="flex-1 h-[2px]"
          :class="[isStepCompleted(index + 2) ? 'bg-[#56B476]' : 'bg-gray-200']"
        ></div>
      </template>
    </div>

    <!-- Form eligibilityForm -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-center mb-2">{{ currentStepTitle }}</h3>
      <p v-if="currentStep <= 6" class="text-center text-gray-500">Étape {{ currentStep }} / 6</p>
    </div>

    <!-- Form content -->
    <div class="space-y-6">
      <div v-if="!showSuccess">
        <div
          v-if="eligibilityForm[currentStep].options"
          :class="[
            'grid gap-4',
            currentStep === 5
              ? 'grid-cols-1'
              : currentStep === 4 || currentStep === 6
                ? 'grid-cols-2'
                : (eligibilityForm[currentStep].options?.length ?? 0) > 2
                  ? 'grid-cols-4'
                  : 'grid-cols-2',
          ]"
        >
          <!-- Options -->
          <div
            v-for="option in eligibilityForm[currentStep].options"
            :key="option.value"
            class="p-6 border-2 rounded-lg cursor-pointer hover:border-[#56B476]"
            :class="{ 'border-2 border-[#56B476]': formResponses[currentStep] === option.value }"
            @click="selectOption(option.value)"
          >
            <div class="flex flex-col items-center">
              <img
                v-if="option.image"
                :src="getImageUrl(option.image)"
                :alt="option.label"
                class="w-12 h-12 mb-4 object-contain"
              />
              <component
                v-else-if="option.icon"
                :is="option.icon"
                class="w-12 h-12 text-[#56B476] mb-4"
              />
              <span class="text-center w-full">{{ option.label }}</span>
            </div>
          </div>
        </div>

        <!-- Inputs -->
        <div v-if="eligibilityForm[currentStep].inputs" class="space-y-4">
          <div
            v-for="input in eligibilityForm[currentStep].inputs"
            :key="input.label"
            class="flex flex-col"
          >
            <label :for="input.label" class="mb-2 text-sm font-medium text-gray-700">
              {{ input.label }}
            </label>
            <input
              :id="input.label"
              v-model="input.value"
              :type="input.type"
              :placeholder="input.placeholder"
              class="p-3 border border-gray-300 rounded-lg focus:ring-[#56B476] focus:border-[#56B476]"
            />
          </div>
        </div>

        <!-- Navigation buttons -->
        <div class="flex justify-between gap-4 pt-8">
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="px-6 py-2 bg-[#1B2A3B] text-white rounded-full hover:bg-opacity-90"
          >
            Précédent
          </button>
          <button
            @click="currentStep === 7 ? submitForm() : nextStep()"
            :disabled="!isCurrentStepValid"
            class="px-6 py-2 bg-[#56B476] text-white rounded-full hover:bg-opacity-90 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ currentStep === 7 ? 'Recevoir le calcul' : 'Continuer' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckIcon } from 'lucide-vue-next'
import type { LucideIcon } from 'lucide-vue-next'

const currentStep = ref(1)
const formResponses = ref<Record<number, string>>({})
const showSuccess = ref(false)

interface EligibilityForm {
  title: string
  options?: {
    label: string
    icon?: LucideIcon
    image?: string
    value: string
  }[]
  inputs?: {
    label: string
    placeholder: string
    type: string
    value: string
  }[]
}

const eligibilityForm: Record<number, EligibilityForm> = {
  1: {
    title: 'Concernant votre logement, vous êtes ?',
    options: [
      {
        label: 'Propriétaire',
        image: 'owner.png',
        value: 'owner',
      },
      {
        label: 'Locataire',
        image: 'renter.png',
        value: 'renter',
      },
    ],
  },
  2: {
    title: 'Dans quel type de bien vivez vous ?',
    options: [
      {
        label: 'Maison',
        image: 'house.png',
        value: 'house',
      },
      {
        label: 'Appartement',
        image: 'apartment.png',
        value: 'apartment',
      },
    ],
  },
  3: {
    title: 'Quel est votre mode de chauffage ?',
    options: [
      {
        label: 'Fioul',
        image: 'fuel.png',
        value: 'fuel',
      },
      {
        label: 'Gaz',
        image: 'gas.png',
        value: 'gas',
      },
      {
        label: 'Électrique',
        image: 'electricity.png',
        value: 'electricity',
      },
      {
        label: 'Bois ou autre',
        image: 'wood.png',
        value: 'wood',
      },
    ],
  },
  4: {
    title: 'Quel est le montant annuel de votre facture de chauffage ?',
    options: [
      {
        label: 'Moins de 1250€',
        value: 'moins_1250',
      },
      {
        label: 'De 1250€ à 1500€',
        value: '1250_1500',
      },
      {
        label: 'De 1500 à 2000€',
        value: '1500_2000',
      },
      {
        label: 'Plus de 2000€',
        value: 'more_2000',
      },
    ],
  },
  5: {
    title: "Voulez-vous connaître votre montant d'aide ?",
    options: [
      {
        label: 'Je souhaite avoir le montant de ma prime',
        value: 'share_income',
      },
      {
        label: 'Je ne souhaite pas confier mes revenus',
        value: 'no_share_income',
      },
    ],
  },
  6: {
    title: `Quel est le revenu fiscal de référence indiqué sur votre avis d'imposition ${new Date().getFullYear() - 1} (revenus ${new Date().getFullYear() - 2})`,
    options: [
      {
        label: "Jusqu'à 23 768€",
        value: 'under_23768',
      },
      {
        label: 'De 23 768€ et 28 933€',
        value: '23768_28933',
      },
      {
        label: 'De 28 933€ et 40 404€',
        value: '28933_40404',
      },
      {
        label: 'Plus de 40 405€',
        value: 'over_40405',
      },
    ],
  },
  7: {
    title: 'Vos informations de contact',
    inputs: [
      {
        label: 'Nom complet',
        type: 'text',
        placeholder: 'Entrez votre nom complet',
        value: '',
      },
      {
        label: 'Adresse email',
        type: 'email',
        placeholder: 'exemple@email.com',
        value: '',
      },
      {
        label: 'Numéro de téléphone',
        type: 'tel',
        placeholder: '06 12 34 56 78',
        value: '',
      },
      {
        label: 'Code postal',
        type: 'text',
        placeholder: '75000',
        value: '',
      },
      {
        label: 'Nombre de personnes dans votre foyer (vous compris)',
        type: 'number',
        placeholder: '1',
        value: '',
      },
    ],
  },
}

const currentStepTitle = computed(() => eligibilityForm[currentStep.value].title)

const isCurrentStepValid = computed(() => {
  const currentFormStep = eligibilityForm[currentStep.value]

  if (currentFormStep.options) {
    return formResponses.value[currentStep.value] !== undefined
  }

  if (currentFormStep.inputs) {
    return currentFormStep.inputs.every((input) => input.value.trim() !== '')
  }

  return false
})

const nextStep = () => {
  if (!isCurrentStepValid.value) {
    return
  }

  if (currentStep.value === 5 && formResponses.value[5] === 'no_share_income') {
    currentStep.value = 7 // Skip step 6 if user doesn't want to share income
  } else if (currentStep.value < 7) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    if (currentStep.value === 7 && formResponses.value[5] === 'no_share_income') {
      currentStep.value = 5 // Go back to step 5 if step 6 was skipped
    } else {
      currentStep.value--
    }
  }
}

const isStepCompleted = (step: number) => {
  if (step > currentStep.value) return false
  if (step < currentStep.value) return true

  return false
}

const submitForm = () => {
  showSuccess.value = true
}

const selectOption = (value: string) => {
  formResponses.value[currentStep.value] = value
  nextStep()
}

const getImageUrl = (imageName: string) => {
  return new URL(`../assets/form/${imageName}`, import.meta.url).href
}
</script>
