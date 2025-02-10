<template>
  <div class="bg-white rounded-xl p-8">
    <h2 v-if="!showSuccess" class="text-2xl lg:text-3xl font-bold text-center mb-8">
      Calculez le montant de vos primes
    </h2>

    <!-- Progress bar -->
    <div v-if="!showSuccess" class="mb-8">
      <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full transition-all duration-300 ease-in-out rounded-full"
          :class="[isOnRenovationDampleur ? 'bg-primary-green' : 'bg-primary-blue']"
          :style="{ width: `${(currentStep / 9) * 100}%` }"
        ></div>
      </div>
      <p class="mt-3 text-center text-gray-500">Étape {{ currentStep }} / 9</p>
    </div>

    <!-- Form eligibilityForm -->
    <div class="mb-8" v-if="!showSuccess">
      <h3 class="text-xl font-bold text-center mb-2">{{ currentStepTitle }}</h3>
    </div>

    <!-- Form content -->
    <div class="space-y-6">
      <div v-if="!showSuccess" class="space-y-8">
        <div
          v-if="eligibilityForm[currentStep].options"
          :class="[
            'grid gap-4 mx-auto w-full',
            currentStep === 5
              ? 'grid-cols-2 sm:grid-cols-4 max-w-2xl'
              : currentStep === 4 || currentStep === 6
                ? 'grid-cols-1 sm:grid-cols-2 max-w-xl'
                : (eligibilityForm[currentStep].options?.length ?? 0) > 2
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-2xl'
                  : 'grid-cols-1 sm:grid-cols-2 max-w-lg',
          ]"
        >
          <!-- Options -->
          <div
            v-for="option in eligibilityForm[currentStep].options"
            :key="option.value"
            class="p-6 border-2 rounded-lg cursor-pointer"
            :class="{
              'border-primary-green hover:border-primary-green':
                isOnRenovationDampleur && formResponses[currentStep] === option.value,
              'border-primary-blue hover:border-primary-blue':
                !isOnRenovationDampleur && formResponses[currentStep] === option.value,
              'hover:border-primary-green': isOnRenovationDampleur,
              'hover:border-primary-blue': !isOnRenovationDampleur,
            }"
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
                :class="[
                  'w-12 h-12 mb-4',
                  isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue',
                ]"
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
              v-model="(formResponses[currentStep] as Record<string, string>)[input.label]"
              :type="input.type"
              :placeholder="input.placeholder"
              :class="[
                'p-3 border border-gray-300 rounded-lg',
                isOnRenovationDampleur
                  ? 'focus:ring-primary-green focus:border-primary-green'
                  : 'focus:ring-primary-blue focus:border-primary-blue',
              ]"
              @input="(e) => updateFormResponse(e, input.label)"
            />
          </div>
        </div>

        <p v-if="showError" class="text-red-500 text-sm text-center">
          {{
            currentStep === 9
              ? 'Veuillez remplir tous les champs'
              : 'Veuillez faire un choix pour continuer'
          }}
        </p>

        <!-- Navigation buttons -->
        <div
          class="flex flex-col-reverse sm:flex-row gap-4"
          :class="currentStep > 1 ? 'justify-between' : 'justify-end'"
        >
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="w-full sm:w-auto px-6 py-2 bg-primary-dark text-white rounded-full hover:bg-opacity-90"
          >
            Précédent
          </button>
          <div class="flex flex-col items-end gap-2">
            <button
              @click="currentStep === 9 ? submitForm() : nextStep()"
              :disabled="currentStep === 9 && !isCurrentStepValid"
              :class="[
                'w-full sm:w-auto px-6 py-2 text-white rounded-full hover:opacity-90 sm:ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
                isOnRenovationDampleur ? 'bg-primary-green' : 'bg-primary-blue',
              ]"
            >
              {{ currentStep === 9 ? 'Recevoir le calcul' : 'Continuer' }}
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="text-center space-y-4">
          <CheckIcon
            :class="[
              'w-16 h-16 mx-auto',
              isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue',
            ]"
          />
          <h3 class="text-2xl font-bold">Félicitations !</h3>
          <p class="text-gray-600">
            Nous vous contacterons bientôt pour le montant de vos primes.<br />
            N° de dossier :
            <span
              :class="[
                'font-bold',
                isOnRenovationDampleur ? 'text-primary-green' : 'text-primary-blue',
              ]"
              >{{ fileNumber }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckIcon } from 'lucide-vue-next'
import type { LucideIcon } from 'lucide-vue-next'

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

const ILE_DE_FRANCE_THRESHOLDS = {
  1: {
    very_modest: 23768,
    modest: 28933,
    intermediate: 40404,
  },
  2: {
    very_modest: 34884,
    modest: 42463,
    intermediate: 59394,
  },
  3: {
    very_modest: 41893,
    modest: 51000,
    intermediate: 71060,
  },
  4: {
    very_modest: 48914,
    modest: 59549,
    intermediate: 83637,
  },
  5: {
    very_modest: 55961,
    modest: 68123,
    intermediate: 95758,
  },
  additional: {
    very_modest: 7038,
    modest: 8568,
    intermediate: 12122,
  },
}

