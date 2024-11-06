import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListView from '../views/ProductListView.vue'
import PurchaseView from '../views/PurchaseView.vue'


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
    path: '/productList',
    name: 'productList',
    component: ProductListView
  },
  {
    path: '/purchase/:id',
    name: 'purchase',
    component: PurchaseView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
