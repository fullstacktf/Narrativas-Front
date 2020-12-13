import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import About from '../views/About';
import Characters from '../views/Characters';
import CharacterCreation from '../views/CharacterCreation';
import { getCookie } from '@/utils/utils'

Vue.use(VueRouter)

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
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/character-creation',
    name: 'Character Creation',
    component: CharacterCreation,
    beforeEnter: (to, from, next) => {
      if (getCookie("token")) {
        next();
      }
      next('/');
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
