import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie.vue'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHashHistory(),

    scrollBehavior() {
        return {top: 0}
    },

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/movie/:id',
            component: Movie
        },
        {
            path:'/:notFound(.*)',
            component: NotFound
        }
    ]
})