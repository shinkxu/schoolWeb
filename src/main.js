import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Common from './components/common'
import MenuList from './components/menu'
import '@babel/polyfill'
// todo: 如何全局引入公共的css
// import '../static/css/base.less'


Vue.config.productionTip = false
Vue.component(Common.name, Common)
Vue.component(MenuList.name, MenuList)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
