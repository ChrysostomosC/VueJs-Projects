import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogginlaggView from '@/views/BlogginlaggView.vue'
import SingleBloggView from '@/views/SingleBloggView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bloggs',
    name: 'bloggs',
    component: BlogginlaggView
  },
  {
    path: '/bloggs/:id',
    name: 'singleBlogg',
    component: SingleBloggView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
