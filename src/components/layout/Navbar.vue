<template>
  <nav :class="['navbar navbar-expand-lg py-3', { 'navbar-scrolled': isScrolled }]">
    <div class="container">
      <div class="d-flex justify-content-between w-100 align-items-center">
        <router-link v-if="!isScrolled && !isServicesPage" class="navbar-brand text-light" to="/">
          <img src="/images/logoLight.svg" alt="logo" />
        </router-link>
        <router-link v-else class="navbar-brand text-dark" to="/">
          <img src="/images/logoDark.svg" alt="logo" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          @click="sidebarOpen = true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Horizontal navbar (hidden on small screens) -->
        <div class="horizontal-nav d-none d-lg-flex">
          <ul class="navbar-nav mb-2 mb-lg-0 align-items-center gap-3">
            <li class="nav-item" v-for="link in navLinks" :key="link">
              <router-link
                :to="getLinkPath(link)"
                class="nav-link"
                :class="{ 'text-dark': isScrolled || isServicesPage, 'text-light': !isScrolled }"
              >
                {{ link }}
              </router-link>
            </li>
            <li>
              <router-link to="getTouch"  :class="[ (isScrolled || isServicesPage) ? 'btn-light' : 'btn-dark']">Get In Touch</router-link>
            </li>
          </ul>
        </div>

        <!-- Sidebar for small screens -->
        <div class="sidebar" :class="{ open: sidebarOpen }">
          <button class="btn-close ms-auto mb-3" @click="sidebarOpen = false" aria-label="Close"></button>
          <ul class="navbar-nav mb-2 mb-lg-0 align-items-start gap-3">
            <li class="nav-item" v-for="link in navLinks" :key="link">
              <router-link
                :to="getLinkPath(link)"
                class="nav-link text-light"
                @click="sidebarOpen = false"
              >
                {{ link }}
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="btn btn-light mt-3"
                @click="sidebarOpen = false"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'

/* route detection */
const route = useRoute()
const isServicesPage = computed(() => route.path === '/services')

const isScrolled = ref(false)
const sidebarOpen = ref(false)

const navLinks = ['Home', 'About Us', 'Our Products', 'Our Services', 'Our Partners']

const getLinkPath = (link) => {
  const paths = {
    Home: '/',
    'About Us': '/about',
    'Our Products': '/products',
    'Our Services': '/services',
    'Our Partners': '/partners',
  }
  return paths[link] || '/'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Sidebar Styles */
.sidebar {
  position: fixed;
  top: 0;
  left: -100%;
  width: 250px;
  height: 100%;
  background: rgba(177, 32, 47, 1);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 2rem 1rem;
  transition: left 0.3s ease;
  z-index: 1050;
  overflow-y: auto;
}

/* Open sidebar */
.sidebar.open {
  left: 0;
}

/* Hide sidebar on large screens */
@media (min-width: 992px) {
  .sidebar {
    display: none;
  }
}

/* Hide horizontal nav on small screens */
@media (max-width: 991px) {
  .horizontal-nav {
    display: none !important;
  }
}
</style>
