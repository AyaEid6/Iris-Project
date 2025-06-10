<template>
  <div class="choose who-serve default-padding" >
    <div class="container">
      <div class="d-flex flex-column gap-5 justify-content-center align-items-center">
        <div class="sub-heading w-100">
          <h3 class="text-center">Who We Serve</h3>
          <p class="text-center">Partnering with diverse organizations to achieve their global business objectives</p>
        </div>
        <div class="row g-3 w-100 justify-content-center">
          <div
            class="col-serve"
            v-for="(card, index) in cards"
            :key="index"
          >
            <div class="service-card who-serve d-flex flex-column justify-content-center align-items-center gap-4">
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
      title: 'Investors',
      description: 'Private equity, venture capital, family offices seeking opportunities in Asia',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M18.7651 18.395C19.0151 17.145 19.6401 16.27 20.6401 15.27C21.8901 14.145 22.5151 12.52 22.5151 10.895C22.5151 8.9059 21.725 6.99824 20.3184 5.59172C18.9119 4.1852 17.0043 3.39502 15.0151 3.39502C13.026 3.39502 11.1184 4.1852 9.71184 5.59172C8.30531 6.99824 7.51514 8.9059 7.51514 10.895C7.51514 12.145 7.76514 13.645 9.39014 15.27C10.2651 16.145 11.0151 17.145 11.2651 18.395" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.2651 23.395H18.7651" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5151 28.395H17.5151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
    },
    {
      title: 'Manufacturers',
      description: 'Companies looking to optimize production or expand into new markets',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
        <path d="M25.0151 17.1451C25.0151 23.3951 20.6401 26.5201 15.4401 28.3326C15.1678 28.4249 14.8721 28.4205 14.6026 28.3201C9.39014 26.5201 5.01514 23.3951 5.01514 17.1451V8.39509C5.01514 8.06357 5.14683 7.74563 5.38125 7.51121C5.61567 7.27679 5.93362 7.14509 6.26514 7.14509C8.76514 7.14509 11.8901 5.64509 14.0651 3.74509C14.33 3.51884 14.6668 3.39453 15.0151 3.39453C15.3634 3.39453 15.7003 3.51884 15.9651 3.74509C18.1526 5.65759 21.2651 7.14509 23.7651 7.14509C24.0967 7.14509 24.4146 7.27679 24.649 7.51121C24.8834 7.74563 25.0151 8.06357 25.0151 8.39509V17.1451Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    {
      title: 'Startups',
      description: 'nnovative businesses seeking funding, manufacturing partners or market entry',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M13.7651 22.145L16.2651 24.645C16.5114 24.8912 16.8037 25.0866 17.1254 25.2198C17.4471 25.3531 17.7919 25.4217 18.1401 25.4217C18.4884 25.4217 18.8332 25.3531 19.1549 25.2198C19.4766 25.0866 19.7689 24.8912 20.0151 24.645C20.2614 24.3988 20.4567 24.1065 20.5899 23.7848C20.7232 23.463 20.7918 23.1182 20.7918 22.77C20.7918 22.4218 20.7232 22.077 20.5899 21.7553C20.4567 21.4336 20.2614 21.1412 20.0151 20.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5149 18.3949L20.6399 21.5199C21.1372 22.0172 21.8117 22.2966 22.5149 22.2966C23.2182 22.2966 23.8927 22.0172 24.3899 21.5199C24.8872 21.0226 25.1666 20.3482 25.1666 19.6449C25.1666 18.9417 24.8872 18.2672 24.3899 17.7699L19.5399 12.9199C18.8368 12.2177 17.8837 11.8232 16.8899 11.8232C15.8962 11.8232 14.9431 12.2177 14.2399 12.9199L13.1399 14.0199C12.6427 14.5172 11.9682 14.7966 11.2649 14.7966C10.5617 14.7966 9.88721 14.5172 9.38993 14.0199C8.89265 13.5226 8.61328 12.8482 8.61328 12.1449C8.61328 11.4417 8.89265 10.7672 9.38993 10.2699L12.9024 6.75742C14.0427 5.6201 15.5298 4.89561 17.1282 4.69863C18.7267 4.50166 20.3451 4.84346 21.7274 5.66992L22.3149 6.01992C22.8472 6.34115 23.48 6.45256 24.0899 6.33242L26.2649 5.89492" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.2651 4.64502L27.5151 18.395H25.0151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.76514 4.64502L2.51514 18.395L10.6401 26.52C11.1374 27.0173 11.8119 27.2967 12.5151 27.2967C13.2184 27.2967 13.8929 27.0173 14.3901 26.52C14.8874 26.0227 15.1668 25.3483 15.1668 24.645C15.1668 23.9418 14.8874 23.2673 14.3901 22.77" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.76514 5.89502H13.7651" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
    },
    {
      title:'Retailers/Distributors',
      description:'Businesses seeking quality products and reliable supply chains',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
        <path d="M13.7651 22.145L16.2651 24.645C16.5114 24.8912 16.8037 25.0866 17.1254 25.2198C17.4471 25.3531 17.7919 25.4217 18.1401 25.4217C18.4884 25.4217 18.8332 25.3531 19.1549 25.2198C19.4766 25.0866 19.7689 24.8912 20.0151 24.645C20.2614 24.3988 20.4567 24.1065 20.5899 23.7848C20.7232 23.463 20.7918 23.1182 20.7918 22.77C20.7918 22.4218 20.7232 22.077 20.5899 21.7553C20.4567 21.4336 20.2614 21.1412 20.0151 20.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5149 18.3949L20.6399 21.5199C21.1372 22.0172 21.8117 22.2966 22.5149 22.2966C23.2182 22.2966 23.8927 22.0172 24.3899 21.5199C24.8872 21.0226 25.1666 20.3482 25.1666 19.6449C25.1666 18.9417 24.8872 18.2672 24.3899 17.7699L19.5399 12.9199C18.8368 12.2177 17.8837 11.8232 16.8899 11.8232C15.8962 11.8232 14.9431 12.2177 14.2399 12.9199L13.1399 14.0199C12.6427 14.5172 11.9682 14.7966 11.2649 14.7966C10.5617 14.7966 9.88721 14.5172 9.38993 14.0199C8.89265 13.5226 8.61328 12.8482 8.61328 12.1449C8.61328 11.4417 8.89265 10.7672 9.38993 10.2699L12.9024 6.75742C14.0427 5.6201 15.5298 4.89561 17.1282 4.69863C18.7267 4.50166 20.3451 4.84346 21.7274 5.66992L22.3149 6.01992C22.8472 6.34115 23.48 6.45256 24.0899 6.33242L26.2649 5.89492" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.2651 4.64502L27.5151 18.395H25.0151" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.76514 4.64502L2.51514 18.395L10.6401 26.52C11.1374 27.0173 11.8119 27.2967 12.5151 27.2967C13.2184 27.2967 13.8929 27.0173 14.3901 26.52C14.8874 26.0227 15.1668 25.3483 15.1668 24.645C15.1668 23.9418 14.8874 23.2673 14.3901 22.77" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.76514 5.89502H13.7651" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    {
        title:'NGOs/Government',
        description: 'Organizations implementing infrastructure and development projects',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M13.7653 25.895C11.5704 25.9017 9.45311 25.0831 7.83344 23.6018C6.21377 22.1204 5.21 20.0845 5.02121 17.8977C4.83242 15.7109 5.47241 13.533 6.81423 11.7959C8.15605 10.0589 10.1017 8.88964 12.2653 8.52002C19.3903 7.14502 21.2653 6.49502 23.7653 3.39502C25.0153 5.89502 26.2653 8.62002 26.2653 13.395C26.2653 20.27 20.2903 25.895 13.7653 25.895Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.51514 27.145C2.51514 23.395 4.82764 20.445 8.86514 19.645C11.8901 19.045 15.0151 17.145 16.2651 15.895" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
    }
  ]
</script>

<style scoped>

</style>