<template>
  <div class="choose default-padding" style="background: #F9FAFB;">
    <div class="container">
      <div class="d-flex flex-column gap-5 justify-content-center align-items-center">
        <div class="sub-heading w-100">
          <h3 class="text-center">Why Choose IrisUnited</h3>
          <p class="text-center">Our core values drive every investment decision</p>
        </div>
        <div class="row g-4 w-100">
          <div
            class="col-lg-3 col-md-6 col-sm-12"
            v-for="(card, index) in cards"
            :key="index"
          >
            <div class="service-card d-flex flex-column justify-content-center align-items-center gap-4">
              <div class="icon" v-html="card.icon"></div>
              <div class="card-content">
                <h4>{{ card.title }}</h4>
                <p class="mb-0">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cards = [
    {
      title: 'Innovation',
      description: 'We identify bold ideas early and help them flourish',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none" viewBox="0 0 31 31"><path d="M19.4984 18.395C19.7484 17.145 20.3734 16.27 21.3734 15.27C22.6234 14.145 23.2484 12.52 23.2484 10.895C23.2484 8.9059 22.4582 6.99824 21.0517 5.59172C19.6452 4.1852 17.7375 3.39502 15.7484 3.39502C13.7593 3.39502 11.8516 4.1852 10.4451 5.59172C9.03859 6.99824 8.24841 8.9059 8.24841 10.895C8.24841 12.145 8.49841 13.645 10.1234 15.27C10.9984 16.145 11.7484 17.145 11.9984 18.395" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9984 23.395H19.4984" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.2484 28.395H18.2484" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      title: 'Reliability',
      description: 'Decades of trusted partnership across global markets.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none" viewBox="0 0 31 31"><path d="M25.8972 17.1451C25.8972 23.3951 21.5222 26.5201 16.3222 28.3326C16.0499 28.4249 15.7541 28.4205 15.4847 28.3201C10.2722 26.5201 5.89722 23.3951 5.89722 17.1451V8.39509C5.89722 8.06357 6.02891 7.74563 6.26333 7.51121C6.49775 7.27679 6.8157 7.14509 7.14722 7.14509C9.64722 7.14509 12.7722 5.64509 14.9472 3.74509C15.212 3.51884 15.5489 3.39453 15.8972 3.39453C16.2455 3.39453 16.5824 3.51884 16.8472 3.74509C19.0347 5.65759 22.1472 7.14509 24.6472 7.14509C24.9787 7.14509 25.2967 7.27679 25.5311 7.51121C25.7655 7.74563 25.8972 8.06357 25.8972 8.39509V17.1451Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      title: 'Integrity',
      description: 'Transparent deals, ethical standards, long-term value.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path d="M13.7402 22.145L16.2402 24.645C16.4864 24.8912 16.7787 25.0866 17.1004 25.2198C17.4221 25.3531 17.767 25.4217 18.1152 25.4217C18.4634 25.4217 18.8082 25.3531 19.1299 25.2198C19.4516 25.0866 19.7439 24.8912 19.9902 24.645C20.2364 24.3988 20.4317 24.1065 20.565 23.7848C20.6982 23.463 20.7668 23.1182 20.7668 22.77C20.7668 22.4218 20.6982 22.077 20.565 21.7553C20.4317 21.4336 20.2364 21.1412 19.9902 20.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.4902 18.3949L20.6152 21.5199C21.1124 22.0172 21.7869 22.2966 22.4902 22.2966C23.1934 22.2966 23.8679 22.0172 24.3652 21.5199C24.8624 21.0226 25.1418 20.3482 25.1418 19.6449C25.1418 18.9417 24.8624 18.2672 24.3652 17.7699L19.5152 12.9199C18.812 12.2177 17.8589 11.8232 16.8652 11.8232C15.8714 11.8232 14.9183 12.2177 14.2152 12.9199L13.1152 14.0199C12.6179 14.5172 11.9434 14.7966 11.2402 14.7966C10.5369 14.7966 9.86243 14.5172 9.36515 14.0199C8.86787 13.5226 8.5885 12.8482 8.5885 12.1449C8.5885 11.4417 8.86787 10.7672 9.36515 10.2699L12.8777 6.75742C14.018 5.6201 15.505 4.89561 17.1035 4.69863C18.7019 4.50166 20.3204 4.84346 21.7027 5.66992L22.2902 6.01992C22.8224 6.34115 23.4552 6.45256 24.0652 6.33242L26.2402 5.89492" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.2402 4.64502L27.4902 18.395H24.9902" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.74017 4.64502L2.49017 18.395L10.6152 26.52C11.1125 27.0173 11.7869 27.2967 12.4902 27.2967C13.1934 27.2967 13.8679 27.0173 14.3652 26.52C14.8625 26.0227 15.1418 25.3483 15.1418 24.645C15.1418 23.9418 14.8625 23.2673 14.3652 22.77" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.74017 5.89502H13.7402" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
    },
    {
      title:'Sustainability',
      description:'Investments that respect people and planet.',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M13.9316 25.895C11.7367 25.9017 9.61946 25.0831 7.99979 23.6018C6.38012 22.1204 5.37635 20.0845 5.18756 17.8977C4.99878 15.7109 5.63876 13.533 6.98058 11.7959C8.32241 10.0589 10.2681 8.88964 12.4316 8.52002C19.5566 7.14502 21.4316 6.49502 23.9316 3.39502C25.1816 5.89502 26.4316 8.62002 26.4316 13.395C26.4316 20.27 20.4566 25.895 13.9316 25.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.68164 27.145C2.68164 23.395 4.99414 20.445 9.03164 19.645C12.0566 19.045 15.1816 17.145 16.4316 15.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
    }
  ]
</script>
