import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import Error404 from '@/views/Error404'
import AboutView from '@/views/about/AboutView'
import PublicacoesTeologiaView from '@/views/teologia/PublicacoesTeologiaView'
import PublicacoesTecnologiaView from '@/views/tecnologia/PublicacoesTecnologiaView'
import PublicacoesJogosView from '@/views/jogos/PublicacoesJogosView'


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
    path: '/teologia',
    name: 'teologia',
    component: PublicacoesTeologiaView
  },
  {
    path: '/tecnologia',
    name: 'tecnologia',
    component: PublicacoesTecnologiaView
  },
  {
    path: '/teologia',
    name: 'teologia',
    component: PublicacoesTeologiaView
  },
  {
    path: '/jogos',
    name: 'jogos',
    component: PublicacoesJogosView
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
