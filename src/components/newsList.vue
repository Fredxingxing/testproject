<template>
    <div class="newsList">
        <div v-for="(item,index) in list">
          <div class="newsItem" @click="toDetail(index)">
            <img :src="item.cover" class="pic">
            <div class="title">{{item.title}}</div>
          </div>
        </div>
    </div>
</template>

<script>
    import { mapState} from 'vuex'
    export default {
        name: "news-list",
        props:{
          newArray:Array
        },
        computed:{
            list(){
                if(this.newArray.length > 0){
                    console.log(this.newArray)
                    return this.newArray
                }
            }
        },
        method:{
          toDetail(index){
          }
        }
    }
</script>

<style scoped>
.newsList{
 font-size: .32rem;
}
.newsItem{
    margin: .2rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
}
.pic{
    width: 2.5rem;
}
.title{
    width: 4rem;
    padding-right: .2rem;
    padding-left: .2rem;
    font-size: .36rem;
    text-align: left;
}
</style>