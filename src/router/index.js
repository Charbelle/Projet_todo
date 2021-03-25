import { createWebHashHistory, createRouter } from "vue-router";

import Todo from '@/components/Todo.vue'
import  Login from '@/components/Login.vue'
import Register from '@/components/Register'

import { isAuthenticated } from "../store/account/getters";


const routes = [

   

    {
        path: '/todo/:id',
        name: 'Todo',
        component: Todo,
        meta: { requiresAuth: true }
        }, 
    {
        path: '/login/',
        name: 'Login',
        component: Login

    },
    {
        path: '/register/',
        name: 'Register',
        component: Register

    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


    router.beforeEach((to,from,next) => {
        if(to.matched.some(route => route.meta.requiresAuth)){
          if(!isAuthenticated) return next('/login');
    
        }
      
        next();
      });
  
export default router