import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyView from '@/views/MyView.vue'
import MyProjectsView from '@/views/MyProjectsView.vue'
import FizzBuzzView from '@/views/FizzBuzzView.vue'
import MVCPortfolioView from '@/views/MVCPortfolioView.vue'
import TräningsdagbokView from '@/views/TräningsdagbokView.vue'
import TicTacToeView from '@/views/TicTacToeView.vue'
import FöretagssidaView from '@/views/FöretagssidaView.vue'
import ReceptsidaView from '@/views/ReceptsidaView.vue'
import BloggplattformView from '@/views/BloggplattformView.vue'
import TräningsdagbokSQLView from '@/views/TräningsdagbokSQLView.vue'
import BloggplattformAPIView from '@/views/BloggplattformAPIView.vue'
import CVPortfolioHbsView from '@/views/CVPortfolioHbsView.vue'
import ReceptlistaHbsView from '@/views/ReceptlistaHbsView.vue'
import RestaurangsidaVueJSView from '@/views/RestaurangsidaVueJSView.vue'
import BloggVueJSView from '@/views/BloggVueJSView.vue'
import TodoListaVueJSView from '@/views/TodoListaVueJSView.vue'
import WebbutikVueJSView from '@/views/WebbutikVueJSView.vue'
import CRUDLoansView from '@/views/CRUDLoansView.vue'
import CRUDBloggView from '@/views/CRUDBloggView.vue'
import FrontendBloggView from '@/views/FrontendBloggView.vue'
import TodoListaFrontendBackendView from '@/views/TodoListaFrontendBackendView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myView',
    name: 'myView',
    component: MyView
  },
  {
    path: '/myProjectsView',
    name: 'myProjectsView',
    component: MyProjectsView
  },
  {
    path: '/fizzBuzzView',
    name: 'fizzBuzzView',
    component: FizzBuzzView
  },
  {
    path: '/mvcPortfolioView',
    name: 'mvcPortfolioView',
    component: MVCPortfolioView
  },
  {
    path: '/träningsdagbokView',
    name: 'träningsdagbokView',
    component: TräningsdagbokView
  },
  {
    path: '/ticTacToeView',
    name: 'ticTacToeView',
    component: TicTacToeView
  },
  {
    path: '/företagssidaView',
    name: 'företagssidaView',
    component: FöretagssidaView
  },
  {
    path: '/receptsidaView',
    name: 'receptsidaView',
    component: ReceptsidaView
  },
  {
    path: '/bloggplattformView',
    name: 'bloggplattformView',
    component: BloggplattformView
  },
  {
    path: '/träningsdagbokSQLView',
    name: 'träningsdagbokSQLView',
    component: TräningsdagbokSQLView
  },
  {
    path: '/bloggplattformAPIView',
    name: 'bloggplattformAPIView',
    component: BloggplattformAPIView
  },
  {
    path: '/cVPortfolioHbsView',
    name: 'cVPortfolioHbsView',
    component: CVPortfolioHbsView
  },
  {
    path: '/receptlistaHbsView',
    name: 'receptlistaHbsView',
    component: ReceptlistaHbsView
  },
  {
    path: '/restaurangsidaVueJSView',
    name: 'restaurangsidaVueJSView',
    component: RestaurangsidaVueJSView
  },
  {
    path: '/bloggVueJSView',
    name: 'bloggVueJSView',
    component: BloggVueJSView
  },
  {
    path: '/todoListaVueJSView',
    name: 'todoListaVueJSView',
    component: TodoListaVueJSView
  },
  {
    path: '/webbutikVueJSView',
    name: 'webbutikVueJSView',
    component: WebbutikVueJSView
  },
  {
    path: '/cRUDLoansView',
    name: 'cRUDLoansView',
    component: CRUDLoansView
  },
  {
    path: '/cRUDBloggView',
    name: 'cRUDBloggView',
    component: CRUDBloggView
  },
  {
    path: '/frontendBloggView',
    name: 'frontendBloggView',
    component: FrontendBloggView
  },
  {
    path: '/todoListaFrontendBackendView',
    name: 'todoListaFrontendBackendView',
    component: TodoListaFrontendBackendView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
