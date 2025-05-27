<template>
  <div class="app  d-flex flex-column position-relative">
      <AppNavbar ></AppNavbar>
      <div class="flex-grow-1 w-100 " >
        <router-view></router-view>
      </div>
      <AppFooter class="w-100"></AppFooter>
  </div>
</template>

<script>

import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,

  }
}
</script>

<style>


   
</style>
