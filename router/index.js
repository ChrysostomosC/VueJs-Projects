import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '@/views/BooksView.vue'
import SingleBookView from '@/views/SingleBookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  },
  {
    path: '/books/:id',
    name: 'singleBook',
    component: SingleBookView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
