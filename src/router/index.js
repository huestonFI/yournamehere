import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'
// import Consultation from '../views/Consultation.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
//   { path: '/about', name: 'About', component: About },
//   { path: '/contact', name: 'Contact', component: Contact },
//   { path: '/consultation', name: 'Consultation', component: Consultation },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
