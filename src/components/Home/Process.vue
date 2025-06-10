
<template>
  <div class="process default-padding px-0">
    <div class="container">
      <div class="d-flex flex-column gap-5 justify-content-center align-items-center">
        <div class="sub-heading">
          <h3 class="text-center">Our Engagement Process</h3>
          <p class="text-center">A structured approach that ensures success throughout your project lifecycle</p>
        </div>
        <div class="row gy-4 gx-0 flex justify-content-between w-100">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="col-lg-2 col-md-6 col-sm-12"
          >
            <div class="process-card d-flex flex-column justify-content-center align-items-center gap-4">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M1.01501 19.895C1.01501 20.4255 1.22573 20.9342 1.6008 21.3092C1.97587 21.6843 2.48458 21.895 3.01501 21.895H19.015C19.5454 21.895 20.0542 21.6843 20.4292 21.3092C20.8043 20.9342 21.015 20.4255 21.015 19.895V7.89502L14.015 12.895V7.89502L7.01501 12.895V3.89502C7.01501 3.36459 6.8043 2.85588 6.42923 2.48081C6.05416 2.10573 5.54545 1.89502 5.01501 1.89502H3.01501C2.48458 1.89502 1.97587 2.10573 1.6008 2.48081C1.22573 2.85588 1.01501 3.36459 1.01501 3.89502V19.895Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div class="card-content">
                <h4>{{ step.title }}</h4>
                <p class="mb-0">{{ step.description }}</p>
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