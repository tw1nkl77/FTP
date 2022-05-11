import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Staff from '../views/Staff.vue';
import Admin from '../views/Admin.vue';

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
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router