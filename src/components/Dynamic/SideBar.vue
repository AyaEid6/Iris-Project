<template>
  <div class="sidebar">
    <div class="list mb-4">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: activeIndex === index }"
          class="d-flex gap-1 mb-3"
          @click="scrollToSection(index)">
          <span class="icon">
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </span>
          <span>{{ shortenText(item) }}</span>
        </li>
      </ul>
    </div>
    <div class="download mb-4">
          <h5 class="mb-0">Company Profile</h5>
          <p class="mb-0">You can download the company profile below for more details.</p>
          <button>Download PDF</button>
    </div>
    <div class="gettouch-box">
          <img src="/images/Icon_CS.png" alt="">
          <span class="text">Let us Know</span>
          <div class="contacts d-flex justify-content-center flex-column gap-1">
            <span >Info@irisunited.com </span>
            <span>008613916666904</span>
          </div>
          <button>Get in Touch</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: Array
})

const activeIndex = ref(0)

function scrollToSection(index) {
  const target = document.querySelectorAll('.sub-section')[index]
  if (target) {
    window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' })
  }
}

function updateActiveOnScroll() {
  const sections = document.querySelectorAll('.sub-section')
  const scrollY = window.scrollY
  sections.forEach((sec, idx) => {
    if (sec.offsetTop - 120 <= scrollY) {
      activeIndex.value = idx
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveOnScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveOnScroll)
})

const maxLength = 33;

function shortenText(item) {
  if (!item) return null
  return item.length > maxLength ? item.slice(0, maxLength) + '...' : item;
}
</script>

<style scoped>
li.active {
border-radius: 4px;
border: 0px solid #B1202F;
background: #B1202F;
color: #FFF;
}
</style>
