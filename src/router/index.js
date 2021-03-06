import { createWebHashHistory, createRouter } from "vue-router";
import App from '@/views/App.vue'
import Todo from '@/views/Todo.vue'

const routes = [

    {
        path: '/',
        name: 'App',
        component: App

    },

    {
        path: '/Todo/',
        name: 'Todo',
        component: Todo

    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router