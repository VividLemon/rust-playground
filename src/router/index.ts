import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Genetics from '../views/Genetics.vue'
import Blank from '../views/Blank.vue'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Genetics
  },
  {
    path: '/blank',
    name: 'blank',
    component: Blank
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    window.scrollTo(0, 0)
  }
})

export default router
