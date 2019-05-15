import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import( /* webpackChunkName: "about" */ './views/Home.vue')
const Center = () => import( /* webpackChunkName: "Center" */ './views/Center.vue')
const News = () => import( /* webpackChunkName: "News" */ './views/News.vue')
const About = () => import( /* webpackChunkName: "about" */ './views/About.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/center',
            name: 'center',
            component: Center
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