const OTHER_REGIONS_THRESHOLDS = {
  1: {
    very_modest: 17173,
    modest: 22015,
    intermediate: 30844,
  },
  2: {
    very_modest: 25115,
    modest: 32197,
    intermediate: 45340,
  },
  3: {
    very_modest: 30206,
    modest: 38719,
    intermediate: 54592,
  },
  4: {
    very_modest: 35285,
    modest: 45234,
    intermediate: 63844,
  },
  5: {
    very_modest: 40388,
    modest: 51775,
    intermediate: 73098,
  },
  additional: {
    very_modest: 5094,
    modest: 6525,
    intermediate: 9254,
  },
}

const props = defineProps<{
  formType?: 'renovation-dampleur' | 'pac-ssc'
}>()

const currentStep = ref(1)
const formResponses = ref<Record<number, string | Record<string, string>>>({
  7: {},
  9: {},
})
const showSuccess = ref(false)
const showError = ref(false)

const isOnRenovationDampleur = computed(() => {
  // Check props first
  if (props.formType) {
    return props.formType === 'renovation-dampleur'
  }
  // If no props, check URL query parameter
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('formType') === 'majorRenovation'
})

const eligibilityForm = computed(
  () =>
    ({
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
            image: 'electric.png',
            value: 'electric',
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
            label: 'Moins de 1500€',
            value: 'moins_1500',
          },
          {
            label: 'Moins de 2000€',
            value: 'moins_2000',
          },
          {
            label: 'Plus de 2000€',
            value: 'more_2000',
          },
        ],
      },
      5: {
        title: 'Connaissez-vous la classe énergétique de votre DPE ?',
        options: [
          { label: 'A', value: 'A' },
          { label: 'B', value: 'B' },
          { label: 'C', value: 'C' },
          { label: 'D', value: 'D' },
          { label: 'E', value: 'E' },
          { label: 'F', value: 'F' },
          { label: 'G', value: 'G' },
          { label: 'Non', value: 'unknown' },
        ],
      },
      6: {
        title: 'Information sur votre foyer',
        inputs: [
          {
            label: 'Code postal',
            type: 'text',
            placeholder: '75000',
            value: '',
            maxlength: 5,
          },
          {
            label: 'Nombre de personnes dans votre foyer (vous compris)',
            type: 'number',
            placeholder: '1',
            value: '',
          },
        ],
      },
      7: {
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
      8: {
        title: 'Quel est votre revenu fiscal de référence ?',
        options: getIncomeOptions(),
      },
      9: {
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
        ],
      },
    }) as Record<number, EligibilityForm>,
)

const currentStepTitle = computed(() => eligibilityForm.value[currentStep.value].title)

const isCurrentStepValid = computed(() => {
  const currentFormStep = eligibilityForm.value[currentStep.value]

  if (currentFormStep.options) {
    return formResponses.value[currentStep.value] !== undefined
  }

  if (currentFormStep.inputs) {
    const responses = formResponses.value[currentStep.value] as Record<string, string>
    return currentFormStep.inputs.every((input) => {
      const value = responses?.[input.label]
      if (!value || String(value).trim() === '') return false

      // Email validation
      if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value)
      }

      return true
    })
  }

  return false
})

const nextStep = () => {
  if (!isCurrentStepValid.value) {
    showError.value = true
    return
  }

  showError.value = false

  const nextStepNumber = currentStep.value + 1
  if (eligibilityForm.value[nextStepNumber]?.inputs && !formResponses.value[nextStepNumber]) {
    formResponses.value[nextStepNumber] = {}
  }

  if (currentStep.value === 7 && formResponses.value[7] === 'no_share_income') {
    currentStep.value = 9
  } else if (currentStep.value < 9) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    if (currentStep.value === 9 && formResponses.value[7] === 'no_share_income') {
      currentStep.value = 7
    } else {
      currentStep.value--
    }
  }
}

const generateFileNumber = () => {
  const timestamp = Date.now().toString()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `DOS-${timestamp.slice(-6)}${random}`
}

const fileNumber = ref('')

const getFormattedIncomeLevel = (level: string) => {
  const mapping = {
    very_modest: 'Très modestes',
    modest: 'Modestes',
    intermediate: 'Revenus intermédiaires',
    superior: 'Revenus supérieurs',
  }
  return mapping[level as keyof typeof mapping] || level
}

const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const getFormattedFormType = (type: string) => {
  const mapping = {
    'renovation-dampleur': "Rénovation d'ampleur",
    'pac-ssc': 'PAC SSC',
  }
  return mapping[type as keyof typeof mapping] || type
}

