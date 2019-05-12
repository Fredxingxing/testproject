import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js'
/***iview*/
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import './theme.less';
Vue.use(iView);
/****axios***/
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = ''

// import VueAwesomeSwiper from 'vue-awesome-swiper'
//
// // require styles
// import 'swiper/dist/css/swiper.css'
//
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
    router,
    store,
    Axios,
  render: h => h(App),
}).$mount('#app')
