import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import( /* webpackChunkName: "about" */ './views/Home.vue')
const Center = () => import( /* webpackChunkName: "Center" */ './views/Center.vue')
const News = () => import( /* webpackChunkName: "News" */ './views/News.vue')
const NewsDetail = () => import( /* webpackChunkName: "News" */ './views/NewsDetail.vue')
const Experiment = () => import( /* webpackChunkName: "Experiment" */ './views/Experiment.vue')
const Source = () => import( /* webpackChunkName: "Source" */ './views/Source.vue')
const SourceDetails = () => import( /* webpackChunkName: "SourceDetails" */ './views/SourceDetails.vue')
const Rules = () => import( /* webpackChunkName: "Rules" */ './views/Rules.vue')
const Equipment = () => import( /* webpackChunkName: "Equipment" */ './views/Equipment.vue')
const ExperimentDetails = () => import( /* webpackChunkName: "Equipment" */ './views/ExperimentDetails.vue')
const Result = () => import( /* webpackChunkName: "Result" */ './views/Result.vue')
const ResultDetails = () => import( /* webpackChunkName: "Result" */ './views/ResultDetails.vue')
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
            path: '/newsdetail',
            name: 'newsdetail',
            component: NewsDetail
        },
        {
            path: '/experiment',
            name: 'experiment',
            component: Experiment
        },
        {
            path: '/experimentdetails',
            name: 'experimentDetails',
            component: ExperimentDetails
        },

        {
            path: '/source',
            name: 'source',
            component: Source
        },
        {
            path: '/sourcedetails',
            name: 'sourceDetails',
            component: SourceDetails
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
            path: '/resultdetails',
            name: 'resultDetails',
            component: ResultDetails
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
