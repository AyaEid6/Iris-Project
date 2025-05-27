import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap'  
import './assets/Style.css'
import './assets/responsive.css'


const Home = () => import('./pages/Home.vue');
const About = () => import('./pages/About.vue');
const Services = () => import('./pages/Services.vue');
const GetTouch = () => import('./pages/GetTouch.vue');
const ErrorPage = () => import('./pages/NotFound.vue');

const routes =[
    { path: '/', component: Home },
    { path: '/Home', component: Home },
    { path: '/About', component: About },
    { path: '/Services', component: Services },
    { path: '/GetTouch', component: GetTouch },
    { path: '/:NotFound(.*)*', component: ErrorPage , meta: { hideNavbar: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

