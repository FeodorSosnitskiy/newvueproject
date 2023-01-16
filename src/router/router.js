import Main from '@/pages/Main' 
import PostsPage from '@/pages/PostsPage'
import About from '@/pages/About'
import PostIdPage from '@/pages/PostIdPage'
import {createRouter} from 'vue-router'
import { createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: Main    
    }, 
    {
        path: '/posts',
        component: PostsPage    
    },
    {
        path: '/about',
        component: About    
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
        name: 'PostIdPage',
        props: true  
    }
];

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL),
})

export default router; 