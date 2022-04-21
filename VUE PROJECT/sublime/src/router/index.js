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
    path: '/Categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/Category',
    name: 'Category',
    component: MainPage
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: MainPage
  },
  {
    path: '/Check out',
    name: 'СheckOut',
    component: MainPage
  },
  {
    path: '/Product',
    name: 'Product',
    component: MainPage
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: MainPage
  },
  {
    path: '/Accessories',
    name: 'Accessories',
    component: MainPage
  },
  {
    path: '/Offers',
    name: 'Offers',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
