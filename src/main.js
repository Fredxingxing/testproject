import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js'

/****axios***/
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://192.168.89.72:8810/'

new Vue({
    router,
    store,
    Axios,
  render: h => h(App),
}).$mount('#app')
