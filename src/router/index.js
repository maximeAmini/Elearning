import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Auth from '../views/Users/Auth.vue'
import Register from '../views/Users/Register.vue'
import Formations from '../views/Formations/Formations.vue'
import AddF from '../views/Formations/AddF.vue'
import OneF from '../views/Formations/OneF.vue'
import Episode from '../views/Episodes/Episode.vue'
import E500 from '../views/Error/500.vue'
import E404 from '../views/Error/404.vue'

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
  {
   path: '/error/500',
   name: '500',
   component: E500
 },
 {
   path: '/error/404',
   name: '404',
   component: E404
 },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
