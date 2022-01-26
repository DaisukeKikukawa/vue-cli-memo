import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/'
    },
    {
        path: '/new',
        name: 'New',
        component: () =>
            import ('../views/New.vue')
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: () =>
            import ('../views/Edit.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
