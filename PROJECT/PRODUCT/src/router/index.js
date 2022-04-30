import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/Main/Main.vue';
import Categories from '../views/Categories/Categories.vue';
import Cart from '../views/Cart/Cart.vue';
import Contact from '../views/Contact/Contact.vue';
import Description from '../views/Description/Description.vue';

const routes = [{
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
<<<<<<< HEAD:PROJECT/PRODUCT/src/router/index.js
        path: '/catalog/:id',
        name: 'Description',
        component: Description
    },
    {
        path: '/categories/phone',
        name: 'Phones',
        component: {}
=======
        path: '/categories/phone',
        name: 'Phones',
        component: Categories
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:Project/PRODUCT/src/router/index.js
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/checkOut',
        name: 'Сheck out',
        component: {}
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/accessories',
        name: 'Accessories',
        component: {}
    },
    {
        path: '/offers',
        name: 'Offers',
        component: {}
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;