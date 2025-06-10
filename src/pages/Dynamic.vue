<template>
    <div class="dynamic ">
        <Hero />
        <div class="container block-padding">
            <div class="row">
                <div class="col-lg-4">
                    <SideBar/>
                </div>
                <div class="col-lg-8">
                    <Contenet/>
                </div>
               
            </div>
        </div>
        <Projects />
    </div>
</template>

<script setup>
import Hero from '@/components/Dynamic/Hero.vue';
import Projects from '@/components/Dynamic/Projects.vue';
import SideBar from '@/components/Dynamic/SideBar.vue';
import Contenet from '@/components/Dynamic/Content.vue';
</script>

<style  scoped>

</style>