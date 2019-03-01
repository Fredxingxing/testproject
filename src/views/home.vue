<template>
    <div class="home">
        <home-swiper :slide-array='homeSlide'></home-swiper>
        <news-list :new-array='homeList'></news-list>
    </div>
</template>

<script>
    import newsList from '../components/newsList'
    import homeSwiper from '../components/homeSwiper'
    import { mapState} from 'vuex'
    export default {
        name: "home",
        components: {
            newsList,
            homeSwiper
        },
        created(){
            this.$store.dispatch('getHomeInfo')
        },
        computed:{
            ...mapState({
                homeSlide:'homeSlide',
                homeList: 'homeList'
            }),
        }
    }
</script>

<style scoped>

</style>