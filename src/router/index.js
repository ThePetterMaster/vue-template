import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import Error404 from '@/views/Error404'
import AboutView from '@/views/about/AboutView'
import PublicacoesTeologiaView from '@/views/teologia/PublicacoesTeologiaView'

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
