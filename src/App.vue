<template>
  <div class="app  d-flex flex-column position-relative">
      <AppNavbar ></AppNavbar>
      <div class="flex-grow-1 w-100 " >
        <router-view></router-view>
      </div>
      <AppFooter class="w-100"></AppFooter>
  </div>
</template>

<script setup>

import AppNavbar from './components/layout/Navbar.vue'
import AppFooter from './components/layout/Footer.vue'


</script>

<style>


   
</style>
