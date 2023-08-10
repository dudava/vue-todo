import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: () => import('./views/Todos.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})