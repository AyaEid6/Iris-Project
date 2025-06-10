<template>
  <div class="about default-padding">
      <div class="container">
        <div class="row g-5">
        <div class="col-lg-6 col-md-6 col-sm-12 g-3">
          <div>
          <div class="sub-heading mb-5">
            <h3>About IrisUnited</h3>
            <p>Strategic Partner for the Chinese market and beyond</p>
          </div>
          <p class="mb-4">Headquartered in Shanghai with a global footprint across Asia, Europe, and MENA regions, IrisUnited Group empowers businesses through strategic investment and sustainable innovation. With deep local expertise and international perspective, 
            we bridge Eastern opportunities with Western capital and know-how.</p>
          <div class="d-flex flex-column gap-3">
              <div class="btns d-flex gap-3">
                <button class="main-btn">Our Investment Approach</button>
                <button class="sec-btn ">Partner With Us</button>
              </div>
              <router-link to="/">
                <span class="read me-1">Read Full Story</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_26_311" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_26_311)">
                    <path d="M11.6667 15L10.5 13.7917L13.4584 10.8333H3.33337V9.16667H13.4584L10.5 6.20833L11.6667 5L16.6667 10L11.6667 15Z" fill="#1C1B1F"/>
                  </g>
                </svg>
              </router-link>
          </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="img position-relative w-100" style="background: url('/images/about.png') no-repeat;">
              <div class="text-box position-absolute d-flex flex-column justify-content-center align-items-center">
                <span>60+ Years</span>
                <span>in China Market</span>
              </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'AppAboutSection'
}
</script>

<style>

</style>