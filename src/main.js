import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js'
/***iview*/
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
/****axios***/
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = ''

new Vue({
    router,
    store,
    Axios,
  render: h => h(App),
}).$mount('#app')
