import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // homeList:[],
        // homeSlide:[],
    },
    mutations: {
        // setHomeList(state,data){
        //     state.homeList = data
        // },
        // setHomeSlide(state,data){
        //     state.homeSlide = data
        // },
    },
    actions: {
        getHomeInfo(context){
            // axios.get('data').then(function (res) {
            //     let list = res.data.data.list
            //     let silde = res.data.data.slide
            //     context.commit('setHomeList', list);
            //     context.commit('setHomeSlide', silde);
            // })
        },

    }
})