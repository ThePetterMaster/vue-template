import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import Error404 from '@/views/Error404'
import AboutView from '@/views/about/AboutView'
import Publicacao from '@/views/publicacao/Publicacao'
import ResumoPublicacao from '@/views/resumoPublicacoes/ResumoPublicacoesView'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/publicacao/:categoria/:id',
    name: 'publicacao',
    component: Publicacao
  },
  {
    path: '/resumos/:categoria',
    name: 'resumos',
    component: ResumoPublicacao
  },
  {                                                                                                                                                                                   
    path: '/:pathMatch(.*)*',                                                                                                                                                         
    name: 'error404',                                                                                                                                                                                      
    component: Error404                                                                                                                                                               
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
