import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/page/Home.vue'
import Project from '../components/page/Project.vue'
import ContactMe from '../components/page/ContactMe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/contact-me',
    name: 'Contact Me',
    component: ContactMe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
