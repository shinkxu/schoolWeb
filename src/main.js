import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TimeFormat from './utilities/timeFormat'
import axios from './utilities/custom-axios'
import VueAxios from 'vue-axios'
import Common from './components/common'
import MenuList from './components/menu'
import MenuTreeList from './components/menuTree'
import {
    Pagination,
    Notification,
    Message,
    MessageBox,
} from 'element-ui'
import '@babel/polyfill'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component(Common.name, Common)
Vue.component(MenuList.name, MenuList)
Vue.component(MenuTreeList.name, MenuTreeList)
Vue.component(Pagination.name, Pagination)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert

Vue.prototype.API_ROOT = (process.env.NODE_ENV === 'production') ?
    'http://47.105.130.130:8100/' : 'http://47.105.130.130:8100/'

router.beforeEach((to, from, next) => {
    window.document.title = window.localStorage.getItem('collegeName') || '' + '学院虚拟仿真实验教学中心'
    if (!to.query.id && (!window.localStorage.getItem('collegeId') || window.localStorage.getItem('collegeId') === 'undefined')) {
        window.location.href = 'http://47.105.130.130:8083/'
    }
    Vue.axios
        .get(Vue.prototype.API_ROOT + 'crmColleController/queryOne?collegeId=' + (to.query.id || window.localStorage.getItem('collegeId')))
        .then(res => {
            if (res.code === 200) {
                localStorage.setItem('collegeName', res.data && res.data.collegeName || '')
            }
        })
    next()
})

// 响应拦截
Vue.axios.interceptors.response.use((res) => {
    if (res && res.status.toString() === '500') {
        return Promise.reject(new Error('服务器错误'))
    } else if (res && res.status.toString() === '200') {
        if (res.data.code !== 200) {
            Notification({
                message: res.data && res.data.msg || '请求错误！'
            })
        }
        return Promise.resolve(res.data)
    } else {
        return Promise.reject(res)
    }
}, (err) => {
    if (err && err.code === 'ECONNABORTED') {
        return Promise.reject(err)
    } else if (err && err.message === 'Network Error') {
        Notification({
            message: err.data && err.data.msg || '网络异常，请检查网络'
        })
        return Promise.reject(err)
    } else {
        return Promise.reject(err)
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
