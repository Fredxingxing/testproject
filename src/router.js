import Vue from 'vue'
import Router from 'vue-router'
/****Home首页******/
import Home from './views/Home/index'
/****about关于****/
import About from './views/About'
/****news新闻****/
import News from './views/News'
/****Partner合作伙伴****/
import Partner from './views/Partner'
/****Department部门****/
import Department from './views/Department'
// import listDetail from './views/homeListDetail'
// import homeSwiperDetail from './views/homeSwiperDetail'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/partner',
        name: 'Partner',
        component: Partner
      },
      {
        path: '/department',
        name: 'Department',
        component: Department
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/news',
        name: 'News',
        component: News
      },
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
export default router