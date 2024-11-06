import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SokratesView from '@/views/SokratesView.vue'
import MenyView from '@/views/MenyView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/sokrates',
    name: 'sokrates',
    component: SokratesView
  },
  {
    path: '/Meny',
    name: 'Meny',
    component: MenyView
  },
  {
    path: '/ContactUs',
    name: '/ContactUs',
    component: ContactUsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
