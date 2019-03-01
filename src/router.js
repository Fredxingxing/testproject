import Vue from 'vue'
import Router from 'vue-router'
/****Home******/
import Home from './views/home'
/****listDetail****/
import listDetail from './views/homeListDetail'
import homeSwiperDetail from './views/homeSwiperDetail'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/swiperDetail',
            name: 'homeSwiperDetail',
            component: homeSwiperDetail
        },
        {
            path: '/listDetail',
            name: 'listDetail',
            component: listDetail
        },
    ]
})
export default router