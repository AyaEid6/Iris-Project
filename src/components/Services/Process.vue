
<template>
  <div class="process default-padding px-0" style="background-color: #F9FAFB;">
    <div class="container">
      <div class="d-flex flex-column gap-5 justify-content-center align-items-center">
        <div class="sub-heading">
          <h3 class="text-center">Our Engagement Process</h3>
          <p class="text-center">A structured approach that ensures success throughout your project lifecycle</p>
        </div>
        <div class="row gy-4 gx-0 flex justify-content-between w-100">
          <div class="row gy-4 gx-0 process-line-wrapper position-relative d-flex justify-content-between w-100">
            <div
              v-for="(step, index) in processSteps"
              :key="index"
              class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center"
            >
              <div class="process-card d-flex flex-column justify-content-center align-items-center gap-4 position-relative">
                <div class="icon">
                  <img src="/images/process.svg" alt="">
                </div>
                <div class="card-content text-center">
                  <h4>{{ step.title }}</h4>
                  <p class="mb-0">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>


let processSteps=[
{
          title: 'Consult',
          description: 'We listen to your needs and objectives to understand your business fully.'
        },
        {
          title: 'Plan',
          description: 'Our experts develop a customized strategy tailored to your goals.'
        },
        {
          title: 'Execute',
          description: 'We implement solutions with precision and attention to detail.'
        },
        {
          title: 'Monitor',
          description: 'Track progress with comprehensive analytics and reporting.'
        },
        {
          title: 'Grow',
          description: 'Scale your success with ongoing optimization and support.'
        }

]
</script>

<style>


</style>