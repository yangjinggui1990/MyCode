

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import store from '../store'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue'),
        meta: {
            isVuex: true,
            vuexName: "Home"
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '../views/about.vue'),
        meta: {
            isVuex: true,
            vuexName: "About"
        },
    },
    // { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const { meta } = to || {};
    if (meta.isVuex) {
        if (!store.hasModule(`${meta.vuexName}`)) {
            import(/*@vite ignore*/ `../store/modules/${meta.vuexName}.ts`).then(res => {
                store.registerModule(`${meta.vuexName}`, res.default);
            })
        };

    }
    next()
})

export default router
