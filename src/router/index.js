import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import About from '../views/About';
import Loged from '../views/Loged';


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
    path: '/loged',
    name: 'Loged',
    component: Loged
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
