import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/Main/Main.vue'
import Categories from '../views/Categories/Categories.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/:category',
    name: 'Category',
    component: Categories
  },
  {
    path: '/contact',
    name: 'Contact',
    component: MainPage
  },
  {
    path: '/checkOut',
    name: 'Сheck out',
    component: MainPage
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: MainPage,
    params: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: MainPage
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: MainPage
  },
  {
    path: '/offers',
    name: 'Offers',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
