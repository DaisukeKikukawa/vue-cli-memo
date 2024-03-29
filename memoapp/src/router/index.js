import Vue from 'vue'
import VueRouter from 'vue-router'
import New from '../views/New.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/'
    },
    {
        path: '/new',
        name: 'New',
        component: New
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
