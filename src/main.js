import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap'  
import './assets/Style.css'
import './assets/responsive.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import only the icons you need
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleRight)

const Home = () => import('./pages/Home.vue');
const About = () => import('./pages/About.vue');
const Services = () => import('./pages/Services.vue');
const GetTouch = () => import('./pages/GetTouch.vue');
const ErrorPage = () => import('./pages/NotFound.vue');
const index=()=>import('./pages/[dynamic]/index.vue');

const routes =[
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/getTouch', component: GetTouch },
    {path:'/:dynamic',component:index},
    { path: '/:NotFound(.*)*', component: ErrorPage , meta: { hideNavbar: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

