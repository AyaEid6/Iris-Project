<template>
  <div class="content  d-flex flex-column gap-4 pb-0">
    <div class="main-section">
      <h3>{{ title }}</h3>
      <p v-for="(intro, i) in intro" :key="i">{{ intro }}</p>
    </div>

    <div v-if="sections">
        <div
      v-for="(section, index) in sections"
     
      :key="index"
      class="sub-section"
    >
      <h4 v-if="section.title">{{ section.title }}</h4>
      <div v-if="section.paragraphs">
        <p v-for="(para, i) in section.paragraphs" :key="i">{{ para }}</p>
      </div>

     <div v-if="section.following">
       <ul  class="following">
          <li v-for="(item, i) in section.following" :key="i" class="mb-2">
              <span class="title">{{ item.title }}:</span>
              <span>{{ item.description }}</span>
          </li>
        </ul>
        <p class="end" v-if="section.end">{{ section.end }}</p>
     </div>

      

      <div v-if="section.other" class="other">
        <h5>{{ section.other.title }}</h5>
        <ul>
          <li v-for="(item, i) in section.other.list" :key="i" class="mb-2 d-flex align-items-start" >
            <img src="/images/ArrowRight.svg" alt=" " class="me-2">
            <div>
              <span v-if="item.title" class="title">{{ item.title }}</span>
              <span>{{ item.description }}</span>
            </div>
          </li>
        </ul>
         <p class="end" v-if="section.end">{{ section.end }}</p>
      </div>

      <p v-if="section.footer" class="text-footer">{{ section.footer }}</p>
    </div>
    </div>
    <Gallery />
  </div>
</template>

<script setup>
import Gallery from './Gallery.vue';
const props = defineProps({
  title: String,
  intro: Array,
  sections: Array
})
</script>
