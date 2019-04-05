// 入口文件   
import Vue from 'vue'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './fontawesome/css/font-awesome.min.css'

// 倒入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import moment from 'moment'
Vue.filter('dataFormat', function (dataStr, pattern='YYYY-MM-DD HH:mm:ss') {
    moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = './root'

import './lib/mui/dist/css/mui.min.css'    
import './lib/mui/dist/css/icons-extra.css'


import router from'./router.js' 
import app from './app.vue'

import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)




let em = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
