import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../components/ToDoList.vue')
  },
  {
    path: '/weatherapp',
    name: 'weatherapp',
    component: () => import('../components/WeatherApp.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes,
})

export default router
