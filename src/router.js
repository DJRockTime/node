import VueRouter from "vue-router";
import HomeContainer from './tabbar/HomeContainer.vue'
import MemberContainer from './tabbar/MemberContainer.vue'
import ShopcarContainer from './tabbar/ShopcarContainer.vue'
import SearchContainer from './tabbar/SearchContainer.vue'
import NewsList from './news/NewsList.vue'
import NewsInfo from './news/NewsInfo.vue'


let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo', component: NewsInfo }
        // { path: '/home/newsinfo:id', component: NewsInfo }
    ],
    linkActiveClass: 'mui-active'  // 覆盖默认的class router-link active
})


export default router
