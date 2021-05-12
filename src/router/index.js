import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Auth from '../views/Users/Auth.vue'
import Register from '../views/Users/Register.vue'
import Formations from '../views/Formations/Formations.vue'
import AddF from '../views/Formations/AddF.vue'
import OneF from '../views/Formations/OneF.vue'
import Episode from '../views/Episodes/Episode.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/formations',
    name: 'Formations',
    component: Formations
  },
  {
    path: '/formations/addF',
    name: 'AddF',
    component: AddF
  },
  {
    path: '/formations/:idF',
    name: 'OneF',
    component: OneF
  },
  {
    path: '/episode/:idE',
    name: 'Episode',
    component: Episode
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
