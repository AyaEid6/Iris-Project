<template>
    <div class="gallery">
        <div class="mt-2">
         <h5 class="mb-0 pb-0">Project Gallery</h5>   
         <Swiper
          :modules="[Autoplay , Navigation]"
          :loop="true"
          :autoplay="{ delay: 100000, disableOnInteraction: true }"
          :slides-per-view="5"
          :space-between="25"
          :breakpoints="breakpoints"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom'
          }"
          class="mt-4"
          >
          <SwiperSlide v-for="(project, index) in projects" :key="index" >
            <div class="slider-card d-flex flex-column justify-content-center align-items-center">
              <img :src="project" alt="">
            </div>
          </SwiperSlide>
        </Swiper>
          <!-- Navigation Arrows Below -->
        <div class="swiper-navigation d-flex justify-content-center gap-4 mt-4">
          <button class="swiper-button-prev-custom ">
            <img src="/images/arrow_right_alt.svg" alt="">
          </button>
          <button class="swiper-button-next-custom ">
            <img src="/images/arrow_left_alt.svg" alt="">
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay , Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


const projects=[
    '/images/plain.png',
    '/images/plain.png',
    '/images/plain.png',
    '/images/plain.png',
    '/images/plain.png',
]

const breakpoints = {
  0: {
    slidesPerView: 1
  },
  576: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 2
  },
  992: {
    slidesPerView: 2
  },
  1200: {
    slidesPerView: 2
  }
}
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  display: none !important;
}

.slider-card img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.swiper-button-prev-custom , .swiper-button-next-custom{
  border-radius: 68px;
  border: 1px solid #E2E8F0;
  padding: 8px;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.swiper-button-prev-custom:hover , .swiper-button-next-custom:hover{
  background: #F1F5F9;
}

</style>