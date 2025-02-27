<template>
  <div class="py-12 mt-12">
    <div class="container mx-auto px-8 sm:px-6 lg:px-8">
      <swiper
        :modules="[Autoplay]"
        :slides-per-view="3"
        :slides-per-group="3"
        :space-between="30"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :loop="true"
        :speed="10000"
        :breakpoints="{
          640: { slidesPerView: 4, slidesPerGroup: 4 },
          1024: { slidesPerView: 5, slidesPerGroup: 5 },
        }"
        class="w-full"
      >
        <swiper-slide
          v-for="(logo, index) in logos"
          :key="index"
          class="flex items-center justify-center"
        >
          <img :src="logo" :alt="`Logo partenaire ${index + 1}`" class="h-16 object-contain" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const baseLogos = [
  new URL('@/assets/partners/logo-capeb.png', import.meta.url).href,
  new URL('@/assets/partners/logo-domofinance.png', import.meta.url).href,
  new URL('@/assets/partners/logo-ffb.png', import.meta.url).href,
  new URL('@/assets/partners/logo-partenaire-edf.png', import.meta.url).href,
  new URL('@/assets/partners/logo-qualipac.png', import.meta.url).href,
  new URL('@/assets/partners/logo-qualisol.png', import.meta.url).href,
  new URL('@/assets/partners/logo-synerciel.png', import.meta.url).href,
  new URL('@/assets/partners/logo-diteco.png', import.meta.url).href,
]

// Duplicate the list to create a seamless loop
const logos = [...baseLogos, ...baseLogos]
</script>
