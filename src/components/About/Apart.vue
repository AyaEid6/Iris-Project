<!-- components/ApartSection.vue -->
<template>
  <div class="apart default-padding">
    <div class="container">
      <div class="d-flex flex-column gap-5 justify-content-center align-items-center mb-4">
        <div class="sub-heading">
          <h3 class="text-center">{{ heading }}</h3>
          <p class="text-center">{{ description }}</p>
        </div>
      </div>
      <div class="row g-4 w-100 justify-content-center">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <div class="service-card d-flex flex-column justify-content-center align-items-center gap-4">
            <div class="icon" v-html="card.icon"></div>
            <div class="card-content">
              <h4>{{ card.title }}</h4>
              <p class="mb-0">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  heading: String,
  description: String,
  cards: Array 
});
</script>