const submitForm = async () => {
  fileNumber.value = generateFileNumber()

  // Format phone number
  const phoneNumber = (formResponses.value[9] as Record<string, string>)['Numéro de téléphone']
  const formattedPhone = phoneNumber.startsWith('0')
    ? '+33' + phoneNumber.substring(1)
    : phoneNumber

  // Récupérer les labels depuis eligibilityForm
  const getLabel = (step: number, value: string) => {
    return eligibilityForm.value[step].options?.find((opt) => opt.value === value)?.label || value
  }

  const formData = {
    fileNumber: fileNumber.value,
    ownershipStatus: getLabel(1, formResponses.value[1] as string),
    propertyType: getLabel(2, formResponses.value[2] as string),
    heatingType: getLabel(3, formResponses.value[3] as string),
    heatingBill: getLabel(4, formResponses.value[4] as string),
    energyClass: formResponses.value[5],
    postalCode: (formResponses.value[6] as Record<string, string>)['Code postal'],
    householdSize: (formResponses.value[6] as Record<string, string>)[
      'Nombre de personnes dans votre foyer (vous compris)'
    ],
    shareIncome: getLabel(7, formResponses.value[7] as string),
    incomeLevel: getFormattedIncomeLevel(formResponses.value[8] as string),
    fullName: (formResponses.value[9] as Record<string, string>)['Nom complet'],
    email: (formResponses.value[9] as Record<string, string>)['Adresse email'],
    phone: formattedPhone,
    formType: getFormattedFormType(
      isOnRenovationDampleur.value ? 'renovation-dampleur' : 'pac-ssc',
    ),
    submissionDate: formatDate(new Date()),
  }

  try {
    const response = await fetch('https://hook.eu2.make.com/cey16iu32untwxy20anji2mt2idlesha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du formulaire")
    }

    showSuccess.value = true
  } catch (error) {
    console.error('Erreur:', error)
  }
}

const selectOption = (value: string) => {
  formResponses.value[currentStep.value] = value
  nextStep()
}

const getImageUrl = (imageName: string) => {
  return new URL(`../assets/form/${imageName}`, import.meta.url).href
}

const updateFormResponse = (event: Event, label: string) => {
  const currentStepNumber = currentStep.value
  if (!formResponses.value[currentStepNumber]) {
    formResponses.value[currentStepNumber] = {}
  }

  let value = (event.target as HTMLInputElement).value

  // Validate postal code
  if (label === 'Code postal') {
    value = value.replace(/\D/g, '').slice(0, 5)
  }

  ;(formResponses.value[currentStepNumber] as Record<string, string>)[label] = value
}

const getIncomeOptions = () => {
  if (!formResponses.value[6] || typeof formResponses.value[6] !== 'object') {
    return [
      {
        label: `Moins de ${OTHER_REGIONS_THRESHOLDS[1].very_modest}€`,
        value: 'very_modest',
      },
      {
        label: `Moins de ${OTHER_REGIONS_THRESHOLDS[1].modest}€`,
        value: 'modest',
      },
      {
        label: `Moins de ${OTHER_REGIONS_THRESHOLDS[1].intermediate}€`,
        value: 'intermediate',
      },
      {
        label: `Plus de ${OTHER_REGIONS_THRESHOLDS[1].intermediate}€`,
        value: 'superior',
      },
    ]
  }

  const responses = formResponses.value[6] as Record<string, string>
  const householdSize =
    Number(responses['Nombre de personnes dans votre foyer (vous compris)']) || 1
  const postalCode = responses['Code postal'] || ''

  const THRESHOLDS = isIleDeFrance(postalCode) ? ILE_DE_FRANCE_THRESHOLDS : OTHER_REGIONS_THRESHOLDS

  const size = Math.min(5, Math.max(1, householdSize))
  let thresholds = THRESHOLDS[size as keyof typeof THRESHOLDS]

  if (householdSize > 5) {
    const additional = (householdSize - 5) * THRESHOLDS.additional.very_modest
    thresholds = {
      very_modest: THRESHOLDS[5].very_modest + additional,
      modest: THRESHOLDS[5].modest + (householdSize - 5) * THRESHOLDS.additional.modest,
      intermediate:
        THRESHOLDS[5].intermediate + (householdSize - 5) * THRESHOLDS.additional.intermediate,
    }
  }

  return [
    {
      label: `Moins de ${thresholds.very_modest}€`,
      value: 'very_modest',
    },
    {
      label: `Moins de ${thresholds.modest}€`,
      value: 'modest',
    },
    {
      label: `Moins de ${thresholds.intermediate}€`,
      value: 'intermediate',
    },
    {
      label: `Plus de ${thresholds.intermediate}€`,
      value: 'superior',
    },
  ]
}

const isIleDeFrance = (postalCode: string) => {
  const prefix = postalCode.substring(0, 2)
  return ['75', '77', '78', '91', '92', '93', '94', '95'].includes(prefix)
}
</script>
