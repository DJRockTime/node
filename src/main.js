// 入口文件   
import Vue from 'vue'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './fontawesome/css/font-awesome.min.css'

// 倒入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/dist/css/mui.min.css'    
import './lib/mui/dist/css/icons-extra.css'


import router from'./router.js' 
import app from './app.vue'

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)




let em = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
