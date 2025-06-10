<template>
  <div class="hero dynamic-page" style="background: url('/images/heroDynamic.png') lightgray -5px -130.562px / 100.536% 128.089% no-repeat;">
        <div class="overlay">
          <div class="container">
            <div class="content  p-0">
              <h1 >{{ header }}</h1>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  header: String
})

</script>

<style scoped>
.hero{
    height: 65vh;
}

.content{
    width: 55%;
    text-align: center;
 
}
</style>