import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import( /* webpackChunkName: "about" */ './views/Home.vue')
const Center = () => import( /* webpackChunkName: "Center" */ './views/Center.vue')
const News = () => import( /* webpackChunkName: "News" */ './views/News.vue')
const Experiment = () => import( /* webpackChunkName: "Experiment" */ './views/Experiment.vue')
const Source = () => import( /* webpackChunkName: "Source" */ './views/Source.vue')
const Rules = () => import( /* webpackChunkName: "Rules" */ './views/Rules.vue')
const Equipment = () => import( /* webpackChunkName: "Equipment" */ './views/Equipment.vue')
const Result = () => import( /* webpackChunkName: "Result" */ './views/Result.vue')
const Teachers = () => import( /* webpackChunkName: "Teacher" */ './views/Teachers.vue')
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
            path: '/experiment',
            name: 'experiment',
            component: Experiment
        },
        {
            path: '/source',
            name: 'source',
            component: Source
        },
        {
            path: '/rules',
            name: 'rules',
            component: Rules
        },
        {
            path: '/equipment',
            name: 'equipment',
            component: Equipment
        },
        {
            path: '/result',
            name: 'result',
            component: Result
        },
        {
            path: '/teachers',
            name: 'teachers',
            component: Teachers
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
