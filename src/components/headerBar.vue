<template>
    <div class="headerBar">
        <div class="imgBox">
            <img class="item" src="@/assets/logo.jpg">
        </div>
        <div class="routerBox">
            <router-link v-for="route in routerList" :to="route.path" :class="route.class" tag="div">
                {{route.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'headerBar',
      data(){
        return{
          routerList:[
            {
              name:'首页',
              path:'/',
              class:'routeItem',
            },
            {
              name:'部门',
              path:'/department',
              class:'routeItem',
            },
            {
              name:'动态（新闻）',
              path:'/news',
              class:'routeItem',
            },
            {
              name:'合作伙伴',
              path:'/partner',
              class:'routeItem',
            },
            {
              name:'关于',
              path:'/about',
              class:'routeItem',
            },
          ]
        }
      },
  };
</script>

<style lang="less" scoped>
    @media (min-width: 900px) {
       .headerBar{
         width: 100%;
         height:100px;
         position: fixed;
         top: 0;
         z-index: 999;
         display: flex;
         justify-content: space-between;
         align-items: center;
         background: #fff;
         box-shadow: 0px 1px 1px #aaa;
         border-bottom: 1px solid #d5d5d5;
           .imgBox{
               padding-left: 100px;
               .item{
                   height: 75px;
                   width: 75px;
               }
           }
           .routerBox{
               display: flex;
               justify-content: space-around;
               align-items: center;
               padding-right: 50px;
               .routeItem{
                   padding: 20px;
                   font-size: 22px;
                   cursor: pointer;
               }
               .routeItem:hover{
                   color:#DA251C;
                   transition: .5s;
               }
           }
       }
    }
</style>