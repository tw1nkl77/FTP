import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: {}
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
