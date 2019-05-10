<template>
    <div class="home">
        <div>
            <home-swiper :slideArray='swiperList' :words='words' />
        </div>
        <div>
            <div class="title">九大部门</div>
            <departmentList />
        </div>
    </div>
</template>

<script>
    import departmentList from './components/departmentList'
    import homeSwiper from '../../components/homeSwiper'
    // import { mapState} from 'vuex'
    export default {
        name: "home",
        data(){
          return{
           swiperList:[],
           words:'福建熹龙律师事务所位于中国福州，座落于桃岸柳津的西湖之畔，' +
           '与福建省住房和城乡建设厅、福建省知识产权局毗邻，地理环境优越，人文气息浓厚，' +
           '是经福建省司法厅批准设立的综合性大型律师事务所。'
        }},
        components: {
            // newsList,
            homeSwiper,
            departmentList
        },
        created(){
          for(let i=1; i<8;i++){
            const url = require(`@/assets/swiper/${i}.jpg`)
            this.swiperList.push({id:i,img:url})
          }
            // this.$store.dispatch('getHomeInfo')
        },
        computed:{
            // ...mapState({
            //     homeSlide:'homeSlide',
            //     homeList: 'homeList'
            // }),
        }
    }
</script>

<style lang="less" scoped>
    @media (min-width: 800px) {
        .home{
            padding-top: 2px;
            position: relative;
            .title{
                padding-top: 50px;
                font-size: 35px;
                font-weight: bold;
            }
        }
    }
</style>