import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Pages/home/Home';
import City from '@/Pages/city/City';
import Detail from '@/Pages/detail/Detail';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/Pages/home/Home')
        },
        {
            path: '/city',
            name: 'City',
            component: () => import('@/Pages/city/City')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/Pages/detail/Detail')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});
