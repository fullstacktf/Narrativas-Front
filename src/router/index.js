import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import About from '../views/About';
import Characters from '../views/Characters';
import Stories from '../views/Stories';
import CharacterCreation from '../views/CharacterCreation';
import PageNotFound from '../views/PageNotFound';
import StoriesCreation from '../views/StoriesCreation';
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
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/character-creation/:id?',
    name: 'Character Creation',
    component: CharacterCreation,
    beforeEnter: (to, from, next) => {
      if (getCookie("token")) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: "*",
    name: "404",
    component: PageNotFound
  },
  {
    path: '/story-creation',
    name: 'StoriesCreation',
    component: StoriesCreation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
