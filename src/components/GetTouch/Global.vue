<template>
  <div class="global default-padding pt-0">
    <div class="container">
      <div class="head d-flex flex-column justify-content-center align-items-center gap-4">
        <h3 class="heading">Global Presence</h3>
        <p class="text-center w-75">IRISUNITED Group Holding's operations span across key 
            global markets,allowing us to meet the diverse needs of our clients and customers
             worldwide.</p>
      </div>

      <div class="tab d-flex flex-column justify-content-center align-items-center gap-5">
        <div class="network w-fit d-flex gap-2 align-items-center">
          <div class="global-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 25.6666C20.4434 25.6666 25.6667 20.4432 25.6667 13.9999C25.6667 7.5566 20.4434 2.33325 14 2.33325C7.55672 2.33325 2.33337 7.5566 2.33337 13.9999C2.33337 20.4432 7.55672 25.6666 14 25.6666Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 2.33325C11.0043 5.47876 9.33337 9.65612 9.33337 13.9999C9.33337 18.3437 11.0043 22.5211 14 25.6666C16.9958 22.5211 18.6667 18.3437 18.6667 13.9999C18.6667 9.65612 16.9958 5.47876 14 2.33325Z" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.33337 14H25.6667" stroke="#B1202F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <!-- Dynamic Tabs -->
          <ul class="nav nav-pills gap-2" id="pills-tab" role="tablist">
            <li
              v-for="(tab, index) in tabs"
              :key="tab.id"
              class="nav-item"
              role="presentation"
            >
              <button
                class="nav-link"
                :class="{ active: index === 0 }"
                :id="`${tab.id}-tab`"
                data-bs-toggle="pill"
                :data-bs-target="`#${tab.id}`"
                type="button"
                role="tab"
                :aria-controls="tab.id"
                :aria-selected="index === 0"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Dynamic Tab Content -->
        <div class="tab-content w-100" id="pills-tabContent">
          <div
            v-for="(tab, tabIndex) in tabs"
            :key="tab.id"
            class="tab-pane fade"
            :class="{ 'show active': tabIndex === 0 }"
            :id="tab.id"
            role="tabpanel"
            :aria-labelledby="`${tab.id}-tab`"
          >
            <div class="accordion w-100" :id="`accordion-${tab.id}`">
              <div
                v-for="(item, accIndex) in tab.accordion"
                :key="accIndex"
                class="accordion-item mb-3"
              >
                <h2
                  class="accordion-header d-flex align-items-center justify-content-center gap-3"
                  :id="`heading-${tab.id}-${accIndex}`"
                >
                  <button
                    class="accordion-button p-0 d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse-${tab.id}-${accIndex}`"
                    :aria-expanded="accIndex === 0"
                    :aria-controls="`collapse-${tab.id}-${accIndex}`"
                  >                   
                    <img :src="item.icon" alt="icon">
                    {{ item.title }}
                  </button>
                  <span class="tag">{{ item.tag }}</span>
                </h2>
                <div
                  :id="`collapse-${tab.id}-${accIndex}`"
                  class="accordion-collapse collapse"
                  :class="{ show: accIndex === 0 }"
                  :aria-labelledby="`heading-${tab.id}-${accIndex}`"
                  :data-bs-parent="`#accordion-${tab.id}`"
                >
                  <div class="accordion-body p-0 mt-2">
                    <p class="mb-0">{{ item.description }}</p>
                  </div>
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


