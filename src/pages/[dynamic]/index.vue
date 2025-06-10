<template>
  <div class="dynamic" v-if="pageData">
    <Hero :header="pageData.title"  />

    <div class="container block-padding">
      <div class="row g-4">
        <div class="col-lg-4">
          <SideBar
            :items="[pageData.title, ...(pageData.sections?.map(s => (s.title?s.title:(s.other.title || s.following.title))) || [])]"
          />

        </div>
        <div class="col-lg-8">
          <Content
            :title="pageData.title"
            :intro="pageData.content"
            :sections="pageData.sections"
          />
        </div>
      </div>
    </div>

    <Projects />
  </div>
</template>


<script setup>
import { onMounted , ref } from 'vue'
import { useRoute } from 'vue-router'
import Content from '@/components/Dynamic/Content.vue'
import SideBar from '@/components/Dynamic/SideBar.vue'
import Hero from '@/components/Dynamic/Hero.vue'
import Projects from '@/components/Dynamic/Projects.vue'

const route = useRoute()
const section = route.params.dynamic
console.log(section)


const pageData = ref({
  title: '',
  content: [],
  sections: []
})

async function loadPageData() {
  try {
    const data = (await import(`@/Data/${section}.js`)).default
    pageData.value = data
    console.log("data",data)
    console.log("pageData",pageData)
    console.log("pageData.value",pageData.value)
    console.log("pageData.value.sections",pageData.value.sections)
    console.log("pageData.title",pageData.value.title)
  } catch (e) {
    console.error('Error loading content for:', section, e)
    pageData.value = { title: 'Not Found', content: '', sections: [] }
  }
}

onMounted(() => {
  loadPageData()
})
</script>
