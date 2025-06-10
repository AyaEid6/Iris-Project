<template>
  <div class="hero services gradient-bg" >
    <div class="overlay" style="background: rgba(255, 255, 255, 0.30);">
      <div class="container ">
       <div class="d-flex flex-column justify-content-center align-items-center mt-5">
         <div class="content ">
          <h1>Explore <span>IRISUNITED’s</span> Core Service Areas Across Multiple Sectors</h1>
          <p>Strategic investments and business solutions for a rapidly evolving Chinese marketplace.</p>
        </div>
       </div>

        <!-- Slider -->
      <div class="mt-2">
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
          >
          <SwiperSlide v-for="(service, index) in services" :key="index" >
            <div class="slider-card d-flex flex-column justify-content-center align-items-center">
              <div v-html="service.icon" class="mb-3"></div>
              <h5 class="text-center">{{ service.title }}</h5>
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
      
        <div class="discover d-flex flex-column justify-content-center align-items-center position-absolute p-4">
          <span>Explore Our Services</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M6 9.5L12 15.5L18 9.5" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay , Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path d="M2.6665 27C2.6665 27.7072 2.94746 28.3855 3.44755 28.8856C3.94765 29.3857 4.62593 29.6667 5.33317 29.6667H26.6665C27.3737 29.6667 28.052 29.3857 28.5521 28.8856C29.0522 28.3855 29.3332 27.7072 29.3332 27V11L19.9998 17.6667V11L10.6665 17.6667V5.66667C10.6665 4.95942 10.3856 4.28115 9.88546 3.78105C9.38536 3.28095 8.70708 3 7.99984 3H5.33317C4.62593 3 3.94765 3.28095 3.44755 3.78105C2.94746 4.28115 2.6665 4.95942 2.6665 5.66667V27Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.6665 24.3333H23.9998" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 24.3333H17.3333" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.3335 24.3333H10.6668" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    title: 'Garment Manufacturing & Trade'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <path d="M18.6665 24.3333V8.33329C18.6665 7.62605 18.3856 6.94777 17.8855 6.44767C17.3854 5.94758 16.7071 5.66663 15.9998 5.66663H5.33317C4.62593 5.66663 3.94765 5.94758 3.44755 6.44767C2.94746 6.94777 2.6665 7.62605 2.6665 8.33329V23C2.6665 23.3536 2.80698 23.6927 3.05703 23.9428C3.30708 24.1928 3.64622 24.3333 3.99984 24.3333H6.6665" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 24.3333H12" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25.3332 24.3333H27.9998C28.3535 24.3333 28.6926 24.1929 28.9426 23.9428C29.1927 23.6928 29.3332 23.3536 29.3332 23V18.1333C29.3326 17.8307 29.2292 17.5373 29.0398 17.3013L24.3998 11.5013C24.2751 11.3452 24.1169 11.219 23.9369 11.1323C23.7569 11.0455 23.5597 11.0003 23.3598 11H18.6665" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.6667 27C24.1394 27 25.3333 25.8061 25.3333 24.3333C25.3333 22.8605 24.1394 21.6666 22.6667 21.6666C21.1939 21.6666 20 22.8605 20 24.3333C20 25.8061 21.1939 27 22.6667 27Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33317 27C10.8059 27 11.9998 25.8061 11.9998 24.3333C11.9998 22.8605 10.8059 21.6666 9.33317 21.6666C7.86041 21.6666 6.6665 22.8605 6.6665 24.3333C6.6665 25.8061 7.86041 27 9.33317 27Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    title: 'Frozen Food & Materials'   
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M7.99984 4.33331H23.9998L29.3332 12.3333L15.9998 29.6666L2.6665 12.3333L7.99984 4.33331Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.6665 4.33331L10.6665 12.3333L15.9998 29.6666L21.3332 12.3333L17.3332 4.33331" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.6665 12.3333H29.3332" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title: 'Crystal & Gemstone Trading'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path d="M24.0002 5.66663H8.00016C6.5274 5.66663 5.3335 6.86053 5.3335 8.33329V24.3333C5.3335 25.8061 6.5274 27 8.00016 27H24.0002C25.4729 27 26.6668 25.8061 26.6668 24.3333V8.33329C26.6668 6.86053 25.4729 5.66663 24.0002 5.66663Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6667 12.3333H13.3333C12.597 12.3333 12 12.9303 12 13.6666V19C12 19.7364 12.597 20.3333 13.3333 20.3333H18.6667C19.403 20.3333 20 19.7364 20 19V13.6666C20 12.9303 19.403 12.3333 18.6667 12.3333Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 3V5.66667" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 27V29.6667" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.6665 20.3333H5.33317" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.6665 12.3333H5.33317" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.6665 20.3333H29.3332" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.6665 12.3333H29.3332" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 3V5.66667" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 27V29.6667" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    title: 'Market Data & IT Engineering'
  },
  {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M16 27V13.6666" stroke="#B1202F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24 27V5.66663" stroke="#B1202F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 27V21.6666" stroke="#B1202F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title:'Investment Services'
  },
  {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M14.6667 20.3333H17.3333C18.0406 20.3333 18.7189 20.0524 19.219 19.5523C19.719 19.0522 20 18.3739 20 17.6667C20 16.9594 19.719 16.2811 19.219 15.781C18.7189 15.281 18.0406 15 17.3333 15H13.3333C12.5333 15 11.8667 15.2667 11.4667 15.8L4 23" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.3335 28.3333L11.4668 26.4666C11.8668 25.9333 12.5335 25.6666 13.3335 25.6666H18.6668C20.1335 25.6666 21.4668 25.1333 22.4002 24.0666L28.5335 18.2C29.048 17.7137 29.3483 17.043 29.3683 16.3354C29.3883 15.6278 29.1264 14.9412 28.6402 14.4266C28.1539 13.9121 27.4832 13.6118 26.7756 13.5918C26.0679 13.5718 25.3813 13.8337 24.8668 14.32L19.2668 19.52" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.6665 21.6666L10.6665 29.6666" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3335 16.2C23.469 16.2 25.2001 14.4688 25.2001 12.3333C25.2001 10.1978 23.469 8.46667 21.3335 8.46667C19.198 8.46667 17.4668 10.1978 17.4668 12.3333C17.4668 14.4688 19.198 16.2 21.3335 16.2Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title:'Restaurant Industry Investments'
  },
  {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 2.66669V12C4 13.4667 5.2 14.6667 6.66667 14.6667H12C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7073 14.6667 12V2.66669" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.3335 2.66669V29.3334" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28.0002 20V2.66669C26.2321 2.66669 24.5364 3.36907 23.2861 4.61931C22.0359 5.86955 21.3335 7.56524 21.3335 9.33335V17.3334C21.3335 18.8 22.5335 20 24.0002 20H28.0002ZM28.0002 20V29.3334" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    title:'Restaurant Industry Investments'
  },
  {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M25.3332 22.6666H27.9998C28.7998 22.6666 29.3332 22.1333 29.3332 21.3333V17.3333C29.3332 16.1333 28.3998 15.0666 27.3332 14.8C24.9332 14.1333 21.3332 13.3333 21.3332 13.3333C21.3332 13.3333 19.5998 11.4666 18.3998 10.2666C17.7332 9.73331 16.9332 9.33331 15.9998 9.33331H6.6665C5.8665 9.33331 5.19984 9.86665 4.79984 10.5333L2.93317 14.4C2.75661 14.9149 2.6665 15.4556 2.6665 16V21.3333C2.6665 22.1333 3.19984 22.6666 3.99984 22.6666H6.6665" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33317 25.3333C10.8059 25.3333 11.9998 24.1394 11.9998 22.6667C11.9998 21.1939 10.8059 20 9.33317 20C7.86041 20 6.6665 21.1939 6.6665 22.6667C6.6665 24.1394 7.86041 25.3333 9.33317 25.3333Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 22.6667H20" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.6667 25.3333C24.1394 25.3333 25.3333 24.1394 25.3333 22.6667C25.3333 21.1939 24.1394 20 22.6667 20C21.1939 20 20 21.1939 20 22.6667C20 24.1394 21.1939 25.3333 22.6667 25.3333Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    title:'Premium Vehicle Exporting'
  },
  {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M13.9998 27.3334L27.3332 14C27.9562 13.3895 28.452 12.6614 28.7919 11.8581C29.1319 11.0547 29.3092 10.1919 29.3136 9.31955C29.318 8.44723 29.1494 7.58269 28.8176 6.77591C28.4858 5.96914 27.9974 5.23615 27.3806 4.61931C26.7637 4.00248 26.0307 3.51405 25.224 3.18225C24.4172 2.85046 23.5526 2.6819 22.6803 2.6863C21.808 2.69071 20.9452 2.868 20.1418 3.20792C19.3384 3.54785 18.6104 4.04366 17.9998 4.66669L4.66651 18C4.04348 18.6106 3.54766 19.3386 3.20774 20.142C2.86782 20.9454 2.69053 21.8082 2.68612 22.6805C2.68171 23.5528 2.85028 24.4174 3.18207 25.2241C3.51386 26.0309 4.0023 26.7639 4.61913 27.3807C5.23596 27.9976 5.96896 28.486 6.77573 28.8178C7.5825 29.1496 8.44705 29.3182 9.31937 29.3137C10.1917 29.3093 11.0545 29.1321 11.8579 28.7921C12.6612 28.4522 13.3893 27.9564 13.9998 27.3334Z" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.3335 11.3333L20.6668 20.6666" stroke="#B1202F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    title:'Medical Supplies'
  },
   {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.6667 28.9733C15.0721 29.2074 15.5319 29.3306 16 29.3306C16.4681 29.3306 16.9279 29.2074 17.3333 28.9733L26.6667 23.64C27.0717 23.4062 27.408 23.07 27.6421 22.6651C27.8761 22.2602 27.9995 21.8009 28 21.3333V10.6666C27.9995 10.199 27.8761 9.73972 27.6421 9.33485C27.408 8.92999 27.0717 8.59379 26.6667 8.35997L17.3333 3.02664C16.9279 2.79259 16.4681 2.66937 16 2.66937C15.5319 2.66937 15.0721 2.79259 14.6667 3.02664L5.33333 8.35997C4.92835 8.59379 4.59197 8.92999 4.35795 9.33485C4.12392 9.73972 4.00048 10.199 4 10.6666V21.3333C4.00048 21.8009 4.12392 22.2602 4.35795 22.6651C4.59197 23.07 4.92835 23.4062 5.33333 23.64L14.6667 28.9733Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 29.3333V16" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.3999 9.33331L14.6706 15.6453C15.075 15.8779 15.5334 16.0003 15.9999 16.0003C16.4664 16.0003 16.9248 15.8779 17.3292 15.6453L27.5999 9.33331" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 5.69336L22 12.56" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title:'Projects and Equipment'
  },
  {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.6668 26.6667C12.3255 26.6738 10.0671 25.8007 8.33949 24.2206C6.61184 22.6405 5.54116 20.4688 5.33978 18.1362C5.13841 15.8036 5.82106 13.4805 7.25233 11.6277C8.68361 9.77485 10.759 8.52762 13.0668 8.13335C20.6668 6.66669 22.6668 5.97335 25.3335 2.66669C26.6668 5.33335 28.0001 8.24002 28.0001 13.3334C28.0001 20.6667 21.6268 26.6667 14.6668 26.6667Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.6665 28C2.6665 24 5.13317 20.8533 9.43984 20C12.6665 19.36 15.9998 17.3333 17.3332 16" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title:'Agricultural Solutions'
  },
  {
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 22C16 23.1867 15.6481 24.3467 14.9888 25.3334C14.3295 26.3201 13.3925 27.0892 12.2961 27.5433C11.1997 27.9974 9.99335 28.1162 8.82946 27.8847C7.66557 27.6532 6.59648 27.0818 5.75736 26.2426C4.91825 25.4035 4.3468 24.3344 4.11529 23.1705C3.88378 22.0067 4.0026 20.8003 4.45673 19.7039C4.91085 18.6075 5.67989 17.6705 6.66658 17.0112C7.65328 16.3519 8.81331 16 10 16C8.81331 16 7.65328 15.6481 6.66658 14.9888C5.67989 14.3295 4.91085 13.3925 4.45673 12.2961C4.0026 11.1997 3.88378 9.99335 4.11529 8.82946C4.3468 7.66557 4.91825 6.59648 5.75736 5.75736C6.59648 4.91825 7.66557 4.3468 8.82946 4.11529C9.99335 3.88378 11.1997 4.0026 12.2961 4.45673C13.3925 4.91085 14.3295 5.67989 14.9888 6.66658C15.6481 7.65328 16 8.81331 16 10C16 8.81331 16.3519 7.65328 17.0112 6.66658C17.6705 5.67989 18.6075 4.91085 19.7039 4.45673C20.8003 4.0026 22.0067 3.88378 23.1705 4.11529C24.3344 4.3468 25.4035 4.91825 26.2426 5.75736C27.0818 6.59648 27.6532 7.66557 27.8847 8.82946C28.1162 9.99335 27.9974 11.1997 27.5433 12.2961C27.0892 13.3925 26.3201 14.3295 25.3334 14.9888C24.3467 15.6481 23.1867 16 22 16C23.1867 16 24.3467 16.3519 25.3334 17.0112C26.3201 17.6705 27.0892 18.6075 27.5433 19.7039C27.9974 20.8003 28.1162 22.0067 27.8847 23.1705C27.6532 24.3344 27.0818 25.4035 26.2426 26.2426C25.4035 27.0818 24.3344 27.6532 23.1705 27.8847C22.0067 28.1162 20.8003 27.9974 19.7039 27.5433C18.6075 27.0892 17.6705 26.3201 17.0112 25.3334C16.3519 24.3467 16 23.1867 16 22Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 10V12" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 16H12" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 16H20" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 22V20" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6665 10.6667L13.1732 13.1734" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.8267 13.1734L21.3333 10.6667" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6665 21.3333L13.1732 18.8267" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.8267 18.8267L21.3333 21.3333" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title:'Premium Cosmetics & Care'
  }
];

const breakpoints = {
  0: {
    slidesPerView: 1
  },
  576: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 3
  },
  992: {
    slidesPerView: 3
  },
  1200: {
    slidesPerView: 5
  }
}
</script>



<style scoped>

.swiper-button-next,
.swiper-button-prev {
  display: none !important;
}

.swiper{
  width: 75%;
  margin: 0 auto;
}
.slider-card{
  border-radius: 8px;
  border: 1px solid #F3F4F6;
  background: #FFF;
  padding: 24px 32px;
  height: 150px !important;
  transition: all 0.3s ease-in-out;

}

.slider-card:hover{
  background: #b1202f;
}

.slider-card:hover h5{
  color: #FFF;
}

.slider-card:hover svg path{
 stroke: #FFF !important;
}

.swiper-slide{
  width: 170px !important;
  
}

.slider-card h5{
color: #1E293B;
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
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


.gradient-bg {
   background: 
    radial-gradient(circle at 20% 30%, #b1202f1a 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, #b1202f1a 0%, transparent 50%),
    radial-gradient(circle at 60% 80%, #b1202f1a 0%, transparent 40%),
    radial-gradient(circle at 30% 70%, #b1202f1a 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, #b1202f1a 0%, transparent 45%),
    #ffffff;
}

</style>

