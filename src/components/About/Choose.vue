<template>
  <div class="choose default-padding" style="background: #F9FAFB;">
    <div class="container">
      <div class="d-flex flex-column gap-5 justify-content-center align-items-center">
        <div class="sub-heading w-100">
          <h3 class="text-center">Why Choose IRISUNITED Group Holding?</h3>
          <p class="text-center">With decades of experience and a commitment to excellence, we provide unparalleled service.</p>
        </div>
        <div class="row g-4 w-100 justify-content-center">
          <div 
            v-for="(item, index) in chooseItems" 
            :key="index" 
            class="col-lg-5 col-md-6 col-sm-12"
          >
            <div class="choose-card d-flex align-items-start gap-3">
              <div class="num">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="content p-0">
                <h4>{{ item.title }}</h4>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chooseItems = [
  {
    title: 'Experience & Expertise',
    description: '60+ years of combined know-how across multiple sectors.',
  },
  {
    title: 'Commitment to Quality',
    description: 'Rigorous standards in every division, from garments to data analytics.',
  },
  {
    title: 'Global Reach',
    description: 'Offices and partners in established and emerging markets worldwide.',
  },
  {
    title: 'Professionalism & Integrity',
    description: 'Long-term relationships built on trust and ethical conduct.',
  },
]
</script>
