import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Staff from '../views/Staff.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: Login,
    },
    {
        path: '/staff',
        name: 'staff',
        component: Staff,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router