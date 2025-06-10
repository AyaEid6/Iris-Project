<template>
  <div class="services default-padding" >
    <div class="container">
      <div class="d-flex flex-column gap-5 justify-content-center align-items-center">
        <div class="sub-heading">
          <h3 class="text-center">Core Service Areas</h3>
          <p class="text-center">Strategic investments across high-growth industries</p>
        </div>
        <div class="row g-4">
          <div
            class="col-lg-3 col-md-6 col-sm-12"
            v-for="(card, index) in cards"
            :key="index"
          >
            <div class="home-card service d-flex flex-column gap-4">
              <div class="icon" v-html="card.icon"></div>
              <div class="card-content flex-grow-1">
                <h4>{{ card.title }}</h4>
                <p class="mb-0">{{ card.description }}</p>
              </div>
              <div class="action ">
                <router-link :to="card.link">
                  <span class="read me-1">Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M6 12.5L10 8.5L6 4.5" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    title: 'Garment Manufacturing & Trade Supply Chain',
    description: 'Efficient fashion supply with global design sourcing',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M2.01501 20.895C2.01501 21.4255 2.22573 21.9342 2.6008 22.3092C2.97587 22.6843 3.48458 22.895 4.01501 22.895H20.015C20.5454 22.895 21.0542 22.6843 21.4292 22.3092C21.8043 21.9342 22.015 21.4255 22.015 20.895V8.89502L15.015 13.895V8.89502L8.01501 13.895V4.89502C8.01501 4.36459 7.8043 3.85588 7.42923 3.48081C7.05416 3.10573 6.54545 2.89502 6.01501 2.89502H4.01501C3.48458 2.89502 2.97587 3.10573 2.6008 3.48081C2.22573 3.85588 2.01501 4.36459 2.01501 4.89502V20.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.015 18.895H18.015" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.015 18.895H13.015" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.01501 18.895H8.01501" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    title: 'Frozen Food & Raw Materials Importation',
    description: 'Global sourcing of quality food and raw ingredients',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M14.015 18.895V6.89502C14.015 6.36459 13.8043 5.85588 13.4292 5.48081C13.0542 5.10573 12.5454 4.89502 12.015 4.89502H4.01501C3.48458 4.89502 2.97587 5.10573 2.6008 5.48081C2.22573 5.85588 2.01501 6.36459 2.01501 6.89502V17.895C2.01501 18.1602 2.12037 18.4146 2.30791 18.6021C2.49544 18.7897 2.7498 18.895 3.01501 18.895H5.01501" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.015 18.895H9.01501" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.015 18.895H21.015C21.2802 18.895 21.5346 18.7897 21.7221 18.6021C21.9097 18.4146 22.015 18.1602 22.015 17.895V14.245C22.0146 14.0181 21.937 13.798 21.795 13.621L18.315 9.27102C18.2215 9.1539 18.1028 9.0593 17.9678 8.99422C17.8328 8.92914 17.6849 8.89523 17.535 8.89502H14.015" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.015 20.895C18.1196 20.895 19.015 19.9996 19.015 18.895C19.015 17.7904 18.1196 16.895 17.015 16.895C15.9104 16.895 15.015 17.7904 15.015 18.895C15.015 19.9996 15.9104 20.895 17.015 20.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.01501 20.895C8.11958 20.895 9.01501 19.9996 9.01501 18.895C9.01501 17.7904 8.11958 16.895 7.01501 16.895C5.91045 16.895 5.01501 17.7904 5.01501 18.895C5.01501 19.9996 5.91045 20.895 7.01501 20.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    title: 'Crystal & Gemstone Trading',
    description: 'Trading fine crystals and ethically sourced gems',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M6.01501 3.89502H18.015L22.015 9.89502L12.015 22.895L2.01501 9.89502L6.01501 3.89502Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.015 3.89502L8.01501 9.89502L12.015 22.895L16.015 9.89502L13.015 3.89502" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.01501 9.89502H22.015" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    title: 'High-Tech Solutions',
    description: 'Innovative technology for smart, sustainable industries',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M9.01501 11.895L3.01501 17.895V20.895H12.015L15.015 17.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.015 12.895L17.415 17.495C17.0411 17.8615 16.5385 18.0667 16.015 18.0667C15.4915 18.0667 14.9889 17.8615 14.615 17.495L9.41501 12.295C9.04855 11.9212 8.84329 11.4185 8.84329 10.895C8.84329 10.3715 9.04855 9.86888 9.41501 9.49502L14.015 4.89502" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    title: 'Market Data Analysis & IT Engineering',
    description: 'Real-time insights powered by AI and big data',
    link: '/',
    icon: `
     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M3.01514 3.89502V19.895C3.01514 20.4255 3.22585 20.9342 3.60092 21.3092C3.976 21.6843 4.4847 21.895 5.01514 21.895H21.0151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.01514 16.895H15.0151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.01514 11.895H19.0151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.01514 6.89502H10.0151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
  {
    title: 'Investment Services',
    description: 'Strategic funding for high-growth global ventures',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.0151 2.89502V22.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.0151 5.89502H9.51514C8.58688 5.89502 7.69664 6.26377 7.04026 6.92015C6.38389 7.57652 6.01514 8.46676 6.01514 9.39502C6.01514 10.3233 6.38389 11.2135 7.04026 11.8699C7.69664 12.5263 8.58688 12.895 9.51514 12.895H14.5151C15.4434 12.895 16.3336 13.2638 16.99 13.9201C17.6464 14.5765 18.0151 15.4668 18.0151 16.395C18.0151 17.3233 17.6464 18.2135 16.99 18.8699C16.3336 19.5263 15.4434 19.895 14.5151 19.895H6.01514" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
  {
    title: 'Investments in the Restaurant Industry',
    description: 'Supporting unique culinary brands and chains',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M3.01514 2.89502V9.89502C3.01514 10.995 3.91514 11.895 5.01514 11.895H9.01514C9.54557 11.895 10.0543 11.6843 10.4293 11.3092C10.8044 10.9342 11.0151 10.4255 11.0151 9.89502V2.89502" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.01514 2.89502V22.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.0151 15.895V2.89502C19.6891 2.89502 18.4173 3.4218 17.4796 4.35949C16.5419 5.29717 16.0151 6.56894 16.0151 7.89502V13.895C16.0151 14.995 16.9151 15.895 18.0151 15.895H21.0151ZM21.0151 15.895V22.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
  {
    title: 'Car Trading and Premium Vehicle Exporting',
    description: 'Exporting vehicles and parts across key markets',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M19.0151 17.895H21.0151C21.6151 17.895 22.0151 17.495 22.0151 16.895V13.895C22.0151 12.995 21.3151 12.195 20.5151 11.995C18.7151 11.495 16.0151 10.895 16.0151 10.895C16.0151 10.895 14.7151 9.49502 13.8151 8.59502C13.3151 8.19502 12.7151 7.89502 12.0151 7.89502H5.01514C4.41514 7.89502 3.91514 8.29502 3.61514 8.79502L2.21514 11.695C2.08272 12.0812 2.01514 12.4867 2.01514 12.895V16.895C2.01514 17.495 2.41514 17.895 3.01514 17.895H5.01514" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.01514 19.895C8.11971 19.895 9.01514 18.9996 9.01514 17.895C9.01514 16.7904 8.11971 15.895 7.01514 15.895C5.91057 15.895 5.01514 16.7904 5.01514 17.895C5.01514 18.9996 5.91057 19.895 7.01514 19.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.01514 17.895H15.0151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.0151 19.895C18.1197 19.895 19.0151 18.9996 19.0151 17.895C19.0151 16.7904 18.1197 15.895 17.0151 15.895C15.9106 15.895 15.0151 16.7904 15.0151 17.895C15.0151 18.9996 15.9106 19.895 17.0151 19.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
  {
    title: 'Medical Disposable Supplies',
    description: 'Supplying certified and safe medical products',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M18.0151 2.89502L22.0151 6.89502" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.0151 7.89502L20.0151 4.89502" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.0153 9.89502L8.71533 20.195C7.71533 21.195 6.21533 21.195 5.31533 20.195L4.71533 19.595C3.71533 18.595 3.71533 17.095 4.71533 16.195L15.0153 5.89502" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.01514 11.895L13.0151 15.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.01514 19.895L2.01514 22.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.0151 4.89502L20.0151 10.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
  {
    title: 'Projects and Equipment',
    description: 'Full-cycle support for infrastructure and tools',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M14.715 7.195C14.5318 7.38193 14.4291 7.63325 14.4291 7.895C14.4291 8.15675 14.5318 8.40807 14.715 8.595L16.315 10.195C16.5019 10.3782 16.7532 10.4809 17.015 10.4809C17.2767 10.4809 17.5281 10.3782 17.715 10.195L21.485 6.425C21.9878 7.53619 22.1401 8.77423 21.9214 9.97414C21.7028 11.1741 21.1237 12.2788 20.2613 13.1413C19.3988 14.0037 18.294 14.5828 17.0941 14.8015C15.8942 15.0201 14.6562 14.8678 13.545 14.365L6.63499 21.275C6.23717 21.6728 5.6976 21.8963 5.13499 21.8963C4.57238 21.8963 4.03282 21.6728 3.63499 21.275C3.23717 20.8772 3.01367 20.3376 3.01367 19.775C3.01367 19.2124 3.23717 18.6728 3.63499 18.275L10.545 11.365C10.0422 10.2538 9.88991 9.01577 10.1085 7.81585C10.3272 6.61594 10.9063 5.51115 11.7687 4.64872C12.6311 3.78629 13.7359 3.20717 14.9358 2.98854C16.1358 2.76991 17.3738 2.92216 18.485 3.425L14.725 7.185L14.715 7.195Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
  {
    title: 'Agricultural Solutions and Technologies',
    description: 'Smart, scalable systems for modern agriculture',
    link: '/',
    icon: `
     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M11.0154 20.895C9.25942 20.9003 7.56561 20.2455 6.26988 19.0604C4.97414 17.8754 4.17113 16.2466 4.0201 14.4971C3.86906 12.7477 4.38105 11.0054 5.45451 9.61576C6.52797 8.22614 8.08449 7.29072 9.81536 6.99502C15.5154 5.89502 17.0154 5.37502 19.0154 2.89502C20.0154 4.89502 21.0154 7.07502 21.0154 10.895C21.0154 16.395 16.2354 20.895 11.0154 20.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.01514 21.895C2.01514 18.895 3.86514 16.535 7.09514 15.895C9.51514 15.415 12.0151 13.895 13.0151 12.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
  {
    title: 'Manufacturing of Cosmetics, and Pet Care Products',
    description: 'Custom, high-quality goods for global brands',
    link: '/',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M11.0151 22.625C11.3192 22.8006 11.6641 22.893 12.0151 22.893C12.3662 22.893 12.7111 22.8006 13.0151 22.625L20.0151 18.625C20.3189 18.4497 20.5712 18.1975 20.7467 17.8939C20.9222 17.5902 21.0148 17.2458 21.0151 16.895V8.89504C21.0148 8.54432 20.9222 8.19985 20.7467 7.89621C20.5712 7.59256 20.3189 7.34041 20.0151 7.16504L13.0151 3.16504C12.7111 2.98951 12.3662 2.89709 12.0151 2.89709C11.6641 2.89709 11.3192 2.98951 11.0151 3.16504L4.01514 7.16504C3.7114 7.34041 3.45912 7.59256 3.2836 7.89621C3.10808 8.19985 3.0155 8.54432 3.01514 8.89504V16.895C3.0155 17.2458 3.10808 17.5902 3.2836 17.8939C3.45912 18.1975 3.7114 18.4497 4.01514 18.625L11.0151 22.625Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.0151 22.895V12.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.31494 7.89502L11.0179 12.629C11.3213 12.8034 11.665 12.8952 12.0149 12.8952C12.3648 12.8952 12.7086 12.8034 13.0119 12.629L20.7149 7.89502" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.51514 5.16504L16.5151 10.315" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  }
])
</script>

<style>

</style>