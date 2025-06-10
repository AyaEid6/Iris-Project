<template>
  <section class="home ">
  <AppHero></AppHero>
  <AppAboutSection></AppAboutSection>
  <AppServicesSection></AppServicesSection>
  <AppProcessSection></AppProcessSection>
  <AppChooseSection></AppChooseSection>
  </section>
</template>

<script>
 import AppHero from '../components/Home/Hero.vue'
 import AppAboutSection from '../components/Home/About.vue'
 import AppServicesSection from '../components/Home/Services.vue'
 import AppProcessSection from '../components/Home/Process.vue'
 import AppChooseSection from '../components/Home/Choose.vue'

  export default {
  name:'AppHome',
  components: {
    AppHero,
    AppAboutSection,
    AppServicesSection,
    AppProcessSection,
    AppChooseSection,
  },

  }
</script>

<style>
 
    
</style>