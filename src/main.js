// 入口文件   
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import app from './app.vue'

import './lib/mui/dist/css/mui.min.css'


import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

let em = new Vue({
    el: '#app',
    render: c => c(app)
})