const tabs = [
  {
    id: 'pills-global',
    label: 'Global Network',
    accordion: [
      {
        icon:'/images/bullet-red.svg',
        title: 'Shanghai, China',
        tag: 'Headquarters',
        description:
          'IRISUNITED INVESTING GROUP LTD is the main holding group managing a network of domestic and international companies. It oversees operations, ensuring alignment with strategic goals and efficient resource utilization across subsidiaries.',
      },
      {
        icon:'/images/bullet-red.svg',
        title: 'Shanghai, China',
        tag: 'Vehicle Export',
        description: 'The Shanghai Import and Export Company specializes in serving the Shanghai market, with a focus on the export of cars and vehicles to the global market. This branch ensures streamlined operations, compliance with international trade standards, and the delivery of high-quality vehicles, catering to the demands of both domestic and international clients.',
      },
      {
        icon:'/images/bullet-red.svg',
        title: 'Shanghai, China',
        tag: 'Trading Hub',
        description: 'Shanghai IRISUNITED is the hub for our global investment and trading activities, specializing in manufacturing, supply, and distribution across various commodities. , Shanghai IRISUNITED plays a vital role in the development and deployment of our various needs of our customers and connections.',
      },
      {
        icon:'/images/bullet-red.svg',
        title: 'Shanghai, China',
        tag: 'Retail & Food Trade',
        description: 'Shanghai Alriyad Company operates supermarkets, online stores, and the Milestone Center, which serves as a platform for distributing international and imported food products while fostering trade relations between China and the Arab world. The center emphasizes the exchange of goods and cultural insights, contributing to enhanced cooperation and mutual benefit between these regions.',
      },
      {
        icon:'/images/bullet-red.svg',
        title: 'Yiwu, China',
        tag: 'Commodities Ops',
        description:'Yiwu Irisunited Trading Company Ltd. specialized in sourcing the Yiwu market, with a focus on the comodities and differnet imported and exported products serving to and from the local market.'
      },
      {
        icon:'/images/bullet-red.svg',
        title: 'Shenzhen, China',
        tag: 'R&D Center',
        description:'The Shenzhen Company focuses on research and development of green solutions, utilizing advanced photocatalytic processes to address issues related to air surface purification and organic pollution. The branch develops systems and technologies aimed at improving health, energy efficiency, and environmental outcomes. These solutions are integrated into products designed to replicate natural processes and enhance purification capabilities.'
      },
      {
        icon:'/images/bullet-red.svg',
        title: 'Yiwu, China',
        tag: 'Food Sourcing',
        description:'The Import & Export Company specializes in the sourcing and trading of frozen foods and raw materials tailored to the needs of the Chinese market. Leveraging an extensive and reliable supplier network, it ensures the consistent delivery of high-quality goods that meet stringent standards. The branch also focuses on maintaining competitive pricing, optimizing supply chain efficiency, and fostering long-term partnerships to support diverse client requirements.'
      },
      {
        icon:'/images/bullet-red.svg',
        title: 'Shanghai, China',
        tag: 'Manufacturing',
        description:'Manufacturing facility specializes in producing high-quality cosmetics and household products for proprietary brands and global partners. Key offerings include premium skincare and haircare products, crafted with advanced techniques, and an array of household solutions such as air purifiers, furniture polish, surface cleaners, and drain openers. All products prioritize effectiveness, durability, and stringent quality standards.'
      },
      {
        icon:'/images/bullet-red.svg',
        title:'Shanghai, China',
        tag:'Pet Products',
        description:'A company specializing in pet products with a strong connection to the international market. To meet market demands effectively, it is essential to analyze consumer trends, product preferences, and regional requirements. The manufacturing entity should focus on producing high-quality, innovative pet products while maintaining flexibility to accommodate the branding and specifications of different associated brands (Leopard pet, Cuddly VE, .. ).'
      },
      {
        icon:'/images/bullet-red.svg',
        title:'Shanghai (Changning), China',
        tag:'Retail Branch',
        description:'Operates within the domestic market, specializing in managing multiple retail stores and online platforms dedicated to pet products. It emphasizes enhancing customer experience through targeted product offerings, efficient distribution, and responsive service across its various sales channels.'
      },
      {
        icon:'/images/bullet-blue.svg',
        title:'Singapore',
        tag:'Analysis Hub',
        description:'Specializes in analyzing industries and companies by examining operations and financial statements to forecast performance and assess investment values. The industry analysis focuses on specific sectors to understand their dynamics, forming the basis for company analysis.In addition to sourcing different Experts for material Manufacturing and products global reach.'
      },
      {
        icon:'/images/bullet-red.svg',
        title:'Hong Kong',
        tag:'Sourcing Office',
        description:'IRISUNITED GROUP IMPORT&EXPORT CO.,LIMITED specialized in sourcing the Global Brands, linked and partneered with IrisUnited Group, ensuring the right sourcing and high end products requried by the global renowned brands.'
      },
      {
        icon:'/images/bullet-red.svg',
        title:'Yiwu, China',
        tag:'Garment Factory',
        description:'The company including the factory presence is a platform manufacturer of garments for global brands, specializing in providing comprehensive production services. These include fabric sourcing, pattern development, garment design, and pre-production sampling to ensure alignment with client specifications. The company focuses on delivering garments that meet required quality standards and production parameters.'
      },
      {
        icon:'/images/bullet-red.svg',
        title:'Hong Kong',
        tag:'Trading Desk',
        description:'IRISUNITED INVESTING GROUP LTD is the main holding group managing a network of domestic and international companies. It oversees operations, ensuring alignment with strategic goals and efficient resource utilization across subsidiaries.'
      },
      {
        icon:'/images/bullet-red.svg',
        title:'Hong Kong',
        tag:'Partnership Desk',
        description:'Focuses on serving international customers by identifying trading opportunities, managing bids, and facilitating global partnerships. It provides tailored solutions, ensuring companies have the necessary facilities and goods to thrive in international markets.'
      },
      {
        icon:'/images/bullet-green.svg',
        title:'London, UK',
        tag:'European Office',
        description:'Our London office serves as the European headquarters, coordinating operations across the continent and facilitating trade relationships with European partners.'
      },
      {
        icon:'/images/bullet-red.svg',
        title:'Dubai, UAE',
        tag:'MENA Office',
        description:'The Dubai branch oversees operations throughout the Middle East and North Africa region, developing strategic partnerships and market opportunities.'
      },
      {
        icon:'/images/bullet-online.svg',
        title:'Online Platforms',
        tag:'E-commerce',
        description:'We maintain a strong presence across several online platforms to ensure our food products reach consumers directly. Our registered and authorized stores are available on: Taobao, Alibaba, Redbook, TikTok, WeChat mini app, and Pinduoduo.'
      }
    ],
  },
  {
    id: 'pills-asia',
    label: 'Asia',
    accordion: [
      {
        icon: '/images/bullet-red.svg',
        title: 'Tokyo, Japan',
        tag: 'Regional Office',
        description: 'Focused on tech investments and partnerships with startups across the Asian Pacific.',
      },
    ],
  },
  {
    id: 'pills-europe',
    label: 'Europe',
    accordion: [
      {
        icon: '/images/bullet-red.svg',
        title: 'Berlin, Germany',
        tag: 'R&D Hub',
        description: 'A center for product innovation and AI research in the European market.',
      },
    ],
  },
  {
    id: 'pills-east',
    label: 'Middle East',
    accordion: [
      {
        icon: '/images/bullet-red.svg',
        title: 'Dubai, UAE',
        tag: 'Operations',
        description: 'Provides access to MENA markets and coordinates cross-border trade.',
      },
    ],
  },
  {
    id: 'pills-virtual',
    label: 'Virtual',
    accordion: [
      {
        icon: '/images/bullet-red.svg',
        title: 'Remote Teams',
        tag: 'Digital',
        description: 'Distributed teams working remotely to support 24/7 global operations.',
      },
    ],
  },
];
</script>

<style scoped>


</style>
