<template>
    <div class="projects default-padding" style="background-color: #F9FAFB;">
        <div class="container">

            <div class="d-flex related justify-content-between align-items-center mb-5">
              <div class="sub-heading">
                  <h3>Related Projects</h3>
              </div>
              <router-link to="/projects" class="view">
                <span>View All</span>
                <img src="/images/arrow_left_alt.svg" alt="">
              </router-link>
            </div>
            <div class="row g-4">            
                <div
                    class="col-lg-3 col-md-6 col-sm-12"
                    v-for="(card, index) in cards"
                    :key="index"
                >
                    <div class="home-card d-flex flex-column gap-4">
                    <div class="icon" v-html="card.icon"></div>
                    <div class="card-content">
                        <h4>{{ card.title }}</h4>
                        <p class="mb-0">{{ card.description }}</p>
                    </div>
                    <div class="action">
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
</template>

<script setup>
const cards = [
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
  }
]
</script>

<style lang="scss" scoped>

</style>