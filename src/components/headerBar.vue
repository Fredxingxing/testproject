<template>
    <div class="headerBar">
        <div class="container">
          <div class="imgBox">
              <img class="item" src="@/assets/logo.jpg">
          </div>
          <div class="routerBox">
              <router-link v-for="route in routerList" :to="route.path" :class="route.class" tag="div" :key="route.name">
                  {{route.name}}
              </router-link>
          </div>
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
       .headerBar{
         width: 100%;
         height:80px;
         position: fixed;
         top: 0;
         z-index: 999;
         background: #fff;
         box-shadow: 0px 1px 1px 0 #eaeaea;
         .container{
           width:1200px;
           margin:auto;
           display: flex;
          justify-content: space-between;
          align-items: center;
         }
           .imgBox{
             line-height: 80px;
               .item{
                 vertical-align: middle;
                   height: 65px;
                   width: 65px;
               }
           }
           .routerBox{
               display: flex;
               justify-content: space-around;
               align-items: center;
               .routeItem{
                   padding: 0 20px;
                   font-size: 16px;
                   cursor: pointer;
               }
               .routeItem:hover{
                   color:#DA251C;
                   transition: .5s;
               }
           }
       }
</style>