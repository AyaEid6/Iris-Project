<template>
  <div class="app  d-flex flex-column position-relative">
      <AppNavbar v-if="!hideLayout"></AppNavbar>
      <div class="flex-grow-1 w-100 " >
        <router-view></router-view>
      </div>
      <AppFooter class="w-100" v-if="!hideLayout"></AppFooter>
  </div>
</template>

<script setup>

import AppNavbar from './components/layout/Navbar.vue'
import AppFooter from './components/layout/Footer.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
// Check meta to determine whether to hide layout
const hideLayout = computed(() => route.meta.hideLayout)

</script>

<style>


   
</style>
